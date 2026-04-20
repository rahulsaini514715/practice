
// 👨‍👦 Parent.js
import React, { useState, useCallback } from 'react';
import Child from './Child';

function WithCallBackParent() {
  const [count, setCount] = useState(0);

  // useCallback se function memoize ho gaya
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default WithCallBackParent;
