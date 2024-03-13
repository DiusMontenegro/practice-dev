$(document).ready(function () {
    const socket = io();

    socket.on('info', function (data) {
        $('#fund').html(`${data.donation}`);
    });

    $('#donate').click(() => {
        socket.emit('add', { fund: 10 });
    })

    $('#redeem').click(() => {
        socket.emit('redeem', { fund: 10 });
    })
});
