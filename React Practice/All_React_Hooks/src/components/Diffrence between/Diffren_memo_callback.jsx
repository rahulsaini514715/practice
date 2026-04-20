/* 

React में useMemo और useCallback दोनों ही performance optimization के
लिए उपयोग किए जाते हैं, लेकिन उनके उपयोग और उद्देश्य में अंतर है। 
आइए दोनों को विस्तार से समझते हैं:



1. useMemo
Purpose: यह किसी computationally expensive (भारी) calculation का परिणाम (value) मेमोइज़ करने के लिए उपयोग किया जाता है ताकि हर रेंडर पर इसे दोबारा न बनाया जाए।
Return Value: यह calculated value को मेमोइज़ करता है।
Usage: जब कोई भारी computation हो या कोई value दोबारा न बनानी हो।
Example:

import React, { useMemo, useState } from 'react';

const ExpensiveCalculation = ({ num }) => {
  const calculateFactorial = (n) => {
    console.log("Calculating factorial...");
    return n <= 0 ? 1 : n * calculateFactorial(n - 1);
  };

  // `useMemo` will only recompute if `num` changes
  const factorial = useMemo(() => calculateFactorial(num), [num]);

  return <p>Factorial of {num} is {factorial}</p>;
};

export default ExpensiveCalculation;


यहाँ factorial केवल तभी पुनः गणना (recalculate) होगा जब num बदलता है। अन्यथा, मेमोइज़ किया गया परिणाम इस्तेमाल किया जाएगा।



-----------------------------------------------------------------




2. useCallback
Purpose: यह किसी function को मेमोइज़ करने के लिए उपयोग किया जाता है ताकि हर रेंडर पर उसे दोबारा न बनाया जाए।
Return Value: यह एक memoized function को रिटर्न करता है।
Usage: जब आप कोई फ़ंक्शन props के रूप में चाइल्ड कंपोनेंट को पास कर रहे हों या किसी expensive operation वाले फ़ंक्शन को बार-बार recreate होने से बचाना हो।
Example:

import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ handleClick }) => {
  console.log("Child component rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Function will only be recreated if dependencies change

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default ParentComponent;



 * यहाँ handleClick केवल एक बार मेमोइज़ किया जाएगा और ChildComponent बार-बार रेंडर नहीं होगा।



सरल भाषा में:
useMemo: जब कोई भारी गणना हो और उसका परिणाम (value) हर बार न बनाया जाए।
useCallback: जब कोई फ़ंक्शन बार-बार न बनाया जाए, खासकर जब वह किसी चाइल्ड कंपोनेंट को props के रूप में दिया जा रहा हो।

*/