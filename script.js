// Open and close the navigation menu on small screens.
const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  siteNav.classList.toggle('is-open', !isOpen);
});

// Close the menu after choosing a page section.
siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
  });
});

// Show a demo response. A real website needs a server to deliver messages.
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const status = document.querySelector('.form-note');
  status.textContent = `Thanks, ${name}! This demo form is ready to connect to email.`;
  contactForm.reset();
});

// Keep the footer year up to date automatically.
document.querySelector('#year').textContent = new Date().getFullYear();

// Reveal section content gently as it enters the screen.
const revealItems = document.querySelectorAll('.section-topline, .about-grid, .principles, .contact-grid');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('reveal-ready');
  revealItems.forEach((item) => item.classList.add('reveal'));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
}
