import React, { useContext } from 'react'
import MyContext from './context/MyContext';

import Janta_People from './Janta_People'
const Block = () => {
  const data = useContext(MyContext)
  return (
    <div>
      Block
      <Janta_People />
      
      <h1>BLOCK SE AAYA HU : {data.yojna.money}</h1>
      <h1>BLOCK SE AAYA HU : {data.yojna.penstion}</h1>
    </div>
  );
};

export default Block