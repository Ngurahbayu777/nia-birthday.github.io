window.onload = () => {
    document.body.classList.remove("container");
    var playButton = document.getElementById("playButton");
    if (playButton) {
        playButton.addEventListener("click", () => {
            // Menampilkan pop-up saat tombol "play music" diklik
            var musicPopup = document.getElementById("musicPopup");
            musicPopup.style.display = "block";
        });
    } else {
        console.error("Elemen dengan ID 'playButton' tidak ditemukan.");
    }
};

function playMusic() {
    var audio = new Audio("https://j.top4top.io/m_299357awq1.mp3");
    audio.play();

    // Menutup pop-up setelah musik dimulai
    var musicPopup = document.getElementById("musicPopup");
    musicPopup.style.display = "none";

    // Menampilkan notifikasi jika didukung oleh browser
    if ('Notification' in window && Notification.permission === 'granted') {
        var notification = new Notification('Musik Dimulai', {
            body: 'Musik sedang diputar',
            icon: 'path/to/img/icon.png'
        });
    } else if ('Notification' in window && Notification.permission !== 'denied') {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                var notification = new Notification('Musik Dimulai', {
                    body: 'Musik sedang diputar',
                    icon: 'path/to/your/icon.png'
                });
            }
        });
    }
}
