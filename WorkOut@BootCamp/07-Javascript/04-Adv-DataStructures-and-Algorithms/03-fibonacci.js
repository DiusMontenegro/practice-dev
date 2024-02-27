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

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(20));
