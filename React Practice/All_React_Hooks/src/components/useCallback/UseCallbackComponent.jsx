import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallbackComponent = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // const handleClick = () => setCounter1(counter1 + 1);

const handleClick = useCallback(()=>setCounter1(counter1+1), [counter1])


  return (
    <div>
      UseCallbackComponent
      <h1>Counter2 = {counter2}</h1>
      <ChildComponent handleClick={handleClick} />
      <button onClick={() => setCounter2(counter2 + 1)}>Counter_2_Increase</button>
    </div>
  );
};

export default UseCallbackComponent;




/*

useCallback हुक React में एक बहुत ही महत्वपूर्ण हुक है जो फ़ंक्शन को मेमोइज़ करने में मदद करता है। यह हमें यकीनी बनाता
 है कि जब हम अपने कोड में फ़ंक्शन का इस्तेमाल करते हैं, तो वह बार-बार पुनः बनाया नहीं जाएगा।

इसका प्रयोग तब किया जाता है जब हमें यकीनी हो कि जब भी फ़ंक्शन को फिर से बनाने की आवश्यकता हो, तो उसके बनाने की 
कोशिश नहीं की जाए। यह अनिवार्य नहीं है कि हर बार इस्तेमाल करने की आवश्यकता हो।

यह एक्साम्पल है जिसमें आप useCallback का उपयोग करते हैं:


------------------------- --------------------------------

import React, { useCallback, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // useCallback हुक का उपयोग करके मेमोइज़ किया गया फ़ंक्शन
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;






----------------------------------------------------------------


इस उदाहरण में, increment फ़ंक्शन को useCallback के माध्यम से मेमोइज़ किया गया है। यहाँ पर फ़ंक्शन को केवल एक बार बनाया 
गया है, चाहे आप अपने कंपोनेंट को बार-बार रिरेंडर करें या न करें।

यह useCallback हुक का सरल उपयोग है। इसके द्वारा हम अपने कोड को प्रदर्शित करते हैं और उसके लिए एक महत्वपूर्ण व्यवस्था प्रदान करते हैं।

*/



/*

  # when use usecallback hook
  useCallback का उपयोग React में तब करना चाहिए जब आप प्रदर्शन (performance) को बेहतर बनाना चाहते हैं और फ़ंक्शन्स 
  को अनावश्यक रूप से पुनः निर्माण (recreate) होने से बचाना चाहते हैं। यह विशेष रूप से तब उपयोगी है जब:

  1. Callback को Props के रूप में Pass करना हो
  अगर आप किसी फ़ंक्शन को एक चाइल्ड कंपोनेंट में props के रूप में भेज रहे हैं और वह चाइल्ड कंपोनेंट React.memo() का 
  उपयोग कर रहा है, तो हर रेंडर के साथ एक नई फ़ंक्शन reference बनने से बचने के लिए useCallback का उपयोग करें।


import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;


*/


//-----------------------------------------------------------

/*

2. Memoized Functions की ज़रूरत हो
अगर कोई फ़ंक्शन किसी बड़े डाटा को प्रोसेस कर रहा है और हर रेंडर पर उसे फिर से बनाने की आवश्यकता नहीं 
है, तो useCallback का उपयोग करें।

उदाहरण:

const expensiveFunction = useCallback(() => {
  // Complex calculations here
}, [dependencies]);


*/

//-------------------------------------------------------


/*

3. Re-rendering को Optimize करना हो
अगर कोई कंपोनेंट बार-बार रेंडर हो रहा है और उसमें उपयोग हो रहे फ़ंक्शन्स को बार-बार recreate होने से बचाना है, तो useCallback काम आता है।







#...कब नहीं करना चाहिए उपयोग:

अगर फ़ंक्शन हल्का है और बार-बार बनने से परफॉर्मेंस पर असर नहीं पड़ता।
अगर आप छोटे या साधारण कंपोनेंट में काम कर रहे हैं।
जब तक आपको परफॉर्मेंस समस्या स्पष्ट रूप से नज़र न आए, तब तक इसे उपयोग करना ज़रूरी नहीं है।



सरल भाषा में:
useCallback का उपयोग केवल तब करें जब आप यह सुनिश्चित करना चाहते हैं कि कोई
फ़ंक्शन बार-बार रिक्रिएट न हो और इसका परफॉर्मेंस पर सीधा असर हो।
Normal scenarios में इसकी ज़रूरत नहीं होती।

*/




