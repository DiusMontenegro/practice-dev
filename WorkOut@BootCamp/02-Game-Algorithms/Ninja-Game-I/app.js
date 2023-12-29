"use strict";

let topValue = 100,
  leftValue = 450,
  walkValue = 1,
  direction = "down";

function update() {
  document.getElementById("character").style.top = topValue + "px";
  document.getElementById("character").style.left = leftValue + "px";
  document.getElementById(
    "character"
  ).style.backgroundImage = `url("./img/${direction}${walkValue}.png")`;
}

document.onkeydown = function (e) {
  if (walkValue === 1) {
    walkValue = 2;
  } else if (walkValue === 2) {
    walkValue = 1;
  }

  if (e.key === "ArrowLeft") {
    leftValue -= 10;
    direction = "left";
  } else if (e.key === "ArrowRight") {
    leftValue += 10;
    direction = "right";
  } else if (e.key === "ArrowUp") {
    topValue -= 10;
    direction = "top";
  } else if (e.key === "ArrowDown") {
    topValue += 10;
    direction = "down";
  }
  update();
};
