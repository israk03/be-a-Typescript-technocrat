//! Extract and rename properties using destructuring.

type Product = {
    id: number;
    title: string;
    brand: string;
    price: string;
    inStock?: boolean;
}

const product: Product = {
    id: 301,
    title: "iPhone 11",
    brand: "Apple",
    price: "$699",
    inStock: true,
}

const {title: productName, brand} = product;
console.log(`Product Name: ${productName}, Brand: ${brand}`);

