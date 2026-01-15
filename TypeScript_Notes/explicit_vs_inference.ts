// Explicit Types vs Inference

// Explicit Types
// Explicitly defining the type of a variable
let name: string = "John"; // explicit type: string
let age: number = 30; // explicit type: number

// Inference
// Let TypeScript infer the type of a variable
let city = "New York"; // inferred type: string
let country = "USA"; // inferred type: string

// Example 1: Explicit Type
let explicitName: string = "John";
console.log(explicitName); // Output: John

// Example 2: Inference
let inferredName = "Jane";
console.log(inferredName); // Output: Jane

// Example 3: Explicit Type with Array
let explicitNumbers: number[] = [1, 2, 3];
console.log(explicitNumbers); // Output: [1, 2, 3]

// Example 4: Inference with Array
let inferredNumbers = [1, 2, 3];
console.log(inferredNumbers); // Output: [1, 2, 3]

// Example 5: Explicit Type with Object
let explicit implicitPerson: { name: string; age: number } = { name: "John", age: 30 };
console.log(explicitPerson); // Output: { name: "John", age: 30 }

// Example 6: Inference with Object
let inferredPerson = { name: "Jane", age: 25 };
console.log(inferredPerson); // Output: { name: "Jane", age: 25 }

// Benefits of Explicit Types
// 1. Readability: Explicit types make the code more readable.
// 2. Maintainability: Explicit types make it easier to maintain the code.
// 3. Error Prevention: Explicit types help prevent type-related errors.

// Benefits of Inference
// 1. Conciseness: Inference makes the code more concise.
// 2. Flexibility: Inference allows for more flexibility in coding.

// Best Practices
// 1. Use explicit types for function parameters and return types.
// 2. Use inference for local variables and constants.
// 3. Use explicit types for complex data types (e.g., objects, arrays).