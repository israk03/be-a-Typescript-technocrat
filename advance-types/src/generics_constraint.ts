interface ApiResponse {
    status: number;
    message: string;
}

const printResponse = <T extends ApiResponse>(response: T) =>{
    console.log(`Status: ${response.status}, Message: ${response.message}`);
}   

printResponse({status: 200, message: "OK"}); // Output: Status: 200, Message: OK
printResponse({status: 404, message: "Not Found"}); // Output: Status: 404, Message: Not Found