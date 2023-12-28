const v88EngineStart = function () {
  for (let i = 10; i >= 0; i--) {
    console.log(`Welcome to V88! The training starts in ${i}`);
    if (i === 0) {
      console.log("Let's Begin!");
    }
  }
};

v88EngineStart();

let a = 35;
hello(a);
console.log(a);
function hello(a) {
  a = 50;
  console.log(a);
  return a;
}

a = hello(a);

console.log(a);

const arrOne = [1, 2, 3, 4, 5];
const arrTwo = [10, 20, 30, 40, 50];
const arrThree = [100, 200, 300, 400, 500];

const arrayPrint = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

arrayPrint(arrOne);
arrayPrint(arrTwo);
arrayPrint(arrThree);

function namePrint(yourName) {
  return `Hello, ${yourName}`;
}

console.log(namePrint("Dre"));

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 7));

for (let i = 0; i < 5; i++) {
  i += 1;
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  i = i + 3; // i = 4 + 3
  console.log(i); // i = 7
}

function y(num1, num2) {
  console.log(num1);
  return num1 + num2;
}

console.log(y(2, 3));
console.log(y(3, 5));

let s = 15;
console.log(s);

function y(a) {
  console.log(a);
  return a * 2;
}

b = y(10);
console.log(b);

const t = 15;
console.log(t);

function x(a) {
  a = 50;
  console.log(a);
  return 20;
}

b = x(10);
console.log(b);
