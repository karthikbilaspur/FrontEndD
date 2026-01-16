// Declaration Merging
interface User {
  id: number;
  name: string;
}

interface User {
  email: string;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
};

console.log(user); // { id: 1, name: 'John Doe', email: 'john@example.com' }

// Merging interfaces with methods
interface Calculator {
  add(a: number, b: number): number;
}

interface Calculator {
  subtract(a: number, b: number): number;
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(5, 2)); // 3

// Merging with classes
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

interface Person {
  greet(): string;
}

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;
};

const person = new Person('Jane');
console.log(person.greet()); // Hello, my name is Jane

// Real-world example: Extending built-in types
interface Array<T> {
  first(): T | undefined;
}

Array.prototype.first = function<T>() {
  return this[0];
};

const numbers = [1, 2, 3];
console.log(numbers.first()); // 1

// Advanced example: Merging with generics
interface Box<T> {
  value: T;
}

interface Box<T> {
  map<U>(fn: (value: T) => U): Box<U>;
}

class BoxImpl<T> implements Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
  map<U>(fn: (value: T) => U): Box<U> {
    return new BoxImpl(fn(this.value));
  }
}

const box = new BoxImpl(5);
const mappedBox = box.map(x => x * 2);
console.log(mappedBox.value); // 10