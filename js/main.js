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
function fetchImage() {
  fetch("http://solidbundle-env.eba-u2iepvsu.us-east-2.elasticbeanstalk.com/api/v1/portfolio")
    .then(response => {
      if (!response.ok) {
        throw Error("Error cannot load images");
      }
      return response.json();
    })
    .then(data => {
      let arrayAll = data.data.all;
      let arrayWeb = data.data.web;
      let arrayMobile = data.data.mobile;
      let arrayDesign = data.data.design;

      const galleryContainer = document.querySelector(".gallery .box");
      let totalDisplayedImages = 8;
      const loadMoreCount = 4;

      function createImageElement(item, category) {
        return `
          <div class="product-img" data-tags="${category}">
            <img src="${item.image}" alt="${item.title}">
          </div>
        `;
      }

      function displayImages(images, category) {
        const displayedImages = images.slice(0, totalDisplayedImages);
        galleryContainer.innerHTML = displayedImages.map(item => createImageElement(item, category)).join("");
        const imgElements = galleryContainer.querySelectorAll(".product-img");
        imgElements.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add("active");
          }, index * 100);
        });
      }

      displayImages(arrayAll, "all");

      let list = document.querySelectorAll(".list");
      const showMoreButton = document.querySelector(".show-more");

      for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", () => {
          for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("active");
          }
          list[i].classList.add("active");

          let dataFilter = list[i].getAttribute("data-filter");

          if (dataFilter === "all") {
            totalDisplayedImages = 8;
            displayImages(arrayAll, "all");
            showMoreButton.disabled = totalDisplayedImages >= arrayAll.length;
          } else if (dataFilter === "web") {
            totalDisplayedImages = 8;
            displayImages(arrayWeb, "web");
            showMoreButton.disabled = totalDisplayedImages >= arrayWeb.length;
          } else if (dataFilter === "mobile") {
            totalDisplayedImages = 8;
            displayImages(arrayMobile, "mobile");
            showMoreButton.disabled = totalDisplayedImages >= arrayMobile.length;
          } else if (dataFilter === "design") {
            totalDisplayedImages = 8;
            displayImages(arrayDesign, "design");
            showMoreButton.disabled = totalDisplayedImages >= arrayDesign.length;
          }
        });
      }

      // "Show More" button functionality
      showMoreButton.addEventListener("click", () => {
        totalDisplayedImages += loadMoreCount;
        let dataFilter = document.querySelector(".list.active").getAttribute("data-filter");
        if (dataFilter === "all") {
          displayImages(arrayAll, "all");
          showMoreButton.disabled = totalDisplayedImages >= arrayAll.length;
        } else if (dataFilter === "web") {
          displayImages(arrayWeb, "web");
          showMoreButton.disabled = totalDisplayedImages >= arrayWeb.length;
        } else if (dataFilter === "mobile") {
          displayImages(arrayMobile, "mobile");
          showMoreButton.disabled = totalDisplayedImages >= arrayMobile.length;
        } else if (dataFilter === "design") {
          displayImages(arrayDesign, "design");
          showMoreButton.disabled = totalDisplayedImages >= arrayDesign.length;
        }
      });
    })
    .catch(error => {
      errorMessage = error;
    });
}

fetchImage();




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



