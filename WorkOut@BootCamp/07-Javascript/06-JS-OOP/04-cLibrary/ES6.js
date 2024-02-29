"use strict";

class Circles {
    constructor (circleCount) {
        const self = this;
        self.count = circleCount;
        self.size = 10;
        self.circlesArr = [];
        self.color = '#b6d6a7';

        self.randomSize = function () {
            self.size = Math.floor(Math.random() * 141) + 10;
            return self;
        };

        self.selectColor = function () {
            const colors = ['#b6d6a7', "#9fc4f6", "#b3a7d5", "#c1121f", "#f28482", "#bc6c25", "#d62828"];
            self.color = colors[Math.floor(Math.random() * colors.length)];
            return self;
        };

        this.expandCircle = function (circle, index) {
            circle.size += 1;

            if (circle.size < 180) {
                circle.paragraphElement.style.width = `${circle.size}px`;
                circle.paragraphElement.style.height = `${circle.size}px`;
            } else {
                document.querySelector(`#canvas`).removeChild(circle.paragraphElement);

                clearInterval(circle.interval);

                const newParagraphElement = document.createElement('p');
                newParagraphElement.classList.add('circle');
                self.randomSize();
                self.selectColor();

                newParagraphElement.style.position = 'absolute';
                newParagraphElement.style.top = `${Math.floor(Math.random() * 451)}px`;
                newParagraphElement.style.left = `${Math.floor(Math.random() * 1101)}px`;
                newParagraphElement.style.width = `${self.size}px`;
                newParagraphElement.style.height = `${self.size}px`;
                newParagraphElement.style.backgroundColor = self.color;

                document.querySelector(`#canvas`).appendChild(newParagraphElement);

                const newCircle = {
                    paragraphElement: newParagraphElement,
                    size: self.size,
                    interval: setInterval(function () {
                        self.expandCircle(newCircle, index);
                    }, 40),
                };
                self.circlesArr[index] = newCircle;
                self.circlesArr[0] = '';
            }
        };

        self.draw_circles = function (canvas) {
            const selectedCanvas = document.querySelector(`#${canvas}`);

            for (let i = 0; i < circleCount; i++) {
                const paragraphElement = document.createElement('p');
                paragraphElement.classList.add('circle');
                self.randomSize();
                self.selectColor();

                paragraphElement.style.position = 'absolute';
                paragraphElement.style.top = `${Math.floor(Math.random() * 451)}px`;
                paragraphElement.style.left = `${Math.floor(Math.random() * 1101)}px`;
                paragraphElement.style.width = `${self.size}px`;
                paragraphElement.style.height = `${self.size}px`;
                paragraphElement.style.backgroundColor = self.color;

                selectedCanvas.appendChild(paragraphElement);

                const circle = {
                    paragraphElement: paragraphElement,
                    size: self.size,
                    interval: setInterval(function () {
                        self.expandCircle(circle, i);
                    }, 40),
                };
                self.circlesArr[i] = circle;
            }
        };
    }
}

let cLib = new Circles(100);
cLib.draw_circles('canvas');
