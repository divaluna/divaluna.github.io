window.onload = function() {
    /// Prompt function to receive name input
    function namePrompt() {
        let inputName = prompt("Please enter your name: ");
        if (inputName) {
            alert("Hello, " + inputName + "!");
        } else {
            alert("Oh, I don't know your name... :(");
        }
    };

    /// Image size function to toggle enlargement
    function imageSize() {
        const divaPhoto = document.getElementById("divaPhoto");
        divaPhoto.classList.toggle("enlarged");
    };

    /// Event listener for the Easter Egg button
    const eggButton = document.getElementById("eggButton");
    eggButton.addEventListener("click", namePrompt);

    /// Event listener for the photo
    const divaPhoto = document.getElementById("divaPhoto");
    divaPhoto.addEventListener("click", imageSize);

    function toggleColorblindMode() {
        console.log("Toggling colorblind mode"); // Debugging log
        document.body.classList.toggle("colorblind-filter");
    };

    const colourBlindButton = document.getElementById("colourBlind");
    colourBlindButton.addEventListener("click", toggleColorblindMode);
};
