/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';

let Person = 'jonas';
let PI = 3.1415;


let myFirstJob = 'PMO';
let myCurrentJob = 'Programmer';
// instead of 
let job1 = 'PMO';
let job2 = 'Programmer';

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
* /

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

const job;

var job = "PMO"
job = "coder"
*/

/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 => means 2 do potęgi 3 = 2 * 2 * 2

const firstName = "Mateuszek";
const lastName = "Lipowicz";
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 
x--; // x = x - 1
x--; // 
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
* /

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = "Polly";
const job = "PMO";
const birthYear = 1997;
const year = 2023;

const polly = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(polly);

const pollyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(pollyNew);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 😎`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😇`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log("I'm " + 23 + " years old")
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all 🤑");
} else {
    console.log("You should get a job! 🤬");
}

let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}
*/

/*
const age = "18";
if (age === 18) console.log("You became an adudlt!"); // strict

if (age == 18) console.log("You became an adudlt!"); // loose

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 23 === 23 => TRUE
    console.log("Cool! xD");
} else if (favourite === 7) {
    console.log("7 is also cool...")
} else {
    console.log("Nubmer in not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive.");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive.");
} else {
    console.log("Someone else should drive...");
}
*/

/*
let day = "default";

switch (day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day!");
}

if (day === "monday") {
    console.log("Plan course structure");
} else if (day === "tuesday") {
    console.log("Prepare videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day!");
}
*/

/*
const age = 23;
age >= 18 ? console.log("I like wine") : console.log("I like water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);
*/

