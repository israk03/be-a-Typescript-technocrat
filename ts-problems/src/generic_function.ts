//! write a function that returns whatever type is passed in.

const identity = <T>(value: T): T => value;

const numberValue = identity(42);
const stringValue = identity("Hello, TypeScript!");
const booleanValue = identity(true);

console.log(numberValue);
console.log(stringValue);
console.log(booleanValue);