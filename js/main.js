'use strict';
/* Arranque, entrada (teclado, táctil, puntero), bucle fijo a 60 Hz y sonidos. */

const state = { mode: 'title' };   // title | world | panel | mg-intro | mg | mg-result
const canvas = $('#view');
const ctx = canvas.getContext('2d');
const view = { w: 320, h: 180, scale: 3 };

// ---------- Resolución: escala entera para pixel art nítido ----------
function resizeView() {
  const W = window.innerWidth, H = window.innerHeight;
  const s = Math.max(1, Math.floor(Math.min(W / 240, H / 170)));
  view.scale = s;
  view.w = Math.min(480, Math.ceil(W / s));
  view.h = Math.min(W < H ? 440 : 320, Math.ceil(H / s));
  canvas.width = view.w; canvas.height = view.h;
  canvas.style.width = view.w * s + 'px';
  canvas.style.height = view.h * s + 'px';
  ctx.imageSmoothingEnabled = false;
  if (current && world.tiles) snapCamera();
}
window.addEventListener('resize', resizeView);

// ---------- Entrada por acciones (input-systems) ----------
const ACTIONS_KEYS = {
  left: ['ArrowLeft', 'KeyA'], right: ['ArrowRight', 'KeyD'], up: ['ArrowUp', 'KeyW'], down: ['ArrowDown', 'KeyS'],
  a: ['Space', 'Enter', 'KeyE', 'KeyZ', 'KeyJ'], b: ['Escape', 'KeyX', 'KeyK', 'Backspace'],
};
const KEY_TO_ACTION = {};
for (const [a, ks] of Object.entries(ACTIONS_KEYS)) ks.forEach(k => { KEY_TO_ACTION[k] = a; });
const input = { held: {}, pressed: {}, queued: {}, pointer: { active: false, x: 0, y: 0 } };
function press(a) { if (!input.held[a]) input.queued[a] = true; input.held[a] = true; }
function release(a) { input.held[a] = false; }

window.addEventListener('keydown', ev => {
  const a = KEY_TO_ACTION[ev.code];
  // Con una ventana abierta, el teclado navega la interfaz (flechas mueven el foco)
  if (!$('#win').hidden) {
    if (a === 'b') { ev.preventDefault(); closeWin('close'); return; }
    if (['up', 'down', 'left', 'right'].includes(a) && ev.target.tagName !== 'INPUT') { ev.preventDefault(); moveFocus(a); }
    return;
  }
  if (!a || state.mode === 'title' || ev.target.tagName === 'INPUT') return;
  ev.preventDefault();
  if (a === 'b' && state.mode === 'mg' && mg && !mg.over) { quitMinigame(); return; }
  press(a);
  audioUnlock();
});
window.addEventListener('keyup', ev => { const a = KEY_TO_ACTION[ev.code]; if (a) release(a); });
window.addEventListener('blur', () => { input.held = {}; });

function moveFocus(dir) {
  const items = [...$('#win-box').querySelectorAll('button')];
  if (!items.length) return;
  const cur = document.activeElement;
  if (!items.includes(cur)) { items[0].focus(); return; }
  const r = cur.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  let best = null, bd = Infinity;
  for (const it of items) {
    if (it === cur) continue;
    const q = it.getBoundingClientRect(), x = q.left + q.width / 2, y = q.top + q.height / 2;
    const dx = x - cx, dy = y - cy;
    const ok = dir === 'up' ? dy < -4 : dir === 'down' ? dy > 4 : dir === 'left' ? dx < -4 : dx > 4;
    if (!ok) continue;
    const dist = (dir === 'up' || dir === 'down') ? Math.abs(dy) + Math.abs(dx) * 2 : Math.abs(dx) + Math.abs(dy) * 2;
    if (dist < bd) { bd = dist; best = it; }
  }
  if (best) { best.focus(); best.scrollIntoView({ block: 'nearest' }); }
}

// Controles táctiles
document.querySelectorAll('[data-pad]').forEach(btn => {
  const a = btn.dataset.pad;
  const on = ev => {
    ev.preventDefault(); audioUnlock();
    if (!$('#win').hidden) { if (a === 'a') document.activeElement?.click?.(); else if (a === 'b') closeWin('close'); else moveFocus(a); return; }
    if (a === 'b' && state.mode === 'mg' && mg && !mg.over) { quitMinigame(); return; }
    press(a); btn.classList.add('on');
  };
  const off = ev => { ev.preventDefault(); release(a); btn.classList.remove('on'); };
  btn.addEventListener('pointerdown', on);
  btn.addEventListener('pointerup', off);
  btn.addEventListener('pointercancel', off);
  btn.addEventListener('pointerleave', off);
});
// Puntero sobre el lienzo (esponja del baño)
function pointerPos(ev) { const r = canvas.getBoundingClientRect(); input.pointer.x = (ev.clientX - r.left) / view.scale; input.pointer.y = (ev.clientY - r.top) / view.scale; }
canvas.addEventListener('pointerdown', ev => {
  pointerPos(ev); input.pointer.active = true; audioUnlock();
  if (state.mode === 'mg' && mg && mg.onTap && !mg.over) { mg.onTap(input.pointer.x, input.pointer.y); return; }
  if (state.mode === 'world' && current) {
    const L = world.luna, wx = input.pointer.x + world.cam.x, wy = input.pointer.y + world.cam.y;
    if (!world.hide && Math.abs(wx - L.x) < 16 && wy > L.y - 26 && wy < L.y + 6) petOnMap();
    else if (ev.pointerType !== 'mouse' || ev.button === 0) tapMap(wx, wy);
  }
});
let petCd = 0;
function petOnMap() {
  const p = current.pet, L = world.luna;
  for (let i = 0; i < 3; i++) world.floaters.push({ x: L.x - 8 + i * 8, y: L.y - 20 - i * 4, t: -i * 0.12, txt: '♥' });
  dogSound(p.asleep ? 'sad' : 'bark', stageOf(p.day).size, 0.7);
  if (Date.now() > petCd && !p.asleep) { petCd = Date.now() + 15000; applyFx(p, { felicidad: 3 }); refreshHUD(); }
}
canvas.addEventListener('pointermove', ev => { if (ev.pointerType === 'mouse' || input.pointer.active) { pointerPos(ev); if (ev.pointerType === 'mouse') input.pointer.active = mg?.kind === 'bath'; } });
window.addEventListener('pointerup', ev => { if (ev.pointerType !== 'mouse') input.pointer.active = false; });

function quitMinigame() {
  mg.over = true;
  state.mode = 'mg-result';
  confirmWin('¿Salir del minijuego?', 'No ganarás recompensas de esta partida.', 'Salir').then(yes => {
    if (yes) { mg = null; state.mode = 'world'; updatePrompt(); }
    else { mg.over = false; state.mode = 'mg'; }
  });
}

// ---------- Sonidos (WebAudio, sin archivos) ----------
let actx = null, muted = false;
try { muted = localStorage.getItem('luna.muted') === '1'; } catch (e) { /* sin almacenamiento */ }
function audioUnlock() { if (typeof Music !== 'undefined') Music.start(); if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { actx = null; } } }
function sfx(kind) {
  if (muted || !actx) return;
  const notes = { jump: [[520, .06, 'square'], [780, .05, 'square']], coin: [[990, .05, 'square'], [1320, .09, 'square']], hurt: [[220, .12, 'sawtooth'], [140, .12, 'sawtooth']],
    stomp: [[330, .05, 'square'], [660, .08, 'square']], tick: [[880, .04, 'triangle']], win: [[523, .1, 'square'], [659, .1, 'square'], [784, .1, 'square'], [1046, .2, 'square']], lose: [[392, .15, 'triangle'], [330, .15, 'triangle'], [262, .25, 'triangle']] }[kind];
  if (!notes) return;
  let t = actx.currentTime;
  for (const [f, d, type] of notes) {
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = type; o.frequency.value = f;
    g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.001, t + d);
    o.connect(g).connect(actx.destination); o.start(t); o.stop(t + d + 0.02);
    t += d * 0.9;
  }
}

// ---------- Clics ----------
document.addEventListener('click', ev => {
  const t = ev.target.closest('button');
  if (!t) return;
  audioUnlock();
  const d = t.dataset;
  if (d.mem !== undefined) return memFlip(Number(d.mem));
  if (d.quiz !== undefined) return quizAnswer2(d.quiz === '1');
  if (d.near !== undefined) { if (world.nearX) world.nearX.run(); return; }
  if (t.id === 'guideSkip') return skipGoal();
  if (t.getAttribute('aria-disabled') === 'true') { const b = t.querySelector('.badge'); pop(b ? b.textContent : '✋'); speak(d.say); sfx('hurt'); return; }
  if (d.say !== undefined && !d.do) { speak(d.say); pop(t.textContent.trim().slice(0, 4)); return; }
  if (d.win) { closeWin(d.win); return; }
  if (d.nav) { if (d.nav === 'profiles' && current) saveRoot(); return showScreen(d.nav); }
  if (d.open) { const pr = root.profiles.find(x => x.id === d.open); if (pr && Cloud.linked(pr)) t.disabled = true; return Cloud.refresh(pr).finally(() => openProfile(d.open)); }
  if (d.cloud) return Cloud.openAccount(root.profiles.find(x => x.id === d.cloud), renderProfiles);
  if (d.cloudlogin !== undefined) return Cloud.openLogin(renderProfiles);
  if (d.del) return deleteProfile(d.del);
  if (d.do) { if (d.say) speak(d.say); return placeDo(d.do); }
  if (d.place) return openPlace(d.place);
  if (d.locked) return showLockedCard(PLACES.find(x => x.id === d.locked));
  if (d.guide !== undefined) { sayGuide(); guideGo(); return; }
  if (d.help) { speak(PLACE_HELP[d.help]); hintInPanel(); return; }
  if (d.wake !== undefined) return wakeUp();
  if (d.diary !== undefined) return openDiary();
  if (d.map !== undefined) return openMap2();
  if (d.music !== undefined) { Music.start(); t.textContent = Music.toggle() ? '🎵' : '🔕'; return; }
  if (d.mute !== undefined) { muted = !muted; Music.refresh(); try { localStorage.setItem('luna.muted', muted ? '1' : '0'); } catch (e) { /* */ } t.textContent = muted ? '🔇' : '🔊'; if (muted && 'speechSynthesis' in window) speechSynthesis.cancel(); return; }
  if (d.export !== undefined) return exportSave();
  if (d.import !== undefined) return $('#import-file').click();
  if (d.debug && current) { current.pet.offset += Number(d.debug) * HOUR; simTick(); showToast(`⏩ +${d.debug} h`); }
});
$('#win').addEventListener('click', ev => { if (ev.target.id === 'win' && state.mode === 'panel') closeWin('close'); });
$('#create-form').addEventListener('submit', createProfile);
$('#import-file').addEventListener('change', importSave);

// ---------- Bucle ----------
const STEP = 1 / 60;
let acc = 0, last = performance.now();
function frame(t) {
  acc += Math.min(0.25, (t - last) / 1000);
  last = t;
  while (acc >= STEP) { update(STEP); acc -= STEP; }
  render();
  requestAnimationFrame(frame);
}
function update(dt) {
  input.pressed = input.queued; input.queued = {};
  if (!current) return;
  if (state.mode === 'world' || state.mode === 'panel') updateWorld(state.mode === 'world' ? dt : 0);
  else if (state.mode === 'mg' && mg) mg.update(dt);
}
function render() {
  if (!current) return;
  document.body.classList.toggle('in-mg', !!mg && state.mode !== 'world' && state.mode !== 'panel');
  { const hr = new Date(now(current.pet)).getHours(); Music.setMode(mg && state.mode !== 'world' && state.mode !== 'panel' ? 'play' : openPlaceId === 'casa' ? 'home' : (hr < 7 || hr >= 20) ? 'night' : 'day'); }
  ctx.imageSmoothingEnabled = false;
  if (mg && state.mode !== 'world' && state.mode !== 'panel') mg.draw(ctx);
  else drawWorld(ctx);
}
function simTick() {
  if (!current) return;
  const p = current.pet;
  const wasDay = p.day;
  simulate(p, now(p));
  if (p.day !== wasDay) spawnDailyBones(p);
  refreshHUD();
  guideCheck();
  if (Date.now() - lastSaveAt > 15000) saveRoot();
}
setInterval(simTick, 5000);
setInterval(flushNotices, 1200);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') simTick(); else saveRoot(); });
window.addEventListener('pagehide', saveRoot);

// ---------- Inicio ----------
function boot() {
  root = loadRoot();
  resizeView();
  if (DEBUG) { const b = $('#debug'); b.hidden = false; }
  $('[data-mute]').textContent = muted ? '🔇' : '🔊';
  $('[data-music]').textContent = Music.isOn() ? '🎵' : '🔕';
  const resume = root.activeId && root.profiles.find(x => x.id === root.activeId);
  if (resume) Cloud.refresh(resume).finally(() => openProfile(resume.id)); else showScreen('profiles');
  requestAnimationFrame(frame);
}
(document.fonts && document.fonts.load ? Promise.race([document.fonts.load('8px "Press Start 2P"'), new Promise(r => setTimeout(r, 1500))]) : Promise.resolve()).then(boot, boot);
