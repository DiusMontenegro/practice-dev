function Desk(name) {
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.color = 'black';

    this.mov = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    this.updateColor = function (new_color) {
        this.color = new_color;
        return this;
    }
}
var desk1 = new Desk('oak desk');
var desk2 = new Desk('maple desk');
desk1.updateColor('brown');
console.log(desk1.color);
