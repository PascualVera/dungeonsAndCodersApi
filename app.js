// Puertos express
let puertoApiRest = process.env.PORT || 4000;
let puertoSocket = process.env.PORT || 3000;
// Importaciones
const express = require('express');
const cors = require('cors');

// Express
const app = express();

// Socket
const serverHttp = require('http').Server(app);
const io = require('socket.io')(serverHttp, {
    cors: {
        origin: true,
        credentials: true,
        methods: ["GET", "POST"]
    }
});

// Eventos io
io.on('connection', (socket) => {
    socket.on('send-message', (data) => {
        socket.broadcast.emit('new-message', data);
    })
})

// Middlewares para cors y y mapeo de json
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Poner express API REST a la escucha
app.listen(puertoApiRest, () => {
    console.log(`Servidor express API REST corriendo en el puerto ${puertoApiRest}`);
});

// Poner express SOCKET a la escucha
serverHttp.listen(puertoSocket, () => {
    console.log(`Servidor express SOCKET corriendo en el puerto ${puertoSocket}`);
});


// Exportar app express
module.exports = app;
