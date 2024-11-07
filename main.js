window.onload = function() {
    ///prompt function to receive name input
    function namePrompt(){
        let inputName = prompt("Please enter your name: ");
        if (inputName) {
            alert("Hello, " + inputName + "!");
        } else {
            alert("Oh, I don't know your name... :(");
        }
    }

    ///image size function to toggle enlargement
    function imageSize(){
        const divaPhoto = document.getElementById("divaPhoto");
       divaPhoto.classList.toggle("enlarged");
    }

    ///event listener for button
    const button = document.getElementById("eggButton");
    button.addEventListener("click", namePrompt);

    ///event listener for photo
    const divaPhoto = document.getElementById("divaPhoto");
    divaPhoto.addEventListener("click",imageSize);
}