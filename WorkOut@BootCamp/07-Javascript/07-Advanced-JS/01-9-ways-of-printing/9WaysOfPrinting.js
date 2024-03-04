// direct printing
console.log('I love Javascript!!!');

// printing by variable ES6
let message = "I love Javascript!!!";
console.log(message);

// printing by variable ES5
var messages = "I love Javascript!!!";
console.log(messages);

// Immediate Function
(function () {
    console.log("I love Javascript!!!");
}) ();

// By index
message = ['I love Javascript!!!', 'Hello World'];
console.log(message[0]);

// By class ES6;
class Message {
    constructor () {
        this.message = "I love Javascript!!!";
    }
}

console.log(new Message().message);

// By prototype ES5
function Message1 () {
    this.hello = "";
}

Message1.prototype.message = "I love Javascript!!!";

console.log(new Message1().message);

// Arrow function
message2 = () => {
    console.log('I love Javascript!!!');
}
message2();

// Closure
function message3 () {
    let message3 = "";
    function addMessage() {
        console.log("I love Javascript!!!");
    }
    addMessage();
}

message3();
