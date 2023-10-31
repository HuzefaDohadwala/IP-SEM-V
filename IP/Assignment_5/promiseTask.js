// Function that returns a Promise
function asyncTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10) + 1; // Generates a random integer between 1 and 10
        if (randomNumber <= 5) {
          resolve(`Success! Random number: ${randomNumber}`);
        } else {
          reject(`Error! Random number: ${randomNumber}`);
        }
      }, 1000); // Simulate an asynchronous task
    });
  }
  
  // Callback function to handle the Promise
  function handlePromise(callback) {
    console.log("Task started...");
    callback
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Task completed.");
      });
  }
  
  // Example usage of the handlePromise function
  handlePromise(asyncTask());
  