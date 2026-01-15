// keyof in TypeScript

// keyof is a type operator that returns a union of the property names of an object type.

// Example 1: keyof with an object type
interface Person {
    name: string;
    age: number;
    email: string;
}

type PersonKeys = keyof Person;
// PersonKeys is equivalent to:
// "name" | "age" | "email"

let personKeys: PersonKeys = "name";
console.log(personKeys); // Output: "name"

// Example 2: keyof with a type alias
type User = {
    id: number;
    name: string;
    email: string;
};

type UserKeys = keyof User;
// UserKeys is equivalent to:
// "id" | "name" | "email"

let userKeys: UserKeys = "email";
console.log(userKeys); // Output: "email"

// Example 3: keyof with a class
class Car {
    make: string;
    model: string;
    year: number;
}

type CarKeys = keyof Car;
// CarKeys is equivalent to:
// "make" | "model" | "year"

let carKeys: CarKeys = "model";
console.log(carKeys); // Output: "model"

// Example 4: keyof with a generic type
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let person = { name: "John", age: 30, email: "john@example.com" };
let name = getProperty(person, "name");
console.log(name); // Output: "John"

// Example 5: keyof with a mapped type
type MappedType<T> = {
    [P in keyof T]: T[P];
};

let mappedPerson: MappedType<Person> = { name: "John", age: 30, email: "john@example.com" };
console.log(mappedPerson); // Output: { name: "John", age: 30, email: "john@example.com" }

// **Key Points:**

// 1. keyof returns a union of the property names of an object type.
// 2. keyof can be used with object types, type aliases, and classes.
// 3. keyof is useful for creating generic types and mapped types.