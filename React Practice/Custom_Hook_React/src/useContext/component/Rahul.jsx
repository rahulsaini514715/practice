import React from 'react'
import Mycontext from '../create context/Mycontext'
import { useBioContext } from '../create context/MoneyContext'

function Rahul() {
    // const hh= useContext(Mycontext)
    const hh=  useBioContext();
  return (
    <div>
      <h1>{hh.yojna.age}</h1>
      <h1>{hh.yojna.name}</h1>
      <h1>{hh.liked ? 'Yes ❤️' : 'No ❌'}</h1>
      <button onClick={() => hh.setLiked(!hh.liked)}>Toggle</button>
      
    </div>
  )
}

export default Rahul
