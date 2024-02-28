document.addEventListener('DOMContentLoaded', function () {
    const obj = {
        canvas: document.getElementById('canvas'),
        green: document.getElementById('green'),
        blue: document.getElementById('blue'),
        purple: document.getElementById('purple'),
        reset: document.getElementById('reset'),
        selected: 'selected',
        circles: [],
        size: 10,
        color: '#b6d6a7',
        randomSize: function () {
            this.size = Math.floor(Math.random() * 191) + 10;
        },
        selectColor: function (colorElement, color) {
            const elements = [obj.green, obj.blue, obj.purple];
            for (let i = 0; i < elements.length; i++) {
                if (
                    elements[i] &&
                    typeof elements[i] === 'object' &&
                    elements[i].classList.contains(obj.selected)
                ) {
                    elements[i].classList.remove(obj.selected);
                }
            }

            colorElement.classList.add(obj.selected);

            obj.color = color;
        },
        shrinkCircle: function (circle) {
            circle.size -= 1;

            if (circle.size > 0) {
                circle.paragraphElement.style.width = `${circle.size}px`;
                circle.paragraphElement.style.height = `${circle.size}px`;
            } else {
                clearInterval(circle.interval);
                obj.canvas.removeChild(circle.paragraphElement);
            }
        },
    };

    obj.canvas.addEventListener('click', function (event) {
        obj.randomSize();

        var paragraphElement = document.createElement('p');

        paragraphElement.style.position = 'absolute';
        paragraphElement.style.top = `${event.clientY - obj.size / 4}px`;
        paragraphElement.style.left = `${event.clientX - obj.size / 2}px`;
        paragraphElement.style.width = `${obj.size}px`;
        paragraphElement.style.height = `${obj.size}px`;
        paragraphElement.style.borderRadius = '50%';
        paragraphElement.style.border = '1px solid black';
        paragraphElement.style.backgroundColor = obj.color;

        obj.canvas.appendChild(paragraphElement);

        const circle = {
            paragraphElement: paragraphElement,
            size: obj.size,
            interval: setInterval(function () {
                obj.shrinkCircle(circle);
            }, 150),
        };
        obj.circles.push(circle);
    });

    obj.green.addEventListener('click', function () {
        obj.selectColor(this, '#b6d6a7');
    });

    obj.blue.addEventListener('click', function () {
        obj.selectColor(this, '#9fc4f6');
    });

    obj.purple.addEventListener('click', function () {
        obj.selectColor(this, '#b3a7d5');
    });

    obj.reset.addEventListener('click', function () {
        for (let i = 0; i < obj.circles.length; i++) {
            clearInterval(obj.circles[i].interval);
        }
        obj.circles = [];
        obj.canvas.innerHTML = '';
    });
});
