import React from 'react'
import {MoneyContext} from './useContext/create context/MoneyContext'
import Rahul from './useContext/component/Rahul'
function App() {
  return (
   
      <MoneyContext>
         <Rahul></Rahul>
      </MoneyContext>
   
  )
}

export default App
