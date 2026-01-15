// Casting in TypeScript

// Casting is the process of converting a value from one type to another.
// In TypeScript, there are two types of casting: implicit and explicit.

// Implicit Casting
let num: number = 5;
let str: string = num as any as string; // implicit casting
console.log(str); // Output: "5"

// Explicit Casting
let num2: number = 5;
let str2: string = String(num2); // explicit casting
console.log(str2); // Output: "5"

// Using the 'as' Keyword
let unknownValue: unknown = "hello";
let str3: string = unknownValue as string;
console.log(str3); // Output: "hello"

// Using the '<>' Syntax
let unknownValue2: unknown = "hello";
let str4: string = <string>unknownValue2;
console.log(str4); // Output: "hello"

// Casting with Type Aliases
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
let str5: string = value as string;
console.log(str5); // Output: "hello"

// Casting with Interfaces
interface A { a: string }
interface B { b: number }
let value2: A | B = { a: "a" };
let a: A = value2 as A;
console.log(a); // Output: { a: "a" }

// Casting with Classes
class Animal { name: string }
class Dog extends Animal { breed: string }
let dog: Dog = new Dog();
let animal: Animal = dog as Animal;
console.log(animal); // Output: Dog { name: undefined, breed: undefined }

// **Key Points:**

* Casting is used to convert a value from one type to another.
* There are two types of casting: implicit and explicit.
* The `as` keyword is used for explicit casting.
* The `<>` syntax is used for explicit casting.
* Casting can be used with type aliases, interfaces, and classes.