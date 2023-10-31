import React, { useState } from 'react';
import Navbar from './Navbar';

const Form = () => {
  const [formData, setFormData] = useState({
    inputField1: '',
    inputField2: '',
  });

  const handleChange = (e) => {
    // Update the form data state based on the input field's name
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission event here, e.g., submit the form data to an API or perform some action
    // Instead of an alert, we'll display the data below the form
  };

  return (
    <div>
      <Navbar />
      <h2>Form and Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputField1">Input Field 1:</label>
          <input
            type="text"
            id="inputField1"
            name="inputField1"
            value={formData.inputField1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="inputField2">Input Field 2:</label>
          <input
            type="text"
            id="inputField2"
            name="inputField2"
            value={formData.inputField2}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <h3>Submitted Data:</h3>
        <p>Input Field 1: {formData.inputField1}</p>
        <p>Input Field 2: {formData.inputField2}</p>
      </div>
    </div>
  );
};

export default Form;
