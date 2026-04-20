import { useCallback, useMemo, useState } from "react";
                                                          //this usememo hook made by rahul saini by chatgpt
function UseMemoComponentFactorial() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  
  const handleClick=useCallback(() => {
    setCount(count + 1)
    console.log(count)
  },[count]
  )
  // 🔁 Expensive factorial function
  const factorial = (n) => {
    console.log('🧮 Calculating factorial...');
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  // ✅ useMemo: Only recalculate factorial when number changes
  const memoizedFactorial = useMemo(() => factorial(number), [number]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>useMemo Example</h2>

      <div>
        <label>Enter a number: </label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>

      <h3>Factorial: {memoizedFactorial}</h3>

      <button onClick={handleClick}>Re-render Count ({count})</button>
    </div>
  );
}

export default UseMemoComponentFactorial;


