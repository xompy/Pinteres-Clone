/* Evento del despliegue de la search-bar */

// Esperar a que el DOM termine de cargarse
document.addEventListener('DOMContentLoaded', function () {

    // Obtener la sección de búsqueda y la barra de búsqueda
    var searchSection = document.querySelector('.search-section');
    var searchInput = document.querySelector('.search-form input[type="search"]');
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];

    // Agregar un controlador de eventos al documento completo
    document.addEventListener('click', function (event) {

        // Verificar si el clic ocurrió dentro o fuera de la sección de búsqueda
        if (event.target !== searchSection && event.target !== searchInput) {

            // Si el clic ocurrió fuera de la sección de búsqueda, cerrarla y cambiar el color de fondo
            searchSection.classList.remove('open');
            searchSection.style.visibility = 'hidden';
            // modal desactivado
            modal.style.display = "none";
        }
    });

    // Agregar un controlador de eventos a la barra de búsqueda
    searchInput.addEventListener('click', function (event) {

        // Si la sección de búsqueda no está abierta, abrirla y cambiar el color de fondo
        if (!searchSection.classList.contains('open')) {
            searchSection.classList.add('open');
            searchSection.style.visibility = 'visible';
            // activado modal
            modal.style.display = "block";
        }

        // Detener la propagación del evento para evitar que se cierre la sección de búsqueda
        event.stopPropagation();
    });

    // Agregar un controlador de eventos a la sección de búsqueda
    searchSection.addEventListener('click', function (event) {

        // Detener la propagación del evento para evitar que se cierre la sección de búsqueda
        event.stopPropagation();

        // Si la sección de búsqueda no está abierta, cambiar el color de fondo
        if (!searchSection.classList.contains('open')) {
            //modal activado
            modal.style.display = "block";
        }
    });

    // Agregar un controlador de eventos al documento completo para cerrar el modal si se hace clic fuera de él
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});  