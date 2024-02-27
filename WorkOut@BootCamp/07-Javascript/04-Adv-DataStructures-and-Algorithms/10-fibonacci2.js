let count = 0;
const memo = {};

function fib(n) {
    if (n <= 1) {
        return n;
    }

    if (memo[n] !== undefined) {
        return memo[n];
    }

    // If not memoized, calculate and memoize the result
    memo[n] = fib(n - 2) + fib(n - 1);
    count++;

    return memo[n];
}

console.log(count < 80); // Check if the function was called less than 80 times for fib(40)
