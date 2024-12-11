document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const modal = document.getElementById('modalLogin');
        modal.style.display = 'flex';

        const cerrarModal = document.getElementById('cerrarModalLogin');
        cerrarModal.addEventListener('click', function() {
            modal.style.display = 'none';
            window.location.href = 'indexDespues.html';
        });
    });
});
