let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  let formIsValid = true;

  // Clear previous error messages
  const errorTextElements = document.querySelectorAll(".error-text");
  errorTextElements.forEach((errorText) => {
    errorText.textContent = "";
  });

  if (firstName === "") {
    document.querySelector(".error-text.firstName").textContent =
      "Please enter your first name.";
    formIsValid = false;
  }
  if (lastName === "") {
    document.querySelector(".error-text.lastName").textContent =
      "Please enter your last name.";
    formIsValid = false;
  }
  if (email === "") {
    document.querySelector(".error-text.email").textContent =
      "Please enter your email address.";
    formIsValid = false;
  } else {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.querySelector(".error-text.email").textContent =
        "Please enter a valid email address.";
      formIsValid = false;
    }
  }
  if (subject === "") {
    document.querySelector(".error-text.subject").textContent =
      "Please enter the subject.";
    formIsValid = false;
  }
  if (message === "") {
    document.querySelector(".error-text.message").textContent =
      "Please enter your message.";
    formIsValid = false;
  }
  if (formIsValid) {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    // Make the POST request to the API
    fetch("https://solidbundle.e-emoney.com/api/v1/contact", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response if needed
        let successMsg = document.querySelector(".success-msg");
        successMsg.innerHTML = `Your message has been sent successfully`;
        successMsg.style.display = "flex";
        // Clear input fields
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      })
      .catch((error) => {
        // Handle errors if the API request fails
        console.error("Error sending form data:", error);
      });
  }
});
