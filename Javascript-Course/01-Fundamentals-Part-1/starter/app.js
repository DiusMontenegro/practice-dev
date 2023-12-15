// <----ASSIGNMENTS---->

const country = "Philippines";
const continent = "Asia";
const populationAverage = 33000000;
const language = "Filipino";

let population = 155600000;
let populationFinland = 6000000;
let isIsland = true;

// Assignment 1: Values and Variables.
console.log(country);
console.log(continent);
console.log(population);

// Assignment 2: Data Types.
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log(typeof null);

// Assignment 3: let, const and var.
console.log(language);

// Assignment 4: Basic Operators.
console.log(population > populationFinland);
console.log(population > populationAverage);

// Assignment 5: Strings and Template Literals.
const description = `${country} is in ${continent}, and its ${population} people speaks ${language}`;
console.log(description);

// Assignment 6: Taking Decisions: if/else Statements.
if (population > populationAverage) {
  console.log(`${country}' population is above average 🚀`);
} else {
  console.log(`${country}' population is below average.`);
}

// Assignment 7: Type Conversion and Coercion.
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // "617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // False
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// Assignment 8: Equality Operators == vs. ===.
const numNeighbors = Number(
  prompt("How many neighbor countires does your country have?")
);

if (numNeighbors === 1) {
  alert("Only 1 border!");
} else if (numNeighbors > 1) {
  alert("More than one border.");
} else {
  alert("No Border.");
}

// Assignment 9: Logical Operators.
const idealLanguage = "English";

if (idealLanguage === language && population < 50000000 && !isIsland) {
  console.log(`You should live in the ${country}! :)`);
} else {
  console.log(`${country} does not meet your criteria. :(`);
}

// Assignment 10: The switch Statement.
const givenLanguage = "Filipino";

switch (givenLanguage) {
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place in number of native speakers");
    break;
  case "Hindi":
    console.log("4rth place in number of native speakers");
    break;
  case "Arabic":
    console.log("5th place in number of native speakers");
    break;
  default:
    console.log("Great language too :D");
}

// Assignment 11: The Conditional (Ternary) Operator.
population =
  population > populationAverage
    ? console.log(`${country}' population in above average.`)
    : console.log(`${country}' population is below average.`);
// <----CODING CHALLENGES---->

// CHALLENGE 1 - Calculate their BMI's for Mark and John. Let's see if Mark has a higher BMI than John.

const bmiMark = 78 / 1.69 ** 2;
const bmiJohn = 95 / 1.88 ** 2;
const markHigherBMI = bmiMark > bmiJohn;
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let dataSet = 1;

console.log(bmiMark, bmiJohn, markHigherBMI);
function BMI() {
  const bmiMark = massMark / heightMark ** 2;
  const bmiJohn = massJohn / heightJohn ** 2;

  if (bmiMark > bmiJohn) {
    console.log(bmiMark, bmiJohn, `The dataset ${dataSet} is ${true}`);
  } else {
    console.log(bmiMark, bmiJohn, `The dataset ${dataSet} is ${false}`);
  }
}

BMI();

dataSet = 2;

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMI();

// CHALLENGE 2 - Use the BMI example from Challenge #1, and the code you already wrote, and improve it. Hint: Use an if/else statement.

massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;
dataSet = 1;

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

// CHALLENGE 3 - There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy.

const minimumScore = 100;
let teamDolphins = (96 + 108 + 89) / 2;
let teamKoalas = (88 + 91 + 110) / 2;
dataSet = 1;

function Result() {
  if (teamDolphins > teamKoalas && teamDolphins >= minimumScore) {
    console.log(`Data Set ${dataSet} result: Team Dolphins Wins!`);
  } else if (teamDolphins < teamKoalas && teamKoalas >= minimumScore) {
    console.log(`Data Set ${dataSet} result: Team Koalas Wins!`);
  } else if (
    teamDolphins === teamKoalas &&
    teamDolphins >= minimumScore &&
    teamKoalas >= minimumScore
  ) {
    console.log(`Data Set ${dataSet} result: Draw!`);
  } else {
    console.log(`Data Set ${dataSet} result: No one wins the competition. :(`);
  }
}

Result();

dataSet = 2;
teamDolphins = (97 + 112 + 101) / 2;
teamKoalas = (109 + 95 + 123) / 2;

Result();

dataSet = 3;
teamDolphins = (97 + 112 + 101) / 2;
teamKoalas = (109 + 95 + 106) / 2;

Result();

dataSet = 4;
teamDolphins = (8 + 9 + 9) / 2;
teamKoalas = (93 + 9 + 9) / 2;

Result();

// CHALLENGE 4 - Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

const bill = Number(prompt("Please enter your bill."));
let tip;

function Tip() {
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    alert(`The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill + tip}`);
  } else if (bill > 0) {
    tip = bill * 0.2;
    alert(`The bill was ${bill}, the tip was ${tip}, and the total value
    ${bill + tip}`);
  } else {
    alert("Please enter a valid amount");
  }
}

Tip();

// <----TESTS---->
