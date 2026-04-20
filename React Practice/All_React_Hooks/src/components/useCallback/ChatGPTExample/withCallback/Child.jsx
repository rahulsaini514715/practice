import React, { memo } from 'react';

// 👶 Named functional component
const Child = ({ onClick }) => {
  console.log("🔄 Child Render");
  return <button onClick={onClick}>Click Me</button>;
};

// 👌 Wrap with memo
export default Child;
