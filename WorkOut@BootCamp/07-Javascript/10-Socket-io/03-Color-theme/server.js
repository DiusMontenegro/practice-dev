const express = require('express');
const path = require('path');
const app = express();
const server = app.listen(8080);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, './public')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

let backgroundColor = '';

function randomColor() {
    const rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
    let color = '#'

    for(let i = 0; i < 6; i++)
    {
        let x = Math.floor((Math.random()*16));
        color += rgb[x];
    }

    return color;
}

app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', function (socket) {
    socket.emit('set_background_color', { background: backgroundColor });

    socket.on('light-mode', (data) => {
        backgroundColor = data.light;
        io.emit('set_light_mode', { background: backgroundColor });
    })

    socket.on('random-mode', () => {
        backgroundColor = randomColor();
        io.emit('set_random_mode', { background: backgroundColor });
    })

    socket.on('dark-mode', (data) => {
        backgroundColor = data.dark;
        io.emit('set_dark_mode', { background: backgroundColor});
    })
});
