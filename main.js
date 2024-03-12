window.onload = () => {
    document.body.classList.remove("container"); // Menghapus kelas "container" dari elemen body
    var playButton = document.getElementById("playButton"); // Mendapatkan elemen tombol putar
    if (playButton) {
        playButton.addEventListener("click", playMusic); // Menambahkan event listener untuk memanggil fungsi playMusic saat tombol putar diklik
    } else {
        console.error("Elemen dengan ID 'playButton' tidak ditemukan.");
    }
};

function playMusic() {
    var audio = new Audio("https://j.top4top.io/m_299357awq1.mp3"); // Mendefinisikan objek audio dengan URL musik
    audio.play(); // Memainkan musik

    // Memeriksa apakah notifikasi didukung oleh browser
    if ('Notification' in window && Notification.permission === 'granted') {
        // Membuat notifikasi
        var notification = new Notification('Musik Dimulai', {
            body: 'Musik sedang diputar', // Konten pesan notifikasi
            icon: 'path/to/your/icon.png' // URL untuk ikon notifikasi (opsional)
        });
    }
    // Meminta izin untuk menampilkan notifikasi jika belum diberikan
    else if ('Notification' in window && Notification.permission !== 'denied') {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                // Membuat notifikasi
                var notification = new Notification('Musik Dimulai', {
                    body: 'Musik sedang diputar', // Konten pesan notifikasi
                    icon: 'path/to/your/icon.png' // URL untuk ikon notifikasi (opsional)
                });
            }
        });
    }
}
