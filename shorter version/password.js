document.addEventListener("DOMContentLoaded", function() {
 
    const submitButton = document.getElementById("submit-button");

 
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();  
        
        const correctPassword = "SVA2025";  
        const userPassword = document.getElementById("password").value;
        const content = document.getElementById("content"); 
        const errorMessage = document.getElementById("error-message");

        if (userPassword === correctPassword) {
            window.location.hash = "video-container";  
            content.style.display = "none";  
            errorMessage.textContent = "";  
        } else {
            errorMessage.textContent = "Incorrect password. Please try again.";
            errorMessage.style.color = "red";
        }
    });
});
