$(document).ready(function () {
    const socket = io();
    let name = prompt(`What is your name?`);
    let word = '';

    if (!name) {
        alert(`Ang kulit! sabing name nga.`);
    }

    while (!name) {
        name = prompt(`What is your name?`);
    }

    function underscoreRandomPositions(word, numUnderscores) {
        const indices = [];
        for (let i = 0; i < word.length; i++) {
            indices[indices.length] = i;
        }

        shuffleArray(indices);

        const randomPositions = [];
        for (let i = 0; i < numUnderscores; i++) {
            randomPositions[randomPositions.length] = indices[i];
        }

        let underscoredWord = '';
        for (let i = 0; i < word.length; i++) {
            if (randomPositions.includes(i)) {
                underscoredWord += ' _';
            } else {
                underscoredWord += word[i];
            }
        }

        return underscoredWord;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function appendMessage(message) {
        const messageElement = document.createElement('p');
        messageElement.innerText = message;
        $('.chats').prepend(messageElement);
    }

    socket.emit('new-user', name);

    socket.on('user-connected', name => {
        appendMessage(`${name} connected`);
    })

    socket.on('user-disconnected', name => {
        appendMessage(`${name} disconnected`);
    })

    $('form').submit(function (e) {
        e.preventDefault();
        const message = $('#message-input').val();
        appendMessage(`You: ${message}`);
        socket.emit('send-chat-message', message);
        $('#message-input').val() = "";
    })

    socket.on('guess', function (data) {
        word = data;
        const underscoredWord = underscoreRandomPositions(word, 2);
        $('h4').html(`${underscoredWord}`);
    })

    socket.on('chat-message', data => {
        appendMessage(`${data.name}: ${data.message}`)
    })

    socket.on('correct-message', data => {
        appendMessage(`✅ ${data.name} got the correct answer. The correct word is "${data.message}"`);
    })
});
