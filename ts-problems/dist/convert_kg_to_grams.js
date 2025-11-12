"use strict";
//! Create a function convertKgToG that takes a number or string (e.g. "5kg") and returns grams.
Object.defineProperty(exports, "__esModule", { value: true });
const convertKgToG = (input) => {
    if (typeof input === 'string') {
        const numberValue = parseFloat(input);
        if (isNaN(numberValue)) {
            throw new Error("Invalid input: Please provide a valid number or string representing kilograms.");
        }
        return numberValue * 1000;
    }
    else if (typeof input === 'number') {
        return input * 1000;
    }
    throw new Error("Invalid input type: Please provide a number or a string representing kilograms.");
};
console.log(convertKgToG(5));
console.log(convertKgToG("5kg"));
//# sourceMappingURL=convert_kg_to_grams.js.map