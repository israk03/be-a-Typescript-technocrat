const kgToGM = (input: string | number): string | number | undefined => {
    if (typeof input === 'string'){
        const value = Number(input.split(" ")[0]);
        return value * 1000;
    } else if (typeof input === 'number'){
        return input * 1000;
    } else{
        return undefined;
    }
}


const result1 = kgToGM("2.5 kg") as string;
const result2 = kgToGM(3) as number;
//const result3 = kgToGM(true) as undefined;

console.log(result1); // "2500"
console.log(result2); // 3000
//console.log(result3); // undefined