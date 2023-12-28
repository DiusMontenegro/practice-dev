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
