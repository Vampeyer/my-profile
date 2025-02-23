/*  
Advanced Usage: Parallel and Sequential Tasks in a Chain
You can combine Promise.all() with chaining for efficient execution.

*/

Promise.all([
    Promise.resolve("Task 1 done"),
    Promise.resolve("Task 2 done")
])
    .then(([result1, result2]) => {
        console.log(result1, result2);
        return Promise.resolve("Final Task done");
    })
    .then((finalResult) => console.log(finalResult))
    .catch((error) => console.error(error));