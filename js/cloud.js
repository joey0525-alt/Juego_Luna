'use strict';
/* Partidas en la nube (Supabase): usuario + PIN para seguir jugando desde cualquier aparato.
   Cada partida (perfil) puede tener su usuario. El aparato guarda un token, nunca el PIN.
   Funciones del servidor: luna_register, luna_login, luna_pull, luna_push, luna_logout. */
const Cloud = (() => {
  const URL = 'https://fmyvmlzgtcuobfhkujvw.supabase.co/rest/v1/rpc/';
  const KEY = 'sb_publishable_l2prlAPTwX0KnVx3lClRFQ_8gzbnyq2';
  const getRoot = () => (typeof root !== 'undefined' ? root : window.root);
  const say = t => { try { if (typeof speak === 'function') speak(t); } catch (e) { /* */ } };
  const ERR = {
    taken: 'Ese usuario ya existe. Prueba otro.',
    bad_login: 'Usuario o PIN incorrecto.',
    locked: 'Demasiados intentos. Espera 10 minutos.',
    bad_user: 'Usuario: de 3 a 16 letras o números, sin espacios.',
    bad_pin: 'El PIN son de 4 a 6 números.',
    too_big: 'La partida es demasiado grande.',
    net: 'Sin conexión. Inténtalo otra vez.',
  };

  async function rpc(fn, body, opts = {}) {
    let res;
    try {
      res = await fetch(URL + fn, {
        method: 'POST', keepalive: !!opts.keepalive,
        headers: { apikey: KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify(body), signal: opts.signal,
      });
    } catch (e) { throw new Error('net'); }
    const data = await res.json().catch(() => null);
    if (!res.ok) throw new Error((data && data.message) || 'net');
    if (data && data.error) throw new Error(data.error);
    return data;
  }
  const withTimeout = (fn, ms) => { const c = new AbortController(); const t = setTimeout(() => c.abort(), ms); return fn(c.signal).finally(() => clearTimeout(t)); };

  // ---------- Copia de la partida sin datos de sesión ----------
  const payload = pr => { const { cloud, ...rest } = pr; return rest; };
  const linked = pr => !!(pr && pr.cloud && pr.cloud.token);
  function adopt(pr, data, at) {
    // Reemplaza el contenido del perfil por el de la nube, conservando la sesión.
    const cloud = pr.cloud;
    for (const k of Object.keys(pr)) delete pr[k];
    Object.assign(pr, data, { cloud: { ...cloud, at } });
    if (typeof normalizePet === 'function' && pr.pet) normalizePet(pr.pet);
  }

  // ---------- Sincronización ----------
  const sent = {};          // id -> JSON enviado por última vez
  let timer = 0, busy = false, lastPush = 0;

  // Antes de abrir una partida: trae la versión de la nube si es más nueva.
  async function refresh(pr) {
    if (!linked(pr)) return false;
    try {
      const r = await withTimeout(signal => rpc('luna_pull', { p_token: pr.cloud.token }, { signal }), 5000);
      if (!pr.cloud.at || new Date(r.updated_at) > new Date(pr.cloud.at)) {
        adopt(pr, r.data, r.updated_at);
        sent[pr.id] = JSON.stringify(payload(pr));
        localSave();
        return true;
      }
    } catch (e) {
      if (e.message === 'bad_token') { delete pr.cloud; localSave(); }
      // sin conexión: se juega con la copia local y se sube después
    }
    return false;
  }

  function onSave() {
    const r = getRoot();
    if (!r || !r.profiles.some(linked)) return;
    clearTimeout(timer);
    timer = setTimeout(push, Math.max(3000, 15000 - (Date.now() - lastPush)));
  }

  async function push(opts = {}) {
    const r = getRoot();
    if (busy || !r) return;
    busy = true; lastPush = Date.now();
    try {
      for (const pr of r.profiles.filter(linked)) {
        const json = JSON.stringify(payload(pr));
        if (sent[pr.id] === json) continue;
        try {
          const res = await rpc('luna_push', { p_token: pr.cloud.token, p_data: JSON.parse(json), p_base: pr.cloud.at || null }, { keepalive: opts.keepalive && json.length < 60000 });
          if (res.conflict) {
            // Se jugó en otro aparato mientras tanto: gana la versión de la nube.
            adopt(pr, res.data, res.updated_at);
            sent[pr.id] = JSON.stringify(payload(pr));
            localSave();
            if (r.activeId === pr.id && !opts.keepalive) { location.reload(); return; }
          } else {
            pr.cloud.at = res.updated_at; sent[pr.id] = json;
            localSave(true);
          }
        } catch (e) {
          if (e.message === 'bad_token') { delete pr.cloud; localSave(); }
        }
      }
    } finally { busy = false; }
  }

  // Guarda en el navegador sin volver a disparar la subida.
  let quiet = false;
  function localSave() { if (typeof saveRoot !== 'function') return; quiet = true; try { saveRoot(); } finally { quiet = false; } }

  // Al volver a la pestaña: si se jugó en otro aparato, recarga con esa versión.
  document.addEventListener('visibilitychange', async () => {
    const r = getRoot();
    if (!r) return;
    if (document.visibilityState === 'hidden') { clearTimeout(timer); push({ keepalive: true }); return; }
    const pr = r.profiles.find(x => x.id === r.activeId);
    if (linked(pr) && await refresh(pr)) location.reload();
  });
  window.addEventListener('pagehide', () => { clearTimeout(timer); push({ keepalive: true }); });

  // ---------- Ventana (funciona igual en 2D y 3D) ----------
  const css = `
  .cl-back{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(40,20,60,.55);touch-action:auto}
  .cl-box{width:min(380px,100%);max-height:calc(100vh - 32px);overflow:auto;background:#fff;border-radius:22px;padding:20px;box-shadow:0 0 0 4px #b07cc6,0 10px 0 #8a5aa0;font:600 20px/1.3 'Pixelify Sans','Trebuchet MS',system-ui,sans-serif;color:#3a2448;text-align:center}
  .cl-box h2{margin:0 0 6px;font-size:28px}
  .cl-box p{margin:6px 0 12px;font-size:17px;font-weight:400}
  .cl-box label{display:block;text-align:left;margin:10px 0 4px;font-size:17px}
  .cl-box input{width:100%;box-sizing:border-box;font:inherit;font-size:24px;padding:10px 12px;border:3px solid #d8b8e8;border-radius:14px;outline:none}
  .cl-box input:focus{border-color:#b07cc6}
  .cl-err{min-height:22px;margin:10px 0 0;color:#c0392b;font-size:17px}
  .cl-row{display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap}
  .cl-btn{font:inherit;font-size:22px;padding:10px 18px;border:0;border-radius:999px;background:#f0e4f6;color:inherit;box-shadow:0 4px 0 #d8b8e8;cursor:pointer}
  .cl-btn.main{background:#ffd23f;box-shadow:0 4px 0 #d8a020}
  .cl-btn.warn{background:#ffe0dc;box-shadow:0 4px 0 #e8a8a0}
  .cl-btn:disabled{opacity:.6}
  .cl-user{font-size:30px;margin:8px 0}`;
  let back = null;
  function close() { if (back) { back.remove(); back = null; } }
  function modal(html) {
    if (!document.getElementById('cl-css')) { const s = document.createElement('style'); s.id = 'cl-css'; s.textContent = css; document.head.appendChild(s); }
    close();
    back = document.createElement('div');
    back.className = 'cl-back';
    back.innerHTML = `<div class="cl-box" role="dialog" aria-modal="true">${html}</div>`;
    // que las teclas no muevan a Luna mientras se escribe
    ['keydown', 'keyup'].forEach(ev => back.addEventListener(ev, e => { e.stopPropagation(); if (e.key === 'Escape') close(); }));
    back.addEventListener('pointerdown', e => { if (e.target === back) close(); });
    document.body.appendChild(back);
    const first = back.querySelector('input');
    if (first) setTimeout(() => first.focus(), 30);
    return back.querySelector('.cl-box');
  }
  const userField = `<label for="cl-u">👤 Usuario</label><input id="cl-u" maxlength="16" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="ej: sofia7">`;
  const pinField = (id, label) => `<label for="${id}">${label}</label><input id="${id}" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" autocomplete="off" placeholder="••••">`;
  const cleanUser = v => v.trim().toLowerCase();

  function form(box, onSubmit) {
    const err = box.querySelector('.cl-err'), btn = box.querySelector('.main');
    box.querySelector('[data-x]').onclick = close;
    box.querySelector('form').onsubmit = async e => {
      e.preventDefault();
      err.textContent = ''; btn.disabled = true;
      try { await onSubmit(m => { throw new Error(m); }); } catch (ex) { err.textContent = ERR[ex.message] || ERR.net; say(err.textContent); } finally { btn.disabled = false; }
    };
  }

  // Entrar en otro aparato: descarga la partida del usuario.
  function openLogin(onDone) {
    const box = modal(`<h2>☁️ Entrar</h2><p>Escribe tu usuario y tu PIN para seguir tu partida.</p>
      <form>${userField}${pinField('cl-p', '🔢 PIN')}<div class="cl-err" role="alert"></div>
      <div class="cl-row"><button type="button" class="cl-btn" data-x>✖</button><button class="cl-btn main">☁️ Entrar</button></div></form>`);
    say('Escribe tu usuario y tu PIN');
    form(box, async fail => {
      const u = cleanUser(box.querySelector('#cl-u').value), p = box.querySelector('#cl-p').value.trim();
      if (!/^[a-z0-9_]{3,16}$/.test(u)) fail('bad_user');
      if (!/^[0-9]{4,6}$/.test(p)) fail('bad_pin');
      const r = await rpc('luna_login', { p_user: u, p_pin: p });
      const data = r.data;
      if (!data || !data.id || !data.pet) fail('net');
      const rt = getRoot();
      let pr = rt.profiles.find(x => x.id === data.id || (x.cloud && x.cloud.user === r.user));
      if (!pr) { pr = { id: data.id }; rt.profiles.push(pr); }
      pr.cloud = { user: r.user, token: r.token };
      adopt(pr, data, r.updated_at);
      sent[pr.id] = JSON.stringify(payload(pr));
      localSave();
      close();
      say(`¡Hola ${pr.name}!`);
      if (onDone) onDone(pr);
    });
  }

  // En una partida: crear su usuario, o ver/quitar la sesión.
  function openAccount(pr, onDone) {
    if (linked(pr)) {
      const box = modal(`<h2>☁️ En la nube</h2><div class="cl-user">👤 ${escH(pr.cloud.user)}</div>
        <p>La partida de ${escH(pr.name)} se guarda sola. En otro aparato, toca «☁️ Entrar» y usa este usuario y su PIN.</p>
        <div class="cl-row"><button class="cl-btn" data-x>✔ OK</button></div>
        <p style="margin-top:18px">¿Aparato compartido? Puedes quitar la partida de aquí; seguirá guardada en la nube.</p>
        <div class="cl-row"><button class="cl-btn warn" data-out>📤 Quitar de este aparato</button></div>`);
      box.querySelector('[data-x]').onclick = close;
      box.querySelector('[data-out]').onclick = async () => {
        await push().catch(() => {});
        if (pr.cloud && sent[pr.id] !== JSON.stringify(payload(pr))) { box.querySelector('p:last-of-type').textContent = 'No se pudo subir lo último. Revisa la conexión y prueba otra vez.'; return; }
        rpc('luna_logout', { p_token: pr.cloud.token }).catch(() => {});
        const rt = getRoot();
        rt.profiles = rt.profiles.filter(x => x !== pr);
        if (rt.activeId === pr.id) rt.activeId = null;
        localSave(); close();
        if (onDone) onDone(null);
      };
      return;
    }
    const box = modal(`<h2>☁️ Guardar en la nube</h2><p>Crea un usuario para la partida de <b>${escH(pr.name)}</b> y juega desde cualquier aparato.<br>No uses tu nombre completo. ¡Apunta el PIN!</p>
      <form>${userField}${pinField('cl-p', '🔢 PIN (4 a 6 números)')}${pinField('cl-p2', '🔢 Repite el PIN')}<div class="cl-err" role="alert"></div>
      <div class="cl-row"><button type="button" class="cl-btn" data-x>✖</button><button class="cl-btn main">☁️ Crear</button></div></form>`);
    say('Inventa un usuario y un PIN de números');
    form(box, async fail => {
      const u = cleanUser(box.querySelector('#cl-u').value), p = box.querySelector('#cl-p').value.trim();
      if (!/^[a-z0-9_]{3,16}$/.test(u)) fail('bad_user');
      if (!/^[0-9]{4,6}$/.test(p)) fail('bad_pin');
      if (p !== box.querySelector('#cl-p2').value.trim()) { box.querySelector('#cl-p2').value = ''; throw Object.assign(new Error('pin2'), {}); }
      const json = JSON.stringify(payload(pr));
      const r = await rpc('luna_register', { p_user: u, p_pin: p, p_data: JSON.parse(json) });
      pr.cloud = { user: r.user, token: r.token, at: r.updated_at };
      sent[pr.id] = json;
      localSave(); close();
      say('¡Listo! Tu partida está en la nube');
      if (onDone) onDone(pr);
    });
  }
  ERR.pin2 = 'Los dos PIN no son iguales.';
  const escH = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Exportar a archivo sin la sesión de la nube.
  const exportJSON = r => JSON.stringify(r, (k, v) => (k === 'cloud' ? undefined : v));

  return { linked, refresh, onSave, push, openLogin, openAccount, exportJSON, get quiet() { return quiet; } };
})();
