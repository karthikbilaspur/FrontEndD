// Generics in TypeScript

// Generics are a way to create reusable functions, classes, and interfaces that work with multiple types.

// Generic Function
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("hello")); // Output: "hello"
console.log(identity<number>(123)); // Output: 123

// Generic Class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let stringBox = new Box<string>("hello");
console.log(stringBox.getValue()); // Output: "hello"

let numberBox = new Box<number>(123);
console.log(numberBox.getValue()); // Output: 123

// Generic Interface
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<string, number> = { first: "hello", second: 123 };
console.log(pair); // Output: { first: "hello", second: 123 }

// Generic Type Parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

let obj1 = { a: 1 };
let obj2 = { b: 2 };
console.log(merge(obj1, obj2)); // Output: { a: 1, b: 2 }

// Generic Constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity("hello"); // Output: 5
loggingIdentity([1, 2, 3]); // Output: 3

// Multiple Type Parameters
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

console.log(pair("hello", 123)); // Output: ["hello", 123]

// Default Type Parameters
function createArray<T = string>(length: number, value: T): T[] {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

console.log(createArray(3, "hello")); // Output: ["hello", "hello", "hello"]
console.log(createArray<number>(3, 123)); // Output: [123, 123, 123]

// **Key Points:**

// 1. Generics are declared using angle brackets `<T>`.
// 2. Generics can be used with functions, classes, and interfaces.
// 3. Generic type parameters can be constrained using the `extends` keyword.
// 4. Multiple type parameters can be used.
// 5. Default type parameters can be used.