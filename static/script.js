// Função para abrir/fechar o menu
        function toggleMenu() {
            const menu = document.getElementById('sideMenu');
            const toggle = document.getElementById('menuToggle');
            menu.classList.toggle('active');
            toggle.classList.toggle('open');
        }

        // Adiciona eventos para abrir/fechar o menu
        const menuToggle = document.getElementById('menuToggle');
        const sideMenu = document.getElementById('sideMenu');

        menuToggle.addEventListener('mouseover', () => {
            sideMenu.classList.add('active');
        });

        sideMenu.addEventListener('mouseover', () => {
            sideMenu.classList.add('active');
        });

        menuToggle.addEventListener('mouseout', () => {
            sideMenu.classList.remove('active');
        });

        sideMenu.addEventListener('mouseout', () => {
            sideMenu.classList.remove('active');
        });


// Função para exibir a feature com os times ao passar o mouse sobre "Futebol"
const futebolMenu = document.getElementById('futebolMenu');
const featureContainer = document.getElementById('featureContainer');

// Exibe a feature ao passar o mouse sobre o item de menu "Futebol"
futebolMenu.addEventListener('mouseover', () => {
    featureContainer.classList.add('active');
});

// Esconde a feature quando o mouse sai do menu lateral ou da feature
futebolMenu.addEventListener('mouseout', (e) => {
    if (!featureContainer.contains(e.relatedTarget)) {
        featureContainer.classList.remove('active');
    }
});

featureContainer.addEventListener('mouseout', (e) => {
    if (!futebolMenu.contains(e.relatedTarget)) {
        featureContainer.classList.remove('active');
    }
});



// script.js

// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Carrossel
    let currentIndex = 0; // Índice da slide atual
    const slides = document.querySelectorAll('.slide'); // Seleciona todas as slides

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); // Remove a classe ativa
            slide.style.display = 'none'; // Esconde a slide
        });

        slides[index].style.display = 'block'; // Mostra a slide atual
        slides[index].classList.add('active'); // Adiciona a classe ativa
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Avança para a próxima slide
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Volta para a slide anterior
        showSlide(currentIndex);
    }

    // Inicializa o carrossel exibindo a primeira slide
    showSlide(currentIndex);

    // Adiciona eventos para as setas
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Transição automática a cada 10 segundos (opcional)
    setInterval(nextSlide, 10000);
});

