//----------------------------- start header --------------------------------------------

// open toggle menu when click on toggle btn

var menu = document.querySelector(".links");
var toggleBtn = document.querySelector(".toggle-menu-btn");
var links = document.querySelectorAll(".links a");

toggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("active-menu");
});

links.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("active-menu");
    toggleBtn.classList.remove("active");
  });
});

//active link color when you are in section while scrolling

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function updateActiveLink() {
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    if (
      sectionTop <= windowHeight / 2 &&
      sectionTop + sectionHeight >= windowHeight / 2
    ) {
      const sectionId = section.getAttribute("id");

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}

document.addEventListener("scroll", updateActiveLink);

// To scroll to the exact top of a specific section
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      const targetPosition =
        targetSection.offsetTop - document.querySelector("header").offsetHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
});

//----------------------------- end header --------------------------------------------




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

//----------------------------- popup --------------------------------------------

// let popupBtn=document.getElementById("popup-btn")
// popupBtn.addEventListener("click",toggle)

// function toggle(){
//   var blur =document.getElementById("blur");
//   blur.classList.toggle("active-blur")
//   var popup =document.getElementById("popup");
//   popup.classList.toggle("active-blur")
// }
