import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const HookEffect = () => {
  const [count, setCount] = useState(0);

  // Define an effect to update the count every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update the count every 1000ms (1 second)

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // This effect runs once after the initial render

  return (
    <div>
      <Navbar />
      <h2>Useeffect</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default HookEffect;
