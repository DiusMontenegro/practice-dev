$(document).ready(function () {
    const socket = io();
    let name = prompt(`What is your name?`);
    let users = {};
    let backgroundColor = '#b45f05'

    if (!name) {
        alert(`Please enter your name.`);
    } else {
        users[socket.id] = name;
    }

    while (!name) {
        name = prompt(`What is your name?`);
    }

    function addUser(userId, userName) {
        const userElement = document.createElement('li');
        if (userId === socket.id) {
            userElement.innerText = `${userName} (You)`;
        } else {
            userElement.innerText = userName;
        }
        $('#connectedUsers').append(userElement);
    }

    function updateUserList() {
        $('#connectedUsers').empty();
        for (const userId in users) {
            addUser(userId, users[userId]);
        }
    }

    $('#brick').click(() => {
        backgroundColor = '#b45f05'
    })

    $('#grass').click(() => {
        backgroundColor = '#009d0e'
    })

    $('#gravel').click(() => {
        backgroundColor = '#989999'
    })

    socket.emit('login', name);

    socket.on('user-connected', (userId, userName) => {
        users[userId] = userName;
        updateUserList();
    });

    socket.on('user-disconnected', userId => {
        const disconnectedUserName = users[userId];
        delete users[userId];
        updateUserList();
        console.log(`${disconnectedUserName} disconnected`);
    });

    socket.on('all-users', allUsers => {
        users = allUsers;
        updateUserList();
    });

    $('#canvas').click((event) => {
        const clientX = event.clientX;
        const clientY = event.clientY;
        socket.emit('canvas-click', { clientX, clientY, color: backgroundColor});
    });

    $('#clear').click(() => {
        $('#canvas').empty();
        socket.emit('clear-squares');
    });

    socket.on('new-square', squareData => {
        const paragraphElement = document.createElement('p');

        paragraphElement.style.position = 'absolute';
        paragraphElement.style.top = `${squareData.clientY - squareData.size / 2}px`;
        paragraphElement.style.left = `${squareData.clientX - squareData.size / 2}px`;
        paragraphElement.style.width = `${squareData.size}px`;
        paragraphElement.style.height = `${squareData.size}px`;
        paragraphElement.style.border = '1px solid black';
        paragraphElement.style.backgroundColor = squareData.color;

        $('#canvas').append(paragraphElement);
    });

    socket.on('clear-canvas', () => {
        $('#canvas').empty();
    });

});
