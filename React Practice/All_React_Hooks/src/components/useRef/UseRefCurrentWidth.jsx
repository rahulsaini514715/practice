

import React, { useLayoutEffect, useRef, useState } from 'react';

function UseRefCurrentWidth() {
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);

  const focusInput = () => {
    if (inputRef.current.value === '') {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = 'red';
    } else {
      inputRef.current.style.backgroundColor = 'green';
    }
  };

  const getBoxSize = () => {
    if (boxRef.current) {
      const width = boxRef.current.getBoundingClientRect().width;
      setBoxWidth(width);
    }
  };

  useLayoutEffect(() => {
    getBoxSize(); // Automatically calculate on first render
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>

      <div ref={boxRef} style={{ width: '50%', height: '100px', backgroundColor: 'red' }}></div>
      <div>Box Width: {boxWidth}px</div>
      <button onClick={getBoxSize}>Get Box Size</button>
    </div>
  );
}

export default UseRefCurrentWidth;

