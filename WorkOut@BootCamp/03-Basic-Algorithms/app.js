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
