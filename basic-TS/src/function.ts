// basic function
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
//! console.log(add(5, "10")) // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// optional parameter
function greet(name: string, message?: string): string {
    return `Hello, ${name}! ${message ?? 'Welcome back!'}`
}
console.log(greet("Israk")); // Output: Hello, Israk! Welcome back!
console.log(greet("Israk", "How are you?")); // Output: Hello, Israk! How are you?

// default parameter
function multiply(a: number, b: number = 1): number {
    return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10


// arrow function
const subtract = (a: number, b: number): number => {
    return a - b;
}
console.log(subtract(10, 5)); // Output: 5

// function inside Object (Method)
const user = {
    name: "Israk", 
    greet(): void {
        console.log(`Hello, ${this.name}!`);
    },

    
}
user.greet(); // Output: Hello, Israk!