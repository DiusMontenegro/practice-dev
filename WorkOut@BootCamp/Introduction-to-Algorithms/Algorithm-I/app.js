// const v88EngineStart = function () {
//   for (let i = 10; i >= 0; i--) {
//     console.log(`Welcome to V88! The training starts in ${i}`);
//     if (i === 0) {
//       console.log("Let's Begin!");
//     }
//   }
// };

// v88EngineStart();

let a = 35;
hello(a);
console.log(a);
function hello(a) {
  a = 50;
  console.log(a);
  return a;
}

// a = hello(a);

// console.log(a);

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
