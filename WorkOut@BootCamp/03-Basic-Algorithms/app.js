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

// 18. Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, and third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return the array containing the heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

function heights(arr) {
  let visibleBuildings = [];
  let maxHeight = 0;

  for (let i = 0; i < arr.length; i++) {
    const height = arr[i];

    if (height !== -1) {
      if (height > maxHeight) {
        visibleBuildings.push(height);
        maxHeight = height;
      }
    }
  }

  return visibleBuildings;
}

// Test Cases
console.log(heights([-1, 1, 1, 7, 3])); // Output: [1, 7]
console.log(heights([0, 4])); // Output: [4]
console.log(heights([-1, 1, 1, 7, 3, 5, 9])); // Output: [1, 7, 9]
console.log(heights([-1, 1, 1, 7, 3, 5, 9, -3, 3, 15])); // Output: [1, 7, 9, 15]

// 19. Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

function secondToLast(arr) {
  if (arr.length < 2) {
    return null;
  }

  return arr[arr.length - 2];
}

// Test Cases
console.log(secondToLast([42, true, 4, "Kate", 7]));
console.log(secondToLast([42, true, 4, "Kate", 7, 9]));
console.log(secondToLast([42, true, 4, "Kate", 7, 9, "dojo", "awesome"]));
console.log(secondToLast([1]));

// 20. Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

function nToLast(arr, n) {
  if (n <= 0 || n > arr.length) {
    return null;
  }

  return arr[arr.length - n];
}

// Test Cases
console.log(nToLast([5, 2, 3, 6, 4, 9, 7], 3));
console.log(nToLast([1, 2], 3));
console.log(nToLast([5, 2, 3, 6, 4, 9, 7], 4));
console.log(nToLast([5, 2, 3, 6, 4, 9, 7], 5));
console.log(nToLast([1, 2, 3, 5, 5, 7, 10], 1));

// 21. Given an array, and indices start and end, remove vals in that index range, working in place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

function removeRange(arr, start, end) {
  if (start < 0 || end >= arr.length || start > end) {
    return null;
  }

  const removedCount = end - start + 1;

  for (let i = start; i <= end; i++) {
    arr[i] = arr[i + removedCount];
  }

  arr.length -= removedCount;

  return arr;
}

// Test Cases
console.log(removeRange([20, 30, 40, 50, 60, 70], 2, 4));
console.log(removeRange([20, 30, 40, 50, 60, 70], 1, 3));
console.log(removeRange([20, 30, 40, 50, 60, 70], 1, 4));
console.log(removeRange([1, 2, 3, 4, 5, 6], 2, 5));

// 22. The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

// 1) Set aside the last digit; do not include it in these calculations (until step 5);
// 2) Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// 3) If any results are larger than 9, subtract 9 from them;
// 4) Add all numbers (not just our odds) together;
// 5) Now add the last digit back in – the sum should be a multiple of 10.

//For example, when given a digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], and then after step 2) it is [5,4,2,16]. Post step 3), we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple of 10, we would instead return false

function isCreditCardValid(digitArr) {
  // 1.
  const lastDigit = digitArr[digitArr.length - 1];
  digitArr.pop();

  // 2.
  for (let i = digitArr.length - 1; i >= 0; i -= 2) {
    digitArr[i] *= 2;
  }

  // 3.
  for (let i = 0; i < digitArr.length; i++) {
    if (digitArr[i] > 9) {
      digitArr[i] -= 9;
    }
  }

  // 4.
  let sum = 0;
  for (let i = 0; i < digitArr.length; i++) {
    sum += digitArr[i];
  }

  // 5.
  sum += lastDigit;
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isCreditCardValid([5, 2, 2, 8, 2]));
console.log(isCreditCardValid([5, 2, 3, 8, 2]));
console.log(isCreditCardValid([4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]));
console.log(
  isCreditCardValid([4, 0, 1, 2, 8, 8, 8, 2, 5, 6, 8, 8, 1, 8, 9, 1])
);

// 23. Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with the first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

function zipIt(arr1, arr2) {
  const newArr = [];
  const maxLength = arr1.length + arr2.length;

  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
      newArr.push(arr1[i]);
    }
    if (i < arr2.length) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(zipIt([1, 2], [10, 20, 30, 40]));

// 24. Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

function parensValid(str) {
  const parentheses = [];

  for (const character of str) {
    if (character === "(") {
      parentheses.push(character);
    } else if (character === ")") {
      if (parentheses.length === 0) {
        return false;
      } else {
        parentheses.pop();
      }
    }
  }

  if (parentheses.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(parensValid("Y(3(p)p(3)r)s"));
console.log(parensValid("N(0)t )0(k"));
console.log(parensValid("N(0)t (0(k))"));
console.log(parensValid("(N(0)t (0(k))"));
console.log(parensValid("()(N(0)t (0(k)))"));

// 25. Understanding how to implement basic sorting algorithm is a good exercise. For this particular challenge, you are to implement bubble sort. You'll note that almost all sorting algorithms have two for loops. For bubble sort, you'll also note two for loops (one inside each other).

function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([5, 3, 1, 2]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([5, 3, 1, -1, -3]));
console.log(bubbleSort([5, 3, 1]));

// 26. Create a function that prints a multiplication table such as follows:

// multiTable(2,2) should print

// 1 2

// 2 4

// multiTable(3,3) should print

// 1 2 3

// 2 4 6

// 3 6 9

// multiTable(4,4) should print

// 1 2 3 4

// 2 4 6 8

// 3 6 9 12

// 4 8 12 16

// multiTable(2,4) should print

// 1 2

// 2 4

// 3 6

// 4 8

// For this challenge, it could print/log all of these numbers in a single row or as many rows as you want. As long as it displays the numbers in the right sequence, it will pass the test cases.

function multiTable(x, y) {
  for (let i = 1; i <= y; i++) {
    for (let j = 1; j <= x; j++) {
      const product = i * j;
      console.log(product);
    }
  }
}

// Test cases
console.log(multiTable(2, 2));
console.log(multiTable(3, 3));
console.log(multiTable(2, 4));
console.log(multiTable(5, 8));

// 27. Create a function that returns a two-dimensional array containing a bunch of zeros. For example, twoDimensional(2,5) should return the following array: [ [ 0, 0, 0, 0, 0], [ 0, 0, 0, 0, 0 ] ] . One way to visualize this two-dimensional array is to think of the above as a 2-row, 5-column matrix. You could also write the above array to be as follows: [ [0,0,0,0,0], [0,0,0,0,0] ]. Whenever you're dealing with two-dimensional arrays, be extra cautious on every single character. A simple typo or forgetting to add a comma or a square bracket can ruin the whole program.

function twoDimensional(rows, columns) {
  let result = [];

  for (let i = 0; i < rows; i++) {
    let rowArray = [];

    for (let j = 0; j < columns; j++) {
      rowArray.push(0);
    }

    result.push(rowArray);
  }

  return result;
}

// Test cases
console.log(twoDimensional(2, 5));
console.log(twoDimensional(3, 4));
console.log(twoDimensional(1, 5));

// 28. Create a function twoDimensional(row, column) that returns a two dimensional array containing bunch of zeros but where the outer values are filled with ones. For example twoDimensional(5,5) should return the following array: [ [ 1, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 1 ] ] Assume that both row and column are greater than 2.

function twoDimensional(rows, columns) {
  let result = [];

  for (let i = 0; i < rows; i++) {
    let rowArray = [];

    for (let j = 0; j < columns; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === columns - 1) {
        rowArray.push(1);
      } else {
        rowArray.push(0);
      }
    }

    result.push(rowArray);
  }

  return result;
}

// Test cases
console.log(twoDimensional(2, 5));
console.log(twoDimensional(5, 5));
console.log(twoDimensional(8, 8));
