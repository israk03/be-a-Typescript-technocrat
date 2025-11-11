const mapApiData = <T>(data: T[]): T[] =>{
    return data.map(item =>item);
}

const userData = mapApiData<{name: string, age: number}>([
    {name: "Israk", age: 23},
    {name: "Red", age: 24},
    {name: "Enni", age: 22},
])

console.log(userData)