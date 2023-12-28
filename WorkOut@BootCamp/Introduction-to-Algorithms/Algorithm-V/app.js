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

// 2. Given an array, print the max, min, and average values for that array.
const calcMax = function (x) {
  let max = x[0];
  for (let i = 0; i < x.length; i++) {
    if (max < x[i]) {
      max = x[i];
    }
  }
  return max;
};

const calcMin = function (x) {
  let min = x[0];
  for (let i = 0; i < x.length; i++) {
    if (min > x[i]) {
      min = x[i];
    }
  }
  return min;
};

const calcAverage = function (x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  const average = sum / x.length;
  return average;
};

const printMaxMinAverage = function (x) {
  const min = calcMin(x);
  const max = calcMax(x);
  const average = calcAverage(x);
  console.log(min);
  console.log(max);
  console.log(average);
};

//Example:
y = [-1, 5, 3];
printMaxMinAverage(y);
