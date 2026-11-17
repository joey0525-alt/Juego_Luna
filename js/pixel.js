'use strict';
/* Arte pixel procedural: Luna (crece por etapa), casillas, edificios y objetos. Todo se dibuja con fillRect. */

const OUTLINE = '#2a1810';
const INK = '#1c1010';
const PAL = {
  grass: '#78c850', grassD: '#58a838', grassL: '#98e070',
  dirt: '#e0b878', dirtD: '#c09050', dirtL: '#f0d098',
  water: '#4898e8', waterD: '#3070c8', waterL: '#90d0ff',
  sand: '#f0d898', tree: '#3c9a3c', treeD: '#246a2c', treeL: '#64c050', trunk: '#8c5430',
  pine: '#2c7044', pineD: '#1a4a30', pineL: '#3c8c54',
  rock: '#a0a0a8', rockD: '#6c6c78', rockL: '#d0d0d8', wood: '#b07840', woodD: '#7c5028', woodL: '#d8a060',
};

function mkCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
// Hash determinista para detalles "aleatorios" estables
function hash2(x, y, s = 0) { let h = (x * 374761393 + y * 668265263 + s * 2147483647) | 0; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; }
function seeded(seed) { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return (s >>> 0) / 4294967295; }; }

function addOutline(c, color = OUTLINE) {
  const ctx = c.getContext('2d');
  const { width: w, height: h } = c;
  const img = ctx.getImageData(0, 0, w, h), d = img.data;
  const solid = (x, y) => x >= 0 && y >= 0 && x < w && y < h && d[(y * w + x) * 4 + 3] > 0;
  const mark = [];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (!solid(x, y) && (solid(x - 1, y) || solid(x + 1, y) || solid(x, y - 1) || solid(x, y + 1))) mark.push([x, y]);
  }
  ctx.fillStyle = color;
  for (const [x, y] of mark) ctx.fillRect(x, y, 1, 1);
  return c;
}

// ====================== Luna ======================
const DOG_DIMS = [
  { bw: 7, bh: 4, leg: 1, hw: 5, hh: 5, tail: 2 },
  { bw: 8, bh: 4, leg: 2, hw: 6, hh: 5, tail: 2 },
  { bw: 10, bh: 5, leg: 2, hw: 6, hh: 6, tail: 3 },
  { bw: 12, bh: 5, leg: 3, hw: 7, hh: 6, tail: 3 },
  { bw: 13, bh: 6, leg: 3, hw: 7, hh: 7, tail: 4 },
];
const dogCache = new Map();
/* pose: 'stand' | 'walk' | 'jump' | 'sleep' ; frame 0/1 ; devuelve canvas mirando a la derecha */
function dogSprite({ coat = 'dorado', look = null, ears = null, size = 2, pose = 'stand', frame = 0, eyesClosed = false, collar = false, acc = null, sad = false }) {
  const key = [look ? look.fur + look.dark + look.light + !!look.spots : coat, ears, size, pose, frame, eyesClosed, collar, acc, sad].join('|');
  if (dogCache.has(key)) return dogCache.get(key);
  const c = look || COATS[coat] || COATS.dorado;   // look: pelaje de los perros del pueblo
  const D = DOG_DIMS[size];
  const W = 28, H = 22;
  const cv = mkCanvas(W, H), g = cv.getContext('2d');
  const px = (x, y, col, w = 1, h = 1) => { g.fillStyle = col; g.fillRect(x, y, w, h); };
  const feetY = H - 2;
  const lying = pose === 'sleep';
  const legH = lying ? 0 : D.leg;
  const bx = 6;
  const bodyBottom = feetY - legH;
  const bodyTop = bodyBottom - D.bh + 1;
  const hx = bx + D.bw - 2;
  const hy = lying ? bodyTop - D.hh + 3 : bodyTop - D.hh + 2;
  const lw = size >= 3 ? 2 : 1;

  // cola
  const tailUp = pose === 'jump' ? 1 : (frame ? 0 : 1);
  for (let i = 0; i < D.tail; i++) {
    if (lying) px(bx - 1 - i, bodyBottom - 1, c.fur);
    else if (tailUp && !sad) px(bx - 1 - Math.floor(i / 2), bodyTop - i, c.fur);
    else px(bx - 1 - i, bodyTop + (sad ? i : 0), c.fur);
  }
  // patas lejanas (más oscuras)
  if (!lying) {
    let o1 = 0, o2 = 0;
    if (pose === 'walk') { o1 = frame ? 1 : -1; o2 = -o1; }
    if (pose === 'jump') { o1 = -1; o2 = 1; }
    px(bx + 2 + o1, bodyBottom + 1, c.dark, lw, legH);
    px(bx + D.bw - 3 + o2, bodyBottom + 1, c.dark, lw, legH);
  }
  // cuerpo
  px(bx, bodyTop, c.fur, D.bw, D.bh);
  px(bx + 2, bodyBottom, c.light, Math.max(2, D.bw - 5), 1);
  if (c.spots) { px(bx + 2, bodyTop, c.dark, 3, 2); px(bx + D.bw - 5, bodyTop + 2, c.dark, 2, 2); }
  // patas cercanas
  if (!lying) {
    let o1 = 0, o2 = 0;
    if (pose === 'walk') { o1 = frame ? -1 : 1; o2 = -o1; }
    if (pose === 'jump') { o1 = -2; o2 = 2; }
    px(bx + o1, bodyBottom + 1, c.fur, lw, legH);
    px(bx + D.bw - 2 + o2 - (lw - 1), bodyBottom + 1, c.fur, lw, legH);
    if (legH > 1) { px(bx + o1, feetY, c.light, lw, 1); px(bx + D.bw - 2 + o2 - (lw - 1), feetY, c.light, lw, 1); }
  }
  // collar / pañuelo
  if (acc === 'panuelo') { px(hx, bodyTop, '#3060d0', 3, 2); px(hx + 1, bodyTop + 2, '#3060d0', 1, 1); }
  else if (collar) px(hx, bodyTop, typeof collar === 'string' ? collar : '#e03c3c', 2, 2);
  if (acc === 'capa') { px(bx - 1, bodyTop - 1, '#e03030', D.bw - 2, 2); px(bx - 1, bodyTop, '#c02020', 2, D.bh); }
  if (acc === 'calabaza') { px(bx + 1, bodyTop, '#ff8c1a', D.bw - 2, D.bh - 1); px(bx + 2, bodyTop + 1, '#e06a00', 1, D.bh - 2); px(bx + D.bw - 4, bodyTop + 1, '#e06a00', 1, D.bh - 2); }
  // cabeza
  px(hx, hy, c.fur, D.hw, D.hh);
  if (c.spots) px(hx + D.hw - 3, hy + 1, c.dark, 3, 2);
  // hocico
  const sy = hy + D.hh - 3;
  px(hx + D.hw, sy, c.light, 2, 2);
  px(hx + D.hw - 1, sy + 1, c.light, 1, 2);
  px(hx + D.hw + 1, sy, INK, 1, 1); // nariz
  if (ears === 'up') { px(hx + 1, hy - 2, c.dark, 2, 2); px(hx + 1, hy - 3, c.dark, 1, 1); }   // oreja parada
  else { px(hx + 1, hy, c.dark, 2, D.hh - 1); if (size >= 2) px(hx + 1, hy + D.hh - 1, c.dark, 1, 1); }   // oreja caída
  // ojo
  const ex = hx + D.hw - 2, ey = hy + 2;
  if (eyesClosed || lying) px(ex - 1, ey + 1, INK, 2, 1);
  else { px(ex, ey, INK, 1, size >= 3 ? 2 : 1); if (sad) px(ex - 1, ey - 1, c.dark, 2, 1); }
  // mejilla
  if (!sad && !lying && size >= 2) px(ex - 1, ey + 2, '#f08890', 1, 1);
  // accesorios de cabeza
  if (acc === 'lazo') { px(hx + 2, hy - 2, '#f070b0', 1, 2); px(hx + 4, hy - 2, '#f070b0', 1, 2); px(hx + 3, hy - 1, '#c04080', 1, 1); }
  if (acc === 'gorro') { px(hx, hy - 2, '#d04848', D.hw, 2); px(hx + 1, hy - 3, '#d04848', D.hw - 2, 1); px(hx, hy - 1, '#f0f0f0', D.hw, 1); px(hx + Math.floor(D.hw / 2), hy - 4, '#f0f0f0', 1, 1); }
  if (acc === 'gafas' && !lying) { px(ex - 2, ey, INK, 4, 1); px(ex - 1, ey, INK, 2, 2); }
  if (acc === 'flor') { px(hx + D.hw - 3, hy - 2, '#ff79bf', 3, 2); px(hx + D.hw - 2, hy - 3, '#ff79bf', 1, 1); px(hx + D.hw - 2, hy - 2, '#ffd23f', 1, 1); }
  if (acc === 'corona') { px(hx + 1, hy - 2, '#f8d030', D.hw - 2, 2); px(hx + 1, hy - 3, '#f8d030', 1, 1); px(hx + Math.floor(D.hw / 2), hy - 4, '#f8d030', 1, 2); px(hx + D.hw - 2, hy - 3, '#f8d030', 1, 1); px(hx + Math.floor(D.hw / 2), hy - 2, '#e03c3c', 1, 1); }
  if (acc === 'reno') { const br = '#8a5a2a'; px(hx + 1, hy - 3, br, 1, 3); px(hx, hy - 4, br, 1, 1); px(hx + 2, hy - 4, br, 1, 1); px(hx + D.hw - 2, hy - 3, br, 1, 3); px(hx + D.hw - 3, hy - 4, br, 1, 1); px(hx + D.hw - 1, hy - 4, br, 1, 1); }
  if (acc === 'calabaza') { px(hx + 2, hy - 2, '#3c8c3c', 1, 2); px(hx + 3, hy - 2, '#58b048', 2, 1); }
  if (acc === 'fiesta') { px(hx + 1, hy - 2, '#6fc2ff', 4, 2); px(hx + 2, hy - 4, '#ff6b8b', 2, 2); px(hx + 2, hy - 5, '#ffd23f', 1, 1); }

  addOutline(cv);
  dogCache.set(key, cv);
  return cv;
}

// Dibuja a Luna con pies en (x, y) en coordenadas de pantalla
function drawDog(ctx, sprite, x, y, flip) {
  const w = sprite.width, h = sprite.height;
  const dx = Math.round(x - w / 2), dy = Math.round(y - h + 1);
  if (flip) {
    ctx.save(); ctx.translate(dx + w, dy); ctx.scale(-1, 1); ctx.drawImage(sprite, 0, 0); ctx.restore();
  } else ctx.drawImage(sprite, dx, dy);
}

// ====================== Avatar: el niño o la niña que pasea a Luna ======================
// Aspecto según la cara elegida al crear la partida.
const KID_LOOKS = {
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
const kidLook = avatar => KID_LOOKS[avatar] || KID_LOOKS['🧒'];
const kidCache = new Map();
/* dir: 'down' (de frente) | 'up' (de espaldas) | 'side' (mirando a la derecha); walk + frame 0/1.
   Lienzo 14x22; los pies quedan en la fila 20 (igual que drawDog: pies en la base). */
function kidSprite(avatar, dir = 'down', walk = false, frame = 0) {
  const key = [avatar, dir, walk, frame].join('|');
  if (kidCache.has(key)) return kidCache.get(key);
  const L = kidLook(avatar);
  const cv = mkCanvas(14, 22), g = cv.getContext('2d');
  const px = (x, y, col, w = 1, h = 1) => { g.fillStyle = col; g.fillRect(x + 1, y + 2, w, h); };
  const shoe = '#3a2a2a', side = dir === 'side';
  // capa (detrás del cuerpo)
  if (L.cape && dir !== 'up') { px(side ? 1 : 1, 7, L.cape, side ? 3 : 10, 8); }
  // piernas
  if (side) {
    const a = walk ? (frame ? 3 : 6) : 4, b = walk ? (frame ? 6 : 3) : 6;
    px(a, 14, L.pants, 2, 4); px(b, 14, L.pants, 2, 4); px(a, 18, shoe, 2, 1); px(b, 18, shoe, 2, 1);
    px(4, 13, L.pants, 4, 1);
  } else {
    const lu = walk && frame === 0 ? 1 : 0, ru = walk && frame === 1 ? 1 : 0;
    px(3, 14, L.pants, 2, 4 - lu); px(7, 14, L.pants, 2, 4 - ru);
    px(3, 18 - lu, shoe, 2, 1); px(7, 18 - ru, shoe, 2, 1);
    px(3, 13, L.pants, 6, 1);
  }
  // cuerpo y brazos
  if (side) {
    px(3, 7, L.shirt, 6, 6);
    const hx = walk ? (frame ? 7 : 3) : 5;
    px(5, 7, L.shirt, 2, 3); px(hx, 10, L.skin, 2, 2);
  } else {
    px(2, 7, L.shirt, 8, 6);
    const sw = walk ? (frame ? 1 : -1) : 0;
    px(0, 7, L.shirt, 2, 3); px(10, 7, L.shirt, 2, 3);
    px(0, 10 + Math.max(0, sw), L.skin, 2, 2); px(10, 10 + Math.max(0, -sw), L.skin, 2, 2);
  }
  if (L.cape && dir === 'up') px(2, 7, L.cape, 8, 9);
  // cabeza
  const hx0 = side ? 3 : 2, hw = side ? 7 : 8;
  if (L.style === 'helmet') {
    px(hx0 - 1, -1, '#f0f0f4', hw + 2, 9);
    if (dir !== 'up') { px(hx0 + 1, 1, L.skin, hw - 2, 5); px(hx0 + hw - 3, 1, 'rgba(255,255,255,.6)', 1, 2); }
  } else {
    px(hx0, 0, L.skin, hw, 7);
    const H = L.hair;
    if (dir === 'up') {
      if (L.style === 'bald') px(hx0, 3, H, hw, 2); else px(hx0, 0, H, hw, L.style === 'long' ? 8 : 6);
      if (L.style === 'pigtails') { px(0, 2, H, 2, 3); px(10, 2, H, 2, 3); }
      if (L.style === 'bun') px(hx0 + 2, -1, H, 4, 2);
    } else if (L.style !== 'bald') {
      px(hx0, 0, H, hw, 2);
      if (side) px(hx0, 2, H, 2, L.style === 'long' ? 7 : 3);
      else { px(hx0, 2, H, 1, L.style === 'long' ? 7 : 2); px(hx0 + hw - 1, 2, H, 1, L.style === 'long' ? 7 : 2); }
      if (L.style === 'long' && !side) { px(hx0 - 1, 2, H, 1, 7); px(hx0 + hw, 2, H, 1, 7); }
      if (L.style === 'pigtails') { if (side) px(1, 2, H, 2, 3); else { px(0, 2, H, 2, 3); px(10, 2, H, 2, 3); } }
      if (L.style === 'bun') px(hx0 + (side ? 0 : 2), -1, H, 4, 2);
    } else { px(hx0, 2, H, 1, 3); if (!side) px(hx0 + hw - 1, 2, H, 1, 3); }
  }
  // cara
  if (dir === 'down') {
    px(4, 3, INK, 1, 2); px(7, 3, INK, 1, 2);
    px(3, 5, '#f08890'); px(8, 5, '#f08890'); px(5, 5, '#a04040', 2, 1);
  } else if (side) {
    px(8, 3, INK, 1, 2); px(7, 5, '#f08890'); px(9, 5, '#a04040');
  }
  addOutline(cv);
  kidCache.set(key, cv);
  return cv;
}

// Ardilla (mira a la derecha)
function squirrelSprite(frame = 0) {
  const c = mkCanvas(14, 12), g = c.getContext('2d');
  const px = (x, y, col, w = 1, h = 1) => { g.fillStyle = col; g.fillRect(x + 1, y + 1, w, h); };
  px(1, 0, '#c87c3c', 3, 2); px(0, 1, '#c87c3c', 3, 6); px(1, 7 - frame, '#c87c3c', 3, 1); px(1, 1, '#e8b070', 1, 4);
  px(4, 4, '#b0682c', 5, 4); px(7, 2, '#b0682c', 4, 4); px(8, 1, '#8a4a20');
  px(9, 3, INK); px(11, 4, INK); px(5, 6, '#f0d0a0', 3, 1);
  px(5, 8, '#8a4a20', 1, 1 + frame); px(8, 8, '#8a4a20', 1, 2 - frame);
  return addOutline(c);
}
const SQUIRREL_SPR = [squirrelSprite(0), squirrelSprite(1)];
// Pato (mira a la derecha); gold = patito dorado
function duckSprite(gold = false, frame = 0) {
  const c = mkCanvas(17, 13), g = c.getContext('2d');
  const px = (x, y, col, w = 1, h = 1) => { g.fillStyle = col; g.fillRect(x + 1, y + 1, w, h); };
  const body = gold ? '#f8d030' : '#ffffff', wing = gold ? '#e0b020' : '#d8dce8', head = gold ? '#f8d030' : '#3c8c4c';
  px(1, 5, body, 11, 5); px(0, 4, body, 2, 2); px(2, 10, body, 9, 1);
  px(4, 6 + frame, wing, 6, 2);
  px(9, 1, head, 4, 4); px(10, 5, gold ? body : '#ffffff', 2, 1);
  px(13, 3, '#f0a020', 2, 1); px(11, 2, INK);
  return addOutline(c);
}
const DUCK_SPR = { white: [duckSprite(false, 0), duckSprite(false, 1)], gold: [duckSprite(true, 0), duckSprite(true, 1)] };

// Correa: curva de píxeles entre la mano y el collar (cuelga cuando está floja)
function drawLeash(ctx, x1, y1, x2, y2) {
  const d = Math.hypot(x2 - x1, y2 - y1), sag = clamp(10 - d * 0.35, 0, 8);
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 + sag;
  const n = Math.max(6, Math.ceil(d));
  ctx.fillStyle = '#c03030';
  for (let i = 0; i <= n; i++) {
    const t = i / n, a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, c = t * t;
    ctx.fillRect(Math.round(a * x1 + b * mx + c * x2), Math.round(a * y1 + b * my + c * y2), 1, 1);
  }
}

// ====================== Casillas del mapa ======================
function drawGrass(g, x, y, tx, ty) {
  g.fillStyle = PAL.grass; g.fillRect(x, y, 16, 16);
  for (let i = 0; i < 5; i++) {
    const r = hash2(tx, ty, i);
    const ax = x + Math.floor(hash2(tx, ty, i + 10) * 15), ay = y + Math.floor(hash2(tx, ty, i + 20) * 14);
    g.fillStyle = r < 0.5 ? PAL.grassD : PAL.grassL;
    g.fillRect(ax, ay, 1, 2);
  }
}
function drawPath(g, x, y, tx, ty, isP) {
  g.fillStyle = PAL.dirt; g.fillRect(x, y, 16, 16);
  // bordes suaves contra el pasto
  g.fillStyle = PAL.grass;
  if (!isP(tx, ty - 1)) for (let i = 0; i < 16; i += 2) g.fillRect(x + i, y, 1, 1 + (hash2(tx + i, ty) > .5 ? 1 : 0));
  if (!isP(tx, ty + 1)) for (let i = 1; i < 16; i += 2) g.fillRect(x + i, y + 15 - (hash2(tx, ty + i) > .5 ? 1 : 0), 1, 2);
  if (!isP(tx - 1, ty)) for (let i = 0; i < 16; i += 2) g.fillRect(x, y + i, 1 + (hash2(tx, ty + i) > .5 ? 1 : 0), 1);
  if (!isP(tx + 1, ty)) for (let i = 1; i < 16; i += 2) g.fillRect(x + 15 - (hash2(tx + i, ty) > .5 ? 1 : 0), y + i, 2, 1);
  for (let i = 0; i < 3; i++) {
    g.fillStyle = i % 2 ? PAL.dirtD : PAL.dirtL;
    g.fillRect(x + 2 + Math.floor(hash2(tx, ty, i + 5) * 11), y + 2 + Math.floor(hash2(tx, ty, i + 9) * 11), 2, 1);
  }
}
function drawWater(g, x, y, tx, ty, isW) {
  g.fillStyle = PAL.water; g.fillRect(x, y, 16, 16);
  g.fillStyle = PAL.waterD;
  if (hash2(tx, ty, 3) > .5) g.fillRect(x + 3, y + 10, 5, 1);
  // orilla
  g.fillStyle = PAL.sand;
  if (!isW(tx, ty - 1)) g.fillRect(x, y, 16, 3);
  if (!isW(tx, ty + 1)) g.fillRect(x, y + 13, 16, 3);
  if (!isW(tx - 1, ty)) g.fillRect(x, y, 3, 16);
  if (!isW(tx + 1, ty)) g.fillRect(x + 13, y, 3, 16);
  g.fillStyle = PAL.waterL;
  if (!isW(tx, ty - 1)) g.fillRect(x + 1, y + 3, 14, 1);
}
function drawTree(g, x, y, pine) {
  g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(x + 2, y + 13, 12, 3);
  g.fillStyle = PAL.trunk; g.fillRect(x + 6, y + 10, 4, 5);
  if (pine) {
    const rows = [[6, 1, 4], [4, 4, 8], [2, 7, 12]];
    for (const [ox, oy, w] of rows) {
      g.fillStyle = PAL.pineD; g.fillRect(x + ox, y + oy, w, 4);
      g.fillStyle = PAL.pine; g.fillRect(x + ox + 1, y + oy, w - 2, 3);
      g.fillStyle = PAL.pineL; g.fillRect(x + ox + 2, y + oy, 2, 1);
    }
  } else {
    g.fillStyle = PAL.treeD; g.fillRect(x + 1, y + 2, 14, 10); g.fillRect(x + 3, y, 10, 13);
    g.fillStyle = PAL.tree; g.fillRect(x + 2, y + 2, 12, 8); g.fillRect(x + 4, y + 1, 8, 10);
    g.fillStyle = PAL.treeL; g.fillRect(x + 4, y + 2, 3, 2); g.fillRect(x + 3, y + 4, 2, 2);
  }
}
function drawBush(g, x, y) {
  g.fillStyle = 'rgba(0,0,0,.15)'; g.fillRect(x + 2, y + 12, 12, 3);
  g.fillStyle = PAL.treeD; g.fillRect(x + 2, y + 5, 12, 9);
  g.fillStyle = PAL.tree; g.fillRect(x + 3, y + 5, 10, 7);
  g.fillStyle = PAL.treeL; g.fillRect(x + 4, y + 6, 2, 1);
  g.fillStyle = '#e04848'; g.fillRect(x + 9, y + 8, 1, 1); g.fillRect(x + 6, y + 10, 1, 1);
}
function drawFlowers(g, x, y, tx, ty) {
  const cols = ['#f05050', '#f8e040', '#ffffff', '#c070f0'];
  for (let i = 0; i < 4; i++) {
    const fx = x + 2 + Math.floor(hash2(tx, ty, i) * 11), fy = y + 2 + Math.floor(hash2(tx, ty, i + 4) * 11);
    g.fillStyle = PAL.grassD; g.fillRect(fx, fy + 1, 1, 2);
    g.fillStyle = cols[Math.floor(hash2(tx, ty, i + 8) * 4)];
    g.fillRect(fx - 1, fy, 3, 1); g.fillRect(fx, fy - 1, 1, 3);
  }
}
function drawRock(g, x, y) {
  g.fillStyle = 'rgba(0,0,0,.18)'; g.fillRect(x + 2, y + 12, 12, 3);
  g.fillStyle = PAL.rockD; g.fillRect(x + 2, y + 5, 12, 9);
  g.fillStyle = PAL.rock; g.fillRect(x + 3, y + 5, 10, 7);
  g.fillStyle = PAL.rockL; g.fillRect(x + 4, y + 6, 4, 2);
}
function drawPlanks(g, x, y) {
  g.fillStyle = PAL.woodD; g.fillRect(x, y, 16, 16);
  g.fillStyle = PAL.wood;
  for (let i = 0; i < 4; i++) g.fillRect(x + 1, y + i * 4 + 1, 14, 3);
  g.fillStyle = PAL.woodL; g.fillRect(x + 2, y + 2, 4, 1); g.fillRect(x + 8, y + 10, 4, 1);
}

// ====================== Edificios ======================
function pxText(g, text, x, y, color = '#fff', size = 8, align = 'center') {
  g.font = `${size}px "Press Start 2P", monospace`;
  g.textAlign = align; g.textBaseline = 'top';
  g.fillStyle = color; g.fillText(text, x, y);
}
function sign(g, cx, y, text, bg = '#7c5028') {
  g.font = '8px "Press Start 2P", monospace';
  const w = Math.ceil(g.measureText(text).width) + 8;
  g.fillStyle = OUTLINE; g.fillRect(cx - w / 2 - 1, y - 1, w + 2, 12);
  g.fillStyle = bg; g.fillRect(cx - w / 2, y, w, 10);
  pxText(g, text, cx, y + 1, '#fff8e0');
}
function house(g, x, y, w, h, o) {
  // o: {wall, wallD, roof, roofD, door, label}
  const roofH = Math.floor(h * 0.45);
  g.fillStyle = 'rgba(0,0,0,.2)'; g.fillRect(x + 4, y + h - 2, w, 6);
  // pared
  g.fillStyle = OUTLINE; g.fillRect(x + 3, y + roofH - 2, w - 6, h - roofH + 2);
  g.fillStyle = o.wall; g.fillRect(x + 4, y + roofH - 2, w - 8, h - roofH + 1);
  g.fillStyle = o.wallD; g.fillRect(x + 4, y + h - 4, w - 8, 3);
  // techo
  g.fillStyle = OUTLINE; g.fillRect(x, y + 2, w, roofH + 1); g.fillRect(x + 4, y, w - 8, 3);
  g.fillStyle = o.roof; g.fillRect(x + 1, y + 3, w - 2, roofH - 1); g.fillRect(x + 5, y + 1, w - 10, 2);
  g.fillStyle = o.roofD;
  for (let r = y + 6; r < y + roofH + 1; r += 4) for (let c = x + 2 + ((r / 4) % 2) * 3; c < x + w - 3; c += 6) g.fillRect(c, r, 4, 1);
  g.fillRect(x + 1, y + roofH + 1, w - 2, 1);
  // puerta
  const dx = x + Math.floor(w / 2) - 6, dh = 18;
  g.fillStyle = OUTLINE; g.fillRect(dx - 1, y + h - dh - 1, 14, dh + 1);
  g.fillStyle = o.door; g.fillRect(dx, y + h - dh, 12, dh);
  g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(dx + 1, y + h - dh + 1, 4, dh - 2);
  g.fillStyle = '#f8d048'; g.fillRect(dx + 9, y + h - 9, 2, 2);
  // ventanas
  for (const wx of [x + 10, x + w - 24]) {
    g.fillStyle = OUTLINE; g.fillRect(wx - 1, y + roofH + 5, 16, 14);
    g.fillStyle = '#a8e0ff'; g.fillRect(wx, y + roofH + 6, 14, 12);
    g.fillStyle = '#ffffff'; g.fillRect(wx + 2, y + roofH + 8, 3, 3);
    g.fillStyle = o.wallD; g.fillRect(wx + 6, y + roofH + 6, 2, 12); g.fillRect(wx, y + roofH + 11, 14, 2);
  }
  if (o.label) sign(g, x + w / 2, y + roofH - 12, o.label, o.signBg);
}
function drawCross(g, cx, cy) {
  g.fillStyle = OUTLINE; g.fillRect(cx - 9, cy - 9, 18, 18);
  g.fillStyle = '#ffffff'; g.fillRect(cx - 8, cy - 8, 16, 16);
  g.fillStyle = '#e03c3c'; g.fillRect(cx - 2, cy - 6, 4, 12); g.fillRect(cx - 6, cy - 2, 12, 4);
}
function drawStall(g, x, y, w, h, label = 'TIENDA', stripe = '#e04848') {
  g.fillStyle = 'rgba(0,0,0,.2)'; g.fillRect(x + 3, y + h - 2, w, 5);
  g.fillStyle = OUTLINE; g.fillRect(x + 2, y + 10, w - 4, h - 10);
  g.fillStyle = PAL.wood; g.fillRect(x + 3, y + 11, w - 6, h - 12);
  g.fillStyle = PAL.woodD; for (let i = y + 14; i < y + h - 2; i += 4) g.fillRect(x + 3, i, w - 6, 1);
  // mostrador con productos
  g.fillStyle = OUTLINE; g.fillRect(x + 5, y + h - 16, w - 10, 10);
  g.fillStyle = PAL.woodL; g.fillRect(x + 6, y + h - 15, w - 12, 8);
  const cols = ['#f05050', '#f8e040', '#60c0f0', '#f090c0', '#80e080'];
  for (let i = 0; i < Math.floor((w - 16) / 8); i++) { g.fillStyle = cols[i % 5]; g.fillRect(x + 9 + i * 8, y + h - 19, 5, 5); }
  // toldo a franjas
  g.fillStyle = OUTLINE; g.fillRect(x, y + 2, w, 12);
  for (let i = 0; i < w - 2; i += 6) { g.fillStyle = (i / 6) % 2 ? '#ffffff' : stripe; g.fillRect(x + 1 + i, y + 3, Math.min(6, w - 2 - i), 10); }
  for (let i = 0; i < w - 2; i += 6) { g.fillStyle = (i / 6) % 2 ? '#ffffff' : stripe; g.fillRect(x + 2 + i, y + 13, 4, 2); }
  sign(g, x + w / 2, y - 9, label, stripe);
}
function drawArch(g, x, y, w, h, label) {
  // arco del parque: dos pilares y viga
  g.fillStyle = 'rgba(0,0,0,.2)'; g.fillRect(x + 2, y + h - 2, 8, 4); g.fillRect(x + w - 10, y + h - 2, 8, 4);
  for (const px of [x + 1, x + w - 9]) {
    g.fillStyle = OUTLINE; g.fillRect(px - 1, y + 4, 10, h - 4);
    g.fillStyle = PAL.rock; g.fillRect(px, y + 5, 8, h - 6);
    g.fillStyle = PAL.rockL; g.fillRect(px + 1, y + 6, 2, h - 8);
  }
  g.fillStyle = OUTLINE; g.fillRect(x - 2, y, w + 4, 10);
  g.fillStyle = PAL.wood; g.fillRect(x - 1, y + 1, w + 2, 8);
  pxText(g, label, x + w / 2, y + 1, '#fff8e0');
  // enredadera
  g.fillStyle = PAL.treeL; for (let i = 0; i < w; i += 5) g.fillRect(x + i, y + 9 + (i % 3), 2, 2);
}
function drawCave(g, x, y, w, h, label = 'BOSQUE', crystals = false) {
  // entrada al bosque: rocas con boca oscura
  g.fillStyle = OUTLINE; g.fillRect(x, y + 4, w, h - 4); g.fillRect(x + 6, y, w - 12, 6);
  g.fillStyle = PAL.rockD; g.fillRect(x + 1, y + 5, w - 2, h - 6); g.fillRect(x + 7, y + 1, w - 14, 5);
  g.fillStyle = PAL.rock; g.fillRect(x + 3, y + 5, w - 6, 6); g.fillRect(x + 9, y + 2, w - 18, 4);
  g.fillStyle = PAL.rockL; g.fillRect(x + 6, y + 6, 6, 2); g.fillRect(x + w - 16, y + 4, 4, 2);
  const mw = 22, mx = x + w / 2 - mw / 2;
  g.fillStyle = '#100808'; g.fillRect(mx, y + h - 22, mw, 22); g.fillRect(mx + 3, y + h - 25, mw - 6, 3);
  g.fillStyle = '#2c1c24'; g.fillRect(mx + 2, y + h - 20, mw - 4, 2);
  if (crystals) for (let i = 0; i < 4; i++) { g.fillStyle = i % 2 ? '#80f0ff' : '#c0a0ff'; g.fillRect(mx - 6 + i * 9 + (i > 1 ? 14 : 0), y + h - 8, 3, 6); }
  sign(g, x + w / 2, y - 6, label, label === 'BOSQUE' ? '#3c6a3c' : '#5a4c8c');
}
function drawFountain(g, x, y, w, h) {
  g.fillStyle = OUTLINE; g.fillRect(x + 1, y + 1, w - 2, h - 2);
  g.fillStyle = PAL.rockL; g.fillRect(x + 2, y + 2, w - 4, h - 4);
  g.fillStyle = PAL.water; g.fillRect(x + 5, y + 5, w - 10, h - 10);
  g.fillStyle = PAL.rock; g.fillRect(x + w / 2 - 3, y + h / 2 - 6, 6, 10);
  g.fillStyle = PAL.waterL; g.fillRect(x + w / 2 - 1, y + h / 2 - 10, 2, 5);
}
function drawBench(g, x, y) {
  g.fillStyle = OUTLINE; g.fillRect(x, y + 4, 26, 8);
  g.fillStyle = PAL.wood; g.fillRect(x + 1, y + 5, 24, 3); g.fillRect(x + 1, y + 9, 24, 2);
  g.fillStyle = '#505058'; g.fillRect(x + 2, y + 11, 2, 4); g.fillRect(x + 22, y + 11, 2, 4);
}

// ====================== Objetos ======================
function boneSprite() {
  const c = mkCanvas(9, 7), g = c.getContext('2d');
  g.fillStyle = '#fff8e8';
  g.fillRect(1, 1, 2, 2); g.fillRect(1, 4, 2, 2); g.fillRect(6, 1, 2, 2); g.fillRect(6, 4, 2, 2); g.fillRect(2, 2, 5, 3);
  g.fillStyle = '#e0d0b0'; g.fillRect(3, 4, 3, 1);
  return addOutline(c);
}
const BONE = boneSprite();

function iconBubble(g, x, y, kind) {
  // globito de aviso sobre los lugares: '!' rojo, candado o estrella
  const w = 12, h = 12;
  g.fillStyle = OUTLINE; g.fillRect(x - w / 2 - 1, y - 1, w + 2, h + 2); g.fillRect(x - 2, y + h, 4, 3);
  g.fillStyle = '#ffffff'; g.fillRect(x - w / 2, y, w, h); g.fillRect(x - 1, y + h, 2, 2);
  if (kind === '!') { g.fillStyle = '#e03c3c'; g.fillRect(x - 1, y + 2, 2, 5); g.fillRect(x - 1, y + 8, 2, 2); }
  else if (kind === 'lock') { g.fillStyle = '#707080'; g.fillRect(x - 3, y + 2, 6, 3); g.fillStyle = '#ffffff'; g.fillRect(x - 1, y + 3, 2, 2); g.fillStyle = '#c09030'; g.fillRect(x - 4, y + 5, 8, 5); }
  else if (kind === 'star') { g.fillStyle = '#f0b820'; g.fillRect(x - 1, y + 2, 2, 8); g.fillRect(x - 4, y + 5, 8, 2); g.fillRect(x - 2, y + 4, 4, 4); }
}

function emojiBubble(g, x, y, emoji) {
  const w = 18, h = 17;
  g.fillStyle = OUTLINE; g.fillRect(x - w / 2 - 1, y - 1, w + 2, h + 2); g.fillRect(x - 2, y + h, 4, 3);
  g.fillStyle = '#ffffff'; g.fillRect(x - w / 2, y, w, h); g.fillRect(x - 1, y + h, 2, 2);
  g.font = '12px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(emoji, x, y + h / 2 + 1);
}
function drawHeart(g, x, y, full) {
  const c = full ? '#e8457a' : '#5a4050';
  g.fillStyle = OUTLINE; g.fillRect(x, y + 1, 9, 4); g.fillRect(x + 1, y, 3, 7); g.fillRect(x + 5, y, 3, 7); g.fillRect(x + 2, y + 6, 5, 2); g.fillRect(x + 3, y + 8, 3, 1);
  g.fillStyle = c; g.fillRect(x + 1, y + 1, 3, 4); g.fillRect(x + 5, y + 1, 3, 4); g.fillRect(x + 2, y + 4, 5, 2); g.fillRect(x + 3, y + 6, 3, 1); g.fillRect(x + 4, y + 7, 1, 1);
  if (full) { g.fillStyle = '#ffc0d8'; g.fillRect(x + 2, y + 2, 1, 1); }
}

// ====================== Ampliación del pueblo ======================
// Cerca de madera en una casilla (conecta con las vecinas)
function drawFence(g, x, y, l, r, u, d, col = PAL.wood) {
  g.fillStyle = OUTLINE; g.fillRect(x + 6, y + 3, 4, 12);
  g.fillStyle = col; g.fillRect(x + 7, y + 4, 2, 10);
  const rail = (rx, ry, w, h) => { g.fillStyle = OUTLINE; g.fillRect(rx, ry - 1, w, h + 2); g.fillStyle = col; g.fillRect(rx, ry, w, h); };
  if (l) { rail(x, y + 6, 8, 2); rail(x, y + 10, 8, 2); }
  if (r) { rail(x + 8, y + 6, 8, 2); rail(x + 8, y + 10, 8, 2); }
  if (u) { g.fillStyle = col; g.fillRect(x + 7, y, 2, 4); }
  if (d) { g.fillStyle = col; g.fillRect(x + 7, y + 14, 2, 2); }
}
function drawTent(g, x, y, w, h) {
  g.fillStyle = 'rgba(0,0,0,.2)'; g.fillRect(x + 3, y + h - 2, w, 5);
  g.fillStyle = OUTLINE; g.beginPath(); g.moveTo(x + w / 2, y - 2); g.lineTo(x + w + 1, y + h); g.lineTo(x - 1, y + h); g.closePath(); g.fill();
  g.fillStyle = '#e8a040'; g.beginPath(); g.moveTo(x + w / 2, y); g.lineTo(x + w - 1, y + h - 1); g.lineTo(x + 1, y + h - 1); g.closePath(); g.fill();
  g.fillStyle = '#c07820'; g.fillRect(x + w / 2 - 1, y + 2, 2, h - 3);
  g.fillStyle = '#5a3a20'; g.beginPath(); g.moveTo(x + w / 2, y + h * 0.4); g.lineTo(x + w / 2 + 7, y + h - 1); g.lineTo(x + w / 2 - 7, y + h - 1); g.closePath(); g.fill();
}
function drawTower(g, x, y, w, h) {
  g.fillStyle = 'rgba(0,0,0,.2)'; g.fillRect(x + 4, y + h - 2, w, 6);
  g.fillStyle = OUTLINE; g.fillRect(x + 2, y + 8, w - 4, h - 8); g.fillRect(x - 1, y + 2, w + 2, 9);
  g.fillStyle = '#c8c0b0'; g.fillRect(x + 3, y + 9, w - 6, h - 10);
  g.fillStyle = '#a89c8c'; for (let r = y + 13; r < y + h - 2; r += 6) g.fillRect(x + 3, r, w - 6, 1);
  g.fillStyle = '#9a8a78'; g.fillRect(x, y + 3, w, 7);
  for (let i = 0; i < w; i += 6) { g.fillStyle = OUTLINE; g.fillRect(x + i, y - 2, 4, 5); g.fillStyle = '#9a8a78'; g.fillRect(x + i + 1, y - 1, 2, 4); }
  g.fillStyle = '#6a4a2a'; g.fillRect(x + w / 2 - 4, y + h - 13, 8, 12);
  g.fillStyle = OUTLINE; g.fillRect(x + w / 2, y - 14, 1, 12); g.fillStyle = '#f04848'; g.fillRect(x + w / 2 + 1, y - 14, 8, 5);
  sign(g, x + w / 2, y + 12, 'MIRADOR', '#7c5028');
}
function drawPillar(g, x, y, h) {
  g.fillStyle = 'rgba(0,0,0,.2)'; g.fillRect(x + 1, y + 14, 14, 3);
  g.fillStyle = OUTLINE; g.fillRect(x + 3, y + 15 - h, 10, h + 1);
  g.fillStyle = '#e0d8c8'; g.fillRect(x + 4, y + 16 - h, 8, h - 1);
  g.fillStyle = '#c0b8a8'; g.fillRect(x + 10, y + 16 - h, 2, h - 1);
}
function chestSprite(open) {
  const c = mkCanvas(14, 12), g = c.getContext('2d');
  const px = (x, y, col, w = 1, h = 1) => { g.fillStyle = col; g.fillRect(x + 1, y + 1, w, h); };
  px(0, 4, '#8a5a2a', 12, 6); px(0, 7, '#6a4020', 12, 1); px(5, 5, '#ffd23f', 2, 3);
  if (open) { px(0, 0, '#d4a020', 12, 2); px(1, 2, '#f8e060', 10, 2); } else px(0, 2, '#d4a020', 12, 3);
  return addOutline(c);
}
const CHEST_SPR = [chestSprite(false), chestSprite(true)];
function bunnySprite(frame = 0) {
  const c = mkCanvas(12, 11), g = c.getContext('2d');
  const px = (x, y, col, w = 1, h = 1) => { g.fillStyle = col; g.fillRect(x + 1, y + 1, w, h); };
  px(1, 4 - frame, '#f4f0ea', 6, 4); px(6, 2 - frame, '#f4f0ea', 4, 4); px(7, 0 - frame, '#f4f0ea', 1, 3); px(9, 0 - frame, '#f4f0ea', 1, 3);
  px(8, 3 - frame, INK); px(0, 5 - frame, '#ffffff', 2, 2); px(2, 8 - frame, '#e0d8d0', 2, 1); px(5, 8 - frame, '#e0d8d0', 2, 1);
  return addOutline(c);
}
const BUNNY_SPR = [bunnySprite(0), bunnySprite(1)];
