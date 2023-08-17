console.log("Standard for loop")
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const array = [1, 2, 3, 4, 5];

console.log("for...of loop")
for (const element of array) {
    console.log(element);
}

const person = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
};

console.log("for...in loop")
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log("while loop")
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

console.log("do...while loop")
do {
    console.log(i);
    i++;
} while (i < 5);

const score = 85;
console.log("if...else")
if (score >= 90) {
    console.log("You got an A!");
} else {
    console.log("You did not get an A.");
}

console.log("switch statement")

const dayOfWeek = "Wednesday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Wednesday":
        console.log("It's the middle of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's an ordinary day.");
}

console.log("arrow fnc");

const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3)); 
