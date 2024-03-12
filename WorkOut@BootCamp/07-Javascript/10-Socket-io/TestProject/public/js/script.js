$(document).ready(function () {
    const socket = io(); //1

    socket.on('greeting', function (data) {
        //4
        console.log(data.msg); //5
        socket.emit('thankyou', {
            msg: 'Thank you for connecting me! -Client',
        }); //6
    });
});
