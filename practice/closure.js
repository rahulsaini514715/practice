/*   
        Closure in JavaScript (क्लोजर)
        जब कोई इनर फंक्शन (Inner Function) अपने आउटर फंक्शन (Outer Function) की वेरिएबल्स
        और पैरामीटर्स को एक्सेस करता है, तो इसे Closure कहते हैं।

*/

function outerFunction() {
    let count = 0; // Outer function का वेरिएबल

    function innerFunction() {
        count++; // Outer वेरिएबल को modify कर रहे हैं 
        console.log("Count is:", count);
    }

    return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // Count is: 1
closureFunc(); // Count is: 2
closureFunc(); // Count is: 3


/*
        कैसे काम करता है:
        outerFunction कॉल करने पर यह एक innerFunction को रिटर्न करता है।
        innerFunction में count वेरिएबल का reference होता है, जो outer function के scope में है।
        जब closureFunc को बार-बार कॉल करते हैं, तब भी यह count को याद रखता है।
 



       1. Closure के फायदे:
        डाटा को प्राइवेट रखना:
        आप closure का उपयोग करके डाटा को encapsulate कर सकते हैं।

*/

function counter() {
    let count = 0; // प्राइवेट वेरिएबल

    return {
        increment: function () {
            count++;
            console.log("Count:", count);
        },
        decrement: function () {
            count--;
            console.log("Count:", count);
        },
    };
}

const myCounter = counter();
myCounter.increment(); // Count: 1
myCounter.increment(); // Count: 2
myCounter.decrement(); // Count:


// 2. Callback Functions:
//    Closures का उपयोग asynchronous कोड (जैसे event listeners, timeouts) में किया जाता है।

function greet(name) {
    return function () {
        console.log("Hello, " + name);
    };
}

const greetRahul = greet("Rahul");
greetRahul(); // Hello, Rahul


    //    3.Closure का व्यवहार:
    //    Closure में इनर फंक्शन outer फंक्शन के variables का reference रखता है, न कि उनकी copy।
    //    अगर outer फंक्शन के वेरिएबल्स बदलते हैं, तो closure में भी वही अपडेट दिखता है।


//one more example
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Closure एक शक्तिशाली फीचर है जो JavaScript में डाटा हाइडिंग और प्राइवेट वेरिएबल्स को मैनेज 
// करने में मदद करता है। इसे समझना आपके JavaScript कौशल को मजबूत करेगा।











//........................................................................................
// ⭐ Final One-Line Answer
// Closure = Function + Remembered Variables (Lexical Scope)

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const c = counter();
c(); // 1
c(); // 2
c(); // 3



