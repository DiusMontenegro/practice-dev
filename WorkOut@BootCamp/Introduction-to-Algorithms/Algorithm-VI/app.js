"use strict";

// Algorithm VI - Assignment

// 1. Return the given array, after setting any negative values to zero. For example resetNegatives( [ 1, 2, -1, -3]) should return [ 1, 2, 0, 0].

function resetNegatives(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 0) {
      x[i] = 0;
    }
  }
  return x;
}

console.log(resetNegatives([1, 2, -1, -3]));

// 2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example  should return [2,3,0].

function moveForward(x) {
  if (x.length > 0) {
    for (let i = 0; i < x.length - 1; i++) {
      x[i] = x[i + 1];
    }
    x[x.length - 1] = 0;
  }
  return x;
}

console.log(moveForward([1, 5, 6]));

// or

function shiftPush(x) {
  x.shift();
  x.push(0);
  return x;
}

console.log(shiftPush([1, 5, 6]));
