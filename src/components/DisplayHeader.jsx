import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const DisplayHeader = ({toggleTheme, isDarkTheme}) => {
  return (
    <div className="display-header">
      <i className="fas fa-robot"></i>
      <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </div>
  );
};

export default DisplayHeader;
