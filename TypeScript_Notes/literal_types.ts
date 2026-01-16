// Literal Types
let exactString: 'hello' = 'hello'; // okay
// exactString = 'world'; // Error: Type '"world"' is not assignable to type '"hello"'

let exactNumber: 100 = 100; // okay
// exactNumber = 200; // Error: Type '200' is not assignable to type '100'

let exactBoolean: true = true; // okay
// exactBoolean = false; // Error: Type 'false' is not assignable to type 'true'

// Union Literal Types
type Alignment = 'top' | 'middle' | 'bottom';
let align: Alignment = 'top'; // okay
align = 'middle'; // okay
// align = 'left'; // Error: Type '"left"' is not assignable to type 'Alignment'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
function request(url: string, method: HttpMethod) {
  // ...
}

request('/users', 'GET'); // okay
// request('/users', 'PATCH'); // Error: Argument of type '"PATCH"' is not assignable to parameter of type 'HttpMethod'

// Template Literal Types (TS 4.1+)
type Size = 'small' | 'medium' | 'large';
type Color = 'red' | 'blue' | 'green';

type SizeColor = `${Size}-${Color}`;
// type SizeColor = "small-red" | "small-blue" | "small-green" | "medium-red" | ...

// Real-world example
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  label: string;
}

function Button(props: ButtonProps) {
  // ...
}

//<Button variant="primary" size="medium" label="Click me" />; // okay
// <Button variant="danger" size="huge" label="Click me" />; // Error