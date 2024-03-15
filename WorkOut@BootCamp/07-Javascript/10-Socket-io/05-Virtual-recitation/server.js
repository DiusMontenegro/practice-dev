const express = require('express');
const path = require('path');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')));

const users = {}
app.get('/' , (req, res) => {
    res.render('index');
})

io.on('connection', function (socket) {

    socket.on('login', () => {
        users[socket.id] = socket.id;
        socket.broadcast.emit('user-connected', users[socket.id]);
    })

    socket.on('raise-hand', () => {
        socket.broadcast.emit('raise', users[socket.id]);
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id]);
        delete users[socket.id];
    })
})
