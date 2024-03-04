class Shapes {

    constructor() {
        this.canvas = document.getElementById('canvas');
        this.green = document.getElementById('green');
        this.blue = document.getElementById('blue');
        this.purple = document.getElementById('purple');
        this.circle = document.getElementById('circle');
        this.square = document.getElementById('square');
        this.star = document.getElementById('star');
        this.reset = document.getElementById('reset');
        this.selected = 'selected';
        this.shapes = [];
        this.borderRadius = '50%';
        this.size = 10;
        this.color = '#b6d6a7';
        this.shape = 'circle';

        const self = this; // To capture the 'this' reference for use inside the event listener

        this.canvas.addEventListener('click', function (event) {
            self.randomSize();

            const paragraphElement = document.createElement('p');

            paragraphElement.style.position = 'absolute';
            paragraphElement.style.top = `${event.clientY - self.size / 4}px`;
            paragraphElement.style.left = `${event.clientX - self.size / 2}px`;
            paragraphElement.style.width = `${self.size}px`;
            paragraphElement.style.height = `${self.size}px`;
            paragraphElement.style.borderRadius = self.borderRadius;
            paragraphElement.style.border = '1px solid black';
            paragraphElement.style.backgroundColor = self.color;
            paragraphElement.classList.add(self.shape);

            self.canvas.appendChild(paragraphElement);

            const shape = {
                paragraphElement: paragraphElement,
                size: self.size,
                interval: setInterval(function () {
                    self.shrinkShape(shape);
                }, 100),
            };
            self.shapes[i] = shape;
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

        this.circle.addEventListener('click', function () {
            self.selectShape(self.circle, 'circle')
        })

        this.square.addEventListener('click', function () {
            self.selectShape(self.square, 'square')
            self.borderRadius = 'none';
        })

        this.star.addEventListener('click', function () {
            self.selectShape(self.star, 'star')
        })

        this.reset.addEventListener('click', function () {
            for (let i = 0; i < self.shapes.length; i++) {
                const circle = self.shapes[i];
                clearInterval(circle.interval);
            }
            self.shapes = [];
            self.canvas.innerHTML = '';
        });
    }

    selectColor(colorElement, colorCode) {
        const elements = [this.green, this.blue, this.purple];
        const shapeElements = [this.circle, this.square, this.star];

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element && typeof element === 'object' && element.classList.contains(this.selected)) {
                element.classList.remove(this.selected);
            }
        }

        colorElement.classList.add(this.selected);
        this.color = colorCode;
        for (let i = 0; i < shapeElements.length; i++) {
            if (shapeElements[i].classList.contains(this.selected)) {
                shapeElements[i].style.backgroundColor = this.color;
            }
        }
    };

    selectShape(shapeElement, shape) {
        const shapes = [this.circle, this.square, this.star];
        for (let i = 0; i < shapes.length; i++) {
            const shape = shapes[i];
            shape.style.backgroundColor = 'white';
            if (shape && typeof shape === 'object' && shape.classList.contains(this.selected)) {
                shape.classList.remove(this.selected);
            }
        }

        shapeElement.classList.add(this.selected);
        shapeElement.style.backgroundColor = this.color
        this.shape = shape;
    };

    shrinkShape(shape) {
        shape.size -= 1;

        if (shape.size > 0) {
            shape.paragraphElement.style.width = `${shape.size}px`;
            shape.paragraphElement.style.height = `${shape.size}px`;
        } else {
            clearInterval(shape.interval);
            this.canvas.removeChild(shape.paragraphElement);
        }
    };

    randomSize () {
        this.size = Math.floor(Math.random() * 191) + 10;
    };
}

class Circle extends Shapes {
    constructor () {
        super();
    }
}

class Square extends Shapes {
    constructor () {
        super();
    }
}

class Star extends Shapes {
    constructor () {
        super();
    }
}

new Shapes();
