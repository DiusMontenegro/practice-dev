class Square {
    constructor(io, clientX, clientY, color) {
        this.clientX = clientX;
        this.clientY = clientY;
        this.color = color;
        this.createSquare(io);
    }

    createSquare(io) {
        io.emit('new-square', {
            clientX: this.clientX,
            clientY: this.clientY,
            size: 50,
            color: this.color,
        });
    }
}

module.exports = Square;
