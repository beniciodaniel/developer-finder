const socketio = require('socket.io');

exports.setupWebsocket = (server) => {
    const io = socketio(server);
    console.log('oiiii');

    io.on('connection', socket => {
        console.log(socket.id);
        console.log(socket.handshake.query);

        setTimeout(() => {
            socket.emit('message', 'Hello, friend!');
        }, 3000);
    });
};