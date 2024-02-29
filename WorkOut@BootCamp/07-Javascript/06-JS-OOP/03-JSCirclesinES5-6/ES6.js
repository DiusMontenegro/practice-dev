class CircleDrawer {
    constructor() {
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
            this.size = Math.floor(Math.random() * 191) + 10;
        };

        this.selectColor = function (colorElement, color) {
            const elements = [this.green, this.blue, this.purple];
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element && typeof element === 'object' && element.classList.contains(this.selected)) {
                    element.classList.remove(this.selected);
                }
            }

            colorElement.classList.add(this.selected);
            this.color = color;
        };

        this.shrinkCircle = function (circle) {
            circle.size -= 1;

            if (circle.size > 0) {
                circle.paragraphElement.style.width = `${circle.size}px`;
                circle.paragraphElement.style.height = `${circle.size}px`;
            } else {
                clearInterval(circle.interval);
                this.canvas.removeChild(circle.paragraphElement);
                console.log(this.circles.length);
            }
        };

        const self = this; // To capture the 'this' reference for use inside the event listener

        this.canvas.addEventListener('click', function (event) {
            self.randomSize();

            const paragraphElement = document.createElement('p');

            paragraphElement.style.position = 'absolute';
            paragraphElement.style.top = `${event.clientY - self.size / 4}px`;
            paragraphElement.style.left = `${event.clientX - self.size / 2}px`;
            paragraphElement.style.width = `${self.size}px`;
            paragraphElement.style.height = `${self.size}px`;
            paragraphElement.style.borderRadius = '50%';
            paragraphElement.style.border = '1px solid black';
            paragraphElement.style.backgroundColor = self.color;

            self.canvas.appendChild(paragraphElement);

            const circle = {
                paragraphElement: paragraphElement,
                size: self.size,
                interval: setInterval(function () {
                    self.shrinkCircle(circle);
                }, 80),
            };
            self.circles[i] = circle;
        });

        this.green.addEventListener('click', function () {
            self.selectColor(self.green, '#b6d6a7');
        });

        this.blue.addEventListener('click', function () {
            self.selectColor(self.blue, '#9fc4f6');
        });

        this.purple.addEventListener('click', function () {
            self.selectColor(self.purple, '#b3a7d5');
        });

        this.reset.addEventListener('click', function () {
            for (let i = 0; i < self.circles.length; i++) {
                const circle = self.circles[i];
                clearInterval(circle.interval);
            }
            self.circles = [];
            self.canvas.innerHTML = '';
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const circleDrawer = new CircleDrawer();
});
