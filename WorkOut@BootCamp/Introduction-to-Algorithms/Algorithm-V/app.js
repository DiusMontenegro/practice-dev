"use strict";

// Algorithm V - Assignment

// 1. Given an array and a value Y, count and print the number of array values greater than Y.
const greaterThanY = function (x) {
  let numbersGreaterThanY = 0;
  for (let i = 0; i < x.length; i++) {
    if (y < x[i]) {
      numbersGreaterThanY = x[i];
      console.log(numbersGreaterThanY);
    }
  }
  return numbersGreaterThanY;
};

let y = 5;
const numArr = [6, 2, 3, 8, y, 7, 9];
greaterThanY(numArr);
