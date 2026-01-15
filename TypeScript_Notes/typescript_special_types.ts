// TypeScript Special Types

// 1. Any Type
// The any type is a type that represents any JavaScript value.
// It's a way to opt-out of type checking for a particular variable or expression.
let data: any = "Hello"; // any type (can be any type)
data = 123; // can be reassigned to any type
console.log(data); // Output: 123

// Use cases:
// - When you're working with legacy JavaScript code and don't want to type everything.
// - When you're working with third-party libraries that don't have type definitions.

// 2. Unknown Type
// The unknown type is a type-safe alternative to any.
// It's a type that represents any value, but it's more restrictive than any.
let unknownData: unknown = "Hello"; // unknown type (can be any type, but safer than any)
if (typeof unknownData === "string") {
    console.log(unknownData); // Output: Hello
}

// Use cases:
// - When you're working with data that you don't know the type of.
// - When you want to ensure type safety without using any.

// 3. Never Type
// The never type is a type that represents a value that never Never Type.
// It's a type that represents a value that never occurs.
function error(): never {
    throw new Error("Error"); // never type: never
}

// Use cases:
// - When a function throws an exception.
// - When a function has an infinite loop.

// 4. Void Type
// The void type is a type that represents the absence of a return value.
// It's a type that represents a function that doesn't return a value.
function greet(): void {
    console.log("Hello"); // void type (no return value)
}

// Use cases:
// - When a function doesn't return a value.
// - When a function has a side effect.

// 5. Null and Undefined Types
// The null and undefined types are types that represent the absence of a value.
let nullableString: string | null = null; // null type
let optionalString: string | undefined = undefined; // undefined type

// Use cases:
// - When a variable or property can be null or undefined.
// - When a function can return null or undefined.

// 6. Object Type
// The object type is a type that represents any non-primitive value.
let obj: object = { name: "John", age: 30 }; // object type

// Use cases:
// - When working with objects.
// - When working with arrays.

// 7. Tuple Type
// The tuple type is a type that represents an array with a fixed number of elements.
let person: [string, number] = ["John", 30]; // tuple with string and number

// Use cases:
// - When working with arrays with a fixed structure.
// - When working with CSV data.

// 8. Union Type
// The union type is a type that represents a value that can be one of several types.
let id: string | number = "123"; // union type (string or number)

// Use cases:
// - When working with values that can be one of several types.
// - When working with APIs that return different types.

// 9. Intersection Type
// The intersection type is a type that represents a value that is a combination of several types.
interface A { a: string }
interface B { b: string }
let intersection: A & B = { a: "a", b: "b" }; // intersection type (A and B)

// Use cases:
// - When working with objects that have multiple interfaces.
// - When working with APIs that require multiple types.

// 10. Type Aliases
// Type aliases are a way to give a new name to an existing type.
type StringOrNumber = string | number;
let value: StringOrNumber = "Hello"; // type alias

// Use cases:
// - When working with complex types.
// - When working with types that have a long name.

// 11. Literal Types
// Literal types are a way to restrict a type to a specific value.
let literalString: "hello" = "hello"; // literal type (only "hello" is allowed)

// Use cases:
// - When working with values that have a specific format.
// - When working with APIs that require specific values.

// 12. Indexed Access Types
// Indexed access types are a way to access a type using an index.
interface Person { name: string; age: number }
type Age = Person["age"]; // indexed access type (type of age property)

// Use cases:
// - When working with objects.
// - When working with APIs that return objects.

// 13. Mapped Types
// Mapped types are a way to create a new type by transforming an existing type.
interface Person { name: string; age: number }
type ReadonlyPerson = { readonly [P in keyof Person]: Person[P] }; // mapped type (readonly properties)

// Use cases:
// - When working with objects.
// - When working with APIs that require transformed types.

// 14. Conditional Types
// Conditional types are a way to create a type that depends on a condition.
type IsString<T> = T extends string ? true : false;
type IsStringResult = IsString<string>; // conditional type (true)

// Use cases:
// - When working with types that depend on a condition.
// - When working with APIs that require conditional types.

// 15. Template Literal Types
// Template literal types are a way to create a type using a template string.
type Color = "red" | "green" | "blue";
type ColorString = `color-${Color}`; // template literal type (e.g., "color-red")

// Use cases:
// - When working with strings that have a specific format.
// - When working with APIs that require template strings.