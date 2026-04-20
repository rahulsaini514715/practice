// import React, { useReducer } from 'react'

// function UseReducerComponent() {

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

const UseReducerComponent = () => {
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

export default UseReducerComponent;


// export default UseReducerComponent
