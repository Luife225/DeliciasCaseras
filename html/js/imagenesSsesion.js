const images = [
    'css/img/registro/1.png',
    'css/img/registro/2.png',
    'css/img/registro/3.png',
    'css/img/registro/4.png',
    'css/img/registro/cinco(1).png'
];

let currentIndex = 0;
const body = document.body;

images.forEach((image) => {
    const img = new Image();
    img.src = image;
});