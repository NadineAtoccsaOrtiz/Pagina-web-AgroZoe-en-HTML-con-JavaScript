document.addEventListener("DOMContentLoaded", function() {
    // Captura todos los botones "Ver Más"
    const botonesVerMas = document.querySelectorAll('.btn-success');

    botonesVerMas.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir acción predeterminada (navegación)

            // Capturar los detalles del producto a partir de los atributos data-*
            const title = boton.getAttribute('data-title');
            const description = boton.getAttribute('data-description');
            const image = boton.getAttribute('data-image');
            const price = boton.getAttribute('data-price');  // Obtener el precio

            // Almacenar los datos en sessionStorage
            sessionStorage.setItem('productTitle', title);
            sessionStorage.setItem('productDescription', description);
            sessionStorage.setItem('productImage', image);
            sessionStorage.setItem('productPrice', price);  // Almacenar el precio

            // Redirigir a productos.html para mostrar los detalles
            window.location.href = 'producto.html';
        });
    });
});

// script.js (Continuación para mostrar los detalles en productos.html)
document.addEventListener("DOMContentLoaded", function() {
    // Verifica si los datos del producto existen en sessionStorage
    const title = sessionStorage.getItem('productTitle');
    const description = sessionStorage.getItem('productDescription');
    const image = sessionStorage.getItem('productImage');
    const price = sessionStorage.getItem('productPrice');  // Obtener el precio

    if (title && description && image && price) {
        // Insertar los detalles del producto en el HTML utilizando innerHTML
        document.getElementById('detalle').innerHTML = `
            <img src="${image}" alt="${title}" style="max-width: 100%;"/>
            <h1>${title}</h1>
            <p>${description}</p>
            <p><strong>Precio: </strong>${price}</p>  <!-- Mostrar el precio -->
        `;
    }

    // Volver al catálogo
    document.getElementById('volver').addEventListener('click', function() {
        window.location.href = 'catalogo.html'; // O la URL del catálogo
    });
});
