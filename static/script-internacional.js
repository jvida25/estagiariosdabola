document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item');
    let currentIndex = 0;

    function moveCarousel() {
        newsItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % newsItems.length;
        newsItems[currentIndex].classList.add('active');
    }

    // Mudar item a cada 3 segundos
    setInterval(moveCarousel, 3000);

    // Função para tocar o hino
    const playButton = document.getElementById('play-button');
    const hinoAudio = document.getElementById('hino');

    playButton.addEventListener('click', function() {
        if (hinoAudio.paused) {
            hinoAudio.play(); // Toca o hino
        } else {
            hinoAudio.pause(); // Pausa o hino
        }
    });
});