import React from 'react';

const ThemeSwitcher = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme} className="theme-button">
        {isDarkTheme ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
