"use strict";

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Prosecutor extends Person {
    constructor(name, age) {
        super(name, age);
    }

    prosecute(defendant, _case) {
        this.defendant = defendant;
        this._case = _case;

        if (defendant.age >= _case.minAge && defendant.age <= _case.maxAge) {
            _case.verdict = "GUILTY";
        } else {
            _case.verdict = "NOT GUILTY";
        }
    }
}

class Defendant extends Person {
    constructor(name, age) {
        super(name, age);
        this.caseTitle = '';
    }
}

class Case {
    constructor(title, years, months, days, minAge, maxAge) {
        this.title = title;
        this.years = years;
        this.months = months;
        this.days = days;
        this.minAge = minAge;
        this.maxAge = maxAge;
        this.imprisonmentTerm = `${years} years, ${months} months, ${days} days`;
        this.ageLimit = `Between ${minAge} and ${maxAge} years old`;
        this.verdict = '';
    }

    computeReleaseDate() {
        const currentDate = new Date();

        currentDate.setFullYear(currentDate.getFullYear() + this.years);
        currentDate.setMonth(currentDate.getMonth() + this.months);
        currentDate.setDate(currentDate.getDate() + this.days);

        return currentDate.toDateString();
    }
}

class TrialCourt {
    static initiateTrial(defendant, prosecutor) {
        this.defendant = defendant;
        this.prosecutor = prosecutor;
    }

    static getVerdict() {
        const releaseDate = this.defendant._case.computeReleaseDate();

        if (this.defendant._case.verdict === "GUILTY") {
            console.log(`
                Name: ${this.defendant.name}
                Age: ${this.defendant.age} years old
                Case Title: ${this.defendant.caseTitle}
                Filed by: ${this.prosecutor.name}
                Verdict: ${this.defendant._case.verdict}
                Release Date: ${releaseDate}
            `);
        } else {
            console.log(`
                Name: ${this.defendant.name}
                Age: ${this.defendant.age} years old
                Case Title: ${this.defendant.caseTitle}
                Filed by: ${this.prosecutor.name}
                Verdict: ${this.defendant._case.verdict}
            `);
        }
    }
}

let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor = new Prosecutor("John", 30);
let defendant1 = new Defendant("Girlie", 5);
let defendant2 = new Defendant("Onel", 25);

// First defendant
defendant1.caseTitle = case1.title;
defendant1._case = case1;
prosecutor.prosecute(defendant1, case1);
TrialCourt.initiateTrial(defendant1, prosecutor);
TrialCourt.getVerdict();

// Second defendant
defendant2.caseTitle = case1.title;
defendant2._case = case1;
prosecutor.prosecute(defendant2, case1);
TrialCourt.initiateTrial(defendant2, prosecutor);
TrialCourt.getVerdict();
