const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {
    console.log('user connected');

    socket.on('join', ({name, room}) => {
        console.log(name, room);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
});

app.use(router);

server.listen(PORT, () => {console.log(`server has started at ${PORT}`)});
