document.addEventListener("DOMContentLoaded", function () {
  const submitButtons = document.querySelectorAll(".button.submit");

  submitButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const correctPassword = "SVA2025";
      const userPassword = document.getElementById("password").value;
      const content = document.getElementById("content");
      const errorMessage = document.getElementById("error-message");
      const videoContainerId = this.getAttribute("href").slice(1); // Get the target container id from href

      if (userPassword === correctPassword) {
        window.location.hash = videoContainerId; // Direct to the appropriate video container
        content.style.display = "none";
        errorMessage.textContent = "";
        document.querySelectorAll(".video-container").forEach((container) => {
          container.style.display = "none"; // Initially hide all containers
        });
        document.getElementById(videoContainerId).style.display = "block"; // Show the correct container
      } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
      }
    });
  });
});
