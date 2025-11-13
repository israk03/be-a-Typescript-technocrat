type Student = {
    name: string;
    age: number;
    enrolled: boolean;
}

type ReadonlyOptional <T>= {
    readonly [Key in keyof T]?: T[Key];
}

const student: ReadonlyOptional<Student> = { name: "Israk"};

console.log(student);

//! student.name = "MIC"; // Error: Cannot assign to 'name' because it is a read-only property.