// decorators.ts

// What are Decorators?
// Decorators are a design pattern in TypeScript that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.

// Types of Decorators:
// 1. Class Decorators
// 2. Method Decorators
// 3. Property Decorators
// 4. Parameter Decorators
// 5. Accessor Decorators

// Class Decorator
function LoggerFactory(target: any) {
  console.log('Class Decorator: LoggerFactory');
  return target;
}

// Method Decorator
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('Method Decorator: logMethod');
  const originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Method ${propertyKey} called with args: ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

// Property Decorator
function validateEmail(target: any, propertyKey: string) {
  console.log('Property Decorator: validateEmail');
  let value: string;
  const getter = () => value;
  const setter = (newValue: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(newValue)) {
      throw new Error(`Invalid email: ${newValue}`);
    }
    value = newValue;
  };
  Object.defineProperty(target, propertyKey, { get: getter, set: setter });
}

// Accessor Decorator
function readonly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator: readonly');
  descriptor.writable = false;
  return descriptor;
}

// Parameter Decorator
function required(target: any, propertyKey: string, parameterIndex: number) {
  console.log('Parameter Decorator: required');
  const originalMethod = target[propertyKey];
  target[propertyKey] = function(...args: any[]) {
    if (args[parameterIndex] === undefined || args[parameterIndex] === null) {
      throw new Error(`Parameter ${parameterIndex} is required`);
    }
    return originalMethod.apply(this, args);
  };
}

@LoggerFactory
class User {
  @validateEmail
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  @logMethod
  greet(@required name: string) {
    return `Hello, ${name}!`;
  }

  @readonly
  getEmail() {
    return this.email;
  }
}

const user = new User('john@example.com');
console.log(user.greet('John')); // Hello, John!
console.log(user.getEmail()); // john@example.com
// user.getEmail = () => 'hacked'; // Error: Cannot assign to read only property