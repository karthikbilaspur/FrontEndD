// Type Inference
let x = 3; // inferred as number
let y = 'hello'; // inferred as string
let z = [1, 2, 3]; // inferred as number[]

// Function return type inference
function add(a: number, b: number) {
  return a + b; // inferred return type: number
}

// Contextual typing
window.onmousedown = (event) => {
  // event inferred as MouseEvent
  console.log(event.button);
};

// Best common type
let arr = [1, 'hello', true]; // inferred as (string | number | boolean)[]

// Type inference with generics
function identity<T>(arg: T): T {
  return arg;
}

let num = identity(1); // T inferred as number
let str = identity('hello'); // T inferred as string

// Conditional type inference with infer
type UnpackArray<T> = T extends (infer U)[] ? U : T;

type A = UnpackArray<string[]>; // string
type B = UnpackArray<number>; // number

// Real-world example
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 35 },
];

const names = users.map(user => user.name);
// names inferred as string[]