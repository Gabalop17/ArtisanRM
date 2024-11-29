// Función para abrir el modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
};
