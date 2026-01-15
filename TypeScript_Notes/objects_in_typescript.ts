// Object Types in TypeScript

// Object types are used to describe the shape of an object.
// They define the properties, methods, and their types that an object can have.

// Declaring an Object Type
let person: { name: string; age: number } = {
    name: "John",
    age: 30,
};

// Accessing Object Properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

// Object Type with Optional Properties
let employee: { name: string; age: number; department?: string } = {
    name: "Jane",
    age: 25,
};
console.log(employee); // Output: { name: "Jane", age: 25 }

// Object Type with Index Signature
let scores: { [key: string]: number } = {
    math: 90,
    science: 85,
};
console.log(scores); // Output: { math: 90, science: 85 }

// Object Type with Methods
let calculator: { add: (a: number, b: number) => number } = {
    add: (a, b) => a + b,
};
console.log(calculator.add(2, 3)); // Output: 5

// Object Type with Nested Objects
let company: { name: string; address: { street: string; city: string } } = {
    name: "ABC Inc.",
    address: {
        street: "123 Main St",
        city: "New York",
    },
};
console.log(company); // Output: { name: "ABC Inc.", address: { street: "123 Main St", city: "New York" } }

// Object Type with Array Properties
let student: { name: string; grades: number[] } = {
    name: "John",
    grades: [90, 85, 95],
};
console.log(student); // Output: { name: "John", grades: [90, 85, 95] }

// Object Type with Union Types
let product: { name: string; price: number | string } = {
    name: "Laptop",
    price: 1000,
};
console.log(product); // Output: { name: "Laptop", price: 1000 }

// Object Type with Intersection Types
interface A { a: string }
interface B { b: string }
let intersection: A & B = { a: "a", b: "b" };
console.log(intersection); // Output: { a: "a", b: "b" }

// Object Type with Type Aliases
type Person = { name: string; age: number };
let person1: Person = { name: "John", age: 30 };
console.log(person1); // Output: { name: "John", age: 30 }

// Object Type with Interfaces
interface Employee { name: string; age: number }
let employee1: Employee = { name: "Jane", age: 25 };
console.log(employee1); // Output: { name: "Jane", age: 25 }

// Object Type with Classes
class PersonClass { name: string; age: number }
let person2 = new PersonClass();
person2.name = "John";
person2.age = 30;
console.log.name = "John";
person2.age = 30;
console.log(person2); // Output: PersonClass { name: "John", age: 30 }