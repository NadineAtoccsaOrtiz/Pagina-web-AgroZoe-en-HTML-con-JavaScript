document.addEventListener("DOMContentLoaded", function() {

    const botonesVerMas = document.querySelectorAll('.btn-success');

    botonesVerMas.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); 

            const title = boton.getAttribute('data-title');
            const description = boton.getAttribute('data-description');
            const image = boton.getAttribute('data-image');
            const price = boton.getAttribute('data-price'); 


            sessionStorage.setItem('productTitle', title);
            sessionStorage.setItem('productDescription', description);
            sessionStorage.setItem('productImage', image);
            sessionStorage.setItem('productPrice', price);  

            window.location.href = 'producto.html';
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {

    const title = sessionStorage.getItem('productTitle');
    const description = sessionStorage.getItem('productDescription');
    const image = sessionStorage.getItem('productImage');
    const price = sessionStorage.getItem('productPrice');  

    if (title && description && image && price) {
   
        document.getElementById('detalle').innerHTML = `
            <img src="${image}" alt="${title}" style="max-width: 100%;"/>
            <h1>${title}</h1>
            <p>${description}</p>
            <p><strong>Precio: </strong>${price}</p>  <!-- Mostrar el precio -->
        `;
    }

    document.getElementById('volver').addEventListener('click', function() {
        window.location.href = 'catalogo.html'; 
    });
});
