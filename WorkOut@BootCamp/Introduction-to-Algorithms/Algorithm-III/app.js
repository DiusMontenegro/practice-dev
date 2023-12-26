// Part 2: For these, without using any built-in functions (but only using the ones that you're already taught (e.g. push, pop), complete each challenge below.  Put all of these in a single file so that it's easier to review.

// Q1 : (Print 1 to x). Please complete the codes below to have the function print all the integers from 1 to x. If x is negative, have it print/log "negative number" and have the function return false.

function printUpTo(x) {
  if (x < 0) {
    console.log("negative number");
    return false;
  } else {
    for (let i = 1; i <= x; i++) {
      console.log(i);
    }
  }
}

printUpTo(1000);
y = printUpTo(-1);
console.log(y);
