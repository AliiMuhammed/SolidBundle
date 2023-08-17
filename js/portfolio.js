//----------------------------- start portfolio --------------------------------------------

const modal = document.getElementById("imageModal");
const closeModal = document.querySelector(".close");
const modalTitle = document.querySelector(".title p");
const modalDescription = document.querySelector(".description p");

function openModal(itemId) {
  modal.style.display = "flex"; // Display the modal

  // Fetch data from the API using the item ID
  fetch(`https://solidbundle.e-emoney.com/api/v1/project/${itemId}`)
    .then((response) => response.json())
    .then((data) => {
      modalTitle.textContent = data.data.title; // Set the title
      modalDescription.textContent = data.data.description; // Set the description

      // Add screenshots to the carousel
      const carousel = document.querySelector(".carousel");
      const screenshots = data.data.screenshots;
      carousel.innerHTML = ""; // Clear previous carousel content

      screenshots.forEach((screenshot) => {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("carousel_img");

        const imgElement = document.createElement("img");
        imgElement.src = screenshot.path;
        imgElement.alt = "img";
        carousel.style.backgroundImage = `url(${data.data.background})`;
        carousel.style.backgroundSize = "cover";
        imgContainer.appendChild(imgElement);
        carousel.appendChild(imgContainer);
      });

      (firstImg = carousel.querySelectorAll("img")[0]),
        (arrowIcons = document.querySelectorAll(".wrapper i"));


      const showHideIcons = () => {
        let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
        arrowIcons[0].style.display =
          carousel.scrollLeft == 0 ? "none" : "block";

        // Only show the right arrow icon if there's more content to the right
        arrowIcons[1].style.display =
          carousel.scrollLeft < scrollWidth ? "block" : "none";
      };

      arrowIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
          const carouselImgs = document.querySelectorAll(".carousel_img");
          const carouselImgWidth = carouselImgs[0].clientWidth
          const currentScrollLeft = carousel.scrollLeft;
          const currentIndex = Math.round(currentScrollLeft / carouselImgWidth);
          
          // Calculate the new index based on the clicked arrow
          let newIndex = currentIndex + (icon.id === "left" ? -1 : 1);
          
          // Make sure the index stays within bounds
          newIndex = Math.max(0, Math.min(newIndex, carouselImgs.length - 1));
      
          // Update the scroll position based on the new index
          const newScrollLeft = newIndex * carouselImgWidth;
          carousel.scrollLeft = newScrollLeft;
      
          // Update the visibility of arrows after scrolling
          setTimeout(() => showHideIcons(), 60);
        });
      });
      

     

    })
    .catch((error) => {
      console.error("Error fetching project data:", error);
    });
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none"; // Hide the modal
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"; // Close modal when clicked outside
  }
});

function fetchImage() {
  fetch("https://solidbundle.e-emoney.com/api/v1/project")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error cannot load images");
      }
      return response.json();
    })
    .then((data) => {
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
        galleryContainer.innerHTML = displayedImages
          .map((item) => {
            return createImageElement(item, category); // Properly return the HTML string
          })
          .join("");
        const imgElements = galleryContainer.querySelectorAll(".product-img");

        imgElements.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add("active");
            const item = displayedImages[index]; // Get the item object
            const itemId = item.id; // Get the item ID
            // Add the click event listener inside the forEach loop
            img.addEventListener("click", () => {
              openModal(itemId); // Pass the item ID for each clicked image
            });
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
            showMoreButton.disabled =
              totalDisplayedImages >= arrayMobile.length;
          } else if (dataFilter === "design") {
            totalDisplayedImages = 8;
            displayImages(arrayDesign, "design");
            showMoreButton.disabled =
              totalDisplayedImages >= arrayDesign.length;
          }
        });
      }

      // "Show More" button functionality
      showMoreButton.addEventListener("click", () => {
        totalDisplayedImages += loadMoreCount;
        let dataFilter = document
          .querySelector(".list.active")
          .getAttribute("data-filter");
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
    .catch((error) => {
      let errorMessage = error;
      console.log(errorMessage);
    });
}

fetchImage();

//----------------------------- end portfolio --------------------------------------------
