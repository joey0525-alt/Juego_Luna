'use strict';
/* Modelo de Luna: necesidades, paso del tiempo, días, veterinario, guardado versionado. */

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const rand = (a, b) => a + Math.random() * (b - a);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const uid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36);

const now = p => Date.now() + (p.offset || 0);
const dayAt = (p, t) => Math.floor((t - p.bornAt) / DAY) + 1;
// Perrita mediana: ~0,5 kg a 2 semanas, ~3 kg a 2 meses, ~14 kg al año.
const targetWeight = d => 0.35 + 14.65 * Math.pow(1 - Math.exp(-(d - 1) / 18), 1.6);
const fmtWeight = w => (w < 1 ? `${Math.round(w * 1000)} g` : `${w.toFixed(1).replace('.', ',')} kg`);
const fmtTime = t => new Date(t).toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' });
const fmtDate = t => new Date(t).toLocaleDateString('es', { weekday: 'short', day: 'numeric', month: 'short' });
function ageText(d) {
  if (d === 1) return 'su primera semana';
  if (d < 9) return `${d} semanas`;
  if (d < 52) return `${Math.floor(d / 4.345)} meses`;
  const y = Math.floor(d / 52);
  return y === 1 ? '1 año' : `${y} años`;
}
const moodEmoji = v => (v > 75 ? '😄' : v > 50 ? '🙂' : v > 30 ? '😐' : '😢');

// ====================== Guardado ======================
const emptyRoot = () => ({ version: SAVE_VERSION, profiles: [], activeId: null });
const MIGRATIONS = {
  // v1 (juego de pantalla única) -> v2 (aventura): campos nuevos con valores por defecto.
  1: d => { d.profiles.forEach(pr => normalizePet(pr.pet)); return d; },
};
function migrate(d) {
  let v = parseInt(d.version, 10) || 1;
  if (v > SAVE_VERSION) throw new Error('Guardado de una versión más nueva');
  while (v < SAVE_VERSION) { d = MIGRATIONS[v](d); v++; d.version = v; }
  return d;
}
const validRoot = d => d && Array.isArray(d.profiles) && d.profiles.every(p => p && p.id && p.pet && p.pet.stats);

let lastSaveAt = 0;
function loadRoot() {
  for (const key of [SAVE_KEY, SAVE_KEY + '.bak']) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const data = migrate(JSON.parse(raw));
      if (!validRoot(data)) continue;
      data.profiles.forEach(pr => normalizePet(pr.pet));
      if (key !== SAVE_KEY) queueNotice('Se recuperó la copia de seguridad anterior del progreso.');
      return data;
    } catch (e) { /* probar la siguiente copia */ }
  }
  return emptyRoot();
}
function saveRoot() {
  try {
    const json = JSON.stringify(root);
    const prev = localStorage.getItem(SAVE_KEY);
    if (prev && prev !== json) localStorage.setItem(SAVE_KEY + '.bak', prev);
    localStorage.setItem(SAVE_KEY, json);
    lastSaveAt = Date.now();
    if (typeof Cloud !== 'undefined' && !Cloud.quiet) Cloud.onSave();
  } catch (e) {
    showToast('⚠️ No se pudo guardar el progreso en este navegador.');
  }
}
function normalizePet(p) {
  const def = newPetData(p.coat || 'dorado', p.bornAt || Date.now());
  for (const k of Object.keys(def)) if (p[k] === undefined) p[k] = def[k];
  for (const k of Object.keys(def.stats)) if (typeof p.stats[k] !== 'number') p.stats[k] = def.stats[k];
  for (const k of Object.keys(def.items)) if (p.items[k] === undefined) p.items[k] = def.items[k];
}

// ====================== Modelo ======================
function newPetData(coat, t) {
  return {
    name: 'Luna', coat, bornAt: t, lastTick: t, offset: 0, day: 1, seq: 0,
    stats: { saciedad: 70, hidratacion: 70, energia: 70, felicidad: 70, higiene: 85, salud: 90 },
    asleep: false, sick: null, weight: 0.35, mess: 0, pottyTimer: 0, potty: 0,
    vaccines: {}, deworm: [], tricks: {}, lastDone: {}, streak: 0, bestStreak: 0,
    milestones: [], log: {},
    // aventura
    bones: 10, items: { premio: 0, champu: 0, mordedor: false }, acc: { owned: [], worn: null },
    levels: {}, mapBones: { day: 0, taken: [] }, pos: null, treasure: null,
  };
}
function newPet(coat) {
  const p = newPetData(coat, Date.now());
  startDay(p, 1);
  return p;
}
function ensureLog(p, d) {
  return p.log[d] || (p.log[d] = {
    meals: 0, water: 0, play: 0, care: 0, train: 0, walk: 0, treats: 0, sessions: 0, naps: 0,
    walkTiles: 0, pottyOk: 0, accidents: 0, checkup: false, ducks: false, hours: 0, felSum: 0, sacSum: 0,
    events: [], weightStart: p.weight, weight: null, done: false,
  });
}
const today = p => ensureLog(p, p.day);

let captured = null; // eventos que ocurren mientras el jugador no está
function addEvent(p, icon, text, at = now(p)) {
  const e = ensureLog(p, p.day);
  const ev = { id: ++p.seq, t: at, icon, text };
  e.events.push(ev);
  if (e.events.length > 50) e.events.shift();
  if (captured) captured.push(ev);
}
function addMilestone(p, key, icon, text, at) {
  if (p.milestones.some(m => m.key === key)) return;
  p.milestones.push({ key, day: p.day, icon, text });
  addEvent(p, icon, text, at);
  if (!captured) queueNotice(`🏅 ${text}`);
}

function vaccineStatus(p, v) {
  if (p.vaccines[v.id]) return 'aplicada';
  if (p.day < v.day) return 'pendiente';
  if (p.day <= v.to) return 'disponible';
  return 'atrasada';
}
const overdueVaccines = p => VACCINES.filter(v => vaccineStatus(p, v) === 'atrasada');
const walkUnlocked = p => CORE_VACCINES.every(id => p.vaccines[id]);
function dewormDue(p) {
  const last = p.deworm.length ? Math.max(...p.deworm) : 0;
  const due = DEWORM.filter(x => x <= p.day && x > last);
  if (!due.length) return null;
  return { day: due[due.length - 1], overdue: p.day - due[0] > 2 };
}
const nextDeworm = p => DEWORM.find(x => x > p.day);

function routineFor(p, d, e) {
  const st = stageOf(d);
  const r = [{ icon: '🍖', label: 'Comidas', have: e.meals, need: st.meals }];
  if (d >= 4) r.push({ icon: '💧', label: 'Agua fresca', have: e.water, need: 2 });
  r.push({ icon: '🎾', label: 'Juego y mimos', have: e.play, need: 2 });
  r.push({ icon: '🫧', label: 'Higiene', have: e.care, need: 1 });
  if (d >= 8) r.push({ icon: '🎓', label: 'Entrenamiento', have: e.train, need: 1 });
  if (d >= 3) r.push({ icon: '🗺️', label: `Explorar (${WALK_GOAL} pasos)`, have: e.walk, need: 1 });
  return r;
}
// ¿Se puede avanzar ahora esta tarea de la rutina? Comer y Agua se bloquean cuando Luna está llena / sin sed,
// así que la guía no debe pedirlas en ese momento (si no, la tarea queda "pendiente" sin forma de cumplirla).
function routineReady(p, icon) {
  if (icon === '🍖') return p.stats.saciedad < 90;
  if (icon === '💧') return p.stats.hidratacion < 92;
  return true;
}
// Tareas de hoy que faltan y se pueden hacer ya; `waiting` = faltan pero hay que esperar (p. ej. está llena).
function routinePending(p) {
  const pend = routineFor(p, p.day, ensureLog(p, p.day)).filter(x => x.have < x.need);
  return { next: pend.find(x => routineReady(p, x.icon)) || null, waiting: pend.find(x => !routineReady(p, x.icon)) || null };
}
const WAIT_SAY = {
  '🍖': { icon: '😋', say: 'Luna ya comió y está llena. Dale otra comida más tarde.' },
  '💧': { icon: '💧', say: 'Luna ya bebió agua. Más tarde le das otra vez.' },
};

// ---------- Paso de días ----------
function startDay(p, d, at) {
  const e = ensureLog(p, d);
  e.weightStart = p.weight;
  const st = stageOf(d);
  if (d > 1 && st.from === d) addEvent(p, '🌱', `Luna entra en la etapa «${st.name}».`, at);
  const m = DAY_MILESTONES[d];
  if (m) addMilestone(p, 'day' + d, m[0], m[1], at);
  VACCINES.filter(v => v.day === d && !p.vaccines[v.id]).forEach(v => addEvent(p, '💉', `Hoy le toca la vacuna: ${v.name}.`, at));
  if (DEWORM.includes(d)) addEvent(p, '💊', 'Hoy le toca desparasitación.', at);
}
function finalizeDay(p, d) {
  const e = ensureLog(p, d);
  const nut = e.hours > 0 ? e.sacSum / e.hours : p.stats.saciedad;
  const mealsOk = Math.min(1, e.meals / stageOf(d).meals);
  const factor = clamp(0.25 + 0.5 * clamp(nut / 65, 0, 1) + 0.25 * mealsOk, 0, 1);
  const tNow = targetWeight(d), tNext = targetWeight(d + 1);
  let w = p.weight + Math.max(0, tNext - tNow) * factor + (tNext - p.weight) * 0.12 * factor;
  if (factor < 0.4) w -= p.weight * 0.01;
  w += e.treats * 0.004 * (1 + d / 20);
  p.weight = Math.max(0.3, Math.round(w * 1000) / 1000);
  e.weight = p.weight;
  e.mood = e.hours > 0 ? e.felSum / e.hours : p.stats.felicidad;
  e.done = routineFor(p, d, e).every(x => x.have >= x.need);
  p.streak = e.done ? p.streak + 1 : 0;
  p.bestStreak = Math.max(p.bestStreak, p.streak);
}
function rollDays(p, newDay, at) {
  while (p.day < newDay) {
    finalizeDay(p, p.day);
    p.day++;
    startDay(p, p.day, at);
  }
}

// ---------- Simulación (pasos de 15 min) ----------
function step(p, t, dt) {
  const d = dayAt(p, t);
  if (d > p.day) rollDays(p, d, t);
  const st = stageOf(p.day), s = p.stats, e = ensureLog(p, p.day);
  const parasites = dewormDue(p)?.overdue ? 1.25 : 1;

  if (p.asleep) {
    s.energia += 15 * dt;
    s.saciedad -= 2 * st.hunger * parasites * dt;
    s.hidratacion -= 2 * dt;
    s.felicidad -= 0.5 * dt;
    s.higiene -= 0.5 * dt;
    if (s.energia >= 100) { s.energia = 100; p.asleep = false; }
  } else {
    s.energia -= st.tire * dt;
    s.saciedad -= 4.5 * st.hunger * parasites * dt;
    s.hidratacion -= 5 * dt;
    s.felicidad -= 2.5 * dt;
    s.higiene -= 1.5 * dt;
    if (s.saciedad < 25) s.felicidad -= 2 * dt;
    if (s.hidratacion < 25) s.felicidad -= 2 * dt;
    if (s.higiene < 30) s.felicidad -= 1 * dt;
    if (p.mess) { s.higiene -= p.mess * dt; s.felicidad -= 0.5 * dt; }
    if (s.energia <= 12) { p.asleep = true; addEvent(p, '💤', 'Luna se quedó dormida de cansancio.', t); }
    if (p.day >= 3) {
      p.pottyTimer += dt;
      if (p.pottyTimer >= 5) {
        p.pottyTimer = 0;
        if (Math.random() * 100 < p.potty) {
          e.pottyOk++;
          addEvent(p, '🌟', 'Luna hizo sus necesidades en su lugar. ¡Bien hecho!', t);
        } else if (p.mess < 3) {
          p.mess++; e.accidents++;
          addEvent(p, '💩', 'Luna tuvo un accidente en casa.', t);
        }
      }
    }
  }

  const bad = (s.saciedad < 15) + (s.hidratacion < 15) + (s.higiene < 15);
  if (bad) s.salud -= bad * 2.5 * dt;
  else if (!p.sick && s.saciedad > 40 && s.hidratacion > 40) s.salud += 1.5 * dt;

  if (p.sick) {
    if (p.sick.treated) {
      s.salud += 4 * dt;
      if (s.salud >= 75) { p.sick = null; addEvent(p, '💪', '¡Luna se recuperó por completo!', t); }
    } else { s.salud -= 1 * dt; s.felicidad -= 1.5 * dt; }
  } else {
    const over = overdueVaccines(p).length;
    if (s.salud < 30) makeSick(p, 'defensas bajas por falta de cuidados', t);
    else if (over && Math.random() < 0.004 * over * dt) makeSick(p, 'una infección (le faltan vacunas)', t);
  }

  for (const k of Object.keys(s)) s[k] = clamp(s[k], 0, 100);
  s.salud = Math.max(5, s.salud);
  e.hours += dt; e.felSum += s.felicidad * dt; e.sacSum += s.saciedad * dt;
}
function makeSick(p, cause, t) {
  if (p.sick) return;
  p.sick = { since: t || now(p), treated: false, cause };
  addEvent(p, '🤒', `Luna se enfermó: ${cause}. Llévala a la veterinaria.`, t);
}

function simulate(p, to) {
  let t = p.lastTick;
  if (to - t > MAX_CATCHUP_H * HOUR) t = to - MAX_CATCHUP_H * HOUR;
  while (t < to) {
    const dtMs = Math.min(STEP_H * HOUR, to - t);
    t += dtMs;
    step(p, t, dtMs / HOUR);
  }
  const d = dayAt(p, to);
  if (d > p.day) rollDays(p, d, to);
  p.lastTick = to;
}

function moodOf(p) {
  const s = p.stats;
  if (p.sick) return 'enferma';
  if (p.asleep) return 'dormida';
  if (Math.min(s.saciedad, s.hidratacion, s.higiene, s.felicidad) < 25) return 'triste';
  if (s.felicidad > 70) return 'feliz';
  return 'normal';
}

// Necesidades + en qué lugar del mapa se resuelven
function needsOf(p) {
  const s = p.stats, n = [];
  if (p.sick) n.push({ icon: '🤒', level: 'bad', place: 'vet', text: p.sick.treated ? 'En tratamiento: comida, agua y descanso.' : 'Está enferma: ve a la Veterinaria.' });
  if (s.saciedad < 35) n.push({ icon: '🍖', level: s.saciedad < 15 ? 'bad' : 'warn', place: 'casa', text: 'Tiene hambre: ve a Casa.' });
  if (s.hidratacion < 35) n.push({ icon: '💧', level: s.hidratacion < 15 ? 'bad' : 'warn', place: 'casa', text: p.day < 4 ? 'Necesita leche: ve a Casa.' : 'Tiene sed: Casa o el bebedero del Lago.' });
  if (s.energia < 20 && !p.asleep) n.push({ icon: '😴', level: 'warn', place: 'casa', text: 'Está cansada: siesta en Casa.' });
  if (s.higiene < 35) n.push({ icon: '🫧', level: s.higiene < 15 ? 'bad' : 'warn', place: 'casa', text: 'Necesita limpieza: ve a Casa.' });
  if (s.felicidad < 35) n.push({ icon: '🎾', level: 'warn', place: 'parque', text: 'Está aburrida: juega en el Parque o el Bosque.' });
  if (p.mess) n.push({ icon: '💩', level: 'warn', place: 'casa', text: `Hay ${p.mess} accidente${p.mess > 1 ? 's' : ''} en Casa.` });
  const vac = VACCINES.filter(v => ['disponible', 'atrasada'].includes(vaccineStatus(p, v)));
  if (vac.length) n.push({ icon: '💉', level: vac.some(v => vaccineStatus(p, v) === 'atrasada') ? 'bad' : 'warn', place: 'vet', text: `Vacuna pendiente: ${vac[0].name}.` });
  const dw = dewormDue(p);
  if (dw) n.push({ icon: '💊', level: dw.overdue ? 'bad' : 'warn', place: 'vet', text: 'Toca desparasitación.' });
  if (p.day >= 6 && p.day - (p.lastDone.unas || 0) >= 7) n.push({ icon: '✂️', level: 'info', place: 'casa', text: 'Sus uñas están largas.' });
  return n;
}

function applyFx(p, fx) {
  const parts = [];
  for (const [k, v] of Object.entries(fx)) {
    const before = p.stats[k];
    p.stats[k] = clamp(before + v, 0, 100);
    const real = Math.round(p.stats[k] - before);
    if (real > 0) parts.push(`+${real}${STAT_ICON[k]}`);
  }
  return parts.join(' ');
}

// Puede jugar/hacer ejercicio ahora? Devuelve motivo si no.
function cantExercise(p, minEnergy = 15) {
  if (p.asleep) return 'Luna está dormida.';
  if (p.sick && !p.sick.treated) return 'Está enferma: primero a la Veterinaria.';
  if (p.stats.energia < minEnergy) return 'Está muy cansada: llévala a Casa a dormir una siesta.';
  if (p.stats.saciedad < 10) return 'Tiene demasiada hambre para jugar.';
  return null;
}
// Riesgo al salir sin la primera vacuna
function outdoorRisk(p) {
  if (p.vaccines.puppy || p.sick) return;
  if (Math.random() < 0.08) makeSick(p, 'un virus del exterior (aún no tiene su primera vacuna)');
}
