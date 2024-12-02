let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    // Ocultar todas las diapositivas
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });
    
    // Mostrar la diapositiva actual
    slides[index].classList.add('active');
    slides[index].style.display = 'flex';
}

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

// Inicializar la primera diapositiva
showSlide(currentSlide);

// Función para leer el contenido del artículo
function readText(button) {
    // Selecciona el artículo donde se hizo clic
    const article = button.closest('.news-item');
    const title = article.querySelector('h2').textContent;
    const content = article.querySelector('p').textContent;

    // Prepara el texto a leer
    const textToRead = `${title}. ${content}`;

    // Usa la API de síntesis de voz
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'es-ES'; // Idioma español
    utterance.rate = 1; // Velocidad de lectura (1 es normal)
    utterance.pitch = 1; // Tono de la voz (1 es normal)

    // Inicia la lectura
    window.speechSynthesis.speak(utterance);
}
