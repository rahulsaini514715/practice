import React from "react";
import { useReducer } from "react";

const UseReducerComponent = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count ='rrrrr' };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    } };
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <div>
      UseReducerComponent
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increse</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrese</button>
    </div>
  );
};

export default UseReducerComponent;





// ✅ Definition (in simple words):
// useReducer is a React hook used to manage complex state logic in a component.




// 🎯 When to use useReducer:
// Use it when:
// Your state has multiple values (e.g. an object with many fields).
// The next state depends on the previous state.
// You have many if-else or switch conditions to update the state.
// You want to keep the state logic organized and separate from your component.





// ❓ Why use useReducer instead of useState:
// useState is best for simple state (like a counter or a single input).
// useReducer is better when:
// The state is nested or complex.
// You want to handle state updates in a centralized way.
// You are building a form, a shopping cart, a todo app, or anything where state updates depend on actions (like "ADD", "REMOVE", etc.).




// useReducer() ek React hook hai jo state manage karta hai Redux style me – yaani actions ke through.
// 💡 Kab use karte hain?
// Jab tumhare component ki state complex hoti hai
// Jab multiple states ko ek saath handle karna ho
// Jab multiple values ek hi state object me rakhe ho
// Jab state updates depend karte hain previous state par

