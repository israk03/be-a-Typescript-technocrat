const frontend = ["React", "Typescript"]
const backend = ["Node.js", "Express"]

const fullstack = [...frontend, ...backend]

console.log(fullstack) // Output: [ 'React', 'Typescript', 'Node.js', 'Express' ]

// Spread operator with objects
const user = { name: "Alice", age: 30 }
const address = { city: "Wonderland", country: "Fiction" }

const userProfile = { ...user, ...address }

console.log(userProfile) // Output: { name: 'Alice', age: 30, city: 'Wonderland', country: 'Fiction' }

// Spread operator with function arguments
const numbers = [1, 2, 3, 4, 5]

const sum = (...args: number[]) => {
    return args.reduce((acc, curr)=> acc + curr, 0)
}

console.log(sum(...numbers.slice(0, 3))) // Output: 6 (1 + 2 + 3)

// Spread operator with rest parameters
const concatenate = (...args: string[]) => args.join(" ") 
console.log(concatenate("Hello", "World", "from", "TypeScript")) // Output: Hello World from TypeScript