import React, { useState, useEffect } from 'react';

function AsyncDataFetching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
        setLoading(false);
        setError(null);
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
      <h1>Asynchronous Data Fetching with Promises and async/await (Functional Component)</h1>
      {loading && <p>Loading data...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h2>Data from API:</h2>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      )}
    </div>
  );
}

export default AsyncDataFetching;
