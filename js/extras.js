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
