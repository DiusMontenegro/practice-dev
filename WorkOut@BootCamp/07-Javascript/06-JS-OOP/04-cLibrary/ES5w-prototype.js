"use strict";

function Circles(circleCount) {
    var self = this;
    self.count = circleCount;
    self.size = 10;
    self.circlesArr = [];
    self.color = '#b6d6a7';
}

Circles.prototype.randomSize = function () {
    this.size = Math.floor(Math.random() * 141) + 10;
    return this;
};

Circles.prototype.selectColor = function () {
    var colors = ['#b6d6a7', "#9fc4f6", "#b3a7d5", "#c1121f", "#f28482", "#bc6c25"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    return this;
};

Circles.prototype.expandCircle = function (circle, index) {
    circle.size += 1;

    if (circle.size < 180) {
        circle.paragraphElement.style.width = `${circle.size}px`;
        circle.paragraphElement.style.height = `${circle.size}px`;
    } else {
        document.querySelector(`#canvas`).removeChild(circle.paragraphElement);
        clearInterval(circle.interval);

        var newParagraphElement = document.createElement('p');
        newParagraphElement.classList.add('circle');
        this.randomSize();
        this.selectColor();

        newParagraphElement.style.position = 'absolute';
        newParagraphElement.style.top = `${Math.floor(Math.random() * 451)}px`;
        newParagraphElement.style.left = `${Math.floor(Math.random() * 1101)}px`;
        newParagraphElement.style.width = `${this.size}px`;
        newParagraphElement.style.height = `${this.size}px`;
        newParagraphElement.style.backgroundColor = this.color;

        document.querySelector(`#canvas`).appendChild(newParagraphElement);

        var newCircle = {
            paragraphElement: newParagraphElement,
            size: this.size,
            interval: setInterval(() => {
                this.expandCircle(newCircle, index);
            }, 40),
        };
        this.circlesArr[index] = newCircle;
        this.circlesArr[0] = '';
    }
};

Circles.prototype.draw_circles = function (canvas) {
    var selectedCanvas = document.querySelector(`#${canvas}`);

    for (var i = 0; i < this.count; i++) {
        var paragraphElement = document.createElement('p');
        paragraphElement.classList.add('circle');
        this.randomSize();
        this.selectColor();

        paragraphElement.style.position = 'absolute';
        paragraphElement.style.top = `${Math.floor(Math.random() * 451)}px`;
        paragraphElement.style.left = `${Math.floor(Math.random() * 1101)}px`;
        paragraphElement.style.width = `${this.size}px`;
        paragraphElement.style.height = `${this.size}px`;
        paragraphElement.style.backgroundColor = this.color;

        selectedCanvas.appendChild(paragraphElement);

        const circle = {
            paragraphElement: paragraphElement,
            size: this.size,
            interval: setInterval(() => {
                this.expandCircle(circle, i);
            }, 40),
        };
        this.circlesArr[i] = circle;
    }
};

var cLib = new Circles(100);
cLib.draw_circles('canvas');
