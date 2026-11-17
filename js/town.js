'use strict';
/* Ampliación del mapa 2D: perros del pueblo, corral del refugio, parque para perros y Valle Aventura.
   Las reglas (misiones, saludos, tiendas) viven en js/extras.js y son las mismas que en el 3D. */

const tc = (tx, ty) => ({ x: tx * TILE + 8, y: ty * TILE + 10 });   // centro de una casilla (pies)
const inDogPark = (x, y) => x > (DOGPARK2.x0 + 1) * TILE && x < DOGPARK2.x1 * TILE && y > (DOGPARK2.y0 + 1) * TILE && y < DOGPARK2.y1 * TILE;
const inValley2 = (x, y) => x > (VALLEY2.x0 + 1) * TILE && y > (VALLEY2.y0 + 1) * TILE;
const freeAt = (x, y) => !solidAt(x - 4, y - 3) && !solidAt(x + 4, y - 3) && !solidAt(x - 4, y + 2) && !solidAt(x + 4, y + 2);

// ---------- Fondo: edificios y adornos nuevos ----------
function drawExpansionBg(g) {
  const R = id => PLACES.find(p => p.id === id).rect.map(v => v * TILE);
  let [x, y, w, h] = R('peluqueria');
  house(g, x, y - 16, w, h + 16, { wall: '#e8f4ff', wallD: '#c0d4e8', roof: '#9b7bff', roofD: '#7a5ce0', door: '#7a5ce0', label: 'PELUQUERIA', signBg: '#7a5ce0' });
  [x, y, w, h] = R('heladeria');
  drawStall(g, x, y - 8, w, h + 8, 'HELADOS', '#40a8d8');
  [x, y, w, h] = R('panaderia');
  house(g, x, y - 16, w, h + 16, { wall: '#ffe9cc', wallD: '#e0c098', roof: '#d9824a', roofD: '#a0582c', door: '#a0582c', label: 'PASTELERIA', signBg: '#a0582c' });
  [x, y, w, h] = R('biblioteca');
  house(g, x, y - 16, w, h + 16, { wall: '#f0e6ff', wallD: '#c8b8e0', roof: '#4f6fd8', roofD: '#3a4fa8', door: '#3a4fa8', label: 'BIBLIOTECA', signBg: '#3a4fa8' });
  [x, y, w, h] = R('refugio');
  house(g, x, y - 16, w, h + 16, { wall: '#fff0e0', wallD: '#e0c8a8', roof: '#5cbf5a', roofD: '#3c8c3c', door: '#3c8c3c', label: 'REFUGIO', signBg: '#3c8c3c' });
  // parque para perros: arco, túnel, bebedero y conos
  const D = DOGPARK2;
  drawArch(g, D.gate * TILE - 6, D.y0 * TILE - 14, 2 * TILE + 12, 24, 'PERROS');
  g.fillStyle = OUTLINE; g.fillRect(24 * TILE, 41 * TILE + 2, 3 * TILE, 14);
  g.fillStyle = '#ff6b8b'; g.fillRect(24 * TILE + 1, 41 * TILE + 3, 3 * TILE - 2, 12);
  g.fillStyle = '#1c1010'; g.fillRect(24 * TILE + 1, 41 * TILE + 5, 4, 8); g.fillRect(27 * TILE - 5, 41 * TILE + 5, 4, 8);
  drawFountain(g, 34 * TILE - 2, 35 * TILE - 2, 20, 20);
  for (let i = 0; i < 4; i++) { const cx = (25 + i * 2) * TILE + 6, cy = 37 * TILE + 4; g.fillStyle = OUTLINE; g.fillRect(cx - 1, cy - 1, 6, 9); g.fillStyle = '#ff9f43'; g.fillRect(cx, cy, 4, 7); g.fillStyle = '#ffffff'; g.fillRect(cx, cy + 3, 4, 1); }
  drawBench(g, 31 * TILE, 42 * TILE);
  // Valle Aventura
  const V = VALLEY2;
  drawArch(g, V.x0 * TILE - 6, (V.gateY - 1) * TILE - 4, TILE + 12, 26, 'VALLE');
  drawTent(g, V.tent[0] * TILE, V.tent[1] * TILE - 8, V.tent[2] * TILE, V.tent[3] * TILE + 8);
  { const fx = 60 * TILE, fy = 28 * TILE; g.fillStyle = '#7a4a24'; g.fillRect(fx + 2, fy + 10, 12, 3); g.fillRect(fx + 6, fy + 7, 4, 7); }
  drawTower(g, V.tower[0] * TILE, V.tower[1] * TILE - 18, V.tower[2] * TILE, V.tower[3] * TILE + 18);
  drawCave(g, V.cave[0] * TILE - 4, V.cave[1] * TILE - 10, V.cave[2] * TILE + 8, V.cave[3] * TILE + 10, 'CUEVA', true);
  for (const [px, py] of [[59, 48], [61, 47], [63, 48], [55, 47]]) drawPillar(g, px * TILE, py * TILE, 10 + ((px * 7) % 3) * 5);
  sign(g, 60 * TILE, 44 * TILE + 2, 'RUINAS', '#7c5028');
  // corral del refugio
  sign(g, ((PEN2.x0 + PEN2.x1) / 2) * TILE + 8, PEN2.y0 * TILE - 12, 'ADOPTAME', '#3c8c3c');
}

// ---------- Perros del pueblo (mismos nombres y caracteres que en el 3D) ----------
const DOG_POS2 = {
  toby: { route: [[6, 10], [30, 10]] }, rocco: { route: [[46, 10], [78, 10]] }, nube: { route: [[7, 30], [26, 30]] },
  canela: { home: [9, 22], r: 3 }, bruno: { home: [4, 41], r: 3 }, pipo: { home: [45, 27], r: 3 }, max: { home: [48, 17], r: 3 },
  kira: { home: [46, 38], r: 3 }, coco: { home: [26, 38], r: 4 }, lola: { home: [30, 40], r: 4 }, thor: { home: [32, 37], r: 4 }, sol: { home: [62, 22], r: 3 },
};
const dogSize2 = D => (D.size < 0.6 ? 1 : D.size < 0.95 ? 2 : D.size < 1.2 ? 3 : 4);
const town2 = { dogs: [], shelter: [], bunnies: [], items: [], itemsDay: -1, kidStill: 0, msgT: 0, kpx: 0, kpy: 0 };
function initTown2() {
  if (town2.dogs.length) return;
  for (const D of DOG_DEFS) {
    const P = DOG_POS2[D.id], dg = { def: D, P, x: 0, y: 0, tx: 0, ty: 0, face: 1, wait: Math.random() * 2, moving: false, anim: 0, growlT: 0, happyT: 0, fleeT: 0, near: false, asked: false };
    if (P.route) { const a = tc(...P.route[0]); dg.owner = { x: a.x, y: a.y, wi: 1, face: 1, moving: false, anim: 0 }; dg.x = a.x - 14; dg.y = a.y; }
    else { const a = tc(...P.home); dg.x = dg.tx = a.x; dg.y = dg.ty = a.y; }
    town2.dogs.push(dg);
  }
  SHELTER_LOOKS.forEach((look, i) => { const a = tc(PEN2.x0 + 2 + i * 1.5, PEN2.y0 + 1.6); town2.shelter.push({ look, size: 1 + (i % 2), x: a.x, y: a.y, ph: i * 2, happyT: 0 }); });
  const r = seeded(4242);
  for (let i = 0; i < 3; i++) { const a = valleyTile2(r, i === 2); town2.bunnies.push({ x: a.x, y: a.y, tx: a.x, ty: a.y, wait: 1 + i, hop: 0, face: 1, met: false }); }
}
function pickDogTarget2(dg) {
  const P = dg.P;
  for (let i = 0; i < 20; i++) {
    const a = tc(P.home[0] + (Math.random() * 2 - 1) * P.r, P.home[1] + (Math.random() * 2 - 1) * P.r);
    if (!freeAt(a.x, a.y) || (dg.def.park && !inDogPark(a.x, a.y))) continue;
    dg.tx = a.x; dg.ty = a.y; return;
  }
  const a = tc(...P.home); dg.tx = a.x; dg.ty = a.y;
}
function updateTown2(p, dt) {
  initTown2();
  updateBuddy2(p, dt);
  const K = world.kid, L = world.luna;
  const kidMoving = Math.hypot(K.x - town2.kpx, K.y - town2.kpy) > 0.05;
  town2.kpx = K.x; town2.kpy = K.y;
  town2.kidStill = kidMoving ? 0 : town2.kidStill + dt;
  town2.msgT -= dt;
  const lunaOut = !p.asleep && !world.hide;
  for (const dg of town2.dogs) {
    const D = dg.def;
    let gx = null, gy = null, spd = 30 + D.size * 22;
    dg.growlT -= dt; dg.happyT -= dt; dg.fleeT -= dt;
    if (dg.owner) {   // el dueño camina su ruta; se detiene si el avatar está cerca
      const o = dg.owner, w = tc(...dg.P.route[o.wi]), dx = w.x - o.x, dy = w.y - o.y, dd = Math.hypot(dx, dy);
      const stop = Math.hypot(K.x - o.x, K.y - o.y) < 30 || dg.happyT > 0;
      o.moving = false;
      if (dd < 2) o.wi = (o.wi + 1) % dg.P.route.length;
      else if (!stop) { const s = Math.min(dd, 26 * dt); o.x += dx / dd * s; o.y += dy / dd * s; o.face = Math.sign(dx) || o.face; o.moving = true; o.anim += s; }
      else o.face = Math.sign(K.x - o.x) || o.face;
      gx = o.x - o.face * 16; gy = o.y + 2; spd = 32;
    } else {
      const toLuna = lunaOut ? Math.hypot(L.x - dg.x, L.y - dg.y) : 999, toKid = Math.hypot(K.x - dg.x, K.y - dg.y);
      if (D.mood === 'shy' && toKid < 44 && kidMoving && dg.fleeT <= 0) {   // el tímido se aleja si llegas corriendo
        const a = Math.atan2(dg.y - K.y, dg.x - K.x), nx = dg.x + Math.cos(a) * 44, ny = dg.y + Math.sin(a) * 44;
        if (freeAt(nx, ny)) { dg.tx = nx; dg.ty = ny; dg.fleeT = 2.5; dg.wait = 0; }
      }
      if (D.mood === 'friendly' && !D.park && toLuna < 70 && toLuna > 20 && dg.happyT <= 0) { dg.tx = L.x + 14; dg.ty = L.y; }
      if (dg.wait > 0) dg.wait -= dt; else { gx = dg.tx; gy = dg.ty; }
      if (dg.fleeT > 0) spd *= 2;
    }
    dg.moving = false;
    if (gx !== null) {
      const dx = gx - dg.x, dy = gy - dg.y, dd = Math.hypot(dx, dy);
      if (dd > 2) {
        const s = Math.min(dd, spd * dt), nx = dg.x + dx / dd * s, ny = dg.y + dy / dd * s;
        if (dg.owner || freeAt(nx, ny)) { dg.x = nx; dg.y = ny; dg.moving = true; dg.anim += s; if (Math.abs(dx) > 0.5) dg.face = Math.sign(dx); }
        else { pickDogTarget2(dg); dg.wait = 0.5; }
      } else if (!dg.owner) { pickDogTarget2(dg); dg.wait = 1 + Math.random() * 3; }
    }
    // perro enojón: gruñe si el avatar o Luna entran en su círculo (sin morder: es un aviso)
    if (D.mood === 'grumpy') {
      const d = Math.min(Math.hypot(K.x - dg.x, K.y - dg.y), lunaOut ? Math.hypot(L.x - dg.x, L.y - dg.y) : 999);
      if (d < 40 && dg.growlT <= 0 && state.mode === 'world') {
        dg.growlT = 4; dogSound('bark', 4, 0.7);
        world.floaters.push({ x: dg.x, y: dg.y - 26, t: 0, txt: 'grr' });
        const say = dogGrowl(p, D, town2.msgT <= 0);
        if (say) { town2.msgT = 12; speak(say); pop('⚠️', D.name); }
        refreshHUD();
      }
    }
    const close = Math.hypot(K.x - dg.x, K.y - dg.y) < 40;
    if (close && !dg.near && state.mode === 'world') showToast(dogLabel(D, p));
    dg.near = close;
  }
  for (const s of town2.shelter) { s.ph += dt; s.happyT -= dt; s.x = (PEN2.x0 + 3.5) * TILE + Math.sin(s.ph * 0.5) * 30; }
  updateValley2(p, dt);
}
function nearestDog2(maxD, filter) {
  const K = world.kid;
  let best = null, bd = maxD;
  for (const dg of town2.dogs) { if (filter && !filter(dg)) continue; const d = Math.hypot(K.x - dg.x, K.y - dg.y); if (d < bd) { bd = d; best = dg; } }
  return best;
}
// Avance o fin de una misión: tarjeta y voz (igual que el 3D)
function showQuest2(r) {
  if (!r) return;
  if (r.done) {
    sfx('win'); spawnValley2(current.pet, true);
    state.mode = 'panel';
    showCard(questDoneHTML(r.done), '', () => { state.mode = 'world'; updatePrompt(); refreshGuide(); });
    setTimeout(() => speak(r.done.say), 300);
  } else { pop(r.def.icon, `${r.n}/${r.need}`); speak(`¡Bien! Llevas ${r.n} de ${r.need}.`); }
  refreshHUD();
}
function greetDog2(dg) {
  const p = current.pet, D = dg.def;
  const r = greetDog(p, D, { asked: dg.asked, kidStill: town2.kidStill, lunaThere: !p.asleep && !world.hide });
  dg.asked = r.asked;
  if (r.happy) {
    dg.happyT = 2.5; dg.wait = 2.5; dg.face = Math.sign(world.kid.x - dg.x) || 1;
    for (let i = 0; i < 3; i++) world.floaters.push({ x: dg.x - 8 + i * 8, y: dg.y - 22 - i * 4, t: -i * 0.12, txt: '♥' });
    dogSound('happy', dogSize2(D), 0.7);
  }
  pop(r.friend && r.friend.up ? '💚' : r.icon, r.friend && r.friend.gift ? '🦴 +5' : r.sub); speak(r.say);
  saveRoot(); refreshHUD();
  if (r.quest) setTimeout(() => showQuest2(r.quest), 1200);
}

// ---------- Perrito adoptado: sigue a Luna ----------
const buddy2 = { x: 0, y: 0, face: 1, anim: 0, moving: false, on: false };
function updateBuddy2(p, dt) {
  const L = world.luna, b = buddy2;
  if (!p.buddy || p.asleep || world.hide) { b.on = false; return; }
  if (!b.on) { b.on = true; b.x = L.x - 14; b.y = L.y + 4; }
  const tx = L.x - L.face * 16, ty = L.y + 5, dx = tx - b.x, dy = ty - b.y, d = Math.hypot(dx, dy);
  b.moving = d > 3;
  if (b.moving) { const s = Math.min(d, (d > 40 ? 160 : 70) * dt); b.x += dx / d * s; b.y += dy / d * s; b.anim += s; if (Math.abs(dx) > 1) b.face = Math.sign(dx); }
}
function drawBuddy2(ctx, cx, cy, drawables) {
  const p = current.pet, b = buddy2;
  if (!b.on) return;
  drawables.push({ y: b.y, d: () => {
    ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(Math.round(b.x - 6 - cx), Math.round(b.y - cy), 12, 2);
    drawDog(ctx, dogSprite({ look: buddyLook(p), size: 1, pose: b.moving ? 'walk' : 'stand', frame: Math.floor(b.anim / 6) % 2, collar: collarColor(p) }), b.x - cx, b.y + 1 - cy, b.face < 0);
  } });
}

// ---------- Valle Aventura ----------
function valleyTile2(r, south) {
  for (let i = 0; i < 300; i++) {
    const tx = VALLEY2.x0 + 2 + Math.floor(r() * (MAP_W - VALLEY2.x0 - 3));
    const ty = south ? VALLEY2.riverY + 3 + Math.floor(r() * (MAP_H - VALLEY2.riverY - 4)) : VALLEY2.y0 + 2 + Math.floor(r() * (MAP_H - VALLEY2.y0 - 3));
    const t = tileAt(tx, ty);
    if ((t === T.GRASS || t === T.FLOWER || t === T.PATH) && Math.abs(ty - VALLEY2.riverY) > 2) return tc(tx, ty);
  }
  return tc(62, 32);
}
// Objetos del día: mismas ids que en el 3D (lo que se recoge en una versión no aparece en la otra)
function spawnValley2(p, force) {
  if (!force && town2.itemsDay === p.day && town2.itemsN === rpgOf(p).got.length) return;
  town2.itemsDay = p.day;
  const r = seeded(p.bornAt % 100003 + p.day * 6151 + 11), spots = {};
  for (let i = 0; i < 7; i++) spots['s' + i] = valleyTile2(r, i >= 5);
  for (let i = 0; i < 4; i++) spots['f' + i] = valleyTile2(r, i >= 2);
  const keySpot = valleyTile2(r, true);
  // rastro de huellas: cada una cerca de la anterior
  const trail = [valleyTile2(r, false)];
  for (let i = 1; i < TRACK_N; i++) { let q = null; for (let k = 0; k < 40 && !q; k++) { const c = valleyTile2(r, r() < 0.4), d = Math.hypot(c.x - trail[i - 1].x, c.y - trail[i - 1].y); if (d > 60 && d < 150) q = c; } trail.push(q || valleyTile2(r, false)); }
  town2.items = valleyItemList(p).map(([id, item]) => ({ id, item, ...(item === 'cristal' ? tc(78, 46) : item === 'llave' ? keySpot : item === 'huella' ? trail[+id.slice(1)] : spots[id]) }));
  town2.itemsN = rpgOf(p).got.length;
}
function updateValley2(p, dt) {
  spawnValley2(p);
  const K = world.kid, L = world.luna, lunaOut = !p.asleep && !world.hide;
  for (let i = town2.items.length - 1; i >= 0; i--) {
    const v = town2.items[i];
    if (Math.hypot(v.x - K.x, v.y - K.y) < 11 || (lunaOut && Math.hypot(v.x - L.x, v.y - L.y) < 10)) {
      town2.items.splice(i, 1);
      sfx('coin'); world.floaters.push({ x: v.x, y: v.y - 10, t: 0, txt: '+1' });
      const r = pickValleyItem(p, v.id, v.item);
      town2.itemsN = rpgOf(p).got.length;
      if (r.say) { pop(r.icon, r.sub); speak(r.say); }
      saveRoot(); refreshHUD();
      showQuest2(r.quest);
    }
  }
  const M = tc(78, 29);
  const atM = Math.hypot(K.x - M.x, K.y - M.y) < 20;
  if (atM && !town2.atMirador && state.mode === 'world') {   // solo al llegar, no cada cuadro
    town2.atMirador = true;
    const r = visitMirador(p);
    if (r) { if (r.first) { pop('🗼', '👀'); speak(r.say); } saveRoot(); refreshHUD(); showQuest2(r.quest); }
  } else if (!atM) town2.atMirador = false;
  for (const b of town2.bunnies) {
    b.wait -= dt;
    if (b.wait <= 0) {
      const dx = b.tx - b.x, dy = b.ty - b.y, d = Math.hypot(dx, dy);
      if (d < 1) { const a = valleyTile2(Math.random, b.y > (VALLEY2.riverY + 1) * TILE); if (Math.hypot(a.x - b.x, a.y - b.y) < 90) { b.tx = a.x; b.ty = a.y; } b.wait = 1 + Math.random() * 2.5; }
      else { const s = Math.min(d, 30 * dt); b.x += dx / d * s; b.y += dy / d * s; b.hop += dt * 9; if (Math.abs(dx) > 0.3) b.face = Math.sign(dx); }
    }
    const dk = Math.hypot(K.x - b.x, K.y - b.y);
    if (dk < 20 && !b.met) { b.met = true; world.floaters.push({ x: b.x, y: b.y - 16, t: 0, txt: '♥' }); sfx('tick'); }
    if (dk > 60) b.met = false;
  }
}
function openChest2() {
  const p = current.pet, r = openChest(p);
  pop(r.icon, r.sub); speak(r.say); if (r.opened) sfx('win');
  saveRoot(); refreshHUD();
  if (r.quest) setTimeout(() => showQuest2(r.quest), 1200);
}
// Algo con lo que interactuar con A: el cofre o un perro cercano
function nearThing2() {
  const K = world.kid, C = tc(...VALLEY2.chest);
  if (Math.hypot(K.x - C.x, K.y - (C.y + 14)) < 22) return { icon: '🗝️📦', label: 'Cofre', run: openChest2 };
  const dg = nearestDog2(26);
  if (dg) return { icon: (dg.def.mood === 'grumpy' ? '⚠️ ' : dg.def.owner && !dg.asked ? '🙋 ' : '👋 ') + '🐕', label: dg.def.name, warn: dg.def.mood === 'grumpy', run: () => greetDog2(dg) };
  return null;
}
// Objetivo de una idea de Pío → posición en píxeles
function target2(p, kind) {
  const K = world.kid;
  if (kind === 'dog') { const dg = nearestDog2(1e9, x => x.def.mood !== 'grumpy' && !(today(p).dogs || {})[x.def.id]); return dg && { x: dg.x, y: dg.y }; }
  if (kind === 'mirador') return tc(78, 29);
  if (kind === 'chest') return { x: tc(...VALLEY2.chest).x, y: tc(...VALLEY2.chest).y + 16 };
  const item = kind.slice(5);
  let best = null, bd = Infinity;
  for (const v of town2.items) { if (v.item !== item) continue; const d = Math.hypot(v.x - K.x, v.y - K.y); if (d < bd) { bd = d; best = v; } }
  return best && { x: best.x, y: best.y };
}

// ---------- Dibujo (encima del fondo, ordenado por altura) ----------
function drawTown2(ctx, cx, cy, t, drawables) {
  const p = current.pet, R = rpgOf(p), W = view.w, H = view.h;
  const vis = (x, y) => x - cx > -40 && x - cx < W + 40 && y - cy > -40 && y - cy < H + 40;
  drawBuddy2(ctx, cx, cy, drawables);
  // objetos del valle
  for (const v of town2.items) if (vis(v.x, v.y)) emojiBubble(ctx, Math.round(v.x - cx), Math.round(v.y - cy - 20 + Math.sin(t * 3 + v.x) * 2), VALLEY_ITEMS[v.item].icon);
  // cofre
  { const C = tc(...VALLEY2.chest); if (vis(C.x, C.y)) drawables.push({ y: C.y, d: () => drawDog(ctx, CHEST_SPR[R.chestDay === p.day ? 1 : 0], C.x - cx, C.y - cy + 2, false) }); }
  // guardabosques
  { const g = tc(...VALLEY2.ranger); if (vis(g.x, g.y)) drawables.push({ y: g.y, d: () => { drawDog(ctx, kidSprite('🧑', 'down', false, 0), g.x - cx, g.y + 1 - cy, false); ctx.fillStyle = OUTLINE; ctx.fillRect(Math.round(g.x - cx - 8), Math.round(g.y - cy - 21), 16, 4); ctx.fillStyle = '#8a6a3a'; ctx.fillRect(Math.round(g.x - cx - 7), Math.round(g.y - cy - 20), 14, 2); ctx.fillRect(Math.round(g.x - cx - 4), Math.round(g.y - cy - 24), 8, 4); } }); }
  // fogata
  { const F = tc(60, 28); if (vis(F.x, F.y)) { const f = Math.floor(t * 8) % 2; ctx.fillStyle = '#ff8c1a'; ctx.fillRect(Math.round(F.x - cx - 3), Math.round(F.y - cy - 10 - f), 6, 6 + f); ctx.fillStyle = '#ffd23f'; ctx.fillRect(Math.round(F.x - cx - 1), Math.round(F.y - cy - 7), 2, 3); } }
  // conejitos
  for (const b of town2.bunnies) if (vis(b.x, b.y)) drawables.push({ y: b.y, d: () => drawDog(ctx, BUNNY_SPR[b.wait > 0 ? 0 : Math.floor(b.hop) % 2], b.x - cx, b.y - cy - (b.wait > 0 ? 0 : Math.abs(Math.sin(b.hop)) * 3), b.face < 0) });
  // perritos del refugio
  for (const s of town2.shelter) if (vis(s.x, s.y)) drawables.push({ y: s.y, d: () => drawDog(ctx, dogSprite({ look: s.look, size: s.size, pose: s.happyT > 0 ? 'jump' : 'walk', frame: Math.floor(t * 6 + s.ph) % 2 }), s.x - cx, s.y - cy, Math.cos(s.ph * 0.5) < 0) });
  // perros del pueblo, con su indicador y (los enojones) círculo rojo de peligro
  for (const dg of town2.dogs) {
    const D = dg.def;
    if (!vis(dg.x, dg.y)) continue;
    if (D.mood === 'grumpy') {
      ctx.strokeStyle = dg.growlT > 2.5 ? 'rgba(255,30,30,.95)' : `rgba(255,30,30,${0.5 + Math.sin(t * 4) * 0.15})`; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.ellipse(Math.round(dg.x - cx), Math.round(dg.y - cy - 2), 40, 26, 0, 0, Math.PI * 2); ctx.stroke();
    }
    const size = dogSize2(D);
    drawables.push({ y: dg.y, d: () => {
      ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(Math.round(dg.x - 7 - cx), Math.round(dg.y - cy), 14, 2);
      drawDog(ctx, dogSprite({ look: D.look, ears: D.ears, size, pose: dg.happyT > 0 ? 'jump' : dg.moving ? 'walk' : 'stand', frame: Math.floor(dg.anim / 6) % 2, collar: !!(D.owner || D.park), sad: D.mood === 'grumpy' && dg.growlT > 2.8 }), dg.x - cx, dg.y + 1 - cy, dg.face < 0);
      if (Math.hypot(world.kid.x - dg.x, world.kid.y - dg.y) < 200) emojiBubble(ctx, Math.round(dg.x - cx), Math.round(dg.y - cy - 22 - size * 3 + Math.sin(t * 3 + D.size * 5) * 1.5), DOG_MOOD[D.mood].icon);
    } });
    if (dg.owner) {
      const o = dg.owner;
      drawables.push({ y: o.y, d: () => {
        ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(Math.round(o.x - 6 - cx), Math.round(o.y - cy), 12, 3);
        drawDog(ctx, kidSprite(D.owner.avatar, 'side', o.moving, Math.floor(o.anim / 7) % 2), o.x - cx, o.y + 1 - cy, o.face < 0);
        const Dd = DOG_DIMS[size];
        drawLeash(ctx, Math.round(o.x - cx - o.face * 3), Math.round(o.y - cy - 8), Math.round(dg.x + dg.face * (Dd.bw - 8) - cx), Math.round(dg.y - Dd.leg - Dd.bh + 2 - cy));
      } });
    }
  }
}
