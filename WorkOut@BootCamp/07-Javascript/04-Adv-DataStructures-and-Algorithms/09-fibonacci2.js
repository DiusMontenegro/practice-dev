let count = 0;
const memo = {};

function fib(n) {
    if (n <= 1) {
        return n;
    }

    // Check if the result for the given argument is already memoized
    if (memo[n] !== undefined) {
        return memo[n];
    }

    // If not memoized, calculate and memoize the result
    memo[n] = fib(n - 2) + fib(n - 1);
    count++;

    return memo[n];
}

// Test cases
const result30 = fib(30);
const result40 = fib(40);

console.log(result30); // Fib(30)
console.log(result40); // Fib(40)
console.log(count < 80); // Check if the function was called less than 80 times for fib(40)
