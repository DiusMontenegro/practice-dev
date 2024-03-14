const express = require('express');
const app = express();
const path = require('path');
const server = app.listen(8888);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, './public')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

let donation = 100;
app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', function (socket) {
    socket.emit('info', { donation: donation });

    socket.on('add', function (data) {
        donation += data.fund;
        io.emit('info', { donation: donation });
    });

    socket.on('redeem', function (data) {
        donation -= data.fund;
        if (donation <= 0) {
            donation = 0;
        }
        io.emit('info', { donation: donation });
    });
});
