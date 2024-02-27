function zibonacci(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else if (n % 2 === 1 && n > 0) {  // odd values
        return zibonacci((n - 1) / 2) + zibonacci((n - 1) / 2 - 1) + 1;
    } else if (n % 2 === 0 && n > 1) {  // even values
        return zibonacci(n / 2) + zibonacci(n / 2 + 1) + 1;
    } else {
        return undefined; // handle invalid input or edge cases
    }
}

// Testing the Zibonacci series
console.log(zibonacci(0));  // Output: 1
console.log(zibonacci(1));  // Output: 1
console.log(zibonacci(2));  // Output: 2
console.log(zibonacci(3));  // Output: 3
console.log(zibonacci(4));  // Output: 6
console.log(zibonacci(5));  // Output: 4
console.log(zibonacci(6));  // Output: 10
console.log(zibonacci(10)); // Output: 15
console.log(zibonacci(11)); // Output: 11
