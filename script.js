let lastScrollY = window.scrollY;
const header = document.getElementById('header');
const navLinks = document.querySelector('.nav-links');

// Scrolling header behavior
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down, hide header
    header.classList.add('hidden');
  } else {
    // Scrolling up, show header
    header.classList.remove('hidden');
  }
  lastScrollY = window.scrollY;
});
