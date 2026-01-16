// Mapped Types
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// Usage
type FeatureFlags = {
  darkMode: () => void;
  newUserPrompt: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// type FeatureOptions = {
//   darkMode: boolean;
//   newUserPrompt: boolean;
// }

// Example with modifiers
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// Example with as clause (TS 4.1+)
type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P]
};

type Person = {
  name: string;
  age: number;
};

type PersonGetters = Getters<Person>;
// type PersonGetters = {
//   getName: () => string;
//   getAge: () => number;
// }

// Real-world example
type APIResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type APIRequest = {
  [K in keyof APIResponse]?: APIResponse[K];
};

const request: APIRequest = {
  userId: 1,
  title: 'New task'
};