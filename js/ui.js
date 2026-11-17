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
      <span class="chip" title="Racha">🔥 ${p.streak}</span>
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
  }
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
  if (id === 'casa') {
    const f = foodFor(d);
    if (p.mess) h += `<div class="alert">💩 ×${p.mess}</div>`;
    h += groupH('🍽️', 'Comer') + '<div class="opts">';
    h += opt('eat', f.icon, 'Comer', { fx: '🍖', ...(sleeping || (s.saciedad >= 90 ? NO.full : {})) });
    h += d >= 4 ? opt('water', '💧', 'Agua', { fx: '💧', ...(sleeping || (s.hidratacion >= 92 ? NO.wet : {})) }) : '';
    h += opt('treat', '🦴', 'Premio', { fx: '💖', count: p.items.premio, ...(sleeping || (!p.items.premio ? { badge: '🛒', why: 'Cómpralos en la tienda' } : e.treats >= 3 ? NO.wait : {})) });
    h += '</div>' + groupH('💖', 'Cariño') + '<div class="opts">';
    h += opt('pet', '🤗', 'Mimos', { fx: '💖' });
    h += opt('memory', '🃏', 'Memoria', { fx: '💖🦴', ...(sleeping || {}) });
    if (p.items.mordedor) h += opt('chew', '🧸', 'Mordedor', { fx: '💖', ...(d < 3 ? lockFor(3) : canPlay(p) || {}) });
    if (d >= 3) h += opt('potty', '🧻', 'Papel', { fx: starBar(p.potty), ...(sleeping || (p.potty >= 100 ? NO.done : {})) });
    h += '</div>' + groupH('🌙', 'Dormir') + '<div class="opts">';
    h += p.asleep ? opt('wake', '⏰', 'Despertar') : opt('sleep', '🛏️', 'Dormir', { fx: '⚡' });
    h += opt('nap', '😴', 'Siesta', { fx: '⚡', count: 3 - e.naps, ...(sleeping || (e.naps >= 3 ? NO.wait : s.energia >= 90 ? { badge: '⚡', why: 'No tiene sueño' } : {})) });
    h += '</div>' + groupH('🫧', 'Limpiar') + '<div class="opts">';
    if (d < 8) h += opt('wipe', '🧽', 'Limpiar', { fx: '🫧', ...(sleeping || {}) });
    else h += opt('bath', '🛁', 'Baño', { fx: '🫧', ...(sleeping || (p.lastDone.bano && d - p.lastDone.bano < 3 ? NO.wait : {})) });
    if (d >= 3) h += opt('brush', '🖌️', 'Cepillar', { fx: '🫧💖', ...(sleeping || {}) });
    if (d >= 6) h += opt('nails', '✂️', 'Uñas', { ...(sleeping || (d - (p.lastDone.unas || 0) < 5 ? NO.wait : {})) });
    if (d >= 10) h += opt('teeth', '🪥', 'Dientes', { fx: '🫧', ...(sleeping || {}) });
    if (p.mess) h += opt('clean', '🧻', 'Recoger', { fx: '💩✖', count: p.mess });
    h += '</div>' + groupH('🎀', 'Ropa') + '<div class="opts">';
    if (p.acc.worn) h += opt('wear:', '🚫', 'Quitar');
    for (const a of p.acc.owned) { const it = SHOP.find(x => x.id === a); h += opt('wear:' + a, it.icon, it.short, p.acc.worn === a ? NO.done : {}); }
    if (!p.acc.owned.length) h += opt('none', '🎀', 'Ropa', { badge: '🛒', why: 'Cómprala en la tienda' });
    return h + '</div>';
  }
  if (id === 'vet') {
    if (p.sick) h += `<div class="alert" data-say="Luna está enfermita">🤒 ${p.sick.treated ? '💊✔ 🛏️🍖💧' : ''}</div>`;
    const due = VACCINES.find(v => ['disponible', 'atrasada'].includes(vaccineStatus(p, v)));
    const dw = dewormDue(p);
    h += '<div class="opts big">';
    if (p.sick && !p.sick.treated) h += opt('treat-sick', '💊', 'Curar', { fx: '🩺' });
    h += due ? opt('vac:' + due.id, '💉', 'Vacuna', { fx: '🛡️' }) : opt('none', '💉', 'Vacuna', NO.done);
    h += opt('deworm', '🐛', 'Pastilla', { fx: '🛡️', ...(dw ? {} : NO.done) });
    h += opt('checkup', '🩺', 'Revisar', { fx: '⚖️' });
    h += '</div><div class="vax" aria-label="Vacunas">';
    for (const v of VACCINES) {
      const stv = vaccineStatus(p, v);
      h += `<span class="vx ${stv}" title="${esc(v.name)}">${stv === 'aplicada' ? '💉' : stv === 'pendiente' ? '⏳' : '💉'}<b>${stv === 'aplicada' ? '✔' : stv === 'atrasada' ? '❗' : stv === 'disponible' ? '👉' : ''}</b></span>`;
    }
    return h + '</div>';
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
  if (id === 'parque') {
    h += vacWarn(p) + '<div class="opts big">';
    h += opt('fetch', '🎾', 'Pelota', { fx: '🦴💖', ...(d < 5 ? lockFor(5) : canPlay(p) || {}) });
    h += opt('agility', '🏃', 'Carrera', { fx: '🦴💖', ...(canPlay(p) || {}) });
    h += opt('hide', '🙈', 'Escondite', { fx: '🦴💖', ...(d < 5 ? lockFor(5) : canPlay(p) || {}) });
    h += opt('stroll', '🚶', 'Pasear', { fx: '💖', ...(canPlay(p) || {}) });
    h += opt('bench', '🪑', 'Descansar', { fx: '⚡', ...(sleeping || (s.energia >= 95 ? { badge: '⚡', why: 'No está cansada' } : {})) });
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
  if (id === 'lago') {
    h += vacWarn(p) + '<div class="opts big">';
    h += opt('duckfeed', '🌾', 'Dar de comer', { fx: '🦆🦴', ...(sleeping || {}) });
    h += opt('ducks', '🦆', 'Mirar patos', { fx: '💖', ...(sleeping || (e.ducks ? NO.wait : {})) });
    if (d >= 4) h += opt('fountain', '🚰', 'Beber', { fx: '💧', ...(sleeping || (s.hidratacion >= 92 ? NO.wet : {})) });
    if (d >= 8) h += opt('splash', '💦', 'Chapotear', { fx: '💖', ...(canPlay(p) || {}) });
    return h + '</div>';
  }
  return h;
}

function placeDo(cmd) {
  const p = current.pet, e = today(p), d = p.day;
  const [k, arg] = cmd.split(':');
  switch (k) {
    case 'eat': { const f = foodFor(d); doFx(f.fx, 'meal', f.msg, f.icon, '¡Ñam ñam!'); break; }
    case 'water': doFx({ hidratacion: 40 }, 'water', 'Luna bebió agua fresca.', '💧', '¡Glu glu!'); break;
    case 'treat': p.items.premio--; doFx({ felicidad: 10, saciedad: 5 }, 'treat', 'Le diste un premio.', '🦴', '¡Un premio!'); break;
    case 'pet': doFx(p.asleep ? { felicidad: 4 } : { felicidad: 12, energia: -2 }, 'play', 'Mimos y caricias.', '🤗', p.asleep ? '' : '¡Te quiero!'); break;
    case 'chew': doFx({ felicidad: 18, energia: -8, saciedad: -2 }, 'play', 'Jugó con el mordedor.', '🧸', '¡Ñic ñic!'); break;
    case 'potty': closeWin(); startTrain('potty'); return;
    case 'sleep': p.asleep = true; addEvent(p, '🛏️', 'Acostaste a Luna en su camita.'); pop('🛏️', '💤'); speak('Buenas noches, Luna'); saveRoot(); refreshHUD(); break;
    case 'wake': wakeUp(); break;
    case 'nap': e.naps++; doFx({ energia: 25 }, null, 'Durmió una siesta cortita.', '😴', 'Siesta'); break;
    case 'wipe': doFx({ higiene: 20 }, 'care', 'La limpiaste con un paño tibio.', '🧽', '¡Limpita!'); break;
    case 'bath': closeWin(); startBath(); return;
    case 'brush': doFx({ higiene: 10, felicidad: 5 }, 'care', 'Le cepillaste el pelo.', '🖌️', '¡Qué suave!'); break;
    case 'nails': p.lastDone.unas = d; doFx({ felicidad: -3 }, 'care', 'Le cortaste las uñas con cuidado.', '✂️', 'Uñas cortas'); break;
    case 'teeth': p.lastDone.dientes = d; doFx({ higiene: 6, salud: 2 }, 'care', 'Le cepillaste los dientes.', '🪥', '¡Dientes limpios!'); break;
    case 'clean': p.mess = 0; doFx({}, 'care', 'Limpiaste los accidentes.', '🧻', '¡Todo limpio!'); break;
    case 'wear': p.acc.worn = arg || null; saveRoot(); pop(arg ? SHOP.find(x => x.id === arg).icon : '🚫'); speak(arg ? '¡Qué guapa!' : ''); break;
    case 'none': return;
    case 'treat-sick':
      p.sick.treated = true; p.stats.salud = clamp(p.stats.salud + 10, 0, 100);
      addEvent(p, '💊', 'La veterinaria le dio tratamiento a Luna.'); pop('💊', '+🩺'); speak('Ahora necesita descansar, comer y beber agua'); saveRoot(); refreshHUD(); break;
    case 'checkup':
      if (!e.checkup) { e.checkup = true; addEvent(p, '🩺', 'Revisión general en la veterinaria.'); saveRoot(); }
      openWin(checkupHTML(p), () => openPlace('vet'), 'card'); return;
    case 'deworm': p.deworm.push(d); doFx({}, null, 'Luna tomó su desparasitante.', '💊', '¡Pastilla tomada!'); break;
    case 'vac': {
      const v = VACCINES.find(x => x.id === arg);
      p.vaccines[v.id] = d;
      dogSound('sad', lunaSize());
      doFx({ felicidad: -8 }, null, `Vacuna aplicada: ${v.name}.`, '💉', '¡Qué valiente!');
      if (walkUnlocked(p)) addMilestone(p, 'vacunas', '🛡️', 'Luna completó sus vacunas de cachorro.');
      break;
    }
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
    case 'stroll': e.walk = 1; p.potty = clamp(p.potty + 3, 0, 100); doFx({ felicidad: 15, energia: -10, hidratacion: -5 }, 'play', 'Paseo tranquilo por el parque.', '🚶', '¡A pasear!'); outdoorRisk(p); break;
    case 'bench': doFx({ energia: 8 }, null, 'Descansaron en la banca.', '🪑', 'Descanso'); break;
    case 'ducks': e.ducks = true; doFx({ felicidad: 10 }, 'play', 'Miraron a los patos.', '🦆', '¡Cuac cuac!'); outdoorRisk(p); break;
    case 'fountain': doFx({ hidratacion: 30 }, 'water', 'Bebió del bebedero del lago.', '🚰', '¡Glu glu!'); break;
    case 'splash': doFx({ felicidad: 18, energia: -10, higiene: -18 }, 'play', 'Chapoteó en la orilla.', '💦', '¡Splash!'); outdoorRisk(p); break;
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
  h += `<div class="weekbox"><span>🗓️ ${p.day}</span><span>⚖️ ${fmtWeight(p.weight)}</span><span>🔥 ${p.streak}</span></div>`;
  // rutina de hoy como estrellas
  h += groupH('⭐', 'Hoy') + `<div class="today">${r.map(x => { const ok = x.have >= x.need; return `<button class="tday ${ok ? 'ok' : ''}" data-say="${esc(x.label)}" aria-label="${esc(x.label)} ${ok ? 'hecho' : 'pendiente'}"><span>${x.icon}</span><b>${ok ? '⭐' : `${Math.min(x.have, x.need)}/${x.need}`}</b></button>`; }).join('')}</div>`;
  // pegatinas
  const all = [...Object.entries(DAY_MILESTONES).map(([d2, m]) => ({ key: 'day' + d2, icon: m[0], text: m[1] })),
    { key: 'walk1', icon: '🌳', text: 'Primer paseo' }, { key: 'bath1', icon: '🛁', text: 'Primer baño' }, { key: 'vacunas', icon: '🛡️', text: 'Todas las vacunas' },
    { key: 'allbones', icon: '🔍', text: 'Todos los huesos del día' }, { key: 'treasure1', icon: '💰', text: 'Primer tesoro' }, { key: 'squirrel', icon: '🐿️', text: 'Primera ardilla' },
    { key: 'hide1', icon: '🙈', text: 'Encontraste a Luna' }, { key: 'agility', icon: '🏃', text: 'Carrera perfecta' }, { key: 'ducks10', icon: '🦆', text: 'Muchos patos alimentados' }, { key: 'memory', icon: '🃏', text: 'Memoria perfecta' }, { key: 'potty', icon: '🧻', text: 'Aprendió a usar el papel' }, { key: 'fetch15', icon: '🥎', text: '15 pelotas' },
    ...LEVEL_DEFS.map(L => ({ key: 'lvl' + L.id, icon: ['🌲', '⛰️', '💎'][L.id - 1], text: L.name })),
    ...TRICKS.map(t => ({ key: 'trick-' + t.id, icon: t.icon, text: t.name }))];
  const got = new Set(p.milestones.map(m => m.key));
  h += groupH('🏅', 'Pegatinas') + `<div class="stickers">${all.map(m => got.has(m.key)
    ? `<button class="stk" data-say="${esc(m.text)}" aria-label="${esc(m.text)}">${m.icon}</button>`
    : `<span class="stk off" aria-label="Pegatina sin conseguir">❔</span>`).join('')}</div>`;
  h += parentsHTML(p, e);
  openWin(h, () => { state.mode = 'world'; updatePrompt(); }, 'place diary');
}

function parentsHTML(p, e) {
  const st = stageOf(p.day);
  let h = `<details class="parents"><summary>👨‍👩‍👧 Para papás</summary>
    <p><b>${esc(current.name)}</b> cuida a Luna · semana ${p.day} (${ageText(p.day)}) · ${st.name} · ${fmtWeight(p.weight)} · racha ${p.streak} (mejor ${p.bestStreak}).<br>
    El juego avanza en tiempo real: 1 día = 1 semana de vida de Luna. Pasos explorados hoy: ${e.walkTiles}/${WALK_GOAL}.</p>${voiceSettingsHTML()}`;
  const needs = needsOf(p);
  if (needs.length) h += `<h4>Necesita ahora</h4><ul>${needs.map(n => `<li>${n.icon} ${esc(n.text)}</li>`).join('')}</ul>`;
  h += `<h4>Crecimiento (kg)</h4>${weightChart(p)}`;
  h += `<h4>Vacunas y desparasitación</h4><ul>${VACCINES.map(v => `<li>${vaccineStatus(p, v) === 'aplicada' ? '✔' : '·'} ${esc(v.name)} — semanas ${v.day}–${v.to}${p.vaccines[v.id] ? ` (aplicada sem. ${p.vaccines[v.id]})` : ''}</li>`).join('')}
    <li>Desparasitación: ${p.deworm.length ? `última sem. ${Math.max(...p.deworm)}` : 'ninguna'} · próxima sem. ${nextDeworm(p) || '—'}</li></ul>
    <p class="small">Calendario orientativo con fines educativos; en la vida real sigan lo que indique su veterinario.</p>`;
  h += `<h4>Registro día a día</h4>`;
  for (let d = p.day; d >= Math.max(1, p.day - 30); d--) {
    const L = p.log[d];
    if (!L) { h += `<details class="day"><summary>Semana ${d} · sin visitas</summary></details>`; continue; }
    const rr = routineFor(p, d, L);
    const w = d === p.day ? p.weight : L.weight;
    h += `<details class="day"><summary>${moodEmoji(d === p.day ? p.stats.felicidad : (L.mood ?? 50))} Semana ${d} · ${fmtDate(p.bornAt + (d - 1) * DAY)}${L.done ? ' · ⭐ rutina completa' : ''}${w != null ? ' · ' + fmtWeight(w) : ''}
      <small>${rr.map(x => `${x.icon} ${x.have}/${x.need}`).join(' · ')}</small></summary>
      <ul class="tl">${L.events.slice().reverse().map(ev => `<li><time>${fmtTime(ev.t)}</time> ${ev.icon} ${esc(ev.text)}</li>`).join('') || '<li>Sin novedades.</li>'}</ul></details>`;
  }
  return h + '</details>';
}
function weightChart(p) {
  const pts = [];
  for (let d = 1; d <= p.day; d++) { const w = d === p.day ? p.weight : p.log[d]?.weight; if (w != null) pts.push([d, w]); }
  const maxD = Math.max(p.day + 3, 10), maxW = Math.max(targetWeight(maxD), ...pts.map(x => x[1])) * 1.12;
  const W = 300, H = 120, pl = 30, pr = 6, pt = 6, pb = 16;
  const x = d => pl + (d - 1) / (maxD - 1) * (W - pl - pr), y = w => H - pb - w / maxW * (H - pt - pb);
  const target = Array.from({ length: maxD }, (_, i) => `${x(i + 1).toFixed(1)},${y(targetWeight(i + 1)).toFixed(1)}`).join(' ');
  const act = pts.map(([d, w]) => `${x(d).toFixed(1)},${y(w).toFixed(1)}`).join(' ');
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Peso de Luna por semana">
    ${[0, .5, 1].map(f => `<line x1="${pl}" x2="${W - pr}" y1="${y(maxW * f)}" y2="${y(maxW * f)}" stroke="#e8d0f0"/><text x="${pl - 3}" y="${y(maxW * f) + 3}" text-anchor="end">${(maxW * f).toFixed(1)}</text>`).join('')}
    <text x="${pl}" y="${H - 3}">S1</text><text x="${W - pr}" y="${H - 3}" text-anchor="end">S${maxD}</text>
    <polyline points="${target}" fill="none" stroke="#2a9d94" stroke-width="1.5" stroke-dasharray="4 3"/>
    <polyline points="${act}" fill="none" stroke="#d0602a" stroke-width="2.5"/></svg>
    <p class="small"><span style="color:#d0602a">━ Luna</span> · <span style="color:#2a9d94">┅ peso ideal</span></p>`;
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
