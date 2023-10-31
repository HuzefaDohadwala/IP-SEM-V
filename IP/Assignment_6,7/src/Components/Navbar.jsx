import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/propstate">PropState</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/effect">HookEffect</Link>
        </li>
        <li>
          <Link to="/state">HookState</Link>
        </li>
        <li>
          <Link to="/ref">Reference</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
