// Fetch data from the API
fetch("https://solidbundle.e-emoney.com/api/v1/review")
  .then((response) => response.json())
  .then((data) => {
    const sliderWrapper = document.getElementById("sliderWrapper");

    // Loop through the data and create slides
    data.data.forEach((client) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide", "tranding-slide");

      const clientImg = document.createElement("div");
      clientImg.classList.add("client-img");
      const img = document.createElement("img");
      img.src = client.image; // Assuming 'image' is the property name in the data
      img.alt = client.client_name;
      clientImg.appendChild(img);

      const clientContent = document.createElement("div");
      clientContent.classList.add("client-content");
      const clientName = document.createElement("h2");
      clientName.classList.add("client-name");
      clientName.textContent = client.client_name;
      const clientPosition = document.createElement("span");
      clientPosition.classList.add("client-position");
      clientPosition.textContent = client.profession;
      const rating = document.createElement("div");
      rating.classList.add("rating");
      // Add rating stars as you did before
      rating.innerHTML = `
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
        `;
      const review = document.createElement("p");
      review.classList.add("review");
      review.textContent = client.review;

      clientContent.appendChild(clientName);
      clientContent.appendChild(clientPosition);
      clientContent.appendChild(rating);
      clientContent.appendChild(review);

      slide.appendChild(clientImg);
      slide.appendChild(clientContent);

      sliderWrapper.appendChild(slide);
    });

    // Initialize the Swiper slider
    var TrandingSlider = new Swiper(".tranding-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
