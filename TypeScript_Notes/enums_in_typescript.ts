// Enums in TypeScript

// Enums are used to define a set of named values.
// They are useful when you have a set of distinct values that have a specific meaning in your code.

// Declaring an Enum
enum Color {
    Red,
    Green,
    Blue,
}

// Accessing Enum Values
console.log(Color.Red); // Output: 0
console.log(Color.Green); // Output: 1
console.log(Color.Blue); // Output: 2

// Enum with Custom Values
enum Status {
    Active = 1,
    Inactive = 2,
    Pending = 3,
}
console.log(Status.Active); // Output: 1
console.log(Status.Inactive); // Output: 2
console.log(Status.Pending); // Output: 3

// Enum with String Values
enum ColorString {
    Red = "red",
    Green = "green",
    Blue = "blue",
}
console.log(ColorString.Red); // Output: "red"
console.log(ColorString.Green); // Output: "green"
console.log(ColorString.Blue); // Output: "blue"

// Enum with Mixed Values
enum Mixed {
    Red = 1,
    Green = "green",
    Blue = 3,
}
console.log(Mixed.Red); // Output: 1
console.log(Mixed.Green); // Output: "green"
console.log(Mixed.Blue); // Output: 3

// Using Enums in Functions
function paint(color: Color) {
    console.log(`Painting with color ${color}`);
}
paint(Color.Green); // Output: Painting with color 1

// Using Enums in Switch Statements
function getColorName(color: Color) {
    switch (color) {
        case Color.Red:
            return "Red";
        case Color.Green:
            return "Green";
        case Color.Blue:
            return "Blue";
        default:
            return "Unknown";
    }
}
console.log(getColorName(Color.Green)); // Output: Green

// Enum with Reverse Mapping
enum ColorReverse {
    Red = 1,
    Green = 2,
    Blue = 3,
}
console.log(ColorReverse[1]); // Output: Red
console.log(ColorReverse[2]); // Output: Green
console.log(ColorReverse[3]); // Output: Blue

// Const Enums
const enum ColorConst {
    Red,
    Green,
    Blue,
}
console.log(ColorConst.Red; // Output: 0