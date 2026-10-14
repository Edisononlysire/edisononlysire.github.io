const menu = document.getElementById('menu-toggle');
const nav = document.getElementById('site-nav');

menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  menu.setAttribute('aria-label', open ? (document.documentElement.lang === 'en' ? 'Open navigation menu' : '打开导航菜单') : (document.documentElement.lang === 'en' ? 'Close navigation menu' : '关闭导航菜单'));
  nav?.classList.toggle('is-open', !open);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menu?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-lang-link]').forEach(link => link.addEventListener('click', event => {
  if (!location.hash) return;
  event.preventDefault();
  location.href = link.getAttribute('href') + location.hash;
}));

document.getElementById('print-button')?.addEventListener('click', () => window.print());
