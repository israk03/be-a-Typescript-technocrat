class Parent {
    name: string; //common
    age: number; //common
    address: string; //common

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    //common
    getSleep(numOfSleepHour: number){
        console.log(`${this.name} ${numOfSleepHour} ghonta ghumay.`)
    }

}

class Student extends Parent{
    // name: string; //common
    // age: number; //common
    // address: string; //common

    // constructor(name: string, age: number, address: string){
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    // }

    // //common
    // getSleep(numOfSleepHour: number){
    //     console.log(`${this.name} ${numOfSleepHour} ghonta ghumay.`)
    // }
}

const student1 = new Student("Mr. Fakibaz", 18, "Bangladesh")

student1.getSleep(15)



class Teacher extends Parent{
    // name: string; //common
    // age: number; //common
    // address: string; //common
    designation: string; // own property

    constructor(name: string, age: number, address: string, designation: string){
        // this.name = name;
        // this.age = age;
        // this.address = address;

        super(name, age, address)
        this.designation = designation
    }

    // //common
    // getSleep(numOfSleepHour: number){
    //     console.log(`${this.name} ${numOfSleepHour} ghonta ghumay.`)
    // }

    // own method
    takeClass(numOfClassTime: number){
        console.log(`${this.name} ${numOfClassTime} ghonta class ney.`)
    }
}

const teacher1 = new Teacher("Mr Smart", 35, "Bangladesh", "Senior Teacher")

teacher1.takeClass(4)