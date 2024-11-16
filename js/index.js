// Seleccionamos los botones del menú y el contenedor de contenido
const buttons = document.querySelectorAll('.button');
const contentArea = document.getElementById('content');

// Escucha los clics en los botones
buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault(); // Evita que el navegador recargue la página
        const file = button.getAttribute('data-file'); // Obtén el archivo a cargar

        // Usa fetch para cargar el archivo
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar el contenido');
                }
                return response.text();
            })
            .then(html => {
                contentArea.innerHTML = html; // Inserta el contenido en el contenedor
            })
            .catch(error => {
                contentArea.innerHTML = `<p>Error al cargar el contenido: ${error.message}</p>`;
            });
    });
});
