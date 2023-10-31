import React, { useState, useEffect } from 'react';

function ChainedAsyncOperations() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API 1
        const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response1.ok) {
          throw new Error(`HTTP error! Status: ${response1.status}`);
        }
        const data1 = await response1.json();

        // Fetch data from API 2
        const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        if (!response2.ok) {
          throw new Error(`HTTP error! Status: ${response2.status}`);
        }
        const data2 = await response2.json();

        setData1(data1);
        setData2(data2);
        setLoading(false);
      } catch (error) {
        setError('An error occurred');
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Chaining Asynchronous Operations with Promises</h1>
      {loading && <p>Loading data...</p>}
      {error && <p>{error}</p>}
      {data1 && data2 && (
        <div>
          <h2>Data from API 1:</h2>
          <p>Title: {data1.title}</p>
          <p>Body: {data1.body}</p>

          <h2>Data from API 2:</h2>
          <p>Title: {data2.title}</p>
          <p>Body: {data2.body}</p>
        </div>
      )}
    </div>
  );
}

export default ChainedAsyncOperations;
