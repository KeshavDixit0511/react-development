import React, { useState } from 'react';

const NavBar = (props) => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [navStyle, setnavStyle] = useState({ backgroundColor: 'white' });

  const toggleMode = () => {
    setnavStyle(prevStyle =>
      prevStyle.backgroundColor === 'white' ? { backgroundColor: 'blue' } : { backgroundColor: 'white' }
    );
  };

  const handleToggleMode = () => {
    toggleMode();
    props.toggleMode(); // Invoke the toggleMode function passed as a prop
    setDarkModeEnabled(!darkModeEnabled); // Toggle the darkModeEnabled state
  };

  return (
    <>
      <div className="nav" style={navStyle}>
        <ul className="ul-list">
          <li className="nav-items-heading">{props.title}</li>
          <li className="nav-items">Home</li>
          <li className="nav-items">About</li>
          <button onClick={handleToggleMode} type="button">
            {darkModeEnabled ? 'Disable DarkMode' : 'Enable DarkMode'}
          </button>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
