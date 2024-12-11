document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        // Actualizar el nombre completo en el perfil (nombre de usuario)
        document.getElementById('nombreUsuario').textContent = userData.nombreCompleto; // nombre completo
        // Actualizar el nombre de usuario (apodo)
        document.getElementById('apodoUsuario').textContent = `@${userData.usuario}`; // apodo
    }
});
