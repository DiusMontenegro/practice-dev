// Part 2: For these, without using any built-in functions (but only using the ones that you're already taught (e.g. push, pop), complete each challenge below.  Put all of these in a single file so that it's easier to review.

// Q1 : (Print 1 to x). Please complete the codes below to have the function print all the integers from 1 to x. If x is negative, have it print/log "negative number" and have the function return false.

// function printUpTo(x) {
//   if (x < 0) {
//     console.log("negative number");
//     return false;
//   } else {
//     for (let i = 1; i <= x; i++) {
//       console.log(i);
//     }
//   }
// }

// printUpTo(1000);
// y = printUpTo(-1);
// console.log(y);

// Q2 : "PrintSum" . Please complete the code below to have the function print integers from 0 to x and with each integer print the sum so far.  Have the function return the final sum

// function PrintSum(x) {
//   let sum = 0;
//   for (let i = 0; i <= x; i++) {
//     sum += i;
//   }
//   return sum;
// }

// y = PrintSum(255);
// console.log(y);

// Q3 : "PrintSumArray" . Please complete the code below to have the function return the sum of all the values in a given array.

function PrintSumArray(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}

console.log(PrintSumArray([1, 2, 3]));
