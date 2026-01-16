// Types in TypeScript
// Types are a way to define the structure of data in TypeScript.
// Built-in Types
// string, number, boolean, null, undefined, symbol, bigint, any, void
let name: string = "John";
let age: number = 30;
let isAdmin: boolean = true;
// Array Types
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
// Tuple Types
let person: [string, number] = ["John", 30];
// Enum Types
enum Color { Red, Green, Blue }
let color: Color = Color.Green;
// Any Type
let data: any = "hello";
data = 123; // no error
// Void Type
function sayHello(): void {
console.log("Hello");
}
// Null and Undefined Types
let n: null = null;
let u: undefined = undefined;
// Never Type
function error(): never {
throw new Error("Error");
}
// Type Aliases
type StringOrNumber = string | number;
let id: StringOrNumber = "123";
// Union Types
let status: string | number = "active";
status = 1;
// Intersection Types
interface A { a: number }
interface B { b: number }
let obj: A & B = { a: 1, b: 2 };
// Type Guards
function isString(x: any): x is string {
return typeof x === "string";
}
if (isString(data)) {
console.log(data.length);
}
// Key Points:
// 1. Types help catch errors at compile-time.
// 2. Use type annotations to define the type of a variable.
// 3. Use union types to combine multiple types.
// 4. Use intersection types to combine multiple interfaces.
// 5. Use type guards to narrow the type of a value. 