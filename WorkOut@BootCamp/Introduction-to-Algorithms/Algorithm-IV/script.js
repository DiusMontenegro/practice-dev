"use strict";

console.log("----- Part 1 Written Assignment -----");
// Guess the Output.

// 1. Output: 5
function a(x, y) {
  return 5;
}

console.log(a(5, 5));

// 2. Output: [ 2, 2, 5], [ 2, 2, 5], [ 6, 8, 5], [ 6, 8, 5]
function a2(x, y) {
  const z = [];
  z.push(x);
  z.push(y);
  z.push(5);
  console.log(z);
  return z;
}

let b = a2(2, 2);
console.log(b);
console.log(a2(6, 8));

// 3. Output: [ 2, 2, 5]
function a(x) {
  let z = [];
  z.push(x);
  z.pop();
  z.push(x);
  z.push(x);
  return z;
}
let y = a(2);
y.push(5);
console.log(y);
