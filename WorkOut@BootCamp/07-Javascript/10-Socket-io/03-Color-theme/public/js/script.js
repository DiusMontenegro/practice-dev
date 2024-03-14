$(document).ready(function () {
    const socket = io();

    $('#light-mode').click(() => {
        socket.emit('light-mode', { light: '#ffffff' });
    })

    $('#random-mode').click(() => {
        socket.emit('random-mode');
    })

    $('#dark-mode').click(() => {
        socket.emit('dark-mode', { dark: '#000000' });
    })

    socket.on('set_background_color', (data) => {
        document.querySelector('body').style.backgroundColor = data.background;
    })

    socket.on('set_light_mode', (data) => {
        document.querySelector('body').style.backgroundColor = data.background;
    })

    socket.on('set_random_mode', (data) => {
        console.log(data.background);
        document.querySelector('body').style.backgroundColor = data.background;
    })

    socket.on('set_dark_mode', (data) => {
        console.log(data.background);
        document.querySelector('body').style.backgroundColor = data.background;
    })
});
