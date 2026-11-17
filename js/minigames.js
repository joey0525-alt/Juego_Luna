'use strict';
/* Minijuegos: plataformas (Bosque), atrapar la pelota (Parque), trucos (Escuela), baño (Casa). */

let mg = null;
function cancelIntro() { mg = null; state.mode = 'world'; updatePrompt(); }
// Instrucciones con pictogramas: [qué haces, qué pasa]
function introHTML(icon, rows) {
  return `<div class="intro"><div class="intro-ic">${icon}</div>
    <div class="howto">${rows.map(([a, b]) => `<div><span>${a}</span><i>➜</i><span>${b}</span></div>`).join('')}</div></div>`;
}
const starBar = pct => '★'.repeat(Math.round(pct / 20)) + '☆'.repeat(5 - Math.round(pct / 20));

// Resultado visual: estrellas + huesos ganados, casi sin texto (público de 6 años)
function finishMinigame(res, rewardsFn, backTo) {
  const p = current.pet;
  if (rewardsFn) rewardsFn(p);
  saveRoot();
  refreshHUD();
  state.mode = 'mg-result';
  const stars = clamp(res.stars, 0, 3);
  const st = stageOf(p.day);
  const word = ['¡Otra vez!', '¡Bien!', '¡Muy bien!', '¡Genial!'][stars];
  speak(word);
  setTimeout(() => dogSound(stars ? 'happy' : 'sad', st.size), 900);
  showCard(`<div class="result">
      <div class="big-dog">${spriteImg({ coat: p.coat, size: st.size, pose: stars ? 'jump' : 'stand', collar: p.day >= 8, acc: p.acc.worn, sad: !stars }, 5)}</div>
      <div class="stars" aria-label="${stars} de 3 estrellas">${'⭐'.repeat(stars)}<span class="dim">${'⭐'.repeat(3 - stars)}</span></div>
      <h2>${word}</h2>
      <div class="gains">${res.bones ? `<span>🦴 +${res.bones}</span>` : ''}${res.extra || ''}</div>
    </div>`,
    '', () => { mg = null; state.mode = 'world'; if (backTo) openPlace(backTo); });
}

// ====================== Plataformas ======================
function startPlatform(levelId) {
  const def = LEVEL_DEFS.find(l => l.id === levelId);
  const L = buildLevel(def);
  const solidT = (tx, ty) => { if (tx < 0 || tx >= L.w) return true; if (ty < 0 || ty >= L.h) return false; const c = L.grid[ty][tx]; return c === '#' || c === 'g'; };
  const oneWay = (tx, ty) => ty >= 0 && ty < L.h && tx >= 0 && tx < L.w && L.grid[ty][tx] === '=';
  let gy = L.h - 1; while (gy > 0 && solidT(def.start, gy - 1)) gy--;   // superficie del suelo inferior
  const pl = { x: def.start * TILE + 8, y: gy * TILE, vx: 0, vy: 0, onGround: false, face: 1, lastGround: -99, buffer: -99, hearts: 3, inv: 0, anim: 0, safe: null };
  pl.safe = { x: pl.x, y: pl.y };
  const ents = L.ents.map(e => ({ ...e, alive: true }));
  mg = {
    kind: 'platform', def, L, pl, ents, solidT, oneWay, tick: 0, time: 0, bones: 0, stomps: 0,
    total: ents.filter(e => e.t === 'bone').length, cam: { x: 0 }, floaters: [], over: false,
    update: updatePlatform, draw: drawPlatform,
  };
  mg.cam.x = clamp(pl.x - view.w / 2, 0, Math.max(0, L.w * TILE - view.w));
  state.mode = 'mg-intro';
  showCard(introHTML('🌲', [['⬅️➡️', '🐶'], ['Ⓐ', '⤴️'], ['🦴', '😋'], ['🦔🐝', '⬇️💥'], ['🌵', '🚫'], ['🏠', '🏁']]),
    '', () => { state.mode = 'mg'; }, cancelIntro);
  speak('¡Lleva a Luna hasta la casita! Salta con A y recoge huesos.');
}

function hurtPlayer(m, fromX) {
  const pl = m.pl;
  if (pl.inv > 0) return;
  pl.hearts--; pl.inv = 1.3;
  pl.vx = (pl.x < fromX ? -1 : 1) * 150; pl.vy = -200;
  sfx('hurt');
  if (pl.hearts <= 0) endPlatform(false);
}

function updatePlatform(dt) {
  const m = mg, pl = m.pl, P = PHYS;
  if (m.over) return;
  m.tick++; m.time += dt;
  const dir = (input.held.right ? 1 : 0) - (input.held.left ? 1 : 0);
  if (input.pressed.a || input.pressed.up) pl.buffer = m.tick;
  const jumpHeld = input.held.a || input.held.up;
  // aceleración horizontal (control aéreo reducido)
  const target = dir * P.RUN;
  const acc = P.ACCEL * (pl.onGround ? 1 : P.AIR) * dt;
  if (pl.inv < 1.0) pl.vx += clamp(target - pl.vx, -acc, acc);
  if (dir) pl.face = dir;
  // salto: buffer + coyote time (platformer)
  if (pl.onGround) pl.lastGround = m.tick;
  if (m.tick - pl.buffer <= P.BUFFER && m.tick - pl.lastGround <= P.COYOTE) {
    pl.vy = -P.JUMP_V; pl.buffer = -99; pl.lastGround = -99; pl.onGround = false; sfx('jump');
  }
  let g = pl.vy < 0 ? P.G_RISE : P.G_FALL;
  if (pl.vy < 0 && !jumpHeld) g = P.G_FALL * 1.4;                         // altura variable
  else if (jumpHeld && Math.abs(pl.vy) < 0.4 * P.JUMP_V) g *= P.APEX_HANG;  // flotar en la cima
  pl.vy = Math.min(pl.vy + g * dt, P.MAX_FALL);

  const hw = 6, hh = 11;
  // eje X
  pl.x += pl.vx * dt;
  const rows = [Math.floor((pl.y - hh) / TILE), Math.floor((pl.y - 1) / TILE)];
  for (const ty of rows) {
    if (pl.vx > 0 && m.solidT(Math.floor((pl.x + hw) / TILE), ty)) { pl.x = Math.floor((pl.x + hw) / TILE) * TILE - hw - 0.01; pl.vx = 0; }
    if (pl.vx < 0 && m.solidT(Math.floor((pl.x - hw) / TILE), ty)) { pl.x = (Math.floor((pl.x - hw) / TILE) + 1) * TILE + hw + 0.01; pl.vx = 0; }
  }
  // eje Y
  const prevY = pl.y;
  pl.y += pl.vy * dt;
  pl.onGround = false;
  const cols = [Math.floor((pl.x - hw + 1) / TILE), Math.floor((pl.x + hw - 1) / TILE)];
  if (pl.vy >= 0) {
    const ty = Math.floor(pl.y / TILE);
    for (const tx of cols) {
      const top = ty * TILE;
      if (m.solidT(tx, ty) || (m.oneWay(tx, ty) && prevY <= top + 0.5)) { pl.y = top; pl.vy = 0; pl.onGround = true; }
    }
  } else {
    const ty = Math.floor((pl.y - hh) / TILE);
    for (const tx of cols) if (m.solidT(tx, ty)) { pl.y = (ty + 1) * TILE + hh; pl.vy = 0; }
  }
  if (pl.onGround && pl.inv <= 0) pl.safe = { x: pl.x, y: pl.y };
  pl.anim += Math.abs(pl.vx) * dt;
  if (pl.inv > 0) pl.inv -= dt;
  // caer al vacío
  if (pl.y > m.L.h * TILE + 40) {
    pl.hearts--; sfx('hurt');
    if (pl.hearts <= 0) return endPlatform(false);
    pl.x = pl.safe.x - pl.face * 24; pl.y = pl.safe.y - 20; pl.vx = 0; pl.vy = 0; pl.inv = 1.3;
  }

  // entidades
  const box = { l: pl.x - hw, r: pl.x + hw, t: pl.y - hh, b: pl.y };
  const hit = (l, t, r, b) => box.r > l && box.l < r && box.b > t && box.t < b;
  for (const e of m.ents) {
    if (!e.alive) continue;
    if (e.t === 'bone' && hit(e.x, e.y, e.x + 9, e.y + 7)) { e.alive = false; m.bones++; sfx('coin'); m.floaters.push({ x: e.x, y: e.y, t: 0, txt: '+1' }); }
    if (e.t === 'thorn' && hit(e.x + 2, e.y + 2, e.x + 14, e.y + 10)) hurtPlayer(m, e.x + 8);
    if (e.t === 'hog') {
      e.x += e.dir * 22 * dt;
      const ahead = Math.floor((e.x + (e.dir > 0 ? 14 : 2)) / TILE), foot = Math.floor((e.y + 12) / TILE), mid = Math.floor((e.y + 4) / TILE);
      if (m.solidT(ahead, mid) || !m.solidT(ahead, foot)) e.dir *= -1;
    }
    if (e.t === 'bee') { e.ph += dt; e.x = e.x0 + Math.sin(e.ph * 1.6) * e.range / 2; e.yy = e.y + Math.sin(e.ph * 4) * 3; }
    if (e.t === 'hog' || e.t === 'bee') {
      const ey = e.t === 'bee' ? e.yy : e.y;
      if (hit(e.x + 2, ey + 1, e.x + 14, ey + 10)) {
        if (pl.vy > 40 && box.b - ey < 9) {
          e.alive = false; pl.vy = -P.JUMP_V * 0.65; m.stomps++; m.bones++; sfx('stomp');
          m.floaters.push({ x: e.x, y: ey, t: 0, txt: '+1' });
        } else hurtPlayer(m, e.x + 8);
      }
    }
    if (e.t === 'goal' && hit(e.x, e.y - 60, e.x + 28, e.y + 32)) return endPlatform(true);
  }
  for (const f of m.floaters) f.t += dt;
  m.floaters = m.floaters.filter(f => f.t < 0.8);
  // cámara con anticipación
  const look = pl.face * 30;
  const tx = clamp(pl.x - view.w / 2 + look, 0, Math.max(0, m.L.w * TILE - view.w));
  m.cam.x += (tx - m.cam.x) * (1 - Math.exp(-6 * dt));
}

function endPlatform(won) {
  const m = mg, p = current.pet, def = m.def;
  m.over = true;
  const firstWin = won && !(p.levels[def.id] && p.levels[def.id].done);
  const bonus = won ? (firstWin ? 10 : 4) : 0;
  const got = m.bones + bonus;
  const stars = won ? (m.pl.hearts >= 3 ? 3 : m.pl.hearts === 2 ? 2 : 1) : 0;
  sfx(won ? 'win' : 'lose');
  finishMinigame({ stars, bones: got, extra: won ? '<span>🏠✔</span>' : '' }, pp => {
    pp.bones += got;
    const e = today(pp);
    e.play++;
    applyFx(pp, { felicidad: won ? 22 : 10, energia: -14, saciedad: -8, hidratacion: -10, higiene: -12 });
    const rec = pp.levels[def.id] || { done: false, best: 0 };
    rec.best = Math.max(rec.best, m.bones);
    if (won) rec.done = true;
    pp.levels[def.id] = rec;
    addEvent(pp, '🌲', won ? `Exploraron «${def.name}» y encontraron ${m.bones} huesos.` : `Intentaron «${def.name}» (${m.bones} huesos).`);
    if (firstWin) addMilestone(pp, 'lvl' + def.id, '🏞️', `Luna completó «${def.name}» por primera vez.`);
    outdoorRisk(pp);
  }, 'bosque');
}

function drawSky(ctx, top, bottom) {
  const gr = ctx.createLinearGradient(0, 0, 0, view.h);
  gr.addColorStop(0, top); gr.addColorStop(1, bottom);
  ctx.fillStyle = gr; ctx.fillRect(0, 0, view.w, view.h);
}
function drawHills(ctx, camX, baseY, color, amp, freq, par) {
  ctx.fillStyle = color;
  for (let x = 0; x < view.w; x += 2) {
    const wx = (x + camX * par) * freq;
    const h = Math.sin(wx) * amp + Math.sin(wx * 2.3) * amp * 0.4;
    ctx.fillRect(x, Math.round(baseY - h), 2, view.h);
  }
}

function drawPlatform(ctx) {
  const m = mg, pl = m.pl, L = m.L, def = m.def;
  const levelH = L.h * TILE;
  const oy = view.h > levelH ? view.h - levelH : Math.round(clamp(pl.y - view.h * 0.62, 0, levelH - view.h)) * -1;
  const cx = Math.round(m.cam.x);
  drawSky(ctx, def.sky[0], def.sky[1]);
  if (def.cave) {
    for (let i = 0; i < 30; i++) { ctx.fillStyle = i % 3 ? '#8070c0' : '#c0f0ff'; ctx.fillRect(Math.round((hash2(i, 1) * 900 - cx * 0.3) % view.w + view.w) % view.w, Math.round(hash2(i, 2) * view.h), 2, 2); }
    drawHills(ctx, cx, oy + 150, '#3a3060', 18, 0.02, 0.3);
  } else {
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 6; i++) { const x = Math.round(((i * 97 - cx * 0.2) % (view.w + 60) + view.w + 60) % (view.w + 60) - 30); const y = oy + 20 + (i % 3) * 18; ctx.fillRect(x, y, 26, 6); ctx.fillRect(x + 5, y - 4, 14, 4); }
    drawHills(ctx, cx, oy + 130, '#a8d890', 16, 0.015, 0.25);
    drawHills(ctx, cx, oy + 150, '#78b860', 12, 0.03, 0.5);
  }
  // casillas
  const x0 = Math.floor(cx / TILE), x1 = x0 + Math.ceil(view.w / TILE) + 1;
  for (let ty = 0; ty < L.h; ty++) for (let tx = x0; tx <= x1; tx++) {
    if (tx < 0 || tx >= L.w) continue;
    const c = L.grid[ty][tx];
    const X = tx * TILE - cx, Y = ty * TILE + oy;
    if (c === '#' || c === 'g') {
      if (def.cave) {
        ctx.fillStyle = '#4c3c70'; ctx.fillRect(X, Y, 16, 16);
        ctx.fillStyle = '#5c4c88'; ctx.fillRect(X + 2 + Math.floor(hash2(tx, ty) * 8), Y + 3, 4, 2);
        if (c === 'g') { ctx.fillStyle = '#80f0ff'; ctx.fillRect(X, Y, 16, 2); ctx.fillStyle = '#c0a0ff'; if (hash2(tx, ty, 2) > .7) ctx.fillRect(X + 6, Y - 4, 3, 4); }
      } else {
        ctx.fillStyle = '#b07840'; ctx.fillRect(X, Y, 16, 16);
        ctx.fillStyle = '#8c5a30'; ctx.fillRect(X + 2 + Math.floor(hash2(tx, ty) * 9), Y + 6 + Math.floor(hash2(tx, ty, 1) * 6), 3, 2);
        if (c === 'g') {
          ctx.fillStyle = '#58b038'; ctx.fillRect(X, Y, 16, 5);
          ctx.fillStyle = '#80d058'; ctx.fillRect(X, Y, 16, 2);
          ctx.fillStyle = '#58b038'; ctx.fillRect(X + 3, Y + 5, 2, 2); ctx.fillRect(X + 10, Y + 5, 2, 1);
        }
      }
    } else if (c === '=') {
      ctx.fillStyle = OUTLINE; ctx.fillRect(X, Y, 16, 6);
      ctx.fillStyle = '#d8a060'; ctx.fillRect(X, Y + 1, 16, 4);
      ctx.fillStyle = '#b07840'; ctx.fillRect(X + 7, Y + 1, 1, 4);
    }
  }
  // entidades
  const t = m.time;
  for (const e of m.ents) {
    if (!e.alive) continue;
    const X = Math.round(e.x - cx), Y = Math.round((e.t === 'bee' ? e.yy ?? e.y : e.y) + oy);
    if (X < -40 || X > view.w + 40) continue;
    if (e.t === 'bone') ctx.drawImage(BONE, X, Y + Math.round(Math.sin(t * 4 + e.x) * 1.5));
    if (e.t === 'thorn') {
      ctx.fillStyle = '#2c6a2c'; ctx.fillRect(X + 1, Y + 4, 14, 6);
      ctx.fillStyle = '#e8e0c0'; for (let i = 0; i < 4; i++) { ctx.fillRect(X + 2 + i * 4, Y, 1, 4); ctx.fillRect(X + 1 + i * 4, Y + 2, 3, 1); }
      ctx.fillStyle = '#c03030'; ctx.fillRect(X + 4, Y + 6, 2, 2); ctx.fillRect(X + 10, Y + 5, 2, 2);
    }
    if (e.t === 'hog') {
      const f = Math.floor(t * 6) % 2;
      ctx.fillStyle = OUTLINE; ctx.fillRect(X + 1, Y + 1, 14, 9);
      ctx.fillStyle = '#7c5838'; ctx.fillRect(X + 2, Y + 2, 12, 7);
      ctx.fillStyle = '#5a3c24'; for (let i = 0; i < 5; i++) ctx.fillRect(X + 2 + i * 3, Y, 1, 3);
      const hx = e.dir > 0 ? X + 12 : X;
      ctx.fillStyle = '#e8c8a0'; ctx.fillRect(hx, Y + 4, 4, 4);
      ctx.fillStyle = INK; ctx.fillRect(e.dir > 0 ? hx + 2 : hx + 1, Y + 5, 1, 1); ctx.fillRect(e.dir > 0 ? hx + 3 : hx, Y + 6, 1, 1);
      ctx.fillStyle = OUTLINE; ctx.fillRect(X + 4 + f, Y + 10, 2, 1); ctx.fillRect(X + 10 - f, Y + 10, 2, 1);
    }
    if (e.t === 'bee') {
      const f = Math.floor(t * 12) % 2;
      ctx.fillStyle = 'rgba(255,255,255,.8)'; ctx.fillRect(X + 4, Y + (f ? 0 : 1), 6, 3);
      ctx.fillStyle = OUTLINE; ctx.fillRect(X + 1, Y + 3, 13, 8);
      ctx.fillStyle = '#f8d030'; ctx.fillRect(X + 2, Y + 4, 11, 6);
      ctx.fillStyle = INK; ctx.fillRect(X + 5, Y + 4, 2, 6); ctx.fillRect(X + 9, Y + 4, 2, 6); ctx.fillRect(X + 12, Y + 6, 1, 1);
    }
    if (e.t === 'goal') {
      // casita de perro con banderín
      ctx.fillStyle = OUTLINE; ctx.fillRect(X - 1, Y + 10, 30, 23); ctx.fillRect(X + 3, Y + 4, 22, 8);
      ctx.fillStyle = '#d84838'; ctx.fillRect(X, Y + 11, 28, 4); ctx.fillRect(X + 4, Y + 5, 20, 7);
      ctx.fillStyle = '#f0d090'; ctx.fillRect(X + 2, Y + 15, 24, 17);
      ctx.fillStyle = '#3c2418'; ctx.fillRect(X + 9, Y + 20, 10, 12); ctx.fillRect(X + 10, Y + 19, 8, 1);
      ctx.fillStyle = OUTLINE; ctx.fillRect(X + 13, Y - 14, 2, 19);
      ctx.fillStyle = '#f8d030'; ctx.fillRect(X + 15, Y - 14 + (Math.floor(t * 3) % 2), 9, 6);
      pxText(ctx, 'L', X + 19, Y - 13 + (Math.floor(t * 3) % 2), '#a82c24', 5);
    }
  }
  // Luna
  if (!(pl.inv > 0 && Math.floor(t * 12) % 2)) {
    const st = stageOf(current.pet.day);
    const pose = !pl.onGround ? 'jump' : Math.abs(pl.vx) > 10 ? 'walk' : 'stand';
    const spr = dogSprite({ coat: current.pet.coat, size: Math.max(1, st.size), pose, frame: Math.floor(pl.anim / 7) % 2, collar: current.pet.day >= 8, acc: current.pet.acc.worn });
    drawDog(ctx, spr, pl.x - cx, pl.y + oy, pl.face < 0);
  }
  for (const f of m.floaters) pxText(ctx, f.txt, f.x - cx + 4, f.y + oy - f.t * 24, '#fff8b0', 8);
  // HUD
  for (let i = 0; i < 3; i++) drawHeart(ctx, 6 + i * 12, 6, i < pl.hearts);
  ctx.drawImage(BONE, 44, 7);
  pxText(ctx, `${m.bones}`, 56, 7, '#ffffff', 8, 'left');
}

// ====================== Parque: atrapa la pelota ======================
function startFetch() {
  const groundY = () => view.h - 22;
  mg = {
    kind: 'fetch', time: 0, dur: 30, score: 0, miss: 0, balls: [], spawnT: 1, floaters: [],
    pl: { x: view.w / 2, y: groundY(), vx: 0, vy: 0, onGround: true, face: 1, anim: 0, buffer: -99, lastGround: 0, tick: 0 },
    groundY, update: updateFetch, draw: drawFetch, over: false,
  };
  state.mode = 'mg-intro';
  showCard(introHTML('🎾', [['⬅️➡️', '🐶'], ['Ⓐ', '⤴️'], ['🎾', '😋'], ['🟡', '+3']]),
    '', () => { state.mode = 'mg'; }, cancelIntro);
  speak('¡Atrapa las pelotas antes de que caigan!');
}
function updateFetch(dt) {
  const m = mg, pl = m.pl, P = PHYS;
  if (m.over) return;
  m.time += dt; pl.tick++;
  const gy = m.groundY();
  const dir = (input.held.right ? 1 : 0) - (input.held.left ? 1 : 0);
  if (dir) pl.face = dir;
  pl.vx += clamp(dir * 130 - pl.vx, -P.ACCEL * dt, P.ACCEL * dt);
  if (input.pressed.a || input.pressed.up) pl.buffer = pl.tick;
  if (pl.onGround) pl.lastGround = pl.tick;
  if (pl.tick - pl.buffer <= P.BUFFER && pl.tick - pl.lastGround <= P.COYOTE) { pl.vy = -P.JUMP_V * 0.92; pl.buffer = -99; pl.onGround = false; sfx('jump'); }
  const held = input.held.a || input.held.up;
  let g = pl.vy < 0 ? P.G_RISE : P.G_FALL;
  if (pl.vy < 0 && !held) g = P.G_FALL * 1.4;
  pl.vy = Math.min(pl.vy + g * dt, P.MAX_FALL);
  pl.x = clamp(pl.x + pl.vx * dt, 10, view.w - 10);
  pl.y += pl.vy * dt;
  pl.onGround = false;
  if (pl.y >= gy) { pl.y = gy; pl.vy = 0; pl.onGround = true; }
  pl.anim += Math.abs(pl.vx) * dt;

  m.spawnT -= dt;
  if (m.spawnT <= 0 && m.time < m.dur - 1) {
    const left = Math.random() < 0.5;
    const gold = Math.random() < 0.12;
    m.balls.push({ x: left ? -6 : view.w + 6, y: gy - rand(40, 90), vx: (left ? 1 : -1) * rand(45, 115), vy: -rand(70, 150), gold, bounced: false });
    m.spawnT = Math.max(0.65, 1.5 - m.time / 30);
  }
  for (const b of m.balls) {
    b.vy += 200 * dt; b.x += b.vx * dt; b.y += b.vy * dt;
    if (Math.abs(b.x - pl.x) < 11 && b.y > pl.y - 22 && b.y < pl.y + 2 && !b.dead) {
      b.dead = true; const pts = b.gold ? 3 : 1; m.score += pts; sfx('coin');
      m.floaters.push({ x: b.x, y: b.y, t: 0, txt: `+${pts}` });
    }
    if (b.y >= gy - 2 && !b.dead) {
      if (!b.bounced) { b.bounced = true; b.vy = -60; b.vx *= 0.5; m.miss++; } else b.dead = true;
    }
    if (b.x < -20 || b.x > view.w + 20) b.dead = true;
  }
  m.balls = m.balls.filter(b => !b.dead);
  for (const f of m.floaters) f.t += dt;
  m.floaters = m.floaters.filter(f => f.t < 0.8);
  if (m.time >= m.dur) {
    m.over = true;
    const bones = Math.floor(m.score / 2);
    const joy = clamp(8 + m.score * 3, 8, 40);
    sfx('win');
    finishMinigame({ stars: m.score >= 12 ? 3 : m.score >= 6 ? 2 : m.score >= 1 ? 1 : 0, bones, extra: `<span>🎾 ${m.score}</span>` }, pp => {
      pp.bones += bones;
      today(pp).play++;
      applyFx(pp, { felicidad: joy, energia: -12, saciedad: -5, hidratacion: -8 });
      addEvent(pp, '🎾', `Jugaron a la pelota en el parque: ¡${m.score} atrapadas!`);
      if (m.score >= 15) addMilestone(pp, 'fetch15', '🥎', '¡Luna atrapó 15 pelotas en una partida!');
      outdoorRisk(pp);
    }, 'parque');
  }
}
function drawFetch(ctx) {
  const m = mg, pl = m.pl, gy = m.groundY();
  drawSky(ctx, '#88d0f8', '#e0f4ff');
  drawHills(ctx, m.time * 5, gy - 30, '#90d070', 10, 0.03, 1);
  // árboles de fondo
  for (let i = 0; i < 6; i++) drawTree(ctx, Math.round(i * view.w / 5 - 8), gy - 30, i % 2 === 0);
  ctx.fillStyle = '#68b848'; ctx.fillRect(0, gy, view.w, view.h - gy);
  ctx.fillStyle = '#88d060'; ctx.fillRect(0, gy, view.w, 2);
  ctx.fillStyle = '#58a038'; for (let x = 0; x < view.w; x += 7) ctx.fillRect(x, gy + 4 + (x % 3), 2, 1);
  for (const b of m.balls) {
    const X = Math.round(b.x), Y = Math.round(b.y);
    ctx.fillStyle = OUTLINE; ctx.fillRect(X - 4, Y - 3, 8, 6); ctx.fillRect(X - 3, Y - 4, 6, 8);
    ctx.fillStyle = b.gold ? '#f8d030' : '#c8f040'; ctx.fillRect(X - 3, Y - 3, 6, 6);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(X - 2, Y - 2, 1, 4);
  }
  const st = stageOf(current.pet.day);
  const spr = dogSprite({ coat: current.pet.coat, size: Math.max(1, st.size), pose: !pl.onGround ? 'jump' : Math.abs(pl.vx) > 10 ? 'walk' : 'stand', frame: Math.floor(pl.anim / 7) % 2, collar: current.pet.day >= 8, acc: current.pet.acc.worn });
  drawDog(ctx, spr, pl.x, pl.y, pl.face < 0);
  for (const f of m.floaters) pxText(ctx, f.txt, f.x, f.y - f.t * 24, '#fff8b0', 8);
  pxText(ctx, `${Math.max(0, Math.ceil(m.dur - m.time))}s`, view.w - 8, 6, '#ffffff', 8, 'right');
  ctx.drawImage(BONE, 6, 6); pxText(ctx, `${m.score}`, 18, 6, '#ffffff', 8, 'left');
}

// Cuenta partidas por día (Pío sugiere los juegos que aún no se jugaron hoy)
// markGame() vive en js/extras.js (compartido con el 3D)
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// ====================== Parque: carrera de obstáculos ======================
// Luna corre sola; A (o tocar la pantalla) para saltar vallas y charcos. Sin "game over": chocar solo resta estrellas.
function startAgility() {
  const gy = () => view.h - 26;
  mg = {
    kind: 'agility', time: 0, dur: 35, speed: 90, dist: 0, obs: [], nextObs: 1.4, cleared: 0, hits: 0, splash: 0, bones: 0, floaters: [], over: false,
    pl: { x: 78, y: gy(), vy: 0, onGround: true, buffer: -99, lastGround: 0, tick: 0, anim: 0, inv: 0 }, gy,
    update: updateAgility, draw: drawAgility, onTap: () => { mg.pl.buffer = mg.pl.tick; },
  };
  state.mode = 'mg-intro';
  showCard(introHTML('🏃', [['Ⓐ 👆', '⤴️ 🚧'], ['💦', '⤴️'], ['🦴', '😋']]), '', () => { state.mode = 'mg'; }, cancelIntro);
  speak('¡Carrera de obstáculos! Toca A o la pantalla para saltar las vallas y los charcos.');
}
function updateAgility(dt) {
  const m = mg, pl = m.pl, P = PHYS;
  if (m.over) return;
  m.time += dt; pl.tick++;
  m.speed = 90 + m.time * 2.2;
  const gy = m.gy();
  if (input.pressed.a || input.pressed.up) pl.buffer = pl.tick;
  if (pl.onGround) pl.lastGround = pl.tick;
  if (pl.tick - pl.buffer <= P.BUFFER && pl.tick - pl.lastGround <= P.COYOTE) { pl.vy = -P.JUMP_V * 0.92; pl.buffer = -99; pl.lastGround = -99; pl.onGround = false; sfx('jump'); }
  const held = input.held.a || input.held.up || input.pointer.active;
  let g = pl.vy < 0 ? P.G_RISE : P.G_FALL;
  if (pl.vy < 0 && !held) g = P.G_FALL * 1.3;
  else if (held && Math.abs(pl.vy) < 0.4 * P.JUMP_V) g *= P.APEX_HANG;
  pl.vy = Math.min(pl.vy + g * dt, P.MAX_FALL);
  pl.y += pl.vy * dt; pl.onGround = false;
  if (pl.y >= gy) { pl.y = gy; pl.vy = 0; pl.onGround = true; }
  pl.anim += m.speed * dt; m.dist += m.speed * dt;
  if (pl.inv > 0) pl.inv -= dt;

  m.nextObs -= dt;
  if (m.nextObs <= 0 && m.time < m.dur - 2.5) {
    const kind = Math.random() < 0.62 ? 'fence' : 'puddle';
    m.obs.push({ kind, x: view.w + 20, done: false });
    if (Math.random() < 0.65) m.obs.push({ kind: 'bone', x: view.w + 20 + rand(-6, 6), y: gy - rand(30, 46), done: false });
    m.nextObs = rand(1.15, 1.9) * Math.max(0.7, 100 / m.speed);
  }
  for (const o of m.obs) {
    o.x -= m.speed * dt;
    if (o.done) continue;
    if (o.kind === 'bone') {
      if (Math.abs(o.x + 4 - pl.x) < 10 && Math.abs(o.y + 3 - (pl.y - 8)) < 13) { o.done = true; o.got = true; m.bones++; sfx('coin'); m.floaters.push({ x: o.x, y: o.y, t: 0, txt: '+1' }); }
      continue;
    }
    const w = o.kind === 'puddle' ? 20 : 8, h = o.kind === 'fence' ? 13 : 3;
    if (pl.inv <= 0 && Math.abs(o.x - pl.x) < w / 2 + 5 && pl.y > gy - h) {
      o.done = true; m.hits++; pl.inv = 0.8; sfx('hurt');
      if (o.kind === 'puddle') m.splash++;
      m.floaters.push({ x: pl.x - 4, y: pl.y - 24, t: 0, txt: o.kind === 'puddle' ? '~' : '!' });
    } else if (o.x < pl.x - w) { o.done = true; m.cleared++; m.floaters.push({ x: pl.x, y: pl.y - 28, t: 0, txt: '★' }); }
  }
  m.obs = m.obs.filter(o => o.x > -40 && !o.got);
  for (const f of m.floaters) f.t += dt;
  m.floaters = m.floaters.filter(f => f.t < 0.8);
  if (m.time >= m.dur) {
    m.over = true;
    const stars = m.hits === 0 ? 3 : m.hits <= 3 ? 2 : 1;
    const bones = Math.floor((m.bones + m.cleared / 2) / 3);
    sfx('win');
    finishMinigame({ stars, bones, extra: `<span>🚧 ${m.cleared}</span>` }, pp => {
      pp.bones += bones; today(pp).play++; markGame(pp, 'agility');
      applyFx(pp, { felicidad: 14 + stars * 3, energia: -14, saciedad: -6, hidratacion: -10, higiene: -m.splash * 6 });
      addEvent(pp, '🏃', `Carrera de obstáculos: ${m.cleared} saltos y ${m.bones} huesos.`);
      if (stars === 3) addMilestone(pp, 'agility', '🏃', '¡Luna hizo una carrera de obstáculos perfecta!');
      outdoorRisk(pp);
    }, 'parque');
  }
}
function drawAgility(ctx) {
  const m = mg, pl = m.pl, gy = m.gy(), p = current.pet, t = m.time;
  drawSky(ctx, '#88d0f8', '#e8f8ff');
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 5; i++) { const x = Math.round(((i * 113 - m.dist * 0.15) % (view.w + 60) + view.w + 60) % (view.w + 60) - 30); ctx.fillRect(x, 18 + (i % 3) * 14, 24, 6); ctx.fillRect(x + 5, 14 + (i % 3) * 14, 12, 4); }
  drawHills(ctx, m.dist, gy - 26, '#a8d890', 12, 0.02, 0.3);
  drawHills(ctx, m.dist, gy - 10, '#78b860', 8, 0.04, 0.6);
  ctx.fillStyle = '#68b848'; ctx.fillRect(0, gy, view.w, view.h - gy);
  ctx.fillStyle = PAL.dirt; ctx.fillRect(0, gy + 2, view.w, 8);
  ctx.fillStyle = PAL.dirtD; for (let x = -(Math.round(m.dist) % 14); x < view.w; x += 14) ctx.fillRect(x, gy + 5, 4, 1);
  for (const o of m.obs) {
    const X = Math.round(o.x);
    if (o.kind === 'bone') { if (!o.done) ctx.drawImage(BONE, X, Math.round(o.y + Math.sin(t * 5 + o.x) * 1.5)); continue; }
    if (o.kind === 'fence') {
      ctx.fillStyle = OUTLINE; ctx.fillRect(X - 6, gy - 14, 3, 15); ctx.fillRect(X + 3, gy - 14, 3, 15); ctx.fillRect(X - 7, gy - 12, 14, 4); ctx.fillRect(X - 7, gy - 6, 14, 3);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(X - 6, gy - 11, 12, 2); ctx.fillStyle = '#e04848'; ctx.fillRect(X - 2, gy - 11, 4, 2); ctx.fillRect(X - 6, gy - 5, 12, 1);
      ctx.fillStyle = PAL.wood; ctx.fillRect(X - 5, gy - 13, 1, 13); ctx.fillRect(X + 4, gy - 13, 1, 13);
    } else {
      ctx.fillStyle = PAL.waterD; ctx.fillRect(X - 11, gy + 1, 22, 5); ctx.fillRect(X - 8, gy, 16, 7);
      ctx.fillStyle = PAL.water; ctx.fillRect(X - 9, gy + 1, 18, 4);
      ctx.fillStyle = PAL.waterL; ctx.fillRect(X - 5 + (Math.floor(t * 4) % 3), gy + 2, 4, 1);
    }
  }
  // el avatar corre detrás con la correa
  const st = stageOf(p.day), kx = pl.x - 34;
  const kid = kidSprite(current.avatar, 'side', true, Math.floor(m.dist / 9) % 2);
  drawDog(ctx, kid, kx, gy + 1, false);
  if (!(pl.inv > 0 && Math.floor(t * 12) % 2)) {
    const spr = dogSprite({ coat: p.coat, size: Math.max(1, st.size), pose: pl.onGround ? 'walk' : 'jump', frame: Math.floor(pl.anim / 8) % 2, collar: p.day >= 8, acc: p.acc.worn });
    drawDog(ctx, spr, pl.x, pl.y + 1, false);
  }
  const D = DOG_DIMS[Math.max(1, st.size)];
  drawLeash(ctx, Math.round(kx + 4), gy - 9, Math.round(pl.x + D.bw - 8), Math.round(pl.y - D.leg - D.bh + 2));
  for (const f of m.floaters) pxText(ctx, f.txt, f.x, f.y - f.t * 24, f.txt === '!' ? '#ff6060' : '#fff8b0', 8);
  pxText(ctx, `${Math.max(0, Math.ceil(m.dur - m.time))}s`, view.w - 8, 6, '#2c4a6c', 8, 'right');
  ctx.drawImage(BONE, 6, 6); pxText(ctx, `${m.bones}`, 18, 6, '#2c4a6c', 8, 'left');
}

// ====================== Lago: dar de comer a los patos ======================
// Comida para patos (no pan: el pan les hace daño). Muévete y lanza con A o tocando donde quieras.
function startDucks() {
  mg = {
    kind: 'ducks', time: 0, dur: 30, ducks: [], spawnT: 0.4, pellets: [], cd: 0, score: 0, kidX: view.w / 2, floaters: [], over: false,
    update: updateDucks, draw: drawDucks, onTap: x => { mg.kidX = clamp(x, 16, view.w - 16); throwPellet(); },
  };
  state.mode = 'mg-intro';
  showCard(introHTML('🦆', [['⬅️➡️', '🧒'], ['Ⓐ 👆', '🌾 ⬆️'], ['🌾 🦆', '😋'], ['🦆✨', '+3']]), '', () => { state.mode = 'mg'; }, cancelIntro);
  speak('¡Los patos tienen hambre! Lánzales su comida con A o tocando la pantalla.');
}
const duckLanes = () => [Math.round(view.h * 0.24), Math.round(view.h * 0.4), Math.round(view.h * 0.56)];
const duckShore = () => view.h - 34;
function throwPellet() {
  const m = mg;
  if (!m || m.over || m.cd > 0) return;
  m.pellets.push({ x: m.kidX, y: duckShore() - 16, vy: -190 });
  m.cd = 0.3; sfx('tick');
}
function updateDucks(dt) {
  const m = mg;
  if (m.over) return;
  m.time += dt; m.cd -= dt;
  const dir = (input.held.right ? 1 : 0) - (input.held.left ? 1 : 0);
  m.kidX = clamp(m.kidX + dir * 130 * dt, 16, view.w - 16);
  m.walking = !!dir; m.kidAnim = (m.kidAnim || 0) + Math.abs(dir) * dt;
  if (input.pressed.a || input.pressed.up) throwPellet();
  m.spawnT -= dt;
  if (m.spawnT <= 0 && m.time < m.dur - 1.5) {
    const lanes = duckLanes(), left = Math.random() < 0.5;
    m.ducks.push({ x: left ? -14 : view.w + 14, y: lanes[Math.floor(Math.random() * 3)], vx: (left ? 1 : -1) * rand(22, 46) * (1 + m.time / 45), gold: Math.random() < 0.13, fed: 0, ph: Math.random() * 6 });
    m.spawnT = rand(0.7, 1.3);
  }
  for (const d of m.ducks) { d.ph += dt; d.x += d.vx * dt * (d.fed ? 2.2 : 1); if (d.fed) d.fed += dt; }
  for (const b of m.pellets) {
    b.y += b.vy * dt;
    for (const d of m.ducks) {
      if (d.fed || b.dead) continue;
      if (Math.abs(b.x - d.x) < 10 && Math.abs(b.y - d.y) < 8) {
        b.dead = true; d.fed = 0.01;
        const pts = d.gold ? 3 : 1; m.score += pts; sfx('coin');
        m.floaters.push({ x: d.x, y: d.y - 12, t: 0, txt: `+${pts}` });
      }
    }
    if (b.y < 6) b.dead = true;
  }
  m.pellets = m.pellets.filter(b => !b.dead);
  m.ducks = m.ducks.filter(d => d.x > -30 && d.x < view.w + 30);
  for (const f of m.floaters) f.t += dt;
  m.floaters = m.floaters.filter(f => f.t < 0.8);
  if (m.time >= m.dur) {
    m.over = true;
    const stars = m.score >= 14 ? 3 : m.score >= 7 ? 2 : m.score >= 1 ? 1 : 0;
    const bones = Math.floor(m.score / 3);
    sfx(stars ? 'win' : 'lose');
    finishMinigame({ stars, bones, extra: `<span>🦆 ${m.score}</span>` }, pp => {
      const e = today(pp);
      pp.bones += bones; e.play++; markGame(pp, 'ducks');
      applyFx(pp, { felicidad: 8 + Math.min(16, m.score), energia: -4 });
      addEvent(pp, '🦆', `Le dieron de comer a los patos del lago (${m.score} puntos).`);
      if (m.score >= 10) addMilestone(pp, 'ducks10', '🦆', '¡Alimentaron a muchos patos en el lago!');
      outdoorRisk(pp);
    }, 'lago');
  }
}
function drawDucks(ctx) {
  const m = mg, t = m.time, shore = duckShore(), p = current.pet;
  // orilla de enfrente, agua y orilla propia
  ctx.fillStyle = PAL.grass; ctx.fillRect(0, 0, view.w, 22);
  for (let i = 0; i < 9; i++) drawTree(ctx, Math.round(i * view.w / 8 - 8), 2, i % 3 === 0);
  ctx.fillStyle = PAL.sand; ctx.fillRect(0, 20, view.w, 4);
  ctx.fillStyle = PAL.water; ctx.fillRect(0, 24, view.w, shore - 24);
  ctx.fillStyle = PAL.waterL;
  for (let i = 0; i < 24; i++) { const x = Math.round((hash2(i, 3) * view.w + t * 8 * (i % 2 ? 1 : -1)) % view.w + view.w) % view.w, y = 30 + Math.round(hash2(i, 4) * (shore - 40)); ctx.fillRect(x, y, 5, 1); }
  ctx.fillStyle = PAL.sand; ctx.fillRect(0, shore, view.w, view.h - shore);
  ctx.fillStyle = PAL.dirtD; for (let x = 3; x < view.w; x += 11) ctx.fillRect(x, shore + 8 + (x % 4), 2, 1);
  // patos
  for (const d of m.ducks) {
    const spr = DUCK_SPR[d.gold ? 'gold' : 'white'][Math.floor(d.ph * 3) % 2];
    const y = Math.round(d.y + Math.sin(d.ph * 3) * 1);
    drawDog(ctx, spr, d.x, y + 3, d.vx < 0);
    ctx.fillStyle = PAL.waterL; ctx.fillRect(Math.round(d.x - 8), y + 3, 16, 1);
    if (d.fed && d.fed < 1) pxText(ctx, '♥', Math.round(d.x), Math.round(y - 18 - d.fed * 8), '#ff80b0', 8);
  }
  for (const b of m.pellets) { ctx.fillStyle = OUTLINE; ctx.fillRect(Math.round(b.x) - 2, Math.round(b.y) - 2, 4, 4); ctx.fillStyle = '#e8c860'; ctx.fillRect(Math.round(b.x) - 1, Math.round(b.y) - 1, 2, 2); }
  // avatar de espaldas y Luna sentada al lado
  const kid = kidSprite(current.avatar, 'up', !!m.walking, Math.floor((m.kidAnim || 0) * 6) % 2);
  drawDog(ctx, kid, m.kidX, shore + 20, false);
  const st = stageOf(p.day);
  const spr = dogSprite({ coat: p.coat, size: st.size, pose: m.floaters.length ? 'jump' : 'stand', frame: Math.floor(t * 2) % 2, collar: p.day >= 8, acc: p.acc.worn });
  drawDog(ctx, spr, m.kidX + 20, shore + 22, m.kidX + 20 > view.w - 20);
  for (const f of m.floaters) pxText(ctx, f.txt, f.x, f.y - f.t * 20, '#fff8b0', 8);
  pxText(ctx, `${Math.max(0, Math.ceil(m.dur - m.time))}s`, view.w - 8, 28, '#ffffff', 8, 'right');
  ctx.drawImage(BONE, 6, 28); pxText(ctx, `${m.score}`, 18, 28, '#ffffff', 8, 'left');
}

// ====================== Casa: memoria (cartas) ======================
const MEM_ICONS = ['🐶', '🦴', '🎾', '🧸', '🦆', '🌳', '🍖', '🐿️', '🦋', '🏠'];
function startMemory() {
  const p = current.pet, pairs = p.day < 8 ? 4 : 6;
  const icons = shuffle(MEM_ICONS).slice(0, pairs);
  mg = { kind: 'memory', cards: shuffle([...icons, ...icons]).map(ic => ({ ic, open: false, done: false })), first: null, lock: false, moves: 0, pairs, found: 0, over: false, update() {}, draw: drawWorld };
  state.mode = 'mg';
  openWin(memoryHTML(), () => { if (mg && mg.kind === 'memory' && !mg.over) { mg = null; state.mode = 'world'; updatePrompt(); } }, 'card');
  speak('¡Encuentra las parejas! Toca dos cartas.');
}
function memoryHTML() {
  const m = mg;
  return `<h2 aria-label="Memoria">🃏 <small>${'⭐'.repeat(m.found)}</small></h2><div class="mem${m.cards.length > 8 ? ' six' : ''}">${m.cards.map((c, i) => {
    const up = c.open || c.done;
    return `<button class="mcard${up ? ' up' : ''}${c.done ? ' done' : ''}" data-mem="${i}" aria-label="${up ? c.ic : 'Carta ' + (i + 1)}">${up ? c.ic : '🐾'}</button>`;
  }).join('')}</div>`;
}
function renderMemory(focusIdx) {
  if (!mg || mg.kind !== 'memory' || $('#win').hidden) return;
  $('#win-box').innerHTML = memoryHTML();
  $(`#win-box [data-mem="${focusIdx}"]`)?.focus({ preventScroll: true });
}
function memFlip(i) {
  const m = mg;
  if (!m || m.kind !== 'memory' || m.over || m.lock) return;
  const c = m.cards[i];
  if (!c || c.open || c.done) return;
  c.open = true; sfx('tick');
  if (m.first === null) { m.first = i; renderMemory(i); return; }
  m.moves++;
  const a = m.cards[m.first];
  if (a.ic === c.ic) {
    a.done = c.done = true; a.open = c.open = false; m.first = null; m.found++;
    sfx('coin'); dogSound('yip', lunaSize(), 0.5);
    renderMemory(i);
    if (m.found === m.pairs) setTimeout(endMemory, 600);
  } else {
    m.lock = true; renderMemory(i);
    setTimeout(() => { if (mg !== m) return; a.open = c.open = false; m.first = null; m.lock = false; renderMemory(i); }, 850);
  }
}
function endMemory() {
  const m = mg;
  if (!m || m.kind !== 'memory') return;
  m.over = true;
  const stars = m.moves <= m.pairs + 2 ? 3 : m.moves <= m.pairs * 2 ? 2 : 1;
  sfx('win');
  const n = (today(current.pet).games || {}).memory || 0;
  const bones = n < 3 ? stars : 0;   // huesos solo en las 3 primeras partidas del día
  finishMinigame({ stars, bones, extra: `<span>🃏 ${m.moves}</span>` }, pp => {
    pp.bones += bones; today(pp).play++; markGame(pp, 'memory');
    applyFx(pp, { felicidad: 8 + stars * 2 });
    addEvent(pp, '🃏', `Jugaron a la memoria: ${m.pairs} parejas en ${m.moves} turnos.`);
    if (stars === 3) addMilestone(pp, 'memory', '🃏', '¡Memoria perfecta!');
  }, 'casa');
}

// ====================== Escuela: secuencia de flechas ======================
const ARROWS = ['up', 'right', 'down', 'left'];
function startTrain(trickId) {
  const p = current.pet;
  const isPotty = trickId === 'potty';
  const t = isPotty ? { id: 'potty', name: 'Hacer sus necesidades en su lugar', icon: '🧻', min: 3 } : TRICKS.find(x => x.id === trickId);
  const cur = isPotty ? p.potty : (p.tricks[trickId] || 0);
  const len = 3 + Math.floor(cur / 34);
  mg = { kind: 'train', trick: t, isPotty, round: 0, rounds: 3, ok: 0, len, seq: [], idx: 0, phase: 'show', pt: 0, flash: null, update: updateTrain, draw: drawTrain, over: false };
  newTrainRound();
  state.mode = 'mg-intro';
  showCard(introHTML(t.icon || '🎓', [['👀', '⬆️➡️⬇️'], ['👆', '⬆️➡️⬇️'], ['✔✔✔', '🏆']]),
    '', () => { state.mode = 'mg'; }, cancelIntro);
  speak('¡Mira las flechas y luego repítelas!');
}
function newTrainRound() {
  const m = mg;
  m.seq = Array.from({ length: m.len }, () => ARROWS[Math.floor(Math.random() * 4)]);
  m.idx = 0; m.phase = 'show'; m.pt = 0;
}
function updateTrain(dt) {
  const m = mg;
  if (m.over) return;
  m.pt += dt;
  if (m.flash) { m.flash.t -= dt; if (m.flash.t <= 0) m.flash = null; }
  if (m.phase === 'show' && m.pt > 0.8 + m.seq.length * 0.65) { m.phase = 'input'; m.pt = 0; }
  else if (m.phase === 'input') {
    const pressed = ARROWS.find(a => input.pressed[a]);
    if (pressed) {
      if (pressed === m.seq[m.idx]) {
        m.idx++; sfx('tick');
        if (m.idx >= m.seq.length) { m.ok++; m.flash = { ok: true, t: 0.9 }; sfx('coin'); endTrainRound(); }
      } else { m.flash = { ok: false, t: 0.9 }; sfx('hurt'); endTrainRound(); }
    } else if (m.pt > 4 + m.seq.length) { m.flash = { ok: false, t: 0.9 }; endTrainRound(); }
  } else if (m.phase === 'pause' && m.pt > 1) {
    if (m.round >= m.rounds) return finishTrain();
    newTrainRound();
  }
}
function endTrainRound() { mg.round++; mg.phase = 'pause'; mg.pt = 0; }
function finishTrain() {
  const m = mg, p = current.pet;
  m.over = true;
  const gain = m.ok * 9 + (m.ok === 3 ? 6 : 0) + (p.stats.felicidad > 70 ? 4 : 0) + 2;
  const key = m.trick.id;
  const before = m.isPotty ? p.potty : (p.tricks[key] || 0);
  const after = Math.min(100, before + gain);
  sfx(m.ok >= 2 ? 'win' : 'lose');
  finishMinigame({ stars: m.ok, bones: m.ok, extra: `<span>${m.trick.icon || '🎓'} ${starBar(after)}</span>${after >= 100 ? '<span>🏆</span>' : ''}` }, pp => {
    const e = today(pp);
    e.sessions++; e.train++;
    if (m.isPotty) pp.potty = after; else pp.tricks[key] = after;
    applyFx(pp, { energia: -8, saciedad: -3, felicidad: 4 + m.ok * 2 });
    pp.bones += m.ok;
    if (after >= 100 && before < 100) addMilestone(pp, m.isPotty ? 'potty' : 'trick-' + key, '🏆', m.isPotty ? 'Luna aprendió a hacer sus necesidades en su lugar.' : `Luna aprendió: «${m.trick.name}».`);
    else addEvent(pp, '🎓', `Practicaron «${m.trick.name}» (${after}%).`);
  }, m.isPotty ? 'casa' : 'escuela');
}
function drawArrow(ctx, x, y, dir, color, s = 3) {
  const shape = ['...#...', '..###..', '.#####.', '#######', '..###..', '..###..', '..###..'];
  ctx.fillStyle = color;
  for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
    if (shape[r][c] !== '#') continue;
    const a = c - 3, b = r - 3;
    let X, Y;
    if (dir === 'up') { X = a; Y = b; } else if (dir === 'down') { X = a; Y = -b; } else if (dir === 'right') { X = -b; Y = a; } else { X = b; Y = a; }
    ctx.fillRect(x + (X + 3) * s, y + (Y + 3) * s, s, s);
  }
}
function drawTrain(ctx) {
  const m = mg;
  ctx.fillStyle = '#f8e8b0'; ctx.fillRect(0, 0, view.w, view.h);
  ctx.fillStyle = '#e8d090'; for (let x = 0; x < view.w; x += 16) ctx.fillRect(x, 0, 8, view.h);
  ctx.fillStyle = '#b07840'; ctx.fillRect(0, view.h - 30, view.w, 30);
  // pizarra
  const bw = Math.min(view.w - 20, 260), bx = Math.round(view.w / 2 - bw / 2);
  ctx.fillStyle = OUTLINE; ctx.fillRect(bx - 2, 8, bw + 4, 64);
  ctx.fillStyle = '#2c5a44'; ctx.fillRect(bx, 10, bw, 60);
  pxText(ctx, '●'.repeat(Math.min(m.round + 1, 3)) + '○'.repeat(3 - Math.min(m.round + 1, 3)), view.w / 2, 14, '#e0f0e0', 8);
  const n = m.seq.length, sp = 26, sx = Math.round(view.w / 2 - (n * sp) / 2 + 3);
  for (let i = 0; i < n; i++) {
    let col = null;
    if (m.phase === 'show') { const k = Math.floor((m.pt - 0.4) / 0.65); if (k === i) col = '#f8e040'; else if (k > i) col = '#6c9c84'; }
    else if (m.phase === 'input') col = i < m.idx ? '#80f080' : null;
    if (col) drawArrow(ctx, sx + i * sp - 2, 30, m.seq[i], col, 3);
    else { ctx.fillStyle = '#4c7a64'; ctx.fillRect(sx + i * sp + 4, 38, 7, 3); }
  }
  pxText(ctx, m.phase === 'show' ? '👀' : m.phase === 'input' ? '👆' : '', view.w / 2, 54, '#ffffff', 12);
  // Luna y entrenadora
  const st = stageOf(current.pet.day);
  const pose = m.flash && m.flash.ok ? 'jump' : 'stand';
  const spr = dogSprite({ coat: current.pet.coat, size: st.size, pose, collar: true, acc: current.pet.acc.worn, sad: m.flash && !m.flash.ok });
  ctx.save(); ctx.translate(Math.round(view.w / 2 - 28), view.h - 30 - spr.height * 2 + 2); ctx.scale(2, 2); ctx.drawImage(spr, 0, 0); ctx.restore();
  if (m.flash) pxText(ctx, m.flash.ok ? '⭐' : '❌', view.w / 2, view.h - 78, '#ffffff', 16);
}

// ====================== Casa: baño ======================
function startBath() {
  const p = current.pet;
  const st = stageOf(p.day);
  const spr = dogSprite({ coat: p.coat, size: st.size, pose: 'stand', collar: false });
  const scale = 4;
  // manchas sobre píxeles opacos del sprite
  const data = spr.getContext('2d').getImageData(0, 0, spr.width, spr.height).data;
  const spots = []; let guard = 0;
  while (spots.length < 8 && guard++ < 500) {
    const x = Math.floor(Math.random() * spr.width), y = Math.floor(Math.random() * spr.height);
    if (y < spr.height * 0.8 && data[(y * spr.width + x) * 4 + 3] > 0 && !spots.some(s => Math.abs(s.sx - x) < 3 && Math.abs(s.sy - y) < 3)) spots.push({ sx: x, sy: y, hp: 1 });
  }
  mg = { kind: 'bath', spr, scale, spots, time: 0, dur: 20, cur: { x: view.w / 2, y: view.h - 30 }, bubbles: [], update: updateBath, draw: drawBath, over: false, total: spots.length };
  state.mode = 'mg-intro';
  showCard(introHTML('🛁', [['👆🧽', '🟤'], ['🟤', '✨']]),
    '', () => { state.mode = 'mg'; }, cancelIntro);
  speak('¡Pasa la esponja por las manchas!');
}
// la posición se recalcula cada fotograma: así sigue centrada si cambia el tamaño de la ventana
function bathLayout(m) {
  m.ox = Math.round(view.w / 2 - m.spr.width * m.scale / 2);
  m.oy = Math.round(view.h / 2 - m.spr.height * m.scale / 2) - 20;
  for (const s of m.spots) { s.x = m.ox + s.sx * m.scale + 2; s.y = m.oy + s.sy * m.scale + 2; }
}
function updateBath(dt) {
  const m = mg;
  if (m.over) return;
  bathLayout(m);
  m.time += dt;
  const dx = (input.held.right ? 1 : 0) - (input.held.left ? 1 : 0), dy = (input.held.down ? 1 : 0) - (input.held.up ? 1 : 0);
  m.cur.x = clamp(m.cur.x + dx * 150 * dt, 0, view.w); m.cur.y = clamp(m.cur.y + dy * 150 * dt, 0, view.h);
  if (input.pointer.active) { m.cur.x = input.pointer.x; m.cur.y = input.pointer.y; }
  let scrubbing = false;
  for (const s of m.spots) {
    if (s.hp <= 0) continue;
    if (Math.hypot(s.x - m.cur.x, s.y - m.cur.y) < 12) { s.hp -= dt * 1.6; scrubbing = true; if (s.hp <= 0) sfx('tick'); }
  }
  if (scrubbing && Math.random() < 0.5) m.bubbles.push({ x: m.cur.x + rand(-8, 8), y: m.cur.y + rand(-6, 6), r: rand(1, 3), t: 0 });
  for (const b of m.bubbles) { b.t += dt; b.y -= 12 * dt; }
  m.bubbles = m.bubbles.filter(b => b.t < 1.2);
  const left = m.spots.filter(s => s.hp > 0).length;
  if (left === 0 || m.time >= m.dur) {
    m.over = true;
    const p = current.pet;
    const frac = (m.total - left) / m.total;
    const champu = p.items.champu > 0;
    const hig = Math.round(25 + 55 * frac), joy = champu ? 8 : -3;
    sfx('win');
    finishMinigame({ stars: frac === 1 ? 3 : frac >= 0.6 ? 2 : frac > 0 ? 1 : 0, bones: 0, extra: `<span>🫧 +${hig}</span>${champu ? '<span>🧴💖</span>' : ''}` }, pp => {
      if (champu) pp.items.champu--;
      const e = today(pp); e.care++;
      pp.lastDone.bano = pp.day;
      applyFx(pp, { higiene: hig, felicidad: joy });
      addEvent(pp, '🛁', `Baño con ${Math.round(frac * 100)}% de manchas limpias.`);
      addMilestone(pp, 'bath1', '🛁', 'Primer baño de Luna.');
    }, 'casa');
  }
}
function drawBath(ctx) {
  const m = mg;
  bathLayout(m);
  ctx.fillStyle = '#c8e8f8'; ctx.fillRect(0, 0, view.w, view.h);
  ctx.fillStyle = '#b0d8f0'; for (let y = 0; y < view.h; y += 12) for (let x = (y / 12) % 2 * 12; x < view.w; x += 24) ctx.fillRect(x, y, 12, 12);
  // bañera
  const tw = m.spr.width * m.scale + 30, tx = Math.round(view.w / 2 - tw / 2), ty = m.oy + Math.round(m.spr.height * m.scale * 0.86);
  ctx.drawImage(m.spr, 0, 0, m.spr.width, m.spr.height, m.ox, m.oy, m.spr.width * m.scale, m.spr.height * m.scale);
  for (const s of m.spots) {
    if (s.hp <= 0) continue;
    ctx.globalAlpha = clamp(s.hp, 0.15, 1);
    ctx.fillStyle = '#7a5030'; ctx.fillRect(Math.round(s.x - 5), Math.round(s.y - 4), 10, 8); ctx.fillRect(Math.round(s.x - 3), Math.round(s.y - 6), 6, 12);
    ctx.fillStyle = '#5a3820'; ctx.fillRect(Math.round(s.x - 2), Math.round(s.y - 1), 3, 3);
    ctx.globalAlpha = 1;
  }
  ctx.fillStyle = OUTLINE; ctx.fillRect(tx - 2, ty - 2, tw + 4, 40);
  ctx.fillStyle = '#ffffff'; ctx.fillRect(tx, ty, tw, 36);
  ctx.fillStyle = '#dce8f0'; ctx.fillRect(tx, ty + 30, tw, 6);
  ctx.fillStyle = '#e0f4ff'; for (let i = 0; i < tw; i += 9) ctx.fillRect(tx + i, ty - 4 + (i % 2) * 2, 7, 6);
  for (const b of m.bubbles) { ctx.fillStyle = 'rgba(255,255,255,.85)'; ctx.fillRect(Math.round(b.x), Math.round(b.y), Math.ceil(b.r) + 1, Math.ceil(b.r) + 1); }
  // esponja
  const X = Math.round(m.cur.x), Y = Math.round(m.cur.y);
  ctx.fillStyle = OUTLINE; ctx.fillRect(X - 8, Y - 6, 16, 12);
  ctx.fillStyle = '#f8d040'; ctx.fillRect(X - 7, Y - 5, 14, 10);
  ctx.fillStyle = '#e0a020'; ctx.fillRect(X - 4, Y - 2, 2, 2); ctx.fillRect(X + 2, Y + 1, 2, 2);
  pxText(ctx, `${Math.max(0, Math.ceil(m.dur - m.time))}s`, view.w - 8, 6, '#2c4a6c', 8, 'right');
}
