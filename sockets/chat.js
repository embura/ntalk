module.exports = function(io) {
    var sockets = io.sockets;
    sockets.on('connection', function (client) {

        console.log("sockets[chat] client.handshake",client.handshake);

        client.on('send-server', function (data) {

            var msg = "<b>"+data.nome+":</b> "+data.msg+"<br>";
            client.emit('send-client', msg);
            client.broadcast.emit('send-client', msg);
        });
    });
}