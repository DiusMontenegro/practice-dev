function Desk(name) {
    var obj = {};
    obj.name = name;
    obj.x = 0;
    obj.y = 0;
    obj.color = 'black';
    obj.mov = function (x, y) {
        this.x = x;
        this.y = y;
    };
    obj.updateColor = function (new_color) {
        this.color = new_color;
    };
    return obj;
}

var desk1 = Desk('oak desk');
var desk2 = Desk('maple desk');
desk1.updateColor('brown');
console.log(desk1.color);
