"use strict";

let topValue = 100,
  leftValue = 450;

function update() {
  document.getElementById("character").style.top = topValue + "px";
  document.getElementById("character").style.left = leftValue + "px";
}

document.onkeydown = function (e) {
  if (e.key === "ArrowLeft" && leftValue > 0) {
    leftValue -= 10;
  } else if (e.key === "ArrowRight" && leftValue <= 500) {
    leftValue += 10;
  } else if (e.key === "ArrowUp" && topValue > 0) {
    topValue -= 10;
  } else if (e.key === "ArrowDown" && topValue <= 500) {
    topValue += 10;
  }
  update();
};
