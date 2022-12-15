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
