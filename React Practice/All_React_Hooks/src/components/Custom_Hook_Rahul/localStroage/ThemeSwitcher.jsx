import React from 'react';
import UseLocalStorage from './UseLocalStorage';


function ThemeSwitcher() {
  const [theme, setTheme] = UseLocalStorage('theme', 'light');

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;