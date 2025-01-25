// Selecciona todos los botones y enlaces
const buttons = document.querySelectorAll('.button, .title-link');
const sections = document.querySelectorAll('.content-section');

// Añade evento de clic a cada botón o enlace
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtén el ID de la sección a mostrar
        const sectionId = button.getAttribute('data-section');

        // Oculta todas las secciones
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Muestra solo la sección seleccionada
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = 'block';
            selectedSection.style.padding = '2%';
        }
    });
});