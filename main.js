window.onload = function() {
    ///prompt function to receive name input
    function namePrompt(){
        let inputName = prompt("Please enter your name: ");
        if (inputName) {
            document.getElementById("name").textContent = "Hello, " + inputName + "!";
        } else {
            document.getElementById("name").textContent = "I don't know who you are! :(";
        }
    }

    ///image size function to toggle enlargement
    function imageSize(){
        const divaPhoto = document.getElementById("divaPhoto");
       divaPhoto.classList.toggle("enlarged");
    }

    ///event listener for button
    const button = document.getElementById("nameButton");
    button.addEventListener("click", namePrompt);

    ///event listener for photo
    const divaPhoto = document.getElementById("divaPhoto");
    divaPhoto.addEventListener("click",imageSize);

    ///adjust colour on mouse over
    function adjustColour(item) {
        item.style.backgroundColor = "#857575cc";
       item.style.color = "#fff";
    }

    ///adjust colour on mouse off
    function resetColour(item) {
        item.style.backgroundColor = "#ffffff99";
        item.style.color = "#3a3434";
    }
}