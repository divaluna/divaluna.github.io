///prompt function to receive name input
function namePrompt(){
    const inputName = prompt("Please enter your name: ");
    displayName(inputName);
}

///prompt function to display text
function displayName(){
    const output = document.getElementById("name");
    output.textContent = inputName ? `Hello, ${inputName}!` : "I'm not sure who you are :(";
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
    item.style.backgroundColor = "#f776a3";
    item.style.color = "#fff";
}

///adjust colour on mouse off
function resetColour(item) {
    item.style.backgroundColor = "#f4f0f3";
    item.style.color = "#891e3b";
}