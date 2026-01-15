// Type Aliases and Interfaces in TypeScript

// Type Aliases
// Type aliases are used to give a new name to an existing type.
// They are useful when you want to create a shortcut for a longer type or make your code more readable.

// Declaring a Type Alias
type StringOrNumber = string | number;
let id: StringOrNumber = "123";
console.log(id); // Output: "123"
id = 456;
console.log(id); // Output: 456

// Type Alias with Intersection Types
type A = { a: string };
type B = { b: string };
type Intersection = A & B;
let intersection: Intersection = { a: "a", b: "b" };
console.log(intersection); // Output: { a: "a", b: "b" }

// Type Alias with Union Types
type Union = string | number;
let union: Union = "hello";
console.log(union); // Output: "hello"
union = 123;
console.log(union); // Output: 123

// Interfaces
// Interfaces are used to define a blueprint of an object.
// They are useful when you want to define a contract that must be implemented by any object that implements it.

// Declaring an Interface
interface Person {
    name: string;
    age: number;
}
let person: Person = { name: "John", age: 30 };
console.log(person); // Output: { name: "John", age: 30 }

// Interface with Optional Properties
interface Employee {
    name: string;
    age: number;
    department?: string;
}
let employee: Employee = { name: "Jane", age: 25 };
console.log(employee); // Output: { name: "Jane", age: 25 }

// Interface with Methods
interface Calculator {
    add(a: number, b: number): number;
}
let calculator: Calculator = {
    add: (a, b) => a + b,
};
console.log(calculator.add(2, 3)); // Output: 5

// Interface with Index Signature
interface Dictionary {
    [key: string]: string;
}
let dictionary: Dictionary = { hello: "world" };
console.log(dictionary); // Output: { hello: "world" }

// Interface with Extends
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}
let dog: Dog = { name: "Fido", breed: "Golden Retriever" };
console.log(dog); // Output: { name: "Fido", breed: "Golden Retriever" }

// Key Differences between Type Aliases and Interfaces
// 1. Type aliases are simply a new name for an existing type, while interfaces define a new type.
// 2. Type aliases are more flexible and can be used with union and intersection types, while interfaces are more restrictive.
// 3. Interfaces can be extended using the "extends" keyword, while type aliases cannot.
// 4. Interfaces are more commonly used for object types, while type aliases are more commonly used for union and intersection types.