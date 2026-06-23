// ── Typewriter Effect ──
const titles = [
  "Prompt Engineer Intern",
  "Full-Stack Developer",
  "MCA Student @ VIT",
  "AI-Assisted Builder"
];

let ti = 0, ci = 0, deleting = false;
const el = document.getElementById('typewriter');

function type() {
  const current = titles[ti];
  const cursor = '<span class="cursor"></span>';

  if (!deleting) {
    ci++;
    el.innerHTML = current.slice(0, ci) + cursor;
    if (ci === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
    setTimeout(type, 60);
  } else {
    ci--;
    el.innerHTML = current.slice(0, ci) + cursor;
    if (ci === 0) {
      deleting = false;
      ti = (ti + 1) % titles.length;
      setTimeout(type, 300);
      return;
    }
    setTimeout(type, 35);
  }
}

type();

// ── Scroll Reveal ──
const revealEls = document.querySelectorAll(
  'section, .proj-card, .skill-card, .edu-card, .stat-card'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// ── Active nav highlight on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}`
      ? 'var(--amber)'
      : 'var(--muted)';
  });
});

// ── Mobile hamburger (simple toggle) ──
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const open = navLinksEl.style.display === 'flex';
  navLinksEl.style.cssText = open
    ? ''
    : 'display:flex;flex-direction:column;position:absolute;top:60px;left:0;right:0;background:rgba(10,15,30,0.97);padding:1.5rem 2rem;gap:1.5rem;border-bottom:1px solid rgba(255,255,255,0.08)';
});
