

//----------------------------- start header --------------------------------------------

const navLinks = document.querySelectorAll('.nav-link');
const toggleBtn = document.querySelector('.toggle-menu-btn');
const links = document.querySelector('.links');
// open toggle menu when click on toggle btn 
toggleBtn.addEventListener('click', function() {
  this.classList.toggle('active');
  links.classList.toggle('active-menu');
});

// active link color when click on it 
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.toggle('active');
    links.classList.remove("active-menu")
    toggleBtn.classList.remove('active');
  });
});

//----------------------------- end header --------------------------------------------
//----------------------------- start footer --------------------------------------------
const footerContent = document.querySelector('footer .content')
let year =new Date()
footerContent.innerHTML=`&copy;Copyrights ${year.getFullYear()} | SolidBundle`
//----------------------------- end footer --------------------------------------------


