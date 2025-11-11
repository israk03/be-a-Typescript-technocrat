type GenericArray<T> = Array<T>;


//const friends: string[] = ["Israk", "Red", "Enni", "Hafsa"];
const friends: GenericArray<string> = ["Israk", "Red", "Enni", "Hafsa"];

// const rolls: number[] = [1, 2, 3, 4];
const rolls: GenericArray<number> = [1, 2, 3, 4];

// const isEligible: boolean[] = [true, false, true, false];
const isEligible: GenericArray<boolean> = [true, false, true, false];




type Coordinates<X, Y> = [X, Y];

const point1: Coordinates<number, number> = [10, 20];
const point2: Coordinates<string, string> = ["10", "20"];
const point3: Coordinates<boolean, boolean> = [true, false];

console.log(point1); // Output: [10, 20]
console.log(point2); // Output: ["10", "20"]
console.log(point3); // Output: [true, false]