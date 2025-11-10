//! type alias for primitive types
type Name = string;
type Age = number;
type IsMarried = boolean;

const userName: Name = "Israk";
const age: Age = 23;
const isMarried: IsMarried = false;

console.log(userName);
console.log(age);
console.log(isMarried);

//! type alias for Object
type User = {
  name: Name;
  age: Age;
  isMarried: IsMarried;
};

const user: User = {
  name: "Israk",
  age: 23,
  isMarried: false,
};

console.log(user);

//! type alias for array
type NumbersArray = number[];
type StringsArray = string[];
type MixedArray = (number | string)[];

const numbers: NumbersArray = [1, 2, 3, 4, 5];
const fruits: StringsArray = ["apple", "banana", "cherry"];
const mixed: MixedArray = [1, "two", 3, "four"];

console.log(numbers);
console.log(fruits);
console.log(mixed);


//! type alias for function
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => {
  return a + b;
};

console.log(add(5, 10)); // Output: 15