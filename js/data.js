'use strict';
/* Datos del juego: etapas, calendario veterinario, tienda, niveles. 1 día real = 1 semana de vida. */

const SAVE_KEY = 'luna-cachorrita.save';
const SAVE_VERSION = 2;
const HOUR = 3600 * 1000;
const DAY = 24 * HOUR;
const MAX_CATCHUP_H = 72;
const STEP_H = 0.25;
const MAX_SESSIONS = 6;
const WALK_GOAL = 120;            // casillas caminadas por día para contar como paseo
const TILE = 16;
const DEBUG = new URLSearchParams(location.search).has('debug');

const STAT_INFO = [
  { key: 'saciedad', label: 'Alimento', icon: '🍖', color: '#e8833a' },
  { key: 'hidratacion', label: 'Agua', icon: '💧', color: '#3aa0e8' },
  { key: 'energia', label: 'Energía', icon: '⚡', color: '#e8c63a' },
  { key: 'felicidad', label: 'Felicidad', icon: '💖', color: '#e8457a' },
  { key: 'higiene', label: 'Higiene', icon: '🫧', color: '#55c7c0' },
  { key: 'salud', label: 'Salud', icon: '🩺', color: '#5fc35a' },
];
const STAT_ICON = Object.fromEntries(STAT_INFO.map(s => [s.key, s.icon]));

// Paleta por color de pelaje: fur (base), dark (orejas/sombra), light (hocico/panza)
const COATS = {
  dorado: { name: 'Dorada', fur: '#e0a050', dark: '#a8662c', light: '#f8d8a0' },
  chocolate: { name: 'Chocolate', fur: '#8c5430', dark: '#5a3018', light: '#c89870' },
  negro: { name: 'Negra', fur: '#3c3434', dark: '#1c1818', light: '#847470' },
  manchas: { name: 'Con manchas', fur: '#f4ece0', dark: '#b87840', light: '#ffffff', spots: true },
  gris: { name: 'Gris', fur: '#a0a4b0', dark: '#646874', light: '#dcdee4' },
};
const AVATARS = ['🧒', '👧', '👦', '👩', '👨', '🧑', '👵', '👴', '🦸', '🧑‍🚀'];

const STAGES = [
  { id: 'recien', name: 'Recién nacida', from: 1, to: 2, meals: 4, size: 0, speed: 38, hunger: 1.3, tire: 10 },
  { id: 'bebe', name: 'Bebé', from: 3, to: 7, meals: 4, size: 1, speed: 52, hunger: 1.15, tire: 8 },
  { id: 'cachorra', name: 'Cachorra', from: 8, to: 25, meals: 3, size: 2, speed: 68, hunger: 1, tire: 6 },
  { id: 'joven', name: 'Joven', from: 26, to: 51, meals: 2, size: 3, speed: 78, hunger: 0.9, tire: 5.5 },
  { id: 'adulta', name: 'Adulta', from: 52, to: Infinity, meals: 2, size: 4, speed: 82, hunger: 0.85, tire: 5 },
];
const stageOf = d => STAGES.find(s => d >= s.from && d <= s.to);

function foodFor(d) {
  if (d < 4) return { id: 'leche', name: 'Biberón de leche', icon: '🍼', fx: { saciedad: 30, hidratacion: 20, felicidad: 4 }, msg: 'Luna tomó su leche tibia.' };
  if (d < 7) return { id: 'papilla', name: 'Papilla para cachorro', icon: '🥣', fx: { saciedad: 35, hidratacion: 6, felicidad: 5 }, msg: '¡Luna se manchó el hocico con papilla!' };
  return { id: 'croquetas', name: 'Croquetas de cachorro', icon: '🍖', fx: { saciedad: 40, felicidad: 4 }, msg: 'Crunch, crunch… Luna se comió sus croquetas.' };
}

// Calendario orientativo (semanas de vida). No sustituye al veterinario.
const VACCINES = [
  { id: 'puppy', name: 'Puppy (parvovirus + moquillo)', day: 6, to: 8 },
  { id: 'dhpp1', name: 'Polivalente · 1ª dosis', day: 9, to: 11 },
  { id: 'dhpp2', name: 'Polivalente · 2ª dosis', day: 12, to: 14 },
  { id: 'rabia', name: 'Antirrábica', day: 14, to: 16 },
  { id: 'dhpp3', name: 'Polivalente · refuerzo', day: 16, to: 18 },
  { id: 'anual', name: 'Refuerzo anual', day: 52, to: 56 },
];
const CORE_VACCINES = ['puppy', 'dhpp1', 'dhpp2', 'rabia', 'dhpp3'];
const DEWORM = [2, 4, 6, 8, 12, 16, 20, 24, 36, 48];
for (let d = 60; d <= 600; d += 12) DEWORM.push(d);

const TRICKS = [
  { id: 'sentarse', name: 'Sentarse', short: 'Sentada', icon: '🪑', min: 8 },
  { id: 'venir', name: 'Venir cuando la llamas', short: 'Ven', icon: '📣', min: 8 },
  { id: 'pata', name: 'Dar la pata', short: 'Pata', icon: '🐾', min: 12 },
  { id: 'quieta', name: 'Quieta', short: 'Quieta', icon: '✋', min: 16 },
  { id: 'echarse', name: 'Echarse', short: 'Échate', icon: '⬇️', min: 20 },
  { id: 'vuelta', name: 'Dar una vuelta', short: 'Vuelta', icon: '🔄', min: 26 },
];

const SHOP = [
  { id: 'premio', short: 'Premios', name: 'Bolsa de premios (x3)', icon: '🦴', price: 6, desc: 'Dale un premio en casa: +felicidad.' },
  { id: 'champu', short: 'Champú', name: 'Champú de lujo (x3 baños)', icon: '🧴', price: 8, desc: 'El baño la hace más feliz.' },
  { id: 'mordedor', short: 'Mordedor', name: 'Juguete mordedor', icon: '🧸', price: 10, desc: 'Nuevo juego en casa. Ideal para cuando le salen los dientes.', once: true },
  { id: 'panuelo', short: 'Pañuelo', name: 'Pañuelo azul', icon: '🧣', price: 15, desc: 'Accesorio para el cuello.', acc: true },
  { id: 'lazo', short: 'Lazo', name: 'Lazo rosa', icon: '🎀', price: 20, desc: 'Accesorio para la cabeza.', acc: true },
  { id: 'gorro', short: 'Gorrito', name: 'Gorrito de lana', icon: '🧶', price: 25, desc: 'Accesorio para la cabeza.', acc: true },
  { id: 'gafas', short: 'Gafas', name: 'Gafas de sol', icon: '🕶️', price: 35, desc: '¡Luna súper estilosa!', acc: true },
  { id: 'flor', short: 'Flor', name: 'Flor para la oreja', icon: '🌸', price: 18, desc: 'Una flor junto a la oreja.', acc: true },
  { id: 'capa', short: 'Capa', name: 'Capa de superheroína', icon: '🦸', price: 30, desc: '¡Luna al rescate!', acc: true },
  { id: 'corona', short: 'Corona', name: 'Corona de princesa', icon: '👑', price: 40, desc: 'Para la reina de la casa.', acc: true },
  { id: 'collares', short: 'Collares', name: 'Collares de colores', icon: '🎨', price: 12, desc: 'Elige el color del collar.', once: true },
  // regalos de fiestas (no se venden)
  { id: 'reno', short: 'Reno', name: 'Cuernos de reno', icon: '🦌', price: 0, acc: true, event: true },
  { id: 'calabaza', short: 'Calabaza', name: 'Disfraz de calabaza', icon: '🎃', price: 0, acc: true, event: true },
  { id: 'fiesta', short: 'Fiesta', name: 'Gorro de fiesta', icon: '🥳', price: 0, acc: true, event: true },
];
const SHOP_SALE = SHOP.filter(x => !x.event);

const DAY_MILESTONES = {
  1: ['🐣', '¡Nació Luna! Pesa unos 350 g y tiene los ojitos cerrados.'],
  2: ['👀', 'Luna abrió los ojos por primera vez.'],
  3: ['🐾', 'Luna dio sus primeros pasos: ¡ya puede explorar el bosque!'],
  4: ['🦷', 'Le salieron los dientes de leche: ya come papilla y bebe agua.'],
  5: ['🎾', 'Luna ya corre detrás de la pelota en el parque.'],
  7: ['🍖', 'Luna ya puede comer croquetas de cachorro.'],
  8: ['🎓', 'Luna puede ir a la escuela canina, bañarse y usar collar.'],
  18: ['🦷', 'Luna está cambiando los dientes de leche: ¡quiere morderlo todo!'],
  26: ['🐕', 'Luna ya es una perrita joven.'],
  52: ['🎂', '¡Feliz primer cumpleaños, Luna! Ya es una perra adulta.'],
};

// ---------- Niveles de plataformas (Bosque) ----------
// Constantes de salto calculadas con platformer/scripts/jump_tuner.py:
// 3,5 casillas en 0,36 s a 60 Hz -> gravedad 864 / 1556 (caída), salto 311 px/s.
const PHYS = {
  G_RISE: 864, G_FALL: 1556, JUMP_V: 311, MAX_FALL: 400, RUN: 112, ACCEL: 1400, AIR: 0.65,
  COYOTE: 6, BUFFER: 7, APEX_HANG: 0.5,
};

function buildLevel(def) {
  const W = def.width, H = 12;
  const g = Array.from({ length: H }, () => Array(W).fill(' '));
  const ents = [];
  const put = (x, y, c) => { if (x >= 0 && x < W && y >= 0 && y < H) g[y][x] = c; };
  for (const op of def.ops) {
    const [k, a, b, c] = op;
    if (k === 'ground') for (let x = a; x <= b; x++) for (let y = c ?? 10; y < H; y++) put(x, y, y === (c ?? 10) ? 'g' : '#');
    if (k === 'plat') for (let x = a; x < a + c; x++) put(x, b, '=');
    if (k === 'block') for (let x = a; x < a + c; x++) put(x, b, '#');
    if (k === 'bones') for (let i = 0; i < c; i++) ents.push({ t: 'bone', x: (a + i) * TILE + 4, y: b * TILE + 4 });
    if (k === 'thorn') ents.push({ t: 'thorn', x: a * TILE, y: (b ?? 9) * TILE + 6 });
    if (k === 'hog') ents.push({ t: 'hog', x: a * TILE, y: (b ?? 9) * TILE + 6, dir: -1 });
    if (k === 'bee') ents.push({ t: 'bee', x: a * TILE, y: b * TILE, x0: a * TILE, range: (c || 3) * TILE, ph: Math.random() * 6 });
    if (k === 'goal') ents.push({ t: 'goal', x: a * TILE, y: ((b ?? 10) - 2) * TILE });
  }
  return { ...def, grid: g, ents, w: W, h: H };
}

const LEVEL_DEFS = [
  {
    id: 1, name: 'Sendero de las ardillas', minDay: 3, sky: ['#9ad8f8', '#d8f0ff'], width: 84, start: 2,
    ops: [
      ['ground', 0, 14], ['bones', 5, 9, 3], ['plat', 9, 7, 4], ['bones', 10, 6, 2],
      ['ground', 17, 30], ['thorn', 22], ['bones', 25, 9, 3],
      ['ground', 31, 40, 8], ['hog', 36, 7],
      ['ground', 43, 55], ['plat', 46, 7, 3], ['plat', 50, 5, 3], ['bones', 51, 4, 2],
      ['ground', 58, 83], ['hog', 64], ['thorn', 69], ['bones', 72, 9, 3], ['goal', 79],
    ],
  },
  {
    id: 2, name: 'Colinas de los erizos', minDay: 6, sky: ['#f8c890', '#fff0d0'], width: 104, start: 2,
    ops: [
      ['ground', 0, 10], ['bones', 4, 9, 3],
      ['ground', 13, 22, 9], ['hog', 18, 8], ['bones', 14, 8, 2],
      ['ground', 25, 33, 7], ['bee', 28, 4, 3], ['bones', 27, 6, 4],
      ['ground', 37, 46], ['thorn', 40], ['thorn', 41], ['plat', 39, 6, 4], ['bones', 39, 5, 4],
      ['ground', 50, 62], ['hog', 54], ['hog', 59], ['bones', 56, 9, 2],
      ['plat', 64, 8, 3], ['plat', 69, 6, 3], ['bones', 70, 5, 2], ['plat', 74, 8, 3],
      ['ground', 78, 103], ['bee', 84, 7, 4], ['thorn', 90], ['bones', 93, 9, 3], ['goal', 99],
    ],
  },
  {
    id: 3, name: 'Cueva de los cristales', minDay: 10, sky: ['#2c2850', '#4c4080'], cave: true, width: 120, start: 2,
    ops: [
      ['ground', 0, 12], ['block', 0, 0, 120], ['bones', 6, 9, 3],
      ['ground', 15, 20, 8], ['ground', 23, 28, 6], ['bones', 24, 5, 3], ['bee', 25, 3, 2],
      ['ground', 31, 44], ['hog', 35], ['thorn', 39], ['hog', 42],
      ['plat', 46, 8, 2], ['plat', 50, 6, 2], ['plat', 54, 8, 2], ['bones', 50, 5, 2],
      ['ground', 58, 70, 9], ['bee', 62, 5, 4], ['thorn', 66, 8], ['bones', 60, 8, 2],
      ['ground', 73, 80, 7], ['hog', 77, 6],
      ['ground', 83, 119], ['thorn', 88], ['bee', 92, 7, 3], ['hog', 98], ['thorn', 104], ['bones', 106, 9, 4], ['goal', 114],
    ],
  },
];
