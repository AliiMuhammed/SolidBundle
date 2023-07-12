const navLinks = document.querySelectorAll('.nav-link');
const toggleBtn = document.querySelector('.toggle-menu-btn');
const links = document.querySelector('.links');



toggleBtn.addEventListener('click', function() {
  this.classList.toggle('active');
  links.classList.toggle('active-menu');
});
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.toggle('active');
    links.classList.remove("active-menu")
    toggleBtn.classList.remove('active');
  });
});
