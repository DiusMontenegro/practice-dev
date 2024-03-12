$(document).ready(function () {
    const socket = io(); //1
    const ticketNum = Math.ceil(Math.random() * 1000);

    let info = '';

    socket.on('info', function (data) {
        if (data.info.name !== undefined) {
            info = data.info;
        } else {
            info = false;
        }

        if (info) {
            $('#message').empty();
            $('#message').html(`
                <div id= "notification">
                    <p>You emitted the following values to the server { name: ${info.name}, course_title: ${info.course}, score: ${info.score}, reason: ${info.reason} }</p>
                    <h4>Random generated id number is ${ticketNum}.</h4>
                </div>
            `);
        }
    });
});
