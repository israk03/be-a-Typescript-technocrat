// polymorphism : bohurupi

class Person {
    getSleep(){
        console.log(`I am a normal person, sleep for 8 hours.`)
    }
}

class Student extends Person{
    getSleep() {
        console.log(`I am student, I sleep for 6 hours.`)
    }
}

class NextLevelDeveloper extends Person{
    getSleep(){
        console.log(`I am a Next Level Developer, I sleep for 5 hours.`)
    }
}

const getSleepingHours = (param: Person) =>{
    param.getSleep()
}

const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelDeveloper()

getSleepingHours(person1)
getSleepingHours(person2)