//----------------------------- start header --------------------------------------------

// open toggle menu when click on toggle btn


var menu = document.querySelector('.links');
var toggleBtn = document.querySelector('.toggle-menu-btn');
var links = document.querySelectorAll('.links a');


toggleBtn.addEventListener('click', function() {
    this.classList.toggle("active")
    menu.classList.toggle('active-menu');
});

links.forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('active-menu');
        toggleBtn.classList.remove("active")
    });
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

// To scroll to the exact top of a specific section
    document.addEventListener("DOMContentLoaded", function() {
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);
          const targetPosition = targetSection.offsetTop - document.querySelector("header").offsetHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        });
      });
    });
    
//----------------------------- end header --------------------------------------------


//----------------------------- start portfolio --------------------------------------------

let list = document.querySelectorAll(".list")
let imgBox=document.querySelectorAll(".product-img")

for(let i=0;i<list.length;i++){
  list[i].addEventListener("click",()=>{
    for (let j = 0; j < list.length; j++) {
     list[j].classList.remove("active")
    }
    list[i].classList.add("active")

    let dataFilter=list[i].getAttribute("data-filter")

    for (let k = 0; k < imgBox.length; k++) {
      imgBox[k].classList.remove("active")
      imgBox[k].classList.add("hide")
      
      if(imgBox[k].getAttribute("data-tags")=== dataFilter || dataFilter === "all"){
        imgBox[k].classList.add("active")
        imgBox[k].classList.remove("hide")
      }
    }


  })
}

//----------------------------- end portfolio --------------------------------------------




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
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

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





