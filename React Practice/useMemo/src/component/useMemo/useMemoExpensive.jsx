
// pura component re render ho raha hai jab bhi couunt pe lcik karenege
import React, { useMemo, useState } from 'react';

import './usememo.css'
function UseMemoExpensive() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 1000000000; i++) {} // Simulating a long-running task
    return num * 2;
  }

  let doubleValue =useMemo( ()=>expensiveTask(input),[input]);

  return (
    <div className='container'>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <h1>
        Count: {count}
      </h1>
      <input type="number" placeholder='enter number' value={input} onChange={(e)=> setInput(e.target.value)} />

      <h1>
        Double: {doubleValue}
      </h1>
    </div>
  );
}

export default UseMemoExpensive;


/*
🔄 Kya ho raha hai jab tum "Increment" button pe click karte ho?
State change hoti hai (count badhta hai).
React pura component re-render karta hai – ye normal behavior hai React ka.
Lekin tumne useMemo use kiya hai, jiska matlab hai:
React check karega: kya input value change hui hai?
Agar input nahi badla, to expensiveTask dobara nahi chalega.
React pichli calculation ka result yaad rakhega (memoized value) aur wahi reuse karega.

🔍 Important Point:
Component hamesha re-render hota hai jab koi state (count ya input) change hoti hai.
Lekin expensive calculation tabhi chalegi jab uska dependency (input) change hoga.
Isse performance better hoti hai, kyunki heavy calculation baar-baar nahi hoti.

📌 Summary:
Haan, "Increment" button click karne se component re-render hota hai.
Lekin useMemo ki wajah se expensive function dobara nahi chalta, agar input same hai.
Sirf input change hone par hi calculation hoti hai.
Isse performance optimize hoti hai.
Samajh mein aaya? Agar chaho to main iska React DevTools ke saath working flow bhi bata sakta hoon.

*/




//without UseMemo
// import React, { useState } from 'react';

// import './usememo.css'
// function UseMemoExpensive() {
//   const [count, setCount] = useState(0);
//   const [input, setInput] = useState(0);

//   function expensiveTask(num) {
//     console.log("Inside Expensive Task");
//     for (let i = 0; i <= 1000000000; i++) {} // Simulating a long-running task
//     return num * 2;
//   }

//   let doubleValue = expensiveTask(input);

//   return (
//     <div className='container'>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <h1>
//         Count: {count}
//       </h1>
//       <input type="number" placeholder='enter number' value={input} onChange={(e)=> setInput(e.target.value)} />

//       <h1>
//         Double: {doubleValue}
//       </h1>
//     </div>
//   );
// }

// export default UseMemoExpensive;







