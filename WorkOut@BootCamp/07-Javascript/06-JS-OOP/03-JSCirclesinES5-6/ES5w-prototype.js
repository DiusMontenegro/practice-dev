function CircleDrawer() {
    var self = this;

    this.canvas = document.getElementById('canvas');
    this.green = document.getElementById('green');
    this.blue = document.getElementById('blue');
    this.purple = document.getElementById('purple');
    this.reset = document.getElementById('reset');
    this.selected = 'selected';
    this.circles = [];
    this.size = 10;
    this.color = '#b6d6a7';

    this.randomSize = function () {
        self.size = Math.floor(Math.random() * 191) + 10;
    };

    this.selectColor = function (colorElement, color) {
        var elements = [self.green, self.blue, self.purple];
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] && typeof elements[i] === 'object' && elements[i].classList.contains(self.selected)) {
                elements[i].classList.remove(self.selected);
            }
        }

        colorElement.classList.add(self.selected);

        self.color = color;
    };

    this.shrinkCircle = function (circle) {
        circle.size -= 1;

        if (circle.size > 0) {
            circle.paragraphElement.style.width = circle.size + 'px';
            circle.paragraphElement.style.height = circle.size + 'px';
        } else {
            clearInterval(circle.interval);
            self.canvas.removeChild(circle.paragraphElement);
        }
    };

    this.handleCanvasClick = function (event) {
        self.randomSize();

        var paragraphElement = document.createElement('p');

        paragraphElement.style.position = 'absolute';
        paragraphElement.style.top = event.clientY - self.size / 4 + 'px';
        paragraphElement.style.left = event.clientX - self.size / 2 + 'px';
        paragraphElement.style.width = self.size + 'px';
        paragraphElement.style.height = self.size + 'px';
        paragraphElement.style.borderRadius = '50%';
        paragraphElement.style.border = '1px solid black';
        paragraphElement.style.backgroundColor = self.color;

        self.canvas.appendChild(paragraphElement);

        var circle = {
            paragraphElement: paragraphElement,
            size: self.size,
            interval: setInterval(function () {
                self.shrinkCircle(circle);
            }, 80),
        };
        self.circles[i] = circle;
    };

    this.handleGreenClick = function () {
        self.selectColor(self.green, '#b6d6a7');
    };

    this.handleBlueClick = function () {
        self.selectColor(self.blue, '#9fc4f6');
    };

    this.handlePurpleClick = function () {
        self.selectColor(self.purple, '#b3a7d5');
    };

    this.handleResetClick = function () {
        for (var i = 0; i < self.circles.length; i++) {
            clearInterval(self.circles[i].interval);
        }
        self.circles = [];
        self.canvas.innerHTML = '';
    };
}

document.addEventListener('DOMContentLoaded', function () {
    var circleDrawer = new CircleDrawer();

    circleDrawer.canvas.addEventListener('click', circleDrawer.handleCanvasClick);
    circleDrawer.green.addEventListener('click', circleDrawer.handleGreenClick);
    circleDrawer.blue.addEventListener('click', circleDrawer.handleBlueClick);
    circleDrawer.purple.addEventListener('click', circleDrawer.handlePurpleClick);
    circleDrawer.reset.addEventListener('click', circleDrawer.handleResetClick);
});
