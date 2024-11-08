const audio = new Audio('imagens/hino.mp3'); // Caminho do hino
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = '⏸️ Pausar Hino'; // Altera o texto do botão para "Pausar"
    } else {
        audio.pause();
        playButton.textContent = '🔊 Tocar Hino'; // Retorna ao texto original
    }
});