// Obtener elementos del DOM
const modal = document.getElementById("cartModal");
const btn = document.getElementById("openCart");
const span = document.getElementsByClassName("close")[0];

// Abrir el modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// Cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
s