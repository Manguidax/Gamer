// music.js - Som ambiente para o Universo Gamer
const musicaGamer = new Audio('audio/fundo_gamer.mp3');
musicaGamer.loop = true;
musicaGamer.volume = 0.3; // Volume baixo para não incomodar

function controlarMusica() {
    if (musicaGamer.paused) {
        musicaGamer.play();
        console.log("Música ligada no Mangui d'Dax");
    } else {
        musicaGamer.pause();
    }
}

// Opcional: Começar a música após o primeiro clique do utilizador no site
document.addEventListener('click', () => {
    // Descomenta a linha abaixo se quiseres que a música comece sozinha ao clicar
    // musicaGamer.play(); 
}, { once: true });
