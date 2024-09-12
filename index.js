
var sounds = {
    "w": null,
    "a": null,
    "s": null,
    "d": null,
    "j": null,
    "k": null,
    "l": null
};

var botones = document.getElementsByClassName("drum");

for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {
        var buttonIn = this.innerHTML;
        mSound(buttonIn);
    });
}

document.addEventListener("keydown", function(event) {
    mSound(event.key);
});

function mSound(key) {
    if (sounds.hasOwnProperty(key)) {
        var button = document.querySelector(`.${key}`); 

        if (sounds[key] === null) {
            sounds[key] = new Audio(`sounds/${getSoundFileName(key)}`);
            sounds[key].loop = true; 
            sounds[key].play();

          
            if (button) button.classList.add("playing");
        } else {
            sounds[key].pause();
            sounds[key] = null; 
            
            if (button) button.classList.remove("playing");
        }
    }
}

function getSoundFileName(key) {
    switch (key) {
        case "w":
            return "funk1.wav";
        case "a":
            return "funk2.wav";
        case "s":
            return "funk3.wav";
        case "d":
            return "funk4.wav";
        case "j":
            return "vozFunk1.wav";
        case "k":
            return "vozFunk2.wav";
        case "l":
            return "vozFunk3.wav";
        default:
            return ""; 
    }
}

function stopAllSounds() {
    for (var key in sounds) {
        if (sounds[key] !== null) {
            sounds[key].pause();  
            sounds[key] = null;    
            
           
            var button = document.querySelector(`.${key}`);
            if (button) button.classList.remove("playing");
        }
    }
}

document.getElementById("stopAll").addEventListener("click", stopAllSounds);