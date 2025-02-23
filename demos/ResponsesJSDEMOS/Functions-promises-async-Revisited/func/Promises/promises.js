// JavaScript Promises make handling asynchronous operations like API 
// calls, file loading, or time delays easier.
//  Think of a Promise as a placeholder for a value 
//  that will be available in the future.
//   It can be in one of three states:

// Pending: The task is in initial state.

// Fulfilled: The task completed successfully, and the result is available.

// Rejected: The task failed, and an error is provided.

// Here is an example Promise to check if a number is even.
// If yes, it resolves; otherwise, it rejects.


let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");

    else {reject("The number is odd!")} ;
});

checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure