document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll with nav offset
  const nav = document.querySelector('nav');
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - (nav ? nav.offsetHeight : 0),
        behavior: 'smooth'
      });
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul a');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + (nav ? nav.offsetHeight + 20 : 80);
    sections.forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${section.id}` ? 'var(--accent)' : '';
        });
      }
    });
  }, { passive: true });

  // Contact form
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) return;

      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending...';

      // Replace this timeout with your backend/Firebase call
      setTimeout(() => {
        form.reset();
        btn.disabled = false;
        btn.textContent = 'Send Message';
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 5000);
      }, 1000);
    });
  }

});