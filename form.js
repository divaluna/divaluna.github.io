window.onload = function() {
    function toggleLargeText() {
        document.body.classList.toggle("largeText");
    }
    
    const largeText = document.getElementById("largeText");
    largeText.addEventListener("click", toggleLargeText);    

      function toggleHighContrast() {
        console.log("Toggling colorblind mode"); // Debugging log
        document.body.classList.toggle("highcontrast-filter");
    }

    const highContrast = document.getElementById("highContrast");
    highContrast.addEventListener("click", toggleHighContrast);

    function toggleColorblindMode() {
        document.body.classList.toggle("colorblind-mode");
    }
    
    const colorblind = document.getElementById("colorblind");
    colorblind.addEventListener("click", toggleColorblindMode);


    /// Prompt function to receive name input
    function namePrompt() {
        let inputName = prompt("Please enter your name: ");
        if (inputName) {
            alert("Hello, " + inputName + "!");
        } else {
            alert("Oh, I don't know your name... :(");
        }
    }

    /// Event listener for the Easter Egg button
    const eggButton = document.getElementById("eggButton");
    eggButton.addEventListener("click", namePrompt);

        
}


      

  

  
  