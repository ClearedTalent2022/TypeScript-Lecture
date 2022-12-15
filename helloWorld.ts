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

export { };