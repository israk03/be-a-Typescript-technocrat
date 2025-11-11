"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kgToGM = (input) => {
    if (typeof input === 'string') {
        const value = Number(input.split(" ")[0]);
        return value * 1000;
    }
    else if (typeof input === 'number') {
        return input * 1000;
    }
    else {
        return undefined;
    }
};
const result1 = kgToGM("2.5 kg");
const result2 = kgToGM(3);
//const result3 = kgToGM(true) as undefined;
console.log(result1); // "2500"
console.log(result2); // 3000
//console.log(result3); // undefined
//# sourceMappingURL=type_assertion.js.map