class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}!`
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.home) {
            greeting += ` I'm visting from ${this.home}!`
        }

        return greeting;
    }
}

const me = new Traveller("Andrew Hearse", 61, "Alton, UK");
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());