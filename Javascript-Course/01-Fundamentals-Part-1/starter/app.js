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

// Assignment 5: Strings and Template Literals.
let description = `${country} is in ${continent}, and its ${population} people speaks ${language}`;
console.log(description);

// Assignment 6: Taking Decisions: if/else Statements.
if (population > populationAverage) {
  console.log(`${country}' population is above average 🚀`);
} else {
  console.log(`${country}' population is below average.`);
}

// <----TESTS---->

// <----CODING CHALLENGE---->

// CHALLENGE 2 - Use the BMI example from Challenge #1, and the code you already wrote, and improve it. Hint: Use an if/else statement.
