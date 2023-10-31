function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Date.now() - startTime >= 2000) { // Check if more than 2000 milliseconds have passed
          resolve('Data has been fetched');
        } else {
          reject('Error occurred while fetching data');
        }
      }, 1000); // Simulate a 3-second delay
    });
  }
  
  const startTime = Date.now(); // Record the start time
  
  async function performAsyncOperation() {
    console.log('Operation started...');
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    console.log('Operation completed.');
  }
  
  performAsyncOperation();
  