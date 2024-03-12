function playMusic() {
    var audio = new Audio("https://j.top4top.io/m_299357awq1.mp3");
    audio.play();

    // Menampilkan popup
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    // Menyembunyikan popup setelah beberapa detik
    setTimeout(function() {
        popup.style.display = "none";
    }, 3000); // Misalnya, dalam contoh ini, popup akan disembunyikan setelah 3 detik
}
