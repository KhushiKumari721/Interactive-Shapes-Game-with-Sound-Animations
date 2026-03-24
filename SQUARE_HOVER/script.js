let currentAudio = null;

const soundMap = {
    square: "sounds/one.mp3",
    diamond: "sounds/two.mp3",
    circle: "sounds/three.mp3"
};

const shapes = document.querySelectorAll(".shape");

shapes.forEach(shape => {
    shape.addEventListener("click", () => {

        // previous sound stop
        if (currentAudio) {   //kya already koi sound chal raha hai
            currentAudio.pause();  //Jo sound chal raha tha usko pause krna
            currentAudio.currentTime = 0; // next time jab play karega → starting se chalega
        }

        // new sound play
        const soundFile = soundMap[shape.id];
        currentAudio = new Audio(soundFile);
        currentAudio.play();
    });
});