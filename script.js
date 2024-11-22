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
 
// const faultyTask = () => 
//     new Promise((resolve, reject) => 
//         setTimeout(() => reject("Something went really wrong!"), 1500)
//     )

// faultyTask()
//     .then((result) => console.log(result))
//     .catch((error) => console.error("Error:", error)); 


// const pizzaPromise = new Promise((resolve, reject) => {
//     const ingredientsAvailable = true; // Simulate success / failure 

//     setTimeout(() => {
//         if (ingredientsAvailable) {
//             resolve("Pizza is ready!"); 
//         } else {
//             reject("Sorry, no pizza today.")
//         }
//     }, 2000); // simulate time for making the pizza 
// })

// pizzaPromise
//     .then((message) => console.log(message)) //handle success
//     .catch((error) => console.error(error)) //handle failure 


// const homeworkPromise = new Promise((resolve, reject) => {
//     const homeworkSubmitted = true; //simulate if the homework is submitted 

//     setTimeout(() => {
//         if(homeworkSubmitted) {
//             resolve("homework graded!")
//         } else {
//             reject("homework not submitted!")
//         }
//     }, 3000); //simulate time for grading homework 
// })

// homeworkPromise
//     .then((result) => console.log(result)) // handle success. Method of the promise object used to define what should happen after a promise is resolved (fulfilled). 
//     .catch((error) => console.error(error)) // handle failure 

// fetchData()
//     .then((data) => Process(data))
//     .then((processedData) => save(processedData))
//     .catch((error) => handleError(error))

// async function handleData() {
//     try {
//         const data = await fetchData(); 
//         const processedData = await process(data); 
//         await save(processedData); 
//     } catch (error) {
//         handleError(error); 
//     }
// }

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you walk the dog"); 
        }, 1500)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you cleaned the kitchen"); 
        }, 2500)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you took out the trash");  
        }, 1000)
    })
}

walkDog()       
    .then(value => {console.log(value); return cleanKitchen()})
    .then(value => {console.log(value); return takeOutTrash()})
    .then(value => {console.log(value); 
    console.log("all chores are complete!")})
    .catch((error) => console.error(error))


  