//! Spread Operator (...)
// spreading arrays
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // Output: [1, 2, 3, 4, 5]

// spreading objects
const person = { name: "Israk", age: 23 };
const updatedPerson = { ...person, isMarried: false };
console.log(updatedPerson); // Output: { name: 'Israk', age: 23, isMarried: false }

const user: {name: string; age: number} = { name: "Israk", age: 23};
const info: {city: string; country: string} = { city: "Dhaka", country: "Bangladesh" };

const userInfo = { ...user, ...info };
console.log(userInfo); // Output: { name: 'Israk', age: 23, city: 'Dhaka', country: 'Bangladesh' }



//! Rest Operator (...)
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100

// rest in destructuring objects
const userDetails = { name: "Israk", age: 23, city: "Dhaka", country: "Bangladesh" };
const { name, ...restDetails } = userDetails;

console.log(name); // Output: Israk
console.log(restDetails); // Output: { age: 23, city: 'Dhaka', country: 'Bangladesh' }