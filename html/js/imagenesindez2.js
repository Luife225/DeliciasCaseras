const images = [
    'css/img/carrusel/uno.png',
    'css/img/carrusel/dos.png',
    'css/img/carrusel/tres.png',
    'css/img/carrusel/cuatro.png',
    'css/img/carrusel/cinco.png'
];

let currentIndex = 0;
const body = document.body;

images.forEach((image) => {
    const img = new Image();
    img.src = image;
});




const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const totalSlides = slide.length;

const firstSlideClone = slide[0].cloneNode(true);
slides.appendChild(firstSlideClone);

let index = 0;
const slideWidth = slide[0].clientWidth;

function autoSlide() {
    index++;
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(-${index * slideWidth}px)`;

    if (index === totalSlides) {
        setTimeout(() => {
            slides.style.transition = "none"; 
            index = 0; 
            slides.style.transform = `translateX(0)`; 
        }, 500); 
    }
}

setInterval(autoSlide, 3000); 


