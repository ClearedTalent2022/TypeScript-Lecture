"use strict";
exports.__esModule = true;
var firstName = "Pearce";
var age = 25;
// Let's make a function that takes in a string and returns 
// that string but in all uppercase
// input: string
// output: string
function uppercaseString(str) {
    return str.toUpperCase();
}
var uppercaseName = uppercaseString(firstName);
console.log(uppercaseName);
// Now that we have covered a bit about basic data types and functions,
// let's talk a little bit about arrays
var stringArray = ["kayla", "david", "nick"];
stringArray.push(firstName);
console.log(stringArray);
