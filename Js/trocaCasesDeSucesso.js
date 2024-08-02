let currentImageIndex = 0;
const images = [
    'imagens/Daniel.png',
    'imagens/Tyuco.png',
    'imagens/juliana.png'
    
];

function changeImage() {
    const imgElement = document.getElementById('card-image');
    if (imgElement) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imgElement.src = images[currentImageIndex];
    } else {
        console.error('Elemento de imagem com ID "card-image" não encontrado.');
    }
}

setInterval(changeImage, 8000);

// script troca das imagens cases de sucessos.