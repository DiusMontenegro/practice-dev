// <----ASSIGNMENTS---->

// const country = "Philippines";
// const continent = "Asia";
// const populationAverage = 33000000;
// const language = "Filipino";

// let population = 155600000;
// let populationFinland = 6000000;
// let isIsland = true;

// // Assignment 1: Values and Variables.
// console.log(country);
// console.log(continent);
// console.log(population);

// // Assignment 2: Data Types.

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);
// console.log(typeof null);

// // Assignment 3: let, const and var.
// console.log(language);

// // Assignment 4: Basic Operators.
// console.log(population > populationFinland);

// console.log(population > populationAverage);

// // Assignment 5: Strings and Template Literals.
// const description = `${country} is in ${continent}, and its ${population} people speaks ${language}`;
// console.log(description);
// <----CODING CHALLENGE---->

// // Assignment 6: Taking Decisions: if/else Statements.
// if (population > populationAverage) {
//   console.log(`${country}' population is above average 🚀`);
// } else {
//   console.log(`${country}' population is below average.`);
// }

// // Assignment 7: Type Conversion and Coercion.
// console.log("9" - "5"); // 4
// console.log("19" - "13" + "17"); // "617"
// console.log("19" - "13" + 17); // 23
// console.log("123" < 57); // False
// console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// // Assignment 8: Equality Operators == vs. ===.
// const numNeighbors = Number(
//   prompt("How many neighbor countires does your country have?")
// );

// if (numNeighbors === 1) {
//   alert("Only 1 border!");
// } else if (numNeighbors > 1) {
//   alert("More than one border.");
// } else {
//   alert("No Border.");
// }

// // Assignment 9: Logical Operators.
// const idealLanguage = "English";

// if (idealLanguage === language && population < 50000000 && !isIsland) {
//   console.log(`You should live in the ${country}! :)`);
// } else {
//   console.log(`${country} does not meet your criteria. :(`);
// }

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

// <----CODING CHALLENGE---->

// CHALLENGE 3 - There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy.

// const minimumScore = 100;
// let teamDolphins = (96 + 108 + 89) / 3;
// let teamKoalas = (88 + 91 + 110) / 3;
// let dataSet = 1;

// function Result() {
//   if (teamDolphins > teamKoalas && teamDolphins >= minimumScore) {
//     console.log(`Data Set ${dataSet} result: Team Dolphins Wins!`);
//   } else if (teamDolphins < teamKoalas && teamKoalas >= minimumScore) {
//     console.log(`Data Set ${dataSet} result: Team Koalas Wins!`);
//   } else if (
//     teamDolphins === teamKoalas &&
//     teamDolphins >= minimumScore &&
//     teamKoalas >= minimumScore
//   ) {
//     console.log(`Data Set ${dataSet} result: Draw!`);
//   } else {
//     console.log(`Data Set ${dataSet} result: No one wins the competition. :(`);
//   }
// }

// Result();

// dataSet = 2;
// teamDolphins = (97 + 112 + 101) / 3;
// teamKoalas = (109 + 95 + 123) / 3;

// Result();

// dataSet = 3;
// teamDolphins = (97 + 112 + 101) / 3;
// teamKoalas = (109 + 95 + 106) / 3;

// Result();

// dataSet = 4;
// teamDolphins = (8 + 9 + 9) / 3;
// teamKoalas = (93 + 9 + 9) / 3;

// Result();
// <----TESTS---->
let day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan");
    console.log("code");
    break;
  case "tuesday":
    console.log("Prepare code");
    break;
  case "wednesday":
  case "thursday":
    console.log("Implement code");
    break;
  case "friday":
    console.log("reflect code");
    break;
  case "saturday":
  case "sunday":
    console.log("code and enjoy the weekend");
    break;
  default:
    console.log("Enter a valid day.");
}

if (day === "monday") {
  console.log("Plan");
  console.log("code");
} else if (day === "tuesday") {
  console.log("Prepare code");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Implement code");
} else if (day === "friday") {
  console.log("reflect code");
} else if (day === "saturday" || day === "sunday") {
  console.log("code and enjoy the weekend");
} else {
  console.log("Enter a valid day.");
}
