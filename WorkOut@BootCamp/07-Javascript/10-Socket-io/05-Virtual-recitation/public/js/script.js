$(document).ready(function () {
    const socket = io();

    function appendMessage(message) {
        const messageElement = document.createElement('p');
        messageElement.innerText = message;
        $('#status').prepend(messageElement);
    }

    socket.emit('login');

    socket.on('user-connected', (data) => {
        appendMessage(`✅ user: ${data} connected`);
    })

    $('button').click(() => {
        appendMessage(`You raised a hand 🖐🏻`);
        socket.emit('raise-hand');
    })

    socket.on('raise', (data) => {
        appendMessage(`user: ${data} raised a hand 🖐🏻`);
    })

    socket.on('user-disconnected', data => {
        appendMessage(`❌ user ${data} disconnected`);
    })
})
