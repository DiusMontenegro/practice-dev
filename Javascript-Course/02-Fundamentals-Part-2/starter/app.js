"use strict";

// <----CODING CHALLENGES---->

// // <----TESTS---->

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}

function mix(pilit, condensedMilk) {
  return `Ang resulta kay ${pilit} ka pilit ug ${condensedMilk} ka condensed milk`;
}

const palitaw = mix("1 kl.", 1);
console.log(palitaw);

function slicer(fruit) {
  return fruit * 6;
}

function juice(unslicedFruitAmount, fruitType, iceAmount, juiceName) {
  const fruitPieces = slicer(unslicedFruitAmount);
  return `Gi mix ang ${fruitPieces} ka sliced ${fruitType} ug ${iceAmount} ka ice para makabuhat ug ${juiceName}.`;
}

const juiceRecipe = juice(2, "Melon", 2, "Melon Juice");
console.log(juiceRecipe);

const eligibilityCalculator = (age) => {
  return 18 - age;
};

const licenseApplication = (name, age) => {
  const yearsLeft = eligibilityCalculator(age);
  if (age >= 18 && age < 150) {
    return `${name}, Pwede naka makakuha ug lisensya.`;
  } else if (age < 18 && age > 0) {
    return `${name}, You have ${yearsLeft} year/s left para maka apply ig lisensya. `;
  } else {
    return "Please enter a valid age";
  }
};

const licenseInformation = licenseApplication("Dre", 17);
console.log(licenseInformation);
