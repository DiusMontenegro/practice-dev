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

// 4. Output: 15, 15, 10, 15
x = 15;
console.log(x);
function awesome() {
  let x = 10;
  console.log(x);
}
console.log(x);
awesome();
console.log(x);

// 5. Output: 0, 2, 4, 6, 8, 10, 12, 14
for (let i = 0; i < 15; i += 2) {
  console.log(i);
}

// 6. Output: 0, 0, 0, 1, 0, 2
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i * j);
  }
}

// 7. Output: 0, 0, 0, 0, 1, 2, 0, 2, 4, undefined
function looping(x, y) {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      console.log(i * j);
    }
  }
}

z = looping(3, 3);
console.log(z);

// 8. Output: 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 2, 4, 6, 8, undefined
function looping1(x, y) {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      console.log(i * j);
    }
  }
}

z = looping1(3, 5);
console.log(z);

console.log("----- PART 1 -----");
