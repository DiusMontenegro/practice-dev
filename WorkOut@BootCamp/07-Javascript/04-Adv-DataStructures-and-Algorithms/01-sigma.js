function sigma(n){

    let sigma = 0;

    for (let i = 0; i <= n; i++) {
        sigma += i;
    }

    return sigma;
}

console.log(sigma(3));
console.log(sigma(5));
console.log(sigma(7));
console.log(sigma(10));
