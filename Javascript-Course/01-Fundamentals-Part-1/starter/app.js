let country = "Philippines";
let continent = "Asia";
let population = 155600000;

// Assignment 1: Values and Variables.
console.log(country);
console.log(continent);
console.log(population);

// Assignment 2: Data Types.
let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(typeof null);

// Assignment 3: let, const and var.
language = "Filipino";
console.log(language);

// Assignment 4: Basic Operators.
const populationFinland = 6000000;
console.log(population > populationFinland);

const populationAverage = 33000000;
console.log(population > populationAverage);

let description = `${country} is in ${continent}, and its ${population} people speaks ${language}`;
console.log(description);

population /= 2;
console.log(population);

population++;
console.log(population);

// <----TESTS---->

// <----CODING CHALLENGE---->

// Calculate their BMI's for Mark and John. Let's see if Mark has a higher BMI than John.

const bmiMark = 78 / 1.69 ** 2;
const bmiJohn = 95 / 1.88 ** 2;
const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);
