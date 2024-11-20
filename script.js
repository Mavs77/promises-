// const myPromise = new Promise((resolve, reject) => {
//     const success = true; //simulating success / failure
//     setTimeout(() => {
//         if (success) {
//             resolve("Promise fulfilled!"); 
//         } else {
//             reject("Promise rejected!"); 
//         }
//     }, 2000); 
// })

// myPromise
//     .then((message) => console.log(message)) // runs on success
//     .catch((error) => console.error(error)); // runs on failure 


//     const task1 = () =>
//     new Promise((resolve) => setTimeout(() => resolve("Task 1 complete"), 1000));
//   const task2 = () =>
//     new Promise((resolve) => setTimeout(() => resolve("Task 2 complete"), 1000));
//   const task3 = () =>
//     new Promise((resolve) => setTimeout(() => resolve("Task 3 complete"), 1000));
  
// // structure to wait for each task to resolve before starting the next. Results are shown in the console.   
//   task1()
//     .then((result1) => {
//       console.log(result1);
//       return task2();
//     })
//     .then((result2) => {
//       console.log(result2);
//       return task3();
//     })
//     .then((result3) => {
//       console.log(result3);
//       console.log("All tasks done!");
//     });
 
const faultyTask = () => 
    new Promise((resolve, reject) => 
        setTimeout(() => reject("Something went really wrong!"), 1500)
    )

faultyTask()
    .then((result) => console.log(result))
    .catch((error) => console.error("Error:", error)); 
  