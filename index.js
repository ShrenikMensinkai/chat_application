let express = require('express');
let socket = require('socket.io');
let bodyParser = require('body-parser');
let logger = require('morgan');

let app = express();

// frm home

let server= app.listen(3000,function(){
    console.log("server running in port 3000");
})

app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let io = socket(server);
io.on('connection',function(socket){
    console.log("made connection-",socket.id);
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
        console.log(data);
    })
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    });

});