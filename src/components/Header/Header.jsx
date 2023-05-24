import "./Header.css";

import React from 'react'

const Header = ({ onCreate }) => {
  return (
    <header className="header">
      <h1>Users</h1>
    <button onClick={() => onCreate()}>Create a new form</button>
    </header>
  );
};

export default Header;