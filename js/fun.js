'use strict';
/* Mejoras compartidas por el 2D y el 3D (misma partida, mismas reglas, misma interfaz):
   ventana común, clima y estaciones, fiestas, regalo diario, álbum de fotos, galletas en la pastelería,
   adoptar un perrito, amistades con los perros, concurso de trucos, huellas en el valle, metas,
   decoración de la casa, ropa nueva, nombre de la perrita, lectura en voz alta y recordatorios. */

// ====================== Nombre de la perrita ======================
// La voz dice el nombre elegido donde los textos dicen «Luna».
const petName = p => (p && p.name && p.name.trim()) || 'Luna';
function setPetName(p) { window.LUNA_NAME = petName(p); }
const withName = t => (window.LUNA_NAME && window.LUNA_NAME !== 'Luna' ? String(t).replace(/\bLuna\b/g, window.LUNA_NAME) : t);

// ====================== Ventana común (igual en 2D y 3D) ======================
const XM = { open: false, on: null, onClose: null };
function xOpen(html, on, onClose) {
  let el = document.getElementById('xmodal');
  if (!el) {
    el = document.createElement('div'); el.id = 'xmodal'; el.className = 'xmodal';
    el.innerHTML = '<div class="xbox" role="dialog" aria-modal="true"></div>';
    document.body.appendChild(el);
    el.addEventListener('click', ev => {
      const b = ev.target.closest('[data-x]');
      if (!b) { if (ev.target === el) xClose(); return; }
      ev.stopPropagation();
      const [k, ...rest] = b.dataset.x.split(':'), arg = rest.join(':');
      if (k === 'close') return xClose();
      if (b.getAttribute('aria-disabled') === 'true') { speak(b.dataset.say || ''); return; }
      if (XM.on) XM.on(k, arg, b);
    });
  }
  el.querySelector('.xbox').innerHTML = html + '<button class="xclose" data-x="close" aria-label="Cerrar">✖</button>';
  el.hidden = false; XM.open = true; XM.on = on || null; XM.onClose = onClose || null;
  const f = el.querySelector('[data-x]:not(.xclose)') || el.querySelector('.xclose');
  if (f) f.focus({ preventScroll: true });
}
function xSet(html) { const el = document.getElementById('xmodal'); if (el && XM.open) el.querySelector('.xbox').innerHTML = html + '<button class="xclose" data-x="close" aria-label="Cerrar">✖</button>'; }
function xClose() {
  const el = document.getElementById('xmodal');
  if (!el || !XM.open) return;
  el.hidden = true; XM.open = false;
  const cb = XM.onClose; XM.on = null; XM.onClose = null;
  if (cb) cb();
}
window.addEventListener('keydown', ev => { if (XM.open && ['Escape', 'Backspace'].includes(ev.code) && ev.target.tagName !== 'INPUT') { ev.preventDefault(); ev.stopImmediatePropagation(); xClose(); } }, true);
// Leer en voz alta cualquier cosa con data-say que no sea un botón (barras, fichas, etiquetas…)
document.addEventListener('click', ev => { const el = ev.target.closest('[data-say]'); if (el && el.tagName !== 'BUTTON' && !el.closest('button')) speak(el.dataset.say); });

// ====================== Clima y estaciones ======================
// Hemisferio sur (Perú): verano dic-feb, otoño mar-may, invierno jun-ago, primavera sep-nov.
const SEASONS = { verano: { icon: '☀️', name: 'verano' }, otono: { icon: '🍂', name: 'otoño' }, invierno: { icon: '🧣', name: 'invierno' }, primavera: { icon: '🌸', name: 'primavera' } };
function seasonOf(date = new Date()) { const m = date.getMonth(); return m === 11 || m <= 1 ? 'verano' : m <= 4 ? 'otono' : m <= 7 ? 'invierno' : 'primavera'; }
const dayKey = (date = new Date()) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
function hashStr(s) { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return (h >>> 0) / 4294967295; }
// Clima del día y de la hora (igual para todos los aparatos)
function weatherNow(date = new Date()) {
  const ev = festivalOf(date);
  if (ev && ev.weather) return ev.weather;
  const s = seasonOf(date), r = hashStr(dayKey(date) + '|' + Math.floor(date.getHours() / 3));
  const rainP = s === 'invierno' ? 0.4 : s === 'otono' ? 0.25 : s === 'primavera' ? 0.15 : 0.08;
  if (r < rainP) return 'lluvia';
  if (s === 'otono' && r < rainP + 0.35) return 'hojas';
  if (s === 'primavera' && r < rainP + 0.4) return 'petalos';
  if (s === 'verano' && r < 0.6) return 'sol';
  return 'despejado';
}
const WEATHER_UI = { lluvia: { icon: '🌧️', say: '¡Está lloviendo! Luna se moja si pasean afuera.' }, hojas: { icon: '🍂', say: 'Es otoño y caen hojitas.' }, petalos: { icon: '🌸', say: '¡Es primavera! Vuelan pétalos de flores.' },
  sol: { icon: '☀️', say: '¡Qué calor! Luna necesita más agua fresca.' }, despejado: { icon: '⛅', say: '' }, nieve: { icon: '❄️', say: '¡Nieve mágica de Navidad!' }, fuegos: { icon: '🎆', say: '¡Fuegos artificiales!' } };
// Capa de efectos (gotas, hojas, pétalos, nieve, confeti) encima del juego, igual en 2D y 3D
let fxKind = '';
function setFx(kind) {
  if (kind === fxKind) return;
  fxKind = kind;
  let el = document.getElementById('fxlayer');
  if (!el) { el = document.createElement('div'); el.id = 'fxlayer'; el.className = 'fxlayer'; el.setAttribute('aria-hidden', 'true'); document.body.appendChild(el); }
  el.className = 'fxlayer fx-' + (kind || 'none');
  const glyph = { lluvia: '', hojas: '🍂', petalos: '🌸', nieve: '❄', fuegos: '✨', confeti: '🎉' }[kind];
  const n = { lluvia: 40, hojas: 12, petalos: 14, nieve: 30, fuegos: 14, confeti: 22 }[kind] || 0;
  let h = '';
  for (let i = 0; i < n; i++) h += `<i style="left:${(i * 97) % 100}%;animation-delay:${-((i * 0.37) % 6).toFixed(2)}s;animation-duration:${(kind === 'lluvia' ? 0.7 : 5) + (i % 5) * (kind === 'lluvia' ? 0.08 : 0.9)}s">${glyph}</i>`;
  el.innerHTML = h;
}
// La lluvia moja a Luna al pasear (se llama cada «paso» largo del paseo)
let rainSteps = 0;
function rainWalkStep(p) {
  if (weatherNow() !== 'lluvia' || p.asleep) return null;
  if (++rainSteps % 25) return null;
  applyFx(p, { higiene: -3, felicidad: 1 });
  return '💦 ¡Luna se mojó con la lluvia!';
}
// Efecto del clima en el ánimo (se llama cada vez que avanza la simulación)
function weatherTick(p) { const w = weatherNow(); if (w === 'sol' && !p.asleep && Math.random() < 0.3) applyFx(p, { hidratacion: -1 }); }

// ====================== Fiestas y cumpleaños ======================
// Por fecha real (Navidad, Año nuevo, Halloween, Día del perro) y por la edad de la perrita (cada 4 semanas = 1 mes).
function festivalOf(date = new Date()) {
  const m = date.getMonth() + 1, d = date.getDate();
  if (m === 12 && d >= 20 && d <= 26) return { id: 'navidad', icon: '🎄', name: 'Navidad', gift: 'reno', weather: 'nieve', say: '¡Feliz Navidad! Hay nieve mágica y un regalo para Luna: ¡cuernos de reno!' };
  if ((m === 12 && d === 31) || (m === 1 && d <= 2)) return { id: 'anionuevo', icon: '🎆', name: 'Año nuevo', bones: 10, weather: 'fuegos', say: '¡Feliz año nuevo! Mira los fuegos artificiales.' };
  if ((m === 10 && d >= 28) || (m === 11 && d <= 1)) return { id: 'halloween', icon: '🎃', name: 'Halloween', gift: 'calabaza', weather: 'confeti', say: '¡Feliz Halloween! Luna tiene un disfraz de calabaza.' };
  if (m === 8 && d === 26) return { id: 'diaperro', icon: '🐕', name: 'Día del perro', bones: 12, weather: 'confeti', say: '¡Hoy es el Día del Perro! Luna recibe huesos de regalo.' };
  return null;
}
function birthdayOf(p) {
  if (p.day > 1 && p.day % 52 === 0) return { id: 'cumple' + p.day, icon: '🎂', name: `¡${p.day / 52} año${p.day / 52 > 1 ? 's' : ''}!`, gift: 'fiesta', bones: 15, say: `¡Feliz cumpleaños, Luna! Hoy cumple ${p.day / 52} año${p.day / 52 > 1 ? 's' : ''}.` };
  if (p.day > 1 && p.day % 4 === 0) return { id: 'mes' + p.day, icon: '🧁', name: `${p.day / 4} mes${p.day / 4 > 1 ? 'es' : ''}`, gift: 'fiesta', bones: 4, say: `¡Luna cumple ${p.day / 4} mes${p.day / 4 > 1 ? 'es' : ''}! Hay pastelito y gorro de fiesta.` };
  return null;
}
// Fiesta pendiente de celebrar hoy (una vez por fiesta)
function partyToday(p) {
  p.fiestas = p.fiestas || {};
  const f = festivalOf(), b = birthdayOf(p), out = [];
  if (f && !p.fiestas[f.id + new Date().getFullYear()]) out.push({ ...f, key: f.id + new Date().getFullYear() });
  if (b && !p.fiestas[b.id]) out.push({ ...b, key: b.id });
  return out[0] || null;
}
function celebrate(p, ev) {
  p.fiestas = p.fiestas || {}; p.fiestas[ev.key] = p.day;
  let txt = [];
  if (ev.gift && !p.acc.owned.includes(ev.gift)) { p.acc.owned.push(ev.gift); p.acc.worn = ev.gift; txt.push(SHOP.find(x => x.id === ev.gift).icon); }
  if (ev.bones) { p.bones += ev.bones; txt.push(`🦴 +${ev.bones}`); }
  applyFx(p, { felicidad: 15 });
  addEvent(p, ev.icon, `Celebraron: ${ev.name}.`);
  addMilestone(p, 'fiesta', '🎉', '¡Primera fiesta de Luna!');
  if (ev.id.startsWith('cumple')) addMilestone(p, 'cumple', '🎂', '¡Luna cumplió años!');
  return `<div class="result party"><h2>${ev.icon} ${esc(ev.name)}</h2><div class="party-row">🎈🎉🎊🎁</div><div class="gains">${txt.map(t => `<span>${t}</span>`).join('')}</div></div>`;
}

// ====================== Regalo diario y calendario de 7 días ======================
const GIFT_DAYS = [
  { icon: '🦴', txt: '🦴 +3', give: p => { p.bones += 3; } },
  { icon: '🍪', txt: '🍪 +2', give: p => { p.items.premio += 2; } },
  { icon: '🦴', txt: '🦴 +5', give: p => { p.bones += 5; } },
  { icon: '🧴', txt: '🧴 +1', give: p => { p.items.champu += 1; } },
  { icon: '🦴', txt: '🦴 +6', give: p => { p.bones += 6; } },
  { icon: '🌸', txt: '🌸', give: p => { if (!p.acc.owned.includes('flor')) p.acc.owned.push('flor'); else p.bones += 8; } },
  { icon: '🎁', txt: '🦴 +15 👑', give: p => { p.bones += 15; if (!p.acc.owned.includes('corona')) p.acc.owned.push('corona'); } },
];
// ¿Hay regalo hoy? Devuelve el índice del día del calendario (0..6) o -1
function giftReady(p) { const g = p.gift || {}; return g.day === p.day ? -1 : (g.day === p.day - 1 ? (g.chain || 0) % 7 : 0); }
function giftHTML(p) {
  const i = giftReady(p), chain = i < 0 ? ((p.gift.chain - 1) % 7) : i;
  return `<div class="result gift"><h2>🎁</h2><div class="cal">${GIFT_DAYS.map((g, k) => `<span class="cd ${k < chain || (i < 0 && k === chain) ? 'got' : k === chain && i >= 0 ? 'now' : ''}"><b>${k + 1}</b><i>${k < chain || (i < 0 && k === chain) ? '✔' : g.icon}</i></span>`).join('')}</div>
    ${i >= 0 ? `<button class="xbtn big" data-x="claim">🎁 ¡Abrir!</button>` : '<p class="fact">¡Vuelve mañana por otro regalo!</p>'}</div>`;
}
function claimGift(p) {
  const i = giftReady(p);
  if (i < 0) return null;
  const g = GIFT_DAYS[i];
  g.give(p);
  p.gift = { day: p.day, chain: i + 1 };
  addEvent(p, '🎁', `Regalo del día ${i + 1}.`);
  if (i === 6) addMilestone(p, 'gift7', '🎁', '¡Siete días seguidos visitando a Luna!');
  return { icon: g.icon, txt: g.txt, n: i + 1 };
}

// ====================== Álbum de fotos (solo en este aparato) ======================
const albumKey = id => 'luna.album.' + id;
function albumGet(id) { try { return JSON.parse(localStorage.getItem(albumKey(id)) || '[]'); } catch (e) { return []; } }
function albumSet(id, list) { try { localStorage.setItem(albumKey(id), JSON.stringify(list)); return true; } catch (e) { return false; } }
// Guarda una foto (lienzo del juego) con fecha y nombre, en tamaño pequeño
function takePhoto(srcCanvas, prId, p, caption) {
  const W = 360, H = Math.round(W * srcCanvas.height / srcCanvas.width);
  const c = document.createElement('canvas'); c.width = W; c.height = H + 34;
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, c.width, c.height);
  g.imageSmoothingEnabled = true;
  g.drawImage(srcCanvas, 0, 0, W, H);
  g.fillStyle = '#4a2a5a'; g.font = '16px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif'; g.textBaseline = 'middle';
  g.fillText(`🐾 ${petName(p)} · ${new Date().toLocaleDateString('es')}${caption ? ' · ' + caption : ''}`, 10, H + 17);
  const list = albumGet(prId);
  list.unshift({ t: Date.now(), img: c.toDataURL('image/jpeg', 0.72), cap: caption || '' });
  while (list.length > 12) list.pop();
  while (!albumSet(prId, list) && list.length > 1) list.pop();
  addMilestone(p, 'photo1', '📸', '¡Primera foto de Luna!');
  if (list.length >= 10) addMilestone(p, 'photo10', '🖼️', 'Álbum con diez fotos.');
  return list.length;
}
function albumHTML(prId) {
  const list = albumGet(prId);
  return `<div class="result album"><h2>📸 Álbum</h2>${list.length ? `<div class="photos">${list.map((ph, i) => `<button class="ph" data-x="photo:${i}" aria-label="Foto ${i + 1}"><img src="${ph.img}" alt=""></button>`).join('')}</div>` : '<p class="fact">Todavía no hay fotos. Toca 📷 arriba para sacar una.</p>'}</div>`;
}
function photoHTML(prId, i) {
  const ph = albumGet(prId)[i];
  if (!ph) return albumHTML(prId);
  return `<div class="result album"><img class="big-photo" src="${ph.img}" alt="Foto"><div class="row-x"><button class="xbtn" data-x="album">◀</button><button class="xbtn" data-x="delphoto:${i}" aria-label="Borrar foto">🗑️</button></div></div>`;
}
function albumAction(prId, k, arg) {
  if (k === 'album') return xSet(albumHTML(prId));
  if (k === 'photo') return xSet(photoHTML(prId, +arg));
  if (k === 'delphoto') { const l = albumGet(prId); l.splice(+arg, 1); albumSet(prId, l); return xSet(albumHTML(prId)); }
}

// ====================== Ropa nueva, collares y decoración ======================
// (los accesorios se agregan a SHOP en data.js; aquí los colores del collar y los muebles)
const COLLARS = { rojo: '#e03c3c', azul: '#3c6ae0', rosa: '#f070b0', verde: '#3cb860', dorado: '#e8b820', morado: '#9050d0' };
const collarColor = p => COLLARS[(p.acc && p.acc.collar) || 'rojo'] || COLLARS.rojo;
const DECOR = [
  { id: 'cama-nube', slot: 'cama', icon: '☁️', name: 'Cama nube', price: 15, color: '#ffffff' },
  { id: 'cama-real', slot: 'cama', icon: '👑', name: 'Cama real', price: 30, color: '#b070f0' },
  { id: 'alf-arcoiris', slot: 'alfombra', icon: '🌈', name: 'Alfombra arcoíris', price: 12, color: '#ffb347' },
  { id: 'alf-hueso', slot: 'alfombra', icon: '🦴', name: 'Alfombra hueso', price: 10, color: '#fff0c8' },
  { id: 'cuadro-sol', slot: 'cuadro', icon: '🌞', name: 'Cuadro de sol', price: 8 },
  { id: 'cuadro-foto', slot: 'cuadro', icon: '🖼️', name: 'Foto de Luna', price: 8 },
  { id: 'planta-girasol', slot: 'planta', icon: '🌻', name: 'Girasol', price: 6 },
  { id: 'planta-cactus', slot: 'planta', icon: '🌵', name: 'Cactus', price: 6 },
  { id: 'lampara', slot: 'lampara', icon: '⭐', name: 'Lámpara estrella', price: 14 },
  { id: 'cesta', slot: 'juguetes', icon: '🧺', name: 'Cesta de juguetes', price: 10 },
];
function decoOf(p) { if (!p.deco) p.deco = { owned: [], on: {} }; return p.deco; }
const decoOn = (p, slot) => { const d = decoOf(p), id = d.on[slot]; return id ? DECOR.find(x => x.id === id) : null; };
function buyDeco(p, id) {
  const it = DECOR.find(x => x.id === id), d = decoOf(p);
  if (!it || p.bones < it.price || d.owned.includes(id)) return null;
  p.bones -= it.price; d.owned.push(id); d.on[it.slot] = id;
  addEvent(p, it.icon, `Compraste para la casa: ${it.name}.`);
  if (d.owned.length >= 3) addMilestone(p, 'deco', '🏡', 'Decoraste la casa de Luna.');
  return it;
}
function toggleDeco(p, id) { const it = DECOR.find(x => x.id === id), d = decoOf(p); if (!it || !d.owned.includes(id)) return; d.on[it.slot] = d.on[it.slot] === id ? null : id; }
// Casa decorada alegra a Luna una vez al día
function decoBonus(p) { const d = decoOf(p), e = today(p); if (Object.values(d.on).filter(Boolean).length >= 3 && !e.decoJoy) { e.decoJoy = 1; applyFx(p, { felicidad: 4 }); return true; } return false; }
// Vista de la habitación con los muebles (2D, y en la tienda de las dos versiones)
function roomPreviewHTML(p) {
  const s = slot => (decoOn(p, slot) || {}).icon || '';
  return `<div class="room2" aria-label="Casa de Luna"><span class="r-cuadro">${s('cuadro') || '🖼️'}</span><span class="r-lampara">${s('lampara')}</span><span class="r-planta">${s('planta') || '🪴'}</span><span class="r-cama">${s('cama') || '🛏️'}</span><span class="r-alf" style="background:${(decoOn(p, 'alfombra') || {}).color || '#ffb3d1'}"></span><span class="r-jug">${s('juguetes')}</span></div>`;
}
// Tienda: pestaña de muebles y collares (igual en las dos versiones, dentro de la ventana común)
function homeShopHTML(p) {
  const d = decoOf(p);
  return `<div class="result"><h2>🏡 Casa</h2>${roomPreviewHTML(p)}<div class="wallet">🦴 ${p.bones}</div><div class="xgrid">${DECOR.map(it => {
    const own = d.owned.includes(it.id), on = d.on[it.slot] === it.id;
    return `<button class="xopt ${on ? 'on' : ''}" data-x="${own ? 'deco' : 'buydeco'}:${it.id}" ${!own && p.bones < it.price ? 'aria-disabled="true" data-say="Faltan huesos"' : ''} aria-label="${esc(it.name)}"><span>${it.icon}</span><small>${own ? (on ? '✔' : '👆') : '🦴' + it.price}</small></button>`;
  }).join('')}</div>
  <h3>🎨 Collar</h3><div class="xgrid">${Object.entries(COLLARS).map(([k, c]) => `<button class="xopt col ${(p.acc.collar || 'rojo') === k ? 'on' : ''}" data-x="collar:${k}" ${!p.items.collares && k !== 'rojo' ? 'aria-disabled="true" data-say="Compra el collar de colores en la tienda"' : ''} aria-label="Collar ${k}"><span style="background:${c}"></span></button>`).join('')}</div></div>`;
}
function homeShopAction(p, k, arg) {
  if (k === 'buydeco') { const it = buyDeco(p, arg); if (it) { pop(it.icon, '✔'); speak('¡Qué bonito para la casa!'); } }
  if (k === 'deco') toggleDeco(p, arg);
  if (k === 'collar') { p.acc.collar = arg; speak('¡Collar ' + arg + '!'); }
  xSet(homeShopHTML(p));
}

// ====================== Adoptar un perrito del refugio ======================
const BUDDY_NAMES = ['Pelusa', 'Chispa', 'Copito', 'Bombón'];
// Se puede adoptar después de visitar el refugio 3 días distintos (desde la semana 5)
function adoptReady(p) { return !p.buddy && p.day >= 5 && (p.shelterDays || []).length >= 3; }
function shelterVisit(p) { p.shelterDays = p.shelterDays || []; if (!p.shelterDays.includes(p.day)) p.shelterDays.push(p.day); }
function adoptHTML(step, pick) {
  if (step === 1) return `<div class="result"><h2>🏡 ¿A quién adoptas?</h2><div class="xgrid big">${SHELTER_LOOKS.map((l, i) => `<button class="xopt dogpick" data-x="adoptdog:${i}" aria-label="Perrito ${i + 1}"><span style="background:${l.fur};box-shadow:inset -10px -10px 0 ${l.dark}">🐶</span></button>`).join('')}</div></div>`;
  return `<div class="result"><h2>✏️ ¿Cómo se llama?</h2><div class="xgrid">${BUDDY_NAMES.map(n => `<button class="xbtn" data-x="adoptname:${pick}:${n}">${n}</button>`).join('')}</div></div>`;
}
function adoptAction(p, k, arg) {
  if (k === 'adoptdog') return xSet(adoptHTML(2, arg));
  if (k === 'adoptname') {
    const [i, name] = arg.split(':');
    p.buddy = { look: +i, name, day: p.day };
    addEvent(p, '🐶', `¡Adoptaron a ${name} del refugio!`);
    addMilestone(p, 'adopt', '🐶', `¡Adoptaron a ${name}, el nuevo amigo de Luna!`);
    applyFx(p, { felicidad: 20 });
    speak(`¡Bienvenido a casa, ${name}! Ahora ${name} acompaña a Luna en sus paseos.`);
    xSet(`<div class="result party"><h2>🐶💖🐶</h2><p class="fact">¡${esc(name)} ya es parte de la familia!</p><div class="party-row">🎈🏡🎈</div></div>`);
    return true;
  }
}
const buddyLook = p => p.buddy && SHELTER_LOOKS[p.buddy.look];

// ====================== Amistad con los perros del pueblo ======================
// Cada día que saludas a un perro sube un poco; con 💚💚💚 te regala algo una vez.
function friendLevel(p, id) { const n = (p.friends || {})[id] || 0; return n >= 6 ? 3 : n >= 3 ? 2 : n >= 1 ? 1 : 0; }
const friendHearts = (p, id) => '💚'.repeat(friendLevel(p, id)) || '🤍';
function addFriendship(p, D) {
  p.friends = p.friends || {}; p.friendGift = p.friendGift || {};
  const before = friendLevel(p, D.id);
  p.friends[D.id] = (p.friends[D.id] || 0) + 1;
  const after = friendLevel(p, D.id);
  if (after === 3 && !p.friendGift[D.id]) {
    p.friendGift[D.id] = p.day; p.bones += 5;
    addMilestone(p, 'bestfriend', '💖', `¡${D.name} es el mejor amigo de Luna!`);
    return { up: true, gift: true, say: `¡${D.name} es ahora el mejor amigo de Luna! Te trajo un regalo: cinco huesos.` };
  }
  return after > before ? { up: true, say: `¡Su amistad con ${D.name} creció! ${'💚'.repeat(after)}` } : null;
}

// ====================== Concurso de trucos ======================
// Se abre cuando Luna sabe 3 trucos a más del 60 %. Una vez al día.
const CONTEST = { id: 'contest', name: 'Concurso de trucos', short: 'Concurso', icon: '🏆' };
const knownTricks = p => TRICKS.filter(t => (p.tricks[t.id] || 0) >= 60);
function contestState(p) { if (knownTricks(p).length < 3) return ['🔒', 'Primero aprende 3 trucos']; if (gameN(p, 'contest')) return ['⏳', 'Otro día']; return null; }
const MEDALS = [null, { icon: '🥉', name: 'bronce', bones: 3 }, { icon: '🥈', name: 'plata', bones: 6 }, { icon: '🥇', name: 'oro', bones: 10 }];
function contestRewards(pp, ok) {
  const m = MEDALS[clamp(ok, 0, 3)];
  markGame(pp, 'contest'); today(pp).train++;
  applyFx(pp, { felicidad: 8 + ok * 4, energia: -8 });
  if (m) { pp.bones += m.bones; pp.medals = pp.medals || {}; pp.medals[m.name] = (pp.medals[m.name] || 0) + 1; addMilestone(pp, 'contest', '🏆', '¡Luna ganó una medalla en el concurso de trucos!'); if (ok === 3) addMilestone(pp, 'contestgold', '🥇', '¡Medalla de oro en el concurso!'); }
  addEvent(pp, '🏆', m ? `Concurso de trucos: medalla de ${m.name}.` : 'Concurso de trucos: ¡a practicar más!');
  return m;
}

// ====================== Huellas en el Valle Aventura ======================
// Cada día hay un rastro de 6 huellas: al encontrar una aparece la siguiente; al final, una familia de zorritos.
const TRACK_N = 6;
function nextTrack(p) { const R = rpgOf(p); for (let i = 0; i < TRACK_N; i++) if (!R.got.includes('h' + i)) return i; return -1; }
function pickTrack(p, i) {
  const R = rpgOf(p); R.got.push('h' + i);
  if (i < TRACK_N - 1) return { say: i === 0 ? '¡Huellas! Síguelas para ver a dónde llevan.' : '', icon: '🐾', sub: `${i + 1}/${TRACK_N}` };
  p.bones += 5; applyFx(p, { felicidad: 12 });
  addEvent(p, '🦊', 'Siguieron las huellas y encontraron una familia de zorritos.');
  addMilestone(p, 'huellas', '🦊', '¡Siguieron las huellas hasta los zorritos!');
  return { say: '¡Las huellas eran de una familia de zorritos! ¡Qué lindos!', icon: '🦊', sub: '🦴 +5', done: true };
}

// ====================== Galletas en la pastelería (minijuego) ======================
const BAKE_ING = [['🥕', 'zanahoria'], ['🎃', 'calabaza'], ['🌾', 'avena'], ['🥚', 'huevo'], ['🍌', 'plátano'], ['🍫', 'chocolate'], ['🍇', 'uvas']];
const BAKE = { recipe: [], step: 0, phase: 'mix', mistakes: 0, t0: 0 };
function bakeStart() {
  const ok = shuffleX(BAKE_ING.filter(x => !['🍫', '🍇'].includes(x[0]))).slice(0, 3);
  Object.assign(BAKE, { recipe: ok, step: 0, phase: 'mix', mistakes: 0, t0: 0 });
  speak('¡A cocinar galletas para perros! Toca los ingredientes en orden. ¡Ojo: chocolate y uvas son malos para los perros!');
  return bakeHTML();
}
const shuffleX = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function bakeHTML() {
  if (BAKE.phase === 'mix') return `<div class="result bake"><h2>🍪</h2><div class="recipe">${BAKE.recipe.map((r, i) => `<span class="${i < BAKE.step ? 'done' : i === BAKE.step ? 'now' : ''}">${r[0]}</span>`).join('<i>➜</i>')}</div>
    <div class="bowl">🥣</div><div class="xgrid">${shuffleX(BAKE_ING).map(([e, n]) => `<button class="xopt" data-x="ing:${e}" aria-label="${n}"><span>${e}</span></button>`).join('')}</div></div>`;
  return `<div class="result bake"><h2>🔥 Horno</h2><p class="fact">¡Toca cuando la barra esté en verde!</p><div class="oven"><b id="ovenbar"></b><i></i></div><button class="xbtn big" data-x="oven">🍪 ¡Listo!</button></div>`;
}
function bakeAction(p, k, arg) {
  if (k === 'ing') {
    if (['🍫', '🍇'].includes(arg)) { BAKE.mistakes++; speak(arg === '🍫' ? '¡No! El chocolate es malo para los perros.' : '¡No! Las uvas son malas para los perros.'); pop('❌'); return; }
    if (arg === BAKE.recipe[BAKE.step][0]) { BAKE.step++; sfxX(); if (BAKE.step >= BAKE.recipe.length) { BAKE.phase = 'oven'; BAKE.t0 = performance.now(); xSet(bakeHTML()); ovenLoop(); return; } xSet(bakeHTML()); }
    else { BAKE.mistakes++; pop('🤔'); speak('Ese no. Mira la receta.'); }
    return;
  }
  if (k === 'oven') {
    const v = ovenValue(), good = v > 0.6 && v < 0.85;
    const stars = clamp(3 - BAKE.mistakes - (good ? 0 : 1), 0, 3), n = markGame(p, 'bake');
    const bones = n <= 3 ? 1 : 0, cookies = stars >= 3 ? 3 : 2;
    p.items.premio += cookies; p.bones += bones; applyFx(p, { felicidad: 6 });
    addEvent(p, '🍪', `Cocinaron ${cookies} galletas para perros.`);
    addMilestone(p, 'bake', '👩‍🍳', '¡Cocinaron galletas para perros!');
    BAKE.phase = 'done';
    speak(good ? '¡Galletas perfectas!' : '¡Se doraron un poquito, pero quedaron ricas!');
    xSet(`<div class="result"><div class="stars">${'⭐'.repeat(stars)}<span class="dim">${'⭐'.repeat(3 - stars)}</span></div><h2>🍪 ×${cookies}</h2><div class="gains">${bones ? '<span>🦴 +1</span>' : ''}</div><button class="xbtn" data-x="close">👍</button></div>`);
    return true;
  }
}
const ovenValue = () => ((performance.now() - BAKE.t0) / 1600) % 1;
function ovenLoop() { if (BAKE.phase !== 'oven' || !XM.open) return; const b = document.getElementById('ovenbar'); if (b) b.style.width = Math.round(ovenValue() * 100) + '%'; requestAnimationFrame(ovenLoop); }
function sfxX() { try { if (typeof sfx === 'function') sfx('coin'); } catch (e) { /* */ } }

// ====================== Metas (pegatinas → cofres) ======================
const GOAL_STEP = 10;
function goalsInfo(p) { const n = p.milestones.length, claimed = p.goalsClaimed || 0, next = (claimed + 1) * GOAL_STEP; return { n, next, ready: n >= next, pct: Math.min(100, Math.round((n - claimed * GOAL_STEP) / GOAL_STEP * 100)) }; }
function claimGoal(p) {
  const g = goalsInfo(p);
  if (!g.ready) return null;
  p.goalsClaimed = (p.goalsClaimed || 0) + 1;
  const bones = 10 + p.goalsClaimed * 2;
  p.bones += bones;
  const deco = DECOR.find(x => !decoOf(p).owned.includes(x.id));
  if (deco && p.goalsClaimed % 2 === 0) { decoOf(p).owned.push(deco.id); }
  addEvent(p, '🏆', `Cofre de metas: ${g.next} pegatinas.`);
  return { bones, deco: p.goalsClaimed % 2 === 0 ? deco : null, n: g.next };
}
function goalsHTML(p) {
  const g = goalsInfo(p);
  return `<div class="goals" data-say="Tienes ${g.n} pegatinas. Con ${g.next} ganas un cofre."><span>🏅 ${g.n}</span><i class="gbar"><b style="width:${g.pct}%"></b></i><span>${g.ready ? '🎁' : '🎁 ' + g.next}</span></div>`;
}
function goalCardHTML(r) { return `<div class="result party"><h2>🏆 ${r.n} 🏅</h2><div class="party-row">🎁✨🎁</div><div class="gains"><span>🦴 +${r.bones}</span>${r.deco ? `<span>${r.deco.icon}</span>` : ''}</div></div>`; }

// ====================== Lo que se revisa al entrar y cada rato ======================
// Devuelve una tarjeta pendiente (regalo, fiesta o cofre de metas) para mostrar en la ventana común.
function pendingFun(p) {
  if (giftReady(p) >= 0) return 'gift';
  if (partyToday(p)) return 'party';
  if (goalsInfo(p).ready) return 'goal';
  return null;
}
// Muestra la siguiente tarjeta pendiente. ui = { save, refresh, onDone, photo? }
function showPendingFun(p, ui) {
  const k = pendingFun(p);
  if (!k || XM.open) return false;
  if (k === 'gift') {
    speak('¡Hay un regalo para ti! Ven cada día para llenar el calendario.');
    xOpen(giftHTML(p), act => { if (act === 'claim') { const r = claimGift(p); ui.save(); ui.refresh(); speak('¡Sorpresa!'); xSet(`<div class="result party"><h2>🎁 ${r.n}/7</h2><div class="party-row">✨${r.icon}✨</div><div class="gains"><span>${r.txt}</span></div></div>`); } }, ui.onDone);
  } else if (k === 'party') {
    const ev = partyToday(p), html = celebrate(p, ev);
    ui.save(); ui.refresh();
    setFx(ev.weather || 'confeti');
    speak(ev.say);
    xOpen(html, null, () => { setFx(weatherFx()); if (ui.onDone) ui.onDone(); });
  } else {
    const r = claimGoal(p); ui.save(); ui.refresh();
    speak(`¡Llegaste a ${r.n} pegatinas! Ganaste un cofre.`);
    xOpen(goalCardHTML(r), null, ui.onDone);
  }
  return true;
}
const weatherFx = () => { const w = weatherNow(); return ['lluvia', 'hojas', 'petalos', 'nieve', 'fuegos', 'confeti'].includes(w) ? w : ''; };
// Ideas extra de Pío (clima, huellas, adopción, concurso, galletas, metas)
function funExtraIdeas(p, inValleyNow) {
  const g = today(p).games || {}, out = [];
  if (adoptReady(p)) out.push({ icon: '🐶', key: 'fun-adopt', place: 'refugio', doId: 'sp:adopt', say: '¡Un perrito del refugio quiere ser tu amigo! Ve al refugio y toca Adoptar.' });
  if (!contestState(p)) out.push({ icon: '🏆', key: 'fun-contest', place: 'escuela', doId: 'trick:contest', say: '¡Hay concurso de trucos en la escuela! Gana una medalla.' });
  if (nextTrack(p) >= 0 && rpgOf(p).met) out.push({ icon: '🐾', key: 'fun-tracks', ...(inValleyNow ? { target: 'item:huella' } : { place: 'aventura' }), say: 'Hay huellas misteriosas en el Valle Aventura. ¡Síguelas!' });
  if (!g.bake) out.push({ icon: '🍪', key: 'fun-bake', place: 'panaderia', doId: 'sp:bake', say: '¡Cocinemos galletas para perros en la pastelería!' });
  if (weatherNow() === 'lluvia' && p.day >= 8 && !g.rainsplash) out.push({ icon: '💦', key: 'fun-rain', place: 'lago', doId: 'splash', say: '¡Llueve! A Luna le encanta chapotear en el lago.' });
  return out;
}

// ====================== App instalable (sin avisos por ahora) ======================
function registerSW(base) {
  if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
  navigator.serviceWorker.register(base + 'sw.js', { scope: base }).catch(() => { /* sin app */ });
}
const remindersHTML = () => '';   // avisos desactivados a pedido de la familia

// ====================== Nombre (cambiar desde el diario) ======================
function renameHTML(p) { return `<div class="result"><h2>✏️🐶</h2><input id="rename-in" class="xinput" maxlength="14" value="${esc(petName(p))}" aria-label="Nombre de la perrita"><div class="xgrid">${['Luna', 'Lola', 'Kira', 'Nala', 'Maya', 'Coco'].map(n => `<button class="xbtn" data-x="setname:${n}">${n}</button>`).join('')}</div><button class="xbtn big" data-x="setname:">✔ Listo</button></div>`; }
function renameAction(p, arg) {
  const v = (arg || (document.getElementById('rename-in') || {}).value || '').trim().slice(0, 14);
  if (!v) return;
  p.name = v; setPetName(p);
  speak(`¡Hola, ${v}!`);
  return true;
}

// ====================== Abrir una ventana común ======================
// kind: 'album' | 'homeshop' | 'adopt' | 'bake' | 'rename'. ui = { prId, save, refresh, onClose, onAdopt }
function openFun(kind, p, ui) {
  const done = () => { ui.save(); ui.refresh(); };
  if (kind === 'album') return xOpen(albumHTML(ui.prId), (k, a) => albumAction(ui.prId, k, a), ui.onClose);
  if (kind === 'homeshop') { speak('Muebles para la casa y collares de colores.'); return xOpen(homeShopHTML(p), (k, a) => { homeShopAction(p, k, a); done(); }, ui.onClose); }
  if (kind === 'adopt') { speak('¿Qué perrito quieres adoptar?'); return xOpen(adoptHTML(1), (k, a) => { if (adoptAction(p, k, a)) { done(); if (ui.onAdopt) ui.onAdopt(); } }, ui.onClose); }
  if (kind === 'bake') return xOpen(bakeStart(), (k, a) => { if (bakeAction(p, k, a)) done(); }, ui.onClose);
  if (kind === 'rename') return xOpen(renameHTML(p), (k, a) => { if (k === 'setname' && renameAction(p, a)) { done(); xClose(); } }, ui.onClose);
}
// Medalla para mostrar al final del concurso
const contestExtra = ok => { const m = MEDALS[clamp(ok, 0, 3)]; return `<span>${m ? m.icon + ' ' + m.name : '🏆'}</span>`; };
// Botones de la barra superior comunes (clima, foto, mapa ya lo pone cada versión)
function weatherChipHTML() { const w = weatherNow(), s = SEASONS[seasonOf()], ui = WEATHER_UI[w]; return `<span class="chip" data-say="${esc((ui.say || 'Hoy está tranquilo.') + ' Es ' + s.name + '.')}">${ui.icon}</span>`; }
