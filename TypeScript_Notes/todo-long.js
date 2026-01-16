// tooling-example.js
// tsconfig.json equivalent config
const tsConfig = {
  compilerOptions: {
    // Specify output dir for compiled JS files
    outDir: "build",
    // Enable strict type checking
    strict: true,
    // Specify module system
    module: "commonjs",
    // Specify target JS version
    target: "es6"
  },
  include: ["src/**/*"]
};

// package.json equivalent config
const packageConfig = {
  name: "my-ts-project",
  version: "1.0.0",
  scripts: {
    build: "tsc",
    start: "node build/index.js"
  },
  devDependencies: {
    typescript: "^4.8.4"
  }
};

console.log("tsconfig.json equivalent:");
console.log(tsConfig);
console.log("\npackage.json equivalent:");
console.log(packageConfig);