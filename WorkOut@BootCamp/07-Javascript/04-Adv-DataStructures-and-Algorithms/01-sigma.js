// No recursion
function sigma(n){

    let sigma = 0;

    for (let i = 0; i <= n; i++) {
        sigma += i;
    }

    return sigma;
}

// With recursion
function sigma2(n) {

    if (n < 1) {
        return n;
    }

    return n + sigma2(n - 1);
}


console.log(sigma(3));
console.log(sigma(5));
console.log(sigma(7));
console.log(sigma(10));

console.log(sigma2(3));
console.log(sigma2(5));
console.log(sigma2(7));
console.log(sigma2(10));
