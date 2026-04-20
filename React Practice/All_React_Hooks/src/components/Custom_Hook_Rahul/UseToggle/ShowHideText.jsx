import React from 'react';
import useToggle from './useToggle';

function ShowHideText() {
  const [visible, toggleVisible] = useToggle();

  return (
    <div>
      <button onClick={toggleVisible}>
        {visible ? 'Hide' : 'Show'} Text
      </button>
      {visible && <p>Hello! I'm visible 😄</p>}
    </div>
  );
}


export default ShowHideText;
