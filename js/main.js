//----------------------------- start header --------------------------------------------

// open toggle menu when click on toggle btn

// Get references to the menu and toggle button elements
var menu = document.querySelector('.links');
var toggleBtn = document.querySelector('.toggle-menu-btn');

// Add a click event listener to the toggle button
toggleBtn.addEventListener('click', function() {
    // Toggle the 'active-menu' class on the menu element
    menu.classList.toggle('active-menu');
});

//active link color when you are in section while scrolling

    
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    function updateActiveLink() {
      const windowHeight = window.innerHeight;
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= windowHeight / 2 && sectionTop + sectionHeight >= windowHeight / 2) {
          const sectionId = section.getAttribute('id');
          
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }
    
    document.addEventListener('scroll', updateActiveLink);

//----------------------------- end header --------------------------------------------

//----------------------------- start contact form --------------------------------------------
function validateForm() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    subject === "" ||
    message === ""
  ) {
    alert("Please fill in all fields.");
    return false;
  }
  // Email format validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  // You can add additional validation rules here, such as email format validation.

  return true;
}
//----------------------------- end contact form --------------------------------------------

//----------------------------- start footer --------------------------------------------
const footerContent = document.querySelector("footer .content");
let year = new Date();
footerContent.innerHTML = `&copy;Copyrights ${year.getFullYear()} | SolidBundle`;
//----------------------------- end footer --------------------------------------------

//----------------------------- scroll-to-top btn --------------------------------------------

let btn = document.getElementById("scroll-to-top");

window.onscroll = () => {
  if (window.scrollY >= 200) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
