// basic example
let value: string | number;

value = "Hello";
console.log(value);
value = 42;
console.log(value);

// union in function parameters
function printId(id: string | number){
    console.log(`Your ID is: ${id}`);
}
printId("12345");
printId(67890);

//! type narraowing
function printIdWithNarrowing(id: string | number){
    if (typeof id === "string") {
        console.log(`Your ID is a string: ${id}`);
    } else {
        console.log(`Your ID is a number: ${id}`);
    }       

}
printIdWithNarrowing("12345");
printIdWithNarrowing(67890);

// union in objects
type User = {
    id: string | number;
    name: string;
};

const user1: User = {
    id: "user123",
    name: "Alice"
};

const user2: User = {
    id: 456,
    name: "Bob"
};

console.log(user1);
console.log(user2);

// union in arrays
let mixedArray: (string | number)[] = ["apple", 42, "banana", 100];
console.log(mixedArray);


// union with literal types
type Status = "active" | "inactive" | "pending";

function updateStatus(status: Status) {
    console.log(`Status updated to: ${status}`);
}

updateStatus("active");
updateStatus("inactive");
// updateStatus("unknown"); // This will cause a TypeScript error since "unknown" is not a valid Status