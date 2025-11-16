class Animal {
    //?--------------- Basic
    // name: string;
    // species: string;
    // sound: string

    // constructor(name: string, species: string, sound: string){
    //     this.name = name
    //     this.species = species
    //     this.sound = sound
    // }

    //  method
    // makeSound(){
    //     console.log(`${this.name} is making sound: ${this.sound}`)
    // }


    //? -------------Parameter properties
 

    constructor(public name: string, public species: string, public sound: string){
   
    }

    // method
    makeSound(){
        console.log(`${this.name} is making sound: ${this.sound}`)
    }

}

const dog = new Animal("dogesh", "dog", "ghew ghew")

console.log(dog.name)

const cat = new Animal("lili", "cat", "meow meow")

cat.makeSound()
dog.makeSound()