import React, { useContext, useState } from 'react'
import Mycontext from './Mycontext'

export const MoneyContext=({children})=> {
    
    const yojna={
        name :'rahul',
        age : 33
    }

    const [liked,setLiked]=useState('tttttt')

    return (<Mycontext.Provider value={{yojna,liked,setLiked}}>
          {children}
    </Mycontext.Provider>
    )
}


export const useBioContext=()=>{
    const context = useContext(Mycontext)
    return context;
}

// export default MoneyContext
