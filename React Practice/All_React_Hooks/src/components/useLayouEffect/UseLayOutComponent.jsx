// import React, { useEffect } from 'react'
// import { useState, useLayoutEffect } from 'react'

// const UseLayOutComponent = () => {
//     const [bgColor, setBgColor] = useState('yellow')

//       useEffect(() => {
//         console.log("UseEffect is Running ...");
//       }, []);

//     useLayoutEffect(() => {
//         console.log("UseLayoutEffect is Running..")
//      document.body.style.backgroundColor = bgColor
//     }, [bgColor])

  
    
//   return (
//     <div>UseLayOutComponent
//         <button onClick={()=>setBgColor('red')}>Changcolor</button>
//     </div>
//   )
// }

// export default UseLayOutComponent



//----------------------------------------------------------------------------------------------

// IMP

// Haan, bilkul! useEffect bhi useLayoutEffect ki tarah hi kaam karta hai, lekin ek chota
// antar hai. useEffect paint hone ke baad chalta hai jab DOM update ho chuki hoti hai, jabki
// useLayoutEffect paint hone se pehle chalta hai, yani DOM update hone se pehle.


// Agar aap useEffect istemal karenge, toh DOM ka size update hone ke baad hi milta
// hai. Iska matlab hai ki agar aapko render hone ke baad box ka size chahiye, toh useEffect 
// istemal karein. Yadi aapko render hone se pehle box ka size chahiye (jaise ki aapne kiya
// hai useLayoutEffect mein), toh useLayoutEffect hi istemal karein.


//--------------------------------------------------------------------------------------------------

import React, { useLayoutEffect, useRef, useState } from 'react';

function LayoutExample() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // Yeh DOM ka size nikalta hai paint hone se pehle
    const boxWidth = boxRef.current.getBoundingClientRect().width;
    setWidth(boxWidth);
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: '50%',
          height: '100px',
          backgroundColor: 'lightblue',
        }}
      >
        Box
      </div>

      <p>🔍 Above box width: {width}px</p>
    </div>
  );
}

export default LayoutExample;



//-----------------------------------------------------------------------------------------------












                                              // Diffrence

// 🔹 useEffect (normal wala)

// Ye render ke baad chalta hai.
// Jab component render ho jaata hai aur browser ne screen pe sab kuch dikha diya, uske baad ye chalta hai.
// Isme aap API calls, timers, event listeners wagairah likhte ho.
// 📌 Example:
// Agar tum kisi server se data fetch kar rahe ho, toh useEffect sahi rahega.





// 🔸 useLayoutEffect

// Ye render ke turant baad aur screen pe kuch show hone se pehle chalta hai.
// Agar tumhe layout ya DOM ka size/position read karni hai ya usme kuch change karna hai before paint, toh ye use karo.
// 📌 Example:
// Agar tum kisi element ki height nikal ke usi ke hisaab se dusre element ka size ya position set karna chahte ho.