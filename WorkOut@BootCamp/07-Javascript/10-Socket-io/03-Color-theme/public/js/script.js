$(document).ready(function () {
    const socket = io();
    const body = document.querySelector('body')

    $('#light-mode').click(() => {
        socket.emit('light-mode');
    })

    $('#random-mode').click(() => {
        socket.emit('random-mode');
    })

    $('#dark-mode').click(() => {
        socket.emit('dark-mode');
    })

    socket.on('set_background_color', (data) => {
        body.style.backgroundColor = data.background;
    })

    socket.on('set_light_mode', (data) => {
        body.style.backgroundColor = data.background;
    })

    socket.on('set_random_mode', (data) => {
        body.style.backgroundColor = data.background;
    })

    socket.on('set_dark_mode', (data) => {
        body.style.backgroundColor = data.background;
    })
});
