interface ApiResponse<T> {
    status: number;
    message: string;
    data: T;
}


const userResponse: ApiResponse<{ name: string; email: string }> = {
  status: 200,
  message: "Success",
  data: { name: "Israk", email: "israk@gmail.com" },
};

const productResponse: ApiResponse<{ id: number; title: string; price: number }> = {
    status: 200,
    message: "Fetched products successfully",
    data: { id: 1, title: "Laptop", price: 999.99 },
};

console.log(userResponse) // Output: { status: 200, message: 'Success', data: { name: 'Israk', email: ' }
console.log(productResponse) // Output: { status: 200, message: 'Fetched products successfully', data: { id: 1, title: 'Laptop', price: 999.99 } }