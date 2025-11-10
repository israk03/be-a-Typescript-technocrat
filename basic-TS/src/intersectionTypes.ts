// basic type
type Person = {name: string}
type Contact = {email: string}

type Employee = Person & Contact;

const emp: Employee = {
    name: "Israk",
    email: "israk@gmail.com"
}

console.log(emp);


// intersection of objects
type Admin = {name: string, role: string};
type Permissions = {canEdit: boolean, canDelete: boolean};
type SuperAdmin = Admin & Permissions;

const user: SuperAdmin = {
    name: "Israk",
    role: "admin",
    canEdit: true,
    canDelete: true,
}
console.log(user);