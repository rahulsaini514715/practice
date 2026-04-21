import React, { useState } from 'react'
import Loading from './component/Loading.jsx'
import "./App.css"

function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // 5 second baad loading ko hide karne ke liye
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      {loading ? (
        <div className="loader-overlay">
          <Loading />
        </div>
      ) : (
        <div>
          <div className='Loading-btn'>
            <button style={{padding:"20px 60px",borderRadius:"10px",fontWeight:"bold"}} onClick={handleClick}>Hello</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
