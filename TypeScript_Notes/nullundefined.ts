// Null and Undefined in TypeScript

// null and undefined are two primitive types in TypeScript that represent the absence of a value.

// null
let nullValue: null = null;
console.log(nullValue); // Output: null

// undefined
let undefinedValue: undefined = undefined;
console.log(undefinedValue); // Output: undefined

// null and undefined are subtypes of all types
let stringValue: string = null; // okay
let numberValue: number = undefined; // okay

// strictNullChecks option
// When strictNullChecks is enabled, null and undefined are not subtypes of other types
// let stringValue: string = null; // error
// let numberValue: number = undefined; // error

// null and undefined can be used as types
type NullOrUndefined = null | undefined;
let value: NullOrUndefined = null;
console.log(value); // Output: null

// null and undefined can be used with the optional chaining operator (?.)
let person = { name: "John" };
let name = person?.name;
console.log(name); // Output: "John"

let address = person?.address?.street;
console.log(address); // Output: undefined

// null and undefined can be used with the nullish coalescing operator (??)
let value1 = null ?? "default";
console.log(value1); // Output: "default"

let value2 = undefined ?? "default";
console.log(value2); // Output: "default"

// **Key Points:**

// 1. null and undefined are primitive types that represent the absence of a value.
// 2. null and undefined are subtypes of all types, but this behavior can be changed with the strictNullChecks option.
// 3. null and undefined can be used as types.
// 4. null and undefined can be used with the optional chaining operator (?.) and the nullish coalescing operator (??).