import React from 'react'
import './App.css'
import UseCallBack from './component/useMemo/UseCallBack'
import UseMemoExpensive from './component/useMemo/useMemoExpensive'


function App() {
  return (
    <div>
        {/* <UseCallBack></UseCallBack> */}
        <UseMemoExpensive></UseMemoExpensive>
    </div>
  )
}

export default App
