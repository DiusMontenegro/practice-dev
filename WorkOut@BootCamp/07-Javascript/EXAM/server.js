const express = require('express');
const path = require('path');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
const Square = require('./public/js/squares');

const users = {};
let squares = [];

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', function (socket) {
    socket.on('login', (name) => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', socket.id, name);
        io.emit('all-users', users);

        squares.forEach(square => {
            socket.emit('new-square', square.getInfo());
        });
    });

    socket.on('disconnect', () => {
        console.log(`${users[socket.id]} disconnected`);
        delete users[socket.id];
        socket.broadcast.emit('user-disconnected', socket.id);
        io.emit('all-users', users);
    });

    socket.on('canvas-click', (data) => {
        squares.push(new Square(io, data.clientX, data.clientY, data.color));
    });

    socket.on('clear-squares', () => {
        squares = [];
        io.emit('clear-canvas');
    });
});
