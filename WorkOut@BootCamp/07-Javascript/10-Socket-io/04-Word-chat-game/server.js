const express = require('express');
const path = require('path');
const app = express();
const server = app.listen(8080);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: 'sikrit1234',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 },
    })
);

let activeUsers = [];

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/lobby', (req, res) => {
    res.render('lobby');
});

io.on('connection', function (socket) {
    socket.on('login', function (data) {
        activeUsers[activeUsers.length] = { name: data.name, id: socket.id }
    })
    io.emit('hello', { data: 'test'})
});

