var Person = /** @class */ (function () {
    // THEN, we can create our constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
// Now we have created this Person class, let's create a new Person object
var pearce = new Person("Pearce", 25);
console.log(pearce);
