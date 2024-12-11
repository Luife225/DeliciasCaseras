document.querySelector('.registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreCompleto = document.querySelector('.registroForm input[placeholder="Nombre Completo"]').value.trim();
    const correoElectronico = document.querySelector('.registroForm input[placeholder="Correo Electrónico"]').value.trim();
    const nombreUsuario = document.querySelector('.registroForm input[placeholder="Nombre de Usuario"]').value.trim();
    const contrasena = document.querySelector('.registroForm input[placeholder="Contraseña"]').value.trim();
    const confirmarContrasena = document.querySelector('.registroForm input[placeholder="Confirmar Contraseña"]').value.trim();

    if (contrasena !== confirmarContrasena) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    const userData = {
        nombreCompleto,
        correoElectronico,
        nombreUsuario,
        contrasena
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Mostrar el modal de registro exitoso
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';

    const cerrarModal = document.querySelector('.cerrarModal');
    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
        window.location.href = 'Sesion.html'; // Redirige a la página de inicio de sesión
    });
});
