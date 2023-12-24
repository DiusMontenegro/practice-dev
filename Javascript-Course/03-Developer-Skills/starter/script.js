// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
if (x === 23) {
  console.log(23);
}

const calcAge = birthYear => 2023 - birthYear;

console.log(x);

// BUG FIXME

console.log(calcAge(2000));

// PROBLEM
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temparature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temparatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem

// 2) Breaking up into sub problems
