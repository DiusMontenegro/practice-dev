// Create a function that takes another function as its argument.  Have the function execute the passed function.

function trigger (func) {
    func();
}

function logger () {
    console.log('Executed the passed function');
}

trigger(logger);

// Create a function that returns a function.  Have the returned function be executed

function trigger2() {
    return function logger() {
        console.log('Executed the returned function');
    }
}

let execute = trigger2();
execute();

// Create a function that takes two functions as its arguments.  Randomly, either execute the first function or the second function.

function one() {
    console.log("I'm the first function!");
}

function two() {
    console.log("I'm the second function");
}

function randomize (func1, func2) {
    let random = Math.floor(Math.random() * 2);

    if (random === 0) {
        func1();
    } else {
        func2();
    }
}

randomize(one, two);
