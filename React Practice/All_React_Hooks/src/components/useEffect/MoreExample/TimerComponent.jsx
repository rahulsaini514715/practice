import { useEffect, useState } from 'react';

function TimerComponent() {
  const [message, setMessage] = useState('Waiting...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('⏰ Time is up!');
    }, 3000); // 3 second ke baad message change hoga

    return () => clearTimeout(timer); // Agar component unmount ho to cleanup
  }, []);

  return <h3>{message}</h3>;
}

export default TimerComponent;
