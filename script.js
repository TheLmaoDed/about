const textArray = ["I am Lmao Ded", "Web Developer", "Video Editor"]; // Define texts to animate
let arrayIndex = 0;
let letterIndex = 0;

function typeText() {
    const textElement = document.querySelector("#animated-text");

    // Avoid flashing by resetting before adding letters
    textElement.innerHTML = textArray[arrayIndex].substring(0, letterIndex);

    if (letterIndex < textArray[arrayIndex].length) {
        letterIndex++;
        setTimeout(typeText, 100); // Adjust typing speed
    } else {
        setTimeout(deleteText, 1000); // Wait before deleting
    }
}

function deleteText() {
    const textElement = document.querySelector("#animated-text");

    textElement.innerHTML = textArray[arrayIndex].substring(0, letterIndex);

    if (letterIndex > 0) {
        letterIndex--;
        setTimeout(deleteText, 100); // Adjust deleting speed
    } else {
        arrayIndex = (arrayIndex + 1) % textArray.length; // Loop through the text array
        setTimeout(typeText, 500);
    }
}

// Start the animation after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector("#animated-text");
    textElement.innerHTML = ""; // Ensure no default text appears initially
    typeText();
});

// JavaScript to hide loading screen after the page fully loads
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";  // Hides loading screen after page loads
});
