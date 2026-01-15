// Example 1: Basic Type Annotation
let name: string = "John";
console.log(name); // Output: John

// Example 2: Number Type
let age: number = 30;
console.log(age); // Output: 30

// Example 3: Boolean Type
let isAdmin: boolean = true;
console.log(isAdmin); // Output: true

// Example 4: Array Type
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Example 5: Tuple Type
let person: [string, number] = ["John", 30];
console.log(person); // Output: ["John", 30]

// Example 6: Enum Type
enum Color { Red, Green, Blue }
let color: Color = Color.Green;
console.log(color); // Output: 1

// Example 7: Function Type
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}
greet("John"); // Output: Hello, John!

// Example 8: Class and Interface
interface Person {
    name: string;
    age: number;
}
class Employee implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
let emp = new Employee("John", 30);
console.log(emp); // Output: Employee { name: "John", age: 30 }

// Example 9: Type Inference
let city = "New York"; // inferred type: string
console.log(city); // Output: New York

// Example 10: Union Type
let id: string | number = "123";
console.log(id); // Output: 123
id = 456;
console.log(id); // Output: 456