window.onload = () => {
    document.body.classList.remove("container"); // Menghapus kelas "container" dari elemen body
    var playButton = document.getElementById("playButton"); // Mengambil elemen tombol play
    playButton.addEventListener("click", playMusic); // Menambahkan event listener untuk memanggil fungsi playMusic saat tombol play diklik
};

function playMusic() {
    var audio = new Audio("https://j.top4top.io/m_299357awq1.mp3"); // Mendefinisikan objek audio dengan URL musik
    audio.play(); // Memainkan musik
}
