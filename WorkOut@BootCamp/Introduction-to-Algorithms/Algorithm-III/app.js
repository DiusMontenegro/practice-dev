// test

function looping(x, y) {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      console.log(i * j);
    }
  }
}

let z = looping(3, 5);
console.log(z);
