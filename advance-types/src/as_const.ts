const Role = {
    Admin: "ADMIN",
    User: "USER",
    SuperAdmin: "SUPERADMIN",
} as const;


type UserRoleType = typeof Role[keyof typeof Role];


interface User {
    id: number;
    name: string;
    role: UserRoleType;
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

