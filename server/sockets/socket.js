const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Emit con retroalimentacion (callback para avisar al cliente que se ejecutó bien su emit)
    client.on('enviarMensaje', (data, callback) => {

        //Enviar a todos los clientes conectados
        client.broadcast.emit('enviarMensaje', data);

        console.log(data);

        // if (data.usuario) {
        //     return callback({
        //         resp: 'Todo OK'
        //     });
        // }

        // return callback({
        //     resp: 'Todo KO'
        // });


    });

});