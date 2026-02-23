// Nav scroll effect
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Close mobile menu on link click
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// Scroll fade-in animations
const observerOptions = { threshold: 0.15 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Apply fade-up to key elements
document.querySelectorAll(
  '.work-card, .insight-card, .about-content, .contact-info, .section-title, .section-sub, .flow-step, .tool-card'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
