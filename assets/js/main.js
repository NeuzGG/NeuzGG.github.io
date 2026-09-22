/* ==========================================================================
   Neuz — portfolio scripts
   No libraries. Everything degrades gracefully without JS.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   EDIT ME
   --------------------------------------------------------------------------- */
const CONFIG = {
  // Your Discord username, shown in the Contact section with a copy button.
  // Leave it as '' to hide the copy button.
  discordUsername: 'neuzgg',

  // Where the "Message me on Discord" button goes: your profile
  // (https://discord.com/users/<your user ID>) or a server invite link.
  discordLink: 'https://discord.com/users/1335582992843804672',

  // GitHub accounts used for live repo and star counts.
  githubUsers: ['NeuzGG', 'ryxu-xo', 'Enyzelle'],
};

// Projects listed in the Archive section. cat: bot | lib | tool | web
const ARCHIVE = [
  { name: 'EnyzMid', repo: 'Enyzelle/EnyzMid', desc: 'A fast, good-looking PreMiD alternative. Custom Discord Rich Presence for YouTube, Netflix, Spotify and more.', lang: 'Python', cat: 'tool', year: 2026, stars: 8 },
  { name: 'Discord Bot Creator', repo: 'Enyzelle/Discord-Bot-Creator', desc: 'The quickest way to spin up a custom Discord bot, for beginners and pros alike.', lang: 'Shell', cat: 'tool', year: 2026, stars: 7 },
  { name: 'Lavaflow', repo: 'ryxu-xo/lavaflow', desc: 'TypeScript-first Lavalink v4 client with load balancing, auto-reconnect and a fluent filter API.', lang: 'TypeScript', cat: 'lib', year: 2026 },
  { name: 'robloxian-api', repo: 'NeuzGG/robloxian-api', desc: 'Roblox API wrapper for Node.js with proxy failover, automatic CSRF handling and rate-limit backoff.', lang: 'JavaScript', cat: 'lib', year: 2026 },
  { name: 'Gehlee', repo: 'Enyzelle/Gehlee', desc: 'K-pop card collecting bot with trading, daily rewards and leaderboards.', lang: 'discord.js', cat: 'bot', year: 2026, stars: 2 },
  { name: 'neuz-qrph', repo: 'NeuzGG/neuz-qrph', desc: 'Zero-dependency QRPh toolkit. Decode, encode and render GCash / InstaPay QR codes.', lang: 'Node.js', cat: 'lib', year: 2026 },
  { name: 'Moosek', repo: 'ryxu-xo/Moosek', desc: 'Music bot on discord.js v14 and Euralink, with slash commands and smart node switching.', lang: 'JavaScript', cat: 'bot', year: 2025, stars: 1 },
  { name: 'Stellar Music', repo: 'Enyzelle/Stellar-Bot', desc: 'Music, moderation and utility bot built on discord.js v14.', lang: 'JavaScript', cat: 'bot', year: 2025, stars: 4 },
  { name: 'RyxuMod', repo: 'ryxu-xo/RyxuMod', desc: 'Lightweight, feature-packed mod menu for Geometry Dash, built with Geode.', lang: 'C++', cat: 'tool', year: 2026, stars: 3 },
  { name: 'BetterDiscord Plugins', repo: 'Enyzelle/BetterDiscord-Plugins', desc: 'A collection of BetterDiscord plugins that make everyday Discord nicer.', lang: 'JavaScript', cat: 'tool', year: 2026, stars: 4 },
  { name: 'Spotify Lyrics Status', repo: 'ryxu-xo/Spotify-Discord-Lyrics-Status', desc: 'Puts the lyric you are hearing on Spotify into your Discord status, synced in real time.', lang: 'JavaScript', cat: 'tool', year: 2026 },
  { name: 'Euralink', repo: 'ryxu-xo/euralink', desc: 'Modern, fast and feature-rich Lavalink client for Node.js.', lang: 'JavaScript', cat: 'lib', year: 2026, stars: 1 },
  { name: 'VALORANT Optimizer', repo: 'NeuzGG/neuz-valorant-optimizer', desc: 'Detects your hardware and tunes VALORANT settings for more FPS and lower input latency.', lang: 'Python', cat: 'tool', year: 2026 },
  { name: 'NeuzGG Discord RPC', repo: 'NeuzGG/DiscordRPC', desc: 'Rich Presence companion for the NeuzGG streaming site, with a "Watch along" button.', lang: 'JavaScript', cat: 'tool', year: 2026 },
  { name: 'TikTok Repost Purge', repo: 'ryxu-xo/TikTok-Repost-Purge', desc: 'Chrome extension that clears all your TikTok reposts automatically.', lang: 'Chrome ext.', cat: 'tool', year: 2026 },
  { name: 'Stellar Bot Web', repo: 'Enyzelle/Stellar-Bot-Web', url: 'https://stellar-bot-web.vercel.app', desc: 'Official website for the Stellar all-in-one Discord bot.', lang: 'HTML / CSS', cat: 'web', year: 2025 },
  { name: 'EnyzelleLibrary', repo: 'Enyzelle/EnyzelleLibrary', desc: 'Utility library for building BetterDiscord plugins.', lang: 'JavaScript', cat: 'lib', year: 2025, stars: 1 },
  { name: 'lyrlib-api', repo: 'ryxu-xo/lyrlib-api', desc: 'Lyrics API for Discord music bots.', lang: 'TypeScript', cat: 'lib', year: 2025 },
  { name: 'Lavalink Encoder', repo: 'ryxu-xo/ryxu-xo-lavalink-encoder', desc: 'Encode and decode Lavalink tracks and playlists.', lang: 'TypeScript', cat: 'lib', year: 2025 },
  { name: 'lava-voice-status', repo: 'ryxu-xo/lava-voice-status', desc: 'Voice channel status plugin for lava.ts.', lang: 'JavaScript', cat: 'lib', year: 2025 },
  { name: 'Bot Creator Advanced', repo: 'Enyzelle/Discord-Bot-Creator-ADVANCED', desc: 'Scaffold Discord bots in several languages with a modern setup and best practices.', lang: 'Shell', cat: 'tool', year: 2025, stars: 2 },
  { name: 'Stellar', repo: 'Enyzelle/Stellar', desc: 'Discord bot with advanced moderation, auto-roles and logging.', lang: 'Discord bot', cat: 'bot', year: 2025 },
  { name: 'Desktop Music Player', repo: 'Enyzelle/Desktop-Music-Player', desc: 'Minimal desktop music player for local files and Spotify.', lang: 'Python', cat: 'tool', year: 2025 },
];
const ARCHIVE_INITIAL = 8;

/* ---------------------------------------------------------------------------
   Helpers
   --------------------------------------------------------------------------- */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const html = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const store = {
  get(k, session) { try { return (session ? sessionStorage : localStorage).getItem(k); } catch (e) { return null; } },
  set(k, v, session) { try { (session ? sessionStorage : localStorage).setItem(k, v); } catch (e) { /* storage unavailable */ } },
};

/** Run `fn` only while `el` is on screen and the tab is visible. */
function whileVisible(el, start, stop) {
  let onScreen = false, running = false;
  const sync = () => {
    const should = onScreen && !document.hidden;
    if (should && !running) { running = true; start(); }
    else if (!should && running) { running = false; stop(); }
  };
  new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; sync(); }, { rootMargin: '100px' }).observe(el);
  document.addEventListener('visibilitychange', sync);
}

/* ---------------------------------------------------------------------------
   Loader
   --------------------------------------------------------------------------- */
function initLoader() {
  const done = () => {
    html.classList.add('is-loaded');
    store.set('neuz-seen', '1', true);
  };
  if (html.classList.contains('skip-loader') || reduced) {
    requestAnimationFrame(() => requestAnimationFrame(done));
    return;
  }
  const count = $('[data-loader-count]');
  const bar = $('[data-loader-bar]');
  const duration = 1400;
  const t0 = performance.now();
  let fontsReady = false;
  const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
  Promise.race([fonts, new Promise((r) => setTimeout(r, 2500))]).then(() => { fontsReady = true; });

  const tick = (now) => {
    let p = clamp((now - t0) / duration);
    if (!fontsReady) p = Math.min(p, 0.9);
    const eased = 1 - Math.pow(1 - p, 3);
    count.textContent = Math.round(eased * 100);
    bar.style.transform = `scaleX(${eased})`;
    if (p >= 1 && fontsReady) setTimeout(done, 200);
    else requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------------------------------------------------------------------------
   Split headings into masked words
   --------------------------------------------------------------------------- */
function splitWords(root) {
  let i = 0;
  const walk = (node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) {
        const parts = child.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          const w = document.createElement('span');
          w.className = 'w';
          const inner = document.createElement('span');
          inner.textContent = part;
          inner.style.setProperty('--i', i++);
          w.appendChild(inner);
          frag.appendChild(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && child.tagName !== 'BR') {
        walk(child);
      }
    });
  };
  walk(root);
}

/* ---------------------------------------------------------------------------
   Reveal on scroll
   --------------------------------------------------------------------------- */
function initReveal() {
  $$('[data-split]').forEach(splitWords);

  const targets = $$('[data-reveal], [data-split]');
  if (!('IntersectionObserver' in window) || reduced) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    let n = 0;
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      io.unobserve(el);
      if (el.hasAttribute('data-reveal')) {
        const delay = n++ * 0.09;
        el.style.setProperty('--d', `${delay}s`);
        // Hand transitions back to the element once the reveal has finished.
        setTimeout(() => { el.removeAttribute('data-reveal'); el.style.removeProperty('--d'); }, 1300 + delay * 1000);
      }
      el.classList.add('is-in');
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  targets.forEach((el) => io.observe(el));
}

/* ---------------------------------------------------------------------------
   Hero: interactive dot grid
   --------------------------------------------------------------------------- */
let redrawDots = () => {};
function initDots() {
  const canvas = $('[data-dots]');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = $('[data-hero]');
  let w = 0, h = 0, dots = [], color = '#fff', raf = 0;
  const mouse = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4 };
  const ripples = [];

  const readColor = () => { color = getComputedStyle(html).getPropertyValue('--fg').trim() || '#fff'; };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const gap = w < 640 ? 22 : 28;
    const cols = Math.ceil(w / gap) + 1, rows = Math.ceil(h / gap) + 1;
    const ox = (w - (cols - 1) * gap) / 2, oy = (h - (rows - 1) * gap) / 2;
    dots = [];
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) dots.push(ox + x * gap, oy + y * gap);
  };

  const draw = (t) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = color;
    mouse.x = lerp(mouse.x, mouse.tx, 0.14);
    mouse.y = lerp(mouse.y, mouse.ty, 0.14);
    const R = 190;
    for (let i = ripples.length - 1; i >= 0; i--) if (t - ripples[i].t0 > 1800) ripples.splice(i, 1);

    for (let i = 0; i < dots.length; i += 2) {
      const x = dots[i], y = dots[i + 1];
      const wave = Math.sin(x * 0.011 + t * 0.0011) * Math.cos(y * 0.013 - t * 0.0008);
      let size = 1.1 + wave * 0.45;
      let alpha = 0.2 + wave * 0.1;
      let px = x, py = y;

      const dx = x - mouse.x, dy = y - mouse.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < R * R) {
        const d = Math.sqrt(d2) || 1;
        const f = 1 - d / R, e = f * f;
        size += e * 2.6; alpha += e * 0.75;
        px += (dx / d) * e * 16; py += (dy / d) * e * 16;
      }
      for (let r = 0; r < ripples.length; r++) {
        const rp = ripples[r];
        const age = t - rp.t0;
        const rad = age * 0.6;
        const rx = x - rp.x, ry = y - rp.y;
        const d = Math.sqrt(rx * rx + ry * ry) || 1;
        const band = 1 - Math.abs(d - rad) / 50;
        if (band > 0) {
          const k = band * (1 - age / 1800);
          size += k * 2.2; alpha += k * 0.6;
          px += (rx / d) * k * 10; py += (ry / d) * k * 10;
        }
      }
      ctx.globalAlpha = alpha > 1 ? 1 : alpha;
      ctx.fillRect(px - size / 2, py - size / 2, size, size);
    }
    ctx.globalAlpha = 1;
  };

  const loop = (t) => { draw(t); raf = requestAnimationFrame(loop); };

  readColor();
  resize();
  draw(0);
  redrawDots = () => { readColor(); if (reduced) draw(0); };

  window.addEventListener('resize', () => { resize(); if (reduced) draw(0); });
  if (reduced) return;

  window.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    const inside = e.clientY >= r.top && e.clientY <= r.bottom;
    mouse.tx = inside ? e.clientX - r.left : -1e4;
    mouse.ty = inside ? e.clientY - r.top : -1e4;
    if (mouse.x < -1e3) { mouse.x = mouse.tx; mouse.y = mouse.ty; }
  }, { passive: true });
  document.addEventListener('pointerleave', () => { mouse.tx = mouse.ty = -1e4; });
  hero.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button')) return;
    const r = canvas.getBoundingClientRect();
    ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, t0: performance.now() });
  });

  whileVisible(hero, () => { raf = requestAnimationFrame(loop); }, () => cancelAnimationFrame(raf));
}

/* ---------------------------------------------------------------------------
   Hero: scrambling word
   --------------------------------------------------------------------------- */
function initScramble() {
  const el = $('[data-scramble]');
  if (!el) return;
  let words;
  try { words = JSON.parse(el.dataset.scramble); } catch (e) { return; }
  const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ/#*+=01';
  let index = 0, timer = 0, frame = 0;

  const scrambleTo = (next) => new Promise((resolve) => {
    if (reduced) { el.textContent = next; resolve(); return; }
    const from = el.textContent;
    const len = Math.max(from.length, next.length);
    const queue = [];
    for (let i = 0; i < len; i++) {
      const start = Math.floor(Math.random() * 18);
      queue.push({ from: from[i] || '', to: next[i] || '', start, end: start + 10 + Math.floor(Math.random() * 18), ch: '' });
    }
    let f = 0;
    const step = () => {
      let out = '', complete = 0;
      for (const q of queue) {
        if (f >= q.end) { complete++; out += esc(q.to); }
        else if (f >= q.start) {
          if (!q.ch || Math.random() < 0.3) q.ch = glyphs[Math.floor(Math.random() * glyphs.length)];
          out += `<span class="sc">${q.ch}</span>`;
        } else out += esc(q.from);
      }
      el.innerHTML = out;
      if (complete === queue.length) resolve();
      else { f++; frame = requestAnimationFrame(step); }
    };
    step();
  });

  const cycle = () => {
    index = (index + 1) % words.length;
    scrambleTo(words[index]).then(() => { timer = setTimeout(cycle, 2600); });
  };
  whileVisible(el, () => { timer = setTimeout(cycle, 2200); }, () => { clearTimeout(timer); cancelAnimationFrame(frame); });
}

/* ---------------------------------------------------------------------------
   Marquee (follows scroll direction, speeds up with scroll velocity)
   --------------------------------------------------------------------------- */
function initMarquee() {
  const tracks = $$('[data-marquee]');
  if (!tracks.length) return;
  const state = tracks.map((track) => {
    const group = track.firstElementChild;
    const gw = group.getBoundingClientRect().width || 1;
    const copies = Math.ceil((window.innerWidth * 2) / gw) + 1;
    for (let i = 0; i < copies; i++) track.appendChild(group.cloneNode(true));
    return { track, group, x: 0, reverse: track.hasAttribute('data-marquee-reverse') };
  });
  if (reduced) return;

  let dir = 1, boost = 0, lastY = window.scrollY, last = performance.now(), raf = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY, dy = y - lastY;
    if (dy !== 0) dir = dy > 0 ? 1 : -1;
    boost = Math.min(boost + Math.abs(dy) * 0.4, 30);
    lastY = y;
  }, { passive: true });

  const loop = (now) => {
    const dt = Math.min(now - last, 50) / 16.67;
    last = now;
    boost *= 0.92;
    state.forEach((s) => {
      const gw = s.group.getBoundingClientRect().width;
      const speed = (s.reverse ? 0.45 : 0.8) + boost * (s.reverse ? 0.2 : 0.35);
      s.x -= speed * dt * dir * (s.reverse ? -1 : 1);
      if (s.x <= -gw) s.x += gw;
      if (s.x > 0) s.x -= gw;
      s.track.style.transform = `translate3d(${s.x}px,0,0)`;
    });
    raf = requestAnimationFrame(loop);
  };
  whileVisible($('.marquee'), () => { last = performance.now(); raf = requestAnimationFrame(loop); }, () => cancelAnimationFrame(raf));
}

/* ---------------------------------------------------------------------------
   Custom cursor
   --------------------------------------------------------------------------- */
function initCursor() {
  if (!finePointer || reduced) return;
  const cursor = $('.cursor');
  const dot = $('.cursor__dot');
  const ring = $('.cursor__ring');
  const label = $('.cursor__label');
  html.classList.add('has-cursor');

  let x = -100, y = -100, rx = -100, ry = -100, shown = false;
  window.addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY;
    if (!shown) { rx = x; ry = y; shown = true; cursor.classList.remove('is-hidden'); }
  }, { passive: true });
  document.addEventListener('pointerleave', () => { cursor.classList.add('is-hidden'); shown = false; });

  document.addEventListener('pointerover', (e) => {
    const labelled = e.target.closest('[data-cursor]');
    const hover = e.target.closest('a, button, [data-hover]');
    if (labelled) {
      label.textContent = labelled.dataset.cursor;
      cursor.classList.add('is-label');
      cursor.classList.remove('is-hover');
    } else {
      cursor.classList.remove('is-label');
      cursor.classList.toggle('is-hover', !!hover);
    }
  });

  const loop = () => {
    rx = lerp(rx, x, 0.2); ry = lerp(ry, y, 0.2);
    dot.style.transform = `translate3d(${x}px,${y}px,0)`;
    ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

/* ---------------------------------------------------------------------------
   Magnetic buttons, tilt and spotlight
   --------------------------------------------------------------------------- */
function initPointerFx() {
  if (!finePointer || reduced) return;

  $$('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magneticStrength) || 0.25;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  $$('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.classList.add('is-tilting');
      el.style.setProperty('--ry', `${(px - 0.5) * 9}deg`);
      el.style.setProperty('--rx', `${(0.5 - py) * 7}deg`);
      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);
    });
    el.addEventListener('pointerleave', () => {
      el.classList.remove('is-tilting');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });

  $$('[data-spotlight]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* ---------------------------------------------------------------------------
   Nav, menu, theme
   --------------------------------------------------------------------------- */
function initNav() {
  const nav = $('[data-nav]');
  const toggle = $('[data-menu-toggle]');
  const menu = $('[data-menu]');
  let lastY = window.scrollY;

  const setMenu = (open) => {
    html.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(!html.classList.contains('menu-open')));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 24);
    if (!html.classList.contains('menu-open')) {
      if (y > lastY + 6 && y > 400) nav.classList.add('is-hidden');
      else if (y < lastY - 6) nav.classList.remove('is-hidden');
    }
    lastY = y;
  }, { passive: true });

  // Highlight the section in view
  const links = $$('.nav__links a');
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.remove('is-active'));
      const link = byId.get(entry.target.id);
      if (link) link.classList.add('is-active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

function initTheme() {
  const btn = $('[data-theme-toggle]');
  const meta = $('meta[name="theme-color"]');
  const sync = () => { meta.setAttribute('content', html.dataset.theme === 'light' ? '#f4f4f1' : '#0a0a0a'); };
  sync();

  btn.addEventListener('click', () => {
    const next = html.dataset.theme === 'light' ? 'dark' : 'light';
    const apply = () => {
      html.classList.add('theme-switching');
      html.dataset.theme = next;
      store.set('neuz-theme', next);
      sync();
      redrawDots();
      requestAnimationFrame(() => requestAnimationFrame(() => html.classList.remove('theme-switching')));
    };
    if (!document.startViewTransition || reduced) { apply(); return; }
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const end = Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy));
    const vt = document.startViewTransition(apply);
    vt.ready.then(() => {
      html.animate(
        { clipPath: [`circle(0px at ${cx}px ${cy}px)`, `circle(${end}px at ${cx}px ${cy}px)`] },
        { duration: 800, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(() => {});
  });
}

/* ---------------------------------------------------------------------------
   Scroll-linked effects (progress bar, process line, lit words, footer)
   --------------------------------------------------------------------------- */
function initScrollFx() {
  const bar = $('.progress i');
  const process = $('[data-process]');
  const statement = $('[data-words]');
  const mark = $('.footer__mark span');
  let words = [];
  let lit = -1;

  if (statement) {
    const text = statement.textContent.trim().split(/\s+/);
    statement.innerHTML = text.map((w) => `<span class="word">${esc(w)}</span>`).join(' ');
    words = $$('.word', statement);
  }

  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;

    if (process) {
      const r = process.getBoundingClientRect();
      process.style.setProperty('--p', clamp((vh * 0.85 - r.top) / (vh * 0.5)).toFixed(3));
    }
    if (words.length && !reduced) {
      const r = statement.getBoundingClientRect();
      const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.25));
      const n = Math.round(p * words.length);
      if (n !== lit) {
        lit = n;
        words.forEach((w, i) => w.classList.toggle('is-lit', i < n));
      }
    }
    if (mark && !reduced) {
      const r = mark.parentElement.getBoundingClientRect();
      const p = clamp((vh - r.top) / r.height);
      mark.style.setProperty('--fy', `${(1 - p) * 35}%`);
    }
  };
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  update();
}

/* ---------------------------------------------------------------------------
   Counters
   --------------------------------------------------------------------------- */
function animateCount(el, to) {
  const from = parseInt(el.dataset.shown || '0', 10);
  el.dataset.shown = to;
  if (reduced || from === to) { el.textContent = to; return; }
  const t0 = performance.now(), dur = 1600;
  const step = (now) => {
    const p = clamp((now - t0) / dur);
    const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
    el.textContent = Math.round(from + (to - from) * e);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const els = $$('[data-count]');
  els.forEach((el) => { if (!reduced) el.textContent = '0'; });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      io.unobserve(el);
      el.dataset.started = '1';
      animateCount(el, parseInt(el.dataset.count, 10));
    });
  }, { threshold: 0.5 });
  els.forEach((el) => io.observe(el));
}

function setCount(el, value) {
  el.dataset.count = value;
  if (el.dataset.started) animateCount(el, value);
}

/* ---------------------------------------------------------------------------
   Archive
   --------------------------------------------------------------------------- */
function initArchive() {
  const list = $('[data-archive]');
  if (!list) return;
  const more = $('[data-archive-more]');
  let filter = 'all';
  let expanded = false;

  list.innerHTML = ARCHIVE.map((p) => {
    const owner = p.repo.split('/')[0];
    const href = p.url || `https://github.com/${p.repo}`;
    const stars = p.stars ? `<span class="row__stars" data-row-stars><svg><use href="#i-star"/></svg><b>${p.stars}</b></span>` : `<span class="row__stars" data-row-stars hidden><svg><use href="#i-star"/></svg><b>0</b></span>`;
    return `<li data-cat="${p.cat}" data-repo="${esc(p.repo.toLowerCase())}">
      <a class="row" href="${esc(href)}" target="_blank" rel="noopener" data-cursor="Open">
        <span class="row__name"><span>${esc(p.name)}</span>${stars}</span>
        <span class="row__desc">${esc(p.desc)}</span>
        <span class="row__meta row__meta--lang mono" data-extra=" · @${esc(owner)} · ${p.year}">${esc(p.lang)}</span>
        <span class="row__meta row__meta--acct mono">@${esc(owner)}</span>
        <span class="row__meta row__meta--year mono">${p.year}</span>
        <svg class="row__arrow"><use href="#i-arrow"/></svg>
      </a>
    </li>`;
  }).join('');

  const items = $$('li', list);
  const counts = { all: ARCHIVE.length };
  ARCHIVE.forEach((p) => { counts[p.cat] = (counts[p.cat] || 0) + 1; });
  $$('[data-filter-count]').forEach((el) => { el.textContent = counts[el.dataset.filterCount] || 0; });

  const render = (animate) => {
    let shown = 0, n = 0;
    items.forEach((li) => {
      const match = filter === 'all' || li.dataset.cat === filter;
      const visible = match && (filter !== 'all' || expanded || shown < ARCHIVE_INITIAL);
      if (match) shown++;
      const wasHidden = li.classList.contains('is-hidden');
      li.classList.toggle('is-hidden', !visible);
      li.classList.remove('is-entering');
      if (visible && animate && (wasHidden || animate === 'all')) {
        void li.offsetWidth;
        li.style.setProperty('--i', n++);
        li.classList.add('is-entering');
      }
    });
    const hasMore = filter === 'all' && !expanded && ARCHIVE.length > ARCHIVE_INITIAL;
    more.parentElement.classList.toggle('is-done', !hasMore);
  };

  $$('[data-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      filter = btn.dataset.filter;
      $$('[data-filter]').forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
      });
      render('all');
    });
  });
  more.addEventListener('click', () => { expanded = true; render(true); });
  render(false);
}

/* ---------------------------------------------------------------------------
   Live data from GitHub and npm (cached for 30 minutes per session)
   --------------------------------------------------------------------------- */
async function loadLive() {
  const KEY = 'neuz-live-v1';
  let data = null;
  try {
    const cached = JSON.parse(store.get(KEY, true));
    if (cached && Date.now() - cached.t < 30 * 60 * 1000) data = cached.d;
  } catch (e) { /* ignore */ }

  if (!data) {
    const getJSON = (url) => fetch(url, { headers: { Accept: 'application/vnd.github+json' } })
      .then((r) => (r.ok ? r.json() : null)).catch(() => null);
    const [repoLists, strap, blox, npm] = await Promise.all([
      Promise.all(CONFIG.githubUsers.map((u) => getJSON(`https://api.github.com/users/${u}/repos?per_page=100`))),
      getJSON('https://api.github.com/repos/NeuzGG/NeuzStrap/releases/latest'),
      getJSON('https://api.github.com/repos/NeuzGG/NeuzBlox/releases/latest'),
      fetch('https://registry.npmjs.org/raya.js/latest').then((r) => (r.ok ? r.json() : null)).catch(() => null),
    ]);
    data = { stars: {}, repos: {}, releases: {}, npm: npm && npm.version };
    repoLists.forEach((list, i) => {
      if (!Array.isArray(list)) return;
      data.repos[CONFIG.githubUsers[i]] = list.length;
      list.forEach((r) => { data.stars[r.full_name.toLowerCase()] = r.stargazers_count; });
    });
    if (strap && strap.tag_name) data.releases['neuzgg/neuzstrap'] = strap.tag_name;
    if (blox && blox.tag_name) data.releases['neuzgg/neuzblox'] = blox.tag_name;
    // Only cache a complete answer, so a rate-limited visit retries next time.
    if (repoLists.every(Array.isArray)) store.set(KEY, JSON.stringify({ t: Date.now(), d: data }), true);
  }
  applyLive(data);
}

function applyLive(data) {
  const hasStars = Object.keys(data.stars).length > 0;

  $$('.project[data-repo]').forEach((card) => {
    const key = card.dataset.repo.toLowerCase();
    const starChip = $('[data-stat="stars"]', card);
    if (hasStars && key in data.stars && starChip) {
      $('b', starChip).textContent = data.stars[key];
      starChip.hidden = data.stars[key] < 1;
    }
    const rel = data.releases[key];
    const relEl = $('[data-stat="release"]', card);
    if (rel && relEl) relEl.textContent = rel.startsWith('v') ? rel : `v${rel}`;
  });
  if (data.npm) { const el = $('[data-stat="npm"]'); if (el) el.textContent = `raya.js ${data.npm}`; }

  if (hasStars) {
    $$('[data-archive] li').forEach((li) => {
      const n = data.stars[li.dataset.repo];
      const el = $('[data-row-stars]', li);
      if (typeof n === 'number' && el) { el.hidden = n < 1; $('b', el).textContent = n; }
    });
  }

  const users = Object.keys(data.repos);
  if (users.length === CONFIG.githubUsers.length) {
    const totalRepos = users.reduce((s, u) => s + data.repos[u], 0);
    const totalStars = Object.values(data.stars).reduce((s, n) => s + n, 0);
    const reposEl = $('[data-live="repos"]');
    const starsEl = $('[data-live="stars"]');
    if (reposEl) setCount(reposEl, totalRepos);
    if (starsEl) setCount(starsEl, totalStars);
  }
  users.forEach((u) => { const el = $(`[data-account-repos="${u}"]`); if (el) el.textContent = data.repos[u]; });
}

/* ---------------------------------------------------------------------------
   NeuzBlox mock: live instances + tiling
   --------------------------------------------------------------------------- */
function initBlox() {
  const root = $('[data-blox]');
  if (!root) return;
  const grid = $('[data-blox-grid]', root);
  const clients = Array.from(grid.children);
  const layoutLabel = $('[data-blox-layout]', root);
  const countLabel = $('[data-blox-count]', root);
  const layouts = [['grid', 'Grid'], ['columns', 'Columns'], ['rows', 'Rows']];
  const flow = ['closed', 'queued', 'authenticating', 'starting', 'running'];
  const state = clients.map((el, i) => ({ el, up: 740 - i * 173, stage: 4 }));
  let tick = 0, layout = 0, timer = 0;

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  const paint = () => {
    let live = 0;
    state.forEach((c) => {
      const status = flow[c.stage];
      c.el.dataset.status = status;
      $('[data-state]', c.el).textContent = status;
      $('[data-up]', c.el).textContent = status === 'running' ? fmt(c.up) : '--:--';
      if (status === 'running') live++;
    });
    countLabel.textContent = live;
  };

  const flip = (mutate) => {
    const first = clients.map((el) => el.getBoundingClientRect());
    mutate();
    if (reduced) return;
    clients.forEach((el, i) => {
      const last = el.getBoundingClientRect();
      if (!last.width || !last.height) return;
      el.animate([
        { transformOrigin: '0 0', transform: `translate(${first[i].left - last.left}px, ${first[i].top - last.top}px) scale(${first[i].width / last.width}, ${first[i].height / last.height})` },
        { transformOrigin: '0 0', transform: 'none' },
      ], { duration: 800, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
    });
  };

  const step = () => {
    tick++;
    state.forEach((c) => {
      if (c.stage < 4) { c.stage++; if (c.stage === 4) c.up = 0; }
      else c.up++;
    });
    // Every 9s, relaunch a client so you can see the launch pipeline.
    if (tick % 9 === 0) state[(tick / 9) % state.length].stage = 0;
    // Every 6s, re-tile the windows.
    if (tick % 6 === 0) {
      layout = (layout + 1) % layouts.length;
      flip(() => {
        grid.dataset.layout = layouts[layout][0];
        layoutLabel.textContent = layouts[layout][1];
      });
    }
    paint();
  };

  paint();
  whileVisible(root, () => { timer = setInterval(step, 1000); }, () => clearInterval(timer));
}

/* ---------------------------------------------------------------------------
   Raya mock: now playing + restart log
   --------------------------------------------------------------------------- */
function initRaya() {
  const root = $('[data-raya]');
  if (!root) return;
  const term = $('[data-term]', root);
  const bar = $('[data-np-bar]', root);
  const time = $('[data-np-time]', root);
  const LENGTH = 232;
  const LINES = [
    ['›', 'raya.shutdown()', 'saved 14 players', ''],
    ['›', 'process.exit(0)', 'bot restarting', ''],
    ['›', 'new Raya({ restore })', 'resuming…', ''],
    ['✓', 'session resumed', '14/14 players', 'ok'],
    ['!', 'node "eu-1" closed', 'failover → eu-2', 'warn'],
    ['✓', 'players moved', 'no gap in audio', 'ok'],
    ['♪', 'the music never stopped', '', 'ok final'],
  ];
  let pos = 84, line = 0, secTimer = 0, lineTimer = 0;

  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  const paintTrack = () => {
    bar.style.transform = `scaleX(${pos / LENGTH})`;
    time.textContent = fmt(pos);
  };
  const addLine = () => {
    if (line >= LINES.length) {
      lineTimer = setTimeout(() => { term.innerHTML = ''; line = 0; addLine(); }, 3200);
      return;
    }
    const [icon, cmd, note, cls] = LINES[line++];
    const li = document.createElement('li');
    if (cls) li.className = cls;
    li.innerHTML = `<span>${esc(icon)}</span><span>${esc(cmd)}</span><span>${esc(note)}</span>`;
    term.appendChild(li);
    lineTimer = setTimeout(addLine, 1100);
  };

  paintTrack();
  if (reduced) {
    LINES.forEach(() => addLine());
    clearTimeout(lineTimer);
    return;
  }
  whileVisible(root, () => {
    secTimer = setInterval(() => { pos = (pos + 1) % LENGTH; paintTrack(); }, 1000);
    if (!term.children.length) addLine(); else lineTimer = setTimeout(addLine, 600);
  }, () => { clearInterval(secTimer); clearTimeout(lineTimer); });
}

/* ---------------------------------------------------------------------------
   Clock, contact, toast
   --------------------------------------------------------------------------- */
function initClock() {
  const short = $$('[data-clock]');
  const full = $$('[data-clock-full]');
  const opts = { timeZone: 'Asia/Manila', hour12: false };
  let fShort, fFull;
  try {
    fShort = new Intl.DateTimeFormat('en-GB', { ...opts, hour: '2-digit', minute: '2-digit' });
    fFull = new Intl.DateTimeFormat('en-GB', { ...opts, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  } catch (e) { return; }
  const tick = () => {
    const now = new Date();
    short.forEach((el) => { el.textContent = fShort.format(now); });
    full.forEach((el) => { el.textContent = fFull.format(now); });
  };
  tick();
  setInterval(tick, 1000);
  const year = $('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
}

let toastTimer = 0;
function toast(msg) {
  const el = $('[data-toast]');
  el.textContent = msg;
  el.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-on'), 2600);
}

function initContact() {
  $$('[data-discord-link]').forEach((a) => { a.href = CONFIG.discordLink; });
  const copy = $('[data-copy]');
  const name = CONFIG.discordUsername.trim();
  if (!copy) return;
  if (!name) { copy.hidden = true; return; }
  copy.hidden = false;
  $('[data-discord-name]', copy).textContent = name;
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(name);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = name; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (err) { /* nothing else to try */ }
      ta.remove();
    }
    toast(`Copied "${name}". Add me on Discord`);
  });
}

/* ---------------------------------------------------------------------------
   Boot
   --------------------------------------------------------------------------- */
initLoader();
initReveal();
initDots();
initScramble();
initMarquee();
initCursor();
initPointerFx();
initNav();
initTheme();
initScrollFx();
initCounters();
initArchive();
initBlox();
initRaya();
initClock();
initContact();
loadLive();
