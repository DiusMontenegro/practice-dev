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

// 7. Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3)=6(or1 * 2 * 3);factorial(5)=120(or1 * 2 * 3 * 4 * 5).

function factorial(num) {
  let numFactorial = 1;
  for (let i = 1; i <= num; i++) {
    numFactorial *= i;
  }
  return numFactorial;
}

console.log(factorial(3));
console.log(factorial(5));

// 8. Given an array, swap first and last, second and second-to-last, third and third-to-last, etc. Have the function return this swapped array. For example, swapTowardCenter([true,42,"Ada",2,"pizza"]) should return ["pizza",2,"Ada",42,true]. Passing [1,2,3,4,5,6] should return [6,5,4,3,2,1].

function swapTowardCenter(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(swapTowardCenter([true, 42, "Ada", 2, "pizza"]));
console.log(swapTowardCenter([1, 2, 3, 4, 5, 6]));
console.log(swapTowardCenter(["hi", "coding", "dojo", "fans"]));

// 9. Create threesFives(n) that adds values from 1 and n (inclusive) if that value is not divisible by 3 or 5. Return the final sum. For example, threesFives(10) returns 22 as it only returns the sum of 1, 2, 4, 7, and 8. In that example, it skips 3, 6, and 9 as those are divisible by 3. It also skips 5, and 10 as it's divisible by 5.

function threesFives(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      continue;
    } else {
      sum += i;
    }
  }
  return sum;
}

console.log(threesFives(10));
console.log(threesFives(15));

// 10. Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

function fibonacci(index) {
  if (index <= 1) {
    return index;
  }

  let previousValue = 0;
  let currentValue = 1;

  for (let i = 2; i <= index; i++) {
    let nextValue = previousValue + currentValue;
    previousValue = currentValue;
    currentValue = nextValue;
  }

  return currentValue;
}

console.log(fibonacci(6));

// 11. Kaitlin sees beauty in numbers but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1. Solve the challenge WITHOUT using recursion although you are allowed to convert the integer to a string.

function sumToOne(num) {
  while (num >= 10) {
    let sum = 0;
    let numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
      sum += parseInt(numString[i]);
    }
    num = sum;
  }
  return num;
}

console.log(sumToOne(928));

// 12. Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes, and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, return angles (in degrees) of the hour, minute, and second hands. As a review, 360 degrees form a full rotation. Have the degree round up as a whole number (e.g. 38 instead of 37.632...) For input of 3600 secs (equivalent to 1:00:00), have it return "[30, 0, 0]" which means the hour is 30 degrees, the minute and the second are 0 degrees from noon. Similarly, clockHandAngles(10800) should return [90, 0, 0] as 10,800 seconds is equivalent to 3:00:00.

function clockHandAngles(seconds) {
  const secPerCycle = 12 * 60 * 60;

  seconds = seconds % secPerCycle;

  const hourAngle = Math.round((seconds / secPerCycle) * 360);
  const minuteAngle = Math.round(((seconds % 3600) / 3600) * 360);
  const secondAngle = Math.round(((seconds % 60) / 60) * 360);

  return [hourAngle, minuteAngle, secondAngle];
}

console.log(clockHandAngles(3600));
console.log(clockHandAngles(10800));
console.log(clockHandAngles(5000));
console.log(clockHandAngles(8000));

// 13. Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now, just create one that is easy to understand and debug. For example, isPrime(3) should return true. isPrime(4) should return false as 4 is divisible by 2.

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(13));
console.log(isPrime(65));
console.log(isPrime(17));

// 14. Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2), return 8. Given (1824,0), return 4. Given (1824,7), return 0.

// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (1234.56,-1), return 5.

function extractDigit(num, digitNum) {
  // Handle negative digitNum values
  if (digitNum < 0) {
    const scale = Math.pow(10, Math.abs(digitNum));
    return Math.floor(num * scale) % 10;
  }

  // Handle non-negative digitNum values
  const divisor = Math.pow(10, digitNum);
  return Math.floor(num / divisor) % 10;
}

console.log(extractDigit(199.35, 0));
console.log(extractDigit(1824.2, 2));
console.log(extractDigit(199.35, 0));
console.log(extractDigit(199.35, -1));
console.log(extractDigit(199.35, -2));

// 15. Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given.

function reverse(arr) {
  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

console.log(reverse([1, 3, 5]));

// 16. Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in the original order. No built-in array functions.

function filterRange(arr, min, max) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (currentElement > min && currentElement < max) {
      result.push(currentElement);
    }
  }

  return result;
}

// Test Cases
console.log(filterRange([1, 3, 5, 7, 10], 4, 8));
console.log(filterRange([1, 3, 5, 7, 10], -1, 4));
console.log(filterRange([2, 4, 3, 5], 2, 6));
console.log(filterRange([2, 4, 3, 5], 0, 4));
console.log(filterRange([6, 2, -3, 5, 7], 3, 8));

// 17. Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return a new array ['a','b',1,2].

function arrConcat(arr1, arr2) {
  const concat = arr1.concat(arr2);
  return concat;
}

console.log(arrConcat(["a", "b"], [1, 2]));
