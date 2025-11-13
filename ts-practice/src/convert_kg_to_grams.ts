//! Create a function convertKgToG that takes a number or string (e.g. "5kg") and returns grams.

type InputType = number | string;

const convertKgToG = (input: InputType): number => {
    if (typeof input === 'string'){
        const numberValue = parseFloat(input);
        if( isNaN(numberValue)){
            throw new Error("Invalid input: Please provide a valid number or string representing kilograms.");
        }
        return numberValue * 1000;
    } else if (typeof input === 'number'){
        return input * 1000;
    }

    throw new Error("Invalid input: Please provide a number or a string representing kilograms.");


}


console.log(convertKgToG(5));
console.log(convertKgToG("5kg"));