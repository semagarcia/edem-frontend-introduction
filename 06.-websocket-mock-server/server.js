// Dependencias
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Configuración inicial
const app = express();
const server = http.createServer(app);
const io = new Server(server);
let usersConnected = 0;

// API: "Servidor" de ficheros estáticos (contenido HTML)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API: Endpoint para comprobar el estado del servidor (health endpoint)
app.get('/status', (req, res) => {
  res.send({
    status: 'OK-running',
    timestamp: new Date()
  });
});

// API: Endpoint de negocio: devuelve datos agregados o procesados para simular un dashboard
// En un escenario real, esta lógica recuperaría la información, por ejemplo, desde una base de datos
app.get('/api/dashboard', (req, res) => {
  res.send({
    data: getDashboardData()
  });
});

// Función
const getDashboardData = () => ({
  kpi1: {
    foo: 1,
    r: +Math.random().toFixed(2)  // Generamos aleatorio con precisión de 2 decimales
  },
  kpi2: {
    v1: 'lorem ipsum',
    v2: 'regression',
    v3: 'GPT3'
  },
  kpi3: {
    min: 3,
    max: 7
  },
  timestamp: Date.now()  // Mostramos el instante actual
});

// Configuración del servidor de WebSocket
// Esta función se ejecutará cada vez que un nuevo cliente establezca conexión con el servidor
io.on('connection', (socket) => {
  // Por cada nuevo usuario conectado, mostramos una traza y le enviamos un saludo
  console.log(' => New user connected: ' + socket.id);
  socket.send('Welcome!');

  // Al resto de usuarios conectados les informamos del nuevo usuario
  socket.broadcast.emit('users:new-conn');  // Mensaje para todos menos al nuevo usuario

  // A todos los usuarios le enviaremos el número actual de usuarios (hardcodeado - mockeado)
  usersConnected++;
  io.emit('users:total-users', usersConnected);  // A todos, incluido el nuevo usuario

  // A continuación configuramos manejadores de eventos, en función del mensaje/acción recibido
  socket.on('message:ACK', () => console.log('\t>> ACK received from client!'));
  socket.on('disconnect', () => {
    usersConnected--;  // Actualizamos los usuarios restantes
    console.log(` <= User ${socket.id} disconnected!`);  // Mostramos traza informativa en el servidor
    console.log(` ${usersConnected} ${usersConnected === 1 ? 'user' : 'users'} left`);
    io.emit('users:total-users', usersConnected);  // Enviamos dato actualizado
  });
});

// Una vez configurado el servidor de WebSocket, establecemos un timer (2s) de ejemplo para simular que
// existen nuevos datos en el servidor y serán enviados al front en tiempo real, sin necesidad de que
// este tenga que recargar la página
setInterval(() => {
  io.emit('data:update', getDashboardData());
}, 2000);

// Arrancamos el servidor
server.listen(3000, () => {
  console.log('listening on *:3000');
});