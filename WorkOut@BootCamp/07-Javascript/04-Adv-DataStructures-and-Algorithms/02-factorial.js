function factorial(n) {

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(10));
