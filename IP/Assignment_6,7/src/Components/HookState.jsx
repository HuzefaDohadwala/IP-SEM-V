import React, { useState } from 'react';
import Navbar from './Navbar';

const HookState = () => {
  // Define a piece of state to hold the counter
  const [counter, setCounter] = useState(1);

  // Define a piece of state to hold the user-defined multiplicand
  const [multiplicand, setMultiplicand] = useState(1);

  // Event handler to increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Event handler to update the multiplicand
  const handleInputChange = (event) => {
    setMultiplicand(event.target.value);
  };

  // Generate the multiplication table based on the user-defined multiplicand and the counter
  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= counter; i++) {
      table.push(
        <p key={i}>
          {multiplicand} x {i} = {multiplicand * i}
        </p>
      );
    }
    return table;
  };

  return (
    <div>
      <Navbar />
      <h1>Usestate</h1>

      <label htmlFor="numberInput">Enter a number: </label>
      <input
        type="number"
        id="numberInput"
        value={multiplicand}
        onChange={handleInputChange}
      />

      <button onClick={incrementCounter}>
        Increment Counter
      </button>

      <p>Counter: {counter}</p>

      <div>
        {generateTable()}
      </div>
    </div>
  );
};

export default HookState;
