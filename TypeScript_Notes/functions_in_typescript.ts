// Functions in TypeScript

// Functions are reusable blocks of code that perform a specific task.
// They are a fundamental concept in programming.

// Declaring a Function
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}
greet("John"); // Output: Hello, John!

// Function with Return Type
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

// Function with Optional Parameters
function greetOptional(name: string, age?: number) {
    if (age) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greetOptional("John", 30); // Output: Hello, John! You are 30 years old.
greetOptional("Jane"); // Output: Hello, Jane!

// Function with Default Parameters
function greetDefault(name: string, age: number = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetDefault("John", 30); // Output: Hello, John! You are 30 years old.
greetDefault("Jane"); // Output: Hello, Jane! You are 25 years old.

// Function with Rest Parameters
function sum(...numbers: number[]) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Function with Arrow Syntax
const greetArrow = (name: string) => console.log(`Hello, ${name}!`);
greetArrow("John"); // Output: Hello, John!

// Function with Type Alias
type GreetFunction = (name: string) => void;
const greetTypeAlias: GreetFunction = (name) => console.log(`Hello, ${name}!`);
greetTypeAlias("John"); // Output: Hello, John!

// Function with Interface
interface GreetInterface {
    (name: string): void;
}
const greetInterface: GreetInterface = (name) => console.log(`Hello, ${name}!`);
greetInterface("John"); // Output: Hello, John!

// Function Overloading
function greetOverload(name: string): void;
function greetOverload(name: string, age: number): void;
function greetOverload(name: string, age?: number) {
    if (age) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greetOverload("John"); // Output: Hello, John!
greetOverload("Jane", 30); // Output: Hello, Jane! You are 30 years old.

// **Key Points:**

// 1. Functions are declared using the `function` keyword.
// 2. Functions can have return types, optional parameters, default parameters, and rest parameters.
// 3. Functions can be declared using arrow syntax.
// 4. Functions can be typed using type aliases and interfaces.
// 5. Function overloading allows multiple function signatures with the same name.