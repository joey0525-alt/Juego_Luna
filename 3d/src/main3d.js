/* Prototipo 3D de Luna (three.js r187).
 * Reutiliza el modelo del juego 2D (../js/data.js y ../js/sim.js, cargados antes como scripts clásicos):
 * mismas partidas, necesidades, días y guardado. Aquí solo cambia la vista.
 * Se empaqueta con esbuild a ../luna3d.js (IIFE) para que funcione con doble clic, sin servidor.
 */
import * as THREE from 'three';

const W = window;
const $ = s => document.querySelector(s);
const esc3 = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- Puentes que sim.js espera como globales ----------
const notices = [];
W.queueNotice = m => notices.push(m);
W.showToast = m => toast(m);
W.root = loadRoot();
let current = null;

// ---------- Voz y avisos ----------
let muted = isMuted();
// speak() viene de ../js/voice.js y dogSound() de ../js/sounds.js (scripts globales)
const dogSize = () => (current ? stageOf(current.pet.day).size : 2);
let popT = 0;
function pop(icon, sub = '') {
  const el = $('#pop');
  el.innerHTML = `<span class="pi">${icon}</span>${sub ? `<span class="ps">${esc3(sub)}</span>` : ''}`;
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  clearTimeout(popT); popT = setTimeout(() => el.classList.remove('show'), 1300);
}
let toastT = 0;
function toast(m) { const el = $('#toast'); el.textContent = m; el.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2200); }
setInterval(() => {
  if (!notices.length || $('#pop').classList.contains('show')) return;
  const m = notices.shift();
  if (m.startsWith('🏅')) { pop('🏅', '¡Sticker!'); speak('¡Sticker nuevo! ' + m.slice(2)); } else toast(m);
}, 1200);

// ---------- Sonidos ----------
let actx = null;
function sfx(kind) {
  if (muted) return;
  try { actx = actx || new (W.AudioContext || W.webkitAudioContext)(); } catch (e) { return; }
  const n = { coin: [[990, .05], [1320, .09]], step: [[300, .03]], pop: [[660, .05], [880, .07]], bark: [[520, .06], [380, .1]], quack: [[620, .07], [480, .09]] }[kind];
  if (!n) return;
  let t = actx.currentTime;
  for (const [f, d] of n) {
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = 'triangle'; o.frequency.value = f;
    g.gain.setValueAtTime(0.07, t); g.gain.exponentialRampToValueAtTime(0.001, t + d);
    o.connect(g).connect(actx.destination); o.start(t); o.stop(t + d + 0.02); t += d * 0.9;
  }
}

// ====================== Render ======================
const canvas = $('#c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(W.devicePixelRatio, 1.5));
renderer.setSize(W.innerWidth, W.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
const camera = new THREE.PerspectiveCamera(42, W.innerWidth / W.innerHeight, 0.1, 220);
W.addEventListener('resize', () => {
  camera.aspect = W.innerWidth / W.innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(W.innerWidth, W.innerHeight);
});

// Sombreado tipo juguete: 3 tonos
const grad = new THREE.DataTexture(new Uint8Array([110, 110, 110, 255, 185, 185, 185, 255, 255, 255, 255, 255]), 3, 1, THREE.RGBAFormat);
grad.minFilter = grad.magFilter = THREE.NearestFilter; grad.needsUpdate = true;
const matCache = new Map();
function M(color, extra) {
  const k = color + (extra ? JSON.stringify(extra) : '');
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshToonMaterial({ color, gradientMap: grad, ...(extra || {}) }));
  return matCache.get(k);
}
function mesh(geo, color, o = {}) {
  const m = new THREE.Mesh(geo, o.mat || M(color, o.extra));
  m.castShadow = o.cast !== false; m.receiveShadow = !!o.recv;
  return m;
}
const G = {
  sph: (r, w = 16, h = 12) => new THREE.SphereGeometry(r, w, h),
  box: (x, y, z) => new THREE.BoxGeometry(x, y, z),
  cyl: (a, b, h, s = 16) => new THREE.CylinderGeometry(a, b, h, s),
  cap: (r, l) => new THREE.CapsuleGeometry(r, l, 4, 10),
  cone: (r, h, s = 12) => new THREE.ConeGeometry(r, h, s),
};
// position/rotation/scale de Object3D son de solo lectura: se copian con este ayudante
function at(o, x, y, z) { o.position.set(x, y, z); return o; }
function rng(seed) { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return (s >>> 0) / 4294967295; }; }

// Texturas de emoji para carteles, globos y partículas
const texCache = new Map();
function emojiTex(emoji, bubble = false) {
  const k = emoji + bubble;
  if (texCache.has(k)) return texCache.get(k);
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  if (bubble) {
    g.fillStyle = '#ffffff'; g.strokeStyle = '#c48ad8'; g.lineWidth = 8;
    g.beginPath(); g.arc(64, 58, 50, 0, Math.PI * 2); g.fill(); g.stroke();
    g.beginPath(); g.moveTo(52, 104); g.lineTo(64, 124); g.lineTo(76, 104); g.fill();
  }
  g.font = `${bubble ? 62 : 96}px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(emoji, 64, bubble ? 62 : 70);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  texCache.set(k, t);
  return t;
}
function sprite(emoji, size = 1, bubble = false) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: emojiTex(emoji, bubble), transparent: true, depthWrite: false }));
  s.scale.set(size, size, size);
  return s;
}

function lights(scene) {
  const hemi = new THREE.HemisphereLight('#dff1ff', '#a6d68a', 1.7);
  const sun = new THREE.DirectionalLight('#fff4e0', 2.3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 60 });
  sun.shadow.bias = -0.0008;
  scene.add(hemi, sun, sun.target);
  return { hemi, sun };
}

// ====================== Luna 3D ======================
const DOG_SCALE = [0.55, 0.68, 0.82, 0.95, 1.05];
function buildDog(p) {
  const c = COATS[p.coat] || COATS.dorado;
  const root = new THREE.Group(), body = new THREE.Group();
  root.add(body);
  const torso = mesh(G.sph(0.5, 22, 16), c.fur); torso.scale.set(0.85, 0.75, 1.2); torso.position.set(0, 0.78, -0.05); body.add(torso);
  const belly = mesh(G.sph(0.42), c.light); belly.scale.set(0.72, 0.58, 1); belly.position.set(0, 0.66, 0); body.add(belly);
  if (c.spots) {
    for (const [x, y, z, s] of [[0.22, 1.0, -0.2, 0.22], [-0.25, 0.9, 0.15, 0.16]]) { const sp = mesh(G.sph(s), c.dark); sp.scale.set(1, 0.45, 1.2); sp.position.set(x, y, z); body.add(sp); }
  }
  const legs = [];
  for (const [x, z] of [[-0.22, 0.32], [0.22, 0.32], [-0.22, -0.4], [0.22, -0.4]]) {
    const pv = new THREE.Group(); pv.position.set(x, 0.62, z);
    const leg = mesh(G.cap(0.12, 0.28), c.fur); leg.position.y = -0.26; pv.add(leg);
    const paw = mesh(G.sph(0.14, 12, 8), c.light); paw.scale.set(1, 0.6, 1.25); paw.position.set(0, -0.52, 0.04); pv.add(paw);
    body.add(pv); legs.push(pv);
  }
  const tail = new THREE.Group(); tail.position.set(0, 0.98, -0.6);
  const tm = mesh(G.cap(0.08, 0.36), c.fur); tm.position.y = 0.22; tail.add(tm);
  const tip = mesh(G.sph(0.09), c.light); tip.position.y = 0.44; tail.add(tip);
  body.add(tail);
  const head = new THREE.Group(); head.position.set(0, 1.28, 0.5); body.add(head);
  const skull = mesh(G.sph(0.43, 22, 16), c.fur); skull.scale.set(1, 0.95, 0.95); head.add(skull);
  if (c.spots) { const sp = mesh(G.sph(0.17), c.dark); sp.scale.set(1, 1, 0.5); sp.position.set(0.17, 0.1, 0.3); head.add(sp); }
  const snout = mesh(G.sph(0.22), c.light); snout.scale.set(1.1, 0.8, 1); snout.position.set(0, -0.1, 0.33); head.add(snout);
  const nose = mesh(G.sph(0.075), '#2a1d18'); nose.position.set(0, -0.02, 0.54); head.add(nose);
  const tongue = mesh(G.sph(0.08), '#ff7c9c'); tongue.scale.set(1, 0.4, 1.3); tongue.position.set(0, -0.22, 0.45); head.add(tongue);
  const eyes = [];
  for (const sx of [-1, 1]) {
    const eg = new THREE.Group(); eg.position.set(sx * 0.17, 0.08, 0.35);
    eg.add(mesh(G.sph(0.08), '#2a1d18', { cast: false }));
    const hl = new THREE.Mesh(G.sph(0.028, 8, 6), new THREE.MeshBasicMaterial({ color: '#ffffff' })); hl.position.set(0.025, 0.035, 0.06); eg.add(hl);
    head.add(eg); eyes.push(eg);
    const ck = mesh(G.sph(0.08), '#ff9fb4', { cast: false }); ck.scale.set(1, 0.6, 0.4); ck.position.set(sx * 0.27, -0.08, 0.28); head.add(ck);
  }
  const ears = [];
  for (const sx of [-1, 1]) {
    const pv = new THREE.Group(); pv.position.set(sx * 0.3, 0.26, -0.04); pv.rotation.z = sx * 0.35;
    const ear = mesh(G.sph(0.2), c.dark); ear.scale.set(0.45, 1.15, 0.85); ear.position.set(sx * 0.04, -0.22, 0); pv.add(ear);
    head.add(pv); ears.push(pv);
  }
  const extras = new THREE.Group(); body.add(extras);
  const collar = new THREE.Object3D(); collar.position.set(0, 1.02, 0.42); body.add(collar);   // punto donde se engancha la correa
  const d = { root, body, legs, tail, head, eyes, ears, tongue, extras, collar, t: Math.random() * 10, blink: 2, key: '' };
  refreshDogExtras(d, p);
  return d;
}
// Collar y accesorios (se rehacen solo si cambian)
function refreshDogExtras(d, p) {
  const key = `${p.day >= 8}|${p.acc.worn}`;
  if (d.key === key) return;
  d.key = key;
  d.extras.clear();
  if (p.day >= 8) {
    const col = mesh(new THREE.TorusGeometry(0.33, 0.055, 8, 20), '#ff5c5c'); col.position.set(0, 1.03, 0.42); col.rotation.x = 1.25; d.extras.add(col);
    const tag = mesh(G.sph(0.07), '#ffd23f'); tag.position.set(0, 0.86, 0.6); d.extras.add(tag);
  }
  const H = d.head;
  H.children.filter(o => o.userData.acc).forEach(o => H.remove(o));
  const add = (o, parent = H) => { o.userData.acc = true; parent.add(o); };
  if (p.acc.worn === 'lazo') { for (const sx of [-1, 1]) { const b = mesh(G.cone(0.13, 0.26, 10), '#ff79bf'); b.rotation.z = sx * Math.PI / 2; b.position.set(sx * 0.13, 0.45, 0); add(b); } add(at(mesh(G.sph(0.07), '#e0489a'), 0, 0.45, 0)); }
  if (p.acc.worn === 'gorro') { const g = mesh(G.cone(0.32, 0.5, 14), '#ff6b6b'); g.position.set(0, 0.55, -0.02); add(g); const r = mesh(new THREE.TorusGeometry(0.31, 0.07, 8, 18), '#ffffff'); r.rotation.x = Math.PI / 2; r.position.set(0, 0.32, -0.02); add(r); const pm = mesh(G.sph(0.09), '#ffffff'); pm.position.set(0, 0.82, -0.02); add(pm); }
  if (p.acc.worn === 'gafas') { for (const sx of [-1, 1]) { const l = mesh(new THREE.TorusGeometry(0.1, 0.025, 6, 16), '#222222'); l.position.set(sx * 0.17, 0.08, 0.42); add(l); const gl = mesh(G.cyl(0.09, 0.09, 0.02), '#333344'); gl.rotation.x = Math.PI / 2; gl.position.set(sx * 0.17, 0.08, 0.43); add(gl); } }
  if (p.acc.worn === 'panuelo') { const pn = mesh(G.cone(0.3, 0.35, 3), '#4f7cff'); pn.rotation.x = Math.PI; pn.position.set(0, 0.9, 0.5); d.extras.add(pn); }
}
const lerp = (a, b, k) => a + (b - a) * k;
// Animación procedural: mode = idle | walk | sleep | eat | happy
function animateDog(d, dt, st) {
  d.t += dt;
  const t = d.t, k = 1 - Math.exp(-12 * dt);
  const walk = st.mode === 'walk', sleep = st.mode === 'sleep', happy = st.mode === 'happy' || st.mode === 'spin', eat = st.mode === 'eat';
  const lie = sleep || st.mode === 'lie', sit = st.mode === 'sit' || st.mode === 'paw';
  const freq = 6 + (st.speed || 0) * 2.4;
  const sw = walk ? Math.sin(t * freq) * 0.75 : 0;
  const legT = lie ? [-1.35, -1.35, 1.35, 1.35] : sit ? [0, st.mode === 'paw' ? -1.5 : 0, -1.3, -1.3] : [sw, -sw, -sw, sw];
  d.body.rotation.x = lerp(d.body.rotation.x, sit ? -0.42 : 0, k);
  d.legs.forEach((l, i) => { l.rotation.x = lerp(l.rotation.x, legT[i], k); });
  const bodyY = lie ? -0.42 : sit ? -0.12 : walk ? Math.abs(Math.sin(t * freq)) * 0.06 : happy ? Math.abs(Math.sin(t * 9)) * 0.4 : 0;
  d.body.position.y = lerp(d.body.position.y, bodyY, happy ? 1 : k);
  const br = 1 + Math.sin(t * (sleep ? 1.6 : 2.6)) * (sleep ? 0.035 : 0.015);
  d.body.scale.set(1, br, 1);
  d.tail.rotation.z = Math.sin(t * (happy ? 24 : walk ? 15 : sleep ? 0 : 5)) * (st.sad ? 0.15 : 0.5);
  d.tail.rotation.x = lerp(d.tail.rotation.x, st.sad || sleep ? 0.9 : -0.55, k);
  const hx = eat ? 0.55 + Math.sin(t * 13) * 0.12 : sleep ? 0.35 : st.sad ? 0.25 : 0;
  d.head.rotation.x = lerp(d.head.rotation.x, hx, k);
  d.head.rotation.z = lerp(d.head.rotation.z, walk || sleep ? 0 : Math.sin(t * 0.8) * 0.12, k);
  d.head.position.y = lerp(d.head.position.y, lie ? 1.05 : 1.28, k);
  d.ears.forEach((e, i) => { e.rotation.x = walk ? Math.sin(t * freq + i) * 0.25 : happy ? Math.sin(t * 18) * 0.3 : 0; });
  d.tongue.visible = (happy || st.mood === 'feliz') && !sleep;
  d.blink -= dt;
  let ey = 1;
  if (st.eyesClosed || sleep) ey = 0.12;
  else if (d.blink < 0) { ey = 0.12; if (d.blink < -0.13) d.blink = 2 + Math.random() * 3; }
  d.eyes.forEach(e => { e.scale.y = ey; });
}

// ====================== Avatar 3D: quien pasea a Luna ======================
// Aspecto según la cara elegida al crear la partida.
const KID_LOOKS3 = {
  '🧒': { skin: '#f0c090', hair: '#6a4020', style: 'short', shirt: '#f0a020', pants: '#3858b8' },
  '👧': { skin: '#f0c090', hair: '#8a4a20', style: 'pigtails', shirt: '#f070b0', pants: '#7048b0' },
  '👦': { skin: '#d8a070', hair: '#2a1a10', style: 'short', shirt: '#40a0e0', pants: '#2c4070' },
  '👩': { skin: '#f0c8a0', hair: '#c07030', style: 'long', shirt: '#50b860', pants: '#3858b8' },
  '👨': { skin: '#c88858', hair: '#2a1a10', style: 'short', shirt: '#e05040', pants: '#4c4c58' },
  '🧑': { skin: '#e0b080', hair: '#503020', style: 'short', shirt: '#8060d0', pants: '#384050' },
  '👵': { skin: '#f0c8a0', hair: '#d8d8e0', style: 'bun', shirt: '#c060a0', pants: '#6c5878' },
  '👴': { skin: '#e0b088', hair: '#d8d8e0', style: 'bald', shirt: '#7c9c58', pants: '#5a4838' },
  '🦸': { skin: '#f0c090', hair: '#2a1a10', style: 'short', shirt: '#3060e0', pants: '#3060e0', cape: '#e03030' },
  '🧑‍🚀': { skin: '#f0c090', hair: '#6a4020', style: 'helmet', shirt: '#f0f0f4', pants: '#c8ccd8' },
};
const AVATARS3 = Object.keys(KID_LOOKS3);
function buildKid(avatar) {
  const L = KID_LOOKS3[avatar] || KID_LOOKS3['🧒'];
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const legs = [], arms = [];
  let hand = null;
  for (const sx of [-1, 1]) {
    const pv = new THREE.Group(); pv.position.set(sx * 0.13, 0.72, 0);
    pv.add(at(mesh(G.cap(0.09, 0.42), L.pants), 0, -0.3, 0));
    pv.add(at(mesh(G.box(0.2, 0.12, 0.3), '#3a2a2a'), 0, -0.66, 0.05));
    body.add(pv); legs.push(pv);
  }
  body.add(at(mesh(G.cap(0.25, 0.32), L.shirt), 0, 1.02, 0));
  if (L.cape) { const cp = mesh(G.box(0.55, 0.85, 0.05), L.cape); cp.position.set(0, 0.98, -0.27); cp.rotation.x = 0.12; body.add(cp); }
  for (const sx of [-1, 1]) {
    const pv = new THREE.Group(); pv.position.set(sx * 0.33, 1.28, 0); pv.rotation.z = sx * 0.12;
    pv.add(at(mesh(G.cap(0.075, 0.32), L.shirt), 0, -0.22, 0));
    const h = at(mesh(G.sph(0.085, 10, 8), L.skin), 0, -0.46, 0); pv.add(h);
    body.add(pv); arms.push(pv); if (sx > 0) hand = h;
  }
  const head = new THREE.Group(); head.position.y = 1.7; body.add(head);
  head.add(mesh(G.sph(0.3, 20, 16), L.skin));
  for (const sx of [-1, 1]) {
    head.add(at(mesh(G.sph(0.045, 8, 6), '#2a1d18', { cast: false }), sx * 0.1, 0.03, 0.27));
    head.add(at(mesh(G.sph(0.05, 8, 6), '#ff9fb4', { cast: false }), sx * 0.17, -0.06, 0.24));
  }
  const smile = mesh(new THREE.TorusGeometry(0.07, 0.018, 6, 12, Math.PI), '#c0505a', { cast: false }); smile.rotation.z = Math.PI; smile.position.set(0, -0.08, 0.28); head.add(smile);
  const hairCap = (r = 0.32) => mesh(new THREE.SphereGeometry(r, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2.1), L.hair);
  if (L.style === 'helmet') {
    head.add(at(hairCap(0.31), 0, 0.04, -0.02));
    head.add(new THREE.Mesh(G.sph(0.42, 20, 16), new THREE.MeshBasicMaterial({ color: '#cfefff', transparent: true, opacity: 0.28, depthWrite: false })));
    const ring = mesh(new THREE.TorusGeometry(0.33, 0.06, 8, 20), '#e0e4ee'); ring.rotation.x = Math.PI / 2; ring.position.y = -0.3; head.add(ring);
  } else if (L.style === 'bald') {
    for (const sx of [-1, 1]) head.add(at(mesh(G.sph(0.12, 10, 8), L.hair), sx * 0.26, 0.02, -0.06));
  } else {
    head.add(at(hairCap(), 0, 0.03, -0.03));
    if (L.style === 'long') head.add(at(mesh(G.box(0.56, 0.55, 0.14), L.hair), 0, -0.2, -0.2));
    if (L.style === 'pigtails') for (const sx of [-1, 1]) head.add(at(mesh(G.sph(0.12, 10, 8), L.hair), sx * 0.33, -0.05, -0.05));
    if (L.style === 'bun') head.add(at(mesh(G.sph(0.14, 10, 8), L.hair), 0, 0.3, -0.12));
  }
  root.scale.setScalar(0.85);
  return { root, body, legs, arms, head, hand, t: 0, mode: 'idle', modeT: 0, leash: false };
}
// mode: idle | throw | cheer
function animateKid(k, dt, moving, speed) {
  k.t += dt;
  const t = k.t, kk = 1 - Math.exp(-12 * dt);
  if (k.modeT > 0) { k.modeT -= dt; if (k.modeT <= 0) k.mode = 'idle'; }
  const f = 5 + speed * 1.6, sw = moving ? Math.sin(t * f) * 0.7 : 0;
  const cheer = k.mode === 'cheer', thr = k.mode === 'throw';
  k.legs[0].rotation.x = lerp(k.legs[0].rotation.x, sw, kk);
  k.legs[1].rotation.x = lerp(k.legs[1].rotation.x, -sw, kk);
  k.arms[0].rotation.x = lerp(k.arms[0].rotation.x, cheer ? -2.8 : -sw, kk);
  k.arms[1].rotation.x = thr ? -2.6 : lerp(k.arms[1].rotation.x, cheer ? -2.8 : k.leash ? -0.55 : sw, kk);
  k.body.position.y = moving ? Math.abs(Math.sin(t * f)) * 0.06 : cheer ? Math.abs(Math.sin(t * 10)) * 0.2 : Math.sin(t * 2) * 0.01;
  k.head.rotation.z = moving ? 0 : Math.sin(t * 0.9) * 0.06;
}

// Correa: segmentos finos sobre una curva que cuelga cuando está floja
const LEASH_N = 16;
const leash = new THREE.InstancedMesh(G.cyl(0.03, 0.03, 1, 5), M('#e0403c'), LEASH_N);
leash.frustumCulled = false; leash.visible = false;
const _la = new THREE.Vector3(), _lb = new THREE.Vector3(), _lm = new THREE.Vector3(), _lp = new THREE.Vector3(), _lq = new THREE.Vector3(), _ld = new THREE.Vector3();
const _lup = new THREE.Vector3(0, 1, 0), _lquat = new THREE.Quaternion(), _lmat = new THREE.Matrix4(), _lsc = new THREE.Vector3();
function drawLeash3(sc, show) {
  if (leash.parent !== sc) sc.add(leash);
  leash.visible = !!show;
  if (!show) return;
  kid.root.updateMatrixWorld(true); dog.root.updateMatrixWorld(true);
  kid.hand.getWorldPosition(_la); dog.collar.getWorldPosition(_lb);
  const dist = _la.distanceTo(_lb);
  _lm.addVectors(_la, _lb).multiplyScalar(0.5); _lm.y -= Math.max(0, 1.9 - dist) * 0.35 + 0.05;
  const pt = (t, o) => o.set(0, 0, 0).addScaledVector(_la, (1 - t) * (1 - t)).addScaledVector(_lm, 2 * (1 - t) * t).addScaledVector(_lb, t * t);
  for (let i = 0; i < LEASH_N; i++) {
    pt(i / LEASH_N, _lp); pt((i + 1) / LEASH_N, _lq);
    _ld.subVectors(_lq, _lp); const len = _ld.length() || 0.001;
    _lquat.setFromUnitVectors(_lup, _ld.divideScalar(len));
    _lsc.set(1, len, 1);
    _lmat.compose(_lp.add(_lq).multiplyScalar(0.5), _lquat, _lsc);
    leash.setMatrixAt(i, _lmat);
  }
  leash.instanceMatrix.needsUpdate = true;
}
function moveObj(o, sc) { if (o.parent !== sc) { if (o.parent) o.parent.remove(o); sc.add(o); } }
function clearScene(sc) { while (sc.children.length) sc.remove(sc.children[0]); }

// ====================== Partículas (emoji) ======================
const parts = [];
function burst(scene, emoji, pos, n = 5, size = 0.55) {
  for (let i = 0; i < n; i++) {
    const s = sprite(emoji, size);
    s.material = s.material.clone();
    s.position.set(pos.x + (Math.random() - 0.5) * 0.8, pos.y + Math.random() * 0.3, pos.z + (Math.random() - 0.5) * 0.8);
    scene.add(s);
    parts.push({ s, scene, life: 1.2 + Math.random() * 0.4, t: 0, vy: 0.9 + Math.random() * 0.6, vx: (Math.random() - 0.5) * 0.6 });
  }
}
function updateParts(dt) {
  for (let i = parts.length - 1; i >= 0; i--) {
    const q = parts[i];
    q.t += dt; q.s.position.y += q.vy * dt; q.s.position.x += q.vx * dt;
    q.s.material.opacity = 1 - q.t / q.life;
    if (q.t >= q.life) { q.scene.remove(q.s); q.s.material.dispose(); parts.splice(i, 1); }
  }
}

// ====================== Pueblo ======================
const town = new THREE.Scene();
const townL = lights(town);
const PL = [
  { id: 'bosque', icon: '🌲', name: 'Bosque', x: -28, z: -15, cave: true, ready: true, minDay: 3 },
  { id: 'casa', icon: '🏠', name: 'Casa', x: -16, z: -15, w: 6, d: 5, h: 3, wall: '#fff1dc', roof: '#ff7b7b', door: '#b0703c', ready: true },
  { id: 'escuela', icon: '🎓', name: 'Escuela', ready: true, minDay: 8, x: -4, z: -15, w: 6, d: 5, h: 3.3, wall: '#ffe58a', roof: '#6f8cff', door: '#5d78e8' },
  { id: 'tienda', icon: '🛒', name: 'Tienda', ready: true, x: 7, z: -15, w: 5, d: 4, h: 2.7, wall: '#ffd6e8', roof: '#ff8fc8', door: '#c0607a', stall: true },
  { id: 'vet', icon: '🏥', name: 'Veterinaria', ready: true, x: 18, z: -15, w: 6, d: 5, h: 3, wall: '#ffffff', roof: '#5fd0c4', door: '#3aa89c' },
  { id: 'parque', icon: '🌳', name: 'Parque', x: -4, z: 5, park: true, ready: true, minDay: 3 },
  { id: 'lago', icon: '🦆', name: 'Lago', x: 17, z: 7, lake: true, ready: true },
];
const colliders = { boxes: [], circles: [] };
const BOUNDS = { x0: -34, x1: 28, z0: -24, z1: 16 };
const triggers = [];

function buildTown() {
  town.background = new THREE.Color('#bfe6ff');
  town.fog = new THREE.Fog('#bfe6ff', 45, 95);
  const ground = mesh(new THREE.PlaneGeometry(160, 120), '#8fd46e', { cast: false, recv: true });
  ground.rotation.x = -Math.PI / 2; town.add(ground);
  const r = rng(424242);
  // manchas de pasto
  for (let i = 0; i < 40; i++) { const pt = mesh(G.cyl(1 + r() * 2.5, 1 + r() * 2.5, 0.02, 20), r() < 0.5 ? '#84cc63' : '#9ade7a', { cast: false, recv: true }); pt.position.set(-40 + r() * 80, 0.01, -30 + r() * 55); town.add(pt); }
  // caminos
  const paths = [[-31, -9, 26, -9], [-28, -12.5, -28, -9], [-16, -12, -16, -9], [-4, -12, -4, -9], [7, -12.5, 7, -9], [18, -12, 18, -9], [-4, -9, -4, -0.5], [10.5, -9, 10.5, 7]];
  const pathRects = [];
  for (const [x1, z1, x2, z2] of paths) {
    const w = Math.abs(x2 - x1) + 2.4, d = Math.abs(z2 - z1) + 2.4;
    const p = mesh(G.box(w, 0.06, d), '#f2d39a', { cast: false, recv: true });
    p.position.set((x1 + x2) / 2, 0.03, (z1 + z2) / 2); town.add(p);
    pathRects.push([Math.min(x1, x2) - 1.5, Math.min(z1, z2) - 1.5, Math.max(x1, x2) + 1.5, Math.max(z1, z2) + 1.5]);
  }
  const onPath = (x, z) => pathRects.some(([a, b, c, d]) => x > a && x < c && z > b && z < d);

  for (const pl of PL) {
    if (pl.w) buildHouse(pl);
    if (pl.cave) buildCave(pl);
    if (pl.park) buildPark(pl);
    if (pl.lake) buildLake(pl);
  }
  // árboles (evitan caminos, edificios, parque y lago)
  const near = (x, z, cx, cz, rr) => (x - cx) ** 2 + (z - cz) ** 2 < rr * rr;
  for (let i = 0; i < 260; i++) {
    const x = BOUNDS.x0 - 4 + r() * (BOUNDS.x1 - BOUNDS.x0 + 8), z = BOUNDS.z0 - 4 + r() * (BOUNDS.z1 - BOUNDS.z0 + 8);
    const edge = x < BOUNDS.x0 + 1 || x > BOUNDS.x1 - 1 || z < BOUNDS.z0 + 1 || z > BOUNDS.z1 - 1;
    const forest = x < -21 && z < -17.5;
    if (!edge && !forest && r() > 0.32) continue;
    if (onPath(x, z) || PL.some(pl => pl.w && Math.abs(x - pl.x) < pl.w / 2 + 2 && Math.abs(z - pl.z) < pl.d / 2 + 2)) continue;
    if (near(x, z, -4, 5, 8) || near(x, z, 17, 7, 7.5) || near(x, z, -28, -15, 4) || near(x, z, -16, -9, 3)) continue;
    if (colliders.circles.some(cc => near(x, z, cc.x, cc.z, 1.6))) continue;
    addTree(x, z, forest || r() < 0.35, 0.8 + r() * 0.5);
  }
  // flores (instanciadas)
  const fl = new THREE.InstancedMesh(G.sph(0.12, 6, 5), new THREE.MeshToonMaterial({ gradientMap: grad }), 420);
  const cols = ['#ff6b8b', '#ffd23f', '#ffffff', '#b98cff', '#ff9f43'].map(c => new THREE.Color(c));
  const mtx = new THREE.Matrix4();
  let n = 0;
  for (let i = 0; i < 2000 && n < 420; i++) {
    const x = BOUNDS.x0 + r() * (BOUNDS.x1 - BOUNDS.x0), z = BOUNDS.z0 + r() * (BOUNDS.z1 - BOUNDS.z0);
    if (onPath(x, z) || PL.some(pl => pl.w && Math.abs(x - pl.x) < pl.w / 2 + 0.8 && Math.abs(z - pl.z) < pl.d / 2 + 0.8) || near(x, z, 17, 7, 5.2)) continue;
    mtx.makeTranslation(x, 0.12, z); fl.setMatrixAt(n, mtx); fl.setColorAt(n, cols[Math.floor(r() * cols.length)]); n++;
  }
  fl.count = n; town.add(fl);
  // nubes
  for (let i = 0; i < 9; i++) {
    const cl = new THREE.Group();
    for (let j = 0; j < 4; j++) { const s = mesh(G.sph(1.2 + r(), 12, 10), '#ffffff', { cast: false }); s.position.set(j * 1.3, r() * 0.6, r()); cl.add(s); }
    cl.position.set(-40 + r() * 80, 14 + r() * 5, -40 + r() * 30); cl.userData.v = 0.3 + r() * 0.4;
    town.add(cl); clouds.push(cl);
  }
}
const clouds = [];
function addTree(x, z, pine, s) {
  const g = makeTree(pine);
  g.position.set(x, 0, z); g.scale.setScalar(s); g.rotation.y = Math.random() * 6;
  town.add(g);
  colliders.circles.push({ x, z, r: 0.55 * s, tree: true });
  g.traverse(o => { if (o.isMesh) o.userData.solidMat = o.material; });
  treeList.push({ g, x, z, s, top: (pine ? 3.4 : 2.9) * s, faded: false });
}
const treeList = [];
const fadeMats = new Map();
function fadeMat(m) {
  if (!fadeMats.has(m)) { const c = m.clone(); c.transparent = true; c.opacity = 0.28; c.depthWrite = false; fadeMats.set(m, c); }
  return fadeMats.get(m);
}
// Cámara -> avatar: los árboles que quedan en medio se ven transparentes
function fadeTrees() {
  const cx = camera.position.x, cy = camera.position.y, cz = camera.position.z;
  const kx = kidS.x, kz = kidS.z, ky = 1, dx = cx - kx, dz = cz - kz, L2 = dx * dx + dz * dz || 1;
  for (const tr of treeList) {
    let fade = false;
    if (tr.z > kz - 0.5) {
      const t = ((tr.x - kx) * dx + (tr.z - kz) * dz) / L2;
      if (t > 0 && t < 1) {
        const px = kx + dx * t, pz = kz + dz * t, lineY = ky + (cy - ky) * t;
        fade = Math.hypot(tr.x - px, tr.z - pz) < 1.3 * tr.s + 0.4 && lineY < tr.top + 0.5;
      }
    }
    if (fade !== tr.faded) {
      tr.faded = fade;
      tr.g.traverse(o => { if (o.isMesh) { o.material = fade ? fadeMat(o.userData.solidMat) : o.userData.solidMat; o.castShadow = !fade; } });
    }
  }
}
function makeTree(pine) {
  const g = new THREE.Group();
  g.add(at(mesh(G.cyl(0.18, 0.24, 1, 8), '#9a6236'), 0, 0.5, 0));
  if (pine) {
    for (let i = 0; i < 3; i++) { const c = mesh(G.cone(1.1 - i * 0.28, 1.3, 9), i % 2 ? '#3f9a5a' : '#2f8a4e'); c.position.y = 1.3 + i * 0.75; g.add(c); }
  } else {
    for (const [px, py, pz, rr] of [[0, 1.9, 0, 0.95], [0.5, 1.6, 0.2, 0.65], [-0.5, 1.7, -0.1, 0.7]]) { const b = mesh(G.sph(rr, 14, 10), '#5cbf5a'); b.position.set(px, py, pz); g.add(b); }
    if (Math.random() < 0.4) for (let i = 0; i < 3; i++) { const ap = mesh(G.sph(0.11, 8, 6), '#ff5c5c'); ap.position.set(Math.cos(i * 2) * 0.8, 1.6 + i * 0.2, Math.sin(i * 2) * 0.8); g.add(ap); }
  }
  return g;
}
function signBoard(icon, w = 1.6) {
  const g = new THREE.Group();
  g.add(mesh(G.box(w, w * 0.8, 0.12), '#ffffff'));
  const face = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.85, w * 0.7), new THREE.MeshBasicMaterial({ map: emojiTex(icon), transparent: true }));
  face.position.z = 0.07; g.add(face);
  return g;
}
function buildHouse(pl) {
  const g = new THREE.Group();
  const { w, d, h } = pl;
  if (pl.stall) {
    g.add(at(mesh(G.box(w, h * 0.55, d), pl.wall, { recv: true }), 0, h * 0.275, 0));
    for (const sx of [-1, 1]) g.add(at(mesh(G.cyl(0.12, 0.12, h + 0.6, 8), '#ffffff'), sx * (w / 2 - 0.2), (h + 0.6) / 2, d / 2 - 0.2));
    for (let i = 0; i < 6; i++) { const st = mesh(G.box(w / 6, 0.15, d + 0.6), i % 2 ? '#ffffff' : '#ff6b8b'); st.position.set(-w / 2 + w / 12 + i * w / 6, h + 0.5, 0.2); st.rotation.x = -0.25; g.add(st); }
    for (let i = 0; i < 5; i++) { const it = mesh(G.sph(0.22, 10, 8), ['#ff6b6b', '#ffd23f', '#6fc2ff', '#8be08b', '#ff9fd0'][i]); it.position.set(-w / 2 + 0.7 + i * (w - 1.4) / 4, h * 0.55 + 0.22, d / 2 - 0.4); g.add(it); }
  } else {
    g.add(at(mesh(G.box(w, h, d), pl.wall, { recv: true }), 0, h / 2, 0));
    const roof = mesh(G.cone(Math.max(w, d) * 0.78, 2.2, 4), pl.roof); roof.rotation.y = Math.PI / 4; roof.scale.set(1, 1, d / w); roof.position.y = h + 1.1; g.add(roof);
    const door = mesh(G.box(1.2, 1.9, 0.12), pl.door); door.position.set(0, 0.95, d / 2 + 0.03); g.add(door);
    const knob = mesh(G.sph(0.07), '#ffd23f'); knob.position.set(0.4, 0.95, d / 2 + 0.12); g.add(knob);
    for (const sx of [-1, 1]) {
      const win = mesh(G.box(1, 0.9, 0.1), '#bfe9ff', { extra: { emissive: '#000000' } }); win.position.set(sx * (w / 2 - 1.1), h * 0.6, d / 2 + 0.03); g.add(win); pl.wins = (pl.wins || []).concat(win);
      const fr = mesh(G.box(1.15, 0.12, 0.14), '#ffffff'); fr.position.set(sx * (w / 2 - 1.1), h * 0.6 - 0.5, d / 2 + 0.06); g.add(fr);
    }
    if (pl.id === 'casa') { const ch = mesh(G.box(0.6, 1.2, 0.6), '#c0605a'); ch.position.set(w / 2 - 1.2, h + 1.4, -0.6); g.add(ch); }
    if (pl.id === 'vet') { const cr = new THREE.Group(); cr.add(mesh(G.box(0.3, 0.9, 0.1), '#ff5c5c')); cr.add(mesh(G.box(0.9, 0.3, 0.1), '#ff5c5c')); cr.position.set(0, h + 0.4, d / 2 + 0.1); g.add(cr); }
    if (pl.id === 'escuela') { const pole = mesh(G.cyl(0.05, 0.05, 2.5, 6), '#888888'); pole.position.set(w / 2 - 0.3, h + 1.2, d / 2 - 0.3); g.add(pole); const fl = mesh(G.box(0.9, 0.5, 0.05), '#ff6b6b'); fl.position.set(w / 2 + 0.15, h + 2.2, d / 2 - 0.3); g.add(fl); pl.flag = fl; }
  }
  const sb = signBoard(pl.icon); sb.position.set(pl.stall ? 0 : -w / 2 + 0.9, pl.stall ? h + 1.4 : 2.2, d / 2 + 0.1); if (!pl.stall) sb.position.x = -w / 2 + 0.9; g.add(sb);
  g.position.set(pl.x, 0, pl.z);
  town.add(g);
  colliders.boxes.push({ x0: pl.x - w / 2 - 0.2, x1: pl.x + w / 2 + 0.2, z0: pl.z - d / 2 - 0.2, z1: pl.z + d / 2 + 0.2 });
  addTrigger(pl, pl.x, pl.z + d / 2 + 1.4, h + 2.8);
}
function buildCave(pl) {
  const g = new THREE.Group();
  const r = rng(99);
  for (let i = 0; i < 14; i++) {
    const a = Math.PI * (i / 13);
    const rk = mesh(new THREE.DodecahedronGeometry(0.9 + r() * 0.5), i % 2 ? '#9aa0b0' : '#b4b9c6');
    rk.position.set(Math.cos(a) * 2.6, Math.sin(a) * 2.6, 0); rk.rotation.set(r() * 3, r() * 3, 0); g.add(rk);
  }
  const hole = mesh(new THREE.CircleGeometry(2, 24, 0, Math.PI), '#1a1420', { cast: false }); hole.position.z = 0.1; g.add(hole);
  const sb = signBoard('🌲', 1.4); sb.position.set(3.4, 1, 0.6); g.add(sb);
  g.position.set(pl.x, 0, pl.z); town.add(g);
  colliders.boxes.push({ x0: pl.x - 3.6, x1: pl.x + 3.6, z0: pl.z - 1.6, z1: pl.z + 1 });
  addTrigger(pl, pl.x, pl.z + 2.6, 4.6);
}
let ball = null;
function buildPark(pl) {
  const f = new THREE.Group();
  f.add(mesh(G.cyl(1.6, 1.8, 0.6, 24), '#dfe3ee', { recv: true }));
  const water = mesh(G.cyl(1.35, 1.35, 0.1, 24), '#6cc8ff', { cast: false }); water.position.y = 0.32; f.add(water);
  f.add(at(mesh(G.cyl(0.25, 0.35, 1.6, 12), '#cfd3de'), 0, 0.8, 0));
  const top = mesh(G.sph(0.5, 14, 10), '#6cc8ff'); top.position.y = 1.7; f.add(top);
  f.position.set(pl.x, 0, pl.z); town.add(f);
  colliders.circles.push({ x: pl.x, z: pl.z, r: 1.9 });
  for (const [dx, dz, ry] of [[-4, 1, 1.57], [4, 1, -1.57], [0, 4.5, 3.14]]) {
    const b = new THREE.Group();
    b.add(at(mesh(G.box(2, 0.15, 0.6), '#d79b5f'), 0, 0.5, 0));
    b.add(at(mesh(G.box(2, 0.5, 0.12), '#d79b5f'), 0, 0.85, -0.25));
    for (const sx of [-0.8, 0.8]) b.add(at(mesh(G.box(0.12, 0.5, 0.5), '#777777'), sx, 0.25, 0));
    b.position.set(pl.x + dx, 0, pl.z + dz); b.rotation.y = ry; town.add(b);
  }
  ball = { m: mesh(G.sph(0.35, 18, 14), '#ffd23f'), v: new THREE.Vector3(), pushes: 0, cd: 0 };
  const stripe = mesh(new THREE.TorusGeometry(0.35, 0.05, 6, 20), '#ff6b8b'); ball.m.add(stripe);
  ball.m.position.set(pl.x + 2.5, 0.35, pl.z - 3); town.add(ball.m);
  addTrigger(pl, pl.x, pl.z - 2.6, 3.2);
}
let ducks = [];
function buildLake(pl) {
  const sand = mesh(G.cyl(5.4, 5.4, 0.05, 40), '#f6e3a8', { cast: false, recv: true }); sand.position.set(pl.x, 0.03, pl.z); town.add(sand);
  const water = mesh(G.cyl(4.6, 4.6, 0.08, 40), '#5ec2f5', { cast: false, recv: true }); water.position.set(pl.x, 0.07, pl.z); town.add(water);
  const dock = mesh(G.box(3.4, 0.15, 1.4), '#c98c55', { recv: true }); dock.position.set(pl.x - 4.3, 0.2, pl.z); town.add(dock);
  colliders.circles.push({ x: pl.x + 0.6, z: pl.z, r: 4.1 });
  for (let i = 0; i < 3; i++) {
    const dk = new THREE.Group();
    { const bd = mesh(G.sph(0.3), '#ffe066'); bd.scale.set(1, 0.7, 1.3); dk.add(bd); }
    dk.add(at(mesh(G.sph(0.18), '#ffe066'), 0, 0.3, 0.3));
    { const bk = at(mesh(G.cone(0.07, 0.18, 6), '#ff9f43'), 0, 0.28, 0.5); bk.rotation.x = Math.PI / 2; dk.add(bk); }
    dk.userData = { a: i * 2.1, r: 1.5 + i * 0.9 };
    town.add(dk); ducks.push(dk);
  }
  ducks.forEach(dk => { dk.userData.cx = pl.x + 0.8; dk.userData.cz = pl.z; });
  addTrigger(pl, pl.x - 5.4, pl.z, 2.4);
}
function addTrigger(pl, x, z, markerY) {
  const mk = sprite('⭐', 1.5, true);
  mk.position.set(x, markerY, pl.w ? pl.z : z);
  mk.visible = false;
  town.add(mk);
  triggers.push({ pl, x, z, mk, baseY: markerY, emoji: '' });
}

// Huesos escondidos del día (mismo registro que el mapa 2D)
const boneMeshes = [];
function boneMesh() {
  const g = new THREE.Group();
  const shaft = mesh(G.cyl(0.09, 0.09, 0.6, 8), '#fff6e0'); shaft.rotation.z = Math.PI / 2; g.add(shaft);
  for (const sx of [-0.32, 0.32]) for (const sz of [-0.09, 0.09]) { const k = mesh(G.sph(0.12, 10, 8), '#fff6e0'); k.position.set(sx, 0, sz); g.add(k); }
  return g;
}
function spawnBones3D(p) {
  boneMeshes.forEach(b => town.remove(b.m)); boneMeshes.length = 0;
  if (p.mapBones.day !== p.day) p.mapBones = { day: p.day, taken: [] };
  const r = rng(p.bornAt % 100000 + p.day * 7919 + 3);
  let guard = 0;
  for (let i = 0; i < 8 && guard < 3000; guard++) {
    const x = BOUNDS.x0 + 2 + r() * (BOUNDS.x1 - BOUNDS.x0 - 4), z = BOUNDS.z0 + 2 + r() * (BOUNDS.z1 - BOUNDS.z0 - 4);
    if (blocked(x, z, 0.8)) continue;
    if (!p.mapBones.taken.includes(i)) { const m = boneMesh(); m.position.set(x, 0.45, z); town.add(m); boneMeshes.push({ m, i }); }
    i++;
  }
  // Tesoro del día (desde la semana 2): enterrado, se busca con «frío / caliente»
  treasure3 = null;
  if (p.day >= 2 && !(p.treasure && p.treasure.day === p.day)) {
    const r2 = rng(p.bornAt % 99991 + p.day * 104729);
    for (let k = 0; k < 800; k++) {
      const x = BOUNDS.x0 + 2 + r2() * (BOUNDS.x1 - BOUNDS.x0 - 4), z = BOUNDS.z0 + 2 + r2() * (BOUNDS.z1 - BOUNDS.z0 - 4);
      if (blocked(x, z, 1) || Math.hypot(x + 16, z + 9) < 8) continue;
      treasure3 = { x, z };
      break;
    }
  }
}
let treasure3 = null;

function blocked(x, z, r) {
  if (x < BOUNDS.x0 || x > BOUNDS.x1 || z < BOUNDS.z0 || z > BOUNDS.z1) return true;
  if (colliders.boxes.some(b => x > b.x0 - r && x < b.x1 + r && z > b.z0 - r && z < b.z1 + r)) return true;
  // muelle: deja pasar sobre la franja del muelle
  if (Math.abs(z - 7) < 0.7 && x > 11 && x < 15) return false;
  return colliders.circles.some(c => (x - c.x) ** 2 + (z - c.z) ** 2 < (c.r + r) ** 2);
}

// ====================== Casa (interior) ======================
const home = new THREE.Scene();
const homeL = lights(home);
const spots = {};
let messMeshes = [];
function buildHome() {
  home.background = new THREE.Color('#ffe9f4');
  homeL.sun.position.set(4, 10, 6); homeL.sun.target.position.set(0, 0, 0);
  const floor = mesh(G.box(12, 0.2, 9), '#e7b98a', { cast: false, recv: true }); floor.position.y = -0.1; home.add(floor);
  for (let i = -5; i <= 5; i += 1) { const l = mesh(G.box(0.03, 0.01, 9), '#d4a274', { cast: false }); l.position.set(i, 0.005, 0); home.add(l); }
  const back = mesh(G.box(12, 5, 0.2), '#ffd1e6', { recv: true }); back.position.set(0, 2.5, -4.5); home.add(back);
  const left = mesh(G.box(0.2, 5, 9), '#c8f1e4', { recv: true }); left.position.set(-6, 2.5, 0); home.add(left);
  const winFrame = mesh(G.box(2.6, 1.8, 0.1), '#ffffff'); winFrame.position.set(2, 2.9, -4.38); home.add(winFrame);
  const sky = mesh(G.box(2.3, 1.5, 0.1), '#9fdcff', { cast: false }); sky.position.set(2, 2.9, -4.32); home.add(sky);
  const pic = signBoard('🐾', 1.2); pic.position.set(-2.5, 3, -4.35); home.add(pic);
  const rug = mesh(G.cyl(2.2, 2.2, 0.04, 32), '#ffb3d1', { cast: false, recv: true }); rug.position.set(0, 0.02, 0.5); home.add(rug);
  // cama
  const bed = new THREE.Group();
  bed.add(at(mesh(G.cyl(1.2, 1.3, 0.35, 24), '#8f6fd8', { recv: true }), 0, 0.18, 0));
  bed.add(at(mesh(G.cyl(1.0, 1.0, 0.1, 24), '#ffe8f4', { recv: true }), 0, 0.36, 0));
  const ring = mesh(new THREE.TorusGeometry(1.15, 0.22, 10, 26), '#a78bfa'); ring.rotation.x = Math.PI / 2; ring.position.y = 0.4; bed.add(ring);
  bed.position.set(-3.6, 0, -2.6); home.add(bed);
  // platos
  const bowl = (color, x, fill) => {
    const g = new THREE.Group();
    g.add(at(mesh(G.cyl(0.45, 0.35, 0.25, 20), color), 0, 0.13, 0));
    const f = mesh(G.cyl(0.36, 0.36, 0.05, 20), fill, { cast: false }); f.position.y = 0.24; g.add(f); g.userData.fill = f;
    g.position.set(x, 0, -3); home.add(g); return g;
  };
  spots.food = bowl('#ff7b7b', 0.6, '#b0703c');
  spots.water = bowl('#6f8cff', 2.0, '#7fd6ff');
  // caja de juguetes
  const box = mesh(G.box(1.4, 0.8, 1), '#ffd23f'); box.position.set(4.3, 0.4, -3); home.add(box);
  const tb = mesh(G.sph(0.28), '#6fc2ff'); tb.position.set(4.0, 0.95, -3); home.add(tb);
  const tb2 = mesh(G.box(0.3, 0.3, 0.3), '#ff8fc8'); tb2.position.set(4.6, 0.95, -2.9); home.add(tb2);
  // bañera
  const tub = new THREE.Group();
  tub.add(at(mesh(G.box(2.2, 0.8, 1.4), '#ffffff'), 0, 0.45, 0));
  tub.add(at(mesh(G.box(1.9, 0.1, 1.1), '#bfe9ff', { cast: false }), 0, 0.82, 0));
  for (const sx of [-0.9, 0.9]) for (const sz of [-0.5, 0.5]) tub.add(at(mesh(G.sph(0.12), '#ffd23f'), sx, 0.06, sz));
  tub.position.set(-4.3, 0, 1.6); home.add(tub);
  spots.tub = tub;
  // planta
  const pot = mesh(G.cyl(0.35, 0.28, 0.6, 14), '#ff9f43'); pot.position.set(5.2, 0.3, 0.8); home.add(pot);
  for (let i = 0; i < 3; i++) { const lf = mesh(G.sph(0.35, 10, 8), '#5cbf5a'); lf.position.set(5.2 + Math.cos(i * 2) * 0.2, 0.9 + i * 0.15, 0.8 + Math.sin(i * 2) * 0.2); home.add(lf); }
}
const HOME_SPOT = { food: [0.6, -2.0, Math.PI], water: [2.0, -2.0, Math.PI], bed: [-3.6, -2.6, 0.6], tub: [-4.3, 1.6, 0.8], center: [0, 0.6, 0.3], toys: [3.6, -2.2, Math.PI * 0.8] };
function refreshMess(p) {
  messMeshes.forEach(m => home.remove(m)); messMeshes = [];
  const pos = [[2.6, 1.6], [-1.4, 2.4], [3.6, 2.6]];
  for (let i = 0; i < Math.min(p.mess, 3); i++) { const s = sprite('💩', 0.8); s.position.set(pos[i][0], 0.4, pos[i][1]); home.add(s); messMeshes.push(s); }
}

// ====================== Estado del juego ======================
let scene = town;
let dog = null;
const luna = { x: -16, z: -9, ry: 0, speed: 0, mode: 'idle', modeT: 0, path: null };
let where = 'town';                  // town | home
let busy = false;                   // animación de acción en curso dentro de casa
let walkAcc = 0;
const input = { up: 0, down: 0, left: 0, right: 0, a: false, jx: 0, jz: 0 };
// Afuera se controla al avatar (kidS); Luna lo sigue por sus pasos (trail).
let kid = null;
const kidS = { x: -16, z: -8.6, ry: 0 };
let trail = [];
function placePair(x, z, ry = 0) {
  kidS.x = x; kidS.z = z; kidS.ry = ry;
  luna.x = x - Math.sin(ry) * 1.3; luna.z = z - Math.cos(ry) * 1.3; luna.ry = ry; luna.path = null;
  trail = [{ x: luna.x, z: luna.z }, { x, z }];
}
function placeKid(x, z, ry = 0) { kidS.x = x; kidS.z = z; kidS.ry = ry; trail = [{ x: luna.x, z: luna.z }, { x, z }]; }
// ¿Luna está en el mismo lugar que el avatar? (si duerme en casa, el avatar puede ir solo a otros lugares)
const lunaWithKid = () => !!dog && !!kid && dog.root.parent === kid.root.parent;
function followLuna3(dt, maxSp, size) {
  const last = trail[trail.length - 1];
  if (!last || Math.hypot(kidS.x - last.x, kidS.z - last.z) >= 0.05) trail.push({ x: kidS.x, z: kidS.z });
  if (trail.length > 300) trail.shift();
  let need = 1.15 + size * 0.12, px = kidS.x, pz = kidS.z, tx = px, tz = pz;
  for (let i = trail.length - 1; i >= 0; i--) {
    const q = trail[i], s = Math.hypot(px - q.x, pz - q.z);
    if (s >= need) { const f = need / s; tx = px + (q.x - px) * f; tz = pz + (q.z - pz) * f; need = 0; break; }
    need -= s; px = q.x; pz = q.z; tx = px; tz = pz;
  }
  const dx = tx - luna.x, dz = tz - luna.z, d = Math.hypot(dx, dz);
  if (d < 0.03) return null;
  const s = Math.min(d, maxSp * dt * (d > 1.5 ? 1.7 : 1));
  luna.x += dx / d * s; luna.z += dz / d * s;
  return { dx: dx / d, dz: dz / d, sp: s / dt };
}

function startGame(pr) {
  current = pr;
  W.root.activeId = pr.id;
  const p = pr.pet;
  simulate(p, now(p));
  if (dog && dog.root.parent) dog.root.parent.remove(dog.root);
  dog = buildDog(p);
  if (kid && kid.root.parent) kid.root.parent.remove(kid.root);
  kid = buildKid(pr.avatar);
  placePair(-16, -8.6, 0);
  scene = town; where = 'town';
  town.add(dog.root, kid.root);
  spawnBones3D(p);
  saveRoot();
  $('#picker').hidden = true;
  $('#hud').hidden = false;
  refreshHUD();
  setDayLight(p);
  speak(`¡Hola ${pr.name}! ¡Vamos a pasear!`);
  setTimeout(() => dogSound('happy', stageOf(p.day).size), 2200);
}

function setDayLight(p) {
  const hr = new Date(now(p)).getHours();
  const night = hr < 7 || hr >= 20, dusk = hr >= 18 && !night;
  isNight = night;
  const sky = night ? '#2d3466' : dusk ? '#ffc7a8' : '#bfe6ff';
  town.background.set(sky); town.fog.color.set(sky);
  townL.hemi.intensity = night ? 0.7 : 1.7;
  townL.sun.intensity = night ? 0.5 : dusk ? 1.6 : 2.3;
  townL.sun.color.set(night ? '#9fb0ff' : dusk ? '#ffc08a' : '#fff4e0');
  for (const pl of PL) for (const w of pl.wins || []) w.material = M('#bfe9ff', { emissive: night ? '#ffd27a' : '#000000' });
}

// ---------- HUD ----------
const MOOD_FACE = { feliz: '😄', normal: '🙂', triste: '😢', enferma: '🤒', dormida: '😴' };
function refreshHUD() {
  if (!current) return;
  const p = current.pet;
  const bars = STAT_INFO.map(i => { const v = Math.round(p.stats[i.key]); return `<div class="hb ${v < 25 ? 'low' : ''}" title="${i.label}"><span>${i.icon}</span><i><b style="width:${v}%;background:${i.color}"></b></i></div>`; }).join('');
  $('#hud').innerHTML = `<div class="hud-left"><a class="hbtn" href="../index.html" aria-label="Volver al juego 2D">🕹️</a><span class="face">${MOOD_FACE[moodOf(p)]}</span></div>
    <div class="hud-bars">${bars}</div><div class="hud-right"><span class="chip">🦴 ${p.bones}</span><span class="chip">${STAGE_ICON3[stageOf(p.day).id]} ${p.day}</span><button class="hbtn" id="diary3" aria-label="Diario">📖</button><button class="hbtn" id="music" aria-label="Música">${Music.isOn() ? '🎵' : '🔕'}</button><button class="hbtn" id="mute" aria-label="Sonido">${muted ? '🔇' : '🔊'}</button></div>`;
  refreshGuide3();
}
const STAGE_ICON3 = { recien: '🐣', bebe: '🍼', cachorra: '🐶', joven: '🐕', adulta: '🎂' };

// ---------- Prompt de entrada ----------
let nearT = null;
function updatePrompt() {
  const el = $('#prompt'), p = current.pet;
  let html = '';
  if (where === 'town') {
    if (p.asleep && lunaNear3()) html = `<button class="go-btn" data-act="wake" aria-label="Despertar">💤 ➜ ⏰</button>`;
    else if (nearT) html = p.day < (nearT.pl.minDay || 1) ? `<button class="go-btn locked" data-act="enter" aria-label="${nearT.pl.name}: cerrado">🔒 ${nearT.pl.icon} <small>⏳${nearT.pl.minDay - p.day}</small></button>` : `<button class="go-btn" data-act="enter" aria-label="Entrar a ${nearT.pl.name}">Ⓐ ${nearT.pl.icon}</button>`;
  }
  if (el.__h !== html) { el.innerHTML = html; el.__h = html; }
  el.hidden = !html;
}

// ---------- Acciones dentro de casa ----------
function homeActions() {
  if (where !== 'home') return;   // una acción que termina tarde no debe pintar botones en otro lugar
  const p = current.pet, s = p.stats, d = p.day, e = today(p), f = foodFor(d);
  const off = (cond, badge) => (cond ? badge : '');
  const sleeping = p.asleep ? '💤' : '';
  const list = [
    ['eat', f.icon, 'Comer', sleeping || off(s.saciedad >= 90, '😋')],
    d >= 4 ? ['water', '💧', 'Agua', sleeping || off(s.hidratacion >= 92, '💧')] : null,
    ['pet', '🤗', 'Mimos', ''],
    ['memory', '🃏', 'Memoria', ''],
    p.items.mordedor && d >= 3 ? ['toy', '🧸', 'Jugar', sleeping || off(s.energia < 15, '😴')] : null,
    p.asleep ? ['wake', '⏰', 'Despertar', ''] : ['sleep', '🛏️', 'Dormir', ''],
    ['nap', '😴', 'Siesta', sleeping || off(e.naps >= 3, '⏳') || off(s.energia >= 90, '⚡')],
    d < 8 ? ['wipe', '🧽', 'Limpiar', sleeping] : ['bath', '🛁', 'Baño', sleeping || off(p.lastDone.bano && d - p.lastDone.bano < 3, '⏳')],
    d >= 3 ? ['brush', '🖌️', 'Cepillar', sleeping] : null,
    p.mess ? ['clean', '🧻', 'Recoger', ''] : null,
    d >= 3 ? ['potty', '🧻', 'Papel', sleeping || off(p.potty >= 100, '✔') || off((e.potty || 0) >= 3, '⏳')] : null,
    ['ropa', '🎀', 'Ropa', p.acc.owned.length ? '' : '🛒'],
    ['exit', '🚪', 'Salir', ''],
    ['help', '❓', 'Ayuda', ''],
  ].filter(Boolean);
  $('#actions').innerHTML = list.map(([id, icon, label, badge]) =>
    `<button class="opt ${badge ? 'off' : ''}" data-act="${id}" data-say="${label}" ${badge ? 'aria-disabled="true"' : ''} aria-label="${label}"><span class="oi">${icon}</span><span class="on">${label}</span>${badge ? `<span class="badge">${badge}</span>` : ''}</button>`).join('');
  if (typeof refreshGuide3 === 'function') setTimeout(refreshGuide3, 0);
}
function counted(kind) {
  const e = today(current.pet);
  if (kind === 'meal') e.meals++; if (kind === 'water') e.water++; if (kind === 'play') e.play++; if (kind === 'care') e.care++;
}
// Luna camina hasta el lugar, hace la animación y luego se aplica el efecto
function act(id) {
  const p = current.pet;
  if (busy && id !== 'exit') return;
  if (id !== 'exit') setTimeout(() => guideEvent3('do:' + id), 0);
  const f = foodFor(p.day);
  const run = (spot, mode, secs, fx, kind, icon, word, emoji, msg, after) => {
    busy = true;
    walkTo(HOME_SPOT[spot], () => {
      luna.mode = mode; luna.modeT = secs;
      if (spot === 'food') spots.food.userData.fill.visible = true;
      speak(word); sfx('pop');
      const t0 = performance.now();
      const tick = setInterval(() => { burst(home, emoji, new THREE.Vector3(luna.x, 1.6 * dog.root.scale.x + 0.3, luna.z), 1, 0.45); if (performance.now() - t0 > secs * 1000) clearInterval(tick); }, 350);
      setTimeout(() => {
        applyFx(p, fx); counted(kind); addEvent(p, icon, msg);
        if (after) after();
        const gains = Object.entries(fx).filter(([, v]) => v > 0).map(([k]) => STAT_ICON[k]).join('');
        pop(icon, gains ? '+' + gains : '');
        luna.mode = mode === 'sleep' ? 'sleep' : 'happy'; luna.modeT = mode === 'sleep' ? 0 : 1;
        if (mode !== 'sleep') dogSound('happy', dogSize(), 0.7);
        busy = false; saveRoot(); refreshHUD(); homeActions(); refreshMess(p); refreshGuide3();
      }, secs * 1000);
    });
  };
  switch (id) {
    case 'eat': return run('food', 'eat', 2.2, f.fx, 'meal', f.icon, '¡Ñam ñam!', '🍖', f.msg);
    case 'water': return run('water', 'eat', 1.8, { hidratacion: 40 }, 'water', '💧', '¡Glu glu!', '💧', 'Luna bebió agua fresca.');
    case 'pet': luna.mode = 'happy'; luna.modeT = 1.4; burst(home, '💖', new THREE.Vector3(luna.x, 1.4, luna.z), 6); applyFx(p, p.asleep ? { felicidad: 4 } : { felicidad: 12, energia: -2 }); counted('play'); addEvent(p, '🤗', 'Mimos y caricias.'); pop('🤗', '+💖'); speak('¡Te quiero!'); setTimeout(() => dogSound('happy', dogSize()), 600); saveRoot(); refreshHUD(); return;
    case 'toy': return run('toys', 'happy', 2, { felicidad: 18, energia: -8 }, 'play', '🧸', '¡A jugar!', '⭐', 'Jugó con el mordedor.');
    case 'sleep': busy = true; walkTo(HOME_SPOT.bed, () => { p.asleep = true; luna.mode = 'sleep'; addEvent(p, '🛏️', 'Se fue a dormir a su camita.'); pop('🛏️', '💤'); speak('Buenas noches, Luna'); busy = false; saveRoot(); refreshHUD(); homeActions(); }); return;
    case 'wake': p.asleep = false; if (p.stats.energia < 60) p.stats.felicidad = clamp(p.stats.felicidad - 6, 0, 100); luna.mode = 'idle'; addEvent(p, '⏰', 'Despertaste a Luna.'); pop('⏰'); speak('¡Buenos días!'); saveRoot(); refreshHUD(); homeActions(); return;
    case 'nap': return run('bed', 'sleep', 2.5, { energia: 25 }, null, '😴', 'Siestita', '💤', 'Durmió una siesta cortita.', () => { today(p).naps++; luna.mode = 'idle'; });
    case 'wipe': return run('center', 'happy', 1.6, { higiene: 20 }, 'care', '🧽', '¡Limpita!', '🫧', 'La limpiaste con un paño tibio.');
    case 'bath': return run('tub', 'happy', 2.6, { higiene: 60, felicidad: p.items.champu > 0 ? 8 : -3 }, 'care', '🛁', '¡Al agua!', '🫧', 'Se dio un baño.', () => { p.lastDone.bano = p.day; if (p.items.champu > 0) p.items.champu--; });
    case 'brush': return run('center', 'happy', 1.6, { higiene: 10, felicidad: 5 }, 'care', '🖌️', '¡Qué suave!', '✨', 'Le cepillaste el pelo.');
    case 'clean': p.mess = 0; counted('care'); addEvent(p, '🧻', 'Limpiaste los accidentes.'); burst(home, '✨', new THREE.Vector3(1.5, 0.6, 2), 6); pop('🧻', '✔'); speak('¡Todo limpio!'); refreshMess(p); saveRoot(); homeActions(); return;
    case 'potty': { if (p.asleep || p.potty >= 100 || (today(p).potty || 0) >= 3) return; today(p).potty = (today(p).potty || 0) + 1; const g = 8 + Math.round(Math.random() * 6); p.potty = Math.min(100, p.potty + g); today(p).train++; luna.mode = 'sit'; luna.modeT = 1.2; pop('🧻', `+${g}%`); speak('¡Muy bien, en el papel!'); addEvent(p, '🎓', `Practicaron usar el papel (${p.potty}%).`); if (p.potty >= 100) addMilestone(p, 'potty', '🏆', 'Luna aprendió a hacer sus necesidades en su lugar.'); saveRoot(); homeActions(); return; }
    case 'ropa': { const opts = [null, ...p.acc.owned]; p.acc.worn = opts[(opts.indexOf(p.acc.worn) + 1) % opts.length]; luna.mode = 'happy'; luna.modeT = 1; pop(p.acc.worn ? SHOP.find(x => x.id === p.acc.worn).icon : '🚫'); speak(p.acc.worn ? '¡Qué guapa!' : ''); saveRoot(); return; }
    case 'exit': return goTown();
    case 'memory': return startMemory3();
  }
}

// ---------- Parque (acciones sin cambiar de escena) ----------
let inParkUI = false;
function openPark() {
  inParkUI = true; where = 'park';
  speak('Parque'); dogSound('bark', dogSize(), 0.6);
  parkActions(); $('#actions').hidden = false; $('#prompt').hidden = true;
  guideEvent3('open:parque');
}
function closePark() { inParkUI = false; where = 'town'; busy = false; luna.path = null; $('#actions').hidden = true; }
function parkActions() {
  if (where !== 'park') return;   // una acción que termina tarde no debe pintar botones en otro lugar
  const p = current.pet, tired = p.asleep ? '💤' : (p.sick && !p.sick.treated) ? '🤒' : p.stats.energia < 15 ? '😴' : '';
  const list = [['agility', '🏃', 'Carrera', tired], ['hide', '🙈', 'Escondite', p.day < 5 ? '🔒' : tired], ['stroll', '🚶', 'Pasear', tired], ['kick', '⚽', 'Pelota', tired], ['bench', '🪑', 'Descansar', p.asleep ? '💤' : p.stats.energia >= 95 ? '⚡' : ''], ['closepark', '🚪', 'Salir', ''], ['help', '❓', 'Ayuda', '']];
  $('#actions').innerHTML = list.map(([id, icon, label, badge]) =>
    `<button class="opt ${badge ? 'off' : ''}" data-act="${id}" data-say="${label}" ${badge ? 'aria-disabled="true"' : ''} aria-label="${label}"><span class="oi">${icon}</span><span class="on">${label}</span>${badge ? `<span class="badge">${badge}</span>` : ''}</button>`).join('');
}
function parkAct(id) {
  const p = current.pet, P0 = PL.find(x => x.id === 'parque');
  if (id === 'closepark') return closePark();
  if (busy) return;
  if (id === 'agility') { closePark(); return startAgility3(); }
  if (id === 'hide') { closePark(); return startHide3(); }
  const finish = (fx, icon, msg, word) => {
    applyFx(p, fx); today(p).play += icon === '🪑' ? 0 : 1; addEvent(p, icon, msg);
    const gains = Object.entries(fx).filter(([, v]) => v > 0).map(([k]) => STAT_ICON[k]).join('');
    pop(icon, gains ? '+' + gains : ''); speak(word); dogSound('happy', dogSize(), 0.7);
    luna.mode = 'happy'; luna.modeT = 1; busy = false; outdoorRisk(p); saveRoot(); refreshHUD(); parkActions();
  };
  busy = true;
  if (id === 'stroll') {   // vuelta alrededor de la fuente
    const pts = [0, 1, 2, 3, 4].map(i => [P0.x + Math.cos(i * Math.PI / 2) * 3.2, P0.z + Math.sin(i * Math.PI / 2) * 3.2]);
    const next = () => { const q = pts.shift(); if (!q) { today(p).walk = 1; return finish({ felicidad: 15, energia: -10, hidratacion: -5 }, '🚶', 'Paseo alrededor de la fuente.', '¡Qué lindo paseo!'); } walkTo([q[0], q[1], 0], next); };
    next();
  } else if (id === 'kick') {
    const b = ball.m.position;
    walkTo([b.x - 0.9, b.z, Math.PI / 2], () => {
      ball.v.set(6 + Math.random() * 3, 0, (Math.random() - 0.5) * 6); sfx('pop'); dogSound('bark', dogSize());
      luna.mode = 'happy'; luna.modeT = 1.5;
      setTimeout(() => finish({ felicidad: 16, energia: -9 }, '⚽', 'Jugó con la pelota en el parque.', '¡Gol!'), 1500);
    });
  } else if (id === 'bench') {
    walkTo([P0.x - 3.2, P0.z + 1, Math.PI / 2], () => { luna.mode = 'sleep'; setTimeout(() => finish({ energia: 10 }, '🪑', 'Descansaron en la banca.', 'Descansito'), 1800); });
  }
}

function walkTo(spot, done) {
  luna.path = { x: spot[0], z: spot[1], ry: spot[2], done };
}

// ---------- Transiciones ----------
function fade(cb) {
  const f = $('#fade');
  f.classList.add('on');
  setTimeout(() => { cb(); setTimeout(() => f.classList.remove('on'), 60); }, 380);
}
function goHome() { fade(enterHomeNow); }
function enterHomeNow() {
  {
    moveObj(dog.root, home); moveObj(kid.root, home);
    scene = home; where = 'home';
    luna.x = 0; luna.z = 2.8; luna.ry = Math.PI; luna.path = null;
    kidS.x = 2.4; kidS.z = 3.4; kidS.ry = Math.PI;
    if (current.pet.asleep) { luna.x = HOME_SPOT.bed[0]; luna.z = HOME_SPOT.bed[1]; }
    refreshMess(current.pet);
    homeActions();
    $('#actions').hidden = false;
    $('#prompt').hidden = true;
    speak('Casa');
    setTimeout(() => dogSound('bark', dogSize(), 0.6), 600);
    guideEvent3('open:casa');
  }
}
function goTown() {
  busy = false;
  fade(() => {
    const sleeping = current.pet.asleep, lx = luna.x, lz = luna.z, lr = luna.ry;
    if (!sleeping) moveObj(dog.root, town);
    moveObj(kid.root, town);
    scene = town; where = 'town';
    placePair(-16, -9.4, 0);
    if (sleeping) { luna.x = lx; luna.z = lz; luna.ry = lr; speak('Luna se queda durmiendo en su camita. ¡Mientras, puedes pasear!'); }
    $('#actions').hidden = true;
    guideEvent3('close:casa');
  });
}

// ====================== Establecimientos 3D ======================
// Veterinaria, Tienda y Escuela con interior propio; Lago con acciones al aire libre; Bosque con niveles de saltos.

// ---------- Utilidades comunes ----------
function renderActions(list) {
  list = [['help', '❓', 'Ayuda', '']].concat(list);
  $('#actions').innerHTML = list.filter(Boolean).map(([id, icon, label, badge, fx]) =>
    `<button class="opt ${badge ? 'off' : ''}" data-act="${id}" data-say="${label}" ${badge ? 'aria-disabled="true"' : ''} aria-label="${label}"><span class="oi">${icon}</span><span class="on">${label}</span>${fx ? `<span class="ofx">${fx}</span>` : ''}${badge ? `<span class="badge">${badge}</span>` : ''}</button>`).join('');
  if (typeof refreshGuide3 === 'function') setTimeout(refreshGuide3, 0);
}
function setInfo(html) { const el = $('#roominfo'); el.innerHTML = html || ''; el.hidden = !html; }
let cardCb = null;
function card3(html, cb) {
  $('#card3-box').innerHTML = `${html}<div class="row-btns"><button class="go" data-card="ok" aria-label="Continuar">▶</button></div>`;
  $('#card3').hidden = false; cardCb = cb || null;
}
function closeCard3() { if ($('#card3').hidden) return; $('#card3').hidden = true; const cb = cardCb; cardCb = null; if (cb) cb(); }
const starBar3 = pct => '★'.repeat(Math.round(pct / 20)) + '☆'.repeat(5 - Math.round(pct / 20));
const playBlock = p => p.asleep ? '💤' : (p.sick && !p.sick.treated) ? '🤒' : p.stats.energia < 15 ? '😴' : p.stats.saciedad < 10 ? '🍖' : '';

// Personaje que atiende (original, hecho con formas simples)
function makeNPC({ coat = '#ffffff', skin = '#f2c9a0', hair = '#6b4a2b', extra = null }) {
  const g = new THREE.Group();
  for (const sx of [-0.18, 0.18]) g.add(at(mesh(G.cyl(0.11, 0.11, 0.8, 8), '#4a4a6a'), sx, 0.4, 0));
  g.add(at(mesh(G.cap(0.38, 0.6), coat), 0, 1.25, 0));
  const head = at(mesh(G.sph(0.34, 18, 14), skin), 0, 2.05, 0); g.add(head);
  g.add(at(mesh(new THREE.SphereGeometry(0.36, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2.2), hair), 0, 2.12, -0.03));
  for (const sx of [-0.12, 0.12]) g.add(at(mesh(G.sph(0.045), '#2a1d18', { cast: false }), sx, 2.1, 0.3));
  const smile = mesh(new THREE.TorusGeometry(0.09, 0.022, 6, 12, Math.PI), '#c0505a', { cast: false }); smile.rotation.z = Math.PI; smile.position.set(0, 1.97, 0.31); g.add(smile);
  for (const sx of [-0.2, 0.2]) g.add(at(mesh(G.sph(0.05), '#ff9fb4', { cast: false }), sx, 2.0, 0.27));
  const arms = [];
  for (const sx of [-1, 1]) { const pv = new THREE.Group(); pv.position.set(sx * 0.45, 1.55, 0); const a = at(mesh(G.cap(0.09, 0.45), coat), 0, -0.3, 0); pv.add(a); pv.rotation.z = sx * 0.15; g.add(pv); arms.push(pv); }
  if (extra) extra(g);
  g.userData = { arms, t: Math.random() * 5 };
  return g;
}
function animateNPC(n, dt) { if (!n) return; const u = n.userData; u.t += dt; n.position.y = Math.abs(Math.sin(u.t * 2)) * 0.04; u.arms[1].rotation.z = 0.15 + Math.max(0, Math.sin(u.t * 1.3)) * 0.9 * (u.wave > 0 ? 1 : 0.15); if (u.wave > 0) u.wave -= dt; }

// Habitación básica: piso, dos paredes y ventana
function buildRoom(scene, { floor, back, side, rug }) {
  const L = lights(scene); L.sun.position.set(4, 10, 6); L.sun.target.position.set(0, 0, 0);
  scene.background = new THREE.Color('#ffeef8');
  scene.add(at(mesh(G.box(12, 0.2, 9), floor, { cast: false, recv: true }), 0, -0.1, 0));
  scene.add(at(mesh(G.box(12, 5, 0.2), back, { recv: true }), 0, 2.5, -4.5));
  scene.add(at(mesh(G.box(0.2, 5, 9), side, { recv: true }), -6, 2.5, 0));
  scene.add(at(mesh(G.box(2.6, 1.8, 0.1), '#ffffff'), 3.2, 2.9, -4.38));
  scene.add(at(mesh(G.box(2.3, 1.5, 0.1), '#9fdcff', { cast: false }), 3.2, 2.9, -4.32));
  if (rug) { const r = mesh(G.cyl(2, 2, 0.04, 32), rug, { cast: false, recv: true }); r.position.set(0, 0.02, 0.8); scene.add(r); }
}

// ---------- Veterinaria ----------
const vetRoom = new THREE.Scene(), shopRoom = new THREE.Scene(), schoolRoom = new THREE.Scene();
const npcs = {};
let syringe = null;
function buildVet() {
  buildRoom(vetRoom, { floor: '#dff4f2', back: '#c9efe9', side: '#ffffff', rug: null });
  const mat = mesh(G.box(2.4, 0.12, 1.6), '#ff9fc8', { cast: false, recv: true }); mat.position.set(0, 0.06, -1.6); vetRoom.add(mat);
  const cab = mesh(G.box(1.6, 2.2, 0.8), '#ffffff'); cab.position.set(-4.2, 1.1, -3.8); vetRoom.add(cab);
  const cr = new THREE.Group(); cr.add(mesh(G.box(0.2, 0.7, 0.05), '#ff5c5c')); cr.add(mesh(G.box(0.7, 0.2, 0.05), '#ff5c5c')); cr.position.set(-4.2, 1.6, -3.38); vetRoom.add(cr);
  for (let i = 0; i < 3; i++) vetRoom.add(at(mesh(G.cyl(0.12, 0.12, 0.35, 10), ['#6fc2ff', '#ffd23f', '#8be08b'][i]), -4.6 + i * 0.4, 2.4, -3.8));
  const scale = new THREE.Group(); scale.add(at(mesh(G.box(1.2, 0.15, 1), '#b8bcc8'), 0, 0.08, 0)); scale.add(at(signBoard('⚖️', 0.7), 0, 0.6, -0.45));
  scale.position.set(3.4, 0, -2.6); vetRoom.add(scale);
  vetRoom.add(at(signBoard('💉', 1.3), -1.6, 3.2, -4.35));
  npcs.vet = makeNPC({ coat: '#ffffff', skin: '#f6d2b0', hair: '#3b2a20', extra: g => { const st = mesh(new THREE.TorusGeometry(0.22, 0.03, 6, 16), '#3aa89c'); st.position.set(0, 1.62, 0.3); st.rotation.x = 1.2; g.add(st); } });
  npcs.vet.position.set(1.6, 0, -2.6); npcs.vet.rotation.y = -0.6; vetRoom.add(npcs.vet);
  syringe = sprite('💉', 0.9); syringe.visible = false; vetRoom.add(syringe);
}
function vetActions() {
  if (where !== 'room' || roomId !== 'vet') return;   // una acción que termina tarde no debe pintar botones en otro lugar
  const p = current.pet;
  const due = VACCINES.find(v => ['disponible', 'atrasada'].includes(vaccineStatus(p, v)));
  const dw = dewormDue(p);
  renderActions([
    p.sick && !p.sick.treated ? ['cure', '💊', 'Curar', '', '🩺'] : null,
    ['vac', '💉', 'Vacuna', due ? '' : '✔', '🛡️'],
    ['deworm', '🐛', 'Pastilla', dw ? '' : '✔', '🛡️'],
    ['check', '🩺', 'Revisar', '', '⚖️'],
    ['exit', '🚪', 'Salir', ''],
  ]);
  setInfo(`<div class="vax">${VACCINES.map(v => { const s = vaccineStatus(p, v); return `<span class="vx ${s}" title="${v.name}">${s === 'pendiente' ? '⏳' : '💉'}<b>${s === 'aplicada' ? '✔' : s === 'atrasada' ? '❗' : s === 'disponible' ? '👉' : ''}</b></span>`; }).join('')}</div>`);
}
function vetAct(id) {
  const p = current.pet, d = p.day;
  if (busy) return;
  if (id === 'check') return card3(checkupHTML3(p));
  const due = VACCINES.find(v => ['disponible', 'atrasada'].includes(vaccineStatus(p, v)));
  if (id === 'vac' && !due) return;
  if (id === 'deworm' && !dewormDue(p)) return;
  busy = true;
  walkTo([0, -1.6, Math.PI * 0.75], () => {
    npcs.vet.userData.wave = 2;
    const icon = id === 'vac' ? '💉' : id === 'deworm' ? '💊' : '💊';
    syringe.material.map = emojiTex(icon); syringe.material.needsUpdate = true;
    syringe.position.set(luna.x + 0.6, 1.6, luna.z + 0.3); syringe.visible = true;
    if (id === 'vac') { dogSound('sad', dogSize()); speak('¡Un pinchacito rápido!'); } else speak(id === 'deworm' ? 'Una pastilla contra los bichitos' : 'Medicina para curarse');
    setTimeout(() => {
      syringe.visible = false;
      if (id === 'vac') { p.vaccines[due.id] = d; applyFx(p, { felicidad: -4 }); addEvent(p, '💉', `Vacuna aplicada: ${due.name}.`); if (walkUnlocked(p)) addMilestone(p, 'vacunas', '🛡️', 'Luna completó sus vacunas de cachorro.'); pop('💉', '🛡️'); speak('¡Qué valiente! Toma un premio.'); }
      if (id === 'deworm') { p.deworm.push(d); addEvent(p, '💊', 'Luna tomó su desparasitante.'); pop('🐛', '✔'); speak('¡Listo, sin bichitos!'); }
      if (id === 'cure') { p.sick.treated = true; p.stats.salud = clamp(p.stats.salud + 10, 0, 100); addEvent(p, '💊', 'La veterinaria le dio tratamiento a Luna.'); pop('💊', '+🩺'); speak('Ahora necesita descansar, comer y beber agua'); }
      burst(vetRoom, '⭐', new THREE.Vector3(luna.x, 1.4, luna.z), 5);
      luna.mode = 'happy'; luna.modeT = 1.2; setTimeout(() => dogSound('happy', dogSize()), 400);
      busy = false; saveRoot(); refreshHUD(); vetActions();
    }, 1600);
  });
}
function checkupHTML3(p) {
  const t = targetWeight(p.day), diff = (p.weight - t) / t;
  const applied = VACCINES.filter(v => p.vaccines[v.id]).length;
  speak(diff < -0.12 ? 'Luna necesita comer un poco más' : diff > 0.12 ? 'Luna necesita más ejercicio' : '¡Luna está muy sana!');
  return `<div class="result"><h2>🩺</h2>
    <div class="checkrow"><span>⚖️</span><b>${fmtWeight(p.weight)}</b><span>${diff < -0.12 ? '🍖❗' : diff > 0.12 ? '🏃' : '👍'}</span></div>
    <div class="checkrow"><span>💉</span><b>${'✔'.repeat(applied)}${'·'.repeat(VACCINES.length - applied)}</b></div>
    <div class="checkrow"><span>🐛</span><b>${dewormDue(p) ? '❗' : '✔'}</b></div>
    ${p.sick ? `<div class="checkrow"><span>🤒</span><b>${p.sick.treated ? '💊✔' : '💊❗'}</b></div>` : ''}</div>`;
}

// ---------- Tienda ----------
function buildShop() {
  buildRoom(shopRoom, { floor: '#f6d7b0', back: '#ffe1ef', side: '#fff3c4', rug: '#ffd23f' });
  const counter = mesh(G.box(4, 1, 1), '#c98c55'); counter.position.set(1.5, 0.5, -2.8); shopRoom.add(counter);
  shopRoom.add(at(mesh(G.box(4.2, 0.12, 1.2), '#e6a96c'), 1.5, 1.05, -2.8));
  for (let row = 0; row < 3; row++) {
    shopRoom.add(at(mesh(G.box(3.6, 0.1, 0.7), '#b07840'), -3.2, 0.9 + row * 1.1, -4.0));
    for (let i = 0; i < 5; i++) { const c = ['#ff6b6b', '#ffd23f', '#6fc2ff', '#8be08b', '#ff9fd0'][(i + row) % 5]; shopRoom.add(at(mesh(i % 2 ? G.sph(0.22, 10, 8) : G.box(0.4, 0.4, 0.4), c), -4.6 + i * 0.7, 1.2 + row * 1.1, -4.0)); }
  }
  shopRoom.add(at(signBoard('🛒', 1.3), 1.5, 3.4, -4.35));
  npcs.tienda = makeNPC({ coat: '#ff8fc8', skin: '#e8b48a', hair: '#2a1d18', extra: g => { const ap = mesh(G.box(0.6, 0.55, 0.05), '#ffffff'); ap.position.set(0, 1.15, 0.36); g.add(ap); } });
  npcs.tienda.position.set(1.5, 0, -3.8); shopRoom.add(npcs.tienda);
}
function shopActions() {
  if (where !== 'room' || roomId !== 'tienda') return;   // una acción que termina tarde no debe pintar botones en otro lugar
  const p = current.pet;
  renderActions(SHOP.map(it => {
    const owned = (it.acc && p.acc.owned.includes(it.id)) || (it.once && p.items[it.id]);
    return ['buy:' + it.id, it.icon, it.short, owned ? '✔' : p.bones < it.price ? '🦴' : '', `🦴${it.price}`];
  }).concat([['exit', '🚪', 'Salir', '']]));
  setInfo(`<div class="wallet">🦴 ${p.bones}</div>`);
}
function shopAct(itemId) {
  const p = current.pet, it = SHOP.find(x => x.id === itemId);
  if (!it || p.bones < it.price) return;
  p.bones -= it.price;
  if (it.acc) { p.acc.owned.push(it.id); p.acc.worn = it.id; }       // se lo pone enseguida
  else if (it.id === 'premio') p.items.premio += 3;
  else if (it.id === 'champu') p.items.champu += 3;
  else p.items[it.id] = true;
  addEvent(p, '🛒', `Compraste: ${it.name}.`);
  npcs.tienda.userData.wave = 2;
  burst(shopRoom, it.icon, new THREE.Vector3(luna.x, 1.5, luna.z), 4, 0.7);
  pop(it.icon, '✔'); speak(it.acc ? '¡Qué guapa!' : it.short); sfx('coin');
  luna.mode = 'happy'; luna.modeT = 1.2; dogSound('happy', dogSize());
  if (current.pet.bones >= 0) { const t = tut3(p); t.seen.shop = true; }
  saveRoot(); refreshHUD(); shopActions();
}

// ---------- Escuela (trucos con secuencia de flechas) ----------
function buildSchool() {
  buildRoom(schoolRoom, { floor: '#c8e6a0', back: '#fff3b8', side: '#ffd6e8', rug: null });
  const board = mesh(G.box(4.4, 2, 0.12), '#2f5d46'); board.position.set(0, 2.6, -4.32); schoolRoom.add(board);
  schoolRoom.add(at(mesh(G.box(4.7, 0.15, 0.25), '#b07840'), 0, 1.55, -4.25));
  for (let i = 0; i < 4; i++) schoolRoom.add(at(mesh(G.cone(0.25, 0.6, 12), '#ff9f43'), -3.6 + i * 1.2, 0.3, 2.6));
  const hoop = mesh(new THREE.TorusGeometry(0.7, 0.07, 8, 24), '#ff5c8a'); hoop.position.set(3.6, 0.9, 1.4); schoolRoom.add(hoop);
  schoolRoom.add(at(mesh(G.cyl(0.05, 0.05, 1.6, 6), '#888888'), 2.85, 0.8, 1.4)); schoolRoom.add(at(mesh(G.cyl(0.05, 0.05, 1.6, 6), '#888888'), 4.35, 0.8, 1.4));
  npcs.escuela = makeNPC({ coat: '#6f8cff', skin: '#c99872', hair: '#1c1414', extra: g => { const w = mesh(G.cyl(0.03, 0.03, 0.4, 6), '#ffffff'); w.position.set(0.55, 1.2, 0.2); w.rotation.z = 0.8; g.add(w); } });
  npcs.escuela.position.set(-2.4, 0, -2.8); npcs.escuela.rotation.y = 0.5; schoolRoom.add(npcs.escuela);
}
function schoolActions() {
  if (where !== 'room' || roomId !== 'escuela') return;   // una acción que termina tarde no debe pintar botones en otro lugar
  const p = current.pet, e = today(p);
  const busyB = e.sessions >= MAX_SESSIONS ? '⏳' : playBlock(p);
  renderActions(TRICKS.map(t => ['trick:' + t.id, t.icon, t.short, p.day < t.min ? '🔒' : busyB, starBar3(p.tricks[t.id] || 0)]).concat([['exit', '🚪', 'Salir', '']]));
  setInfo(`<div class="wallet">🎓 ${'●'.repeat(e.sessions)}${'○'.repeat(Math.max(0, MAX_SESSIONS - e.sessions))}</div>`);
}
const ARROW_EMO = { up: '⬆️', right: '➡️', down: '⬇️', left: '⬅️' };
let train3 = null;
function startTrain3(trickId) {
  const p = current.pet, t = TRICKS.find(x => x.id === trickId);
  const cur = p.tricks[trickId] || 0;
  train3 = { t, len: 3 + Math.floor(cur / 34), round: 0, ok: 0, seq: [], idx: 0, phase: 'show', pt: 0 };
  $('#actions').hidden = true;
  $('#train3').hidden = false;
  speak('¡Mira las flechas y luego repítelas!');
  nextRound3();
}
function nextRound3() {
  const m = train3;
  m.seq = Array.from({ length: m.len }, () => ['up', 'right', 'down', 'left'][Math.floor(Math.random() * 4)]);
  m.idx = 0; m.phase = 'show'; m.pt = 0;
  drawTrain3();
}
function drawTrain3() {
  const m = train3; if (!m) return;
  const shown = m.phase === 'show' ? Math.floor((m.pt - 0.5) / 0.75) : -1;
  $('#t3-seq').innerHTML = m.seq.map((a, i) => {
    const vis = m.phase === 'show' ? (i === shown ? 'on' : i < shown ? 'past' : '') : (i < m.idx ? 'done' : '');
    return `<span class="t3a ${vis}">${vis ? ARROW_EMO[a] : '❔'}</span>`;
  }).join('');
  $('#t3-head').textContent = `${m.t.icon} ${'●'.repeat(m.round)}${'○'.repeat(3 - m.round)} ${m.phase === 'show' ? '👀' : m.phase === 'input' ? '👆' : ''}`;
}
const TRICK_POSE = { sentarse: 'sit', venir: 'happy', pata: 'paw', quieta: 'sit', echarse: 'lie', vuelta: 'spin' };
function trainInput3(dir) {
  const m = train3;
  if (!m || m.phase !== 'input') return;
  if (dir === m.seq[m.idx]) {
    m.idx++; sfx('pop');
    if (m.idx >= m.seq.length) { m.ok++; endRound3(true); }
  } else endRound3(false);
  drawTrain3();
}
function endRound3(ok) {
  const m = train3;
  m.round++; m.phase = 'pause'; m.pt = 0;
  if (ok) { luna.mode = TRICK_POSE[m.t.id] || 'sit'; luna.modeT = 1.6; burst(schoolRoom, '⭐', new THREE.Vector3(luna.x, 1.6, luna.z), 5); dogSound('happy', dogSize()); npcs.escuela.userData.wave = 1.5; }
  else { pop('❌'); dogSound('sad', dogSize()); }
}
function updateTrain3(dt) {
  const m = train3; if (!m) return;
  m.pt += dt;
  if (m.phase === 'show') { if (m.pt > 0.6 + m.seq.length * 0.75) { m.phase = 'input'; m.pt = 0; } drawTrain3(); }
  else if (m.phase === 'input' && m.pt > 5 + m.seq.length) { endRound3(false); drawTrain3(); }
  else if (m.phase === 'pause' && m.pt > 1.7) { if (m.round >= 3) finishTrain3(); else nextRound3(); }
}
function finishTrain3() {
  const m = train3, p = current.pet;
  train3 = null;
  $('#train3').hidden = true;
  const before = p.tricks[m.t.id] || 0;
  const after = Math.min(100, before + m.ok * 9 + (m.ok === 3 ? 6 : 0) + (p.stats.felicidad > 70 ? 4 : 0) + 2);
  const e = today(p); e.sessions++; e.train++;
  p.tricks[m.t.id] = after; p.bones += m.ok;
  applyFx(p, { energia: -8, saciedad: -3, felicidad: 4 + m.ok * 2 });
  if (after >= 100 && before < 100) addMilestone(p, 'trick-' + m.t.id, '🏆', `Luna aprendió: «${m.t.name}».`);
  else addEvent(p, '🎓', `Practicaron «${m.t.name}» (${after}%).`);
  saveRoot(); refreshHUD();
  resultCard3(m.ok, m.ok, `<span>${m.t.icon} ${starBar3(after)}</span>`, () => { $('#actions').hidden = false; schoolActions(); });
}
function resultCard3(stars, bones, extra, cb) {
  const word = ['¡Otra vez!', '¡Bien!', '¡Muy bien!', '¡Genial!'][clamp(stars, 0, 3)];
  speak(word); setTimeout(() => dogSound(stars ? 'happy' : 'sad', dogSize()), 800);
  card3(`<div class="result"><div class="stars">${'⭐'.repeat(stars)}<span class="dim">${'⭐'.repeat(3 - stars)}</span></div><h2>${word}</h2>
    <div class="gains">${bones ? `<span>🦴 +${bones}</span>` : ''}${extra || ''}</div></div>`, cb);
}

// ---------- Entrar / salir de los interiores ----------
let roomId = null;
const ROOMS = { vet: () => vetRoom, tienda: () => shopRoom, escuela: () => schoolRoom };
function goRoom(id) {
  const p = current.pet;
  if (p.asleep && id !== 'tienda') { speak('Luna está durmiendo. Despiértala primero y vengan juntas.'); pop('💤'); return; }
  fade(() => {
    const withK = lunaWithKid() && !p.asleep;
    scene = ROOMS[id](); moveObj(kid.root, scene);
    if (withK) { moveObj(dog.root, scene); luna.x = 0; luna.z = 2.8; luna.ry = Math.PI; luna.path = null; }
    where = 'room'; roomId = id;
    kidS.x = 2.4; kidS.z = 3.4; kidS.ry = Math.PI;
    refreshRoom();
    $('#actions').hidden = false; $('#prompt').hidden = true;
    speak(PL.find(x => x.id === id).name);
    setTimeout(() => dogSound('bark', dogSize(), 0.6), 600);
    if (npcs[id]) npcs[id].userData.wave = 2;
    guideEvent3('open:' + id);
  });
}
function refreshRoom() { if (roomId === 'vet') vetActions(); else if (roomId === 'tienda') shopActions(); else if (roomId === 'escuela') schoolActions(); }
function roomAct(a) {
  if (a === 'exit') return leaveToTown(roomId);
  if (roomId === 'vet') return vetAct(a);
  if (roomId === 'tienda' && a.startsWith('buy:')) return shopAct(a.slice(4));
  if (roomId === 'escuela' && a.startsWith('trick:')) return startTrain3(a.slice(6));
}
function leaveToTown(fromId) {
  busy = false; train3 = null; $('#train3').hidden = true;
  fade(() => {
    const withK = lunaWithKid();
    if (withK) moveObj(dog.root, town);
    moveObj(kid.root, town);
    scene = town; where = 'town'; roomId = null;
    const tr = triggers.find(x => x.pl.id === fromId);
    (withK ? placePair : placeKid)(tr ? tr.x : -16, tr ? tr.z + 1.6 : -9.4, 0);
    $('#actions').hidden = true; setInfo('');
    guideEvent3('close:' + fromId);
  });
}

// ---------- Lago (al aire libre) ----------
let fountainLake = null;
function buildLakeExtras() {
  const pl = PL.find(x => x.id === 'lago');
  fountainLake = new THREE.Group();
  fountainLake.add(at(mesh(G.cyl(0.35, 0.45, 1, 12), '#b8bcc8'), 0, 0.5, 0));
  fountainLake.add(at(mesh(G.cyl(0.45, 0.35, 0.2, 14), '#dfe3ee'), 0, 1.05, 0));
  fountainLake.add(at(mesh(G.cyl(0.3, 0.3, 0.05, 14), '#6cc8ff', { cast: false }), 0, 1.15, 0));
  fountainLake.position.set(pl.x - 6.5, 0, pl.z + 3); town.add(fountainLake);
  colliders.circles.push({ x: pl.x - 6.5, z: pl.z + 3, r: 0.5 });
}
function openLake() {
  where = 'lake'; speak('Lago'); dogSound('bark', dogSize(), 0.6);
  lakeActions(); $('#actions').hidden = false; $('#prompt').hidden = true;
  guideEvent3('open:lago');
}
function lakeActions() {
  if (where !== 'lake') return;   // una acción que termina tarde no debe pintar botones en otro lugar
  const p = current.pet, e = today(p), s = p.stats;
  renderActions([
    ['duckfeed', '🌾', 'Dar de comer', '', '🦆🦴'],
    ['ducks', '🦆', 'Mirar patos', p.asleep ? '💤' : e.ducks ? '⏳' : '', '💖'],
    p.day >= 4 ? ['drink', '🚰', 'Beber', p.asleep ? '💤' : s.hidratacion >= 92 ? '💧' : '', '💧'] : null,
    p.day >= 8 ? ['splash', '💦', 'Chapotear', playBlock(p), '💖'] : null,
    ['closelake', '🚪', 'Salir', ''],
  ]);
}
function lakeAct(id) {
  const p = current.pet, pl = PL.find(x => x.id === 'lago'), e = today(p);
  if (id === 'closelake') { where = 'town'; $('#actions').hidden = true; return; }
  if (busy) return;
  if (id === 'duckfeed') { where = 'town'; $('#actions').hidden = true; return startDucks3(); }
  busy = true;
  const done = (fx, kind, icon, msg, word) => {
    applyFx(p, fx); if (kind) counted(kind); addEvent(p, icon, msg);
    const gains = Object.entries(fx).filter(([, v]) => v > 0).map(([k]) => STAT_ICON[k]).join('');
    pop(icon, gains ? '+' + gains : ''); speak(word); dogSound('happy', dogSize(), 0.7);
    luna.mode = 'happy'; luna.modeT = 1; busy = false; outdoorRisk(p); saveRoot(); refreshHUD(); lakeActions();
  };
  if (id === 'ducks') walkTo([pl.x - 3.2, pl.z, Math.PI / 2], () => {
    ducks.forEach(dk => { dk.userData.r = 1.2; });
    let n = 0; const q = setInterval(() => { sfx('quack'); if (++n >= 3) clearInterval(q); }, 450);
    burst(town, '💖', new THREE.Vector3(luna.x, 1.4, luna.z), 4);
    setTimeout(() => { ducks.forEach((dk, i) => { dk.userData.r = 1.5 + i * 0.9; }); e.ducks = true; done({ felicidad: 10 }, 'play', '🦆', 'Miraron a los patos.', '¡Cuac cuac!'); }, 1800);
  });
  if (id === 'drink') walkTo([fountainLake.position.x + 0.9, fountainLake.position.z, -Math.PI / 2], () => {
    luna.mode = 'eat'; luna.modeT = 1.6;
    setTimeout(() => done({ hidratacion: 30 }, 'water', '🚰', 'Bebió del bebedero del lago.', '¡Glu glu!'), 1600);
  });
  if (id === 'splash') walkTo([pl.x - 4.6, pl.z + 2.6, Math.PI / 2], () => {
    luna.mode = 'happy'; luna.modeT = 2;
    const iv = setInterval(() => burst(town, '💦', new THREE.Vector3(luna.x + 0.5, 0.6, luna.z), 2, 0.5), 250);
    setTimeout(() => { clearInterval(iv); done({ felicidad: 18, energia: -10, higiene: -18 }, 'play', '💦', 'Chapoteó en la orilla.', '¡Splash!'); }, 1800);
  });
}

// ---------- Bosque: niveles de saltos en 3D (misma física y niveles que el 2D) ----------
const forestScene = new THREE.Scene();
let forest = null;
function openForestMenu() {
  where = 'forestmenu';
  const p = current.pet;
  speak('Bosque'); dogSound('bark', dogSize(), 0.6);
  const icons = ['🌲', '⛰️', '💎'];
  renderActions(LEVEL_DEFS.map(L => {
    const rec = p.levels[L.id], prevDone = L.id === 1 || (p.levels[L.id - 1] && p.levels[L.id - 1].done);
    return ['level:' + L.id, icons[L.id - 1], String(L.id), p.day < L.minDay || !prevDone ? '🔒' : playBlock(p), rec && rec.done ? '⭐' : ''];
  }).concat([['closeforest', '🚪', 'Salir', '']]));
  $('#actions').hidden = false; $('#prompt').hidden = true;
  guideEvent3('open:bosque');
}
function forestAct(a) {
  if (a === 'closeforest') { where = 'town'; $('#actions').hidden = true; return; }
  if (a.startsWith('level:')) startForest(Number(a.slice(6)));
}
function startForest(levelId) {
  const def = LEVEL_DEFS.find(l => l.id === levelId), L = buildLevel(def);
  fade(() => {
    while (forestScene.children.length) forestScene.remove(forestScene.children[0]);
    const lt = lights(forestScene);
    forestScene.background = new THREE.Color(def.sky[0]);
    forestScene.fog = new THREE.Fog(def.sky[0], 18, 45);
    lt.sun.position.set(5, 12, 10);
    const dirt = def.cave ? '#4c3c70' : '#b07840', top = def.cave ? '#80f0ff' : '#58b038';
    // casillas (bloques con profundidad); y del mundo = alto del nivel - fila
    const geo = G.box(1, 1, 2), solids = [];
    for (let ty = 0; ty < L.h; ty++) for (let tx = 0; tx < L.w; tx++) { const c = L.grid[ty][tx]; if (c === '#' || c === 'g') solids.push([tx, ty, c]); }
    const inst = new THREE.InstancedMesh(geo, M(dirt), solids.length); inst.receiveShadow = true; inst.castShadow = true;
    const mtx = new THREE.Matrix4();
    solids.forEach(([tx, ty], i) => { mtx.makeTranslation(tx + 0.5, L.h - ty - 0.5, 0); inst.setMatrixAt(i, mtx); });
    forestScene.add(inst);
    const grassTop = solids.filter(s => s[2] === 'g');
    const gi = new THREE.InstancedMesh(G.box(1.02, 0.25, 2.04), M(top), grassTop.length); gi.receiveShadow = true;
    grassTop.forEach(([tx, ty], i) => { mtx.makeTranslation(tx + 0.5, L.h - ty - 0.12, 0); gi.setMatrixAt(i, mtx); });
    forestScene.add(gi);
    for (let ty = 0; ty < L.h; ty++) for (let tx = 0; tx < L.w; tx++) if (L.grid[ty][tx] === '=') forestScene.add(at(mesh(G.box(1, 0.25, 1.6), '#d8a060', { recv: true }), tx + 0.5, L.h - ty - 0.13, 0));
    // fondo
    const r = rng(levelId * 77);
    for (let i = 0; i < L.w / 3; i++) {
      const x = r() * L.w, z = -4 - r() * 6;
      if (def.cave) forestScene.add(at(mesh(G.cone(0.3 + r() * 0.4, 1 + r(), 6), r() < 0.5 ? '#c0a0ff' : '#80f0ff'), x, 2 + r() * 2, z));
      else { const tr = new THREE.Group(); tr.add(at(mesh(G.cyl(0.2, 0.3, 2, 8), '#9a6236'), 0, 1, 0)); for (let k = 0; k < 3; k++) tr.add(at(mesh(G.cone(1.3 - k * 0.3, 1.5, 9), k % 2 ? '#3f9a5a' : '#2f8a4e'), 0, 2.3 + k * 0.9, 0)); tr.position.set(x, 1, z); forestScene.add(tr); }
    }
    forestScene.add(at(mesh(new THREE.PlaneGeometry(L.w + 60, 40), def.cave ? '#2c2850' : '#a8d890', { cast: false }), L.w / 2, 8, -12));
    // entidades
    const ents = L.ents.map(e => ({ ...e, alive: true }));
    for (const e of ents) {
      if (e.t === 'bone') { e.m = boneMesh(); e.m.scale.setScalar(0.8); }
      if (e.t === 'thorn') { e.m = new THREE.Group(); for (let i = 0; i < 4; i++) { const c = mesh(G.cone(0.13, 0.45, 6), '#2f7a3c'); c.position.set(-0.3 + i * 0.2, 0.2, (i % 2) * 0.3 - 0.15); e.m.add(c); } e.m.add(at(mesh(G.sph(0.08), '#e03c3c'), 0, 0.2, 0.3)); }
      if (e.t === 'hog') { e.m = new THREE.Group(); const b = mesh(G.sph(0.4, 14, 10), '#7c5838'); b.scale.set(1.1, 0.8, 0.9); b.position.y = 0.32; e.m.add(b); for (let i = 0; i < 7; i++) { const s = mesh(G.cone(0.08, 0.3, 5), '#4a3020'); const a = -1.2 + i * 0.4; s.position.set(Math.sin(a) * 0.35, 0.32 + Math.cos(a) * 0.32, 0); s.rotation.z = -a; e.m.add(s); } e.face = at(mesh(G.sph(0.16), '#e8c8a0'), 0.42, 0.25, 0); e.m.add(e.face); }
      if (e.t === 'bee') { e.m = new THREE.Group(); const b = mesh(G.sph(0.3, 12, 10), '#f8d030'); b.scale.set(1.3, 1, 1); e.m.add(b); for (const sx of [-0.12, 0.15]) { const st = mesh(new THREE.TorusGeometry(0.27, 0.06, 6, 14), '#222222'); st.rotation.y = Math.PI / 2; st.position.x = sx; e.m.add(st); } e.wings = []; for (const sz of [-1, 1]) { const w = new THREE.Mesh(new THREE.CircleGeometry(0.25, 12), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.8, side: THREE.DoubleSide })); w.position.set(0, 0.3, sz * 0.15); w.rotation.x = Math.PI / 2; e.m.add(w); e.wings.push(w); } }
      if (e.t === 'goal') { e.m = new THREE.Group(); e.m.add(at(mesh(G.box(1.6, 1.2, 1.4), '#f0d090'), 0, 0.6, 0)); const rf = mesh(G.cone(1.25, 0.8, 4), '#d84838'); rf.rotation.y = Math.PI / 4; rf.position.y = 1.6; e.m.add(rf); e.m.add(at(mesh(G.box(0.6, 0.8, 0.05), '#3c2418'), 0, 0.4, 0.71)); e.m.add(at(mesh(G.cyl(0.04, 0.04, 1.4, 6), '#555555'), 0.6, 2.4, 0)); e.flag = at(mesh(G.box(0.6, 0.35, 0.04), '#ffd23f'), 0.92, 2.9, 0); e.m.add(e.flag); }
      if (e.m) forestScene.add(e.m);
    }
    const solidT = (tx, ty) => { if (tx < 0 || tx >= L.w) return true; if (ty < 0 || ty >= L.h) return false; const c = L.grid[ty][tx]; return c === '#' || c === 'g'; };
    const oneWay = (tx, ty) => ty >= 0 && ty < L.h && tx >= 0 && tx < L.w && L.grid[ty][tx] === '=';
    let gy = L.h - 1; while (gy > 0 && solidT(def.start, gy - 1)) gy--;
    const pl = { x: def.start * TILE + 8, y: gy * TILE, vx: 0, vy: 0, onGround: false, face: 1, lastGround: -99, buffer: -99, hearts: 3, inv: 0, safe: null };
    pl.safe = { x: pl.x, y: pl.y };
    forest = { def, L, ents, pl, solidT, oneWay, tick: 0, time: 0, bones: 0, over: false };
    dog.root.parent && dog.root.parent.remove(dog.root); forestScene.add(dog.root);
    scene = forestScene; where = 'forest';
    $('#actions').hidden = true; $('#forestHud').hidden = false; drawForestHud();
    speak('¡Lleva a Luna hasta la casita! Salta con A y recoge huesos.');
  });
}
function drawForestHud() { if (!forest) return; $('#forestHud').innerHTML = `<span>${'❤️'.repeat(forest.pl.hearts)}${'🤍'.repeat(3 - forest.pl.hearts)}</span><span>🦴 ${forest.bones}</span><button class="hbtn" data-act="quitforest" aria-label="Salir">✖</button>`; }
function updateForest(dt) {
  const f = forest; if (!f || f.over) return;
  const pl = f.pl, P = PHYS;
  f.tick++; f.time += dt;
  const dir = clamp((input.right - input.left) + input.jx, -1, 1);
  if (input.a || input.jumpPress) pl.buffer = f.time;
  input.jumpPress = false; input.a = false;
  const held = input.aHeld || input.up;
  const target = dir * P.RUN, acc = P.ACCEL * (pl.onGround ? 1 : P.AIR) * dt;
  if (pl.inv < 1.0) pl.vx += clamp(target - pl.vx, -acc, acc);
  if (Math.abs(dir) > 0.2) pl.face = Math.sign(dir);
  if (pl.onGround) pl.lastGround = f.time;
  // buffer y coyote time medidos en segundos (7 y 6 ticks a 60 Hz)
  if (f.time - pl.buffer <= P.BUFFER / 60 && f.time - pl.lastGround <= P.COYOTE / 60) { pl.vy = -P.JUMP_V; pl.buffer = -99; pl.lastGround = -99; pl.onGround = false; sfx('pop'); }
  let g = pl.vy < 0 ? P.G_RISE : P.G_FALL;
  if (pl.vy < 0 && !held) g = P.G_FALL * 1.4;
  else if (held && Math.abs(pl.vy) < 0.4 * P.JUMP_V) g *= P.APEX_HANG;
  pl.vy = Math.min(pl.vy + g * dt, P.MAX_FALL);
  const hw = 6, hh = 11;
  pl.x += pl.vx * dt;
  for (const ty of [Math.floor((pl.y - hh) / TILE), Math.floor((pl.y - 1) / TILE)]) {
    if (pl.vx > 0 && f.solidT(Math.floor((pl.x + hw) / TILE), ty)) { pl.x = Math.floor((pl.x + hw) / TILE) * TILE - hw - 0.01; pl.vx = 0; }
    if (pl.vx < 0 && f.solidT(Math.floor((pl.x - hw) / TILE), ty)) { pl.x = (Math.floor((pl.x - hw) / TILE) + 1) * TILE + hw + 0.01; pl.vx = 0; }
  }
  const prevY = pl.y; pl.y += pl.vy * dt; pl.onGround = false;
  const cols = [Math.floor((pl.x - hw + 1) / TILE), Math.floor((pl.x + hw - 1) / TILE)];
  if (pl.vy >= 0) { const ty = Math.floor(pl.y / TILE); for (const tx of cols) { const top = ty * TILE; if (f.solidT(tx, ty) || (f.oneWay(tx, ty) && prevY <= top + 0.5)) { pl.y = top; pl.vy = 0; pl.onGround = true; } } }
  else { const ty = Math.floor((pl.y - hh) / TILE); for (const tx of cols) if (f.solidT(tx, ty)) { pl.y = (ty + 1) * TILE + hh; pl.vy = 0; } }
  if (pl.onGround && pl.inv <= 0) pl.safe = { x: pl.x, y: pl.y };
  if (pl.inv > 0) pl.inv -= dt;
  const hurt = fromX => { if (pl.inv > 0) return; pl.hearts--; pl.inv = 1.3; pl.vx = (pl.x < fromX ? -1 : 1) * 150; pl.vy = -200; dogSound('sad', dogSize(), 0.6); drawForestHud(); if (pl.hearts <= 0) endForest(false); };
  if (pl.y > f.L.h * TILE + 40) { pl.hearts--; drawForestHud(); if (pl.hearts <= 0) return endForest(false); pl.x = pl.safe.x - pl.face * 24; pl.y = pl.safe.y - 20; pl.vx = pl.vy = 0; pl.inv = 1.3; }
  const box = { l: pl.x - hw, r: pl.x + hw, t: pl.y - hh, b: pl.y };
  const hit = (l, t, r, b) => box.r > l && box.l < r && box.b > t && box.t < b;
  for (const e of f.ents) {
    if (!e.alive) continue;
    if (e.t === 'bone' && hit(e.x, e.y, e.x + 9, e.y + 7)) { e.alive = false; forestScene.remove(e.m); f.bones++; sfx('coin'); drawForestHud(); }
    if (e.t === 'thorn' && hit(e.x + 2, e.y + 2, e.x + 14, e.y + 10)) hurt(e.x + 8);
    if (e.t === 'hog') { e.x += e.dir * 22 * dt; const ahead = Math.floor((e.x + (e.dir > 0 ? 14 : 2)) / TILE), foot = Math.floor((e.y + 12) / TILE), mid = Math.floor((e.y + 4) / TILE); if (f.solidT(ahead, mid) || !f.solidT(ahead, foot)) e.dir *= -1; }
    if (e.t === 'bee') { e.ph += dt; e.x = e.x0 + Math.sin(e.ph * 1.6) * e.range / 2; e.yy = e.y + Math.sin(e.ph * 4) * 3; }
    if (e.t === 'hog' || e.t === 'bee') {
      const ey = e.t === 'bee' ? e.yy : e.y;
      if (hit(e.x + 2, ey + 1, e.x + 14, ey + 10)) {
        if (pl.vy > 40 && box.b - ey < 9) { e.alive = false; forestScene.remove(e.m); pl.vy = -P.JUMP_V * 0.65; f.bones++; sfx('coin'); burst(forestScene, '⭐', e.m.position, 3, 0.5); drawForestHud(); }
        else hurt(e.x + 8);
      }
    }
    if (e.t === 'goal' && hit(e.x, e.y - 60, e.x + 28, e.y + 32)) return endForest(true);
  }
  // vista: posiciones de píxeles a unidades 3D
  const H = f.L.h, toY = py => H - py / TILE;
  for (const e of f.ents) {
    if (!e.alive || !e.m) continue;
    if (e.t === 'bone') { e.m.position.set(e.x / TILE + 0.28, toY(e.y + 4), 0); e.m.rotation.y += dt * 2; }
    if (e.t === 'thorn') e.m.position.set(e.x / TILE + 0.5, toY(e.y + 10), 0);
    if (e.t === 'hog') { e.m.position.set(e.x / TILE + 0.5, toY(e.y + 10), 0); e.m.rotation.y = e.dir > 0 ? 0 : Math.PI; }
    if (e.t === 'bee') { e.m.position.set(e.x / TILE + 0.5, toY((e.yy ?? e.y) + 6), 0); e.wings.forEach(w => { w.rotation.y = Math.sin(f.tick * 0.9) * 0.6; }); }
    if (e.t === 'goal') { e.m.position.set(e.x / TILE + 0.9, toY(e.y + 32), 0); e.flag.position.y = 2.9 + Math.sin(f.tick * 0.1) * 0.05; }
  }
  luna.x = pl.x / TILE; luna.z = 0;
  dog.root.position.set(pl.x / TILE, toY(pl.y), 0);
  dog.root.rotation.y = pl.face > 0 ? Math.PI / 2 : -Math.PI / 2;
  dog.root.visible = !(pl.inv > 0 && Math.floor(f.tick / 4) % 2);
  const st = stageOf(current.pet.day);
  dog.root.scale.setScalar(DOG_SCALE[Math.max(1, st.size)] * 0.9);
  animateDog(dog, dt, { mode: !pl.onGround ? 'happy' : Math.abs(pl.vx) > 10 ? 'walk' : 'idle', speed: Math.abs(pl.vx) / 30 });
  const cx = pl.x / TILE + pl.face * 1.5, cy = Math.max(H * 0.45, toY(pl.y) + 1.5);
  camera.position.lerp(new THREE.Vector3(cx, cy + 1.2, 10.5), 1 - Math.exp(-5 * dt));
  camera.lookAt(camera.position.x, camera.position.y - 1.6, 0);
}
function endForest(won) {
  const f = forest, p = current.pet, def = f.def;
  f.over = true;
  const firstWin = won && !(p.levels[def.id] && p.levels[def.id].done);
  const bonus = won ? (firstWin ? 10 : 4) : 0;
  p.bones += f.bones + bonus;
  today(p).play++; markGame3(p, 'forest');
  applyFx(p, { felicidad: won ? 22 : 10, energia: -14, saciedad: -8, hidratacion: -10, higiene: -12 });
  const rec = p.levels[def.id] || { done: false, best: 0 }; rec.best = Math.max(rec.best, f.bones); if (won) rec.done = true; p.levels[def.id] = rec;
  addEvent(p, '🌲', won ? `Exploraron «${def.name}» y encontraron ${f.bones} huesos.` : `Intentaron «${def.name}» (${f.bones} huesos).`);
  if (firstWin) addMilestone(p, 'lvl' + def.id, '🏞️', `Luna completó «${def.name}» por primera vez.`);
  outdoorRisk(p); saveRoot(); refreshHUD();
  const stars = won ? f.pl.hearts : 0;
  $('#forestHud').hidden = true;
  resultCard3(stars, f.bones + bonus, won ? '<span>🏠✔</span>' : '', () => leaveForest());
}
function leaveForest() {
  forest = null; dog.root.visible = true;
  fade(() => {
    moveObj(dog.root, town);
    scene = town; where = 'town';
    const tr = triggers.find(x => x.pl.id === 'bosque'); placePair(tr.x, tr.z + 1.6, 0);
    $('#forestHud').hidden = true; $('#actions').hidden = true;
  });
}

// ---------- Lugar cerrado: cuándo se abre ----------
function lockedCard3(pl) {
  const p = current.pet, left = pl.minDay - p.day;
  speak(`${pl.name} se abre cuando Luna sea más grande. Faltan ${left} ${left === 1 ? 'día' : 'días'}. ¡Cuídala mucho y vuelve mañana!`);
  card3(`<div class="result"><div class="unlock"><span>🔒</span><span>${pl.icon}</span></div><h2>${pl.name}</h2><div class="moons">${'🌙'.repeat(Math.min(left, 10))}</div></div>`);
}
function enterPlace3(pl) {
  const p = current.pet;
  if (p.day < (pl.minDay || 1)) return lockedCard3(pl);
  if (pl.id === 'casa') return goHome();
  if (pl.id === 'parque') return openPark();
  if (pl.id === 'lago') return openLake();
  if (pl.id === 'bosque') return openForestMenu();
  return goRoom(pl.id);
}

// ---------- Diario 3D (rutina + pegatinas) ----------
function openDiary3() {
  const p = current.pet, e = today(p), st = stageOf(p.day);
  const r = routineFor(p, p.day, e);
  const all = [...Object.entries(DAY_MILESTONES).map(([d2, m]) => ({ key: 'day' + d2, icon: m[0], text: m[1] })),
    { key: 'walk1', icon: '🌳' }, { key: 'bath1', icon: '🛁' }, { key: 'vacunas', icon: '🛡️' }, { key: 'allbones', icon: '🔍' }, { key: 'tutorial', icon: '🐦' },
    { key: 'treasure1', icon: '💰' }, { key: 'squirrel', icon: '🐿️' }, { key: 'hide1', icon: '🙈' }, { key: 'agility', icon: '🏃' }, { key: 'ducks10', icon: '🦆' }, { key: 'memory', icon: '🃏' },
    ...LEVEL_DEFS.map(L => ({ key: 'lvl' + L.id, icon: ['🌲', '⛰️', '💎'][L.id - 1] })), ...TRICKS.map(t => ({ key: 'trick-' + t.id, icon: t.icon }))];
  const got = new Set(p.milestones.map(m => m.key));
  speak('Diario de Luna');
  card3(`<div class="result"><h2>📖</h2>
    <div class="weekbox"><span>${STAGE_ICON3[st.id]} ${p.day}</span><span>⚖️ ${fmtWeight(p.weight)}</span><span>🔥 ${p.streak}</span></div>
    <div class="today">${r.map(x => `<span class="tday ${x.have >= x.need ? 'ok' : ''}"><i>${x.icon}</i><b>${x.have >= x.need ? '⭐' : `${Math.min(x.have, x.need)}/${x.need}`}</b></span>`).join('')}</div>
    <div class="stickers">${all.map(m => `<span class="stk ${got.has(m.key) ? '' : 'off'}">${got.has(m.key) ? m.icon : '❔'}</span>`).join('')}</div></div>`);
}

// ---------- Avisos de Pío en 3D (lugar nuevo, vacuna, enfermedad) ----------
const MIN_DAY3 = { bosque: 3, parque: 3, escuela: 8 };
function guideCheck3() {
  if (!current || where !== 'town' || !$('#card3').hidden) return;
  const p = current.pet, t = tut3(p);
  if (t.step < 2) return;
  for (const pl of PL) {
    if ((pl.minDay || 1) > 1 && p.day >= pl.minDay && !t.seen['open-' + pl.id]) {
      t.seen['open-' + pl.id] = true; t.focus = pl.id; saveRoot();
      speak(`¡Se abrió ${pl.name}! Sigue la flecha amarilla.`);
      return card3(`<div class="result"><h2>🎉</h2><div class="unlock"><span>🔓</span><span>${pl.icon}</span></div><h2>${pl.name}</h2></div>`);
    }
  }
  const st = stageOf(p.day);
  if (!t.seen['stage-' + st.id]) {
    t.seen['stage-' + st.id] = true; saveRoot();
    if (p.day > 1) {
      speak(`¡Luna creció! Ahora es ${st.name.toLowerCase()}.`); setTimeout(() => dogSound('happy', dogSize()), 600);
      return card3(`<div class="result"><h2>🌱</h2><div class="howto"><div>${STAGES.map(s2 => `<span style="opacity:${s2.id === st.id ? 1 : p.day > s2.to ? .55 : .25}">${STAGE_ICON3[s2.id]}</span>`).join('<i>›</i>')}</div></div></div>`);
    }
  }
  const due = VACCINES.find(v => ['disponible', 'atrasada'].includes(vaccineStatus(p, v)));
  if (due && !t.seen['vac-' + due.id]) {
    t.seen['vac-' + due.id] = true; saveRoot();
    speak('Hoy le toca una vacuna a Luna. Ve a la veterinaria y toca Vacuna.');
    return card3(`<div class="result"><h2>💉</h2><div class="howto"><div><span>💉</span><i>➜</i><span>🏥</span></div></div></div>`);
  }
  if (p.sick && !p.sick.treated && !t.seen['sick-' + p.sick.since]) {
    t.seen['sick-' + p.sick.since] = true; saveRoot();
    speak('Luna está enfermita. Llévala a la veterinaria y toca Curar.');
    return card3(`<div class="result"><h2>🤒</h2><div class="howto"><div><span>🤒</span><i>➜</i><span>🏥 💊</span></div></div></div>`);
  }
  if (p.bones >= 6 && !t.seen.shop) {
    t.seen.shop = true; t.focus = 'tienda'; t.visited.tienda = false; saveRoot();
    speak('¡Tienes muchos huesos! Ve a la tienda a comprarle algo bonito a Luna.');
    return card3(`<div class="result"><h2>🛒</h2><div class="howto"><div><span>🦴 ${p.bones}</span><i>➜</i><span>🎀🧸🦴</span></div></div></div>`);
  }
}

// ====================== Guía «Pío» (3D) ======================
// Mismo progreso de tutorial que el 2D (p.tut). Flecha 3D sobre el destino + flecha en el suelo junto a Luna.
const TUT3 = [
  { id: 'walk', icon: '⬅️➡️', say: '¡Hola! Soy Pío, tu amigo. Camina con las flechas o con el círculo. ¡Luna te sigue!' },
  { id: 'home', place: 'casa', icon: '🍼', say: 'Luna tiene hambre. Llévala a su casa: acércate a la puerta y toca A.' },
  { id: 'eat', place: 'casa', doId: 'eat', icon: '🍼', say: 'Toca el dibujo de comer para darle su comida.' },
  { id: 'pet', place: 'casa', doId: 'pet', icon: '🤗', say: '¡Muy bien! Ahora dale mimos.' },
  { id: 'exit', place: 'casa', doId: 'exit', icon: '🚪', say: 'Ahora sal de la casa por la puerta.' },
  { id: 'bones', icon: '🦴', say: 'Busca huesos que brillan por el pueblo. ¡Con ellos compras cosas!' },
];
function tut3(p) {
  if (!p.tut) {
    const veteran = p.day > 1 || Object.values(p.log).some(l => l.meals > 0);
    p.tut = { step: veteran ? TUT3.length : 0, seen: {}, visited: {}, focus: null, moved: 0 };
    p.tut.seen['stage-' + stageOf(p.day).id] = true;   // no anunciar «¡creció!» por la etapa en la que ya estaba
  }
  return p.tut;
}
const NEED3 = {
  '🍖': { place: 'casa', doId: 'eat', say: 'Luna tiene hambre. Ve a la casa y toca Comer.' },
  '💧': { place: 'casa', doId: 'water', say: 'Luna tiene sed. Ve a la casa y toca Agua.' },
  '😴': { place: 'casa', doId: 'nap', say: 'Luna tiene sueño. En la casa toca Siesta o Dormir.' },
  '🫧': { place: 'casa', doId: 'bath', say: 'Luna está sucia. Ve a la casa para limpiarla.' },
  '💩': { place: 'casa', doId: 'clean', say: 'Luna hizo un accidente en casa. Hay que recogerlo.' },
  '🎾': { place: 'parque', doId: 'kick', say: 'Luna está aburrida. ¡Vamos al parque a jugar con la pelota!' },
  '🤒': { place: 'vet', doId: 'cure', say: 'Luna está enfermita. Llévala a la veterinaria y toca Curar.' },
  '💉': { place: 'vet', doId: 'vac', say: 'Hoy le toca una vacuna. Ve a la veterinaria y toca Vacuna.' },
  '💊': { place: 'vet', doId: 'deworm', say: 'Luna necesita su pastilla contra los bichitos. Ve a la veterinaria.' },
  '✂️': { place: 'casa', doId: 'brush', say: 'Hora de arreglar a Luna. Ve a la casa y cepíllala.' },
};
function nextGoal3(p) {
  const t = tut3(p);
  if (t.step < TUT3.length) return { ...TUT3[t.step], key: 'tut-' + t.step, fixed: true };
  if (hide3) return { icon: '🙈', key: 'hide', say: '¿Dónde está Luna? Camina y mira el globito: si sale fuego, ¡estás muy cerca!', fixed: true };
  if (p.asleep) return softGoal3(p, true) || { icon: '💤', key: 'sleep', say: 'Luna está durmiendo. Déjala descansar, o despiértala tocándola.', fixed: true };
  const recovering = !!(p.sick && p.sick.treated);
  const act3 = needsOf(p).filter(x => !(x.icon === '🤒' && recovering));
  // Lo urgente (nivel rojo) no se puede omitir; lo demás sí, con «Ahora no»
  for (const n of [...act3.filter(x => x.level === 'bad'), ...act3.filter(x => x.level === 'warn')]) {
    const g = NEED3[n.icon];
    if (!g) continue;
    const key = 'need-' + n.icon, urgent = n.level === 'bad';
    if (!urgent && isSkipped3(key)) continue;
    // bebés (< semana 4): no hay botón Agua, la sed se quita con la leche
    if (n.icon === '💧' && p.day < 4) return { icon: '🍼', key, place: 'casa', doId: 'eat', say: 'Luna tiene sed. En casa dale su lechita.', fixed: urgent };
    let doId = g.doId;
    if (doId === 'bath') doId = p.day < 8 ? 'wipe' : (p.lastDone.bano && p.day - p.lastDone.bano < 3 ? 'brush' : 'bath');
    return { icon: n.icon, key, ...g, doId, say: doId === 'brush' ? 'Luna está sucia. Ve a la casa y cepíllala.' : g.say, fixed: urgent };
  }
  if (t.focus && !t.visited[t.focus] && !isSkipped3('focus-' + t.focus)) { const f = PL.find(x => x.id === t.focus); if (f) return { icon: f.icon, place: f.id, key: 'focus-' + f.id, say: `¡${f.name} está abierto! Sigue la flecha.` }; }
  const map = { '🍖': ['casa', 'eat', 'Hora de comer. Ve a la casa y toca Comer.'], '💧': ['casa', 'water', 'Dale agua fresca a Luna en la casa.'],
    '🎾': p.day >= 3 ? ['parque', 'kick', '¡A jugar! Ve al parque a patear la pelota.'] : ['casa', 'pet', 'Juega con Luna: dale mimos en la casa.'],
    '🫧': p.day >= 3 ? ['casa', 'brush', 'Hora de la limpieza. En casa cepilla a Luna.'] : ['casa', 'wipe', 'Hora de la limpieza. En casa limpia a Luna.'],
    '🎓': ['escuela', 'trick:', 'Hoy toca escuela. Enséñale un truco a Luna.'], '🗺️': ['parque', 'stroll', 'Sal a pasear con Luna: ve al parque y toca Pasear.'] };
  const { waiting } = routinePending(p);
  for (const r of routineFor(p, p.day, today(p))) {
    if (r.have >= r.need || !routineReady(p, r.icon) || !map[r.icon] || isSkipped3('routine-' + r.icon)) continue;
    const m = map[r.icon];
    return { icon: r.icon, key: 'routine-' + r.icon, place: m[0], doId: m[1], say: m[2] };
  }
  const sg = softGoal3(p, false, waiting);
  if (sg && recovering) return { ...sg, key: 'rec-' + sg.key, say: 'Luna se está curando: dale comida, agua y que descanse. ' + sg.say };
  return sg;
}
// «Ahora no»: la sugerencia se guarda 10 minutos y Pío propone otra cosa
const skip3 = new Map();
const isSkipped3 = key => (skip3.get(key.replace(/^(rec-|zz-)/, '')) || 0) > Date.now();
function skipGoal3() {
  const g = goal3;
  if (!g || g.fixed) return;
  skip3.set(g.key.replace(/^(rec-|zz-)/, ''), Date.now() + 10 * 60 * 1000);
  sfx('pop'); autoWalk = null;
  refreshGuide3();
  speak('¡Está bien, después! ' + (goal3 && goal3 !== g ? goal3.say : ''));
  clearTimeout(speakT3); spoken3 = goal3 ? goal3.key : spoken3; $('#guide').classList.remove('new');
}
// Ideas para los tiempos muertos. Siempre hay alguna: si Pío ya repitió una sin que pasara nada, prueba la siguiente.
const skipIdeas3 = new Set();
let skipDay3 = 0;
function softGoal3(p, sleeping, waiting) {
  if (skipDay3 !== p.day) { skipDay3 = p.day; skipIdeas3.clear(); }
  const g = today(p).games || {}, d = p.day, tired = sleeping || !!cantExercise(p);
  const pre = sleeping ? 'Luna está durmiendo. Mientras descansa, ' : '';
  const sayP = x => (sleeping ? pre + x : x.replace(/^([¡¿]?)(.)/, (m0, a1, c) => a1 + c.toUpperCase()));
  const list = [];
  if (boneMeshes.length) list.push({ icon: '🦴', key: 'bones', say: sayP('¡busca los huesos escondidos! Sigue la flecha amarilla.') });
  if (treasure3) list.push({ icon: '💰', key: 'treasure', say: sayP('hay un tesoro escondido. Camina y mira el globito: si sale fuego, ¡estás muy cerca!') });
  const ideas = [
    { id: 'memory', ok: true, icon: '🃏', place: 'casa', doId: 'memory', say: '¿jugamos a la memoria? Ve a la casa y toca Memoria.', again: '¿Otra partida de memoria? Ve a la casa.' },
    { id: 'ducks', ok: true, icon: '🦆', place: 'lago', doId: 'duckfeed', say: '¡los patos tienen hambre! Ve al lago y dales su comida.', again: '¡Los patos quieren más comida! Ve al lago.' },
    { id: 'agility', ok: d >= 3 && !tired, icon: '🏃', place: 'parque', doId: 'agility', say: '¡carrera de obstáculos! Ve al parque y toca Carrera.', again: '¿Otra carrera de obstáculos? ¡Vamos al parque!' },
    { id: 'hide', ok: d >= 5 && !tired, icon: '🙈', place: 'parque', doId: 'hide', say: '¡juguemos al escondite! Ve al parque y toca Escondite.', again: '¿Otra vez al escondite? ¡Vamos al parque!' },
    { id: 'forest', ok: d >= 3 && !tired, icon: '🌲', place: 'bosque', doId: 'level:', say: '¡aventura en el bosque! Lleva a Luna saltando hasta la casita.', again: '¡Vamos de aventura al bosque!' },
  ].filter(x => x.ok);
  const cap = s2 => s2.replace(/^([¡¿]?)(.)/, (m0, a1, c) => a1 + c.toUpperCase());
  for (const it of ideas) if (!g[it.id]) list.push({ icon: it.icon, place: it.place, doId: it.doId, key: 'fun-' + it.id, say: sleeping ? pre + it.say : cap(it.say) });
  if (p.bones >= 8) list.push({ icon: '🛒', key: 'shop', place: 'tienda', say: sayP('¡tienes muchos huesos! Ve a la tienda a comprarle algo bonito a Luna. Si prefieres guardarlos, toca Ahora no.') });
  if (!sleeping && waiting && WAIT_SAY[waiting.icon]) list.push({ ...WAIT_SAY[waiting.icon], key: 'wait-' + waiting.icon });
  for (const it of ideas) list.push({ icon: it.icon, place: it.place, doId: it.doId, key: 'again-' + it.id, say: sleeping ? pre + it.again.charAt(0).toLowerCase() + it.again.slice(1) : it.again });
  if (!list.length) return null;
  const k = sleeping ? 'zz-' : '';
  list.forEach(x => { x.key = k + x.key; });
  let pick = list.find(x => !skipIdeas3.has(x.key) && !isSkipped3(x.key));
  if (!pick) { skipIdeas3.clear(); pick = list.find(x => !isSkipped3(x.key)) || list[0]; }
  return pick;
}
// Juegos que todavía no se jugaron hoy: Pío los sugiere para que nunca falte qué hacer
function funIdea3(p) {
  const g = today(p).games || {}, d = p.day, tired = !!cantExercise(p);
  const ideas = [
    { id: 'memory', ok: true, icon: '🃏', place: 'casa', doId: 'memory', say: '¿Jugamos a la memoria? Ve a la casa y toca Memoria.' },
    { id: 'ducks', ok: true, icon: '🦆', place: 'lago', doId: 'duckfeed', say: '¡Los patos tienen hambre! Ve al lago y dales su comida.' },
    { id: 'agility', ok: d >= 3 && !tired, icon: '🏃', place: 'parque', doId: 'agility', say: '¡Carrera de obstáculos! Ve al parque y toca Carrera.' },
    { id: 'hide', ok: d >= 5 && !tired, icon: '🙈', place: 'parque', doId: 'hide', say: '¡Juguemos al escondite! Ve al parque y toca Escondite.' },
  ];
  const it = ideas.find(x => x.ok && !g[x.id]);
  return it ? { icon: it.icon, place: it.place, doId: it.doId, say: it.say, key: 'fun-' + it.id } : null;
}
let goal3 = null, spoken3 = '', speakT3 = 0;
function refreshGuide3() {
  if (!current) return;
  let g;
  try { g = nextGoal3(current.pet); } catch (err) { console.error('Pío:', err); g = { icon: '⭐', key: 'oops', say: '¡Vamos a pasear con Luna por el pueblo!' }; }
  goal3 = g;
  const pl = g.place ? PL.find(x => x.id === g.place) : null;
  const el = $('#guide');
  const html = `<span class="g-bird">🐦</span><span class="g-bub"><b>${g.icon}</b>${pl ? `<i>➜</i><b>${pl.icon}</b>` : ''}<small class="g-txt">${pl ? pl.name : g.key.includes('bones') ? 'Huesos' : g.key.includes('treasure') ? 'Tesoro' : g.key === 'sleep' ? 'Shh…' : ''}</small></span>`;
  if (el.__h !== html) { el.innerHTML = html; el.__h = html; }
  el.hidden = false;
  el.setAttribute('aria-label', 'Pío dice: ' + g.say);
  $('#guideSkip').hidden = !!g.fixed || !!mini;
  if (g.key !== spoken3) {
    el.classList.add('new');
    clearTimeout(speakT3);
    const key = g.key;
    speakT3 = setTimeout(() => { if (goal3 && goal3.key === key) { spoken3 = key; speak(goal3.say); el.classList.remove('new'); } }, spoken3 === '' ? 3800 : 1500);
  }
  // botón resaltado dentro de casa
  document.querySelectorAll('#actions .hint').forEach(b => b.classList.remove('hint'));
  const here = placeNow3();
  if (!$('#actions').hidden && g.doId && (!g.place || g.place === here)) { const b = document.querySelector(g.doId.endsWith(':') ? `#actions [data-act^="${g.doId}"]:not([aria-disabled])` : `#actions [data-act="${g.doId}"]`); if (b) b.classList.add('hint'); }
  else if (!$('#actions').hidden && here && g.place && g.place !== here) {   // lo que toca está en otro lugar: brilla Salir
    const b = document.querySelector('#actions [data-act="exit"], #actions [data-act="closepark"], #actions [data-act="closelake"], #actions [data-act="closeforest"]');
    if (b) b.classList.add('hint');
  }
  const pb = document.querySelector('#prompt .go-btn');
  if (pb) pb.classList.toggle('hint', !!(nearT && g.place === nearT.pl.id));
}
// Qué se hace en cada lugar (botón ❓)
const PLACE_HELP3 = {
  casa: 'Esta es la casa de Luna. Aquí come, bebe, duerme y se baña. También pueden jugar a la memoria.',
  vet: 'Esta es la veterinaria. Cuando toca vacuna, toca la jeringa. La pastilla quita los bichitos. Si Luna está enfermita, toca Curar.',
  tienda: 'Esta es la tienda. Con los huesos que encuentras compras premios, juguetes y ropa para Luna.',
  escuela: 'Esta es la escuela. Elige un truco, mira las flechas y repítelas. ¡Así Luna aprende!',
  parque: 'Este es el parque. Haz una carrera de obstáculos, juega al escondite o patea la pelota.',
  bosque: 'Este es el bosque. Elige un camino y lleva a Luna saltando hasta la casita.',
  lago: 'Este es el lago. Dale de comer a los patos, míralos nadar o bebe agua fresca.',
};
function lunaNear3() { return dog.root.parent === scene && Math.hypot(kidS.x - luna.x, kidS.z - luna.z) < 2.6; }
function placeNow3() { return where === 'home' ? 'casa' : where === 'park' ? 'parque' : where === 'lake' ? 'lago' : where === 'forestmenu' ? 'bosque' : where === 'room' ? roomId : null; }
function placeHelp3() {
  const id = placeNow3();
  if (!id) return;
  let say = PLACE_HELP3[id];
  if (goal3 && goal3.place === id) say += ' ' + goal3.say;                       // y lo que conviene hacer ahora
  else if (goal3 && goal3.place) say += ` Ahora toca ir a ${PL.find(x => x.id === goal3.place).name}. Toca Salir.`;
  speak(say);
  refreshGuide3();
}
// Camino por el pueblo (búsqueda en una cuadrícula de 0,5 que esquiva casas, árboles y agua)
let autoWalk = null, freeGrid = null;
const GC = 0.5, GNX = Math.ceil((BOUNDS.x1 - BOUNDS.x0) / GC), GNZ = Math.ceil((BOUNDS.z1 - BOUNDS.z0) / GC);
function findPath3(sx, sz, tx, tz) {
  if (!freeGrid) { freeGrid = new Uint8Array((GNX + 1) * (GNZ + 1)); for (let j = 0; j <= GNZ; j++) for (let i = 0; i <= GNX; i++) freeGrid[j * (GNX + 1) + i] = blocked(BOUNDS.x0 + i * GC, BOUNDS.z0 + j * GC, 0.38) ? 0 : 1; }
  const ix = x => clamp(Math.round((x - BOUNDS.x0) / GC), 0, GNX), iz = z => clamp(Math.round((z - BOUNDS.z0) / GC), 0, GNZ);
  const key = (i, j) => j * (GNX + 1) + i, free = (i, j) => i >= 0 && j >= 0 && i <= GNX && j <= GNZ && freeGrid[key(i, j)] === 1;
  const ti = ix(tx), tj = iz(tz), prev = new Int32Array((GNX + 1) * (GNZ + 1)).fill(-2);
  const q = [key(ix(sx), iz(sz))]; prev[q[0]] = -1;
  let head = 0, found = -1;
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
  while (head < q.length) {
    const k = q[head++], i = k % (GNX + 1), j = (k / (GNX + 1)) | 0;
    if (Math.abs(i - ti) <= 1 && Math.abs(j - tj) <= 1) { found = k; break; }
    for (const [a, b] of dirs) {
      const ni = i + a, nj = j + b;
      if (!free(ni, nj) || (a && b && (!free(i + a, j) || !free(i, j + b)))) continue;
      const nk = key(ni, nj);
      if (prev[nk] !== -2) continue;
      prev[nk] = k; q.push(nk);
    }
  }
  if (found < 0) return null;
  const pts = [];
  for (let k = found; k !== -1; k = prev[k]) pts.push([BOUNDS.x0 + (k % (GNX + 1)) * GC, BOUNDS.z0 + ((k / (GNX + 1)) | 0) * GC]);
  pts.reverse();
  const out = pts.filter((_, i) => i % 3 === 2 || i === pts.length - 1);
  out.push([tx, tz]);
  return out;
}
// Tocar a Pío: además de hablar, el avatar camina solo hasta el lugar que toca
function guideGo3() {
  const g = goal3;
  if (!g || hide3 || mini) return;
  if (!g.place) {                                               // buscar huesos: camina hasta el más cercano
    if (where !== 'town' || !/bones$/.test(g.key) || !boneMeshes.length) return;
    let best = null, bd = Infinity;
    for (const b of boneMeshes) { const d = Math.hypot(b.m.position.x - kidS.x, b.m.position.z - kidS.z); if (d < bd) { bd = d; best = b; } }
    const pts = findPath3(kidS.x, kidS.z, best.m.position.x, best.m.position.z);
    if (pts) { autoWalk = { pts, place: null, stuck: 0, best: Infinity }; sfx('pop'); }
    return;
  }
  if (placeNow3() === g.place) { refreshGuide3(); return; }
  if (where === 'park') closePark();
  else if (where === 'lake' || where === 'forestmenu') { where = 'town'; $('#actions').hidden = true; }
  if (where !== 'town') return;                                // dentro de la casa u otro lugar: primero Salir
  const tr = triggers.find(x => x.pl.id === g.place);
  if (!tr) return;
  if (nearT === tr) { enterPlace3(tr.pl); return; }
  const pts = findPath3(kidS.x, kidS.z, tr.x, tr.z);
  if (pts) { autoWalk = { pts, place: g.place, stuck: 0, best: Infinity }; sfx('pop'); }
}
// Tiempos muertos: si pasan 20 s sin tocar nada, Pío recuerda qué hacer (máximo 2 veces por idea)
let lastInputT = performance.now(), nudgeT = 0, nudgeKey = '', nudgeN = 0;
function idleNudge3() {
  const t3 = performance.now();
  if (!goal3 || mini || !$('#card3').hidden || autoWalk || train3 || forest) return;
  if (t3 - lastInputT < 20000 || t3 - nudgeT < 30000) return;
  if (goal3.key !== nudgeKey) { nudgeKey = goal3.key; nudgeN = 0; }
  if (goal3.key === 'sleep') return;
  const soft = /^(zz-|rec-)?(bones|treasure|fun-|again-|shop|wait-)/.test(goal3.key);
  if (nudgeN >= 2) {
    if (!soft) { if (t3 - nudgeT < 90000) return; nudgeN = 0; }      // tareas importantes: se repiten cada 1,5 min
    else { skipIdeas3.add(goal3.key.replace(/^rec-/, '')); refreshGuide3(); nudgeKey = goal3.key; nudgeN = 0; }   // ideas: pasa a la siguiente
  }
  nudgeN++; nudgeT = t3;
  sayGuide3();
  $('#guide').classList.add('new');
  pop(goal3.icon, goal3.place ? '👆 🐦' : '🐦');
}
W.addEventListener('pointerdown', () => { lastInputT = performance.now(); }, true);
W.addEventListener('keydown', () => { lastInputT = performance.now(); }, true);
function sayGuide3() { if (goal3) { spoken3 = goal3.key; speak(goal3.say); $('#guide').classList.remove('new'); } }
function guideEvent3(ev) {
  if (!current) return;
  const p = current.pet, t = tut3(p);
  if (t.step >= TUT3.length) return refreshGuide3();
  const id = TUT3[t.step].id;
  if (ev.startsWith('open:')) t.visited[ev.slice(5)] = true;
  const done = (id === 'walk' && ev === 'walk' && ++t.moved >= 3) || (id === 'home' && ev === 'open:casa') ||
    (id === 'eat' && ev === 'do:eat') || (id === 'pet' && ev === 'do:pet') || (id === 'exit' && ev === 'close:casa') || (id === 'bones' && ev === 'bone');
  if (done) {
    t.step++;
    pop('⭐');
    if (t.step >= TUT3.length) { addMilestone(p, 'tutorial', '🐦', '¡Terminaste las lecciones de Pío!'); setTimeout(() => speak('¡Lo hiciste genial! Ahora ya sabes cuidar a Luna.'), 1200); }
    saveRoot();
  }
  refreshGuide3();
}
// Flechas 3D: una grande que rebota sobre el destino y otra en el suelo que apunta desde Luna
const arrowMat = new THREE.MeshToonMaterial({ color: '#ffd23f', gradientMap: grad, emissive: '#5a4000' });
const bigArrow3 = new THREE.Group();
{ const c = new THREE.Mesh(G.cone(0.7, 1.1, 4), arrowMat); c.rotation.x = Math.PI; c.position.y = 0.55; bigArrow3.add(c); const s = new THREE.Mesh(G.box(0.45, 0.9, 0.45), arrowMat); s.position.y = 1.5; bigArrow3.add(s); }
bigArrow3.visible = false; town.add(bigArrow3);
const groundArrow3 = new THREE.Group();
{ const c = new THREE.Mesh(G.cone(0.32, 0.6, 3), arrowMat); c.rotation.x = Math.PI / 2; c.position.z = 1.5; groundArrow3.add(c); const s = new THREE.Mesh(G.box(0.18, 0.06, 0.6), arrowMat); s.position.z = 1.0; groundArrow3.add(s); }
groundArrow3.visible = false; town.add(groundArrow3);
function updateGuideArrows(t) {
  let tr = goal3 && goal3.place && triggers.find(x => x.pl.id === goal3.place);
  if (!tr && goal3 && /bones$/.test(goal3.key) && boneMeshes.length) {
    let best = null, bd = Infinity;
    for (const b of boneMeshes) { const d = Math.hypot(b.m.position.x - kidS.x, b.m.position.z - kidS.z); if (d < bd) { bd = d; best = b; } }
    tr = { x: best.m.position.x, z: best.m.position.z, baseY: 0.6, pl: {} };
  }
  const show = where === 'town' && tr && !(nearT && nearT === tr);
  bigArrow3.visible = groundArrow3.visible = !!show;
  if (!show) return;
  bigArrow3.position.set(tr.x, tr.baseY + 1.2 + Math.abs(Math.sin(t * 4)) * 0.6, tr.pl.w ? tr.pl.z + tr.pl.d / 2 : tr.z);
  bigArrow3.rotation.y = t * 1.5;
  const dx = tr.x - kidS.x, dz = tr.z - kidS.z;
  groundArrow3.position.set(kidS.x, 0.08, kidS.z);
  groundArrow3.rotation.y = Math.atan2(dx, dz);
  groundArrow3.children.forEach(c => { c.position.z = (c.geometry.type === 'ConeGeometry' ? 1.5 : 1.0) + Math.sin(t * 6) * 0.15; });
}

// ====================== Vida del pueblo: ardillas, mariposas, tesoro, escondite ======================
const markGame3 = (p, id) => { const e = today(p); e.games = e.games || {}; e.games[id] = (e.games[id] || 0) + 1; return e.games[id]; };
const shuffle3 = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const introCard3 = (icon, rows) => `<div class="result"><h2>${icon}</h2><div class="howto">${rows.map(([a, b]) => `<div><span>${a}</span><i>➜</i><span>${b}</span></div>`).join('')}</div></div>`;
let hudKey = '';
function gameHud(html) {
  const el = $('#gameHud');
  if (html == null) { el.hidden = true; hudKey = ''; return; }
  if (html === hudKey) return;
  hudKey = html;
  el.innerHTML = `${html}<button class="hbtn" data-act="quitgame" aria-label="Salir">✖</button>`;
  el.hidden = false;
}

// Globo «frío / caliente» sobre la cabeza del avatar
const heatSpr = sprite('❄️', 1.1, true); heatSpr.visible = false; town.add(heatSpr);
const thought3 = sprite('🍖', 0.85, true); thought3.visible = false; town.add(thought3);
let heatLvl = '', heatSaidT = 0;
const HEAT3 = { hot: ['🔥', '¡Caliente, caliente!'], warm: ['☀️', '¡Tibio!'], cold: ['❄️', '¡Frío!'] };
function updateHeat3(t) {
  let tx = null, tz = null;
  if (hide3) { tx = hide3.x; tz = hide3.z; }
  else if (treasure3 && goal3 && goal3.key === 'treasure') { tx = treasure3.x; tz = treasure3.z; }
  if (tx == null || where !== 'town') { heatSpr.visible = false; heatLvl = ''; return; }
  const d = Math.hypot(tx - kidS.x, tz - kidS.z), lvl = d < 3.5 ? 'hot' : d < 8 ? 'warm' : 'cold';
  if (lvl !== heatLvl) {
    if (heatLvl && t - heatSaidT > 2) { speak(HEAT3[lvl][1]); heatSaidT = t; }
    heatLvl = lvl; heatSpr.material.map = emojiTex(HEAT3[lvl][0], true); heatSpr.material.needsUpdate = true;
  }
  heatSpr.visible = true;
  heatSpr.position.set(kidS.x, 2.75 + Math.sin(t * 5) * 0.08, kidS.z);
}

// Ardilla (original, con formas simples)
function makeSquirrel() {
  const g = new THREE.Group();
  const b = mesh(G.sph(0.22, 12, 10), '#b0682c'); b.scale.set(0.9, 0.85, 1.2); b.position.y = 0.25; g.add(b);
  g.add(at(mesh(G.sph(0.13, 10, 8), '#f0d0a0', { cast: false }), 0, 0.2, 0.14));
  g.add(at(mesh(G.sph(0.15, 12, 10), '#b0682c'), 0, 0.46, 0.2));
  for (const sx of [-1, 1]) { g.add(at(mesh(G.cone(0.05, 0.12, 6), '#8a4a20'), sx * 0.08, 0.62, 0.17)); g.add(at(mesh(G.sph(0.03, 6, 5), '#1c1410', { cast: false }), sx * 0.07, 0.5, 0.33)); }
  for (const [y, z, r] of [[0.35, -0.25, 0.14], [0.6, -0.33, 0.15], [0.8, -0.22, 0.12]]) g.add(at(mesh(G.sph(r, 10, 8), '#c87c3c'), 0, y, z));
  return g;
}
let squirrel3 = null, sqT3 = 20;
function updateSquirrel3(dt, p, t) {
  const s = squirrel3;
  if (!s) {
    if (p.day < 3 || p.asleep || hide3 || where !== 'town') return;
    sqT3 -= dt;
    if (sqT3 > 0) return;
    sqT3 = 35 + Math.random() * 35;
    for (let i = 0; i < 60; i++) {
      const a = Math.random() * Math.PI * 2, r = 6 + Math.random() * 4;
      const x = kidS.x + Math.cos(a) * r, z = kidS.z - Math.abs(Math.sin(a)) * r * 0.8;
      if (blocked(x, z, 0.5)) continue;
      const m = makeSquirrel(); m.position.set(x, 0, z); m.rotation.y = Math.atan2(kidS.x - x, kidS.z - z); town.add(m);
      squirrel3 = { m, t: 0, run: 0, vx: 0, vz: 0 };
      speak('¡Mira, una ardilla! Corre con Luna a saludarla.');
      return;
    }
    return;
  }
  s.t += dt;
  const P = s.m.position;
  if (s.run > 0) {
    s.run -= dt; P.x += s.vx * dt; P.z += s.vz * dt; P.y = Math.abs(Math.sin(t * 18)) * 0.25;
    if (s.run <= 0) { town.remove(s.m); squirrel3 = null; }
    return;
  }
  P.y = Math.abs(Math.sin(t * 5)) * 0.12;
  if (s.t > 25) { town.remove(s.m); squirrel3 = null; return; }
  if (Math.hypot(luna.x - P.x, luna.z - P.z) < 1.5 || Math.hypot(kidS.x - P.x, kidS.z - P.z) < 1.2) {
    const a = Math.atan2(P.x - luna.x, P.z - luna.z);
    s.vx = Math.sin(a) * 7; s.vz = Math.cos(a) * 7; s.run = 1.2; s.m.rotation.y = a;
    luna.mode = 'happy'; luna.modeT = 1.2; dogSound('bark', dogSize());
    const e = today(p); e.squirrels = (e.squirrels || 0) + 1;
    if (e.squirrels <= 4) {
      applyFx(p, { felicidad: 6, energia: -2 }); p.bones++; e.play++;
      burst(town, '💖', new THREE.Vector3(luna.x, 1.4, luna.z), 3, 0.5); burst(town, '🦴', P, 1, 0.5); sfx('coin');
      addMilestone(p, 'squirrel', '🐿️', 'Luna persiguió a su primera ardilla.');
      refreshHUD();
    }
    speak('¡Guau! ¡Qué rápida!');
  }
}

// Mariposas: revolotean por el pueblo; Luna las persigue si pasa cerca
const bflies = [];
let bflyCd = 0;
function buildButterflies() {
  const r = rng(2468);
  const cols = ['#ffffff', '#ffd23f', '#ff8fc8', '#8fd0ff', '#c9a0ff'];
  for (let i = 0; i < 12; i++) {
    let x = 0, z = 0;
    for (let k = 0; k < 50; k++) { x = BOUNDS.x0 + 3 + r() * (BOUNDS.x1 - BOUNDS.x0 - 6); z = BOUNDS.z0 + 3 + r() * (BOUNDS.z1 - BOUNDS.z0 - 6); if (!blocked(x, z, 1)) break; }
    const g = new THREE.Group(), wings = [];
    const mat = new THREE.MeshToonMaterial({ color: cols[i % cols.length], gradientMap: grad, side: THREE.DoubleSide });
    for (const sx of [-1, 1]) {
      const pv = new THREE.Group();
      const w = new THREE.Mesh(new THREE.CircleGeometry(0.17, 10), mat); w.rotation.x = -Math.PI / 2; w.position.x = sx * 0.15; pv.add(w);
      g.add(pv); wings.push(pv);
    }
    g.add(mesh(G.cap(0.025, 0.16), '#3a2a2a', { cast: false }));
    g.children[2].rotation.x = Math.PI / 2;
    town.add(g);
    bflies.push({ g, wings, cx: x, cz: z, ph: r() * 10, cd: 0 });
  }
}
function updateButterflies(dt, p, t) {
  bflyCd -= dt;
  for (const b of bflies) {
    b.ph += dt; b.cd -= dt;
    const x = b.cx + Math.cos(b.ph * 0.7) * 1.4, z = b.cz + Math.sin(b.ph * 1.1) * 1.4, y = 1.1 + Math.sin(b.ph * 2.3) * 0.35;
    b.g.position.set(x, y, z);
    b.g.rotation.y = -b.ph * 0.7;
    const f = Math.sin(t * 22 + b.ph) * 0.9;
    b.wings[0].rotation.z = f; b.wings[1].rotation.z = -f;
    if (b.cd <= 0 && !hide3 && !p.asleep && Math.hypot(x - luna.x, z - luna.z) < 1.2) {
      const a = Math.atan2(x - luna.x, z - luna.z);
      const nx = b.cx + Math.sin(a) * 3.5, nz = b.cz + Math.cos(a) * 3.5;
      if (nx > BOUNDS.x0 && nx < BOUNDS.x1 && nz > BOUNDS.z0 && nz < BOUNDS.z1) { b.cx = nx; b.cz = nz; }
      b.cd = 3;
      burst(town, '💖', new THREE.Vector3(luna.x, 1.4, luna.z), 1, 0.45);
      luna.mode = 'happy'; luna.modeT = 0.8;
      if (bflyCd <= 0) { bflyCd = 12; applyFx(p, { felicidad: 2 }); dogSound('yip', dogSize(), 0.5); refreshHUD(); }
    }
  }
}

// Tesoro: al pasar encima, sale un cofre de la tierra
let chest3 = null;
function digTreasure3(p) {
  const T0 = treasure3;
  treasure3 = null;
  p.treasure = { day: p.day, found: true };
  const r = Math.random();
  let txt;
  if (r < 0.45) { const n = 4 + Math.floor(Math.random() * 4); p.bones += n; txt = `🦴 +${n}`; }
  else if (r < 0.7) { p.items.premio += 2; txt = '🍪 +2'; }
  else if (r < 0.88) { p.items.champu += 1; txt = '🧴 +1'; }
  else { p.bones += 12; txt = '💎 🦴 +12'; }
  applyFx(p, { felicidad: 10 });
  const g = new THREE.Group();
  g.add(at(mesh(G.box(0.9, 0.5, 0.6), '#a0642c'), 0, 0.25, 0));
  const lid = mesh(G.box(0.95, 0.18, 0.65), '#ffd23f'); lid.position.set(0, 0.6, -0.15); lid.rotation.x = -0.9; g.add(lid);
  g.add(at(mesh(G.box(0.15, 0.2, 0.05), '#ffd23f'), 0, 0.35, 0.32));
  g.add(at(mesh(G.cyl(0.8, 0.9, 0.08, 16), '#9a6236', { cast: false }), 0, 0.02, 0));
  g.position.set(T0.x, -0.6, T0.z); town.add(g);
  chest3 = { g, t: 0 };
  burst(town, '✨', new THREE.Vector3(T0.x, 0.8, T0.z), 8, 0.6);
  luna.mode = 'happy'; luna.modeT = 1.6; kid.mode = 'cheer'; kid.modeT = 1.6;
  addEvent(p, '💰', `¡Luna desenterró un tesoro! (${txt})`);
  addMilestone(p, 'treasure1', '💰', 'Luna encontró su primer tesoro escondido.');
  pop('💰', txt); speak('¡Luna encontró el tesoro!'); sfx('coin');
  setTimeout(() => dogSound('happy', dogSize()), 500);
  saveRoot(); refreshHUD();
}

// Escondite: Luna se esconde detrás de un árbol cercano; tienes 60 s para encontrarla
let hide3 = null;
function startHide3() {
  speak('¡Escondite! Cierra los ojos y cuenta… ¡Luna se va a esconder!');
  card3(introCard3('🙈', [['🐶', '🌳❓'], ['🔥', '👀 🐶'], ['❄️', '↩️']]), () => {
    const trees = colliders.circles.filter(c => c.tree);
    let spot = null;
    for (let i = 0; i < 600 && !spot; i++) {
      const c = trees[Math.floor(Math.random() * trees.length)];
      const a = Math.random() * Math.PI * 2, x = c.x + Math.sin(a) * (c.r + 0.7), z = c.z + Math.cos(a) * (c.r + 0.7);
      const d = Math.hypot(x - kidS.x, z - kidS.z);
      if (d < 6 || d > 15 || blocked(x, z, 0.4)) continue;
      spot = { x, z };
    }
    if (!spot) { speak('Aquí no hay dónde esconderse. ¡Prueba en otro lugar!'); return; }
    fade(() => {
      hide3 = { x: spot.x, z: spot.z, t: 0, dur: 60, barkT: 4 };
      luna.x = spot.x; luna.z = spot.z; luna.path = null; luna.ry = Math.random() * 6;
      $('#actions').hidden = true; $('#prompt').hidden = true;
    });
  });
}
function updateHide3(dt, p) {
  const H = hide3;
  H.t += dt; H.barkT -= dt;
  if (H.barkT <= 0) { H.barkT = 5; dogSound('bark', dogSize(), 0.5); }
  const d = Math.hypot(kidS.x - H.x, kidS.z - H.z);
  dog.root.visible = d < 3.5;
  gameHud(`<span>🙈 ${Math.max(0, Math.ceil(H.dur - H.t))}</span>`);
  if (d < 1.7) endHide3(true);
  else if (H.t >= H.dur) endHide3(false);
}
function endHide3(found) {
  const H = hide3, p = current.pet;
  if (!H) return;
  hide3 = null; gameHud(null); dog.root.visible = true;
  trail = [{ x: luna.x, z: luna.z }, { x: kidS.x, z: kidS.z }];
  const stars = !found ? 0 : H.t < 20 ? 3 : H.t < 40 ? 2 : 1, bones = stars * 2;
  p.bones += bones; today(p).play++; markGame3(p, 'hide');
  applyFx(p, { felicidad: 10 + stars * 4, energia: -6, hidratacion: -4 });
  addEvent(p, '🙈', found ? `Jugaron al escondite: encontraste a Luna en ${Math.round(H.t)} s.` : 'Jugaron al escondite: Luna salió solita.');
  if (found) { addMilestone(p, 'hide1', '🙈', '¡Encontraste a Luna jugando al escondite!'); luna.mode = 'happy'; luna.modeT = 1.5; kid.mode = 'cheer'; kid.modeT = 1.5; burst(town, '💖', new THREE.Vector3(luna.x, 1.4, luna.z), 6); }
  saveRoot(); refreshHUD();
  resultCard3(stars, bones, found ? `<span>🙈 ${Math.round(H.t)}s</span>` : '<span>🐶 👋</span>');
}

function updateTownLife(dt, p, t) {
  if (!bflies.length) buildButterflies();
  updateButterflies(dt, p, t);
  updateSquirrel3(dt, p, t);
  if (hide3 && $('#card3').hidden) updateHide3(dt, p);
  if (treasure3 && !hide3 && where === 'town' && (Math.hypot(treasure3.x - kidS.x, treasure3.z - kidS.z) < 1.0 || (dog.root.parent === town && Math.hypot(treasure3.x - luna.x, treasure3.z - luna.z) < 0.9))) digTreasure3(p);
  if (chest3) {
    chest3.t += dt;
    chest3.g.position.y = Math.min(0, -0.6 + chest3.t * 1.2);
    if (chest3.t > 4) { town.remove(chest3.g); chest3 = null; }
  }
  updateHeat3(t);
}

// ====================== Minijuegos 3D ======================
let mini = null;
let pointerHeld = false;
function enterMini(sc, w) {
  const withK = lunaWithKid();
  if (withK) moveObj(dog.root, sc);
  moveObj(kid.root, sc);
  scene = sc; where = w;
  $('#actions').hidden = true; $('#prompt').hidden = true; setInfo('');
  heatSpr.visible = false; thought3.visible = false; dog.root.visible = true;
  return withK;
}
// Vuelve al lugar desde donde se empezó el juego (casa, parque o lago)
function exitMini(back) {
  const sc = scene;
  mini = null; gameHud(null); kid.mode = 'idle';
  fade(() => {
    if (back === 'casa') { enterHomeNow(); return; }
    const withK = dog.root.parent === sc;
    if (withK) moveObj(dog.root, town);
    moveObj(kid.root, town);
    scene = town; where = 'town';
    const tr = triggers.find(x => x.pl.id === back);
    (withK ? placePair : placeKid)(tr.x + 1.6, tr.z, Math.PI / 2);   // al lado del lugar, fuera de la fuente y del agua
    if (back === 'parque') openPark(); else if (back === 'lago') openLake();
  });
}
function finishMini(stars, bones, extra, apply, back) {
  const p = current.pet;
  mini.over = true;
  apply(p);
  saveRoot(); refreshHUD(); gameHud(null);
  if (stars) { kid.mode = 'cheer'; kid.modeT = 2; luna.mode = 'happy'; luna.modeT = 2; }
  resultCard3(stars, bones, extra, () => exitMini(back));
}
const camTo = (x, y, z, lx, ly, lz, dt, k = 5) => { camera.position.lerp(new THREE.Vector3(x, y, z), 1 - Math.exp(-k * dt)); camera.lookAt(lx, ly, lz); };

// ---------- Parque: carrera de obstáculos ----------
// Luna corre sola; A o tocar la pantalla = saltar vallas y charcos. Chocar solo quita estrellas.
const agiScene = new THREE.Scene();
function startAgility3() {
  speak('¡Carrera de obstáculos! Toca A o la pantalla para saltar las vallas y los charcos.');
  card3(introCard3('🏃', [['Ⓐ 👆', '⤴️ 🚧'], ['💦', '⤴️'], ['🦴', '😋']]), () => fade(buildAgility3));
}
function buildAgility3() {
  clearScene(agiScene);
  const lt = lights(agiScene);
  agiScene.background = new THREE.Color('#bfe6ff'); agiScene.fog = new THREE.Fog('#bfe6ff', 22, 60);
  const LEN = 300, r = rng(Date.now() % 100000);
  agiScene.add(at(mesh(G.box(LEN + 60, 0.2, 24), '#8fd46e', { cast: false, recv: true }), LEN / 2, -0.1, -4));
  agiScene.add(at(mesh(G.box(LEN + 60, 0.04, 2.4), '#f2d39a', { cast: false, recv: true }), LEN / 2, 0.02, 0));
  for (let x = -10; x < LEN + 20; x += 2.5 + r() * 4) {
    const tr = makeTree(r() < 0.4); tr.position.set(x, 0, -4 - r() * 8); tr.scale.setScalar(0.8 + r() * 0.5); agiScene.add(tr);
    if (r() < 0.5) { const b = mesh(G.sph(0.3 + r() * 0.3, 10, 8), '#5cbf5a'); b.position.set(x + 1, 0.2, 2.6 + r() * 1.5); agiScene.add(b); }
  }
  for (let x = 0; x < LEN + 20; x += 4) agiScene.add(at(mesh(G.box(0.12, 0.6, 0.12), '#ffffff'), x, 0.3, -1.6));
  agiScene.add(at(mesh(G.box(LEN + 20, 0.08, 0.08), '#ffffff'), LEN / 2, 0.55, -1.6));
  const obs = [];
  for (let x = 10; x < LEN - 10; x += 6 + r() * 3.5) {
    const kind = r() < 0.62 ? 'fence' : 'puddle';
    let m;
    if (kind === 'fence') {
      m = new THREE.Group();
      for (const sz of [-0.85, 0.85]) m.add(at(mesh(G.box(0.12, 0.95, 0.12), '#c98c55'), 0, 0.47, sz));
      m.add(at(mesh(G.box(0.1, 0.14, 1.8), '#ff5c5c'), 0, 0.78, 0));
      m.add(at(mesh(G.box(0.1, 0.12, 1.8), '#ffffff'), 0, 0.45, 0));
    } else {
      m = mesh(G.cyl(0.85, 0.85, 0.04, 20), '#5ec2f5', { cast: false }); m.scale.set(1.2, 1, 0.9); m.position.y = 0.04;
    }
    m.position.x = x; agiScene.add(m);
    obs.push({ kind, x, m, done: false });
    if (r() < 0.6) {
      const high = r() < 0.6, bm = boneMesh(); bm.scale.setScalar(0.9);
      const bx = high ? x : x + 3, by = high ? 1.55 : 0.6;
      bm.position.set(bx, by, 0); agiScene.add(bm);
      obs.push({ kind: 'bone', x: bx, y: by, m: bm, done: false });
    }
  }
  enterMini(agiScene, 'agility');
  dog.root.rotation.y = Math.PI / 2; kid.root.rotation.y = Math.PI / 2; kid.leash = true;
  camera.position.set(2, 2.8, 9);
  mini = {
    kind: 'agility', lt, obs, time: 0, dur: 35, x: 0, y: 0, vy: 0, onGround: true, buffer: -9, lastGround: 0, speed: 5,
    hits: 0, cleared: 0, splash: 0, bones: 0, inv: 0, over: false,
    update: updateAgility3, tap: () => { mini.buffer = mini.time; }, quit: () => exitMini('parque'),
  };
}
function updateAgility3(dt) {
  const m = mini, p = current.pet, st = stageOf(p.day);
  if (!m.over) {
    m.time += dt; m.speed = Math.min(6.4, 5 + m.time * 0.05);   // velocidad amable para peques
    if (input.jumpPress || input.a) m.buffer = m.time;
    const held = input.aHeld || input.up || pointerHeld;
    if (m.onGround) m.lastGround = m.time;
    if (m.time - m.buffer <= 0.12 && m.time - m.lastGround <= 0.1) { m.vy = 7.6; m.buffer = -9; m.lastGround = -9; m.onGround = false; sfx('pop'); }
    let g = m.vy > 0 ? 22 : 34;
    if (m.vy > 0 && !held) g = 40;
    m.vy -= g * dt; m.y += m.vy * dt;
    if (m.y <= 0) { m.y = 0; m.vy = 0; m.onGround = true; }
    m.x += m.speed * dt;
    if (m.inv > 0) m.inv -= dt;
    for (const o of m.obs) {
      if (o.done) continue;
      if (o.kind === 'bone') {
        o.m.rotation.y += dt * 3;
        if (Math.abs(o.x - m.x) < 0.6 && Math.abs(o.y - (m.y + 0.7)) < 0.65) { o.done = true; agiScene.remove(o.m); m.bones++; sfx('coin'); burst(agiScene, '🦴', o.m.position, 2, 0.45); }
        continue;
      }
      const w = o.kind === 'puddle' ? 0.8 : 0.05, h = o.kind === 'fence' ? 0.7 : 0.08;   // choque con margen generoso
      if (m.inv <= 0 && Math.abs(o.x - m.x) < w + 0.2 && m.y < h) {
        o.done = true; m.hits++; m.inv = 0.8; dogSound('sad', dogSize(), 0.5);
        if (o.kind === 'puddle') { m.splash++; burst(agiScene, '💦', new THREE.Vector3(m.x, 0.6, 0), 4, 0.5); }
        else { o.m.rotation.z = -0.7; burst(agiScene, '💥', new THREE.Vector3(m.x, 0.8, 0), 2, 0.5); }
      } else if (o.x < m.x - w - 0.3) { o.done = true; m.cleared++; burst(agiScene, '⭐', new THREE.Vector3(m.x, 1.8, 0), 1, 0.45); }
    }
    gameHud(`<span>⏱️ ${Math.max(0, Math.ceil(m.dur - m.time))}</span><span>🦴 ${m.bones}</span>`);
    if (m.time >= m.dur) {
      const stars = m.hits === 0 ? 3 : m.hits <= 3 ? 2 : 1, bones = Math.floor((m.bones + m.cleared / 2) / 3);
      finishMini(stars, bones, `<span>🚧 ${m.cleared}</span>`, pp => {
        pp.bones += bones; today(pp).play++; markGame3(pp, 'agility');
        applyFx(pp, { felicidad: 14 + stars * 3, energia: -14, saciedad: -6, hidratacion: -10, higiene: -m.splash * 6 });
        addEvent(pp, '🏃', `Carrera de obstáculos: ${m.cleared} saltos y ${m.bones} huesos.`);
        if (stars === 3) addMilestone(pp, 'agility', '🏃', '¡Luna hizo una carrera de obstáculos perfecta!');
        outdoorRisk(pp);
      }, 'parque');
    }
  }
  const running = !m.over;
  dog.root.scale.setScalar(DOG_SCALE[Math.max(1, st.size)]);
  dog.root.position.set(m.x, m.y, 0);
  dog.root.visible = !(m.inv > 0 && Math.floor(m.time * 12) % 2);
  animateDog(dog, dt, { mode: !running ? 'happy' : m.onGround ? 'walk' : 'happy', speed: running ? m.speed * 0.6 : 0, mood: 'feliz' });
  kidS.x = m.x - 1.9; kid.root.position.set(kidS.x, 0, 0.4);
  animateKid(kid, dt, running, m.speed * 0.7);
  drawLeash3(agiScene, true);
  camTo(m.x + 2.2, 2.8, 9, m.x + 2.2, 0.9, 0, dt, 8);
  m.lt.sun.position.set(m.x + 5, 12, 8); m.lt.sun.target.position.set(m.x, 0, 0);
}

// ---------- Lago: dar de comer a los patos ----------
// Comida para patos (no pan: el pan les hace daño). La bolita va al pato más cercano a tu frente.
const duckScene = new THREE.Scene();
const DUCK_LANES = [-3.5, -6.5, -9.5];
function makeDuck3(gold) {
  const g = new THREE.Group(), c = gold ? '#ffd23f' : '#ffffff';
  const b = mesh(G.sph(0.42, 14, 10), c); b.scale.set(0.9, 0.65, 1.3); b.position.y = 0.2; g.add(b);
  for (const sx of [-1, 1]) { const w = mesh(G.sph(0.2, 10, 8), gold ? '#f0b820' : '#e4e8f0'); w.scale.set(0.4, 0.6, 1.1); w.position.set(sx * 0.33, 0.28, -0.05); g.add(w); }
  g.add(at(mesh(G.sph(0.24, 12, 10), gold ? c : '#3c8c4c'), 0, 0.65, 0.38));
  const bk = mesh(G.cone(0.09, 0.26, 8), '#ff9f43'); bk.rotation.x = Math.PI / 2; bk.position.set(0, 0.6, 0.66); g.add(bk);
  for (const sx of [-1, 1]) g.add(at(mesh(G.sph(0.035, 6, 5), '#1c1410', { cast: false }), sx * 0.12, 0.7, 0.57));
  if (gold) { const cr = sprite('✨', 0.6); cr.position.y = 1.2; g.add(cr); }
  return g;
}
function startDucks3() {
  speak('¡Los patos tienen hambre! Muévete y lánzales su comida con A o tocando la pantalla.');
  card3(introCard3('🦆', [['⬅️➡️', '🧒'], ['Ⓐ 👆', '🌾 ⬆️'], ['🌾 🦆', '😋'], ['🦆✨', '+3']]), () => fade(buildDucks3));
}
function buildDucks3() {
  clearScene(duckScene);
  const lt = lights(duckScene); lt.sun.position.set(4, 14, 8); lt.sun.target.position.set(0, 0, -5);
  duckScene.background = new THREE.Color('#bfe6ff'); duckScene.fog = new THREE.Fog('#bfe6ff', 25, 50);
  const water = mesh(new THREE.PlaneGeometry(70, 24), '#5ec2f5', { cast: false, recv: true }); water.rotation.x = -Math.PI / 2; water.position.set(0, 0, -7); duckScene.add(water);
  duckScene.add(at(mesh(G.box(70, 0.3, 8), '#f6e3a8', { cast: false, recv: true }), 0, -0.1, 4.6));
  duckScene.add(at(mesh(G.box(70, 0.3, 12), '#8fd46e', { cast: false, recv: true }), 0, -0.1, -24));
  const r = rng(777);
  for (let x = -30; x < 30; x += 2 + r() * 3) { const tr = makeTree(r() < 0.4); tr.position.set(x, 0, -20 - r() * 4); duckScene.add(tr); }
  for (let i = 0; i < 14; i++) { const lp = mesh(G.cyl(0.35, 0.35, 0.03, 12), '#58b04a', { cast: false }); lp.position.set(-12 + r() * 24, 0.02, -2 - r() * 11); duckScene.add(lp); }
  for (let i = 0; i < 18; i++) { const rd = mesh(G.cyl(0.04, 0.05, 1 + r() * 0.6, 5), '#4f9a3c'); rd.position.set(-14 + r() * 28, 0.5, 0.4 + r() * 0.3); duckScene.add(rd); }
  const lw = enterMini(duckScene, 'ducksgame');
  kidS.x = 0; kidS.z = 2.2; kidS.ry = Math.PI;
  if (lw) { luna.x = 1.3; luna.z = 2.6; luna.ry = Math.PI; }
  camera.position.set(0, 5.5, 8.5);
  mini = {
    kind: 'ducks', lt, water, time: 0, dur: 30, ducks: [], spawnT: 0.3, pellets: [], cd: 0, score: 0, over: false,
    update: updateDucks3, quit: () => exitMini('lago'),
    tap: e => {
      ndc.set(e.clientX / W.innerWidth * 2 - 1, -(e.clientY / W.innerHeight) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObject(water)[0];
      if (hit) kidS.x = clamp(hit.point.x, -6, 6);
      throwPellet3();
    },
  };
}
function throwPellet3() {
  const m = mini;
  if (!m || m.over || m.cd > 0) return;
  m.cd = 0.55; kid.mode = 'throw'; kid.modeT = 0.3; sfx('pop');
  const T = 0.8, x0 = kidS.x + 0.25, z0 = 1.8, y0 = 1.3;
  let best = null, bd = 0.75;   // ayuda a apuntar, pero hay que ponerse delante del pato
  for (const d of m.ducks) { if (d.fed) continue; const px = d.x + d.vx * T, dd = Math.abs(px - kidS.x); if (dd < bd) { bd = dd; best = { x: px, z: d.z }; } }
  const tx = best ? best.x : kidS.x, tz = best ? best.z : -6.5;
  const s = mesh(G.sph(0.11, 8, 6), '#e8c860'); s.position.set(x0, y0, z0); duckScene.add(s);
  m.pellets.push({ s, t: 0, T, vx: (tx - x0) / T, vz: (tz - z0) / T, vy: (0.3 - y0 + 0.5 * 9 * T * T) / T });
}
function updateDucks3(dt) {
  const m = mini, p = current.pet, t = timer.getElapsed();
  if (!m.over) {
    m.time += dt; m.cd -= dt;
    const dir = clamp((input.right - input.left) + input.jx, -1, 1);
    kidS.x = clamp(kidS.x + dir * 5 * dt, -6, 6);
    if (input.a || input.jumpPress) throwPellet3();
    m.spawnT -= dt;
    if (m.spawnT <= 0 && m.time < m.dur - 1.5) {
      const left = Math.random() < 0.5, gold = Math.random() < 0.13, dm = makeDuck3(gold);
      const z = DUCK_LANES[Math.floor(Math.random() * 3)], vx = (left ? 1 : -1) * (1.3 + Math.random() * 1.3) * (1 + m.time / 45);
      dm.position.set(left ? -13 : 13, 0, z); dm.rotation.y = left ? Math.PI / 2 : -Math.PI / 2; duckScene.add(dm);
      m.ducks.push({ m: dm, x: dm.position.x, z, vx, gold, fed: false, ph: Math.random() * 6 });
      m.spawnT = 0.7 + Math.random() * 0.6;
    }
    for (const pl of m.pellets) {
      pl.t += dt; pl.vy -= 9 * dt;
      pl.s.position.x += pl.vx * dt; pl.s.position.y += pl.vy * dt; pl.s.position.z += pl.vz * dt;
      if (pl.t >= pl.T) {
        pl.dead = true; duckScene.remove(pl.s);
        const hit = m.ducks.find(d => !d.fed && Math.hypot(d.x - pl.s.position.x, d.z - pl.s.position.z) < 0.85);
        if (hit) {
          hit.fed = true; const pts = hit.gold ? 3 : 1; m.score += pts; sfx('quack');
          burst(duckScene, '💖', new THREE.Vector3(hit.x, 1.2, hit.z), 3, 0.5);
          luna.mode = 'happy'; luna.modeT = 0.8;
        } else burst(duckScene, '💧', pl.s.position, 1, 0.4);
      }
    }
    m.pellets = m.pellets.filter(x => !x.dead);
    gameHud(`<span>⏱️ ${Math.max(0, Math.ceil(m.dur - m.time))}</span><span>🦆 ${m.score}</span>`);
    if (m.time >= m.dur) {
      const stars = m.score >= 16 ? 3 : m.score >= 8 ? 2 : m.score >= 1 ? 1 : 0, bones = Math.min(8, Math.floor(m.score / 4));
      finishMini(stars, bones, `<span>🦆 ${m.score}</span>`, pp => {
        pp.bones += bones; today(pp).play++; markGame3(pp, 'ducks');
        applyFx(pp, { felicidad: 8 + Math.min(16, m.score), energia: -4 });
        addEvent(pp, '🦆', `Le dieron de comer a los patos del lago (${m.score} puntos).`);
        if (m.score >= 10) addMilestone(pp, 'ducks10', '🦆', '¡Alimentaron a muchos patos en el lago!');
        outdoorRisk(pp);
      }, 'lago');
    }
  }
  for (const d of m.ducks) {
    d.ph += dt; d.x += d.vx * dt * (d.fed ? 2.2 : 1);
    d.m.position.set(d.x, Math.sin(d.ph * 3) * 0.04, d.z);
    if (d.fed) d.m.rotation.z = Math.sin(d.ph * 12) * 0.15;
    if (Math.abs(d.x) > 14) { duckScene.remove(d.m); d.gone = true; }
  }
  m.ducks = m.ducks.filter(d => !d.gone);
  if (dog.root.parent === duckScene) {
  luna.x += (kidS.x + 1.3 - luna.x) * (1 - Math.exp(-6 * dt));
  dog.root.scale.setScalar(DOG_SCALE[stageOf(p.day).size]);
  dog.root.position.set(luna.x, 0, luna.z); dog.root.rotation.y = Math.PI;
  if (luna.modeT > 0) luna.modeT -= dt;
  animateDog(dog, dt, { mode: p.asleep ? 'sleep' : luna.modeT > 0 ? 'happy' : 'sit', mood: 'feliz' });
  }
  kid.root.position.set(kidS.x, 0, kidS.z); kid.root.rotation.y = Math.PI;
  animateKid(kid, dt, false, 0);
  drawLeash3(duckScene, false);
  camTo(kidS.x * 0.35, 5.5, 8.5, kidS.x * 0.35, 0, -5, dt);
  void t;
}

// ---------- Casa: memoria con cartas 3D sobre la mesa ----------
const memScene = new THREE.Scene();
const MEM_ICONS3 = ['🐶', '🦴', '🎾', '🧸', '🦆', '🌳', '🍖', '🐿️', '🦋', '🏠'];
function startMemory3() {
  if (busy) return;
  speak('¡Encuentra las parejas! Toca dos cartas.');
  fade(buildMemory3);
}
function buildMemory3() {
  clearScene(memScene);
  buildRoom(memScene, { floor: '#e7b98a', back: '#ffd1e6', side: '#c8f1e4', rug: '#ffb3d1' });
  memScene.add(at(mesh(G.box(7.4, 0.3, 5.6), '#c98c55', { recv: true }), 0, 0.85, 0));
  for (const [sx, sz] of [[-3.3, -2.4], [3.3, -2.4], [-3.3, 2.4], [3.3, 2.4]]) memScene.add(at(mesh(G.box(0.3, 0.85, 0.3), '#a0642c'), sx, 0.42, sz));
  const p = current.pet, pairs = p.day < 8 ? 4 : 6, icons = shuffle3(MEM_ICONS3).slice(0, pairs);
  const list = shuffle3([...icons, ...icons]), rows = list.length / 4;
  const cards = list.map((ic, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const g = new THREE.Group(); g.position.set(-2.4 + col * 1.6, 1.06, (row - (rows - 1) / 2) * 1.85);
    const back = mesh(G.box(1.2, 0.06, 1.55), '#c48ad8'); g.add(back);
    const paw = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.75), new THREE.MeshBasicMaterial({ map: emojiTex('🐾'), transparent: true })); paw.rotation.x = -Math.PI / 2; paw.position.y = 0.035; g.add(paw);
    const faceBg = new THREE.Mesh(new THREE.PlaneGeometry(1.14, 1.49), new THREE.MeshBasicMaterial({ color: '#ffffff' })); faceBg.rotation.x = Math.PI / 2; faceBg.position.y = -0.035; g.add(faceBg);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.95), new THREE.MeshBasicMaterial({ map: emojiTex(ic), transparent: true })); face.rotation.x = Math.PI / 2; face.rotation.z = Math.PI; face.position.y = -0.04; g.add(face);
    g.traverse(o => { o.userData.card = i; });
    memScene.add(g);
    return { ic, g, faceBg, open: false, done: false, rot: 0 };
  });
  const cursor = mesh(G.box(1.42, 0.03, 1.77), '#ffd23f', { cast: false }); memScene.add(cursor);
  const lw = enterMini(memScene, 'memory');
  if (lw) { luna.x = 4.4; luna.z = 1.2; }
  kidS.x = -4.4; kidS.z = 1.2;
  const portrait = W.innerWidth < W.innerHeight;
  camera.position.set(0, portrait ? 12 : 8, portrait ? 6.5 : 5.4);
  mini = {
    kind: 'memory', cards, cursor, sel: 0, first: null, lock: false, moves: 0, pairs, found: 0, over: false,
    update: updateMemory3, quit: () => exitMini('casa'),
    tap: e => {
      ndc.set(e.clientX / W.innerWidth * 2 - 1, -(e.clientY / W.innerHeight) * 2 + 1);
      ray.setFromCamera(ndc, camera);
      const hit = ray.intersectObjects(cards.map(c => c.g), true)[0];
      if (hit && hit.object.userData.card != null) { mini.sel = hit.object.userData.card; memFlip3(mini.sel); }
    },
    key: dir => { const n = cards.length, s = mini.sel; mini.sel = dir === 'left' ? (s + n - 1) % n : dir === 'right' ? (s + 1) % n : dir === 'up' ? (s + n - 4) % n : (s + 4) % n; sfx('step'); },
  };
}
function memFlip3(i) {
  const m = mini;
  if (!m || m.kind !== 'memory' || m.over || m.lock) return;
  const c = m.cards[i];
  if (!c || c.open || c.done) return;
  c.open = true; sfx('pop');
  if (m.first === null) { m.first = i; return; }
  m.moves++;
  const a = m.cards[m.first];
  if (a.ic === c.ic) {
    a.done = c.done = true; m.first = null; m.found++;
    a.faceBg.material = c.faceBg.material = new THREE.MeshBasicMaterial({ color: '#c8f5e6' });
    sfx('coin'); dogSound('yip', dogSize(), 0.5); luna.mode = 'happy'; luna.modeT = 1;
    burst(memScene, '⭐', c.g.position.clone().setY(1.6), 2, 0.5);
    if (m.found === m.pairs) setTimeout(() => { if (mini === m) endMemory3(); }, 700);
  } else {
    m.lock = true;
    setTimeout(() => { if (mini !== m) return; a.open = c.open = false; m.first = null; m.lock = false; }, 900);
  }
}
function endMemory3() {
  const m = mini;
  const stars = m.moves <= m.pairs + 2 ? 3 : m.moves <= m.pairs * 2 ? 2 : 1;
  const bones = ((today(current.pet).games || {}).memory || 0) < 3 ? stars : 0;   // huesos solo en las 3 primeras del día
  finishMini(stars, bones, `<span>🃏 ${m.moves}</span>`, pp => {
    pp.bones += bones; today(pp).play++; markGame3(pp, 'memory');
    applyFx(pp, { felicidad: 8 + stars * 2 });
    addEvent(pp, '🃏', `Jugaron a la memoria: ${m.pairs} parejas en ${m.moves} turnos.`);
    if (stars === 3) addMilestone(pp, 'memory', '🃏', '¡Memoria perfecta!');
  }, 'casa');
}
function updateMemory3(dt) {
  const m = mini, p = current.pet, k = 1 - Math.exp(-10 * dt);
  if (!m.over && (input.a || input.jumpPress)) memFlip3(m.sel);
  if (!m.over) gameHud(`<span>🃏 ${'⭐'.repeat(m.found)}${'☆'.repeat(m.pairs - m.found)}</span>`);
  for (const c of m.cards) {
    const target = c.open || c.done ? Math.PI : 0;
    c.rot += (target - c.rot) * k;
    c.g.rotation.z = c.rot;
    c.g.position.y = 1.06 + Math.sin(c.rot) * 0.5;
  }
  const sc = m.cards[m.sel].g.position;
  m.cursor.position.set(sc.x, 1.02, sc.z); m.cursor.visible = !m.over;
  if (dog.root.parent === memScene) {
  dog.root.scale.setScalar(DOG_SCALE[stageOf(p.day).size]);
  dog.root.position.set(luna.x, 0, luna.z); dog.root.rotation.y = -Math.PI / 2;
  if (luna.modeT > 0) luna.modeT -= dt;
  animateDog(dog, dt, { mode: p.asleep ? 'sleep' : luna.modeT > 0 ? 'happy' : 'sit', mood: 'feliz' });
  }
  kid.root.position.set(kidS.x, 0, kidS.z); kid.root.rotation.y = Math.PI / 2;
  animateKid(kid, dt, false, 0);
  drawLeash3(memScene, false);
  const portrait = W.innerWidth < W.innerHeight;
  camTo(0, portrait ? 12 : 8, portrait ? 6.5 : 5.4, 0, 0.9, 0.3, dt);
}

// ====================== Bucle ======================
const timer = new THREE.Timer();
timer.connect(document);
let simAcc = 0, saveAcc = 0, barkT = 15, guideAcc = 0, isNight = false;
renderer.setAnimationLoop(() => {
  timer.update();
  const dt = Math.min(Math.max(timer.getDelta(), 0), 0.1);
  if (current) update(dt);
  updateParts(dt);
  renderer.render(scene, camera);
});

const OUTDOOR = new Set(['town', 'park', 'lake', 'forestmenu']);
function update(dt) {
  const p = current.pet;
  if (mini) {   // minijuego 3D en su propia escena
    mini.update(dt);
    Music.setMode('play');
    input.a = false; input.jumpPress = false;
    return;
  }
  if (where === 'forest') {   // nivel del bosque: física en sub-pasos para no atravesar el suelo
    let rest = dt;
    while (rest > 1e-4 && forest && !forest.over) { const h = Math.min(rest, 1 / 60); updateForest(h); rest -= h; }
    Music.setMode('play');
    input.a = false;
    return;
  }
  simAcc += dt; saveAcc += dt;
  if (simAcc > 5) {
    simAcc = 0;
    const d0 = p.day;
    simulate(p, now(p));
    if (p.day !== d0) spawnBones3D(p);
    refreshHUD(); setDayLight(p);
    if (where === 'home') { homeActions(); refreshMess(p); }
    if (where === 'room' && !train3) refreshRoom();
    guideCheck3();
  }
  if (saveAcc > 15) { saveAcc = 0; saveRoot(); }

  refreshDogExtras(dog, p);
  const st = stageOf(p.day);
  if (where === 'town' && !p.asleep && dog.root.parent !== town) {
    moveObj(dog.root, town);
    luna.x = kidS.x - Math.sin(kidS.ry) * 1.3; luna.z = kidS.z - Math.cos(kidS.ry) * 1.3; luna.ry = kidS.ry; luna.path = null;
    trail = [{ x: luna.x, z: luna.z }, { x: kidS.x, z: kidS.z }];
    burst(town, '💖', new THREE.Vector3(luna.x, 1.4, luna.z), 4); dogSound('happy', dogSize());
    speak('¡Luna despertó y vino corriendo contigo!');
  }
  dog.root.scale.setScalar(DOG_SCALE[st.size]);

  // movimiento: afuera camina el avatar y Luna lo sigue; adentro se mueve a Luna
  let mx = (input.right - input.left) + input.jx, mz = (input.down - input.up) + input.jz;
  const len = Math.hypot(mx, mz);
  if (len > 1) { mx /= len; mz /= len; }
  const outdoor = OUTDOOR.has(where);
  let moving = false, kidMoving = false, dirX = 0, dirZ = 0, lunaSp = 0;
  const speed = [2.4, 3.2, 4.2, 4.8, 5][st.size] * (p.stats.energia < 15 ? 0.6 : 1);
  const kidSpeed = Math.max(3.4, speed) * (p.stats.energia < 15 ? 0.75 : 1) * (p.sick && !p.sick.treated ? 0.8 : 1);
  if (luna.path) {
    const dx = luna.path.x - luna.x, dz = luna.path.z - luna.z, dist = Math.hypot(dx, dz);
    if (dist < 0.08) { luna.ry = luna.path.ry; const cb = luna.path.done; luna.path = null; if (cb) cb(); }
    else { dirX = dx / dist; dirZ = dz / dist; moving = true; lunaSp = speed; const s = Math.min(speed * dt, dist); luna.x += dirX * s; luna.z += dirZ * s; }
  }
  if (outdoor) {
    if (Math.hypot(mx, mz) > 0.15) autoWalk = null;            // tocar las flechas cancela el camino automático
    else if (autoWalk && where === 'town' && !busy) {
      const [px, pz] = autoWalk.pts[0], dx = px - kidS.x, dz = pz - kidS.z, d = Math.hypot(dx, dz);
      autoWalk.stuck = d < autoWalk.best - 0.05 ? 0 : autoWalk.stuck + dt; autoWalk.best = Math.min(autoWalk.best, d);
      if (d < 0.35) {
        autoWalk.pts.shift(); autoWalk.best = Infinity;
        if (!autoWalk.pts.length) { const pl = PL.find(x => x.id === autoWalk.place); autoWalk = null; if (pl) enterPlace3(pl); }
      } else if (autoWalk.stuck > 1.5) autoWalk = null;
      else { mx = dx / d; mz = dz / d; }
    }
    if (!busy && Math.hypot(mx, mz) > 0.15) {
      kidMoving = true;
      const nx = kidS.x + mx * kidSpeed * dt, nz = kidS.z + mz * kidSpeed * dt;
      if (!blocked(nx, kidS.z, 0.35)) kidS.x = nx;
      if (!blocked(kidS.x, nz, 0.35)) kidS.z = nz;
      let diff = Math.atan2(mx, mz) - kidS.ry; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      kidS.ry += diff * (1 - Math.exp(-14 * dt));
      walkAcc += kidSpeed * dt;
      if (walkAcc >= 1) {
        const e = today(p), n = Math.floor(walkAcc); walkAcc -= n;
        guideEvent3('walk');
        if (p.day >= 3) { e.walkTiles += n; if (e.walkTiles >= WALK_GOAL && !e.walk) { e.walk = 1; p.bones += 2; addEvent(p, '🗺️', '¡Exploración del día completada!'); pop('🗺️', '⭐'); speak('¡Paseo completado!'); refreshHUD(); } }
      }
    }
    if (!luna.path && !p.asleep && !hide3) {
      const f = followLuna3(dt, kidSpeed * 1.15, st.size);
      if (f) { moving = true; dirX = f.dx; dirZ = f.dz; lunaSp = f.sp; }
    }
  } else if (!luna.path && !p.asleep && !busy && Math.hypot(mx, mz) > 0.15) {
    moving = true; dirX = mx; dirZ = mz; lunaSp = speed;
    luna.x = clamp(luna.x + mx * speed * dt, -5.3, 5.3); luna.z = clamp(luna.z + mz * speed * dt, -2.4, 3.6);
  }
  if (moving) {
    let diff = Math.atan2(dirX, dirZ) - luna.ry; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    luna.ry += diff * (1 - Math.exp(-14 * dt));
  } else if (outdoor && !p.asleep && !hide3 && Math.hypot(kidS.x - luna.x, kidS.z - luna.z) > 0.5) {   // quieta: mira a su humano
    let diff = Math.atan2(kidS.x - luna.x, kidS.z - luna.z) - luna.ry; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    luna.ry += diff * (1 - Math.exp(-4 * dt));
  }
  if (luna.modeT > 0) { luna.modeT -= dt; if (luna.mode === 'spin') luna.ry += dt * 9; if (luna.modeT <= 0 && ['happy', 'sit', 'paw', 'lie', 'spin'].includes(luna.mode)) luna.mode = 'idle'; }
  if (where === 'room') { animateNPC(npcs[roomId], dt); updateTrain3(dt); }
  const mode = p.asleep ? 'sleep' : moving ? 'walk' : (luna.modeT > 0 || luna.mode === 'sleep') ? luna.mode : 'idle';
  if (!p.asleep && luna.mode === 'sleep' && !busy && luna.modeT <= 0) luna.mode = 'idle';
  animateDog(dog, dt, { mode: hide3 ? 'lie' : mode, speed: moving ? lunaSp : 0, eyesClosed: p.day < 2, sad: ['triste', 'enferma'].includes(moodOf(p)), mood: moodOf(p) });
  dog.root.position.set(luna.x, 0, luna.z);
  dog.root.rotation.y = luna.ry;
  // avatar y correa (la correa solo afuera, desde que Luna camina: semana 3)
  kid.root.position.set(kidS.x, 0, kidS.z); kid.root.rotation.y = kidS.ry;
  const leashOn = outdoor && p.day >= 3 && !p.asleep && !hide3 && !luna.path && Math.hypot(kidS.x - luna.x, kidS.z - luna.z) < 3.5;
  kid.leash = leashOn;
  animateKid(kid, dt, kidMoving, kidSpeed);
  drawLeash3(scene, leashOn);
  if (p.asleep && dog.root.parent === scene && Math.random() < dt * 0.8) burst(scene, '💤', new THREE.Vector3(luna.x, 1.2, luna.z), 1, 0.5);

  guideAcc += dt;
  if (guideAcc > 0.5) { guideAcc = 0; refreshGuide3(); idleNudge3(); }
  Music.setMode(where === 'home' || where === 'room' ? 'home' : isNight ? 'night' : 'day');
  if (OUTDOOR.has(where)) updateTown(dt, p, moving, kidMoving);
  else updateHomeCam(dt);
  input.a = false;
}

function updateTown(dt, p, moving, kidMoving) {
  const t = timer.getElapsed();
  updateTownLife(dt, p, t);
  // huesos
  for (let i = boneMeshes.length - 1; i >= 0; i--) {
    const b = boneMeshes[i];
    b.m.rotation.y += dt * 2; b.m.position.y = 0.45 + Math.sin(t * 3 + b.i) * 0.12;
    if (Math.hypot(b.m.position.x - kidS.x, b.m.position.z - kidS.z) < 0.9 || (!hide3 && dog.root.parent === town && Math.hypot(b.m.position.x - luna.x, b.m.position.z - luna.z) < 0.9)) {
      town.remove(b.m); boneMeshes.splice(i, 1);
      p.mapBones.taken.push(b.i); p.bones++;
      burst(town, '🦴', b.m.position, 3, 0.5); sfx('coin'); if (Math.random() < 0.5) dogSound('yip', dogSize(), 0.6); refreshHUD(); guideEvent3('bone');
      if (!boneMeshes.length) { addMilestone(p, 'allbones', '🔍', 'Luna encontró todos los huesos escondidos de un día.'); }
    }
  }
  // pelota del parque
  if (ball) {
    ball.cd -= dt;
    const dx = ball.m.position.x - luna.x, dz = ball.m.position.z - luna.z, dist = Math.hypot(dx, dz);
    const reach = 0.35 + 0.6 * dog.root.scale.x;
    if (dist < reach && moving) {
      ball.v.set(dx / dist, 0, dz / dist).multiplyScalar(7);
      sfx('pop');
      if (ball.cd <= 0) {
        ball.cd = 1; ball.pushes++;
        burst(town, '⭐', ball.m.position, 2, 0.4);
        if (ball.pushes % 6 === 0) { applyFx(p, { felicidad: 8, energia: -3 }); today(p).play++; addEvent(p, '⚽', 'Jugó con la pelota en el parque.'); pop('⚽', '+💖'); speak('¡Qué divertido!'); refreshHUD(); }
      }
    }
    const np = ball.m.position.clone().addScaledVector(ball.v, dt);
    if (blocked(np.x, np.z, 0.35)) { ball.v.multiplyScalar(-0.6); } else ball.m.position.copy(np);
    ball.v.multiplyScalar(Math.exp(-1.6 * dt));
    const sp = ball.v.length();
    ball.m.rotation.x += ball.v.z * dt / 0.35; ball.m.rotation.z -= ball.v.x * dt / 0.35;
    if (sp < 0.05) ball.v.set(0, 0, 0);
  }
  // ladridos espontáneos: contenta ladra de vez en cuando; triste, gimotea
  barkT -= dt;
  if (barkT <= 0) { barkT = 22 + Math.random() * 25; if (!p.asleep) { const m = moodOf(p); const sad = m === 'triste' || m === 'enferma'; dogSound(sad ? 'sad' : 'bark', dogSize(), 0.45); if (!sad) { luna.mode = 'happy'; luna.modeT = 0.8; } } }
  // patos, nubes, bandera
  for (const dk of ducks) { dk.userData.a += dt * 0.3; const a = dk.userData.a; dk.position.set(dk.userData.cx + Math.cos(a) * dk.userData.r, 0.2 + Math.sin(t * 3 + a) * 0.04, dk.userData.cz + Math.sin(a) * dk.userData.r); dk.rotation.y = -a; }
  for (const c of clouds) { c.position.x += c.userData.v * dt; if (c.position.x > 50) c.position.x = -50; }
  // al alejarse del parque / lago / bosque se cierra su panel
  if (where === 'park' || where === 'lake' || where === 'forestmenu') {
    const id = where === 'park' ? 'parque' : where === 'lake' ? 'lago' : 'bosque', tr0 = triggers.find(x => x.pl.id === id);
    if (tr0 && Math.hypot(tr0.x - kidS.x, tr0.z - kidS.z) > 7 && !busy) { if (where === 'park') closePark(); else where = 'town'; $('#actions').hidden = true; }
  }
  // lugares cercanos y globos
  nearT = null;
  const needs = needsOf(p);
  { const n = needs.find(q => q.level !== 'info'), show = n && !p.asleep && !hide3 && dog.root.parent === town && Math.floor(t / 2) % 3 !== 0;
    thought3.visible = !!show;
    if (show) {
      if (thought3.userData.icon !== n.icon) { thought3.userData.icon = n.icon; thought3.material.map = emojiTex(n.icon, true); thought3.material.needsUpdate = true; }
      thought3.position.set(luna.x + 0.5, 1.9 * dog.root.scale.x + 0.6, luna.z);
    } }
  for (const tr of triggers) {
    const d = Math.hypot(tr.x - kidS.x, tr.z - kidS.z);
    if (d < 2.2 && !hide3) nearT = tr;
    let emoji = '';
    if (p.day < (tr.pl.minDay || 1)) emoji = d < 9 ? '🔒' : '';
    else { const n = needs.find(x => x.place === tr.pl.id && x.level !== 'info'); emoji = n ? n.icon : ''; }
    if (emoji !== tr.emoji) { tr.emoji = emoji; if (emoji) tr.mk.material.map = emojiTex(emoji, true); tr.mk.material.needsUpdate = true; }
    tr.mk.visible = !!emoji;
    tr.mk.position.y = tr.baseY + Math.sin(t * 3) * 0.15;
  }
  if (input.a && where === 'town') {
    if (p.asleep && lunaNear3()) { act('wake'); }
    else if (nearT) enterPlace3(nearT.pl);
  }
  if (where === 'town') updatePrompt();
  updateGuideArrows(t);
  fadeTrees();
  // cámara de seguimiento (suavizado independiente de FPS)
  const zoom = W.innerWidth < W.innerHeight ? 1.35 : 1;
  const want = new THREE.Vector3(kidS.x, 9.5 * zoom, kidS.z + 11 * zoom);
  camera.position.lerp(want, 1 - Math.exp(-5 * dt));
  camera.lookAt(camera.position.x, 0.6, camera.position.z - 11 * zoom);
  townL.sun.position.set(kidS.x + 8, 16, kidS.z + 6);
  townL.sun.target.position.set(kidS.x, 0, kidS.z);
}
function updateHomeCam(dt) {
  const zoom = W.innerWidth < W.innerHeight ? 1.5 : 1;
  camera.position.lerp(new THREE.Vector3(luna.x * 0.3, 6.5 * zoom, 8.5 * zoom), 1 - Math.exp(-4 * dt));
  camera.lookAt(luna.x * 0.3, 0.6, -0.4);
}

// ====================== Entrada ======================
const KEYS = { ArrowUp: 'up', KeyW: 'up', ArrowDown: 'down', KeyS: 'down', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right' };
W.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (!$('#card3').hidden && ['Space', 'Enter', 'Escape'].includes(e.code)) { e.preventDefault(); closeCard3(); return; }
  if (mini && !mini.over && ['Escape', 'KeyX', 'Backspace'].includes(e.code)) { e.preventDefault(); mini.quit(); return; }
  if (hide3 && ['Escape', 'KeyX', 'Backspace'].includes(e.code)) { e.preventDefault(); endHide3(false); return; }
  if (mini && mini.key && KEYS[e.code]) { e.preventDefault(); if (!e.repeat && !mini.over) mini.key(KEYS[e.code]); return; }
  if (train3 && KEYS[e.code]) { e.preventDefault(); if (!e.repeat) trainInput3(KEYS[e.code]); return; }
  if (KEYS[e.code]) { input[KEYS[e.code]] = 1; e.preventDefault(); if (KEYS[e.code] === 'up' && !e.repeat) input.jumpPress = true; }
  if (['Space', 'Enter', 'KeyE', 'KeyZ'].includes(e.code)) { e.preventDefault(); if (!e.repeat) { input.a = true; input.jumpPress = true; } input.aHeld = true; }
  if (['Escape', 'KeyX', 'Backspace'].includes(e.code) && where === 'home') act('exit');
  if (['Escape', 'KeyX', 'Backspace'].includes(e.code) && where === 'park') closePark();
  if (['Escape', 'KeyX', 'Backspace'].includes(e.code) && where === 'room' && !train3) leaveToTown(roomId);
  if (['Escape', 'KeyX', 'Backspace'].includes(e.code) && (where === 'lake' || where === 'forestmenu')) { where = 'town'; $('#actions').hidden = true; }
});
W.addEventListener('keyup', e => { if (KEYS[e.code]) input[KEYS[e.code]] = 0; if (['Space', 'Enter', 'KeyE', 'KeyZ'].includes(e.code)) input.aHeld = false; });
W.addEventListener('blur', () => { input.up = input.down = input.left = input.right = 0; });

// Joystick táctil
const joy = $('#joy'), knob = $('#knob');
let joyId = null, joyO = null;
joy.addEventListener('pointerdown', e => { joyId = e.pointerId; joyO = { x: e.clientX, y: e.clientY }; joy.setPointerCapture(e.pointerId); });
joy.addEventListener('pointermove', e => {
  if (e.pointerId !== joyId) return;
  let dx = e.clientX - joyO.x, dy = e.clientY - joyO.y;
  const l = Math.hypot(dx, dy), max = 50;
  if (l > max) { dx *= max / l; dy *= max / l; }
  knob.style.transform = `translate(${dx}px, ${dy}px)`;
  input.jx = dx / max; input.jz = dy / max;
});
const joyEnd = () => { joyId = null; input.jx = input.jz = 0; knob.style.transform = ''; };
joy.addEventListener('pointerup', joyEnd); joy.addEventListener('pointercancel', joyEnd);
$('#abtn').addEventListener('pointerdown', e => { e.preventDefault(); input.a = true; input.jumpPress = true; input.aHeld = true; });
$('#abtn').addEventListener('pointerup', () => { input.aHeld = false; });
$('#abtn').addEventListener('pointercancel', () => { input.aHeld = false; });
document.querySelectorAll('[data-arrow]').forEach(b => b.addEventListener('pointerdown', e => { e.preventDefault(); trainInput3(b.dataset.arrow); }));

// Tocar la pantalla en los minijuegos (saltar, lanzar, voltear cartas)
canvas.addEventListener('pointerdown', e => { pointerHeld = true; if (mini && mini.tap && !mini.over && $('#card3').hidden) mini.tap(e); });
W.addEventListener('pointerup', () => { pointerHeld = false; });
W.addEventListener('pointercancel', () => { pointerHeld = false; });
// Tocar a Luna = mimos
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
canvas.addEventListener('click', e => {
  if (!dog || mini || hide3) return;
  ndc.set(e.clientX / W.innerWidth * 2 - 1, -(e.clientY / W.innerHeight) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  if (ray.intersectObject(dog.root, true).length) {
    if (where === 'home') act('pet');
    else if (where === 'park') { luna.mode = 'happy'; luna.modeT = 1.2; burst(scene, '💖', new THREE.Vector3(luna.x, 1.4, luna.z), 5); dogSound('happy', dogSize()); }
    else { luna.mode = 'happy'; luna.modeT = 1.2; burst(scene, '💖', new THREE.Vector3(luna.x, 1.4, luna.z), 5); dogSound('bark', dogSize()); }
  }
});

document.addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.id === 'mute') { muted = !muted; try { localStorage.setItem('luna.muted', muted ? '1' : '0'); } catch (er) { /* */ } if (muted && 'speechSynthesis' in W) speechSynthesis.cancel(); Music.refresh(); refreshHUD(); return; }
  if (b.id === 'music') { Music.start(); Music.toggle(); refreshHUD(); return; }
  if (b.id === 'guide') { sayGuide3(); guideGo3(); return; }
  if (b.id === 'guideSkip') { skipGoal3(); return; }
  if (b.dataset.act === 'help') { placeHelp3(); return; }
  if (b.id === 'diary3') { openDiary3(); return; }
  if (b.dataset.card) { closeCard3(); return; }
  if (b.getAttribute('aria-disabled') === 'true') { pop(b.querySelector('.badge')?.textContent || '✋'); speak(b.dataset.say); return; }
  const a = b.dataset.act;
  if (a === 'enter') { input.a = true; return; }
  if (a === 'quitforest') { if (forest) { forest.over = true; $('#forestHud').hidden = true; leaveForest(); } return; }
  if (a === 'quitgame') { if (mini && mini.quit) mini.quit(); else if (hide3) endHide3(false); return; }
  if (b.dataset.avatar) { document.querySelectorAll('[data-avatar]').forEach(x => x.classList.toggle('sel', x === b)); return; }
  if (a && ['stroll', 'kick', 'bench', 'closepark', 'agility', 'hide'].includes(a)) parkAct(a);
  else if (a && where === 'room') roomAct(a);
  else if (a && (where === 'lake' || ['ducks', 'drink', 'splash', 'closelake', 'duckfeed'].includes(a))) lakeAct(a);
  else if (a && (a.startsWith('level:') || a === 'closeforest')) forestAct(a);
  else if (a) act(a);
  if (b.dataset.pick) startGame(W.root.profiles.find(x => x.id === b.dataset.pick));
  if (b.dataset.coat) { document.querySelectorAll('[data-coat]').forEach(x => x.classList.toggle('sel', x === b)); }
});
$('#new-form').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#new-name').value.trim().slice(0, 16);
  if (!name) { $('#new-name').focus(); speak('Escribe tu nombre'); return; }
  const coat = document.querySelector('[data-coat].sel')?.dataset.coat || 'dorado';
  const avatar = document.querySelector('[data-avatar].sel')?.dataset.avatar || '🧒';
  const pr = { id: uid(), name, avatar, createdAt: Date.now(), pet: newPet(coat) };
  W.root.profiles.push(pr); saveRoot(); startGame(pr);
});
// la música arranca con el primer toque o tecla (política de autoplay)
W.addEventListener('pointerdown', () => Music.start());
W.addEventListener('keydown', () => Music.start());
W.addEventListener('pagehide', () => { if (current) saveRoot(); });
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && current) saveRoot(); });

// ====================== Inicio ======================
buildTown();
buildHome();
buildVet(); buildShop(); buildSchool(); buildLakeExtras();
camera.position.set(-16, 10, 2); camera.lookAt(-16, 0.6, -9);
function showPicker() {
  const list = W.root.profiles;
  $('#pick-list').innerHTML = list.map(pr => `<button class="slot" data-pick="${pr.id}">${esc3(pr.avatar)} ${esc3(pr.name)} <span>${STAGE_ICON3[stageOf(dayAt(pr.pet, now(pr.pet))).id]} ▶</span></button>`).join('');
  $('#avatars3').innerHTML = AVATARS3.map((a, i) => `<button type="button" class="avatar ${i === 0 ? 'sel' : ''}" data-avatar="${a}" aria-label="Tu cara ${i + 1}">${a}</button>`).join('');
  $('#coats').innerHTML = Object.entries(COATS).map(([k, c], i) => `<button type="button" class="coat ${i === 0 ? 'sel' : ''}" data-coat="${k}" style="background:${c.fur}" aria-label="${c.name}"></button>`).join('');
  $('#voice-slot').innerHTML = voiceSettingsHTML();
  $('#picker').hidden = false;
  $('#hud').hidden = true;
  if (!dog) { dog = buildDog({ coat: 'dorado', day: 10, acc: { worn: 'lazo' } }); town.add(dog.root); }
}
const resume = W.root.activeId && W.root.profiles.find(x => x.id === W.root.activeId);
if (resume) startGame(resume); else showPicker();
// vista previa mientras está el selector
(function idle() {
  if (current) return;
  dog.root.position.set(-16, 0, -9);
  animateDog(dog, 1 / 60, { mode: 'happy' });
  camera.position.set(-16, 3, -3.5); camera.lookAt(-16, 1, -9);
  requestAnimationFrame(idle);
})();
Object.assign(W, { renderer, town, home, luna, kidS, act, startGame, input, dbg3: { buildAgility3, buildDucks3, buildMemory3, startHide3, memFlip3, closeCard3, digTreasure3, get mini() { return mini; }, get hide3() { return hide3; }, get treasure3() { return treasure3; }, get where() { return where; }, guideGo3, idleNudge3, treeList, get autoWalk() { return autoWalk; }, get goal3() { return goal3; }, setIdle: v => { lastInputT = v; } }, step3d: (dt, draw) => { update(dt); updateParts(dt); if (draw) renderer.render(scene, camera); } });   // depuración / pruebas
