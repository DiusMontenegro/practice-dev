const express = require('express');
const app = express();
const path = require('path');
const server = app.listen(8000);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


let data = {};

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/process', (req, res) => {
    if (req.body.name == "") {
        req.body.name = 'Anonymous';
    }
    data = req.body;
    res.redirect('/');
});

io.on('connection', function (socket) {
    socket.emit('info', {
        info: data,
    });
});
