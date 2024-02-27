function fib(n) {

    if (n <= 1) {
        return n;
    }

    let previousValue = 0;
    let currentValue = 1;

    for (let i = 2; i <= n; i++) {
        let next = previousValue + currentValue;
        previousValue = currentValue;
        currentValue = next;
    }

    return currentValue;
}

// with recursion
function fib2(n) {

    if (n < 2) {
        return n;
    }

    return fib2(n - 2) + fib2(n - 1);
}


console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(20));

console.log(fib2(0));
console.log(fib2(1));
console.log(fib2(2));
console.log(fib2(3));
console.log(fib2(4));
console.log(fib2(5));
console.log(fib2(6));
console.log(fib2(7));
console.log(fib2(20));
