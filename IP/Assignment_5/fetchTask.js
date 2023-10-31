// Define the URL of the server you want to fetch data from
const serverUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request using the fetch API
fetch(serverUrl)
  .then((response) => {
    // Check if the response status code indicates success (in the range of 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then((data) => {
    // Handle the JSON data from the server
    console.log('Data from the server:', data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });
