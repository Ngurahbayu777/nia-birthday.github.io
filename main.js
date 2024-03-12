window.onload = () => {
    document.body.classList.remove("container"); // Menghapus kelas "container" dari elemen body
    var playButton = document.getElementById("playButton"); // Mengambil elemen tombol play
    if (playButton) {
        playButton.addEventListener("click", playMusic); // Menambahkan event listener untuk memanggil fungsi playMusic saat tombol play diklik
    } else {
        console.error("Element with id 'playButton' not found.");
    }
};

function playMusic() {
    var audio = new Audio("https://j.top4top.io/m_299357awq1.mp3"); // Mendefinisikan objek audio dengan URL musik
    audio.play(); // Memainkan musik

    // Memeriksa apakah notifikasi didukung oleh browser
    if ('Notification' in window && Notification.permission === 'granted') {
        // Membuat notifikasi
        var notification = new Notification('Musik dimulai', {
            body: 'Musik sedang diputar', // Isi pesan notifikasi
            icon: 'path/to/your/icon.png' // URL ikon untuk notifikasi (opsional)
        });
    }
    // Meminta izin untuk menampilkan notifikasi jika belum diberikan
    else if ('Notification' in window && Notification.permission !== 'denied') {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                // Membuat notifikasi
                var notification = new Notification('Musik dimulai', {
                    body: 'Musik sedang diputar', // Isi pesan notifikasi
                    icon: 'path/to/your/icon.png' // URL ikon untuk notifikasi (opsional)
                });
            }
        });
    }
}
