/**
 * Programmer: Dius Montenegro
 * Date: 02/29/2024
 */

/**
 * Represents a Bike object with price, max_speed, and miles properties.
 * @param {number} price - The price of the bike.
 * @param {number} max_speed - The maximum speed of the bike.
 */
function Bike(price, max_speed) {
    this.main = document.querySelector('main');
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;
}

/**
 * Displays information about the bike, either action (Driving/Reversing) or detailed bike info.
 * @param {string} action - The action to be displayed ('Driving', 'Reversing') or omitted for detailed info.
 * @returns {Bike} - Returns the Bike object for method chaining.
 */
Bike.prototype.displayInfo = function(action) {
    var paragraphEl = document.createElement('p');

    if (action === 'Driving' || action === 'Reversing') {
        paragraphEl.textContent = action;
        this.main.appendChild(paragraphEl);
    } else {
        paragraphEl.textContent = `The Bike's price is $${this.price}, maximum speed is ${this.max_speed}, the total miles driven is ${this.miles}`;
        this.main.appendChild(paragraphEl);
    }

    return this;
};

/**
 * Drives the bike, increments the miles by 10, and displays the driving action.
 * @returns {Bike} - Returns the Bike object for method chaining.
 */
Bike.prototype.drive = function() {
    this.miles += 10;
    this.displayInfo("Driving");
    return this;
};

/**
 * Reverses the bike, decrements the miles by 5 if miles are greater than 0, and displays the reversing action.
 * @returns {Bike} - Returns the Bike object for method chaining.
 */
Bike.prototype.reverse = function () {
    if (this.miles > 0) {
        this.miles -= 5;
    }
    this.displayInfo("Reversing");
    return this;
};

let bike1 = new Bike(500, 40);
bike1.drive().drive().drive().reverse().displayInfo();

let bike2 = new Bike(1000, 80);
bike2.drive().drive().reverse().reverse().displayInfo();

let bike3 = new Bike(1500, 120);
bike3.reverse().reverse().reverse().displayInfo();
