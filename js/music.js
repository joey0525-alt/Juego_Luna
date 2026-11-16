'use strict';
/* Música de fondo original, generada en el navegador (Web Audio): melodía tipo marimba en Do mayor,
   bajo suave y acordes de colchón. Sin archivos ni licencias de terceros.
   Modos: 'day' (pueblo), 'night' (más lenta y suave), 'play' (minijuegos, más alegre), 'home' (casa).
   Baja el volumen automáticamente mientras habla la voz (duck). */

const Music = (() => {
  let ctx = null, master = null, timer = 0, step = 0, nextT = 0, mode = 'day', duckK = 1;
  let on = true;
  try { on = localStorage.getItem('luna.music') !== '0'; } catch (e) { /* */ }
  const BARS = [
    { root: 48, chord: [60, 64, 67], mel: [76, 0, 79, 0, 81, 79, 76, 0] },
    { root: 45, chord: [57, 60, 64], mel: [72, 0, 74, 76, 0, 74, 72, 0] },
    { root: 41, chord: [57, 60, 65], mel: [77, 0, 76, 77, 81, 0, 79, 0] },
    { root: 43, chord: [59, 62, 67], mel: [79, 0, 74, 0, 76, 74, 71, 0] },
    { root: 48, chord: [60, 64, 67], mel: [76, 79, 84, 0, 81, 79, 76, 0] },
    { root: 45, chord: [57, 60, 64], mel: [81, 0, 79, 76, 74, 0, 72, 0] },
    { root: 41, chord: [57, 60, 65], mel: [72, 74, 76, 77, 79, 0, 81, 0] },
    { root: 48, chord: [60, 64, 67], mel: [84, 0, 79, 0, 76, 0, 72, 0] },
  ];
  const MODES = {
    day: { bpm: 96, vol: 0.5, bass: true, mel: 1, oct: 0 },
    home: { bpm: 84, vol: 0.42, bass: true, mel: 1, oct: 0 },
    night: { bpm: 66, vol: 0.32, bass: false, mel: 0.5, oct: -12 },
    play: { bpm: 126, vol: 0.5, bass: true, mel: 1, oct: 0, tick: true },
  };
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);

  function voice(freq, t, dur, { type = 'sine', gain = 0.2, attack = 0.005, decay = dur, harm = 0 } = {}) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + decay);
    o.connect(g).connect(master);
    o.start(t); o.stop(t + decay + 0.05);
    if (harm) { // armónico brillante tipo marimba
      const o2 = ctx.createOscillator(), g2 = ctx.createGain();
      o2.type = 'sine'; o2.frequency.value = freq * 4;
      g2.gain.setValueAtTime(gain * harm, t); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
      o2.connect(g2).connect(master); o2.start(t); o2.stop(t + 0.2);
    }
  }
  function tick(t) {
    const len = 0.03, b = ctx.createBuffer(1, Math.floor(ctx.sampleRate * len), ctx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    f.type = 'highpass'; f.frequency.value = 6000; g.gain.value = 0.05;
    s.buffer = b; s.connect(f).connect(g).connect(master); s.start(t);
  }
  function schedule() {
    const M = MODES[mode] || MODES.day;
    const eighth = 60 / M.bpm / 2;
    while (nextT < ctx.currentTime + 0.25) {
      const bar = BARS[Math.floor(step / 8) % BARS.length], i = step % 8;
      const n = bar.mel[i];
      if (n && (M.mel === 1 || i % 2 === 0)) voice(hz(n + M.oct), nextT, eighth * 1.8, { type: 'triangle', gain: 0.09, decay: eighth * 2.2, harm: 0.25 });
      if (M.bass && (i === 0 || i === 4)) voice(hz(bar.root), nextT, eighth * 3, { type: 'sine', gain: 0.11, decay: eighth * 3.5 });
      if (i === 0) bar.chord.forEach(c => voice(hz(c + (mode === 'night' ? -12 : 0)), nextT, eighth * 8, { type: 'sine', gain: 0.025, attack: 0.25, decay: eighth * 8 }));
      if (M.tick && i % 2 === 1) tick(nextT);
      nextT += eighth; step++;
    }
  }
  function applyVol(fast) {
    if (!master) return;
    const M = MODES[mode] || MODES.day;
    const muted = typeof isMuted === 'function' && isMuted();
    const v = on && !muted ? 0.22 * M.vol * duckK : 0;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setTargetAtTime(v, ctx.currentTime, fast ? 0.05 : 0.4);
  }
  return {
    start() {   // llamar tras un gesto del usuario (política de autoplay)
      if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
      master = ctx.createGain(); master.gain.value = 0;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3800;
      master.connect(lp).connect(ctx.destination);
      nextT = ctx.currentTime + 0.1;
      timer = setInterval(schedule, 60);
      applyVol();
    },
    setMode(m) { if (m !== mode) { mode = m; applyVol(); } },
    toggle() { on = !on; try { localStorage.setItem('luna.music', on ? '1' : '0'); } catch (e) { /* */ } applyVol(); return on; },
    isOn: () => on,
    duck(d) { duckK = d ? 0.35 : 1; applyVol(true); },
    refresh() { applyVol(); },
  };
})();
