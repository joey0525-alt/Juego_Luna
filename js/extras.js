'use strict';
/* Contenido compartido por el juego 2D y el 3D (misma partida, mismas reglas):
   perros del pueblo, establecimientos nuevos, Valle Aventura (misiones tipo RPG) e ideas de Pío.
   Aquí solo vive la lógica y los datos; cada versión dibuja y anima a su manera. */

// ---------- Lugares nuevos ----------
const SPOT_UI = {
  peluqueria: { icon: '✂️', name: 'Peluquería canina', minDay: 3, help: 'Esta es la peluquería canina. Aquí bañan a Luna, la peinan y le cortan las uñas.' },
  heladeria: { icon: '🍦', name: 'Heladería', minDay: 1, help: 'Esta es la heladería. Tiene helado especial para perros: sin azúcar y sin chocolate, porque el chocolate les hace daño.' },
  panaderia: { icon: '🥐', name: 'Pastelería', minDay: 1, help: 'Esta es la pastelería para perros. Las galletas son premios para darle a Luna en casa o a los perritos del refugio.' },
  biblioteca: { icon: '📚', name: 'Biblioteca', minDay: 1, help: 'Esta es la biblioteca. Escucha un cuento con datos sobre perros o juega a las preguntas.' },
  refugio: { icon: '🏡', name: 'Refugio de perritos', minDay: 1, help: 'Este es el refugio. Aquí viven perritos que buscan familia. Dales mimos o llévales una galleta.' },
  perros: { icon: '🐕', name: 'Parque para perros', minDay: 3, help: 'Este es el parque para perros. Luna puede jugar con otros perritos, correr tras el disco y beber agua.' },
  aventura: { icon: '🗺️', name: 'Valle Aventura', minDay: 1, help: 'Este es el Valle Aventura. El guardabosques te da misiones: busca setas, plumas, cristales y tesoros. Cruza el puente para llegar a las ruinas y a la cueva.' },
};
const markGame = (p, id) => { const e = today(p); e.games = e.games || {}; e.games[id] = (e.games[id] || 0) + 1; return e.games[id]; };
const gameN = (p, id) => ((today(p).games || {})[id] || 0);

// ---------- Perros del pueblo ----------
// size: escala (0,45 chico … 1,35 grande). owner: con dueño (colores 3D y cara 2D). park: viven en el parque para perros.
const DOG_MOOD = {
  friendly: { icon: '💚', word: 'amistoso' },
  shy: { icon: '💛', word: 'tímido' },
  grumpy: { icon: '⚠️', word: '¡cuidado, está enojón!' },
};
const DOG_DEFS = [
  { id: 'toby', name: 'Toby', size: 0.55, mood: 'friendly', ears: 'up', look: { fur: '#f4ece0', dark: '#c08040', light: '#ffffff', spots: true }, owner: { coat: '#ff8f6b', skin: '#f0c8a0', hair: '#6b4a2b', avatar: '👩' } },
  { id: 'rocco', name: 'Rocco', size: 1.25, mood: 'grumpy', ears: 'up', look: { fur: '#4a3a30', dark: '#2a1e18', light: '#a08060' }, owner: { coat: '#4a6aa8', skin: '#c88858', hair: '#2a1a10', avatar: '👨' } },
  { id: 'nube', name: 'Nube', size: 0.85, mood: 'shy', look: { fur: '#f8f8f8', dark: '#d8d8e0', light: '#ffffff' }, owner: { coat: '#c060a0', skin: '#f0c8a0', hair: '#d8d8e0', avatar: '👵' } },
  { id: 'canela', name: 'Canela', size: 0.9, mood: 'friendly', look: { fur: '#c8803c', dark: '#8a4a20', light: '#f0c890' } },
  { id: 'bruno', name: 'Bruno', size: 1.3, mood: 'grumpy', ears: 'up', look: { fur: '#6a6a72', dark: '#3a3a42', light: '#a8a8b0' } },
  { id: 'pipo', name: 'Pipo', size: 0.5, mood: 'shy', look: { fur: '#e0c090', dark: '#a07840', light: '#fff0d0' } },
  { id: 'max', name: 'Max', size: 1.0, mood: 'friendly', look: { fur: '#2c2c2c', dark: '#111111', light: '#d8b080' } },
  { id: 'kira', name: 'Kira', size: 0.45, mood: 'grumpy', ears: 'up', look: { fur: '#e8b878', dark: '#9a6a38', light: '#fff0d8' } },
  { id: 'coco', name: 'Coco', size: 0.5, mood: 'friendly', ears: 'up', look: { fur: '#ffffff', dark: '#e0b0b0', light: '#ffffff' }, park: true },
  { id: 'lola', name: 'Lola', size: 0.85, mood: 'friendly', look: { fur: '#a0a4b0', dark: '#646874', light: '#dcdee4', spots: true }, park: true },
  { id: 'thor', name: 'Thor', size: 1.35, mood: 'friendly', look: { fur: '#e0a050', dark: '#a8662c', light: '#f8d8a0' }, park: true },
  { id: 'sol', name: 'Sol', size: 0.8, mood: 'friendly', ears: 'up', look: { fur: '#d89048', dark: '#5a3a20', light: '#f8e0b0' } },
];
const NICE_DOGS = DOG_DEFS.filter(d => d.mood !== 'grumpy').length;
const SHELTER_LOOKS = [{ fur: '#b07848', dark: '#704020', light: '#e0b890' }, { fur: '#e8e0d0', dark: '#3c3434', light: '#ffffff', spots: true }, { fur: '#505050', dark: '#2a2a2a', light: '#9a9a9a' }];
const dogLabel = D => `${DOG_MOOD[D.mood].icon} ${D.name} · ${D.owner ? 'con su dueño' : D.park ? 'en el parque' : 'suelto'} · ${DOG_MOOD[D.mood].word}`;
const greetedToday = p => Object.keys(today(p).dogs || {}).filter(k => !k.startsWith('ask-'));
// Gruñido de un perro enojón (cuando el avatar o Luna entran en su círculo). Devuelve qué decir (o null).
function dogGrowl(p, D, talk) {
  const e = today(p); e.growls = (e.growls || 0) + 1;
  if (e.growls <= 4) applyFx(p, { felicidad: -3 });
  if (!talk) return null;
  return D.owner ? `¡Cuidado! ${D.name} se pone nervioso. Su dueño lo tiene con correa: mejor saluda de lejos.` : `¡Cuidado! ${D.name} está enojado. Aléjate despacio, sin correr ni gritar, y no lo mires fijo.`;
}
// Saludar a un perro. st = { asked, kidStill (s quieto), lunaThere }.
// Devuelve { say, icon, sub, happy, asked, quest }.
function greetDog(p, D, st) {
  const e = today(p);
  e.dogs = e.dogs || {};
  const r = { say: '', icon: '', sub: '', happy: false, asked: st.asked, quest: null };
  const askReward = () => { if (!e.dogs['ask-' + D.id]) { e.dogs['ask-' + D.id] = 1; p.bones++; r.sub = '🦴 +1'; } };
  if (D.mood === 'grumpy') {
    if (D.owner) { askReward(); r.icon = '🙋'; r.say = `¡Muy bien por preguntar! Su dueño dice: mejor no, ${D.name} se pone nervioso con otros perros.`; }
    else { r.icon = '⚠️'; r.say = `No toques a ${D.name}: está enojado. Aléjate despacio con Luna. Si un perro está suelto y gruñe, avisa a un adulto.`; }
    return r;
  }
  if (D.owner && !st.asked) {   // primero se pide permiso al dueño
    r.asked = true; askReward(); r.icon = '🙋';
    r.say = D.mood === 'shy' ? `¿Puedo saludar a tu perrito? ¡Sí, pero despacito, ${D.name} es tímido! Quédate quieto y toca A otra vez.` : `¿Puedo saludar a tu perrito? ¡Claro que sí, ${D.name} es muy bueno! Toca A otra vez.`;
    return r;
  }
  if (D.mood === 'shy' && st.kidStill < 1) { r.icon = '💛'; r.sub = '🤫'; r.say = `${D.name} se asustó un poquito. Quédate quieto un momento y vuelve a tocar A.`; return r; }
  r.happy = true;
  const first = !e.dogs[D.id];
  e.dogs[D.id] = 1;
  if (first) {
    applyFx(p, { felicidad: st.lunaThere ? 8 : 3, energia: -1 }); p.bones++;
    addEvent(p, '🐕', `${st.lunaThere ? 'Luna jugó' : 'Saludaste'} con ${D.name}.`);
    addMilestone(p, 'dogfriend', '🐕', '¡Luna hizo su primer amigo perruno!');
    if (greetedToday(p).length >= 3) addMilestone(p, 'dogs3', '🐾', 'Luna jugó con tres perritos en un día.');
    r.icon = '🐕'; r.sub = '🦴 +1';
    r.quest = questEvent(p, 'dog');
  } else r.icon = '💚';
  r.say = D.mood === 'shy' ? `¡Bien hecho! Con calma, ${D.name} se dejó acariciar.` : `¡${D.name} está feliz de jugar con ${st.lunaThere ? 'Luna' : 'ustedes'}!`;
  return r;
}

// ---------- Biblioteca ----------
const DOG_FACTS = [
  ['🍫', 'El chocolate es malo para los perros. ¡Nunca les des chocolate!'],
  ['💧', 'Los perros necesitan agua fresca todo el día, sobre todo cuando hace calor.'],
  ['👃', 'La nariz de un perro huele muchísimo mejor que la nuestra.'],
  ['😴', 'Los cachorros duermen muchas horas para crecer sanos y fuertes.'],
  ['🦮', 'Antes de acariciar a un perro que no conoces, pregunta siempre a su dueño.'],
  ['🐾', 'Cuando un perro mueve la cola suelta y relajada, suele estar contento.'],
  ['⚠️', 'Si un perro gruñe o enseña los dientes, aléjate despacio y sin correr.'],
  ['💉', 'Las vacunas protegen a los cachorros de enfermedades.'],
  ['🦷', 'Morder juguetes ayuda a los cachorros cuando les salen los dientes.'],
  ['🛁', 'A los perros no hay que bañarlos todos los días: con cepillarlos basta.'],
  ['🍇', 'Las uvas también son malas para los perros.'],
  ['🎾', 'Jugar y pasear todos los días mantiene a los perros felices.'],
];
const QUIZ = [
  { q: '¿Qué comida es mala para los perros?', a: [['🍫', true], ['🥕', false]] },
  { q: 'Un perro que no conoces: ¿qué haces primero?', a: [['🙋 Preguntar al dueño', true], ['🏃 Correr a abrazarlo', false]] },
  { q: 'Un perro gruñe y enseña los dientes. ¿Qué haces?', a: [['🚶 Me alejo despacio', true], ['👋 Lo toco', false]] },
  { q: '¿Qué necesita Luna todo el día?', a: [['💧 Agua fresca', true], ['🥤 Refresco', false]] },
  { q: '¿Qué la protege de enfermedades?', a: [['💉 Las vacunas', true], ['🍬 Los dulces', false]] },
  { q: '¿Qué fruta es mala para los perros?', a: [['🍇 Uvas', true], ['🍎 Manzana sin semillas', false]] },
];
// Cuento del día: el primero da un hueso
function readStory(p) {
  const n = gameN(p, 'story'), f = DOG_FACTS[(p.day * 3 + n) % DOG_FACTS.length];
  markGame(p, 'story');
  if (n === 0) { p.bones++; applyFx(p, { felicidad: 6 }); addEvent(p, '📖', 'Escucharon un cuento en la biblioteca.'); }
  return { icon: f[0], text: f[1], bone: n === 0 };
}
function nextQuiz(p) { const e = today(p); const q = QUIZ[(p.day + (e.quizN || 0)) % QUIZ.length]; e.quizN = (e.quizN || 0) + 1; return q; }
function answerQuiz(p, q, ok) {
  const e = today(p);
  if (!ok) return { ok, say: '¡Uy! Esa no. La respuesta era: ' + q.a.find(x => x[1])[0], icon: '❌', sub: '' };
  e.quiz = (e.quiz || 0) + 1;
  const bones = e.quiz <= 3 ? 1 : 0; p.bones += bones;
  applyFx(p, { felicidad: 4 });
  addMilestone(p, 'quiz', '🧠', 'Respondiste bien una pregunta perruna.');
  return { ok, say: '¡Correcto! Sabes mucho de perros.', icon: '✅', sub: bones ? '🦴 +1' : '' };
}

// ---------- Acciones de los lugares nuevos ----------
// need = motivo para no poder (insignia) o ''. lunaHere = Luna está con el avatar y despierta.
// Cada acción: [id, icono, nombre, insignia, efecto mostrado]
function playBlockX(p) { return p.asleep ? '💤' : (p.sick && !p.sick.treated) ? '🤒' : p.stats.energia < 15 ? '😴' : p.stats.saciedad < 10 ? '🍖' : ''; }
function spotActions(id, p, lunaHere) {
  const needL = p.asleep ? '💤' : !lunaHere ? '🐶' : '';
  const R = rpgOf(p);
  const L = {
    peluqueria: [['sp:groom', '🛁', 'Baño y peinado', needL || (gameN(p, 'groom') ? '⏳' : p.bones < 4 ? '🦴' : ''), '🦴4'],
      ['sp:nails', '💅', 'Uñas', needL || (p.day - (p.lastDone.unas || 0) < 7 ? '✔' : p.bones < 1 ? '🦴' : ''), '🦴1']],
    heladeria: [['sp:icecream', '🍦', 'Helado de perro', needL || (gameN(p, 'icecream') ? '⏳' : p.bones < 2 ? '🦴' : ''), '🦴2'],
      p.day >= 4 ? ['sp:drink', '🚰', 'Agua', needL || (p.stats.hidratacion >= 92 ? '💧' : ''), '💧'] : null],
    panaderia: [['sp:cookies', '🍪', 'Galletas', p.bones < 3 ? '🦴' : '', '🦴3'],
      ['sp:cake', '🎂', 'Pastelito', needL || (gameN(p, 'cake') ? '⏳' : p.bones < 5 ? '🦴' : ''), '🦴5'],
      ['sp:smell', '👃', 'Oler', needL || (gameN(p, 'smell') ? '⏳' : ''), '💖']],
    biblioteca: [['sp:story', '📖', 'Cuento', '', '🦴'], ['sp:quiz', '❓', 'Preguntas', (today(p).quiz || 0) >= 3 ? '⏳' : '', '🦴']],
    refugio: [['sp:visit', '🤗', 'Mimos', gameN(p, 'shelter') ? '⏳' : '', '💖🦴'], ['sp:treat', '🍪', 'Dar galleta', p.items.premio > 0 ? '' : '🛒', `🍪${p.items.premio}`]],
    perros: [['sp:friends', '🐕', 'Jugar con amigos', needL || playBlockX(p), '💖'], ['sp:frisbee', '🥏', 'Disco', needL || playBlockX(p), '💖🦴'],
      p.day >= 4 ? ['sp:drink', '🚰', 'Agua', needL || (p.stats.hidratacion >= 92 ? '💧' : ''), '💧'] : null],
    aventura: [['sp:quest', '📜', R.met ? 'Misión' : 'Hablar', '', '⭐'], ['sp:bag', '🎒', 'Mochila', R.met ? '' : '🔒', ''], ['sp:rest', '🔥', 'Fogata', p.stats.energia >= 95 ? '⚡' : '', '⚡']],
  }[id] || [];
  return L.filter(Boolean);
}
// Aplica el costo y devuelve qué pasa. { fx, kind, icon, msg, word, extra, anim } para que cada versión lo muestre,
// o { special: 'story' | 'quiz' | 'friends' | 'frisbee' | 'talk' | 'bag' | 'treatShelter' | 'cookies' }.
function spotDo(id, act, p) {
  const k = id + ':' + act;
  switch (k) {
    case 'peluqueria:groom': p.bones -= 4; markGame(p, 'groom'); p.lastDone.unas = p.day; addMilestone(p, 'groom', '✂️', 'Luna fue a la peluquería canina.');
      return { fx: { higiene: 70, felicidad: 10 }, kind: 'care', icon: '✂️', msg: 'Baño y peinado en la peluquería canina.', word: '¡Quedó preciosa!', anim: '🫧', start: '¡A ponerse guapa!' };
    case 'peluqueria:nails': p.bones -= 1; p.lastDone.unas = p.day;
      return { fx: { felicidad: 2 }, kind: 'care', icon: '💅', msg: 'Le cortaron las uñas a Luna.', word: '¡Uñas listas!', anim: '✨' };
    case 'heladeria:icecream': p.bones -= 2; markGame(p, 'icecream'); addMilestone(p, 'icecream', '🍦', 'Luna probó su primer helado para perros.');
      return { fx: { felicidad: 15, hidratacion: 12 }, kind: 'play', icon: '🍦', msg: 'Luna tomó un helado para perros.', word: '¡Qué rico y fresquito!', anim: '🍦', start: 'Un helado especial para perros. ¡Sin chocolate!' };
    case 'heladeria:drink': case 'perros:drink':
      return { fx: { hidratacion: 30 }, kind: 'water', icon: '🚰', msg: 'Bebió agua fresca.', word: '¡Glu glu!', anim: '💧' };
    case 'panaderia:cookies': p.bones -= 3; p.items.premio += 2; addEvent(p, '🍪', 'Compraste galletas para perros.');
      return { special: 'cookies', icon: '🍪', sub: '+2', say: '¡Dos galletas! Dáselas a Luna en casa o llévalas al refugio.' };
    case 'panaderia:cake': p.bones -= 5; markGame(p, 'cake'); today(p).treats = (today(p).treats || 0) + 1;
      return { fx: { felicidad: 20, saciedad: 10 }, kind: 'play', icon: '🎂', msg: 'Luna comió un pastelito para perros.', word: '¡Ñam ñam!', anim: '🎂', start: '¡Un pastelito para Luna!' };
    case 'panaderia:smell': markGame(p, 'smell');
      return { fx: { felicidad: 5 }, kind: null, icon: '👃', msg: 'Olieron el pan recién hecho.', word: '¡Mmm, qué rico huele!', anim: '👃' };
    case 'biblioteca:story': return { special: 'story', ...readStory(p) };
    case 'biblioteca:quiz': return { special: 'quiz', q: nextQuiz(p) };
    case 'refugio:visit': markGame(p, 'shelter'); p.bones += 2; addMilestone(p, 'shelter', '🏡', 'Visitaron a los perritos del refugio.');
      return { fx: { felicidad: 12 }, kind: 'play', icon: '🤗', msg: 'Dieron mimos a los perritos del refugio.', word: '¡Los perritos están felices!', extra: '🦴 +2', anim: '💖' };
    case 'refugio:treat': {
      p.items.premio--; p.bones += 2;
      const R = rpgOf(p); R.treat = p.day;
      addEvent(p, '🍪', 'Llevaron una galleta a los perritos del refugio.');
      return { special: 'treatShelter', icon: '🍪', sub: '🦴 +2', say: '¡Gracias! Los perritos del refugio te lo agradecen.', quest: questEvent(p, 'flag', 'shelterTreat') };
    }
    case 'perros:friends': markGame(p, 'dogpark'); addMilestone(p, 'dogpark', '🐕', 'Luna jugó en el parque para perros.'); outdoorRisk(p);
      return { fx: { felicidad: 18, energia: -10, hidratacion: -6 }, kind: 'play', icon: '🐕', msg: 'Luna jugó con otros perritos en el parque para perros.', word: '¡Luna hizo amigos!', anim: '💖', special2: 'friends' };
    case 'perros:frisbee': {
      const n = markGame(p, 'frisbee'), bones = n <= 3 ? 1 : 0; p.bones += bones; outdoorRisk(p);
      return { fx: { felicidad: 14, energia: -8, hidratacion: -5 }, kind: 'play', icon: '🥏', msg: 'Jugaron al disco en el parque para perros.', word: '¡Qué buena atrapando!', extra: bones ? '🦴 +1' : '', anim: '⭐', special2: 'frisbee' };
    }
    case 'aventura:quest': return { special: 'talk', ...talkRanger(p) };
    case 'aventura:bag': return { special: 'bag', ...bagInfo(p) };
    case 'aventura:rest': return { fx: { energia: 12, felicidad: 3 }, kind: null, icon: '🔥', msg: 'Descansaron junto a la fogata.', word: 'Qué calentito', anim: '🔥' };
  }
  return null;
}

// ---------- Valle Aventura: misiones ----------
const RANKS = ['🥾 Novato', '🧭 Explorador', '🏕️ Aventurero', '🗺️ Gran aventurero', '👑 Leyenda del valle'];
const rankOf = xp => Math.min(RANKS.length - 1, Math.floor(xp / 60));
const QUESTS = [
  { id: 'q-setas', icon: '🍄', type: 'collect', item: 'seta', n: 3, xp: 20, bones: 4, say: 'Busca 3 setas brillantes 🍄 en el valle. ¡Brillan entre los árboles!' },
  { id: 'q-mirador', icon: '🗼', type: 'visit', poi: 'mirador', n: 1, xp: 20, bones: 3, say: 'Sube al mirador: es la torre del este, al final del sendero.' },
  { id: 'q-perros', icon: '🐕', type: 'dog', n: 3, xp: 25, bones: 5, say: 'Haz 3 amigos perrunos en el pueblo. Busca a los perros con corazón verde 💚 y pregunta a su dueño antes de saludar.' },
  { id: 'q-cristal', icon: '💎', type: 'collect', item: 'cristal', n: 1, xp: 30, bones: 6, say: 'Cruza el puente del río y encuentra el cristal azul 💎 en la cueva.' },
  { id: 'q-cofre', icon: '🗝️', type: 'chest', n: 1, xp: 35, bones: 10, say: 'Hay una llave dorada 🗝️ escondida al otro lado del río. Encuéntrala y abre el cofre de las ruinas.' },
  { id: 'q-refugio', icon: '🍪', type: 'flag', flag: 'shelterTreat', n: 1, xp: 25, bones: 5, say: 'Compra galletas en la pastelería 🥐 y lleva una a los perritos del refugio 🏡.' },
  { id: 'q-plumas', icon: '🪶', type: 'collect', item: 'pluma', n: 3, xp: 25, bones: 5, say: 'Junta 3 plumas de colores 🪶 en el valle.' },
];
// Cuando terminan las misiones de la historia, cada día hay misiones nuevas (siempre hay algo que hacer)
const DAILY = [
  { id: 'd-setas', icon: '🍄', type: 'collect', item: 'seta', n: 4, xp: 15, bones: 3, say: 'Misión del día: junta 4 setas brillantes 🍄 en el valle.' },
  { id: 'd-plumas', icon: '🪶', type: 'collect', item: 'pluma', n: 2, xp: 15, bones: 3, say: 'Misión del día: encuentra 2 plumas 🪶 en el valle.' },
  { id: 'd-perros', icon: '🐕', type: 'dog', n: 2, xp: 15, bones: 3, say: 'Misión del día: saluda a 2 perros amistosos 💚 del pueblo.' },
  { id: 'd-cofre', icon: '🗝️', type: 'chest', n: 1, xp: 20, bones: 5, say: 'Misión del día: hay otra llave 🗝️ al otro lado del río. ¡Abre el cofre de las ruinas!' },
  { id: 'd-mirador', icon: '🗼', type: 'visit', poi: 'mirador', n: 1, xp: 10, bones: 2, say: 'Misión del día: sube al mirador a ver el pueblo.' },
  { id: 'd-cristal', icon: '💎', type: 'collect', item: 'cristal', n: 1, xp: 15, bones: 3, say: 'Misión del día: trae el cristal 💎 de la cueva.' },
];
const VALLEY_ITEMS = { seta: { n: 7, pre: 's', icon: '🍄' }, pluma: { n: 4, pre: 'f', icon: '🪶' }, cristal: { n: 1, pre: 'c', icon: '💎' }, llave: { n: 1, pre: 'k', icon: '🗝️' } };
function rpgOf(p) {
  if (!p.rpg) p.rpg = { xp: 0, met: false, story: 0, q: null, bag: {}, day: 0, got: [], daily: 0, dailyDay: 0, key: false, chests: 0, quests: 0 };
  const R = p.rpg;
  if (R.day !== p.day) { R.day = p.day; R.got = []; }
  return R;
}
const questDef = id => QUESTS.find(q => q.id === id) || DAILY.find(q => q.id === id);
function questNow(p) { const R = rpgOf(p); if (!R.q) return null; const def = questDef(R.q.id); return def ? { def, n: R.q.n } : null; }
function assignQuest(p) {
  const R = rpgOf(p);
  if (R.story < QUESTS.length) R.q = { id: QUESTS[R.story].id, n: 0 };
  else {
    if (R.dailyDay !== p.day) { R.dailyDay = p.day; R.daily = 0; }
    const left = item => VALLEY_ITEMS[item].n - R.got.filter(id => id[0] === VALLEY_ITEMS[item].pre).length;
    const doable = d => d.type === 'collect' ? left(d.item) >= d.n : d.type === 'chest' ? R.chestDay !== p.day : d.type === 'dog' ? NICE_DOGS - greetedToday(p).length >= d.n : true;
    const start = p.day * 5 + R.daily + (p.bornAt % 7);
    let def = DAILY[start % DAILY.length];
    for (let i = 0; i < DAILY.length; i++) { const d = DAILY[(start + i) % DAILY.length]; if (doable(d)) { def = d; break; } }
    R.q = { id: def.id, n: 0 };
  }
  if (questDef(R.q.id).type === 'chest') R.key = false;
}
// Objetos del valle de hoy que faltan recoger: [[id, tipo, lado]] (lado 'sur' = al otro lado del río)
function valleyItemList(p) {
  const R = rpgOf(p), out = [];
  for (let i = 0; i < 7; i++) out.push(['s' + i, 'seta', i >= 5 ? 'sur' : 'any']);
  for (let i = 0; i < 4; i++) out.push(['f' + i, 'pluma', i >= 2 ? 'sur' : 'any']);
  out.push(['c0', 'cristal', 'cueva']);
  const q = questNow(p);
  if (q && q.def.type === 'chest' && !R.key) out.push(['k' + R.quests, 'llave', 'sur']);
  return out.filter(([id]) => !R.got.includes(id));
}
// Recoger un objeto del valle. Devuelve { say, icon, sub, quest }.
function pickValleyItem(p, id, item) {
  const R = rpgOf(p);
  R.got.push(id);
  if (item === 'llave') { R.key = true; return { icon: '🗝️', sub: '✔', say: '¡La llave dorada! Ahora abre el cofre de las ruinas.', quest: null }; }
  R.bag[item] = (R.bag[item] || 0) + 1; applyFx(p, { felicidad: 2 });
  if (item === 'cristal') addMilestone(p, 'crystal', '💎', 'Encontraron un cristal en la cueva del valle.');
  return { icon: VALLEY_ITEMS[item].icon, sub: '', say: '', quest: questEvent(p, 'collect', item) };
}
// Avance de la misión. Devuelve null si no aplica, o { def, n, need, done } (done = resultado de completeQuest).
function questEvent(p, type, arg) {
  const R = rpgOf(p), q = questNow(p);
  if (!q || q.def.type !== type) return null;
  if ((type === 'collect' && q.def.item !== arg) || (type === 'visit' && q.def.poi !== arg) || (type === 'flag' && q.def.flag !== arg)) return null;
  R.q.n++;
  const need = q.def.n || 1;
  return { def: q.def, n: R.q.n, need, done: R.q.n >= need ? completeQuest(p, q.def) : null };
}
function completeQuest(p, def) {
  const R = rpgOf(p), before = rankOf(R.xp);
  const daily = !QUESTS.includes(def);
  if (daily) { if (R.dailyDay !== p.day) { R.dailyDay = p.day; R.daily = 0; } R.daily++; } else R.story++;
  const bones = daily && R.daily > 3 ? 0 : def.bones;   // huesos: misiones de historia y las 3 primeras del día
  R.xp += def.xp; R.quests++; p.bones += bones;
  applyFx(p, { felicidad: 10 });
  addEvent(p, '📜', `Misión cumplida en el Valle Aventura (${def.icon}).`);
  addMilestone(p, 'quest1', '📜', '¡Primera misión de exploración cumplida!');
  if (!daily && R.story >= QUESTS.length) addMilestone(p, 'questall', '🏆', '¡Completaste todas las misiones del guardabosques!');
  R.q = null;
  assignQuest(p);
  const after = rankOf(R.xp), next = questNow(p);
  if (after > before) addMilestone(p, 'rank' + after, RANKS[after].split(' ')[0], `Nuevo rango de explorador: ${RANKS[after]}.`);
  return { def, bones, xp: def.xp, rankUp: after > before ? RANKS[after] : '', next: next && next.def,
    say: `¡Misión cumplida! ${after > before ? '¡Subiste de rango! ' : ''}${next ? 'Nueva misión: ' + next.def.say : ''}` };
}
// Tarjeta HTML de misión cumplida (igual en 2D y 3D)
function questDoneHTML(r) {
  return `<div class="result"><h2>📜 ✔</h2><div class="stars">${r.def.icon}</div><div class="gains">${r.bones ? `<span>🦴 +${r.bones}</span>` : ''}<span>⭐ +${r.xp}</span>${r.rankUp ? `<span>${r.rankUp}</span>` : ''}</div>${r.next ? `<p class="fact">${r.next.icon} ${esc(r.next.say)}</p>` : ''}</div>`;
}
function talkRanger(p) {
  const R = rpgOf(p);
  if (!R.met) {
    R.met = true; assignQuest(p);
    addMilestone(p, 'ranger', '🧭', 'Conociste al guardabosques del Valle Aventura.');
    const q = questNow(p);
    return { first: true, say: `¡Hola, exploradores! Soy el guardabosques. En este valle hay setas, plumas, cristales y tesoros. Primera misión: ${q.def.say}`,
      html: `<div class="result"><h2>🧭</h2><div class="howto"><div><span>🍄🪶💎🗝️</span></div></div><p class="fact">${q.def.icon} ${esc(q.def.say)}</p></div>` };
  }
  if (!R.q) assignQuest(p);
  const q = questNow(p), need = q.def.n || 1, have = Math.min(q.n, need);
  return { first: false, say: `Tu misión: ${q.def.say} Llevas ${have} de ${need}.`,
    html: `<div class="result"><h2>📜</h2><div class="stars">${q.def.icon}</div><p class="fact">${esc(q.def.say)}</p><div class="gains"><span>${have}/${need}</span><span>🦴 ${q.def.bones}</span><span>⭐ ${q.def.xp}</span></div></div>` };
}
function bagInfo(p) {
  const R = rpgOf(p), b = R.bag, rk = rankOf(R.xp), pct = rk === RANKS.length - 1 ? 100 : Math.round((R.xp % 60) / 60 * 100);
  return { say: `Eres ${RANKS[rk].slice(RANKS[rk].indexOf(' ') + 1)}. Has cumplido ${R.quests} misiones.`,
    html: `<div class="result"><h2>🎒</h2><div class="weekbox"><span>${RANKS[rk]}</span><span>📜 ${R.quests}</span></div>
      <div class="xpbar"><b style="width:${pct}%"></b></div>
      <div class="stickers"><span class="stk">🍄 ${b.seta || 0}</span><span class="stk">🪶 ${b.pluma || 0}</span><span class="stk">💎 ${b.cristal || 0}</span><span class="stk">🗝️ ${R.chests}</span></div></div>` };
}
function spotInfo(id, p) {
  if (['panaderia', 'heladeria', 'peluqueria'].includes(id)) return `🦴 ${p.bones}${id === 'panaderia' ? ` · 🍪 ${p.items.premio}` : ''}`;
  if (id === 'aventura') { const R = rpgOf(p), q = questNow(p); return `${RANKS[rankOf(R.xp)]} · ⭐ ${R.xp}${q ? ` · ${q.def.icon} ${Math.min(q.n, q.def.n || 1)}/${q.def.n || 1}` : ''}`; }
  return '';
}
// Cofre de las ruinas. Devuelve { say, icon, sub, opened, quest }.
function openChest(p) {
  const R = rpgOf(p), q = questNow(p);
  if (R.chestDay === p.day) return { icon: '📦', sub: '', say: 'Este cofre ya está abierto. ¡Vuelve mañana!' };
  if (!R.key || !q || q.def.type !== 'chest') return { icon: '🔒', sub: '', say: q && q.def.type === 'chest' ? 'Está cerrado con llave. Busca la llave dorada al otro lado del río.' : 'Un cofre antiguo cerrado con llave. Pregunta al guardabosques: a veces pide abrirlo.' };
  R.key = false; R.chestDay = p.day; R.chests++;
  const gems = 4 + Math.floor(Math.random() * 5);
  p.bones += gems;
  addMilestone(p, 'chest', '🗝️', '¡Abrieron el cofre antiguo de las ruinas!');
  return { opened: true, icon: '📦', sub: `🦴 +${gems}`, say: '¡El cofre se abrió! Tenía huesos dorados.', quest: questEvent(p, 'chest') };
}
// Mirador: la primera visita del día alegra a Luna; si la misión lo pide, cuenta. Devuelve null si no pasa nada.
function visitMirador(p) {
  const q = questNow(p), forQuest = q && q.def.type === 'visit' && q.def.poi === 'mirador', first = !gameN(p, 'mirador');
  if (!first && !forQuest) return null;
  markGame(p, 'mirador');
  if (first) applyFx(p, { felicidad: 6 });
  addMilestone(p, 'mirador', '🗼', 'Subieron al mirador del Valle Aventura.');
  return { first, say: first ? '¡Qué vista! Desde el mirador se ve todo el pueblo.' : '', quest: questEvent(p, 'visit', 'mirador') };
}

// ---------- Ideas de Pío (las mismas en 2D y 3D) ----------
// Lista ordenada de sugerencias suaves. Cada versión pone antes los huesos y el tesoro.
// target: 'dog' | 'mirador' | 'chest' | 'item:<tipo>' → cada versión lo convierte en una flecha.
function questIdea(p, inValleyNow) {
  const q = questNow(p);
  if (!q) return null;
  const D = q.def, left = Math.max(0, (D.n || 1) - q.n), o = { icon: D.icon, key: 'quest-' + D.id, say: D.say.replace(/^Misión del día: /, '') };
  if (D.type === 'collect') { if (inValleyNow) o.target = 'item:' + D.item; else o.place = 'aventura'; }
  else if (D.type === 'visit') o.target = 'mirador';
  else if (D.type === 'dog') o.target = 'dog';
  else if (D.type === 'chest') { if (rpgOf(p).key) o.target = 'chest'; else if (inValleyNow) o.target = 'item:llave'; else o.place = 'aventura'; }
  else if (D.type === 'flag') { if (p.items.premio > 0) { o.place = 'refugio'; o.doId = 'sp:treat'; } else { o.place = 'panaderia'; o.doId = 'sp:cookies'; } }
  if (left > 1) o.say += ` Te faltan ${left}.`;
  return o;
}
function funIdeas(p, sleeping, inValleyNow, doIds) {
  const g = today(p).games || {}, d = p.day, tired = sleeping || !!cantExercise(p), withL = !sleeping && !p.asleep;
  const R = rpgOf(p), list = [];
  // Si la misión del día ya no se puede cumplir hoy (no quedan perros u objetos), el guardabosques da otra
  const q = questNow(p);
  if (q && !QUESTS.includes(q.def)) {
    const need = (q.def.n || 1) - q.n, V = VALLEY_ITEMS[q.def.item];
    const left = q.def.type === 'dog' ? NICE_DOGS - greetedToday(p).length : q.def.type === 'collect' ? V.n - R.got.filter(id => id[0] === V.pre).length : need;
    if (left < need) { assignQuest(p); R.respawn = true; }
  }
  if (!R.met) list.push({ icon: '🗺️', key: 'valley', place: 'aventura', doId: 'sp:quest', say: '¡hay un valle nuevo para explorar! Ve con el guardabosques al Valle Aventura, al sureste del pueblo.' });
  else { const qi = questIdea(p, inValleyNow); if (qi) list.push(qi); }
  const ideas = [
    { id: 'memory', ok: true, icon: '🃏', place: 'casa', doId: 'memory', say: '¿jugamos a la memoria? Ve a la casa y toca Memoria.', again: '¿otra partida de memoria? Ve a la casa.' },
    { id: 'ducks', ok: true, icon: '🦆', place: 'lago', doId: 'duckfeed', say: '¡los patos tienen hambre! Ve al lago y dales su comida.', again: '¡los patos quieren más comida! Ve al lago.' },
    { id: 'story', ok: true, icon: '📖', place: 'biblioteca', doId: 'sp:story', say: '¡hora del cuento! Ve a la biblioteca a aprender cosas de perros.', again: '¿otro dato perruno? Ve a la biblioteca.' },
    { id: 'quiz', ok: (today(p).quiz || 0) < 3, icon: '❓', place: 'biblioteca', doId: 'sp:quiz', say: '¿cuánto sabes de perros? Juega a las preguntas en la biblioteca.', again: '¿más preguntas? ¡Vamos a la biblioteca!' },
    { id: 'dogs', ok: !greetedToday(p).length, icon: '🐕', target: 'dog', say: 'busca un perro con corazón verde 💚 y salúdalo. Si tiene dueño, ¡pregúntale primero!', again: '¡hay más perritos en el pueblo! Busca los corazones verdes 💚.' },
    { id: 'shelter', ok: true, icon: '🏡', place: 'refugio', doId: 'sp:visit', say: 'los perritos del refugio quieren mimos. ¡Vamos a visitarlos!' },
    { id: 'agility', ok: d >= 3 && !tired, icon: '🏃', place: 'parque', doId: 'agility', say: '¡carrera de obstáculos! Ve al parque y toca Carrera.', again: '¿otra carrera de obstáculos? ¡Vamos al parque!' },
    { id: 'dogpark', ok: d >= 3 && !tired, icon: '🐕', place: 'perros', doId: 'sp:friends', say: '¡Luna quiere jugar con otros perritos! Ve al parque para perros.', again: '¿más juegos en el parque para perros? ¡Prueba el disco!' },
    { id: 'frisbee', ok: d >= 3 && !tired, icon: '🥏', place: 'perros', doId: 'sp:frisbee', say: '¡lanza el disco a Luna en el parque para perros!', again: '¡otra ronda de disco en el parque para perros!' },
    { id: 'hide', ok: d >= 5 && !tired, icon: '🙈', place: 'parque', doId: 'hide', say: '¡juguemos al escondite! Ve al parque y toca Escondite.', again: '¿otra vez al escondite? ¡Vamos al parque!' },
    { id: 'forest', ok: d >= 3 && !tired, icon: '🌲', place: 'bosque', doId: 'level:', say: '¡aventura en el bosque! Lleva a Luna saltando hasta la casita.', again: '¡vamos de aventura al bosque!' },
    { id: 'mirador', ok: R.met, icon: '🗼', target: 'mirador', say: 'sube al mirador del Valle Aventura para ver todo el pueblo.' },
    { id: 'icecream', ok: withL && p.bones >= 2, icon: '🍦', place: 'heladeria', doId: 'sp:icecream', say: '¡hace calor! Invita a Luna a un helado para perros en la heladería.' },
    { id: 'groom', ok: withL && d >= 3 && p.bones >= 4 && (p.stats.higiene < 80 || d - (p.lastDone.unas || 0) >= 7), icon: '✂️', place: 'peluqueria', doId: 'sp:groom', say: 'Luna necesita un buen peinado. ¡Vamos a la peluquería canina!' },
    { id: 'smell', ok: withL, icon: '🥐', place: 'panaderia', doId: 'sp:smell', say: '¡qué rico huele la pastelería! Lleva a Luna a olerla.' },
  ].filter(x => x.ok && (!x.doId || !doIds || doIds.has(x.doId)));
  const mk = (it, txt, pre) => ({ icon: it.icon, place: it.place, doId: it.doId, target: it.target, key: pre + it.id, say: txt });
  for (const it of ideas) if (!g[it.id] || it.id === 'dogs') list.push(mk(it, it.say, 'fun-'));
  if (p.bones >= 8) list.push({ icon: '🛒', key: 'shop', place: 'tienda', say: '¡tienes muchos huesos! Ve a la tienda a comprarle algo bonito a Luna. Si prefieres guardarlos, toca Ahora no.' });
  const { waiting } = routinePending(p);
  if (!sleeping && waiting && WAIT_SAY[waiting.icon]) list.push({ ...WAIT_SAY[waiting.icon], key: 'wait-' + waiting.icon });
  for (const it of ideas) if (it.again) list.push(mk(it, it.again, 'again-'));
  // Siempre queda algo: explorar el valle
  list.push({ icon: '🍄', key: 'explore', place: 'aventura', say: '¡vamos a explorar el Valle Aventura! Busca setas brillantes, plumas y conejitos.' });
  return list;
}
// Primera letra en mayúscula, o «Mientras descansa, …» si Luna duerme
function ideaSay(txt, sleeping) {
  return sleeping ? 'Luna está durmiendo. Mientras descansa, ' + txt.replace(/^([¡¿]?)(.)/, (m0, a, c) => a + c.toLowerCase()) : txt.replace(/^([¡¿]?)(.)/, (m0, a, c) => a + c.toUpperCase());
}
// Aviso de novedades para quien ya jugaba antes de la ampliación
const NEWS_HTML = `<div class="result"><h2>🎉</h2><div class="howto"><div><span>🐕🐩🦮</span></div><div><span>💚</span><i>👋</i><span>💛</span><i>🤫</i><span>⚠️</span><i>🚶↩️</i></div><div><span>✂️ 🍦 🥐 📚 🏡</span></div><div><span>🗺️ 🍄 🪶 💎 🗝️</span></div></div></div>`;
const NEWS_SAY = '¡El pueblo creció! Hay perritos nuevos, un parque para perros, tiendas nuevas y el Valle Aventura para explorar. Mira los corazones: verde es amistoso, amarillo tímido y la señal roja es peligro.';
// Pegatinas nuevas para el diario
const EXTRA_STICKERS = [
  { key: 'dogfriend', icon: '🐕', text: 'Primer amigo perruno' }, { key: 'dogs3', icon: '🐾', text: 'Tres perritos en un día' }, { key: 'dogpark', icon: '🥏', text: 'Parque para perros' },
  { key: 'shelter', icon: '🏡', text: 'Visita al refugio' }, { key: 'groom', icon: '✂️', text: 'Peluquería canina' }, { key: 'icecream', icon: '🍦', text: 'Helado para perros' }, { key: 'quiz', icon: '🧠', text: 'Pregunta perruna' },
  { key: 'ranger', icon: '🧭', text: 'Conociste al guardabosques' }, { key: 'quest1', icon: '📜', text: 'Primera misión' }, { key: 'mirador', icon: '🗼', text: 'Mirador' },
  { key: 'crystal', icon: '💎', text: 'Cristal de la cueva' }, { key: 'chest', icon: '🗝️', text: 'Cofre antiguo' }, { key: 'questall', icon: '🏆', text: 'Todas las misiones' },
];

// =====================================================================================
// Acciones de los lugares de siempre (Casa, Parque, Lago, Veterinaria): misma lista, mismos
// motivos para no poder y mismos efectos en 2D y 3D. Cada versión solo cambia cómo se ve.
// Cada acción: { id, icon, label, fx (iconos), badge, why, count, group }
// =====================================================================================
const WHY = {
  sleep: ['💤', 'Está dormida'], tired: ['😴', 'Está cansada'], sick: ['🤒', 'Está enfermita'], full: ['😋', 'Está llena'], wet: ['💧', 'No tiene sed'],
  hungry: ['🍖', 'Tiene hambre'], wait: ['⏳', 'Otro día'], money: ['🦴', 'Faltan huesos'], done: ['✔', 'Ya está'], nosleep: ['⚡', 'No tiene sueño'], rested: ['⚡', 'No está cansada'],
};
const lockW = w => ['🔒', `Cuando Luna crezca (semana ${w})`];
function canPlayX(p, minE = 15) {
  if (p.asleep) return WHY.sleep;
  if (p.sick && !p.sick.treated) return WHY.sick;
  if (p.stats.energia < minE) return WHY.tired;
  if (p.stats.saciedad < 10) return WHY.hungry;
  return null;
}
const starBarX = pct => '★'.repeat(Math.round(pct / 20)) + '☆'.repeat(5 - Math.round(pct / 20));
function placeActions(id, p) {
  const s = p.stats, d = p.day, e = today(p), sl = p.asleep ? WHY.sleep : null, out = [];
  const A = (aid, icon, label, o = {}) => { const no = o.no || null; out.push({ id: aid, icon, label, fx: o.fx || '', badge: no ? no[0] : '', why: no ? no[1] : '', count: o.count, group: o.group || '' }); };
  if (id === 'casa') {
    const f = foodFor(d);
    A('eat', f.icon, 'Comer', { group: '🍽️', fx: '🍖', no: sl || (s.saciedad >= 90 ? WHY.full : null) });
    if (d >= 4) A('water', '💧', 'Agua', { group: '🍽️', fx: '💧', no: sl || (s.hidratacion >= 92 ? WHY.wet : null) });
    A('treat', '🍪', 'Premio', { group: '🍽️', fx: '💖', count: p.items.premio, no: sl || (!p.items.premio ? ['🛒', 'Cómpralos en la tienda o la pastelería'] : (e.treats || 0) >= 3 ? WHY.wait : null) });
    A('pet', '🤗', 'Mimos', { group: '💖', fx: '💖' });
    A('memory', '🃏', 'Memoria', { group: '💖', fx: '💖🦴', no: sl });
    if (p.items.mordedor) A('chew', '🧸', 'Mordedor', { group: '💖', fx: '💖', no: d < 3 ? lockW(3) : canPlayX(p) });
    if (d >= 3) A('potty', '🧻', 'Papel', { group: '💖', fx: starBarX(p.potty), no: sl || (p.potty >= 100 ? WHY.done : null) });
    if (p.asleep) A('wake', '⏰', 'Despertar', { group: '🌙' }); else A('sleep', '🛏️', 'Dormir', { group: '🌙', fx: '⚡' });
    A('nap', '😴', 'Siesta', { group: '🌙', fx: '⚡', count: 3 - e.naps, no: sl || (e.naps >= 3 ? WHY.wait : s.energia >= 90 ? WHY.nosleep : null) });
    if (d < 8) A('wipe', '🧽', 'Limpiar', { group: '🫧', fx: '🫧', no: sl });
    else A('bath', '🛁', 'Baño', { group: '🫧', fx: '🫧', no: sl || (p.lastDone.bano && d - p.lastDone.bano < 3 ? WHY.wait : null) });
    if (d >= 3) A('brush', '🖌️', 'Cepillar', { group: '🫧', fx: '🫧💖', no: sl });
    if (d >= 6) A('nails', '✂️', 'Uñas', { group: '🫧', no: sl || (d - (p.lastDone.unas || 0) < 5 ? WHY.wait : null) });
    if (d >= 10) A('teeth', '🪥', 'Dientes', { group: '🫧', fx: '🫧', no: sl });
    if (p.mess) A('clean', '🧻', 'Recoger', { group: '🫧', fx: '💩✖', count: p.mess });
    if (p.acc.worn) A('wear:', '🚫', 'Quitar', { group: '🎀' });
    for (const a of p.acc.owned) { const it = SHOP.find(x => x.id === a); A('wear:' + a, it.icon, it.short, { group: '🎀', no: p.acc.worn === a ? WHY.done : null }); }
    if (!p.acc.owned.length) A('none', '🎀', 'Ropa', { group: '🎀', no: ['🛒', 'Cómprala en la tienda'] });
  }
  if (id === 'parque') {
    A('fetch', '🎾', 'Pelota', { fx: '🦴💖', no: d < 5 ? lockW(5) : canPlayX(p) });
    A('kick', '⚽', 'Patear', { fx: '💖', no: canPlayX(p) });
    A('agility', '🏃', 'Carrera', { fx: '🦴💖', no: canPlayX(p) });
    A('hide', '🙈', 'Escondite', { fx: '🦴💖', no: d < 5 ? lockW(5) : canPlayX(p) });
    A('stroll', '🚶', 'Pasear', { fx: '💖', no: canPlayX(p) });
    A('bench', '🪑', 'Descansar', { fx: '⚡', no: sl || (s.energia >= 95 ? WHY.rested : null) });
  }
  if (id === 'lago') {
    A('duckfeed', '🌾', 'Dar de comer', { fx: '🦆🦴', no: sl });
    A('ducks', '🦆', 'Mirar patos', { fx: '💖', no: sl || (e.ducks ? WHY.wait : null) });
    if (d >= 4) A('fountain', '🚰', 'Beber', { fx: '💧', no: sl || (s.hidratacion >= 92 ? WHY.wet : null) });
    if (d >= 8) A('splash', '💦', 'Chapotear', { fx: '💖', no: canPlayX(p) });
  }
  if (id === 'vet') {
    const due = VACCINES.find(v => ['disponible', 'atrasada'].includes(vaccineStatus(p, v)));
    if (p.sick && !p.sick.treated) A('treat-sick', '💊', 'Curar', { fx: '🩺' });
    if (due) A('vac:' + due.id, '💉', 'Vacuna', { fx: '🛡️' }); else A('none', '💉', 'Vacuna', { no: WHY.done });
    A('deworm', '🐛', 'Pastilla', { fx: '🛡️', no: dewormDue(p) ? null : WHY.done });
    A('checkup', '🩺', 'Revisar', { fx: '⚖️' });
  }
  return out;
}
// Efecto de una acción instantánea. Aplica los cambios que no son de ánimo y devuelve
// { fx, kind, icon, msg, word, anim } (cada versión aplica fx con su animación) o { special } para el resto.
function placeEffect(cmd, p) {
  const [k, arg] = cmd.split(':'), d = p.day, e = today(p);
  switch (k) {
    case 'eat': { const f = foodFor(d); return { fx: f.fx, kind: 'meal', icon: f.icon, msg: f.msg, word: '¡Ñam ñam!', anim: 'food' }; }
    case 'water': return { fx: { hidratacion: 40 }, kind: 'water', icon: '💧', msg: 'Luna bebió agua fresca.', word: '¡Glu glu!', anim: 'water' };
    case 'treat': p.items.premio--; return { fx: { felicidad: 10, saciedad: 5 }, kind: 'treat', icon: '🍪', msg: 'Le diste un premio.', word: '¡Un premio!', anim: 'here' };
    case 'pet': return { fx: p.asleep ? { felicidad: 4 } : { felicidad: 12, energia: -2 }, kind: 'play', icon: '🤗', msg: 'Mimos y caricias.', word: p.asleep ? '' : '¡Te quiero!', anim: 'here' };
    case 'chew': return { fx: { felicidad: 18, energia: -8, saciedad: -2 }, kind: 'play', icon: '🧸', msg: 'Jugó con el mordedor.', word: '¡Ñic ñic!', anim: 'toys' };
    case 'nap': e.naps++; return { fx: { energia: 25 }, kind: null, icon: '😴', msg: 'Durmió una siesta cortita.', word: 'Siesta', anim: 'bed' };
    case 'wipe': return { fx: { higiene: 20 }, kind: 'care', icon: '🧽', msg: 'La limpiaste con un paño tibio.', word: '¡Limpita!', anim: 'center' };
    case 'brush': return { fx: { higiene: 10, felicidad: 5 }, kind: 'care', icon: '🖌️', msg: 'Le cepillaste el pelo.', word: '¡Qué suave!', anim: 'center' };
    case 'nails': p.lastDone.unas = d; return { fx: { felicidad: -3 }, kind: 'care', icon: '✂️', msg: 'Le cortaste las uñas con cuidado.', word: 'Uñas cortas', anim: 'center' };
    case 'teeth': p.lastDone.dientes = d; return { fx: { higiene: 6, salud: 2 }, kind: 'care', icon: '🪥', msg: 'Le cepillaste los dientes.', word: '¡Dientes limpios!', anim: 'center' };
    case 'clean': p.mess = 0; return { fx: {}, kind: 'care', icon: '🧻', msg: 'Limpiaste los accidentes.', word: '¡Todo limpio!', anim: 'here' };
    case 'stroll': e.walk = 1; p.potty = clamp(p.potty + 3, 0, 100); outdoorRisk(p); return { fx: { felicidad: 15, energia: -10, hidratacion: -5 }, kind: 'play', icon: '🚶', msg: 'Paseo tranquilo por el parque.', word: '¡A pasear!', anim: 'stroll' };
    case 'kick': outdoorRisk(p); return { fx: { felicidad: 16, energia: -9 }, kind: 'play', icon: '⚽', msg: 'Patearon la pelota en el parque.', word: '¡Gol!', anim: 'kick' };
    case 'bench': return { fx: { energia: 8 }, kind: null, icon: '🪑', msg: 'Descansaron en la banca.', word: 'Descanso', anim: 'bench' };
    case 'ducks': e.ducks = true; outdoorRisk(p); return { fx: { felicidad: 10 }, kind: 'play', icon: '🦆', msg: 'Miraron a los patos.', word: '¡Cuac cuac!', anim: 'ducks' };
    case 'fountain': return { fx: { hidratacion: 30 }, kind: 'water', icon: '🚰', msg: 'Bebió del bebedero del lago.', word: '¡Glu glu!', anim: 'fountain' };
    case 'splash': outdoorRisk(p); return { fx: { felicidad: 18, energia: -10, higiene: -18 }, kind: 'play', icon: '💦', msg: 'Chapoteó en la orilla.', word: '¡Splash!', anim: 'splash' };
    case 'treat-sick': p.sick.treated = true; p.stats.salud = clamp(p.stats.salud + 10, 0, 100); return { fx: {}, kind: null, icon: '💊', msg: 'La veterinaria le dio tratamiento a Luna.', word: 'Ahora necesita descansar, comer y beber agua', anim: 'vet' };
    case 'deworm': p.deworm.push(d); return { fx: {}, kind: null, icon: '💊', msg: 'Luna tomó su desparasitante.', word: '¡Pastilla tomada!', anim: 'vet' };
    case 'vac': {
      const v = VACCINES.find(x => x.id === arg); p.vaccines[v.id] = d;
      if (walkUnlocked(p)) addMilestone(p, 'vacunas', '🛡️', 'Luna completó sus vacunas de cachorro.');
      return { fx: { felicidad: -8 }, kind: null, icon: '💉', msg: `Vacuna aplicada: ${v.name}.`, word: '¡Qué valiente!', anim: 'vet', sad: true };
    }
    case 'wear': p.acc.worn = arg || null; return { special: 'wear', icon: arg ? SHOP.find(x => x.id === arg).icon : '🚫', word: arg ? '¡Qué guapa!' : '' };
  }
  return { special: k };   // memory, potty, bath, fetch, agility, hide, duckfeed, sleep, wake, checkup, none…
}
// Contadores del día según el tipo de acción
function countKind(p, kind) { const e = today(p); if (kind === 'meal') e.meals++; if (kind === 'water') e.water++; if (kind === 'treat') e.treats = (e.treats || 0) + 1; if (kind === 'play') e.play++; if (kind === 'care') e.care++; }

// ---------- Minijuegos: mismas recompensas ----------
function fetchOutcome(score) { return { stars: score >= 12 ? 3 : score >= 6 ? 2 : score >= 1 ? 1 : 0, bones: Math.floor(score / 2), extra: `<span>🎾 ${score}</span>` }; }
function fetchRewards(pp, score) {
  pp.bones += Math.floor(score / 2); today(pp).play++; markGame(pp, 'fetch');
  applyFx(pp, { felicidad: clamp(8 + score * 3, 8, 40), energia: -12, saciedad: -5, hidratacion: -8 });
  addEvent(pp, '🎾', `Jugaron a la pelota en el parque: ¡${score} atrapadas!`);
  if (score >= 15) addMilestone(pp, 'fetch15', '🥎', '¡Luna atrapó 15 pelotas en una partida!');
  outdoorRisk(pp);
}
function bathOutcome(p, frac) { const champu = p.items.champu > 0, hig = Math.round(25 + 55 * frac); return { stars: frac === 1 ? 3 : frac >= 0.6 ? 2 : frac > 0 ? 1 : 0, bones: 0, extra: `<span>🫧 +${hig}</span>${champu ? '<span>🧴💖</span>' : ''}` }; }
function bathRewards(pp, frac) {
  const champu = pp.items.champu > 0, hig = Math.round(25 + 55 * frac);
  if (champu) pp.items.champu--;
  today(pp).care++; pp.lastDone.bano = pp.day;
  applyFx(pp, { higiene: hig, felicidad: champu ? 8 : -3 });
  addEvent(pp, '🛁', `Baño con ${Math.round(frac * 100)}% de manchas limpias.`);
  addMilestone(pp, 'bath1', '🛁', 'Primer baño de Luna.');
}
const POTTY_TRICK = { id: 'potty', name: 'Hacer sus necesidades en su lugar', short: 'Papel', icon: '🧻', min: 3 };
const trainTrick = id => (id === 'potty' ? POTTY_TRICK : TRICKS.find(x => x.id === id));
const trainLevel = (p, id) => (id === 'potty' ? p.potty : (p.tricks[id] || 0));
const trainAfter = (p, id, ok) => Math.min(100, trainLevel(p, id) + ok * 9 + (ok === 3 ? 6 : 0) + (p.stats.felicidad > 70 ? 4 : 0) + 2);
function trainRewards(pp, id, ok, after) {
  const t = trainTrick(id), before = trainLevel(pp, id), e = today(pp);
  e.sessions++; e.train++;
  if (id === 'potty') pp.potty = after; else pp.tricks[id] = after;
  applyFx(pp, { energia: -8, saciedad: -3, felicidad: 4 + ok * 2 });
  pp.bones += ok;
  if (after >= 100 && before < 100) addMilestone(pp, id === 'potty' ? 'potty' : 'trick-' + id, '🏆', id === 'potty' ? 'Luna aprendió a hacer sus necesidades en su lugar.' : `Luna aprendió: «${t.name}».`);
  else addEvent(pp, '🎓', `Practicaron «${t.name}» (${after}%).`);
}

// ---------- Pío: qué hacer con cada necesidad y con la rutina ----------
function needGoal(n, p) {
  const d = p.day;
  switch (n.icon) {
    case '🤒': return { icon: '🤒', place: 'vet', doId: p.sick && !p.sick.treated ? 'treat-sick' : null, say: p.sick && p.sick.treated ? 'Luna se está curando. Dale comida, agua y que descanse.' : 'Luna está enfermita. Llévala a la veterinaria y toca Curar.' };
    case '🍖': return { icon: '🍖', place: 'casa', doId: 'eat', say: 'Luna tiene hambre. Ve a la casa y toca Comer.' };
    case '💧': return d < 4 ? { icon: '🍼', place: 'casa', doId: 'eat', say: 'Luna tiene sed. En casa dale su lechita.' } : { icon: '💧', place: 'casa', doId: 'water', say: 'Luna tiene sed. Ve a la casa y toca Agua.' };
    case '😴': return { icon: '😴', place: 'casa', doId: 'nap', say: 'Luna tiene sueño. En la casa toca Siesta o Dormir.' };
    case '🫧': return { icon: '🫧', place: 'casa', doId: d < 8 ? 'wipe' : (p.lastDone.bano && d - p.lastDone.bano < 3 ? 'brush' : 'bath'), say: 'Luna está sucia. Ve a la casa para limpiarla.' };
    case '🎾': return d >= 3 ? { icon: '🎾', place: 'parque', doId: d >= 5 ? 'fetch' : 'kick', say: 'Luna está aburrida. ¡Vamos a jugar a la pelota en el parque!' } : { icon: '🤗', place: 'casa', doId: 'pet', say: 'Luna está aburrida. Ve a la casa y dale mimos.' };
    case '💩': return { icon: '💩', place: 'casa', doId: 'clean', say: '¡Uy! Luna hizo un accidente en casa. Hay que recogerlo.' };
    case '💉': return { icon: '💉', place: 'vet', doId: 'vac:', say: 'Hoy le toca una vacuna a Luna. Ve a la veterinaria y toca Vacuna.' };
    case '💊': return { icon: '🐛', place: 'vet', doId: 'deworm', say: 'Luna necesita su pastilla contra los bichitos. Ve a la veterinaria.' };
    case '✂️': return { icon: '✂️', place: 'casa', doId: 'nails', say: 'Las uñas de Luna están largas. En casa toca Uñas, o llévala a la peluquería canina.' };
  }
  return null;
}
function routineGoal(r, p) {
  const m = {
    '🍖': { place: 'casa', doId: 'eat', say: 'Hora de comer. Ve a la casa y toca Comer.' },
    '💧': { place: 'casa', doId: 'water', say: 'Dale agua fresca a Luna en la casa.' },
    '🎾': p.day >= 3 ? { place: 'parque', doId: p.day >= 5 ? 'fetch' : 'kick', say: '¡A jugar! Ve al parque a jugar a la pelota.' } : { place: 'casa', doId: 'pet', say: 'Juega con Luna: dale mimos en la casa.' },
    '🫧': p.day >= 3 ? { place: 'casa', doId: 'brush', say: 'Hora de la limpieza. En casa cepilla a Luna.' } : { place: 'casa', doId: 'wipe', say: 'Hora de la limpieza. En casa limpia a Luna.' },
    '🎓': { place: 'escuela', doId: 'trick:', say: 'Hoy toca escuela. Ve a la escuela y enséñale un truco.' },
    '🗺️': { place: 'parque', doId: 'stroll', say: 'Sal a pasear con Luna: camina por el pueblo o ve al parque y toca Pasear.' },
  }[r.icon];
  return m ? { icon: r.icon, key: 'routine-' + r.icon, ...m } : null;
}

// ---------- Diario: sección para papás y pegatinas ----------
function parentsHTML(p, e, kidName) {
  const st = stageOf(p.day);
  let h = `<details class="parents"><summary>👨‍👩‍👧 Para papás</summary>
    <p><b>${esc(kidName)}</b> cuida a Luna · semana ${p.day} (${ageText(p.day)}) · ${st.name} · ${fmtWeight(p.weight)} · racha ${p.streak} (mejor ${p.bestStreak}).<br>
    El juego avanza en tiempo real: 1 día = 1 semana de vida de Luna. Pasos explorados hoy: ${e.walkTiles}/${WALK_GOAL}.</p>${voiceSettingsHTML()}`;
  const needs = needsOf(p);
  if (needs.length) h += `<h4>Necesita ahora</h4><ul>${needs.map(n => `<li>${n.icon} ${esc(n.text)}</li>`).join('')}</ul>`;
  h += `<h4>Crecimiento (kg)</h4>${weightChart(p)}`;
  h += `<h4>Vacunas y desparasitación</h4><ul>${VACCINES.map(v => `<li>${vaccineStatus(p, v) === 'aplicada' ? '✔' : '·'} ${esc(v.name)} — semanas ${v.day}–${v.to}${p.vaccines[v.id] ? ` (aplicada sem. ${p.vaccines[v.id]})` : ''}</li>`).join('')}
    <li>Desparasitación: ${p.deworm.length ? `última sem. ${Math.max(...p.deworm)}` : 'ninguna'} · próxima sem. ${nextDeworm(p) || '—'}</li></ul>
    <p class="small">Calendario orientativo con fines educativos; en la vida real sigan lo que indique su veterinario.</p>`;
  if (p.rpg && p.rpg.met) h += `<h4>Valle Aventura</h4><p>${RANKS[rankOf(p.rpg.xp)]} · ${p.rpg.quests} misiones · ⭐ ${p.rpg.xp}</p>`;
  h += `<h4>Registro día a día</h4>`;
  for (let d = p.day; d >= Math.max(1, p.day - 30); d--) {
    const L = p.log[d];
    if (!L) { h += `<details class="day"><summary>Semana ${d} · sin visitas</summary></details>`; continue; }
    const rr = routineFor(p, d, L), w = d === p.day ? p.weight : L.weight;
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
function allStickers() {
  return [...Object.entries(DAY_MILESTONES).map(([d2, m]) => ({ key: 'day' + d2, icon: m[0], text: m[1] })),
    { key: 'walk1', icon: '🌳', text: 'Primer paseo' }, { key: 'bath1', icon: '🛁', text: 'Primer baño' }, { key: 'vacunas', icon: '🛡️', text: 'Todas las vacunas' },
    { key: 'allbones', icon: '🔍', text: 'Todos los huesos del día' }, { key: 'tutorial', icon: '🐦', text: 'Lecciones de Pío' }, { key: 'treasure1', icon: '💰', text: 'Primer tesoro' }, { key: 'squirrel', icon: '🐿️', text: 'Primera ardilla' },
    { key: 'hide1', icon: '🙈', text: 'Encontraste a Luna' }, { key: 'agility', icon: '🏃', text: 'Carrera perfecta' }, { key: 'ducks10', icon: '🦆', text: 'Muchos patos alimentados' }, { key: 'memory', icon: '🃏', text: 'Memoria perfecta' },
    { key: 'potty', icon: '🧻', text: 'Aprendió a usar el papel' }, { key: 'fetch15', icon: '🥎', text: '15 pelotas' },
    ...LEVEL_DEFS.map(L => ({ key: 'lvl' + L.id, icon: ['🌲', '⛰️', '💎'][L.id - 1], text: L.name })),
    ...TRICKS.map(t => ({ key: 'trick-' + t.id, icon: t.icon, text: t.name })), ...EXTRA_STICKERS];
}

// =====================================================================================
// Mapa del pueblo: el mismo dibujo en 2D y 3D. Cada versión pasa sus coordenadas:
// data = { b: {x0,y0,x1,y1}, roads: [[x1,y1,x2,y2]], water: [{x,y,rx,ry} | {x0,y0,x1,y1}], zones: [{x0,y0,x1,y1,c}],
//          places: [{id,x,y}], me: {x,y}, luna: {x,y} | null, dogs: [{x,y,mood}], items: [{x,y,icon}], goal: {x,y} | null, goalPlace }
// Devuelve las zonas tocables [{id,x,y,r}] en píxeles del lienzo.
// =====================================================================================
const PLACE_UI_ALL = {
  casa: { icon: '🏠', name: 'Casa' }, vet: { icon: '🏥', name: 'Veterinaria' }, tienda: { icon: '🛒', name: 'Tienda' }, escuela: { icon: '🎓', name: 'Escuela', minDay: 8 },
  bosque: { icon: '🌲', name: 'Bosque', minDay: 3 }, parque: { icon: '🌳', name: 'Parque', minDay: 3 }, lago: { icon: '🦆', name: 'Lago' }, ...SPOT_UI,
};
const EMOJI_FONT = '"Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif';
function drawTownMap(cv, data, p) {
  const g = cv.getContext('2d'), W = cv.width, H = cv.height, B = data.b, pad = 22;
  const s = Math.min((W - pad * 2) / (B.x1 - B.x0), (H - pad * 2) / (B.y1 - B.y0));
  const ox = (W - (B.x1 - B.x0) * s) / 2, oy = (H - (B.y1 - B.y0) * s) / 2;
  const X = x => ox + (x - B.x0) * s, Y = y => oy + (y - B.y0) * s;
  const rr = (x, y, w, h, r) => { g.beginPath(); if (g.roundRect) g.roundRect(x, y, w, h, r); else g.rect(x, y, w, h); };
  g.fillStyle = '#d8f0c8'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#9fd47e'; rr(X(B.x0), Y(B.y0), (B.x1 - B.x0) * s, (B.y1 - B.y0) * s, 14); g.fill();
  for (const z of data.zones || []) { g.fillStyle = z.c; rr(X(z.x0), Y(z.y0), (z.x1 - z.x0) * s, (z.y1 - z.y0) * s, 8); g.fill(); }
  g.fillStyle = '#6cc8ff';
  for (const w of data.water || []) { g.beginPath(); if (w.rx) g.ellipse(X(w.x), Y(w.y), w.rx * s, w.ry * s, 0, 0, Math.PI * 2); else g.rect(X(w.x0), Y(w.y0), (w.x1 - w.x0) * s, (w.y1 - w.y0) * s); g.fill(); }
  g.strokeStyle = '#f6dca8'; g.lineCap = 'round'; g.lineWidth = Math.max(5, Math.min(9, s * 1.3));
  for (const [a, b, c, d] of data.roads || []) { g.beginPath(); g.moveTo(X(a), Y(b)); g.lineTo(X(c), Y(d)); g.stroke(); }
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = '13px ' + EMOJI_FONT;
  for (const it of data.items || []) g.fillText(it.icon, X(it.x), Y(it.y));
  for (const dg of data.dogs || []) { g.fillStyle = dg.mood === 'grumpy' ? '#ff3030' : dg.mood === 'shy' ? '#ffc400' : '#22c55e'; g.beginPath(); g.arc(X(dg.x), Y(dg.y), 4.5, 0, Math.PI * 2); g.fill(); g.strokeStyle = '#ffffff'; g.lineWidth = 1.5; g.stroke(); }
  const hits = [];
  for (const pl of data.places) {
    const ui = PLACE_UI_ALL[pl.id], locked = p.day < (ui.minDay || 1), x = X(pl.x), y = Y(pl.y), r = 15, goal = data.goalPlace === pl.id;
    g.fillStyle = locked ? '#ece6f0' : '#ffffff'; g.strokeStyle = goal ? '#ffb400' : '#c48ad8'; g.lineWidth = goal ? 4 : 2.5;
    g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); g.stroke();
    g.font = '17px ' + EMOJI_FONT; g.globalAlpha = locked ? 0.45 : 1; g.fillText(ui.icon, x, y + 1); g.globalAlpha = 1;
    if (locked) { g.font = '11px ' + EMOJI_FONT; g.fillText('🔒', x + 11, y - 11); }
    hits.push({ id: pl.id, x, y, r: r + 6 });
  }
  if (data.goal) { g.font = '18px ' + EMOJI_FONT; g.fillText('⭐', X(data.goal.x), Y(data.goal.y) - 16); }
  if (data.luna) { g.font = '15px ' + EMOJI_FONT; g.fillText('🐶', X(data.luna.x) + 8, Y(data.luna.y) + 6); }
  if (data.me) { const x = X(data.me.x), y = Y(data.me.y); g.fillStyle = '#ff4fa0'; g.beginPath(); g.arc(x, y, 7, 0, Math.PI * 2); g.fill(); g.strokeStyle = '#ffffff'; g.lineWidth = 3; g.stroke(); }
  return hits;
}
const MAP_LEGEND_HTML = `<div class="map-legend"><span><b class="lg me"></b> Tú</span><span>🐶 Luna</span><span><b class="lg ok"></b> Amistoso</span><span><b class="lg shy"></b> Tímido</span><span><b class="lg bad"></b> Peligro</span><span>⭐ Pío</span></div>`;
const MAP_SAY = 'Este es el mapa del pueblo. El punto rosa eres tú. Toca un lugar y vamos caminando hasta allí.';
// Tarjeta del mapa (HTML compartido). El lienzo se dibuja después con drawTownMap.
const mapCardHTML = () => `<div class="result map-card"><h2>🗺️</h2><canvas id="townmap" class="townmap" width="640" height="440" aria-label="Mapa del pueblo. Toca un lugar para ir."></canvas>${MAP_LEGEND_HTML}</div>`;
// Necesidad más importante (rojo primero; lo amarillo se puede omitir con «Ahora no») y tarea de la rutina
function careGoal(p, isSkipped) {
  const recovering = !!(p.sick && p.sick.treated);
  const needs = needsOf(p).filter(x => !(x.icon === '🤒' && recovering));
  for (const n of [...needs.filter(x => x.level === 'bad'), ...needs.filter(x => x.level === 'warn')]) {
    const key = 'need-' + n.icon, fixed = n.level === 'bad';
    if (!fixed && isSkipped(key)) continue;
    const g = needGoal(n, p);
    if (g) return { ...g, key, fixed };
  }
  return null;
}
function routineNext(p, isSkipped) {
  for (const r of routineFor(p, p.day, today(p))) {
    if (r.have >= r.need || !routineReady(p, r.icon) || isSkipped('routine-' + r.icon)) continue;
    const g = routineGoal(r, p);
    if (g) return g;
  }
  return null;
}
const recoverSay = (p, g) => (p.sick && p.sick.treated ? { ...g, key: 'rec-' + g.key, say: 'Luna se está curando: dale comida, agua y que descanse. ' + g.say } : g);
