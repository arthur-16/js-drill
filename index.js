var firstName = "Arthur";
const states = 50;
var Sum1 = 5 + 4
var firstLetter = firstName.charCodeAt(0);

console.log(firstLetter)

function spotInLine() {
    if (firstLetter >= 76) {
        alert("Back of the Line!")
    } else {
        alert("Next!")
    }
}
// If the person's first name begins with a letter after L, then the function will say "Back of the line!". Otherwise it will say "Next!"

function sayHello() {
    alert("Hello World!")
}

function checkAge(age, name) {
    if (age < 21) {
        console.log(`Sorry ${name}, you aren't old enough to view this page!`);
    }
}

let people = [
    {
        name: 'Penny',
        age: 17,
    },
    {
        name: 'Ben',
        age: 18,
    },
    {
        name: 'Charles',
        age: 27,
    },
    {
        name: 'Nathan',
        age: 21,
    },
];



for (let i = 0; i < people.length; i++) {
    let person = people[i];
    checkAge(person.age, person.name);
}


var veggies = ["Cabbage", "Greens", "Carrots", "Broccoli"]
function checkVeggies() {
    for (let i = 0; i < veggies.length; i++) {
        console.log(veggies[i]);
    }
} checkVeggies()

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
        return false;
} 
console.log(isEven(7))


function getlength(word) {
    if (isEven(word.length)) {
        console.log("The world is nice and even!")
    }
    else {
        console.log("The world is an odd place!")
    }
}
getlength('Nathaniel')
