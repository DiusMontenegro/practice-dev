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

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// - What is temperature amplitude? Answer: The difference between the Highest and the lowest temparature.
// - How to compute the Min and Max temperatures.
// - What is a sensor error? and what to do?

// 2) Breaking up into sub problems
// How to ignore errors
// Find Max temp in an array
// Find Min temp in an array
// Subtract the Max and the Min to get the temperature amplitude and return it.

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    } else if (curTemp > max) {
      max = curTemp;
    } else if (curTemp < min) {
      min = curTemp;
    }
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures, [15, 5, -5]);
console.log(amplitude);
