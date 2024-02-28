'use strict';

var ninja1 = {
    hp: 100,
    strength: 15,
    attack: function () {
        let attack = Math.floor(Math.random() * 16);
        ninja2.hp -= attack
        return attack;
    },
};
var ninja2 = {
    hp: 150,
    strength: 10,
    attack: function () {
        let attack = Math.floor(Math.random() * 11);
        ninja1.hp -= attack
        return attack;
    },
};

for (let i = 1; i <= 10; i++) {
    console.log(`=== ROUND ${i} ===`);
    console.log(`Ninja1 attacks Ninja2 and does a damage of ${ninja1.attack()}! Ninja1 health: ${ninja1.hp}. Ninja2 health: ${ninja2.hp}.`);
    console.log(`Ninja2 attacks Ninja1 and does a damage of ${ninja2.attack()}! Ninja2 health: ${ninja2.hp}. Ninja1 health: ${ninja1.hp}.`);
}
if (ninja1.hp > ninja2.hp) {
    console.log("Ninja 1 WINS!!!");
} else {
    console.log("Ninja 2 WINS!!!");
}
