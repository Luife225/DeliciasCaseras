document.querySelector('.loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const loginUsuario = document.querySelector('.loginForm input[placeholder="Usuario"]').value.trim();
    const loginContrasena = document.querySelector('.loginForm input[placeholder="Contraseña"]').value.trim();

    if (!loginUsuario || !loginContrasena) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    const storedData = localStorage.getItem('userData');
    if (!storedData) {
        alert('No hay cuentas registradas. Por favor, crea una cuenta primero.');
        return;
    }

    const userData = JSON.parse(storedData);

    if (loginUsuario === userData.usuario && loginContrasena === userData.contrasena) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('nombreCompleto', userData.nombreCompleto);
        localStorage.setItem('apodo', userData.usuario);

        document.querySelector('.modal-login').style.display = 'flex';

        document.querySelector('.cerrarModalLogin').addEventListener('click', () => {
            document.querySelector('.modal-login').style.display = 'none';
            window.location.href = 'indexDespues.html';
        });
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});
