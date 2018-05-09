var firstName = "Arthur";
const states = 50;
var Sum1 = 5 + 4
var firstLetter = firstName.charCodeAt(0);

console.log(firstLetter)

function spotInLine () {
    if (firstLetter >= 76) {
        alert ("Back of the Line!")
} else { 
    alert ("Next!") }
} 
// If the person's first name begins with a letter after L, then the function will say "Back of the line!". Otherwise it will say "Next!"

function sayHello () {
    alert ("Hello World!")
}

function checkAge (age, name) {
    if (age < 21) {
        alert(`Sorry ${name}, you aren't old enough to view this page!`);
    }
}

let people = [
    {
        name: 'Penny'
        age: 17
    }
    {
        name: 'Ben'
        age: 18
    }
    {
        name: 'Charles'
        age: 27
    }
    {
        name: 'Nathan'
        age: 21
    }
]
for (let i=0; i < people.length; i++) {
    
}