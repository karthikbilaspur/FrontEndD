// Classes in TypeScript

// Classes are a fundamental concept in object-oriented programming (OOP).
// They are used to define a blueprint for creating objects.

// Declaring a Class
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person = new Person("John", 30);
person.greet(); // Output: Hello, my name is John and I am 30 years old.

// Class Properties
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

let car = new Car("Toyota", "Camry", 2020);
console.log(car.make); // Output: Toyota
console.log(car.model); // Output: Camry
console.log(car.year); // Output: 2020

// Class Methods
class Calculator {
    add(a: number, b: number) {
        return a + b;
    }

    subtract(a: number, b: number) {
        return a - b;
    }
}

let calculator = new Calculator();
console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(5, 2)); // Output: 3

// Class Inheritance
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    sound() {
        console.log("The dog barks.");
    }
}

let dog = new Dog("Max", "Golden Retriever");
dog.sound(); // Output: The dog barks.

// Access Modifiers
class Employee {
    private name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person2 = new Employee("John", 30);
person2.greet(); // Output: Hello, my name is John and I am 30 years old.
// person2.name is not accessible

// Static Members
class MathUtil {
    static PI = 3.14;

    static add(a: number, b: number) {
        return a + b;
    }
}

console.log(MathUtil.PI); // Output: 3.14
console.log(MathUtil.add(2, 3)); // Output: 5

// Abstract Classes
abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

let circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483

// **Key Points:**

// 1. Classes are declared using the `class` keyword.
// 2. Classes can have properties, methods, and constructors.
// 3. Classes can inherit from other classes using the `extends` keyword.
// 4. Access modifiers (`public`, `private`, `protected`) control access to class members.
// 5. Static members are shared by all instances of a class.
// 6. Abstract classes cannot be instantiated and must be extended by other classes.