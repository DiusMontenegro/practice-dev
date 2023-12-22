// Assignment Algorithm II

// 1
function divider() {
  console.log("-----");
}

function z() {
  console.log("hello");
}

console.log("Dojo");
divider();

// 2
function x() {
  console.log("hello");
  return 15;
}

e = x();
console.log("x is", e);
divider();

// 3
function num3(n) {
  console.log("n is", n);
  return n + 15;
}

const r = num3(3);
console.log("x is", r);
divider();

// 4
function q(n) {
  console.log("n is", n);
  p = n * 2;
  return p;
}

const w = q(3) + q(5);
console.log("x is", w);
divider();

// 5
function op1(a, b) {
  const c = a + b;
  console.log("c is", c);
  return c;
}

const l = op1(2, 3) + op1(3, 5);
console.log("x is", l);
divider();

// 6
function op2(a, b) {
  const c = a + b;
  console.log("c is", c);
  return c;
}

k = op2(2, 3) + op2(3, op2(2, 1)) + op2(op2(2, 1), op2(2, 3));
console.log("x is", k);
divider();

// 7
let y = 15;
function z() {
  let y = 10;
}

console.log(y);
z();
console.log(y);
