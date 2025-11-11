interface User1 {
    id: number; 
    name: string;
    age: number;
    isAdmin: boolean;
}
// here User is an interface that defines the structure of a User object

const user: User1 = {
    id: 1,
    name: "Israk",
    age: 23,
    isAdmin: false
}

// interface inheritance (extends)
interface User {
    name: string;
    email: string;
}
interface Admin extends User {
    role: string;
}

const admin: Admin = {
    name: "MIC",
    email: "mic@example.com",
    role: "superadmin",
}


// interface for function
interface Add {
    (a: number, b: number): number;
}
const add: Add = (a, b)=>{
    return a+b;
}
console.log(add(5,10)); // Output: 15