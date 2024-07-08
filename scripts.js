const songs = [
    { title: "Canción 1", url: "https://drive.google.com/uc?export=download&id=1WwDFTNmNy3VS_OFUMnpDV1eHhU0obtqn" },
    { title: "Canción 2", url: "https://drive.google.com/uc?export=download&id=1WwDFTNmNy3VS_OFUMnpDV1eHhU0obtqn" },
    // Añade más canciones aquí
];

document.addEventListener("DOMContentLoaded", () => {
    const songList = document.getElementById("songList");
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");

    songs.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.title;
        li.addEventListener("click", () => {
            audioSource.src = song.url;
            audioPlayer.load();
            audioPlayer.play();
        });
        songList.appendChild(li);
    });
});
