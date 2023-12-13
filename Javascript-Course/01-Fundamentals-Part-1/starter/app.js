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
let yearToday = 2023;
const ageDius = yearToday - 2000;
const ageRea = yearToday - 1999;
console.log(ageDius, ageRea);

const firstName = "Dius";
const lastName = "Montenegro";
console.log(`${firstName} ${lastName}`);

let x = 10 + 5;
x += 10;
console.log(x);

console.log(ageRea <= 24);
