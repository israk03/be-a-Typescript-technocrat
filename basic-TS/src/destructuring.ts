//! array destructuring
let numbers: number[] = [1,2,3];
let [first, second, third] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third); // Output: 3

// skipping elements
let [one, , three] = numbers;
console.log(one); // Output: 1
console.log(three); // Output: 3


//! object destructuring
let user = {
    name: "Israk",
    age: 23,
    isMarried: false
};

let { name, age, isMarried } = user;
console.log(name);
console.log(age);
console.log(isMarried);

// renaming variables
let { name: userName, age: userAge } = user;
console.log(userName); // Output: Israk
console.log(userAge); // Output: 23

// nested destructuring
let person = {
    name: "Israk",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

let {name: personName, address: {city, country}} = person;
console.log(personName); // Output: Israk
console.log(city);
console.log(country); // Output: Dhaka Bangladesh