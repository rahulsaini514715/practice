import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([]); // Step 1: State for data

  
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await api.json();

      console.log(result)
      // console.table(result);

      // document.title=count;


      setTodos(result); // Step 2: Store result in state


    };

    fetchData();
  // }, []); 
}, [count]); 

  return (
    <div>
      UseEffectComponent...
      <h1>{count}...................</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>



      <h3>Todo List:</h3>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.id}. {item.title} {item.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectComponent;



// 🔄 useEffect kya hota hai?

// useEffect React ka ek Hook hai jo kisi component ke render hone ke baad side effects chalane ke liye use hota hai.
// "Side effects" ka matlab hai:
// API se data fetch karna
// Event listener lagana
// Local storage update karna
// Timer (setInterval / setTimeout) use karna
// DOM access karna



// 📌 Kab use karte hain useEffect?

// Situation	Explanation
// Component mount hote hi kuch karna ho	--- API call, initial setup
// Koi variable/state change hone par kuch karna ho	Jaise ---  user ke input ke according data filter karna
// Cleanup karna ho (component unmount hone par)---	Event listeners hataana, timers clear karna
