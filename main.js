window.onload = () => {
    document.body.classList.remove("container"); // Menghapus kelas "container" dari elemen body
    playMusic(); // Memanggil fungsi untuk memainkan musik
};

function playMusic() {
    var audio = document.getElementById("backgroundMusic"); // Mengambil elemen audio berdasarkan ID
    audio.play(); // Memainkan musik
}
