let a = (function() {
    return function(a, b) {
        console.log('hello');
        return a*b;
    }
    console.log('world');
})();
console.log(a());
