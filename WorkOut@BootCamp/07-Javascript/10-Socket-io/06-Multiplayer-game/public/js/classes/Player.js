class Player {
    constructor({ x, y, radius, color, username }) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.username = username
    }

    draw() {
        c.font = '10px sans-serif';
        c.fillStyle = 'white';
        c.fillText(this.username , this.x - 12, this.y - 14);
        c.save();
        c.shadowColor = this.color;
        c.shadowBlur = 10;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.restore();
    }
}
