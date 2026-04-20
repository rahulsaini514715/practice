// import React from "react";
// import { useRef } from "react";

// const UseRefComponent = () => {
//   const myRef = useRef(null);
//   // console.log(myRef);

//   const focusInput = () => {
//     myRef.current.focus();
//   };
//   return (
//     <div>
//       <input ref={myRef} type="text" />
//       <button onClick={focusInput}>Focus</button>
//     </div>
//   );
// };

// export default UseRefComponent;


//--------------------------------------------------------------------------------------------

import React, { useReducer, useRef } from 'react';

// ✅ Reducer Function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.pay };  //payload
    case 'SET_EMAIL':
      return { ...state, email: action.pay };
    case 'RESET':
      return { name: '', email: '' };
    default:
      return state;
  }
};

// ✅ Initial State
const initialFormState = {
  name: '',
  email: ''
};

const UseRefComponent = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  // ✅ useRef to control input focus
  const nameInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', state);

    // Reset state
    dispatch({ type: 'RESET' });

    // ✅ Set focus to name input again
    nameInputRef.current.focus();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={nameInputRef} // 🎯 focus target
          placeholder="Enter Name"
          value={state.name}
          onChange={(e) => dispatch({ type: 'SET_NAME', pay: e.target.value })}
        /><br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_EMAIL', pay: e.target.value })}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>

      <h3>Live Preview:</h3>
      <p><strong>Nameee:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
    </div>
  );
};

export default UseRefComponent;


//---------------------------------------------------------------------------------------------------







// 🔍 What is useRef?
// useRef is a built-in React hook that gives you a mutable reference to a DOM element or a value that 
// persists across renders without causing re-renders.

// const ref = useRef(initialValue);






// ✅ Use Cases of useRef
// 1. Accessing DOM Elements (like document.getElementById)

// const inputRef = useRef();

// <input ref={inputRef} />
// <button onClick={() => inputRef.current.focus()}>Focus</button>

// 📌 This is useful when you need to:

// Focus an input
// Scroll to an element
// Trigger a click programmatically







// 2. Storing Previous Values (Without Re-rendering)
// const prevCount = useRef();

// useEffect(() => {
//   prevCount.current = count;
// }, [count]);

// 📌 This is useful for:
// Comparing current vs previous props or state
// Tracking changes over time





// 3. Avoiding Re-render on Change
// Unlike useState, changing useRef().current does not cause re-renders.

// const renderCount = useRef(0);
// renderCount.current++;
// console.log(renderCount.current); // keeps counting, but doesn't trigger re-render



// 4. Storing Mutable Values That Survive Re-renders
// If you want to store a value that persists, but don’t want it to trigger re-renders (like a timeout ID, or a WebSocket connection):

// const timeoutId = useRef();

// useEffect(() => {
//   timeoutId.current = setTimeout(() => {
//     console.log("Timeout triggered!");
//   }, 1000);
// }, []);








// ❓ Why use useRef?
// To access DOM nodes directly

// To store values that don’t need to trigger re-renders

// To keep track of mutable values between renders

// To store previous props or state





/* 
 
    # useRef क्यों उपयोग किया जाता है?
         DOM Elements को Reference करने के लिए: जब आपको किसी HTML element (जैसे input, button) पर directly काम करना हो, जैसे focus करना या value पढ़ना, तो useRef मदद करता है।

         Mutable Values को Store करने के लिए: अगर आपको कोई ऐसी value store करनी है जो render के बीच change हो, लेकिन re-render trigger न करे, तो आप useRef का उपयोग कर सकते हैं।

         Previous State या Value Track करने के लिए: यह value को याद रखने में मदद करता है, जैसे component का last state या value।

---------------------------------------------------------------------------------------------------------- 


    # कैसे काम करता है?
         useRef एक object देता है, जिसमें एक current property होती है। आप जो भी value या element reference करना चाहते हैं, वह current property में stored रहता है।
         यह re-render के बीच value को maintain करता है।

*/


