// let country = "Philippines";
// let continent = "Asia";
// let population = 155600000;

// // Assignment 1: Values and Variables.
// console.log(country);
// console.log(continent);
// console.log(population);

// // Assignment 2: Data Types.
// let isIsland = true;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
// console.log(typeof null);

// // Assignment 3: let, const and var.
// language = "Filipino";
// console.log(language);

// // Assignment 4: Basic Operators.
// const populationFinland = 6000000;
// console.log(population > populationFinland);

// const populationAverage = 33000000;
// console.log(population > populationAverage);

// let description = `${country} is in ${continent}, and its ${population} people speaks ${language}`;
// console.log(description);

// population /= 2;
// console.log(population);

// population++;
// console.log(population);

// <----TESTS---->

// <----CODING CHALLENGE---->

// CHALLENGE 2 - Use the BMI example from Challenge #1, and the code you already wrote, and improve it. Hint: Use an if/else statement.

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let dataSet = 1;

function BMI() {
  const bmiMark = massMark / heightMark ** 2;
  const bmiJohn = massJohn / heightJohn ** 2;

  if (bmiMark > bmiJohn) {
    console.log(
      `Mark's BMI(${bmiMark}) is higher than John's BMI(${bmiJohn}).`
    );
  } else {
    console.log(
      `John's BMI(${bmiJohn}) is higher than Mark's BMI(${bmiMark}).`
    );
  }
}

BMI();

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMI();
