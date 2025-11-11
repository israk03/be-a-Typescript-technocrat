enum Role {
    Admin = "admin",
    User = "user",
    SuperAdmin = "superadmin",
}

interface User {
    id: number;
    name: string;
    role: Role;
}

const user1: User = {
    id: 101,
    name: "Israk",
    role: Role.Admin,
};

const user2: User = {
    id: 102,
    name: "Red",
    role: Role.User,
}

if (user1.role === Role.Admin) {
    console.log(`${user1.name} is an admin.`);
}

