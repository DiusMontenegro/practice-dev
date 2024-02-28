console.log('---------------------------');
console.log('Exercise 1');

var a = 10;
function abc() {
    var a = 15;
    console.log('a is', a);
}
console.log('a really is', a);
// this should output 'a really is, 10' because the function hasn't been declared.

console.log('---------------------------');
console.log('Exercise 2');
var a = 10;
function abc() {
    var a = 15;
    console.log('a is', a);
}
abc();
console.log('a really is', a);

/**
 * this should output:
 * a is, 15
 * a really is 10
 *
 * Answer: a function was called first outputing the value of the variable a inside it which is not related to the "a" in the global scope. The second log is for logging the variable "a" in the global scope
 *
 * */

console.log('---------------------------');
console.log('Exercise 3');

if (a == undefined) {
    console.log("a is declared but hasn't been set to a specific value yet");
}

/**
 * this should output:
 * Uncaught error a is undefined.
 *
 * Answer: the condition is hasn't been met because the variable "a" hasn't been declared in this specific exercise.
 * */

console.log('---------------------------');
console.log('Exercise 4');

if (a == undefined) {
    console.log("a is declared but hasn't been set to a specific value yet");
}
var a = 15;

/**
 * this should output:
 * a is declared but hasn't been set to a specific value yet
 *
 * Answer: the condition is triggered because the variable "a" is undefined before the condition. Although it has been declared after the condition.
 * */

console.log('---------------------------');
console.log('Exercise 5');

var a = 15;
function abc(a) {
    return a + 10;
}
var final = abc(a);
console.log('final is', final);

/**
 * this should output:
 * final is, 25
 *
 * Answer: the variable a was passed as a parameter inside the function and an additional value of 10 was added to it. The function was triggered returning a new value to the final variable.
 * */

console.log('---------------------------');
console.log('Exercise 6');

var a = 15;
function abc() {
    a = a + 10;
}
console.log('a is', a);

/**
 * this should output:
 * a is, 15
 *
 * Answer: It simply outputs the value of "a" variable which is 15 in the global scope because the function was declared but hasn't been called.
 * */

console.log('---------------------------');
console.log('Exercise 7');

var a = 15;
function abc() {
    a = a + 10;
}
console.log('a is', a);
abc();
console.log('a is', a);

/**
 * this should output:
 * a is, 15
 * a is, 25
 * Answer: The first log output is the original value of the variable "a". The second log is for logging the new value of "a" but this time, a function call was made before logging which outputs a new value of "a".
 * */

console.log('---------------------------');
console.log('Exercise 8');

var a = 15;
function abc() {
    var a = a + 10;
}
console.log('a is', a);
abc();
console.log('a is', a);

/**
 * this should output:
 * a is, 15
 * a is, 15
 *
 * Answer: The first and the second log output is the original value of the variable "a" which is 15. A function call was made before the second log but the varible "a" inside the function is not related to the "a" in the global scope. Also, the function has no log which it doesn't output anything.
 * */

console.log('---------------------------');
console.log('Exercise 9');

var a = 15;
function abc(a) {
    a = a + 15;
}
console.log('a is', a);
abc();
console.log('a is', a);

/**
 * this should output:
 * a is, 15
 * a is, 15
 *
 * Answer: The first and the second log output is the original value of the variable "a" which is 15. A function call was made before the second log but without the parameter "a".
 * */
