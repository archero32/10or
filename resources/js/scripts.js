// Smooth scrolling effect for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        });
    });
});
function setActivePage(pageName) {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      if (link.textContent === pageName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  