
// TypeScript Arrays

// Arrays in TypeScript are a collection of values of the same data type.
// They are a type of object that has a length property and methods for manipulating the array.

// Declaring an Array
let numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
let strings: string[] = ["a", "b", "c"]; // array of strings

// Using the Array Type
let mixed: (string | number)[] = [1, "a", 2, "b"]; // array of mixed types

// Using the Generic Array Type
let numbersArray: Array<number> = [1, 2, 3, 4, 5]; // generic array type

// Array Methods
// 1. push(): adds one or more elements to the end of an array
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// 2. pop(): removes the last element from an array
let lastNumber = numbers.pop();
console.log(lastNumber); // Output: 6
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// 3. shift(): removes the first element from an array
let firstNumber = numbers.shift();
console.log(firstNumber); // Output: 1
console.log(numbers); // Output: [2, 3, 4, 5]

// 4. unshift(): adds one or more elements to the beginning of an array
numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// 5. splice(): adds or removes elements from an array
numbers.splice(2, 1, 10);
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// 6. slice(): returns a shallow copy of a portion of an array
let slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers); // Output: [2, 10]

// 7. forEach(): calls a function for each element in an array
numbers.forEach((num) => console.log(num));
// Output: 1, 2, 10, 4, 5

// 8. map(): returns a new array with the results of applying a function to each element in an array
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 20, 8, 10]

// 9. filter(): returns a new array with the elements that pass a test
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 10]

// 10. reduce(): applies a function to each element in an array and returns a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 22

// Multidimensional Arrays
let matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Array Destructuring
let [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [10, 4, 5]