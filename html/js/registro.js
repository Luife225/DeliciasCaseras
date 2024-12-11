document.querySelector('.registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreCompleto = document.querySelector('.registroForm input[placeholder="Nombre Completo"]').value.trim();
    const correoElectronico = document.querySelector('.registroForm input[placeholder="Correo Electrónico"]').value.trim();
    const apodo = document.querySelector('.registroForm input[placeholder="Nombre de Usuario"]').value.trim();
    const contrasena = document.querySelector('.registroForm input[placeholder="Contraseña"]').value.trim();
    const confirmarContrasena = document.querySelector('.registroForm input[placeholder="Confirmar Contraseña"]').value.trim();

    if (!nombreCompleto || !correoElectronico || !apodo || !contrasena || !confirmarContrasena) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(nombreCompleto)) {
        alert('El nombre completo solo puede contener letras y espacios.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(correoElectronico)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return;
    }

    if (contrasena !== confirmarContrasena) {
        alert('Las contraseñas no coinciden. Por favor, inténtalo nuevamente.');
        return;
    }

    const userData = { nombreCompleto, correoElectronico, usuario: apodo, contrasena };
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'false');

    document.querySelector('.modal').style.display = 'flex';

    document.querySelector('.cerrarModal').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none';
        window.location.href = 'Sesion.html';
    });
});
