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

// 4. Output: true
function a3(x) {
  if (x[0] < x[1]) {
    return true;
  } else {
    return false;
  }
}
b = a3([2, 3, 4, 5]);
console.log(b);

// 5. Output: [ "Coding", "Coding", "Coding", "Coding" ]
function a4(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      x[i] = "Coding";
    }
  }
  return x;
}
console.log(a4([1, 2, 3, 4]));

// 6. Output: [ 5, 'Coding', 'Dojo', 4]
function a5(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] > 5) {
      x[i] = "Coding";
    } else if (x[i] < 0) {
      x[i] = "Dojo";
    }
  }
  return x;
}
console.log(a5([5, 7, -1, 4]));
