'use strict';
/*
function logger() {
    console.log("My name is Polly");
}

// calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// FUNCTION DECLARATION
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
const age1 = calcAge1(1991);
console.log(age1);

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
// ARROW FUNCTION
const caclAge3 = birthYear => 2037 - birthYear;
const age3 = caclAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years...`;
}
console.log(yearsUntilRetirement(1991, "Bob"));
console.log(yearsUntilRetirement(1997, "Matek"));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/


/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
    // return `${firstName} retires in ${retirement} years...`;
}
console.log(yearsUntilRetirement(1991, "Bob"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/
/*
const friend1 = "Mati";
const friend2 = "Ola";
const friend3 = "Przemek";

const friends = ["Mati", "Ola", "Przemek"];
console.log(friends);

// const years = new Array(1991, 1971, 1978);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // length -> właściwość
console.log(friends[friends.length - 1])

friends[2] = "Kinga";
console.log(friends);

const paula = ["Paula", "Wroclaw", 2023 - 1997, "PMO", friends];
console.log(paula);


/// EXERCISE
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
/*
const friends = ["Mati", "Ola", "Przemek"];
const newLength = friends.push("Kinga");
console.log(friends);
console.log(newLength);

friends.unshift("Iza");
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Mati"));

console.log(friends.includes("Mati"));
console.log(friends.includes("Kinga"));

if (friends.includes("Mati")) {
    console.log("You have a friend");
}
*/

/*
const paula = {
    firstName: "Paula", // klucz jest nazwą zmiennej
    lastName: "Lipowicz",
    age: 2037 - 1997, // mozemy tu wpisać dowolna wartość
    job: "PMO",
    friends: ["Mati", "Ola", "Przemek"] // tablica
};

console.log(paula.lastName);
console.log(paula["lastName"]);

const nameKey = "Name";
console.log(paula["first" + nameKey]);
console.log(paula["last" + nameKey]);

const interestedIn = prompt("What do you want to know? Choose a category.");

if (paula[interestedIn]) {
    console.log(paula[interestedIn]);
} else {
    console.log("Wrong request! Choose a category.");
};

paula.location = "Wrocław";
paula["love"] = "Matek";
console.log(paula);

// CHALLENGE //
// Paula has 3 friends, and her best friend is called Mati.
console.log(`${paula.firstName} has ${paula.friends.length} friends, and her best friend is called ${paula.friends[0]}`);
*/

/*
const paula = {
    firstName: "Paula",
    lastName: "Lipowicz",
    birthYear: 1997,
    job: "PMO",
    friends: ["Mati", "Ola", "Przemek"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()}-year old ${this.job} and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
    }
};
console.log(paula.calcAge())
console.log(paula.age);

// CHALLENGE
// "Paula is 40-year old PMO and she has a driver's license."

console.log(paula.getSummary());
*/

// console.log("Lifting weights repetition 1.");

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

/*
const paulaArray = [
    "Paula",
    "Lipowicz",
    2037 - 1997,
    "PMO",
    ["Mati", "Ola", "Przemek"],
    true
];

// const types = [];

// for (let i = 0; i < paulaArray.length; i++) {
//     console.log(paulaArray[i], typeof paulaArray[i]);

//     types[i] = typeof paulaArray[i];
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < paulaArray.length; i++) {
    if (typeof paulaArray[i] !== "string") continue;

    console.log(paulaArray[i], typeof paulaArray[i]);
}


console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < paulaArray.length; i++) {
    if (typeof paulaArray[i] === "number") break;

    console.log(paulaArray[i], typeof paulaArray[i]);
}


const paulaArray = [
    "Paula",
    "Lipowicz",
    2037 - 1997,
    "PMO",
    ["Mati", "Ola", "Przemek"]
];

for (let i = paulaArray.length - 1; i >= 0; i--) {
    console.log(paulaArray[i]);
}


for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----- Starting Exercise ${exercise} -----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}.`)
    }
}



// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end...");
}
*/


