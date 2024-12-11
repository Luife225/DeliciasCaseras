document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Formulario enviado"); // Verificar si el evento se ejecuta

    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const correoElectronico = document.getElementById('correoElectronico').value;
    const apodo = document.getElementById('nombreUsuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;

    if (contrasena !== confirmarContrasena) {
        alert('Las contraseñas no coinciden. Por favor, inténtalo nuevamente.');
        return;
    }

    const userData = {
        nombreCompleto,
        correoElectronico,
        usuario: apodo,
        contrasena
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'false');

    const modal = document.getElementById('modalRegistro');
    modal.style.display = 'flex';

    const cerrarModal = document.getElementById('cerrarModal');
    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
        window.location.href = 'Sesion.html';
    });
});
