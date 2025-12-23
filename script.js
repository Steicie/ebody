let currentIndex = 0;

function moveSlide(direction) {
    const track = document.getElementById('track');
    const items = document.querySelectorAll('.carousel__item');
    const container = document.querySelector('.carousel__track-container');

    // Remove classe ativa anterior
    items[currentIndex].classList.remove('active');

    // Calcula novo índice
    currentIndex = (currentIndex + direction + items.length) % items.length;

    // Adiciona nova classe ativa
    items[currentIndex].classList.add('active');

    // CÁLCULO DE POSIÇÃO
    const containerWidth = container.offsetWidth;
    const itemWidth = 200; // O mesmo width do CSS
    const gap = 30; // O mesmo gap do CSS
    
    // Calcula o deslocamento para centralizar o item
    // (Centro do container) - (Metade do item) - (Posição acumulada dos itens anteriores)
    const offset = (containerWidth / 2) - (itemWidth / 2) - (currentIndex * (itemWidth + gap));

    track.style.transform = `translateY(-50%) translateX(${offset}px)`;
}

// Inicializa no centro ao carregar
window.onload = () => {
    moveSlide(0);
};