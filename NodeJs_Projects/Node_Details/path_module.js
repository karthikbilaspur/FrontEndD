// Import the path module
const path = require('path');

// Path module in Node.js is a built-in module that provides utilities for working with file and directory paths 🗺️.
// It helps you handle file paths in a way that's safe and consistent across different operating systems 💻.

// Some common use cases include:
// Joining paths together 🤝
// Resolving relative paths 🤔
// Getting file extensions 📁
// Extracting file names 📝

// Want to know more about a specific function or use case? 😊

// Path Module Examples

// 1. Joining Paths
console.log("Joining Paths:");
const fullPath = path.join('folder', 'subfolder', 'file.txt');
console.log(`const fullPath = path.join('folder', 'subfolder', 'file.txt');`);
console.log(`Output: ${fullPath}`); // Output: "folder/subfolder/file.txt" (or "folder\subfolder\file.txt" on Windows)

// 2. Resolving Relative Paths
console.log("\nResolving Relative Paths:");
const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log(`const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');`);
console.log(`Output: ${absolutePath}`); // Output: "/current/working/directory/folder/subfolder/file.txt"

// 3. Getting File Extensions
console.log("\nGetting File Extensions:");
const fileExt = path.extname('file.txt');
console.log(`const fileExt = path.extname('file.txt');`);
console.log(`Output: ${fileExt}`); // Output: ".txt"

// 4. Extracting File Names
console.log("\nExtracting File Names:");
const fileName = path.basename('folder/subfolder/file.txt');
console.log(`const fileName = path.basename('folder/subfolder/file.txt');`);
console.log(`Output: ${fileName}`); // Output: "file.txt"

const fileNameNoExt = path.basename('folder/subfolder/file.txt', '.txt');
console.log(`const fileNameNoExt = path.basename('folder/subfolder/file.txt', '.txt');`);
console.log(`Output: ${fileNameNoExt}`); // Output: "file"

// 5. Getting Directory Name
console.log("\nGetting Directory Name:");
const dirName = path.dirname('folder/subfolder/file.txt');
console.log(`const dirName = path.dirname('folder/subfolder/file.txt');`);
console.log(`Output: ${dirName}`); // Output: "folder/subfolder"

// 6. Checking if a Path is Absolute
console.log("\nChecking if a Path is Absolute:");
const isAbsolute = path.isAbsolute('/folder/subfolder/file.txt');
console.log(`const isAbsolute = path.isAbsolute('/folder/subfolder/file.txt');`);
console.log(`Output: ${isAbsolute}`); // Output: true

// 7. Normalizing a Path
console.log("\nNormalizing a Path:");
const normalizedPath = path.normalize('folder//subfolder/./file.txt');
console.log(`const normalizedPath = path.normalize('folder//subfolder/./file.txt');`);
console.log(`Output: ${normalizedPath}`); // Output: "folder/subfolder/file.txt"

// 8. Getting the Relative Path
console.log("\nGetting the Relative Path:");
const relativePath = path.relative('folder/subfolder', 'folder/subfolder/file.txt');
console.log(`const relativePath = path.relative('folder/subfolder', 'folder/subfolder/file.txt');`);
console.log(`Output: ${relativePath}`); // Output: "file.txt"