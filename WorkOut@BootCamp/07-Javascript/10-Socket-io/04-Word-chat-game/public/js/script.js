$(document).ready(function () {
    const socket = io();

    $('#cancel').click(() => {
        alert(`Name mo nga bobo.`);
    });

    $('#submit').click(function(e){

        var formData = {};
        $(this).parent('form').find('input').each(function(){
            formData[$(this).attr('name')] = $(this).val();
        });

        socket.emit('login', formData);
    });

    socket.on('hello', function (data) {
        console.log(data);
    });
});
