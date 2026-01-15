// Types in TypeScript

// 1. Basic Types
let name: string = "John"; // string type
let age: number = 30; // number type
let isAdmin: boolean = true; // boolean type
let nullValue: null = null; // null type
let undefinedValue: undefined = undefined; // undefined type

// 2. Array Type
let numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
let strings: string[] = ["a", "b", "c"]; // array of strings

// 3. Tuple Type
let person: [string, number] = ["John", 30]; // tuple with string and number

// 4. Enum Type
enum Color { Red, Green, Blue }
let color: Color = Color.Green; // enum type

// 5. Any Type
let data: any = "Hello"; // any type (can be any type)
data = 123; // can be reassigned to any type

// 6. Void Type
function greet(): void {
    console.log("Hello"); // void type (no return value)
}

// 7. Never Type
function error(): never {
    throw new Error("Error"); // never type (never returns)
}

// 8. Object Type
let obj: object = { name: "John", age: 30 }; // object type

// 9. Union Type
let id: string | number = "123"; // union type (string or number)

// 10. Type Aliases
type StringOrNumber = string | number;
let value: StringOrNumber = "Hello"; // type alias

// 11. Null and Undefined Types
let nullableString: string | null = null; // null type
let optionalString: string | undefined = undefined; // undefined type

// 12. Literal Types
let literalString: "hello" = "hello"; // literal type (only "hello" is allowed)