import React, { useState, useCallback } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);

  // Memoized function
  const handleClick = () => {
    console.log("✅ Button clicked from child");
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Passing function to child */}
      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;
