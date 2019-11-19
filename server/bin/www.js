const app = require('../app');

var server = app.listen(80,()=>{
    console.log('Server is up !');
});

var io = require('socket.io').listen(server);

app.set('io',io);

/* Criar a conexão por websocket */
io.on('connection', function(socket){
    console.log('um usuário se conectou !!');

    socket.on('disconnect',function(){
        console.log(' o usuario se desconectou');
    });
});