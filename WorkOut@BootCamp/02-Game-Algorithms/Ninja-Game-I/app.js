"use strict";

let topValue = 100,
  leftValue = 450;

function update() {
  document.getElementById("character").style.top = topValue + "px";
  document.getElementById("character").style.left = leftValue + "px";
}

document.onkeydown = function (e) {
  if (e.key === "ArrowLeft") {
    leftValue -= 10;
  }
  if (e.key === "ArrowRight") {
    leftValue += 10;
  }
  if (e.key === "ArrowUp") {
    topValue -= 10;
  }
  if (e.key === "ArrowDown") {
    topValue += 10;
  }
  update();
};
