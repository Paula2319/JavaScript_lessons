/* Values and Variables
let countryName = "Poland";
console.log(countryName);

let continentName = "Europe"
console.log(continentName);

let population = "37,75 mln"
console.log(population);
*/

/*
let isIsland = false;
let language;
console.log(typeof isIsland); // boolean
console.log(typeof population); // undefined
console.log(typeof country); // undefined
console.log(typeof language); // undefined
*/

/*
const country = "Poland";
const continent = "Europe";
let population = 38_000_000;
const language = "Polish";

population = 22_000_000;
console.log(population)
*/

////////////////////////////////////////////////////////////
// CODING CHALLENGE #1

/*
Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / (height * height)(mass in kg and height in meters).

1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
2. Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
3. Log the value of BMIMark and BMIJohn to the console.

    BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John.Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall.John weighs 92 kg and is 1.95 m tall.

///// SOLUTION /////
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heighJohn = 1.95;

// BMIMark
const BMIMark = massMark / (heightMark * heightMark);

// BMIJohn
const BMIJohn = massJohn / (heighJohn * heighJohn);

console.log(BMIMark);
console.log(BMIJohn);

const markHigherBMI = (BMIMark > BMIJohn);
console.log(markHigherBMI);
*/


////////////////////////////////////////////////////
// CODING CHALLENGE #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
Note: Don't round the BMI values. Leave them as they are.

/// SOLUTION ///
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
const higherBMI = (`Mark's BMI is higher than John's!`);
console.log(higherBMI);

const higherBMINew = (`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
console.log(higherBMINew);

// LUB
console.log(`Mark's BMI is higher than John's!`);

console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`John'sBMI is higher than Mark's!`);
}
*/


//////////////////////////////////////////
// CODING CHALLENGE #3
/*
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
2. Compare the team's average scores to determine the winner of the competition, and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

/// SOLUTION ///
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}
*/

////////////////////////////////////////////////////////////
// CODING CHALLENGE #4
/*
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.
Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
TEST DATA: Test with different bill values: 275, 40, and 430


const bill = 275
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);


if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15
    console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
} else {
    tip = bill * 0.2
    console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
}
*/



