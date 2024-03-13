onload = () =>{
        document.body.classList.remove("container");
            
};

function playAudio() {
        var audio = document.getElementById("flowerAudio");
        var playButton = document.getElementById("playButton");
        var flowers = document.querySelector(".flowers");
        
        audio.play();
        playButton.style.display = "none";
        audio.style.display = "block"; // Menunjukkan audio control setelah audio dimulai
        flowers.classList.add("show");
}
