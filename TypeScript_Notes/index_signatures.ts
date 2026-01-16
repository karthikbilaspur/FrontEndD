// Index Signatures
interface Dictionary<T> {
  [key: string]: T;
}

const scores: Dictionary<number> = {
  john: 90,
  jane: 85,
  bob: 92,
};

console.log(scores['john']); // 90
scores['alice'] = 88;
console.log(scores['alice']); // 88

// Example with readonly index signature
interface ReadonlyDictionary<T> {
  readonly [key: string]: T;
}

const readonlyScores: ReadonlyDictionary<number> = {
  john: 90,
  jane: 85,
};

console.log(readonlyScores['john']); // 90
// readonlyScores['bob'] = 92; // Error: Cannot assign to read only property

// Example with numeric index signature
interface NumberArray {
  [index: number]: number;
}

const numbers: NumberArray = [1, 2, 3];
console.log(numbers[0]); // 1

// Real-world example: Config object
interface Config {
  [key: string]: string | number | boolean;
}

const config: Config = {
  apiUrl: 'https://api.example.com',
  timeout: 3000,
  debug: true,
};

console.log(config.apiUrl); // 'https://api.example.com'
console.log(config['timeout']); // 3000

// Advanced example: Mapped types with index signatures
type ReadonlyDictionary2<T> = {
  readonly [P in keyof T]: T[P];
};

const readonlyConfig: ReadonlyDictionary2<Config> = config;
// readonlyConfig.apiUrl = 'new-url'; // Error: Cannot assign to read only property