import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const DisplayHeader = ({toggleTheme, isDarkTheme}) => {
  return (
    <div className="display-header">
      <h2>Chat with Bot</h2>
      <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </div>
  );
};

export default DisplayHeader;
