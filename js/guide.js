'use strict';
/* Guía «Pío» 🐦: dice qué hacer ahora (voz + iconos), dibuja una flecha hacia el lugar en el mapa,
   resalta el botón correcto dentro de cada lugar, enseña el tutorial inicial y avisa de novedades
   (lugares nuevos, vacunas, enfermedad, Luna creció). Todo con muy poco texto. */

const TUT = [
  { id: 'walk', icon: '⬅️➡️', say: '¡Hola! Soy Pío, tu amigo. Usa las flechas para caminar con Luna. ¡Ella te sigue!' },
  { id: 'home', place: 'casa', icon: '🍼', say: 'Luna tiene hambre. Llévala a su casa: acércate a la puerta y toca A.' },
  { id: 'eat', place: 'casa', doId: 'eat', icon: '🍼', say: 'Toca el dibujo de comer para darle su comida.' },
  { id: 'pet', place: 'casa', doId: 'pet', icon: '🤗', say: '¡Muy bien! Ahora dale mimos.' },
  { id: 'exit', icon: '✖', sel: '[data-win="close"]', say: 'Ahora sal de la casa tocando la equis.' },
  { id: 'bones', icon: '🦴', say: 'Busca huesos escondidos por el mapa. ¡Con ellos compras cosas en la tienda!' },
];
const PLACE_HELP = {
  casa: 'Esta es la casa de Luna. Aquí come, bebe, duerme y se baña. También pueden jugar a la memoria. Toca un dibujo para cuidarla.',
  vet: 'Esta es la veterinaria. Cuando una jeringa salta, toca Vacuna. La pastilla quita los bichitos. Si Luna está enfermita, toca Curar.',
  tienda: 'Esta es la tienda. Con los huesos que encuentras compras premios, juguetes y ropa para Luna.',
  escuela: 'Esta es la escuela. Elige un truco, mira las flechas y repítelas. ¡Así Luna aprende!',
  parque: 'Este es el parque. Juega a la pelota, haz una carrera de obstáculos o juega al escondite con Luna.',
  bosque: 'Este es el bosque. Lleva a Luna saltando hasta la casita y recoge huesos por el camino.',
  lago: 'Este es el lago. Dale de comer a los patos, míralos nadar y bebe agua fresca del bebedero.',
};
for (const [id, u] of Object.entries(SPOT_UI)) PLACE_HELP[id] = u.help;   // lugares nuevos (js/extras.js)

function tut(p) {
  if (!p.tut) {
    const veteran = p.day > 1 || Object.values(p.log).some(l => l.meals > 0);
    p.tut = { step: veteran ? TUT.length : 0, seen: {}, visited: {}, focus: null, moved: 0 };
    // partidas que ya venían jugando: no anunciar lo que ya estaba abierto
    if (veteran) for (const pl of PLACES) if (p.day >= pl.minDay) p.tut.seen['open-' + pl.id] = true;
    p.tut.seen['stage-' + stageOf(p.day).id] = true;
  }
  return p.tut;
}

// ---------- ¿Qué hacer ahora? ----------
const goalForNeed = needGoal;   // js/extras.js (igual en el 3D)
function nextGoal(p) {
  const t = tut(p);
  if (t.step < TUT.length) return { ...TUT[t.step], key: 'tut-' + t.step, tutorial: true };
  if (world.hide) return { icon: '🙈', key: 'hide', say: '¿Dónde está Luna? Camina y mira: si sale fuego, ¡estás muy cerca!', fixed: true };
  if (p.asleep) return softGoal(p, true) || { icon: '💤', key: 'sleep', say: 'Luna está durmiendo. Déjala descansar, o despiértala con A.', fixed: true };
  const need = careGoal(p, isSkipped);   // mismas prioridades que el 3D (js/extras.js)
  if (need) return need;
  if (t.focus && !t.visited[t.focus] && !isSkipped('focus-' + t.focus)) { const pl = PLACE_UI[t.focus]; return { icon: pl.icon, place: t.focus, key: 'focus-' + t.focus, say: `¡${pl.name} está abierto! Sigue la flecha.` }; }
  const rt = routineNext(p, isSkipped);
  if (rt) return rt;
  return recoverSay(p, softGoal(p, false) || { icon: '🍄', key: 'explore', place: 'aventura', say: '¡Vamos a explorar el Valle Aventura!' });
}

// Ideas para los tiempos muertos (las mismas que en el 3D, js/extras.js). Siempre hay alguna:
// si Pío ya la recordó dos veces sin que pasara nada, o tocas «Ahora no», propone la siguiente.
const skipUntil = new Map(), skipIdeas = new Set();
let skipDay = 0;
const isSkipped = key => (skipUntil.get(key.replace(/^zz-/, '')) || 0) > Date.now();
function softGoal(p, sleeping) {
  if (skipDay !== p.day) { skipDay = p.day; skipIdeas.clear(); }
  const list = [];
  if (world.bones.length) list.push({ icon: '🦴', key: 'bones', say: 'todavía quedan huesos escondidos. ¡Búscalos!' });
  if (world.treasure) list.push({ icon: '💰', key: 'treasure', say: 'Luna huele un tesoro escondido. Camina por el mapa: si sale fuego, ¡estás muy cerca!' });
  list.push(...funIdeas(p, sleeping, inValley2(world.kid.x, world.kid.y)));
  if (p.rpg && p.rpg.respawn) { p.rpg.respawn = false; spawnValley2(p, true); }
  const k = sleeping ? 'zz-' : '';
  for (const x of list) { x.key = k + x.key; x.say = ideaSay(x.say, sleeping); }
  let pick = list.find(x => !skipIdeas.has(x.key) && !isSkipped(x.key));
  if (!pick) { skipIdeas.clear(); pick = list.find(x => !isSkipped(x.key)) || list[0]; }
  return pick;
}
function skipGoal() {
  const g = goalNow;
  if (!g || g.fixed || g.tutorial) return;
  skipUntil.set(g.key.replace(/^zz-/, ''), Date.now() + 10 * 60 * 1000);
  world.route = null; sfx('tick');
  refreshGuide();
  speak('¡Está bien, después! ' + (goalNow && goalNow !== g ? goalNow.say : ''));
  lastSpokenKey = goalNow ? goalNow.key : lastSpokenKey; $('#guide').classList.remove('new');
}
// Tiempos muertos: tras 20 s sin tocar nada, Pío recuerda qué hacer (máximo 2 veces por idea, luego otra)
let lastInputT = performance.now(), nudgeT = 0, nudgeKey = '', nudgeN = 0;
window.addEventListener('pointerdown', () => { lastInputT = performance.now(); }, true);
window.addEventListener('keydown', () => { lastInputT = performance.now(); }, true);
function idleNudge() {
  const t = performance.now();
  if (!goalNow || state.mode !== 'world' || world.route || !$('#win').hidden) return;
  if (t - lastInputT < 20000 || t - nudgeT < 30000 || goalNow.key === 'sleep') return;
  if (goalNow.key !== nudgeKey) { nudgeKey = goalNow.key; nudgeN = 0; }
  const soft = /^(zz-)?(bones|treasure|fun-|again-|shop|wait-|quest-|valley|explore|focus-)/.test(goalNow.key);
  if (nudgeN >= 2) {
    if (!soft) { if (t - nudgeT < 90000) return; nudgeN = 0; }
    else { skipIdeas.add(goalNow.key); refreshGuide(); nudgeKey = goalNow.key; nudgeN = 0; }
  }
  nudgeN++; nudgeT = t;
  sayGuide();
  $('#guide').classList.add('new');
  pop(goalNow.icon, '🐦');
}
setInterval(() => { if (current && state.mode === 'world') { refreshGuide(); idleNudge(); } }, 1000);
// Posición del objetivo de Pío en el mapa (lugar, perro, objeto del valle…)
function goalPos(g) {
  if (!g) return null;
  if (g.place) { const pl = PLACES.find(x => x.id === g.place); return pl && { x: pl.trigger[0] * TILE + 8, y: pl.trigger[1] * TILE + 8, pl }; }
  if (g.target) return target2(current.pet, g.target);
  if (/bones$/.test(g.key) && world.bones.length) {
    const K = world.kid; let best = null, bd = Infinity;
    for (const b of world.bones) { const d = Math.hypot(b.tx * TILE + 8 - K.x, b.ty * TILE + 8 - K.y); if (d < bd) { bd = d; best = b; } }
    return { x: best.tx * TILE + 8, y: best.ty * TILE + 8 };
  }
  return null;
}
// Tocar a Pío: habla y el avatar camina solo hasta el objetivo
function guideGo() {
  const g = goalNow;
  if (!g || state.mode !== 'world' || world.hide) return;
  const pos = goalPos(g);
  if (!pos) return;
  if (pos.pl) { if (world.near && world.near.id === pos.pl.id) openPlace(pos.pl.id); else goTo(pos.pl.trigger[0], pos.pl.trigger[1], pos.pl.id); return; }
  goTo(Math.floor(pos.x / TILE), Math.floor((pos.y - 2) / TILE), null);
}

// ---------- Burbuja de Pío ----------
let goalNow = null, lastSpokenKey = '', speakTimer = 0;
function refreshGuide() {
  const el = $('#guide');
  if (!el) return;
  if (!current || state.mode === 'title') { el.hidden = true; return; }
  const p = current.pet;
  const g = nextGoal(p);
  goalNow = g;
  const pl = g.place ? PLACE_UI[g.place] : null;
  el.hidden = false;
  const sk = $('#guideSkip'); if (sk) sk.hidden = !!g.fixed || !!g.tutorial || state.mode !== 'world';
  setHTML(el, `<span class="g-bird" aria-hidden="true">🐦</span><span class="g-bub"><b>${g.icon}</b>${pl ? `<i>➜</i><b>${pl.icon}</b>` : ''}</span>`);
  el.setAttribute('aria-label', 'Pío dice: ' + g.say);
  el.classList.toggle('new', g.key !== lastSpokenKey);
  if (g.key !== lastSpokenKey && (state.mode === 'world' || state.mode === 'panel')) {
    clearTimeout(speakTimer);
    const key = g.key;
    speakTimer = setTimeout(() => {
      const cardOpen = !$('#win').hidden && $('#win-box').classList.contains('card');
      if (goalNow && goalNow.key === key && (state.mode === 'world' || state.mode === 'panel') && !cardOpen) {
        lastSpokenKey = key; speak(goalNow.say); el.classList.remove('new');
      }
    }, g.tutorial ? 900 : 2600);
  }
  hintInPanel();
}
function sayGuide() { if (goalNow) { lastSpokenKey = goalNow.key; speak(goalNow.say); $('#guide').classList.remove('new'); } }

// Resalta (brilla + 👆) el botón que conviene tocar dentro del lugar abierto
function hintInPanel() {
  const box = $('#win-box');
  if (!box || $('#win').hidden) return;
  box.querySelectorAll('.hint').forEach(b => b.classList.remove('hint'));
  const g = goalNow;
  if (!g) return;
  let target = null;
  if (g.sel) target = box.querySelector(g.sel);
  else if (g.doId && (!g.place || g.place === openPlaceId)) {
    target = g.doId.endsWith(':') ? box.querySelector(`[data-do^="${g.doId}"]:not([aria-disabled="true"])`) : box.querySelector(`[data-do="${g.doId}"]`);
  }
  if (target) target.classList.add('hint');
}

// ---------- Eventos del tutorial ----------
function guideEvent(ev) {
  if (!current) return;
  const p = current.pet, t = tut(p);
  if (ev.startsWith('open:')) t.visited[ev.slice(5)] = true;
  if (t.step >= TUT.length) { refreshGuide(); return; }
  const step = TUT[t.step].id;
  const done = (step === 'walk' && ev === 'walk' && ++t.moved >= 3) || (step === 'home' && ev === 'open:casa') ||
    (step === 'eat' && ev === 'do:eat') || (step === 'pet' && ev === 'do:pet') || (step === 'exit' && ev === 'close:place') || (step === 'bones' && ev === 'bone');
  if (done) {
    t.step++;
    if (t.step >= TUT.length) { addMilestone(p, 'tutorial', '🐦', '¡Terminaste las lecciones de Pío!'); setTimeout(() => { pop('🐦', '⭐⭐⭐'); speak('¡Lo hiciste genial! Ahora ya sabes cuidar a Luna. Yo te aviso cuando necesite algo.'); }, 1200); }
    else setTimeout(() => pop('⭐'), 300);
    saveRoot();
  }
  refreshGuide();
}

// ---------- Avisos importantes (tarjetas) ----------
function guideCheck() {
  if (!current || state.mode !== 'world' || !$('#win').hidden) return;
  const p = current.pet, t = tut(p);
  if (t.step < 2) return;                                     // no interrumpir el comienzo del tutorial
  const st = stageOf(p.day);
  const card = (key, html, say, after) => {
    t.seen[key] = true; saveRoot();
    state.mode = 'panel';
    showCard(html, '', () => { state.mode = 'world'; if (after) after(); refreshGuide(); updatePrompt(); });
    setTimeout(() => speak(say), 300);
    return true;
  };
  if (!t.seen.v2 && t.step >= TUT.length) {   // novedades para quien ya jugaba (igual que en el 3D)
    for (const pl of PLACES) if (pl.spot && p.day >= pl.minDay) t.seen['open-' + pl.id] = true;
    t.focus = 'aventura'; t.visited.aventura = false;
    return card('v2', NEWS_HTML, NEWS_SAY);
  }
  if (!t.seen['stage-' + st.id]) {
    return card('stage-' + st.id, `<div class="result"><h2>🌱</h2><div class="big-dog">${spriteImg({ coat: p.coat, size: st.size, pose: 'jump', collar: p.day >= 8, acc: p.acc.worn }, 5)}</div>
      <div class="grow">${STAGES.map(s2 => `<span class="${s2.id === st.id ? 'now' : p.day > s2.to ? 'past' : ''}">${STAGE_ICON[s2.id]}</span>`).join('<i>›</i>')}</div></div>`,
      `¡Luna creció! Ahora es ${st.name.toLowerCase()}.`, () => dogSound('happy', st.size));
  }
  for (const pl of PLACES) {
    if (pl.minDay > 1 && p.day >= pl.minDay && !t.seen['open-' + pl.id]) {
      const ui = PLACE_UI[pl.id];
      t.focus = pl.id;
      return card('open-' + pl.id, `<div class="result"><h2>🎉</h2><div class="unlock"><span>🔓</span><span>${ui.icon}</span></div><h2>${ui.name}</h2>
        <div class="howto"><div><span>🐦</span><i>➜</i><span>⬇️ ${ui.icon}</span></div></div></div>`,
        `¡Se abrió ${['escuela', 'tienda', 'peluqueria'].includes(pl.id) ? 'la' : 'el'} ${ui.name}! Sigue la flecha amarilla para llegar. ${PLACE_HELP[pl.id]}`);
    }
  }
  const due = VACCINES.find(v => ['disponible', 'atrasada'].includes(vaccineStatus(p, v)));
  if (due && !t.seen['vac-' + due.id]) {
    t.focus = 'vet'; t.visited.vet = false;
    return card('vac-' + due.id, `<div class="result"><h2>💉</h2><div class="howto"><div><span>💉</span><i>➜</i><span>🏥</span></div><div><span>🏥</span><i>➜</i><span>👆 💉</span></div></div></div>`,
      'Hoy le toca una vacuna a Luna, para que no se enferme. Ve a la veterinaria y toca Vacuna. ¡Es un pinchacito rápido!');
  }
  if (p.sick && !p.sick.treated && !t.seen['sick-' + p.sick.since]) {
    return card('sick-' + p.sick.since, `<div class="result"><h2>🤒</h2><div class="big-dog">${spriteImg({ coat: p.coat, size: st.size, pose: 'stand', sad: true, collar: p.day >= 8 }, 5)}</div>
      <div class="howto"><div><span>🤒</span><i>➜</i><span>🏥 💊</span></div></div></div>`,
      'Luna está enfermita. Llévala a la veterinaria y toca Curar. Después dale comida, agua y que descanse.', () => dogSound('sad', st.size));
  }
  if (p.bones >= 6 && !t.seen.shop) {
    t.focus = 'tienda'; t.visited.tienda = false;
    return card('shop', `<div class="result"><h2>🛒</h2><div class="howto"><div><span>🦴 ${p.bones}</span><i>➜</i><span>🎀🧸🦴</span></div></div></div>`,
      '¡Tienes muchos huesos! Ve a la tienda a comprarle algo bonito a Luna.');
  }
  return false;
}

// Lugar cerrado: explica cuándo se abre, con lunas = días que faltan
function showLockedCard(pl) {
  const p = current.pet, ui = PLACE_UI[pl.id], left = pl.minDay - p.day;
  state.mode = 'panel';
  showCard(`<div class="result"><div class="unlock"><span>🔒</span><span>${ui.icon}</span></div><h2>${ui.name}</h2>
    <div class="moons" aria-label="Faltan ${left} días">${'🌙'.repeat(Math.min(left, 10))}</div>
    <div class="howto"><div><span>${STAGE_ICON[stageOf(p.day).id]}</span><i>➜</i><span>${STAGE_ICON[stageOf(pl.minDay).id]}</span></div></div></div>`, '', () => { state.mode = 'world'; updatePrompt(); });
  speak(`${ui.name} se abre cuando Luna sea más grande. Faltan ${left} ${left === 1 ? 'día' : 'días'}. ¡Cuídala mucho y vuelve mañana!`);
}

// ---------- Flecha guía en el mapa ----------
function drawGuideArrow(ctx) {
  if (!goalNow || state.mode !== 'world' || world.route) return;
  const pos = goalPos(goalNow);
  if (!pos || /bones$/.test(goalNow.key)) return;
  const pl = pos.pl;
  if (pl && world.near && world.near.id === pl.id) return;
  if (!pl && Math.hypot(pos.x - world.kid.x, pos.y - world.kid.y) < 18) return;
  const { w, h } = viewSize();
  const tx = pos.x - world.cam.x, ty = pos.y - 8 - world.cam.y;
  const t = world.t;
  const inView = tx > 12 && tx < w - 12 && ty > 34 && ty < h - 12;
  if (inView) {
    const by = Math.round(ty - 26 + Math.sin(t * 6) * 4);
    bigArrow(ctx, Math.round(tx), by, Math.PI / 2);
  } else {
    const cx = w / 2, cy = h / 2;
    const ang = Math.atan2(ty - cy, tx - cx);
    const r = Math.min(w, h) / 2 - 22;
    const ex = clamp(cx + Math.cos(ang) * r * (w / Math.min(w, h)), 18, w - 18), ey = clamp(cy + Math.sin(ang) * r, 30, h - 18);
    const pulse = Math.sin(t * 6) * 3;
    bigArrow(ctx, Math.round(ex + Math.cos(ang) * pulse), Math.round(ey + Math.sin(ang) * pulse), ang);
    emojiBubble(ctx, Math.round(ex - Math.cos(ang) * 20), Math.round(ey - Math.sin(ang) * 20 - 9), pl ? PLACE_UI[pl.id].icon : goalNow.icon);
  }
}
function bigArrow(ctx, x, y, ang) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
  const shape = (s, col) => { ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(10 + s, 0); ctx.lineTo(-2 - s, -9 - s); ctx.lineTo(-2 - s, -4); ctx.lineTo(-10 - s, -4); ctx.lineTo(-10 - s, 4); ctx.lineTo(-2 - s, 4); ctx.lineTo(-2 - s, 9 + s); ctx.closePath(); ctx.fill(); };
  shape(2, OUTLINE); shape(0, '#ffd23f');
  ctx.restore();
}
// Burbuja de pensamiento sobre Luna con lo que necesita
function drawThought(ctx, x, y) {
  if (!current) return;
  const p = current.pet;
  if (p.asleep || state.mode !== 'world') return;
  const n = needsOf(p).find(q => q.level !== 'info');
  if (!n || Math.floor(world.t / 2) % 3 === 0) return;
  emojiBubble(ctx, Math.round(x + 10), Math.round(y - 40), n.icon);
}
