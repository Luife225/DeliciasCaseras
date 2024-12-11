document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulario enviado');

        const modal = document.getElementById('modalLogin');
        modal.style.display = 'flex';

        const cerrarModal = document.getElementById('cerrarModalLogin');
        cerrarModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });
});
