'use strict';
/* Interfaz para niñas de ~6 años: iconos grandes, 1-2 palabras, voz en español.
   El detalle en texto (vacunas, registro diario) queda en «Para papás» dentro del diario. */

const $ = (s, el = document) => el.querySelector(s);
function setHTML(el, html) { if (el && el.__html !== html) { el.innerHTML = html; el.__html = html; } }

let root = emptyRoot();
let current = null;

const PLACE_UI = {
  casa: { icon: '🏠', name: 'Casa' }, vet: { icon: '🏥', name: 'Veterinaria' }, tienda: { icon: '🛒', name: 'Tienda' },
  escuela: { icon: '🎓', name: 'Escuela' }, bosque: { icon: '🌲', name: 'Bosque' }, parque: { icon: '🌳', name: 'Parque' }, lago: { icon: '🦆', name: 'Lago' },
};
for (const [id, u] of Object.entries(SPOT_UI)) PLACE_UI[id] = { icon: u.icon, name: u.name };   // lugares nuevos (js/extras.js)
const STAGE_ICON = { recien: '🐣', bebe: '🍼', cachorra: '🐶', joven: '🐕', adulta: '🎂' };

// La voz (speak) y los ladridos (dogSound) viven en js/voice.js y js/sounds.js, compartidos con el 3D.
const lunaSize = () => (current ? stageOf(current.pet.day).size : 2);

// ---------- Avisos visuales ----------
const notices = [];
function queueNotice(msg) { notices.push(msg); }
let toastTimer = 0;
function showToast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}
function flushNotices() {
  if (!notices.length || $('#toast').classList.contains('show') || $('#pop').classList.contains('show')) return;
  const msg = notices.shift();
  if (msg.startsWith('🏅')) { pop('🏅', '¡Sticker nuevo!'); speak('¡Sticker nuevo! ' + msg.slice(2)); }
  else showToast(msg);
}
let popTimer = 0;
// Icono gigante que aparece y se desvanece (feedback de cada acción)
function pop(icon, sub = '') {
  const el = $('#pop');
  el.innerHTML = `<span class="pi">${icon}</span>${sub ? `<span class="ps">${esc(sub)}</span>` : ''}`;
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  clearTimeout(popTimer);
  popTimer = setTimeout(() => el.classList.remove('show'), 1300);
}

// ---------- Ventana ----------
let winClose = null;
function openWin(html, onClose, cls = '') {
  const w = $('#win'), box = $('#win-box');
  box.className = 'win-box ' + cls;
  box.innerHTML = html;
  w.hidden = false;
  winClose = onClose || null;
  focusFirst();
}
function focusFirst() {
  const f = $('#win-box').querySelector('[autofocus], button:not([aria-disabled="true"]), button');
  if (f) f.focus({ preventScroll: true });
}
function closeWin(result) {
  const w = $('#win');
  if (w.hidden) return;
  w.hidden = true;
  $('#win-box').innerHTML = '';
  const cb = winClose; winClose = null;
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  if (cb) cb(result);
}
function showCard(html, btn, onGo, onCancel) {
  openWin(`${html}<div class="row-btns center"><button class="btn primary go" data-win="go" autofocus aria-label="Continuar">${btn || '▶'}</button></div>`,
    r => { const cb = r === 'go' || !onCancel ? onGo : onCancel; if (cb) cb(r); }, 'card');
}
function confirmWin(title, text, yes, danger) {
  return new Promise(res => {
    openWin(`<h2>${esc(title)}</h2><p>${esc(text)}</p><div class="row-btns"><button class="btn" data-win="no">✖</button>
      <button class="btn ${danger ? 'danger' : 'primary'}" data-win="yes" autofocus>${esc(yes)}</button></div>`, r => res(r === 'yes'), 'card');
  });
}

// ---------- Pantallas ----------
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === 'screen-' + id));
  if (id !== 'game') { current = null; root.activeId = null; state.mode = 'title'; saveRoot(); }
  if (id === 'profiles') renderProfiles();
  if (id === 'create') renderCreate();
}
function spriteImg(opts, scale = 4) {
  const s = dogSprite(opts);
  const c = mkCanvas(s.width * scale, s.height * scale), g = c.getContext('2d');
  g.imageSmoothingEnabled = false;
  g.drawImage(s, 0, 0, c.width, c.height);
  return `<img class="pix" src="${c.toDataURL()}" width="${c.width}" height="${c.height}" alt="">`;
}
function renderProfiles() {
  setHTML($('#title-dog'), spriteImg({ coat: 'dorado', size: 2, pose: 'stand', collar: true, acc: 'lazo' }, 5));
  setHTML($('#voice-slot'), voiceSettingsHTML());
  const list = $('#profile-list');
  if (!root.profiles.length) { setHTML(list, ''); return; }
  setHTML(list, root.profiles.map(pr => {
    const p = pr.pet, d = dayAt(p, now(p)), st = stageOf(d);
    return `<div class="slot">
      <button class="slot-play" data-open="${pr.id}" aria-label="Jugar con ${esc(pr.name)}">
        ${spriteImg({ coat: p.coat, size: st.size, pose: 'stand', collar: d >= 8, acc: p.acc.worn }, 3)}
        <span class="slot-name">${esc(pr.avatar)} ${esc(pr.name)}</span>
        <span class="slot-meta">${STAGE_ICON[st.id]} 🦴${p.bones} 🏅${p.milestones.length}${Cloud.linked(pr) ? ' ☁️' : ''}</span>
        <span class="slot-go">▶</span>
      </button>
      <button class="slot-del" data-cloud="${pr.id}" aria-label="${Cloud.linked(pr) ? 'En la nube' : 'Guardar en la nube'}: ${esc(pr.name)}">☁️</button>
      <button class="slot-del" data-del="${pr.id}" aria-label="Borrar partida de ${esc(pr.name)}">🗑️</button></div>`;
  }).join(''));
}
function renderCreate() {
  $('#create-form').reset();
  $('#f-avatars').innerHTML = AVATARS.map((a, i) => `<label class="choice"><input type="radio" name="avatar" value="${a}" ${i === 0 ? 'checked' : ''}><span>${a}</span></label>`).join('');
  $('#f-coats').innerHTML = Object.entries(COATS).map(([k, c], i) =>
    `<label class="choice coat" title="${c.name}"><input type="radio" name="coat" value="${k}" ${i === 0 ? 'checked' : ''} aria-label="${c.name}"><span>${spriteImg({ coat: k, size: 2, pose: 'stand', collar: true }, 3)}</span></label>`).join('');
  speak('¿Cómo te llamas? Elige tu cara y el color de Luna.');
  setTimeout(() => $('#f-name').focus(), 30);
}
function createProfile(ev) {
  ev.preventDefault();
  const f = new FormData(ev.target);
  const name = String(f.get('name') || '').trim().slice(0, 16);
  if (!name) { $('#f-name').focus(); pop('✏️'); speak('Escribe tu nombre'); return; }
  const pr = { id: uid(), name, avatar: f.get('avatar') || AVATARS[0], createdAt: Date.now(), pet: newPet(f.get('coat') || 'dorado') };
  root.profiles.push(pr);
  saveRoot();
  openProfile(pr.id, true);
}
async function deleteProfile(id) {
  const pr = root.profiles.find(x => x.id === id);
  if (!pr) return;
  const msg = Cloud.linked(pr) ? `${pr.name}: se quita de este aparato. Sigue guardada en la nube (☁️ ${pr.cloud.user}).` : `${pr.name}: se borrará su Luna para siempre.`;
  if (!await confirmWin('🗑️ ¿Borrar?', msg, '🗑️ Borrar', true)) return;
  root.profiles = root.profiles.filter(x => x.id !== id);
  saveRoot(); renderProfiles();
}

function openProfile(id, isNew) {
  current = root.profiles.find(x => x.id === id);
  if (!current) return;
  root.activeId = id;
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === 'screen-game'));
  resizeView();
  const p = current.pet;
  const gapH = (now(p) - p.lastTick) / HOUR;
  captured = [];
  simulate(p, now(p));
  captured = null;
  initWorld();
  enterWorld(p);
  saveRoot();
  refreshHUD();
  state.mode = 'world';
  const st = stageOf(p.day);
  if (isNew) {
    state.mode = 'panel';
    showCard(`<div class="result">
      <div class="big-dog">${spriteImg({ coat: p.coat, size: st.size, pose: 'sleep', eyesClosed: true }, 6)}</div>
      <h2>¡Hola, soy Luna! 🐣</h2>
      <div class="howto">
        <div><span>⬅️⬆️➡️⬇️</span><i>➜</i><span>🐾</span></div>
        <div><span>Ⓐ</span><i>➜</i><span>🚪</span></div>
        <div><span>🍖💧😴</span><i>➜</i><span>💖</span></div>
      </div></div>`, '', () => { state.mode = 'world'; refreshGuide(); });
    speak(`¡Hola ${current.name}! Soy Luna. Acabo de nacer. ¡Cuídame mucho!`);
    setTimeout(() => dogSound('yip', 0), 2600);
  } else if (gapH >= 1) {
    state.mode = 'panel';
    const needs = needsOf(p).slice(0, 4);
    showCard(`<div class="result">
      <div class="big-dog">${spriteImg({ coat: p.coat, size: st.size, pose: 'jump', collar: p.day >= 8, acc: p.acc.worn }, 5)}</div>
      <h2>¡Te extrañé! 👋</h2>
      ${needs.length ? `<div class="need-row">${needs.map(n => `<span>${n.icon}</span>`).join('')}</div>` : '<div class="need-row"><span>💖</span></div>'}
      </div>`, '', () => { state.mode = 'world'; });
    speak(`¡${current.name}, te extrañé muchísimo!`);
    setTimeout(() => dogSound(needs.length ? 'sad' : 'happy', st.size), 1700);
  }
}

// ---------- HUD ----------
const MOOD_FACE = { feliz: '😄', normal: '🙂', triste: '😢', enferma: '🤒', dormida: '😴' };
function refreshHUD() {
  if (!current) return;
  const p = current.pet;
  const bars = STAT_INFO.map(i => {
    const v = Math.round(p.stats[i.key]);
    return `<div class="hb ${v < 25 ? 'low' : ''}" title="${i.label}"><span aria-hidden="true">${i.icon}</span><i role="progressbar" aria-label="${i.label}" aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100"><b style="width:${v}%;background:${i.color}"></b></i></div>`;
  }).join('');
  setHTML($('#hud'), `
    <div class="hud-left">
      <button class="hbtn" data-nav="profiles" aria-label="Salir al menú">🏠</button>
      <span class="face" title="Ánimo de Luna" aria-label="Ánimo">${MOOD_FACE[moodOf(p)]}</span>
    </div>
    <div class="hud-bars">${bars}</div>
    <div class="hud-right">
      <span class="chip" title="Huesos">🦴 ${p.bones}</span>
      <span class="chip" title="Semana">${STAGE_ICON[stageOf(p.day).id]} ${p.day}</span>
      <span class="chip" title="Racha">🔥 ${p.streak}</span>
      <button class="hbtn" data-map aria-label="Mapa">🗺️</button>
      <button class="hbtn" data-diary aria-label="Diario">📖</button>
    </div>`);
  document.documentElement.style.setProperty('--hud-h', $('#hud').offsetHeight + 'px');
  updatePrompt();
  if (typeof refreshGuide === 'function') refreshGuide();
}
function updatePrompt() {
  const el = $('#prompt');
  if (!current || state.mode !== 'world') { el.hidden = true; return; }
  const p = current.pet;
  let html = '';
  if (p.asleep) html = `<button class="go-btn" data-wake aria-label="Despertar a Luna">💤 ➜ ⏰</button>`;
  else if (world.near) {
    const pl = world.near, ui = PLACE_UI[pl.id];
    const hint = typeof goalNow !== 'undefined' && goalNow && goalNow.place === pl.id ? ' hint' : '';
    html = placeLocked(p, pl)
      ? `<button class="go-btn locked" data-locked="${pl.id}" aria-label="${ui.name}: cerrado. Faltan ${pl.minDay - p.day} días">🔒 ${ui.icon} <small>⏳${pl.minDay - p.day}</small></button>`
      : `<button class="go-btn${hint}" data-place="${pl.id}" aria-label="Entrar: ${ui.name}">Ⓐ ${ui.icon} <small>${ui.name}</small></button>`;
  } else if (world.nearX) html = `<button class="go-btn ${world.nearX.warn ? 'locked' : ''}" data-near aria-label="${esc(world.nearX.label)}">Ⓐ ${world.nearX.icon} <small>${esc(world.nearX.label)}</small></button>`;
  el.hidden = !html;
  setHTML(el, html);
}

// ---------- Acciones ----------
function doFx(fx, kind, msg, icon, word) {
  const p = current.pet, e = today(p);
  applyFx(p, fx);
  if (kind === 'meal') e.meals++;
  if (kind === 'water') e.water++;
  if (kind === 'treat') e.treats++;
  if (kind === 'play') e.play++;
  if (kind === 'care') e.care++;
  addEvent(p, icon, msg);   // el texto completo va al registro para papás
  const gains = Object.entries(fx).filter(([, v]) => v > 0).map(([k]) => STAT_ICON[k]).join('');
  pop(icon, gains ? '+' + gains : '');
  if (word) speak(word);
  if (['meal', 'water', 'treat', 'play'].includes(kind)) setTimeout(() => dogSound('happy', lunaSize()), 700);
  sfx('coin');
  saveRoot(); refreshHUD();
}
function wakeUp() {
  const p = current.pet;
  p.asleep = false;
  if (p.stats.energia < 60) { p.stats.felicidad = clamp(p.stats.felicidad - 6, 0, 100); addEvent(p, '⏰', 'Despertaste a Luna antes de tiempo.'); pop('😫'); speak('¡Uy, tenía sueño!'); dogSound('sad', lunaSize()); }
  else { addEvent(p, '⏰', 'Luna despertó con energía.'); pop('⏰'); speak('¡Buenos días!'); setTimeout(() => dogSound('bark', lunaSize()), 900); }
  saveRoot(); refreshHUD();
}

// ---------- Lugares ----------
let openPlaceId = null;
function openPlace(id) {
  const p = current.pet, pl = PLACES.find(x => x.id === id);
  if (!pl) return;
  if (placeLocked(p, pl)) { showLockedCard(pl); return; }
  openPlaceId = id;
  state.mode = 'panel';
  speak(PLACE_UI[id].name);
  setTimeout(() => dogSound(['triste', 'enferma'].includes(moodOf(p)) ? 'sad' : 'bark', lunaSize(), 0.6), 700);
  openWin(placeHTML(id), () => { openPlaceId = null; if (state.mode === 'panel') state.mode = 'world'; updatePrompt(); guideEvent('close:place'); }, 'place place-' + id);
  guideEvent('open:' + id);
}
function refreshPlace() {
  if (!openPlaceId || $('#win').hidden) return;
  const keep = document.activeElement?.dataset?.do;
  $('#win-box').innerHTML = placeHTML(openPlaceId);
  const again = keep && $(`#win-box [data-do="${keep}"]`);
  (again || $('#win-box button'))?.focus({ preventScroll: true });
  hintInPanel();
}

// Botón grande: icono + 1-2 palabras; si no se puede, insignia con el motivo (y se dice en voz alta)
function opt(doId, icon, label, o = {}) {
  const off = !!o.why;
  const say = off ? `${label}. ${o.why}` : label;
  return `<button class="opt ${off ? 'off' : ''}" data-do="${doId}" data-say="${esc(say)}" ${off ? 'aria-disabled="true"' : ''} aria-label="${esc(say)}">
    <span class="oi" aria-hidden="true">${icon}</span><span class="on">${esc(label)}</span>
    ${o.fx ? `<span class="ofx" aria-hidden="true">${o.fx}</span>` : ''}${off ? `<span class="badge" aria-hidden="true">${o.badge || '✋'}</span>` : o.count != null ? `<span class="badge cnt" aria-hidden="true">${o.count}</span>` : ''}</button>`;
}
const NO = {
  sleep: { badge: '💤', why: 'Está dormida' }, tired: { badge: '😴', why: 'Está cansada' }, sick: { badge: '🤒', why: 'Está enfermita' },
  full: { badge: '😋', why: 'Está llena' }, wet: { badge: '💧', why: 'No tiene sed' }, hungry: { badge: '🍖', why: 'Tiene hambre' },
  wait: { badge: '⏳', why: 'Otro día' }, money: { badge: '🦴', why: 'Faltan huesos' }, have: { badge: '✔', why: 'Ya lo tienes' },
  done: { badge: '✔', why: 'Ya está' }, none: { badge: '✋', why: 'No hay' },
};
const lockFor = w => ({ badge: '🔒', why: `Cuando Luna crezca (semana ${w})` });
function canPlay(p, minE = 15) {
  if (p.asleep) return NO.sleep;
  if (p.sick && !p.sick.treated) return NO.sick;
  if (p.stats.energia < minE) return NO.tired;
  if (p.stats.saciedad < 10) return NO.hungry;
  return null;
}
const groupH = (icon, label) => `<h3 class="gh" aria-label="${label}"><span aria-hidden="true">${icon}</span></h3>`;
function placeHead(id) {
  const p = current.pet, st = stageOf(p.day), ui = PLACE_UI[id];
  return `<div class="ph">
    <button class="ph-dog" data-do="pet" data-say="Mimos" aria-label="Dar mimos a Luna">${spriteImg({ coat: p.coat, size: st.size, pose: p.asleep ? 'sleep' : 'stand', eyesClosed: p.day < 2 || p.asleep, collar: p.day >= 8, acc: p.acc.worn, sad: moodOf(p) === 'triste' || moodOf(p) === 'enferma' }, 3)}</button>
    <h2><span aria-hidden="true">${ui.icon}</span> ${ui.name}</h2>
    <button class="btn help" data-help="${id}" aria-label="¿Qué hago aquí?">❓</button>
    <button class="btn close" data-win="close" aria-label="Salir">✖</button></div>`;
}
function vacWarn(p) { return p.vaccines.puppy ? '' : `<div class="alert" data-say="Cuidado: Luna todavía no tiene su primera vacuna" role="note">⚠️ 💉❓</div>`; }

function placeHTML(id) {
  const p = current.pet, s = p.stats, d = p.day, e = today(p);
  const sleeping = p.asleep ? NO.sleep : null;
  let h = placeHead(id);
  if (id === 'vet' && p.sick) h += `<div class="alert" data-say="Luna está enfermita">🤒 ${p.sick.treated ? '💊✔ 🛏️🍖💧' : ''}</div>`;
  if (id === 'casa' && p.mess) h += `<div class="alert">💩 ×${p.mess}</div>`;
  if (['casa', 'vet', 'parque', 'lago'].includes(id)) {   // mismas acciones que en el 3D (js/extras.js)
    if (id === 'parque' || id === 'lago') h += vacWarn(p);
    let grp = null;
    h += id === 'casa' ? '' : '<div class="opts big">';
    for (const x of placeActions(id, p)) {
      if (id === 'casa' && x.group !== grp) { h += (grp ? '</div>' : '') + groupH(x.group, x.group) + '<div class="opts">'; grp = x.group; }
      h += opt(x.id, x.icon, x.label, { fx: x.fx, count: x.count, ...(x.badge ? { badge: x.badge, why: x.why } : {}) });
    }
    h += '</div>';
    if (id === 'vet') {
      h += '<div class="vax" aria-label="Vacunas">';
      for (const v of VACCINES) { const stv = vaccineStatus(p, v); h += `<span class="vx ${stv}" title="${esc(v.name)}">${stv === 'pendiente' ? '⏳' : '💉'}<b>${stv === 'aplicada' ? '✔' : stv === 'atrasada' ? '❗' : stv === 'disponible' ? '👉' : ''}</b></span>`; }
      h += '</div>';
    }
    return h;
  }
  if (id === 'tienda') {
    h += `<div class="wallet">🦴 ${p.bones}</div><div class="opts">`;
    for (const it of SHOP) {
      const owned = (it.acc && p.acc.owned.includes(it.id)) || (it.once && p.items[it.id]);
      h += opt('buy:' + it.id, it.icon, it.short, { fx: `🦴${it.price}`, ...(owned ? NO.have : p.bones < it.price ? NO.money : {}) });
    }
    return h + '</div>';
  }
  if (id === 'escuela') {
    const busy = e.sessions >= MAX_SESSIONS ? NO.wait : canPlay(p);
    h += '<div class="opts">';
    for (const t of TRICKS) h += opt('trick:' + t.id, t.icon, t.short, { fx: starBar(p.tricks[t.id] || 0), ...(d < t.min ? lockFor(t.min) : busy || {}) });
    return h + '</div>';
  }
  if (id === 'bosque') {
    h += vacWarn(p) + '<div class="opts big">';
    const icons = ['🌲', '⛰️', '💎'];
    for (const L of LEVEL_DEFS) {
      const rec = p.levels[L.id];
      const prevDone = L.id === 1 || (p.levels[L.id - 1] && p.levels[L.id - 1].done);
      const lock = d < L.minDay ? lockFor(L.minDay) : !prevDone ? { badge: '🔒', why: 'Primero termina el anterior' } : null;
      h += opt('level:' + L.id, icons[L.id - 1], String(L.id), { fx: rec && rec.done ? '⭐' : '', ...(lock || canPlay(p) || {}) });
    }
    return h + '</div>';
  }
  if (SPOT_UI[id]) {   // lugares nuevos: mismas acciones que en el 3D
    const info = spotInfo(id, p);
    if (info) h += `<div class="wallet">${info}</div>`;
    h += (id === 'perros' ? vacWarn(p) : '') + '<div class="opts big">';
    for (const [doId, icon, label, badge, fx] of spotActions(id, p, !p.asleep)) h += opt(doId, icon, label, { fx, ...(badge ? { badge, why: SPOT_WHY[badge] || 'Ahora no' } : {}) });
    return h + '</div>';
  }
  return h;
}

const SPOT_WHY = { '💤': 'Está dormida', '🐶': 'Luna no está contigo', '⏳': 'Otro día', '🦴': 'Faltan huesos', '✔': 'Ya está', '💧': 'No tiene sed', '⚡': 'No está cansada', '🔒': 'Primero habla con el guardabosques', '🛒': 'Compra galletas en la pastelería', '😴': 'Está cansada', '🤒': 'Está enfermita', '🍖': 'Tiene hambre' };
// Acción de un lugar nuevo (reglas en js/extras.js)
function spotDo2(act) {
  const p = current.pet, id = openPlaceId, r = spotDo(id, act, p);
  if (!r) return;
  guideEvent('do:sp:' + act);
  saveRoot();
  const card = (html, say, after) => { openWin(html + '<div class="row-btns center"><button class="btn primary go" data-win="ok" autofocus aria-label="Listo">👍</button></div>', () => { openPlace(id); if (after) after(); }, 'card'); if (say) speak(say); };
  if (r.special === 'story') return card(`<div class="result"><h2>📖</h2><div class="howto"><div><span>${r.icon}</span></div></div><p class="fact">${esc(r.text)}</p>${r.bone ? '<div class="gains"><span>🦴 +1</span></div>' : ''}</div>`, 'Dato perruno: ' + r.text);
  if (r.special === 'quiz') {
    quiz2 = r.q; speak(r.q.q);
    openWin(`<div class="result"><h2>❓</h2><p class="fact">${esc(r.q.q)}</p><div class="quiz">${r.q.a.slice().sort(() => Math.random() - 0.5).map(([t, ok]) => `<button class="btn primary quiz-opt" data-quiz="${ok ? 1 : 0}">${esc(t)}</button>`).join('')}</div></div>`, () => openPlace(id), 'card');
    return;
  }
  if (r.special === 'talk' || r.special === 'bag') { spawnValley2(p, true); refreshHUD(); return card(r.html, r.say); }
  if (r.special === 'cookies' || r.special === 'treatShelter') {
    if (r.special === 'treatShelter') town2.shelter.forEach(s => { s.happyT = 2.5; });
    pop(r.icon, r.sub); speak(r.say); sfx('coin'); refreshHUD(); refreshPlace();
    if (r.quest) setTimeout(() => { closeWin(); showQuest2(r.quest); }, 1200);
    return;
  }
  if (r.start) speak(r.start);
  if (id === 'refugio') town2.shelter.forEach(s => { s.happyT = 2.5; });
  if (r.special2 === 'friends') town2.dogs.filter(d => d.def.park).forEach(d => { d.happyT = 2.5; });
  applyFx(p, r.fx);
  const e = today(p);
  if (r.kind === 'meal') e.meals++; if (r.kind === 'water') e.water++; if (r.kind === 'play') e.play++; if (r.kind === 'care') e.care++;
  addEvent(p, r.icon, r.msg);
  const gains = Object.entries(r.fx).filter(([, v]) => v > 0).map(([k]) => STAT_ICON[k]).join('');
  pop(r.icon, (gains ? '+' + gains : '') + (r.extra ? ' ' + r.extra : ''));
  setTimeout(() => { speak(r.word); dogSound('happy', lunaSize()); }, r.start ? 1600 : 0);
  sfx('coin'); saveRoot(); refreshHUD(); refreshPlace();
}
let quiz2 = null;
function quizAnswer2(ok) {
  const p = current.pet, r = answerQuiz(p, quiz2, ok);
  pop(r.icon, r.sub); speak(r.say); if (ok) sfx('coin');
  saveRoot(); refreshHUD(); closeWin('ok');
}

function placeDo(cmd) {
  const p = current.pet, e = today(p), d = p.day;
  const [k, arg] = cmd.split(':');
  if (k === 'sp') return spotDo2(arg);
  const r = placeEffect(cmd, p);   // efecto común (js/extras.js)
  if (r.fx) {
    applyFx(p, r.fx); countKind(p, r.kind); addEvent(p, r.icon, r.msg);
    const gains = Object.entries(r.fx).filter(([, v]) => v > 0).map(([kk]) => STAT_ICON[kk]).join('');
    pop(r.icon, gains ? '+' + gains : ''); if (r.word) speak(r.word);
    if (r.sad) dogSound('sad', lunaSize()); else if (['meal', 'water', 'treat', 'play'].includes(r.kind)) setTimeout(() => dogSound('happy', lunaSize()), 700);
    sfx('coin'); saveRoot(); refreshHUD();
    guideEvent('do:' + k); refreshPlace(); return;
  }
  if (r.special === 'wear') { saveRoot(); pop(r.icon); speak(r.word); guideEvent('do:' + k); refreshPlace(); return; }
  switch (k) {
    case 'potty': closeWin(); startTrain('potty'); return;
    case 'sleep': p.asleep = true; addEvent(p, '🛏️', 'Acostaste a Luna en su camita.'); pop('🛏️', '💤'); speak('Buenas noches, Luna'); saveRoot(); refreshHUD(); break;
    case 'wake': wakeUp(); break;
    case 'bath': closeWin(); startBath(); return;
    case 'none': return;
    case 'checkup':
      if (!e.checkup) { e.checkup = true; addEvent(p, '🩺', 'Revisión general en la veterinaria.'); saveRoot(); }
      openWin(checkupHTML(p), () => openPlace('vet'), 'card'); return;
    case 'buy': {
      const it = SHOP.find(x => x.id === arg);
      if (p.bones < it.price) return;
      p.bones -= it.price;
      if (it.acc) p.acc.owned.push(it.id);
      else if (it.id === 'premio') p.items.premio += 3;
      else if (it.id === 'champu') p.items.champu += 3;
      else p.items[it.id] = true;
      addEvent(p, '🛒', `Compraste: ${it.name}.`);
      pop(it.icon, '✔'); speak(it.short); sfx('coin'); saveRoot(); refreshHUD();
      break;
    }
    case 'trick': closeWin(); startTrain(arg); return;
    case 'fetch': closeWin(); startFetch(); return;
    case 'agility': closeWin(); startAgility(); return;
    case 'duckfeed': closeWin(); startDucks(); return;
    case 'memory': closeWin(); startMemory(); return;
    case 'hide': closeWin(); state.mode = 'panel';
      showCard(introHTML('🙈', [['🐶', '🌳❓'], ['🔥', '👀 🐶'], ['❄️', '↩️']]), '', () => { state.mode = 'world'; if (!startHide()) updatePrompt(); }, () => { state.mode = 'world'; updatePrompt(); });
      speak('¡Escondite! Cierra los ojos y cuenta... ¡Luna se va a esconder!'); return;
    case 'level': closeWin(); startPlatform(Number(arg)); return;
  }
  guideEvent('do:' + k);
  refreshPlace();
}

// Revisión: tarjeta visual (peso con barra, vacunas en iconos)
function checkupHTML(p) {
  const t = targetWeight(p.day), diff = (p.weight - t) / t;
  const face = diff < -0.12 ? '🍖❗' : diff > 0.12 ? '🏃' : '👍';
  const applied = VACCINES.filter(v => p.vaccines[v.id]).length;
  speak(diff < -0.12 ? 'Luna necesita comer un poco más' : diff > 0.12 ? 'Luna necesita más ejercicio' : '¡Luna está muy sana!');
  return `<div class="result"><h2>🩺</h2>
    <div class="checkrow"><span>⚖️</span><b>${fmtWeight(p.weight)}</b><span>${face}</span></div>
    <div class="checkrow"><span>💉</span><b>${'✔'.repeat(applied)}${'·'.repeat(VACCINES.length - applied)}</b></div>
    <div class="checkrow"><span>🐛</span><b>${dewormDue(p) ? '❗' : '✔'}</b></div>
    ${p.sick ? `<div class="checkrow"><span>🤒</span><b>${p.sick.treated ? '💊✔' : '💊❗'}</b></div>` : ''}
    </div><div class="row-btns center"><button class="btn primary go" data-win="ok" autofocus aria-label="Listo">👍</button></div>`;
}

// ---------- Diario (pegatinas + sección para papás) ----------
function openDiary() {
  const p = current.pet, e = today(p), st = stageOf(p.day);
  state.mode = 'panel';
  speak('Diario de Luna');
  const r = routineFor(p, p.day, e);
  let h = `<div class="ph"><div class="ph-dog">${spriteImg({ coat: p.coat, size: st.size, pose: 'stand', collar: p.day >= 8, acc: p.acc.worn }, 3)}</div>
    <h2>📖 Luna</h2><button class="btn close" data-win="close" aria-label="Cerrar">✖</button></div>`;
  // etapas como camino de crecimiento
  h += `<div class="grow" aria-label="Etapa: ${st.name}">${STAGES.map(s2 => `<span class="${s2.id === st.id ? 'now' : p.day > s2.to ? 'past' : ''}" title="${s2.name}">${STAGE_ICON[s2.id]}</span>`).join('<i>›</i>')}</div>`;
  h += `<div class="weekbox"><span>🗓️ ${p.day}</span><span>⚖️ ${fmtWeight(p.weight)}</span><span>🔥 ${p.streak}</span>${p.rpg && p.rpg.met ? `<span>${RANKS[rankOf(p.rpg.xp)]}</span>` : ''}</div>`;
  // rutina de hoy como estrellas
  h += groupH('⭐', 'Hoy') + `<div class="today">${r.map(x => { const ok = x.have >= x.need; return `<button class="tday ${ok ? 'ok' : ''}" data-say="${esc(x.label)}" aria-label="${esc(x.label)} ${ok ? 'hecho' : 'pendiente'}"><span>${x.icon}</span><b>${ok ? '⭐' : `${Math.min(x.have, x.need)}/${x.need}`}</b></button>`; }).join('')}</div>`;
  // pegatinas
  const all = allStickers();   // lista común (js/extras.js)
  const got = new Set(p.milestones.map(m => m.key));
  h += groupH('🏅', 'Pegatinas') + `<div class="stickers">${all.map(m => got.has(m.key)
    ? `<button class="stk" data-say="${esc(m.text)}" aria-label="${esc(m.text)}">${m.icon}</button>`
    : `<span class="stk off" aria-label="Pegatina sin conseguir">❔</span>`).join('')}</div>`;
  h += parentsHTML(p, e, current.name);
  openWin(h, () => { state.mode = 'world'; updatePrompt(); }, 'place diary');
}

// ---------- Exportar / importar ----------
function exportSave() {
  saveRoot();
  const blob = new Blob([Cloud.exportJSON(root)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `luna-partidas-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  pop('💾', '✔');
}
async function importSave(ev) {
  const file = ev.target.files[0];
  ev.target.value = '';
  if (!file) return;
  try {
    const data = migrate(JSON.parse(await file.text()));
    if (!validRoot(data)) throw new Error('formato');
    if (!await confirmWin('💾 ¿Importar?', `${data.profiles.length} partida(s). Reemplaza las de este navegador.`, '💾 Importar')) return;
    data.profiles.forEach(pr => normalizePet(pr.pet));
    root = data; root.activeId = null;
    saveRoot(); renderProfiles(); pop('💾', '✔');
  } catch (e) { pop('⚠️'); }
}

// ---------- Mapa del pueblo (mismo dibujo que en el 3D, js/extras.js) ----------
function openMap2() {
  const p = current.pet, K = world.kid, L = world.luna, T2 = v => v / TILE;
  state.mode = 'panel';
  openWin(mapCardHTML() + '<div class="row-btns center"><button class="btn primary go" data-win="ok" autofocus aria-label="Cerrar mapa">👍</button></div>', () => { state.mode = 'world'; updatePrompt(); }, 'card map');
  const gp = goalNow && goalPos(goalNow);
  const data = {
    b: { x0: 0, y0: 0, x1: MAP_W, y1: MAP_H },
    roads: MAP_ROADS2,
    water: [{ x: 39.5, y: 19, rx: 6.5, ry: 4.6 }, { x0: VALLEY2.x0, y0: VALLEY2.riverY, x1: MAP_W, y1: VALLEY2.riverY + 2 }, { x: 21.5, y: 20.5, rx: 1.2, ry: 1.2 }],
    zones: [{ x0: 0, y0: 0, x1: 15, y1: 9, c: '#6fb35a' }, { x0: 16, y0: 17, x1: 28, y1: 27, c: '#b6e39a' }, { x0: DOGPARK2.x0, y0: DOGPARK2.y0, x1: DOGPARK2.x1 + 1, y1: DOGPARK2.y1 + 1, c: '#c8eea8' }, { x0: VALLEY2.x0, y0: VALLEY2.y0, x1: MAP_W, y1: MAP_H, c: '#7fc46a' }],
    places: PLACES.map(pl => ({ id: pl.id, x: pl.rect ? pl.rect[0] + pl.rect[2] / 2 : pl.trigger[0] + 0.5, y: pl.rect ? pl.rect[1] + pl.rect[3] / 2 : pl.trigger[1] })),
    me: { x: T2(K.x), y: T2(K.y) }, luna: p.asleep ? null : { x: T2(L.x), y: T2(L.y) },
    dogs: town2.dogs.map(dg => ({ x: T2(dg.x), y: T2(dg.y), mood: dg.def.mood })),
    items: town2.items.map(v => ({ x: T2(v.x), y: T2(v.y), icon: VALLEY_ITEMS[v.item].icon })),
    goal: gp && !gp.pl ? { x: T2(gp.x), y: T2(gp.y) } : null, goalPlace: gp && gp.pl ? gp.pl.id : null,
  };
  const cv = $('#townmap'), hits = drawTownMap(cv, data, p);
  speak(MAP_SAY);
  cv.addEventListener('click', ev => {
    const r = cv.getBoundingClientRect(), x = (ev.clientX - r.left) * cv.width / r.width, y = (ev.clientY - r.top) * cv.height / r.height;
    const h = hits.find(q => Math.hypot(q.x - x, q.y - y) < q.r);
    if (!h) return;
    const pl = PLACES.find(q => q.id === h.id);
    closeWin('ok');
    if (world.near && world.near.id === pl.id) openPlace(pl.id);
    else if (goTo(pl.trigger[0], pl.trigger[1], pl.id)) { sfx('tick'); speak(PLACE_UI[pl.id].name); }
  });
}
