let firstName: string = "Pearce";
let age: number = 25;

// Let's make a function that takes in a string and returns 
// that string but in all uppercase

// input: string
// output: string

function uppercaseString(str: string): string {
    return str.toUpperCase();
}

let uppercaseName: string = uppercaseString(firstName);
console.log(uppercaseName);

// Now that we have covered a bit about basic data types and functions,
// let's talk a little bit about arrays

let stringArray: string[] = ["kayla", "david", "nick"];
stringArray.push(firstName);
console.log(stringArray);

// This converts the file into ES module
// All we really need to know for now is that it just gets of some of
// annoying "redeclaring" warnings we are getting from TypeScript
export { };