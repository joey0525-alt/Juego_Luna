'use strict';
/* Voz amigable compartida por el juego 2D y el 3D.
   Elige la voz en español más natural disponible (voces «Natural/Online» de Edge, luego Google),
   con preferencia por voces femeninas suaves. Los papás pueden cambiarla en «Para papás». */

const isMuted = () => { try { return localStorage.getItem('luna.muted') === '1'; } catch (e) { return false; } };
const SOFT_NAMES = /(dalia|elvira|paloma|ximena|larissa|elena|lucia|lucía|camila|valentina|catalina|salome|salomé|beatriz|sabina|helena|laura|monica|mónica|paulina|marisol|renata|ines|inés|sofia|sofía)/i;
function rankVoice(v) {
  let s = 0;
  const n = v.name.toLowerCase();
  if (/natural|online|neural/.test(n)) s += 30;        // voces neuronales (Edge, Windows 11)
  else if (/google/.test(n)) s += 18;
  else if (/siri|premium|enhanced|mejorad/.test(n)) s += 22;
  if (SOFT_NAMES.test(n)) s += 6;
  if (/es-(mx|us|419|co|ar|cl|pe)/i.test(v.lang)) s += 2;
  if (v.localService) s += 1;
  return s;
}
const spanishVoices = () => ('speechSynthesis' in window ? speechSynthesis.getVoices() : []).filter(v => v.lang && v.lang.toLowerCase().startsWith('es'));
let VOICE = null;
function pickVoice() {
  const vs = spanishVoices();
  if (!vs.length) return null;
  let saved = null;
  try { saved = localStorage.getItem('luna.voice'); } catch (e) { /* */ }
  return vs.find(v => v.name === saved) || vs.slice().sort((a, b) => rankVoice(b) - rankVoice(a))[0];
}
if ('speechSynthesis' in window) {
  VOICE = pickVoice();
  speechSynthesis.addEventListener('voiceschanged', () => { VOICE = pickVoice(); refreshVoiceSelects(); });
}

// ---------- Paquete de voz grabada (opcional) ----------
// Si existe voz/<frase-en-slug>.mp3 se reproduce esa grabación; si no, se usa la voz del sistema.
// La lista de frases y nombres de archivo está en voz/GUION.txt.
const voiceSlug = t => String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
const missingClips = new Set();
let clipNow = null;
function stopVoice() {
  if (clipNow) { try { clipNow.pause(); } catch (e) { /* */ } clipNow = null; }
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}
const duck = d => { if (typeof Music !== 'undefined') Music.duck(d); };

function speak(text) {
  if (isMuted() || !text) return;
  if (typeof withName === 'function') text = withName(text);   // nombre elegido para la perrita (js/fun.js)
  const clean = String(text).replace(/[\u{1F300}-\u{1FAFF}☀-➿️]/gu, '').trim();
  if (!clean) return;
  stopVoice();
  const slug = voiceSlug(clean);
  if (slug && !missingClips.has(slug)) {
    const a = new Audio((window.LUNA_BASE || '') + 'voz/' + slug + '.mp3');
    clipNow = a;
    a.addEventListener('error', () => { missingClips.add(slug); if (clipNow === a) { clipNow = null; ttsSpeak(clean); } }, { once: true });
    a.addEventListener('playing', () => duck(true), { once: true });
    a.addEventListener('ended', () => duck(false), { once: true });
    a.play().catch(() => { /* el evento error decide */ });
    return;
  }
  ttsSpeak(clean);
}
function ttsSpeak(clean) {
  if (!('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(clean);
    u.onstart = () => duck(true);
    u.onend = u.onerror = () => duck(false);
    VOICE = VOICE || pickVoice();
    if (VOICE) { u.voice = VOICE; u.lang = VOICE.lang; } else u.lang = 'es-ES';
    const natural = VOICE && /natural|online|neural|google|siri|premium/i.test(VOICE.name);
    // Las voces neuronales ya suenan cálidas: solo un toque más agudo y pausado.
    u.pitch = natural ? 1.12 : 1.3;
    u.rate = natural ? 0.92 : 0.88;
    u.volume = 1;
    speechSynthesis.speak(u);
  } catch (e) { /* sin voz */ }
}

// ---------- Selector para papás ----------
function voiceSettingsHTML() {
  return `<div class="voice-set"><label>🗣️ Voz <select data-voice aria-label="Voz del juego">${voiceOptions()}</select></label>
    <button type="button" class="btn small" data-voicetest aria-label="Probar voz">▶ Probar</button></div>`;
}
function voiceOptions() {
  const vs = spanishVoices().sort((a, b) => rankVoice(b) - rankVoice(a));
  if (!vs.length) return '<option>Voz del sistema</option>';
  return vs.map(v => `<option value="${v.name.replace(/"/g, '&quot;')}" ${VOICE && v.name === VOICE.name ? 'selected' : ''}>${v.name.replace(/</g, '&lt;')}${rankVoice(v) >= 18 ? ' ★' : ''}</option>`).join('');
}
function refreshVoiceSelects() { document.querySelectorAll('select[data-voice]').forEach(s => { s.innerHTML = voiceOptions(); }); }
document.addEventListener('change', e => {
  const s = e.target.closest && e.target.closest('select[data-voice]');
  if (!s) return;
  try { localStorage.setItem('luna.voice', s.value); } catch (er) { /* */ }
  VOICE = pickVoice();
  speak('¡Hola! Soy Luna. ¡Vamos a jugar!');
});
document.addEventListener('click', e => {
  if (e.target.closest && e.target.closest('[data-voicetest]')) {
    speak('¡Hola! Soy Luna. ¡Vamos a jugar juntas!');
    if (typeof dogSound === 'function') setTimeout(() => dogSound('happy', 1), 1800);
  }
});
