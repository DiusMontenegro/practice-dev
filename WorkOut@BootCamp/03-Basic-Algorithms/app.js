"use strict";

// 1. Create a function sum() that returns the sum of the two numbers passed as its arguments. For example, sum(2,5) should return 7; sum(3,10) should return 13.

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(3, 10));

// 2. Kelvin wants to convert between temperature scales. Create celciusToFahrenheit(cDegrees) that accepts a number of degrees in Celcius, and returns the equivalent temperature as expressed in Fahrenheit degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

function celciusToFahrenheit(cDegrees) {
  let fahrenheit = (cDegrees * 9) / 5 + 32;
  return fahrenheit;
}

console.log(celciusToFahrenheit(0));
console.log(celciusToFahrenheit(10));
console.log(celciusToFahrenheit(100));

// 3. Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

function makeItBig(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arr[i] = "big";
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(makeItBig([-1, 3, 5, -5]));

// 4. Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6].

function double(arr) {
  let doubled = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    doubled.push(arr[i]);
  }
  return doubled;
}

console.log(double([1, 2, 3]));
console.log(double([-2, 0, 2]));
console.log(double([2, 10, 100]));

// 5. Given an array and a value Y, count and return the number of array values greater than Y. For example, returnArrayCountGreaterThanY( [2,3,5], 4) should return 1 as there is only one element in the array whose value is greater than 4.

function returnArrayCountGreaterThanY(arr, y) {
  let greaterThanYCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      greaterThanYCounter++;
    }
  }
  return greaterThanYCounter;
}

console.log(returnArrayCountGreaterThanY([2, 3, 5], 4));
console.log(returnArrayCountGreaterThanY([2, 3, 5], 1));
console.log(returnArrayCountGreaterThanY([4, 10, 15], 10));
console.log(returnArrayCountGreaterThanY([4, 10, 15], 20));

// 6. Implement function sigma(num) that given a number, returns the sum of all positive integers up to a number (inclusive). Ex.:sigma(3)=6(or1 + 2 + 3); sigma(5)=15(or1 + 2 + 3 + 4 + 5).

function sigma(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sigma(3));
console.log(sigma(5));
console.log(sigma(6));
console.log(sigma(8));
