document.addEventListener("DOMContentLoaded", function() {
    // Crear y aplicar estilos CSS
    const style = document.createElement("style");
    style.textContent = `
        /* CSS aquí, tal como antes */
    `;
    document.head.appendChild(style);

    // Crear elementos del encabezado
    const header = document.createElement("header");
    header.innerHTML = `<h1>TRIDON</h1><p>Tu contribución hace la diferencia.</p>`;
    document.body.appendChild(header);

    // Crear sección de donación
    const donationSection = document.createElement("section");
    donationSection.className = "donation-section";
    donationSection.innerHTML = `
        <h2>Registro y Donación</h2>
        <form id="donation-form">
            <img src="como-conseguir-donaciones-780x389.jpg" alt="imagen de fondo">
            <label for="name">Nombre Completo:</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required>
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required>
            <label for="message">Mensaje Personal:</label>
            <textarea id="message" name="message" placeholder="Dejan un mensaje si lo deseas"></textarea>
            <label for="donation-amount">Cantidad a donar:</label>
            <input type="number" id="donation-amount" name="donation-amount" placeholder="Ingresa la cantidad" required>
            <label for="product">Material que donará:</label>
            <input type="text" id="product" name="product" placeholder="Producto que donarás" required>
            <label for="donation-message">Mensaje sobre la donación:</label>
            <textarea id="donation-message" name="donation-message" placeholder="Déjanos una razón por la razon de donar, si lo deseas"></textarea>
            <button type="submit">Donar</button>
        </form>
        <div id="form-message"></div>
    `;
    document.body.appendChild(donationSection);

    // La sección de información "Sobre TRIDON" y pie de página aquí...

    // Validación de formulario y manejo de envío
    const form = document.getElementById("donation-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Capturar los valores de los campos
        const donationAmount = document.getElementById("donation-amount").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const product = document.getElementById("product").value;
        const donationMessage = document.getElementById("donation-message").value;

        // Limpiar mensajes anteriores
        formMessage.innerHTML = "";

        // Validación básica de campos
        if (!donationAmount || donationAmount <= 0) {
            formMessage.innerHTML = '<p style="color: red;">Por favor, introduce una cantidad de donación válida.</p>';
            return;
        }

        if (!name) {
            formMessage.innerHTML = '<p style="color: red;">Por favor, introduce tu nombre.</p>';
            return;
        }

        if (!email || !validateEmail(email)) {
            formMessage.innerHTML = '<p style="color: red;">Por favor, introduce un correo electrónico válido.</p>';
            return;
        }

        // Procesar los datos (aquí simulamos el envío)
        processDonation({ name, email, message, donationAmount, product, donationMessage });

        // Mostrar mensaje de éxito
        formMessage.innerHTML = `<p style="color: green;">Gracias por tu donación, ${name}.</p>`;
        
        // Resetear formulario
        form.reset();
    });

    // Función para validar el formato del email
    function validateEmail(email) {
        const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Función para procesar la donación (aquí es solo una simulación)
    function processDonation(data) {
        console.log("Datos de donación recibidos:", data);
        
        // Podrías enviar los datos a un servidor usando fetch o XMLHttpRequest
        // Ejemplo de fetch simulado (sin envío real):
        /*
        fetch('https://example.com/donate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log('Éxito:', data))
        .catch((error) => console.error('Error:', error));
        */
    }
});
