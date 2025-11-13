const logName = <T extends {name: string}>(obj: T): void => {
    console.log("Name: ", obj.name)
}

logName({name: "MIC", age: 23});
logName({name: "Red", skill: "Dragon"});