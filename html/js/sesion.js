document.querySelector('.loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const loginUsuario = document.querySelector('.loginForm input[placeholder="Usuario"]').value.trim();
    const loginContrasena = document.querySelector('.loginForm input[placeholder="Contraseña"]').value.trim();

    const storedData = localStorage.getItem('userData');
    if (!storedData) {
        alert('No hay cuentas registradas. Por favor, crea una cuenta primero.');
        return;
    }

    const userData = JSON.parse(storedData);

    if (loginUsuario === userData.nombreUsuario && loginContrasena === userData.contrasena) {
        // Marcar al usuario como autenticado
        localStorage.setItem('isLoggedIn', 'true');

        // Mostrar el modal de inicio de sesión exitoso
        const modal = document.getElementById('modalLogin');
        modal.style.display = 'flex';

        const cerrarModal = document.getElementById('cerrarModalLogin');
        cerrarModal.addEventListener('click', () => {
            modal.style.display = 'none';
            window.location.href = 'indexDespues.html'; // Redirige a la página principal
        });
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});
