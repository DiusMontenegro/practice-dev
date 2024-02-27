function factorial(n) {

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

// with recursion
function factorial2(n) {

    if (n <= 1) {
        return n;
    }

    return n * factorial2(n - 1);
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(10));

console.log(factorial2(3));
console.log(factorial2(5));
console.log(factorial2(10));
