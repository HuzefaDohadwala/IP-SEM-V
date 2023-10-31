import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  const animationStyles = {
    animation: 'fadeInGrow 1s ease-in-out',
  };

  const contentStyles = {
    animation: 'grow 1s ease-in-out',
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',    // Center vertically
    height: '100vh',        // Make the container full viewport height
  };

  return (
    <div style={containerStyles}>
      <div style={{ ...animationStyles, ...contentStyles }}>
        <p>Content with Animation</p>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
