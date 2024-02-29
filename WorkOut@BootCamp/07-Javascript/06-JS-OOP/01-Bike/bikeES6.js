class Bike {

    constructor(price, max_speed) {
        this.main = document.querySelector('main');
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
    }

    displayInfo(action) {
        let paragraphEl = document.createElement('p');

        if (action === 'Driving' || action === 'Reversing') {
            paragraphEl.textContent = action;
            this.main.appendChild(paragraphEl);
        } else {
            paragraphEl.textContent = `The Bike's price is $${this.price}, maximum speed is ${this.max_speed}, the total miles driven is ${this.miles}`;
            this.main.appendChild(paragraphEl);
        }

        return this;
    }

    drive() {
        this.miles += 10;
        this.displayInfo("Driving");
        return this;
    }

    reverse() {
        if (this.miles > 0) {
            this.miles -= 5;
        }
        this.displayInfo("Reversing");
        return this;
    }
}

let bike1 = new Bike(500, 40);
bike1.drive().drive().drive().reverse().displayInfo();

let bike2 = new Bike(1000, 80);
bike2.drive().drive().reverse().reverse().displayInfo();

let bike3 = new Bike(1500, 120);
bike3.reverse().reverse().reverse().displayInfo();
