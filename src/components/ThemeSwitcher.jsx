import React from 'react';

const ThemeSwitcher = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        {isDarkTheme ? 'Light Mode' : 'Dark TMode'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
