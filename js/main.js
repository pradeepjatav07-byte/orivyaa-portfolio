/* ═══════════════════════════════════════════════════════════
   ORIVYAA PORTFOLIO v4 — vanilla JS, no heavy libraries.
   Sab kuch light + reliable: preloader, nav, reveals,
   gallery filter, counters, links from config.js
   ═══════════════════════════════════════════════════════════ */

/* ───────── 1. LINK WIRING (from config.js) ───────── */
document.querySelectorAll("[data-link]").forEach(el => {
  const url = (CONFIG.links[el.getAttribute("data-link")] || "").trim();
  if (!url || url === "#") { el.style.display = "none"; }
  else el.setAttribute("href", url);
});

/* meta ads card state */
const metaPill = document.getElementById("metaPill");
const metaOpen = document.getElementById("metaOpen");
if (metaPill && metaOpen) {
  if (CONFIG.metaAdsComingSoon || !CONFIG.links.metaAds) {
    metaPill.textContent = "in progress";
    metaPill.className = "tag";
    metaOpen.style.display = "none";
  } else {
    metaPill.textContent = "live";
    metaOpen.textContent = "View PDF ↗";
  }
}

/* names & email from config */
document.getElementById("mailText").textContent = CONFIG.email;
const fm = document.getElementById("footMail");
if (fm) fm.href = `mailto:${CONFIG.email}?subject=ORIVYAA%20Portfolio`;
document.getElementById("mailBtn").href = `mailto:${CONFIG.email}?subject=ORIVYAA%20Portfolio`;
document.getElementById("footMeta").textContent = `${CONFIG.name} — ${CONFIG.session}`;
document.getElementById("footCollege").textContent = CONFIG.college;

/* ───────── 2. PRELOADER ───────── */
const preloader = document.getElementById("preloader");
const preBar = document.getElementById("preBar");
let pct = 0;
const tick = setInterval(() => {
  pct = Math.min(100, pct + Math.ceil(Math.random() * 18));
  preBar.style.width = pct + "%";
  if (pct >= 100) {
    clearInterval(tick);
    setTimeout(() => preloader.classList.add("done"), 250);
  }
}, 90);
window.addEventListener("load", () => setTimeout(() => preloader.classList.add("done"), 1200));

/* ───────── 3. NAV ───────── */
const nav = document.getElementById("nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 40), { passive: true });
document.getElementById("burger").addEventListener("click", () =>
  document.getElementById("navLinks").classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a =>
  a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open")));

/* ───────── 4. SCROLL REVEALS ───────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ───────── 5. STAT COUNTERS ───────── */
const counters = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, t0 = performance.now(), dur = 1100;
    const step = now => {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    counters.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach(el => counters.observe(el));

/* ───────── 6. GALLERY FILTER ───────── */
const chips = document.getElementById("chips");
chips.addEventListener("click", e => {
  const b = e.target.closest(".chip"); if (!b) return;
  chips.querySelectorAll(".chip").forEach(c => c.classList.remove("is-on"));
  b.classList.add("is-on");
  const cat = b.dataset.cat;
  document.querySelectorAll(".shot").forEach(s =>
    s.classList.toggle("hide", cat !== "all" && s.dataset.cat !== cat));
});

/* ───────── 7. MAGNETIC BUTTONS (subtle) ───────── */
if (matchMedia("(hover:hover)").matches) {
  document.querySelectorAll(".magnetic").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px, ${(e.clientY - r.top - r.height / 2) * .18}px)`;
    });
    el.addEventListener("mouseleave", () => el.style.transform = "");
  });
}
