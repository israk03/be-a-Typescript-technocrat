// oop: instance of type guard / type narrowing

class Person {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    getSleep(numOfHours: number){
        console.log(`${this.name} sleep regular ${numOfHours} hours.`)
    }
}

class Student extends Person{
    constructor(name: string){
        super(name);
    }

    doStudy(numOfHours: number){
        console.log(`${this.name} study regular ${numOfHours} hours.`)
    }
}

class Teacher extends Person{
    constructor(name: string){
        super(name)
    }

    takeClass(numOfHours: number){
        console.log(`${this.name} take class ${numOfHours} hours.`)
    }
}

// function guard
const isStudent = (user: Person) =>{
    return user instanceof Student;
}
const isTeacher = (user: Person) =>{
    return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
    // if(user instanceof Student){
    //     user.doStudy(10)
    // }else if(user instanceof Teacher){
    //     user.takeClass(5)
    // }else{
    //     user.getSleep(15)
    // }
    if(isStudent(user)){
        user.doStudy(10)
    }else if(isTeacher(user)){
        user.takeClass(5)
    }else{
        user.getSleep(8)
    }
}

const student1 = new Student('Mr. Student');
const teacher1 = new Teacher('Mr. Teacher')

getUserInfo(student1)