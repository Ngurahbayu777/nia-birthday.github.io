window.onload = () => {
    document.body.classList.remove("container"); // Menghapus kelas "container" dari elemen body
    playMusic(); // Memanggil fungsi untuk memainkan musik
};

function playMusic() {
    var audio = new Audio("https://j.top4top.io/m_299357awq1.mp3"); // Mendefinisikan objek audio dengan URL musik
    audio.play(); // Memainkan musik
}
