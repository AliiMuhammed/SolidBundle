//----------------------------- start header --------------------------------------------

const navLinks = document.querySelectorAll(".nav-link");
const toggleBtn = document.querySelector(".toggle-menu-btn");
const links = document.querySelector(".links");
// open toggle menu when click on toggle btn
toggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  links.classList.toggle("active-menu");
});

// active link color when click on it
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.toggle("active");
    links.classList.remove("active-menu");
    toggleBtn.classList.remove("active");
  });
});

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
