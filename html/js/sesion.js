document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const loginUsuario = document.getElementById('loginUsuario').value;
    const loginContrasena = document.getElementById('loginContraseña').value;

    // Recuperar los datos de usuario almacenados en localStorage
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
        alert('No hay cuentas registradas. Por favor, crea una cuenta primero.');
        return;
    }

    const userData = JSON.parse(storedData);

    // Verificar si las credenciales ingresadas coinciden
    if (loginUsuario === userData.usuario && loginContrasena === userData.contrasena) {
        // Marcar al usuario como autenticado
        localStorage.setItem('isLoggedIn', 'true'); // Usuario autenticado

        // Guardar información adicional (como nombre y apodo)
        localStorage.setItem('nombreCompleto', userData.nombreCompleto);
        localStorage.setItem('apodo', userData.usuario);

        // Mostrar el modal de inicio de sesión exitoso
        const modal = document.getElementById('modalLogin');
        modal.style.display = 'flex';

        // Cerrar el modal y redirigir a la página principal
        const cerrarModal = document.getElementById('cerrarModalLogin');
        cerrarModal.addEventListener('click', () => {
            modal.style.display = 'none';
            // Redirigir a la página después del inicio de sesión
            window.location.href = 'indexDespues.html';
        });
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});
