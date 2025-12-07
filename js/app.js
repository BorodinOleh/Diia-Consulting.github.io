// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

function closeMenu() {
  const menu = document.getElementById('menu');
  menu.classList.remove('active');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Form submission
function formSubmitted() {
  // Проверяем, что форма действительно была отправлена
  const iframe = document.getElementById('hidden_iframe');
  if (!iframe) return;

  const message = document.getElementById('successMessage');
  if (message) {
    message.style.display = 'block';
  }

  // Очистка формы
  const form = document.getElementById('contactForm');
  if (form) {
    form.reset();
  }
}


// Close mobile menu on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.getElementById('menu').classList.remove('active');
  }
});
