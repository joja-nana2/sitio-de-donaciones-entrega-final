const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta para recibir donaciones
app.post('/donate', (req, res) => {
    const { name, email, message, donationAmount, product, donationMessage } = req.body;

    if (!name || !email || donationAmount <= 0 || !product) {
        return res.status(400).json({ error: 'Todos los campos obligatorios deben completarse correctamente.' });
    }

    // Aquí podrías guardar la donación en una base de datos
    console.log('Nueva donación:', req.body);

    res.status(200).json({ message: `¡Gracias por tu donación, ${name}!` });
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor de TRIDON activo');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

function processDonation(data) {
    fetch('http://localhost:3000/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(errorData.error || 'Error en la donación.');
            });
        }
        return response.json();
    })
    .then(data => {
        formMessage.innerHTML = `<p style="color: green;">${data.message}</p>`;
    })
    .catch(error => {
        formMessage.innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
}
