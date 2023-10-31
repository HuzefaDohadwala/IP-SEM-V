import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const countdown = async () => {
      for (let i = seconds; i > 0; i--) {
        // Use the "await" keyword to introduce an artificial delay of 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSeconds(i - 1);
      }
    };

    countdown();
  }, [seconds]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Seconds remaining: {seconds}</p>
      {seconds === 0 && <p>Countdown complete!</p>}
    </div>
  );
}

export default CountdownTimer;
