'use strict';
/* Mapa del mundo: vista cenital, Luna camina libremente y entra a los lugares. */

const MAP_W = 84, MAP_H = 50;   // ampliado: calle de tiendas al este, avenida sur, parque para perros y Valle Aventura
const T = { GRASS: 0, PATH: 1, WATER: 2, TREE: 3, PINE: 4, BUSH: 5, FLOWER: 6, ROCK: 7, PLANK: 8, BUILD: 9, FENCE: 10, HEDGE: 11, DECO: 12 };
const SOLID = new Set([T.WATER, T.TREE, T.PINE, T.BUSH, T.ROCK, T.BUILD, T.FENCE, T.HEDGE, T.DECO]);
// Zonas nuevas (en casillas)
const DOGPARK2 = { x0: 22, x1: 36, y0: 33, y1: 44, gate: 28 };
const PEN2 = { x0: 14, x1: 20, y0: 32, y1: 35 };
const VALLEY2 = { x0: 54, y0: 12, gateY: 30, riverY: 38, bridgeX: 67, tent: [57, 26, 3, 2], ranger: [58, 29], tower: [77, 25, 2, 3], chest: [57, 46], cave: [76, 47, 5, 2] };

// Lugares: rect = [x, y, w, h] en casillas (sólido); trigger = casilla donde aparece "Entrar"
const PLACES = [
  { id: 'casa', name: 'Casa de Luna', rect: [5, 13, 6, 4], trigger: [7, 17], minDay: 1 },
  { id: 'escuela', name: 'Escuela canina', rect: [18, 5, 6, 4], trigger: [20, 9], minDay: 8 },
  { id: 'tienda', name: 'Tienda', rect: [26, 6, 5, 3], trigger: [28, 9], minDay: 1 },
  { id: 'vet', name: 'Veterinaria', rect: [34, 5, 6, 4], trigger: [36, 9], minDay: 1 },
  { id: 'bosque', name: 'Bosque aventura', rect: [3, 6, 4, 3], trigger: [5, 9], minDay: 3 },
  { id: 'parque', name: 'Parque', rect: [20, 14, 4, 2], trigger: [21, 13], minDay: 3 },
  { id: 'lago', name: 'Lago', rect: null, trigger: [34, 19], minDay: 1 },
  { id: 'peluqueria', rect: [46, 5, 6, 4], trigger: [48, 9], minDay: 3, spot: true },
  { id: 'heladeria', rect: [54, 6, 5, 3], trigger: [56, 9], minDay: 1, spot: true },
  { id: 'panaderia', rect: [61, 5, 6, 4], trigger: [63, 9], minDay: 1, spot: true },
  { id: 'biblioteca', rect: [69, 5, 6, 4], trigger: [71, 9], minDay: 1, spot: true },
  { id: 'refugio', rect: [3, 25, 6, 4], trigger: [5, 29], minDay: 1, spot: true },
  { id: 'perros', rect: null, trigger: [28, 34], minDay: 3, spot: true },
  { id: 'aventura', rect: null, trigger: [58, 30], minDay: 1, spot: true },
];
// Lugares nuevos: nombre y casillas a partir de los datos compartidos (js/extras.js)
for (const pl of PLACES) if (pl.spot) pl.name = SPOT_UI[pl.id].name;
const SPAWN = { x: 7 * TILE + 8, y: 18 * TILE + 10 };

const world = {
  tiles: null, bg: null, cam: { x: 0, y: 0 }, t: 0,
  // el avatar del jugador camina; Luna lo sigue con la correa por el mismo camino (trail)
  kid: { x: SPAWN.x, y: SPAWN.y, face: 1, dir: 'down', moving: false, anim: 0, walkAcc: 0 },
  luna: { x: SPAWN.x - 14, y: SPAWN.y, face: 1, moving: false, anim: 0 },
  trail: [], bones: [], butterflies: [], near: null, floaters: [],
  squirrel: null, sqT: 25, treasure: null, hide: null, heat: null, bflyCd: 0, digFx: null,
};

const MAP_ROADS2 = [];   // caminos para el mapa del pueblo
function genMap() {
  const m = Array.from({ length: MAP_H }, () => Array(MAP_W).fill(T.GRASS));
  const set = (x, y, v) => { if (x >= 0 && y >= 0 && x < MAP_W && y < MAP_H) m[y][x] = v; };
  const reserved = Array.from({ length: MAP_H }, () => Array(MAP_W).fill(false));
  const reserve = (x0, y0, x1, y1) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) if (reserved[y] && x >= 0 && x < MAP_W) reserved[y][x] = true; };

  // Lago (elipse) con muelle
  for (let y = 0; y < MAP_H; y++) for (let x = 0; x < MAP_W; x++) {
    if (((x - 39.5) / 6.5) ** 2 + ((y - 19) / 4.6) ** 2 <= 1) set(x, y, T.WATER);
  }
  set(33, 19, T.PLANK); set(34, 19, T.PLANK); set(35, 19, T.PLANK);
  reserve(32, 14, 47, 25);
  // Fuente del parque
  for (let y = 20; y <= 21; y++) for (let x = 21; x <= 22; x++) set(x, y, T.WATER);

  // Caminos
  const h = (y, x0, x1) => { MAP_ROADS2.push([x0 + 0.5, y + 0.5, x1 + 0.5, y + 0.5]); for (let x = x0; x <= x1; x++) { set(x, y, T.PATH); reserve(x - 1, y - 1, x + 1, y + 1); } };
  const v = (x, y0, y1) => { MAP_ROADS2.push([x + 0.5, y0 + 0.5, x + 0.5, y1 + 0.5]); for (let y = y0; y <= y1; y++) { set(x, y, T.PATH); reserve(x - 1, y - 1, x + 1, y + 1); } };
  h(10, 4, 44);
  v(5, 9, 10); v(20, 9, 10); v(28, 9, 10); v(36, 9, 10);
  v(7, 17, 18); h(18, 7, 12); v(12, 11, 18);
  v(21, 11, 13);
  v(31, 11, 19); h(19, 31, 32);
  // Senderos del parque
  h(17, 16, 27); v(16, 17, 26); v(27, 17, 26); h(26, 16, 27);
  // Ampliación: calle de tiendas, avenida sur y conexiones
  h(10, 44, 80); v(48, 9, 10); v(56, 9, 10); v(63, 9, 10); v(71, 9, 10);
  h(30, 4, 54); v(12, 18, 30); v(31, 19, 30); v(50, 10, 30); v(5, 29, 30); v(DOGPARK2.gate, 30, 34);
  // Valle Aventura: senderos, río y puente
  const V = VALLEY2;
  h(30, 55, 77); v(67, 30, 46); h(46, 57, 79);
  for (let x = V.x0 + 1; x < MAP_W; x++) for (let y = V.riverY; y <= V.riverY + 1; y++) set(x, y, x === V.bridgeX ? T.PLANK : T.WATER);
  reserve(V.x0, V.riverY - 1, MAP_W - 1, V.riverY + 2);
  // seto del valle (con hueco en la puerta)
  for (let y = V.y0; y < MAP_H; y++) if (y !== V.gateY) set(V.x0, y, T.HEDGE);
  for (let x = V.x0; x < MAP_W; x++) set(x, V.y0, T.HEDGE);
  reserve(V.x0 - 1, V.y0 - 1, V.x0 + 1, MAP_H - 1); reserve(V.x0, V.y0 - 1, MAP_W - 1, V.y0 + 1);
  // estructuras sólidas del valle
  const solidRect = ([x, y, w, hh], t = T.DECO) => { for (let yy = y; yy < y + hh; yy++) for (let xx = x; xx < x + w; xx++) set(xx, yy, t); reserve(x - 1, y - 1, x + w, y + hh + 1); };
  solidRect(V.tent); solidRect(V.tower); solidRect(V.cave); solidRect([V.chest[0], V.chest[1], 1, 1]);
  set(60, 28, T.DECO); reserve(56, 25, 61, 31);   // fogata
  for (const [x, y] of [[59, 48], [61, 47], [63, 48], [55, 47]]) solidRect([x, y, 1, 1]);
  // parque para perros: cerca con puerta
  const D = DOGPARK2;
  for (let x = D.x0; x <= D.x1; x++) { if (x !== D.gate && x !== D.gate + 1) set(x, D.y0, T.FENCE); set(x, D.y1, T.FENCE); }
  for (let y = D.y0; y <= D.y1; y++) { set(D.x0, y, T.FENCE); set(D.x1, y, T.FENCE); }
  set(D.gate + 1, D.y0, T.PATH);
  reserve(D.x0 - 1, D.y0 - 1, D.x1 + 1, D.y1 + 1);
  solidRect([24, 41, 3, 1]); solidRect([34, 35, 1, 1]);   // túnel y bebedero
  // corral del refugio
  for (let x = PEN2.x0; x <= PEN2.x1; x++) { set(x, PEN2.y0, T.FENCE); set(x, PEN2.y1, T.FENCE); }
  for (let y = PEN2.y0; y <= PEN2.y1; y++) { set(PEN2.x0, y, T.FENCE); set(PEN2.x1, y, T.FENCE); }
  reserve(PEN2.x0 - 1, PEN2.y0 - 1, PEN2.x1 + 1, PEN2.y1 + 1);

  // Edificios
  for (const p of PLACES) {
    if (!p.rect) continue;
    const [x, y, w, hh] = p.rect;
    for (let yy = y; yy < y + hh; yy++) for (let xx = x; xx < x + w; xx++) set(xx, yy, T.BUILD);
    reserve(x - 1, y - 1, x + w, y + hh + 1);
  }
  // el arco del parque deja pasar por el centro
  set(21, 14, T.PATH); set(22, 14, T.PATH); set(21, 15, T.PATH); set(22, 15, T.PATH);
  for (const p of PLACES) reserve(p.trigger[0] - 1, p.trigger[1] - 1, p.trigger[0] + 1, p.trigger[1] + 1);
  reserve(5, 17, 9, 20);

  // Bosque denso arriba a la izquierda + borde de árboles
  const rnd = seeded(20251116);
  for (let y = 0; y < MAP_H; y++) for (let x = 0; x < MAP_W; x++) {
    if (m[y][x] !== T.GRASS) continue;
    const border = x === 0 || y === 0 || x === MAP_W - 1 || y === MAP_H - 1;
    const forest = x <= 14 && y <= 8;
    if (border) { m[y][x] = forest || hash2(x, y) < .5 ? T.PINE : T.TREE; continue; }
    if (reserved[y][x]) continue;
    const r = rnd();
    if (forest) { if (r < 0.7) m[y][x] = T.PINE; else if (r < 0.8) m[y][x] = T.FLOWER; continue; }
    const park = x >= 16 && x <= 27 && y >= 17 && y <= 26;
    if (park) { if (r < 0.1) m[y][x] = T.TREE; else if (r < 0.3) m[y][x] = T.FLOWER; continue; }
    if (x > VALLEY2.x0 && y > VALLEY2.y0) { if (r < 0.16) m[y][x] = T.PINE; else if (r < 0.22) m[y][x] = T.TREE; else if (r < 0.3) m[y][x] = T.FLOWER; else if (r < 0.32) m[y][x] = T.ROCK; continue; }
    if (r < 0.07) m[y][x] = T.TREE;
    else if (r < 0.09) m[y][x] = T.BUSH;
    else if (r < 0.1) m[y][x] = T.ROCK;
    else if (r < 0.16) m[y][x] = T.FLOWER;
  }
  return m;
}

const tileAt = (tx, ty) => (tx < 0 || ty < 0 || tx >= MAP_W || ty >= MAP_H ? T.TREE : world.tiles[ty][tx]);
const solidAt = (px, py) => SOLID.has(tileAt(Math.floor(px / TILE), Math.floor(py / TILE)));

function renderMapBg() {
  const c = mkCanvas(MAP_W * TILE, MAP_H * TILE), g = c.getContext('2d');
  const isP = (x, y) => tileAt(x, y) === T.PATH || tileAt(x, y) === T.PLANK;
  const isW = (x, y) => tileAt(x, y) === T.WATER || tileAt(x, y) === T.PLANK;
  for (let y = 0; y < MAP_H; y++) for (let x = 0; x < MAP_W; x++) {
    const t = world.tiles[y][x], X = x * TILE, Y = y * TILE;
    if (t === T.WATER) { drawWater(g, X, Y, x, y, isW); continue; }
    if (t === T.PATH) { drawPath(g, X, Y, x, y, isP); continue; }
    if (t === T.PLANK) { g.fillStyle = PAL.water; g.fillRect(X, Y, 16, 16); drawPlanks(g, X, Y + 3); continue; }
    drawGrass(g, X, Y, x, y);
    if (t === T.FLOWER) drawFlowers(g, X, Y, x, y);
    if (t === T.FENCE && x > DOGPARK2.x0 && x < DOGPARK2.x1 && y > DOGPARK2.y0 && y < DOGPARK2.y1) { g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(X, Y, 16, 16); }
  }
  // objetos altos después del suelo
  for (let y = 0; y < MAP_H; y++) for (let x = 0; x < MAP_W; x++) {
    const t = world.tiles[y][x], X = x * TILE, Y = y * TILE;
    if (t === T.TREE) drawTree(g, X, Y, false);
    if (t === T.PINE) drawTree(g, X, Y, true);
    if (t === T.BUSH) drawBush(g, X, Y);
    if (t === T.ROCK) drawRock(g, X, Y);
    if (t === T.HEDGE) drawBush(g, X, Y);
    if (t === T.FENCE) { const F = (a, b) => tileAt(a, b) === T.FENCE; drawFence(g, X, Y, F(x - 1, y), F(x + 1, y), F(x, y - 1), F(x, y + 1)); }
  }
  // Parque: fuente y bancas
  drawFountain(g, 21 * TILE - 4, 20 * TILE - 4, 40, 40);
  drawBench(g, 18 * TILE, 23 * TILE); drawBench(g, 24 * TILE, 23 * TILE);
  // Edificios
  const R = id => PLACES.find(p => p.id === id).rect.map(v => v * TILE);
  let [x, y, w, h] = R('casa');
  house(g, x, y - 16, w, h + 16, { wall: '#f8e8c8', wallD: '#d8c098', roof: '#d84838', roofD: '#a82c24', door: '#8c5430', label: 'CASA', signBg: '#a82c24' });
  g.fillStyle = OUTLINE; g.fillRect(x + w - 22, y - 22, 10, 12); g.fillStyle = '#b05040'; g.fillRect(x + w - 21, y - 21, 8, 10);
  [x, y, w, h] = R('escuela');
  house(g, x, y - 16, w, h + 16, { wall: '#f8e078', wallD: '#d8b848', roof: '#4868d8', roofD: '#3048a8', door: '#4868d8', label: 'ESCUELA', signBg: '#3048a8' });
  g.fillStyle = OUTLINE; g.fillRect(x + w - 6, y - 34, 2, 22); g.fillStyle = '#f04848'; g.fillRect(x + w - 4, y - 34, 10, 6);
  [x, y, w, h] = R('vet');
  house(g, x, y - 16, w, h + 16, { wall: '#ffffff', wallD: '#d8dce8', roof: '#38a8a0', roofD: '#24807c', door: '#38a8a0', label: 'VETERINARIA', signBg: '#24807c' });
  drawCross(g, x + w - 14, y + 30);
  [x, y, w, h] = R('tienda');
  drawStall(g, x, y - 8, w, h + 8);
  [x, y, w, h] = R('bosque');
  drawCave(g, x - 4, y - 8, w + 8, h + 8);
  [x, y, w, h] = R('parque');
  drawArch(g, x, y - 6, w, h + 6, 'PARQUE');
  sign(g, 34 * TILE + 8, 17 * TILE + 2, 'LAGO', '#2c70c8');
  drawExpansionBg(g);   // js/town.js
  return c;
}

function spawnDailyBones(p) {
  if (p.mapBones.day !== p.day) p.mapBones = { day: p.day, taken: [] };
  const rnd = seeded(p.bornAt % 100000 + p.day * 7919);
  const out = [];
  let guard = 0;
  while (out.length < 8 && guard++ < 2000) {
    const tx = 1 + Math.floor(rnd() * (MAP_W - 2)), ty = 1 + Math.floor(rnd() * (MAP_H - 2));
    const t = tileAt(tx, ty);
    if (t !== T.GRASS && t !== T.FLOWER && t !== T.PATH) continue;
    if (PLACES.some(pl => Math.abs(pl.trigger[0] - tx) < 2 && Math.abs(pl.trigger[1] - ty) < 2)) continue;
    if (tx >= PEN2.x0 && tx <= PEN2.x1 && ty >= PEN2.y0 && ty <= PEN2.y1) continue;   // dentro del corral no se alcanza
    if (out.some(b => b.tx === tx && b.ty === ty)) continue;
    out.push({ tx, ty, i: out.length });
  }
  world.bones = out.filter(b => !p.mapBones.taken.includes(b.i));
  // Tesoro del día (desde la semana 2): un lugar fijo por día, se busca con «frío / caliente»
  world.treasure = null;
  if (p.day >= 2 && !(p.treasure && p.treasure.day === p.day)) {
    const r2 = seeded(p.bornAt % 99991 + p.day * 104729);
    for (let i = 0; i < 600; i++) {
      const tx = 1 + Math.floor(r2() * (MAP_W - 2)), ty = 1 + Math.floor(r2() * (MAP_H - 2));
      const t = tileAt(tx, ty);
      if (t !== T.GRASS && t !== T.FLOWER) continue;
      if (Math.hypot(tx - 7, ty - 18) < 8 || out.some(b => b.tx === tx && b.ty === ty)) continue;
      if (!findPath(7, 18, tx, ty)) continue;
      world.treasure = { tx, ty };
      break;
    }
  }
}

function initWorld() {
  if (!world.tiles) { world.tiles = genMap(); world.bg = renderMapBg(); }
  const rnd = seeded(77);
  world.butterflies = Array.from({ length: 7 }, () => ({ x: rnd() * MAP_W * TILE, y: rnd() * MAP_H * TILE, ph: rnd() * 6, c: ['#ffffff', '#f8e040', '#f090c0'][Math.floor(rnd() * 3)] }));
}

function enterWorld(p) {
  const K = world.kid, L = world.luna;
  if (p.pos && !solidAt(p.pos.x, p.pos.y)) { K.x = p.pos.x; K.y = p.pos.y; } else { K.x = SPAWN.x; K.y = SPAWN.y; }
  L.x = K.x - 14; L.y = K.y; L.face = 1;
  world.trail = [{ x: L.x, y: L.y }, { x: K.x, y: K.y }];
  world.hide = null; world.squirrel = null; world.sqT = 20; world.route = null;
  spawnDailyBones(p);
  snapCamera();
}

// Luna camina detrás del avatar, siguiendo sus pasos a la distancia de la correa
function followLuna(p, dt) {
  const K = world.kid, L = world.luna, tr = world.trail;
  const last = tr[tr.length - 1];
  if (!last || Math.hypot(K.x - last.x, K.y - last.y) >= 1) tr.push({ x: K.x, y: K.y });
  if (tr.length > 160) tr.shift();
  let need = 12 + stageOf(p.day).size * 1.5, px = K.x, py = K.y, tx = px, ty = py;
  for (let i = tr.length - 1; i >= 0; i--) {
    const q = tr[i], s = Math.hypot(px - q.x, py - q.y);
    if (s >= need) { const f = need / s; tx = px + (q.x - px) * f; ty = py + (q.y - py) * f; need = 0; break; }
    need -= s; px = q.x; py = q.y; tx = px; ty = py;
  }
  const ox = L.x, oy = L.y, k = 1 - Math.exp(-12 * dt);
  L.x += (tx - L.x) * k; L.y += (ty - L.y) * k;
  const mv = Math.hypot(L.x - ox, L.y - oy);
  L.moving = mv > 0.12; L.anim += mv;
  if (Math.abs(L.x - ox) > 0.08) L.face = Math.sign(L.x - ox);
  else if (!L.moving && Math.abs(K.x - L.x) > 4) L.face = Math.sign(K.x - L.x);
}

// ---------- Ardillas: aparecen de vez en cuando; acércate con Luna para que las persiga ----------
function updateSquirrel(p, dt) {
  const K = world.kid, L = world.luna;
  let s = world.squirrel;
  if (!s) {
    if (p.day < 3 || p.asleep || world.hide || state.mode !== 'world') return;
    world.sqT -= dt;
    if (world.sqT > 0) return;
    world.sqT = rand(35, 70);
    const { w, h } = viewSize();
    for (let i = 0; i < 60; i++) {
      const x = world.cam.x + rand(20, w - 20), y = world.cam.y + rand(30, h - 20);
      const tx = Math.floor(x / TILE), ty = Math.floor(y / TILE);
      if (![T.GRASS, T.FLOWER, T.PATH].includes(tileAt(tx, ty)) || Math.hypot(x - K.x, y - K.y) < 70) continue;
      world.squirrel = { x: tx * TILE + 8, y: ty * TILE + 10, t: 0, run: 0, vx: 0, vy: 0, face: x < K.x ? 1 : -1 };
      sfx('tick');
      speak('¡Mira, una ardilla! Corre con Luna a saludarla.');
      break;
    }
    return;
  }
  s.t += dt;
  if (s.run > 0) {
    s.run -= dt; s.x += s.vx * dt; s.y += s.vy * dt;
    if (s.run <= 0) world.squirrel = null;
    return;
  }
  if (s.t > 25) { world.squirrel = null; return; }
  if (Math.hypot(L.x - s.x, L.y - s.y) < 20 || Math.hypot(K.x - s.x, K.y - s.y) < 16) {
    const a = Math.atan2(s.y - L.y, s.x - L.x);
    s.vx = Math.cos(a) * 150; s.vy = Math.sin(a) * 150; s.run = 1.1; s.face = Math.sign(s.vx) || 1;
    const e = today(p);
    e.squirrels = (e.squirrels || 0) + 1;
    dogSound('bark', stageOf(p.day).size);
    if (e.squirrels <= 4) {
      applyFx(p, { felicidad: 6, energia: -2 });
      p.bones++; e.play++;
      world.floaters.push({ x: s.x, y: s.y - 10, t: 0, txt: '+1' }, { x: L.x, y: L.y - 24, t: -0.15, txt: '♥' });
      sfx('coin');
      addMilestone(p, 'squirrel', '🐿️', 'Luna persiguió a su primera ardilla.');
      refreshHUD();
    }
    speak('¡Guau! ¡Qué rápida!');
  }
}

// ---------- Escondite: Luna se esconde cerca y hay que encontrarla con «frío / caliente» ----------
function startHide() {
  const K = world.kid, ktx = Math.floor(K.x / TILE), kty = Math.floor((K.y - 2) / TILE);
  const cover = (tx, ty) => [[1, 0], [-1, 0], [0, -1], [0, 1]].some(([a, b]) => [T.TREE, T.BUSH, T.PINE, T.ROCK].includes(tileAt(tx + a, ty + b)));
  let spot = null;
  for (let i = 0; i < 600 && !spot; i++) {
    const tx = ktx + Math.round(rand(-14, 14)), ty = kty + Math.round(rand(-10, 10)), d = Math.hypot(tx - ktx, ty - kty);
    if (d < (i < 450 ? 6 : 3) || d > 15) continue;
    if (![T.GRASS, T.FLOWER].includes(tileAt(tx, ty))) continue;
    if (i < 400 && !cover(tx, ty)) continue;
    if (!findPath(ktx, kty, tx, ty)) continue;
    spot = { x: tx * TILE + 8, y: ty * TILE + 10 };
  }
  if (!spot) { speak('Aquí no hay dónde esconderse. ¡Prueba en otro lugar!'); return false; }
  world.hide = { x: spot.x, y: spot.y, t: 0, dur: 60, barkT: 4 };
  world.route = null;
  Object.assign(world.luna, { x: spot.x, y: spot.y, moving: false });
  speak('¡Luna se escondió! Búscala. Si sale fuego, ¡estás muy cerca!');
  return true;
}
function updateHide(p, dt) {
  const H = world.hide, K = world.kid, L = world.luna;
  H.t += dt; H.barkT -= dt;
  if (H.barkT <= 0) {
    H.barkT = 5;
    dogSound('bark', stageOf(p.day).size, 0.55);
    world.floaters.push({ x: H.x, y: H.y - 24, t: 0, txt: 'guau' });
  }
  L.x = H.x; L.y = H.y; L.moving = false;
  const found = Math.hypot(K.x - H.x, K.y - H.y) < 18;
  if (found || H.t >= H.dur) endHide(p, found);
}
function endHide(p, found) {
  const H = world.hide;
  world.hide = null; world.heat = null;
  world.trail = [{ x: H.x, y: H.y }, { x: world.kid.x, y: world.kid.y }];
  const stars = !found ? 0 : H.t < 20 ? 3 : H.t < 40 ? 2 : 1;
  const bones = stars * 2;
  sfx(found ? 'win' : 'lose');
  finishMinigame({ stars, bones, extra: found ? `<span>🙈 ${Math.round(H.t)}s</span>` : '<span>🐶 👋</span>' }, pp => {
    const e = today(pp);
    pp.bones += bones; e.play++;
    e.games = e.games || {}; e.games.hide = (e.games.hide || 0) + 1;
    applyFx(pp, { felicidad: 10 + stars * 4, energia: -6, hidratacion: -4 });
    addEvent(pp, '🙈', found ? `Jugaron al escondite: encontraste a Luna en ${Math.round(H.t)} s.` : 'Jugaron al escondite: Luna salió solita de su escondite.');
    if (found) addMilestone(pp, 'hide1', '🙈', '¡Encontraste a Luna jugando al escondite!');
  });
}

// ---------- Tesoro del día ----------
function digTreasure(p) {
  const T0 = world.treasure;
  world.treasure = null; world.heat = null;
  p.treasure = { day: p.day, found: true };
  const r = Math.random();
  let txt;
  if (r < 0.45) { const n = 4 + Math.floor(Math.random() * 4); p.bones += n; txt = `🦴 +${n}`; }
  else if (r < 0.7) { p.items.premio += 2; txt = '🍪 +2'; }
  else if (r < 0.88) { p.items.champu += 1; txt = '🧴 +1'; }
  else { p.bones += 12; txt = '💎 🦴 +12'; }
  applyFx(p, { felicidad: 10 });
  world.digFx = { x: T0.tx * TILE + 8, y: T0.ty * TILE + 10, t: 0 };
  addEvent(p, '💰', `¡Luna desenterró un tesoro! (${txt})`);
  addMilestone(p, 'treasure1', '💰', 'Luna encontró su primer tesoro escondido.');
  pop('💰', txt); speak('¡Luna encontró el tesoro!'); sfx('win');
  setTimeout(() => dogSound('happy', stageOf(p.day).size), 500);
  saveRoot(); refreshHUD();
}

// «Frío / caliente» sobre la cabeza del avatar (escondite o tesoro activo en la guía)
const HEAT_SAY = { hot: '¡Caliente, caliente!', warm: '¡Tibio!', cold: '¡Frío!' };
function updateHeat() {
  const K = world.kid;
  let tx = null, ty = null;
  if (world.hide) { tx = world.hide.x; ty = world.hide.y; }
  else if (world.treasure && typeof goalNow !== 'undefined' && goalNow && goalNow.key === 'treasure') { tx = world.treasure.tx * TILE + 8; ty = world.treasure.ty * TILE + 10; }
  if (tx == null) { world.heat = null; return; }
  const d = Math.hypot(tx - K.x, ty - K.y) / TILE;
  const lvl = d < 3.5 ? 'hot' : d < 8 ? 'warm' : 'cold';
  if (!world.heat || world.heat.lvl !== lvl) {
    const prev = world.heat;
    world.heat = { lvl, at: world.t };
    if (prev && world.t - (prev.said || 0) > 2) { speak(HEAT_SAY[lvl]); world.heat.said = world.t; } else if (prev) world.heat.said = prev.said;
  }
}

function placeLocked(p, pl) { return p.day < pl.minDay; }

function updateWorld(dt) {
  const p = current.pet, L = world.luna, K = world.kid;
  world.t += dt;
  // sincroniza huesos del día si cambió el día
  if (p.mapBones.day !== p.day) spawnDailyBones(p);

  let mx = 0, my = 0, routed = false;
  if (!p.asleep && state.mode === 'world') {
    mx = (input.held.right ? 1 : 0) - (input.held.left ? 1 : 0);
    my = (input.held.down ? 1 : 0) - (input.held.up ? 1 : 0);
    if (mx || my) world.route = null;                       // el teclado cancela el camino automático
    else if (world.route) {
      const r = world.route, [nx, ny] = r.path[0];
      const dx = nx * TILE + 8 - K.x, dy = ny * TILE + 10 - K.y, d = Math.hypot(dx, dy);
      if (d < 2.5) {
        r.path.shift();
        if (!r.path.length) {
          world.route = null;
          if (r.place) { const pl = PLACES.find(x => x.id === r.place); world.near = pl; updatePrompt(); openPlace(r.place); }
        }
      } else { mx = dx / d; my = dy / d; routed = true; }
    }
  } else world.route = null;
  K.moving = mx !== 0 || my !== 0;
  if (K.moving) {
    const st = stageOf(p.day);
    // el paso lo marca Luna: si está cansada o enferma, el paseo va más lento
    let sp = Math.max(62, st.speed) * (p.stats.energia < 15 ? 0.6 : 1) * (p.sick && !p.sick.treated ? 0.75 : 1);
    if (mx && my && !routed) sp *= Math.SQRT1_2;
    if (Math.abs(mx) > 0.2) K.face = Math.sign(mx);
    K.dir = Math.abs(my) > Math.abs(mx) * 1.2 ? (my < 0 ? 'up' : 'down') : 'side';
    const nx = K.x + mx * sp * dt, ny = K.y + my * sp * dt;
    const hw = 4, hh = 3;
    const free = (x, y) => !solidAt(x - hw, y - hh) && !solidAt(x + hw, y - hh) && !solidAt(x - hw, y + hh) && !solidAt(x + hw, y + hh);
    const ox = K.x, oy = K.y;
    if (free(nx, K.y)) K.x = nx;
    if (free(K.x, ny)) K.y = ny;
    const moved = Math.hypot(K.x - ox, K.y - oy);
    K.anim += moved;
    K.walkAcc += moved;
    if (K.walkAcc >= TILE) {
      const e = today(p);
      const n = Math.floor(K.walkAcc / TILE);
      K.walkAcc -= n * TILE;
      guideEvent('walk');
      if (p.day >= 3) {
        e.walkTiles += n;
        if (e.walkTiles >= WALK_GOAL && !e.walk) {
          e.walk = 1; p.bones += 2;
          addEvent(p, '🗺️', '¡Exploración del día completada! (+2 🦴)');
          pop('🗺️', '⭐ +🦴🦴'); speak('¡Paseo completado!');
          refreshHUD();
        }
      }
    }
  }
  updateTown2(p, dt);   // perros, refugio y Valle Aventura (js/town.js)
  if (world.hide) { if (state.mode === 'world') updateHide(p, dt); }
  else if (!p.asleep) followLuna(p, dt);
  updateSquirrel(p, dt);
  updateHeat();
  // tesoro: aparece al pasar justo encima
  if (world.treasure && state.mode === 'world' && !world.hide) {
    const tx = world.treasure.tx * TILE + 8, ty = world.treasure.ty * TILE + 10;
    if (Math.hypot(tx - K.x, ty - K.y) < 11 || Math.hypot(tx - L.x, ty - L.y) < 9) digTreasure(p);
  }
  if (world.digFx) { world.digFx.t += dt; if (world.digFx.t > 1.5) world.digFx = null; }
  // mariposas: Luna las persigue si pasa cerca
  world.bflyCd -= dt;
  if (!p.asleep && !world.hide) for (const b of world.butterflies) {
    if (Math.hypot(b.x - L.x, b.y - (L.y - 6)) < 10) {
      b.x += (b.x > L.x ? 1 : -1) * 26; b.y -= 14; b.ph += 2;
      world.floaters.push({ x: L.x, y: L.y - 22, t: 0, txt: '♥' });
      if (world.bflyCd <= 0) { world.bflyCd = 12; applyFx(p, { felicidad: 2 }); dogSound('yip', stageOf(p.day).size, 0.5); }
    }
  }
  // recoger huesos (el avatar o Luna)
  for (let i = world.bones.length - 1; i >= 0; i--) {
    const b = world.bones[i];
    const bx = b.tx * TILE + 8, by = b.ty * TILE + 10;
    if ((Math.abs(bx - K.x) < 10 && Math.abs(by - K.y) < 10) || (!world.hide && Math.abs(bx - L.x) < 9 && Math.abs(by - L.y) < 9)) {
      world.bones.splice(i, 1);
      p.mapBones.taken.push(b.i);
      p.bones++;
      world.floaters.push({ x: bx, y: by - 8, t: 0, txt: '+1' });
      sfx('coin');
      refreshHUD();
      guideEvent('bone');
      if (!world.bones.length) { dogSound('happy', stageOf(p.day).size); addEvent(p, '🦴', 'Luna encontró todos los huesos escondidos del día.'); addMilestone(p, 'allbones', '🔍', 'Luna encontró todos los huesos escondidos de un día.'); }
    }
  }
  for (const f of world.floaters) f.t += dt;
  world.floaters = world.floaters.filter(f => f.t < 0.9);
  for (const b of world.butterflies) { b.ph += dt; b.x += Math.cos(b.ph * 0.7) * 14 * dt; b.y += Math.sin(b.ph * 1.3) * 10 * dt; }

  // lugar cercano
  // durante el escondite no se entra a los lugares
  const atDoor = world.hide ? null : PLACES.find(pl => Math.abs(pl.trigger[0] * TILE + 8 - K.x) < (pl.id === 'lago' ? 22 : 14) && Math.abs(pl.trigger[1] * TILE + 8 - K.y) < 12);
  const thing = atDoor || world.hide ? null : nearThing2();   // perros y cofre (js/town.js): tienen prioridad dentro de los parques
  const near = atDoor || (world.hide || thing ? null : inPark(K.x, K.y) ? PLACES.find(pl => pl.id === 'parque') : inDogPark(K.x, K.y) ? PLACES.find(pl => pl.id === 'perros') : null);   // dentro del parque también se puede entrar
  if (near !== world.near) { world.near = near || null; updatePrompt(); }
  if ((thing && thing.label) !== (world.nearX && world.nearX.label)) { world.nearX = thing; updatePrompt(); }
  if (state.mode === 'world' && input.pressed.a) {
    if (p.asleep) wakeUp();
    else if (world.near) openPlace(world.near.id);
    else if (world.nearX) world.nearX.run();
  }
  p.pos = { x: Math.round(K.x), y: Math.round(K.y) };
  followCamera(dt);
}

// Zona del parque (casillas 16..27 x 17..26): estando dentro, el parque está «cerca»
const inPark = (x, y) => x >= 16 * TILE && x < 28 * TILE && y >= 17 * TILE && y < 27 * TILE;

// ---------- Tocar para ir: camino por casillas (BFS) ----------
const walkable = (tx, ty) => !SOLID.has(tileAt(tx, ty));
function findPath(sx, sy, tx, ty) {
  const key = (x, y) => y * MAP_W + x, prev = new Map([[key(sx, sy), -1]]), q = [[sx, sy]];
  while (q.length) {
    const [x, y] = q.shift();
    if (x === tx && y === ty) {
      const path = []; let k = key(x, y);
      while (k !== key(sx, sy)) { path.unshift([k % MAP_W, Math.floor(k / MAP_W)]); k = prev.get(k); }
      return path;
    }
    for (const [ax, ay] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + ax, ny = y + ay, k = key(nx, ny);
      if (!prev.has(k) && walkable(nx, ny)) { prev.set(k, key(x, y)); q.push([nx, ny]); }
    }
  }
  return null;
}
function placeAtTile(tx, ty) {
  for (const pl of PLACES) {
    if (pl.rect) { const [x, y, w, h] = pl.rect; if (tx >= x - 1 && tx < x + w + 1 && ty >= y - 2 && ty < y + h + 1) return pl; }
    if (Math.abs(pl.trigger[0] - tx) <= 1 && Math.abs(pl.trigger[1] - ty) <= 1) return pl;
  }
  if (inPark(tx * TILE + 8, ty * TILE + 8)) return PLACES.find(pl => pl.id === 'parque');
  if (inDogPark(tx * TILE + 8, ty * TILE + 8)) return PLACES.find(pl => pl.id === 'perros');
  if (Math.abs(tx - VALLEY2.ranger[0]) <= 1 && Math.abs(ty - VALLEY2.ranger[1]) <= 1) return PLACES.find(pl => pl.id === 'aventura');
  if (tileAt(tx, ty) === T.WATER && tx >= 33) return PLACES.find(pl => pl.id === 'lago');
  return null;
}
function goTo(tx, ty, placeId) {
  const K = world.kid, sx = Math.floor(K.x / TILE), sy = Math.floor((K.y - 2) / TILE);
  if (!walkable(tx, ty)) {   // si tocó algo sólido, busca la casilla libre más cercana
    let best = null;
    for (let r = 1; r <= 3 && !best; r++) for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) if (!best && walkable(tx + dx, ty + dy)) best = [tx + dx, ty + dy];
    if (!best) return false;
    [tx, ty] = best;
  }
  const path = findPath(sx, sy, tx, ty);
  if (!path) return false;
  if (!path.length) { if (placeId) openPlace(placeId); return true; }
  world.route = { path, place: placeId || null, dest: [tx, ty] };
  return true;
}
function tapMap(wx, wy) {
  const p = current.pet;
  if (p.asleep) { wakeUp(); return; }
  const tx = Math.floor(wx / TILE), ty = Math.floor(wy / TILE);
  const pl = placeAtTile(tx, ty);
  if (pl) {
    if (world.near && world.near.id === pl.id) { openPlace(pl.id); return; }
    const [gx, gy] = (pl.id === 'parque' && inPark(world.kid.x, world.kid.y)) || (pl.id === 'perros' && inDogPark(world.kid.x, world.kid.y)) ? [tx, ty] : pl.trigger;
    if (goTo(gx, gy, pl.id)) { sfx('tick'); speak(PLACE_UI[pl.id].name); }
    return;
  }
  if (goTo(tx, ty, null)) sfx('tick');
}

function viewSize() { return { w: view.w, h: view.h }; }
function snapCamera() {
  const { w, h } = viewSize();
  world.cam.x = clamp(world.kid.x - w / 2, 0, Math.max(0, MAP_W * TILE - w));
  world.cam.y = clamp(world.kid.y - h / 2, 0, Math.max(0, MAP_H * TILE - h));
}
function followCamera(dt) {
  const { w, h } = viewSize();
  const k = 1 - Math.exp(-8 * dt);   // suavizado independiente de los FPS (camera-systems)
  const tx = clamp(world.kid.x - w / 2, 0, Math.max(0, MAP_W * TILE - w));
  const ty = clamp(world.kid.y - h / 2, 0, Math.max(0, MAP_H * TILE - h));
  world.cam.x += (tx - world.cam.x) * k;
  world.cam.y += (ty - world.cam.y) * k;
}

// Devuelve el emoji a mostrar sobre el lugar: lo que Luna necesita allí, ⭐ si hay algo nuevo o 🔒
function placeAttention(p, pl) {
  if (placeLocked(p, pl)) return '🔒';
  const need = needsOf(p).find(n => n.place === pl.id && (n.level === 'bad' || n.level === 'warn'));
  if (need) return need.icon;
  if (pl.id === 'escuela' && today(p).sessions === 0) return '⭐';
  if (pl.id === 'bosque' && LEVEL_DEFS.some(L => p.day >= L.minDay && !(p.levels[L.id] && p.levels[L.id].done))) return '⭐';
  return null;
}

function drawWorld(ctx) {
  const p = current.pet, L = world.luna;
  const cx = Math.round(world.cam.x), cy = Math.round(world.cam.y);
  const { w, h } = viewSize();
  ctx.fillStyle = PAL.pineD; ctx.fillRect(0, 0, w, h);
  ctx.drawImage(world.bg, -cx, -cy);

  // brillos del agua animados
  const t = world.t;
  ctx.fillStyle = PAL.waterL;
  const x0 = Math.floor(cx / TILE), y0 = Math.floor(cy / TILE);
  for (let ty = y0; ty <= y0 + Math.ceil(h / TILE); ty++) for (let tx = x0; tx <= x0 + Math.ceil(w / TILE); tx++) {
    if (tileAt(tx, ty) !== T.WATER) continue;
    const ph = (t * 1.5 + hash2(tx, ty) * 6) % 6;
    if (ph < 1.2) ctx.fillRect(tx * TILE + 4 + Math.floor(hash2(tx, ty, 1) * 6) - cx, ty * TILE + 6 + Math.floor(ph * 2) - cy, 4, 1);
  }

  // huesos del día
  for (const b of world.bones) {
    const bob = Math.round(Math.sin(t * 3 + b.i) * 1.5);
    ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(b.tx * TILE + 4 - cx, b.ty * TILE + 13 - cy, 9, 2);
    ctx.drawImage(BONE, b.tx * TILE + 4 - cx, b.ty * TILE + 4 + bob - cy);
  }

  // tierra removida donde estaba el tesoro
  if (world.digFx) {
    const d = world.digFx;
    ctx.fillStyle = PAL.dirtD; ctx.fillRect(Math.round(d.x - 6 - cx), Math.round(d.y - 3 - cy), 12, 5);
    for (let i = 0; i < 6; i++) { const a = i * 1.05, r = d.t * 30; ctx.fillStyle = i % 2 ? PAL.dirt : '#f8d030'; ctx.fillRect(Math.round(d.x + Math.cos(a) * r - cx), Math.round(d.y - 4 + Math.sin(a) * r * 0.6 - d.t * 10 - cy), 2, 2); }
  }
  // ardilla
  const sq = world.squirrel;
  if (sq) {
    const f = sq.run > 0 ? Math.floor(t * 12) % 2 : Math.floor(t * 2) % 2;
    ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(Math.round(sq.x - 5 - cx), Math.round(sq.y - cy), 10, 2);
    drawDog(ctx, SQUIRREL_SPR[f], sq.x - cx, sq.y + 1 - cy - (sq.run > 0 ? Math.abs(Math.sin(t * 20)) * 3 : 0), sq.face < 0);
  }

  // Luna y el avatar (se dibuja primero el que está más arriba)
  const st = stageOf(p.day), K = world.kid;
  const lunaHidden = world.hide && Math.hypot(K.x - world.hide.x, K.y - world.hide.y) > 44;
  const drawLuna = () => {
    if (lunaHidden) return;
    const pose = p.asleep ? 'sleep' : L.moving ? 'walk' : 'stand';
    const frame = Math.floor(L.anim / 6) % 2;
    const spr = dogSprite({ coat: p.coat, size: st.size, pose, frame: L.moving ? frame : Math.floor(t * 2) % 2, eyesClosed: p.day < 2 || p.asleep, collar: p.day >= 8, acc: p.acc.worn, sad: moodOf(p) === 'triste' || moodOf(p) === 'enferma' });
    ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.fillRect(Math.round(L.x - 8 - cx), Math.round(L.y - cy), 16, 3);
    drawDog(ctx, spr, L.x - cx, L.y + 1 - cy, L.face < 0);
  };
  const drawKid = () => {
    const spr = kidSprite(current.avatar, K.dir, K.moving, Math.floor(K.anim / 7) % 2);
    ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.fillRect(Math.round(K.x - 6 - cx), Math.round(K.y - cy), 12, 3);
    drawDog(ctx, spr, K.x - cx, K.y + 1 - cy, K.dir === 'side' && K.face < 0);
  };
  const drawables = [{ y: L.y, d: drawLuna }, { y: K.y, d: drawKid }];
  drawTown2(ctx, cx, cy, t, drawables);   // perros, conejos, cofre… (js/town.js)
  drawables.sort((a, b) => a.y - b.y).forEach(o => o.d());
  // correa (desde que Luna camina: semana 3)
  if (p.day >= 3 && !p.asleep && !world.hide) {
    const D = DOG_DIMS[st.size], legH = D.leg;
    const nx = L.x + L.face * (D.bw - 8), ny = L.y - legH - D.bh + 2;
    const hx = K.x + (K.dir === 'side' ? K.face * 3 : (L.x < K.x ? -6 : 6)), hy = K.y - 8;
    drawLeash(ctx, Math.round(hx - cx), Math.round(hy - cy), Math.round(nx - cx), Math.round(ny - cy));
  }
  if (!world.hide) drawThought(ctx, L.x - cx, L.y - cy);
  if (p.asleep) {
    const z = Math.floor(t * 1.5) % 3;
    pxText(ctx, 'z', L.x - cx + 8 + z * 3, L.y - cy - 20 - z * 4, '#ffffff', 8, 'left');
  }
  // frío / caliente
  if (world.heat) emojiBubble(ctx, Math.round(K.x - cx), Math.round(K.y - cy - 42 + Math.sin(t * 5) * 2), { hot: '🔥', warm: '☀️', cold: '❄️' }[world.heat.lvl]);

  // mariposas
  for (const b of world.butterflies) {
    const f = Math.floor(t * 8 + b.ph) % 2;
    ctx.fillStyle = b.c;
    ctx.fillRect(Math.round(b.x - cx) - (f ? 2 : 1), Math.round(b.y - cy), f ? 2 : 1, 2);
    ctx.fillRect(Math.round(b.x - cx) + 1, Math.round(b.y - cy), f ? 2 : 1, 2);
  }

  // avisos sobre los lugares
  for (const pl of PLACES) {
    const kind = placeAttention(p, pl);
    if (!kind) continue;
    const [tx, ty] = pl.trigger;
    const bx = tx * TILE + 8 - cx, by = (pl.rect ? pl.rect[1] * TILE - 30 : ty * TILE - 22) - cy + Math.round(Math.sin(t * 4) * 2);
    emojiBubble(ctx, bx, by, kind);
  }

  for (const f of world.floaters) pxText(ctx, f.txt, f.x - cx, f.y - cy - f.t * 20, '#fff8b0', 8);
  drawGuideArrow(ctx);
  if (world.route) {   // destino del camino automático
    const [dx, dy] = world.route.dest;
    emojiBubble(ctx, dx * TILE + 8 - cx, dy * TILE - 14 - cy + Math.round(Math.sin(t * 6) * 2), world.route.place ? PLACE_UI[world.route.place].icon : '🐾');
  }

  // noche
  const hr = new Date(now(p)).getHours();
  if (hr < 7 || hr >= 20) { ctx.fillStyle = 'rgba(20,24,80,.38)'; ctx.fillRect(0, 0, w, h); }
  else if (hr >= 18) { ctx.fillStyle = 'rgba(240,120,40,.12)'; ctx.fillRect(0, 0, w, h); }
  // tiempo del escondite, junto al globo de frío / caliente
  if (world.hide) {
    const s = `${Math.max(0, Math.ceil(world.hide.dur - world.hide.t))}`, X = Math.round(world.kid.x - cx + 12), Y = Math.round(world.kid.y - cy - 37);
    pxText(ctx, s, X + 1, Y + 1, OUTLINE, 8, 'left'); pxText(ctx, s, X, Y, '#ffffff', 8, 'left');
  }
}
