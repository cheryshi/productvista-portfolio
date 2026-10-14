const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation?.classList.toggle('open', open);
});

navigation?.addEventListener('click', (event) => {
  if (!event.target.closest('a')) return;
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
});

const revealItems = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();
