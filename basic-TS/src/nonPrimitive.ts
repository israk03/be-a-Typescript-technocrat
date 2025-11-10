//-------- array
let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

let fruit: string[] = ["apple", "banana", "cherry"];
console.log(fruit);

let mixedArray: (number | string)[] = [1, "two", 3, "four"];
console.log(mixedArray);


//--------- tuple
let user: [number, string, boolean] = [1, "Israk", true];
console.log(user);

//? representing coordinates
let coordinates: [number, number] = [40.7128, -74.0060];

//? representing API response
let apiResponse: [number, string, boolean] = [200, "OK", true];
console.log(coordinates);
console.log(apiResponse);

//--------- object
let person: { name: string; age: number; isMarried: boolean } = {
  name: "Israk",
  age: 23,
  isMarried: false,
};
console.log(person);

//? representing a product
let product: { id: number; name: string; price: number } = {
  id: 1,
  name: "Laptop",
  price: 999.99,
};
console.log(product);

//--------- enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let moveDirection: Direction = Direction.Up;
console.log(moveDirection);