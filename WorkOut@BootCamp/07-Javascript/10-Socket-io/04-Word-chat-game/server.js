const express = require('express');
const path = require('path');
const app = express();
const server = app.listen(8000);
const io = require('socket.io')(server);
const axios = require('axios');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')));

const users = {};
let randomWords = [];
let randomize = Math.floor(Math.random() * randomWords.length);
let correctWord = '';

function newWord() {
    randomize = Math.floor(Math.random() * randomWords.length);
    return randomWords[randomize];
}

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(
            'https://random-word-api.herokuapp.com/all'
        );
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].length === 5) {
                randomWords[randomWords.length] = response.data[i];
            }
        }

        correctWord = randomWords[randomize];

        res.render('index');
    } catch (error) {
        console.error(error);
        res.json(error);
    }
});

io.on('connection', function (socket) {
    socket.emit('guess', correctWord);

    socket.on('new-user', (name) => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
    });

    socket.on('send-chat-message', (message) => {
        if (message === correctWord) {
            correctWord = newWord();
            io.emit('guess', correctWord);
            io.emit('correct-message', {
                message: message,
                name: users[socket.id],
            });
        } else {
            socket.broadcast.emit('chat-message', {
                message: message,
                name: users[socket.id],
            });
        }
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id]);
        delete users[socket.id];
    });
});
