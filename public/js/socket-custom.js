const socket = io();
socket.on('connect', () => {
    console.log('Conectado al servidor');
});
socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
});
// Emit con retroalimentacion del server
socket.emit('enviarMensaje', {
    usuario: "Kevin Sanchez",
    mensaje: 'Hola mundo'
}, (resp) => {
    console.log('Se dispoaró el callback', resp);
});
socket.on('enviarMensaje', (data) => {
    console.log(data);
});