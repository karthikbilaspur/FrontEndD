// Union Types in TypeScript

// Union types are used to define a type that can be one of multiple types.
// They are useful when you want to specify that a value can be one of several types.

// Declaring a Union Type
let id: string | number = "123";
console.log(id); // Output: "123"
id = 456;
console.log(id); // Output: 456

// Union Type with Multiple Types
let data: string | number | boolean = "hello";
console.log(data); // Output: "hello"
data = 123;
console.log(data); // Output: 123
data = true;
console.log(data); // Output: true

// Union Type with Arrays
let numbers: (string | number)[] = [1, "two", 3, "four"];
console.log(numbers); // Output: [1, "two", 3, "four"]

// Union Type with Objects
let person: { name: string; age: number | string } = {
    name: "John",
    age: 30,
};
console.log(person); // Output: { name: "John", age: 30 }
person.age = "thirty";
console.log(person); // Output: { name: "John", age: "thirty" }

// Union Type with Functions
function greet(name: string | string[]) {
    if (typeof name === "string") {
        console.log(`Hello, ${name}!`);
    } else {
        console.log(`Hello, ${name.join(", ")}!`);
    }
}
greet("John"); // Output: Hello, John!
greet(["John", "Jane", "Bob"]); // Output: Hello, John, Jane, Bob!

// Type Guards
function isString(value: string | number): value is string {
    return typeof value === "string";
}
let value: string | number = "hello";
if (isString(value)) {
    console.log(value.toUpperCase()); // Output: HELLO
}

// Using Union Types with Type Aliases
type StringOrNumber = string | number;
let id1: StringOrNumber = "123";
console.log(id1); // Output: "123"
id1 = 456;
console.log(id1); // Output: 456

// Using Union Types with Interfaces
interface A { a: string }
interface B { b: number }
type Union = A | B;
let union: Union = { a: "a" };
console.log(union); // Output: { a: "a" }
union = { b: 123 };
console.log(union); // Output: { b: 123 }