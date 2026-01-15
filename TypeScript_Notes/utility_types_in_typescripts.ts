// Utility Types in TypeScript

// Utility types are a set of built-in types that provide a way to manipulate and transform existing types.

// Partial<T>
interface User {
    name: string;
    age: number;
    email: string;
}

type PartialUser = Partial<User>;
// PartialUser is equivalent to:
// {
//     name?: string;
//     age?: number;
//     email?: string;
// }

let partialUser: PartialUser = { name: "John" };
console.log(partialUser); // Output: { name: "John" }

// Required<T>
type RequiredUser = Required<PartialUser>;
// RequiredUser is equivalent to:
// {
//     name: string;
//     age: number;
//     email: string;
// }

let requiredUser: RequiredUser = { name: "John", age: 30, email: "john@example.com" };
console.log(requiredUser); // Output: { name: "John", age: 30, email: "john@example.com" }

// Readonly<T>
type ReadonlyUser = Readonly<User>;
// ReadonlyUser is equivalent to:
// {
//     readonly name: string;
//     readonly age: number;
//     readonly email: string;
// }

let readonlyUser: ReadonlyUser = { name: "John", age: 30, email: "john@example.com" };
// readonlyUser.name = "Jane"; // Error: Cannot assign to read only property 'name' of type 'ReadonlyUser'.

// Record<K, T>
type Dictionary = Record<string, number>;
// Dictionary is equivalent to:
// {
//     [key: string]: number;
// }

let dictionary: Dictionary = { a: 1, b: 2, c: 3 };
console.log(dictionary); // Output: { a: 1, b: 2, c: 3 }

// Pick<T, K>
type UserName = Pick<User, "name">;
// UserName is equivalent to:
// {
//     name: string;
// }

let userName: UserName = { name: "John" };
console.log(userName); // Output: { name: "John" }

// Omit<T, K>
type UserWithoutEmail = Omit<User, "email">;
// UserWithoutEmail is equivalent to:
// {
//     name: string;
//     age: number;
// }

let userWithoutEmail: UserWithoutEmail = { name: "John", age: 30 };
console.log(userWithoutEmail); // Output: { name: "John", age: 30 }

// Exclude<T, U>
type StringOrNumber = string | number;
type OnlyString = Exclude<StringOrNumber, number>;
// OnlyString is equivalent to:
// string

let onlyString: OnlyString = "hello";
console.log(onlyString); // Output: "hello"

// Extract<T, U>
type OnlyNumber = Extract<StringOrNumber, number>;
// OnlyNumber is equivalent to:
// number

let onlyNumber: OnlyNumber = 123;
console.log(onlyNumber); // Output: 123

// NonNullable<T>
type NullableString = string | null | undefined;
type NonNullableString = NonNullable<NullableString>;
// NonNullableString is equivalent to:
// string

let nonNullableString: NonNullableString = "hello";
console.log(nonNullableString); // Output: "hello"

// ReturnType<T>
function greet(name: string) {
    return `Hello, ${name}!`;
}

type GreetReturnType = ReturnType<typeof greet>;
// GreetReturnType is equivalent to:
// string

let greetReturnType: GreetReturnType = "Hello, John!";
console.log(greetReturnType); // Output: "Hello, John!"

// InstanceType<T>
class UserClass {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

type UserInstance = InstanceType<typeof UserClass>;
// UserInstance is equivalent to:
// UserClass

let userInstance: UserInstance = new UserClass("John");
console.log(userInstance); // Output: UserClass { name: "John" }

// **Key Points:**

// 1. Utility types are a set of built-in types that provide a way to manipulate and transform existing types.
// 2. They are used to create new types from existing types.
// 3. They are useful for creating reusable and flexible types.