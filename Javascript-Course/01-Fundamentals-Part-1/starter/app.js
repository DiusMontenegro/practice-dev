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

// // Assignment 10: The switch Statement.
// const givenLanguage = "Filipino";

// switch (givenLanguage) {
//   case "Mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "Spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "English":
//     console.log("3rd place in number of native speakers");
//     break;
//   case "Hindi":
//     console.log("4rth place in number of native speakers");
//     break;
//   case "Arabic":
//     console.log("5th place in number of native speakers");
//     break;
//   default:
//     console.log("Great language too :D");
// }

// <----CODING CHALLENGE---->

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
