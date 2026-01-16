// Conditional Types
type IsString<T> = T extends string ? true : false;

// Usage
type A = IsString<string>; // true
type B = IsString<number>; // false

// Example with multiple conditions
type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  "object";

type C = TypeName<string>; // "string"
type D = TypeName<number>; // "number"
type E = TypeName<true>; // "boolean"
type F = TypeName<{}>; // "object"

// Example with type distribution
type ToArray<T> = T extends any ? T[] : never;

type G = ToArray<string | number>; // string[] | number[]

// Real-world example
interface IdLabel { id: number; }
interface NameLabel { name: string; }

function createLabel<T extends number | string>(
  idOrName: T
): T extends number ? IdLabel : NameLabel {
  if (typeof idOrName === "number") {
    return { id: idOrName } as any;
  } else {
    return { name: idOrName } as any;
  }
}

const a = createLabel(1); // IdLabel
const b = createLabel('hello'); // NameLabel