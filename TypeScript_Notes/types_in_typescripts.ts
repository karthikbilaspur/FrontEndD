type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserPrompt: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// type FeatureOptions = {
//   darkMode: boolean;
//   newUserPrompt: boolean;
// }
//Conditional Types
//Create types based on conditions
//TypeScript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

//Template Literal Types
//Build types using string templates
//TypeScript
type EventName<T extends string> = `${T}Event`;

type ButtonClickEvent = EventName<'ButtonClick'>; // 'ButtonClickEvent'

//Utility Types
//Built-in type helpers for common transformations
//TypeScript
type PartialUser = Partial<{
  id: number;
  name: string;
}>;
// makes all properties optional

type ReadonlyUser = Readonly<{
  id: number;
  name: string;
}>;
// makes all properties readonly
//Recursive Types
//Self-referential types for tree-like structures
//

//TypeScript
type Tree<T> = {
  value: T;
  children?: Tree<T>[];
};

const tree: Tree<number> = {
  value: 1,
  children: [
    { value: 2 },
    { value: 3, children: [{ value: 4 }] }
  ]
};
//Type Guards & Type Predicates
//Runtime type checking
//TypeScript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function print(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
//Type Inference with infer
//Advanced pattern matching
//TypeScript
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type A = Flatten<string[]>; // string
type B = Flatten<number>; // number