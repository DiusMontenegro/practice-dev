"use strict";

// // <----CODING CHALLENGES---->

// // Coding Challenge 1 - Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Team Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Team Koalas wins (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No team wins");
//   }
// };

// let avgDolphins, avgKoalas;

// avgDolphins = calcAverage(44, 23, 71);
// avgKoalas = calcAverage(65, 54, 49);
// checkWinner(avgDolphins, avgKoalas);

// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// checkWinner(avgDolphins, avgKoalas);

// // Coding Challenge 2 - Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// const calcTip = function (bill) {
//   if (bill > 0 && bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else if ((bill > 0 && bill < 50) || bill > 300) {
//     return bill * 0.2;
//   } else {
//     console.log("Enter a valid amount");
//   }
// };

// const bills = [125, 555, 44];
// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];

// const totalAmount = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2],
// ];

// console.log(totalAmount);
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

const calcYears = (age) => 2023 - age;

const years = [1971, 1973, 1997, 2000, 2001, 2005];
const calculatedYears1 = calcYears(years[0]);
const calculatedYears2 = calcYears(years[1]);
const calculatedYears3 = calcYears(years[years.length - 1]);
console.log(calculatedYears1, calculatedYears2, calculatedYears3);

const dius = {
  firstName: "dius",
  lastName: "Montenegro",
  age: 23,
  friends: ["Jiffy", "Live", "Rea"],
  partner: true,
  job: "Front-end Developer",
  calcAge: function () {
    this.age = 2023 - this.age;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${
      this.job
    }, and he has ${this.partner ? "a" : "no"} partner.`;
  },
};

// log this: dius has 3 friends but his best friend is called Rea.
console.log(
  `${dius.firstName} has ${dius.friends.length} friends but his best friend is ${dius.friends[2]}.`
);

// log this: "dius is a 23-year old Front-end Developer, and he has a partner."
console.log(dius.getSummary());
