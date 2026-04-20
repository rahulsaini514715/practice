import { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    JSON.parse(localStorage.getItem('darkMode')) || false
  );

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(dark));
  }, [dark]); // Jab dark change hoga, tabhi localStorage update hoga

  return (
    <div style={{ background: dark ? '#333' : '#fff', color: dark ? '#fff' : '#000', padding: '20px' }}>
      <p>{dark ? '🌙 Dark Mode' : '☀️ Light Mode'}</p>
      <button onClick={() => setDark(!dark)}>Toggle Mode</button>
    </div>
  );
}


export default DarkModeToggle;