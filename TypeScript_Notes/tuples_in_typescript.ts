// Tuples in TypeScript

// A tuple is a type of array that has a fixed number of elements, and each element has a specific type.
// Tuples are useful when you want to store a small, fixed number of values of different types.

// Declaring a Tuple
let person: [string, number] = ["John", 30]; // tuple with string and number

// Accessing Tuple Elements
console.log(person[0]); // Output: John
console.log(person[1]); // Output: 30

// Tuple with More Than Two Elements
let student: [string, number, boolean] = ["Jane", 20, true];
console.log(student); // Output: ["Jane", 20, true]

// Tuple with Optional Elements
let employee: [string, number, string?] = ["John", 30];
console.log(employee); // Output: ["John", 30]

// Tuple with Rest Elements
let numbers: [number, ...number[]] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Destructuring Tuples
let [name, age] = person;
console.log(name); // Output: John
console.log(age); // Output: 30

// Using Tuples as Function Parameters
function greet([name, age]: [string, number]) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}
greet(["John", 30]); // Output: Hello, my name is John and I am 30 years old.

// Using Tuples as Function Return Types
function getPerson(): [string, number] {
    return ["Jane", 20];
}
let person1 = getPerson();
console.log(person1); // Output: ["Jane", 20]

// Tuple Methods
// 1. length: returns the number of elements in a tuple
console.log(person.length); // Output: 2

// 2. push(): adds one or more elements to the end of a tuple
person.push(40);
console.log(person); // Output: ["John", 30, 40]

// 3. pop(): removes the last element from a tuple
let lastElement = person.pop();
console.log(lastElement); // Output: 40
console.log(person); // Output: ["John", 30]

// 4. concat(): returns a new tuple that is a concatenation of two or more tuples
let person2: [string, number] = ["Jane", 20];
let combined = person.concat(person2);
console.log(combined); // Output: ["John", 30, "Jane", 20]

// Tuple vs Array
// 1. Tuples have a fixed number of elements, while arrays can have any number of elements.
// 2. Tuples have specific types for each element, while arrays have a single type for all elements.
// 3. Tuples are more efficient than arrays because they have a fixed size.

// When to Use Tuples
// 1. When you want to store a small, fixed number of values of one type.
// 2. When you want to ensure that a function returns a specific type of data.
// 3. When you want to use a data structure that is more efficient than an array.