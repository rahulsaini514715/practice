import React from 'react';
import useWindowWidth from './UseWindowWidth';


function ResponsiveComponent() {
  const width = useWindowWidth();

  return (
    <div>
      <p>Window Width: {width}px</p>
      {width < 768 ? <p>Mobile View</p> : <p>Desktop View</p>}
    </div>
  );
}

export default ResponsiveComponent;