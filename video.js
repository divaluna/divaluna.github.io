var video = document.getElementById("movie"); //Get the video element
    function playPause() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
        }
        
    function higherVolume() {
        if (video.volume < 1) { // Volume is a value between 0 and 1
            video.volume = Math.min(video.volume + 0.1, 1); // Increase volume by 0.1 but not above 1
        }
    }
          
    // Decrease Volume Function
    function lowerVolume() {
        if (video.volume > 0) {
            video.volume = Math.max(video.volume - 0.1, 0); // Decrease volume by 0.1 but not below 0
        }
    }