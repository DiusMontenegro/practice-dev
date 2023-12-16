"use strict";

// // <----CODING CHALLENGES---->

// Coding Challenge 1 - Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Team Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Team Koalas wins (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

let avgDolphins, avgKoalas;

avgDolphins = calcAverage(44, 23, 71);
avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);

// // <----TESTS---->

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
//   console.log("You can drive.");
// } else {
//   console.log("You cannot drive.");
// }

// function mix(pilit, condensedMilk) {
//   return `Ang resulta kay ${pilit} ka pilit ug ${condensedMilk} ka condensed milk`;
// }

// const palitaw = mix("1 kl.", 1);
// console.log(palitaw);

// function slicer(fruit) {
//   return fruit * 6;
// }

// function juice(unslicedFruitAmount, fruitType, iceAmount, juiceName) {
//   const fruitPieces = slicer(unslicedFruitAmount);
//   return `Gi mix ang ${fruitPieces} ka sliced ${fruitType} ug ${iceAmount} ka ice para makabuhat ug ${juiceName}.`;
// }

// const juiceRecipe = juice(2, "Melon", 2, "Melon Juice");
// console.log(juiceRecipe);

// const eligibilityCalculator = (age) => {
//   return 18 - age;
// };

// const licenseApplication = (name, age) => {
//   const yearsLeft = eligibilityCalculator(age);
//   if (age >= 18 && age < 150) {
//     return `${name}, Pwede naka makakuha ug lisensya.`;
//   } else if (age < 18 && age > 0) {
//     return `${name}, You have ${yearsLeft} year/s left para maka apply ig lisensya. `;
//   } else {
//     return "Please enter a valid age";
//   }
// };

// const licenseInformation = licenseApplication("Dre", 17);
// console.log(licenseInformation);
