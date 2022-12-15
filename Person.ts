class Person {
    // First we declare any properties that are apart of this class
    // along with their types
    name: string;
    age: number;

    // THEN, we can create our constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// Now we have created this Person class, let's create a new Person object
let pearce: Person = new Person("Pearce", 25);
console.log(pearce);

// This converts the file into ES module
// All we really need to know for now is that it just gets of some of
// annoying "redeclaring" warnings we are getting from TypeScript
export { };