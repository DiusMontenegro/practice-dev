// Part 1 - Written Assignment (Predict the output.)

// 1. Output: 2, 3, undefined
console.log("----- PART 1 -----");

function multiply(x, y) {
  console.log(x);
  console.log(y);
}

b = multiply(2, 3);
console.log(b);

// 2. Output: 6, 10
function multiply1(x, y) {
  return x * y;
}
b = multiply1(2, 3);
console.log(b);
console.log(multiply1(5, 2));

// 3. Output: 3, 7
let x = [1, 2, 3, 4, 5, 10];
for (let i = 0; i < 5; i++) {
  i += 3;
  console.log(i);
}
