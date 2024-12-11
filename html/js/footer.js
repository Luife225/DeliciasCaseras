document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = JSON.parse(localStorage.getItem('userData'));

    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    const btnVerCuenta = document.getElementById('btnVerCuenta');

    if (isLoggedIn && userData) {
        mensajeBienvenida.textContent = `¡Bienvenido, ${userData.nombreCompleto}!`;
        btnVerCuenta.style.display = 'block';

        btnVerCuenta.addEventListener('click', () => {
            window.location.href = 'perfil.html';
        });
    } else {
        mensajeBienvenida.textContent = '¡Sé parte de nuestra familia!';
        btnVerCuenta.style.display = 'none';
    }
});
