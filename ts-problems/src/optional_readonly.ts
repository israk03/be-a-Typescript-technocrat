//! Create a User type with optional and readonly properties.

type User = {
    readonly id: number;
    name: string;
    email: string;
    address?: string;
}

const user: User = {
    id: 101,
    name: "Israk",
    email: "israk@example.com",
}

//? user.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.

console.log(user);