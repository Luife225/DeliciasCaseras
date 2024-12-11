const recetas = {
    vegetarianas: ['Ensalada de lentejas', 'Revuelto de ajos tiernos con champiñones'],
    postres: ['Cheesecake de fresa', 'Pan de cerveza'],
    fuertes: ['Lomo Saltado', 'Espuma de Guisante con Langosta', 'Lubina en hojaldre', 'Barbacoa de pato', 'Esquite y mone de pescado', 'Bollitos de lenguado'],
    snacks: ['Brochetas con calabacín y langostinos'],
    gourmet: ['Lubina en hojaldre', 'Bollitos de lenguado', 'Esquite y mone de pescado'],
    populares: ['Lomo saltado', 'Cheesecake de fresa', 'Hamburguesa con queso azul', 'Tarta de Calabaza'],
    peruanas: ['Lomo saltado'],
    ramsay: ['Hamburguesa con queso azul', 'Pan de cerveza'],
    achatz: ['Espuma de Guisante con Langosta'],
    adria: ['Tortilla de patatas de bolsa', 'Guisantes con jamón'],
    bocuse: ['Ensalada de langosta a la francesa', 'Lubina en hojaldre'],
    olvera: ['Barbacoa de pato', 'Esquite y mone de pescado']
};

let filtrosActivos = [];

function filtrarRecetas() {
    const cartas = document.querySelectorAll('.carta');
    let recetasFiltradas = [];

    if (filtrosActivos.length === 0) {
        cartas.forEach(carta => carta.style.display = 'block');
        return;
    }

    filtrosActivos.forEach(filtro => {
        recetasFiltradas = [...recetasFiltradas, ...recetas[filtro]];
    });

    recetasFiltradas = [...new Set(recetasFiltradas)];

    cartas.forEach(carta => {
        const recetaTitulo = carta.querySelector('h3').textContent;

        if (recetasFiltradas.includes(recetaTitulo)) {
            carta.style.display = 'block';
        } else {
            carta.style.display = 'none';
        }
    });
}

document.querySelectorAll('.filtro-categoria').forEach(boton => {
    boton.addEventListener('click', () => {
        const filtro = boton.getAttribute('data-filter');

        if (filtrosActivos.includes(filtro)) {
            filtrosActivos = filtrosActivos.filter(f => f !== filtro);
            boton.classList.remove('active');
        } else {
            if (filtrosActivos.length < 3) {
                filtrosActivos.push(filtro);
                boton.classList.add('active');
            }
        }

        filtrarRecetas();
    });
});

document.addEventListener('DOMContentLoaded', filtrarRecetas);
