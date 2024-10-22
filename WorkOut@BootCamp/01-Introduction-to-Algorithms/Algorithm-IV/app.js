"use strict";

// Part 2 : Fill in the missing code below to accomplish each task.  Do NOT  use any built-in functions except the ones that were already introduced to you (e.g. push, pop, etc).  Put all of these into a single file so that it's easier to review.

// 1. Analyze an array’s values and return the average of its values.

function printAverage(x) {
  sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum / x.length;
}
y = printAverage([1, 2, 3]);
console.log(y);

y = printAverage([2, 5, 8]);
console.log(y);

// 2. Create an array with all the odd integers between 1 and 255 (inclusive)

function returnOddArray() {
  let oddArrays = [];
  for (let i = 1; i <= 255; i++) {
    if (i % 2 !== 0) {
      oddArrays.push(i);
    }
  }
  return oddArrays;
}

y = returnOddArray();
console.log(y);

// 3. Square each value in a given array, returning that same array with changed values.

function squareValue(x) {
  for (let i = 0; i < x.length; i++) {
    x[i] = x[i] ** 2;
  }
  return x;
}

y = squareValue([1, 2, 3]);
console.log(y);

y = squareValue([2, 5, 8]);
console.log(y);
