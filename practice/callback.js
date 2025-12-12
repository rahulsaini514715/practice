/*

Callback Function in JavaScript (हिंदी में समझाया गया)
जावास्क्रिप्ट में Callback Function वह फंक्शन होता है जिसे एक अन्य फंक्शन के पैरामीटर के रूप में पास किया जाता है और फिर उस फंक्शन के अंदर कॉल किया जाता है। यह Asynchronous Programming को संभालने में मदद करता है, जिससे हम कोड को आसानी से और अधिक नियंत्रित तरीके से चला सकते हैं।


#  Callback Function की विशेषताएं:
Higher-Order Function: जो फंक्शन एक अन्य फंक्शन को पैरामीटर के रूप में लेता है।
Execution Control: हम यह तय कर सकते हैं कि पास किया गया फंक्शन कब और कैसे execute होगा।


*/


// -----------------------------------------------------------------------------------------

// # Example 1: Basic Callback Function



// Callback Function को परिभाषित करना
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    document.getElementById("callb").innerHTML=(`Hello, ${name}! `)
    callback(); // Callback function को कॉल करना
}

// Callback function को परिभाषित करना
function sayGoodbye() {
    console.log("Goodbye!");
}

// greet function को call करते समय callback पास करना
greet("Rahul", sayGoodbye);




/*

OUTPUT :
Hello, Rahul!
Goodbye!





# कैसे काम करता है?

greet फंक्शन ने दो पैरामीटर लिए: name और callback.
callback को sayGoodbye के रूप में पास किया गया।
greet के अंदर callback() को execute किया गया, जिससे "Goodbye!" प्रिंट हुआ।

*/




//---------------------------------------------------------------------------------------


// # Example 2: Callback Function with SetTimeout (Asynchronous)

/*

function fetchData(callback) {
    console.log("Fetching data... Please wait.");
    setTimeout(() => {
        console.log("Data fetched successfully!");
        callback(); // Callback function को execute करना
    }, 2000); // 2 सेकंड का delay
}

function processData() {
    console.log("Processing the fetched data...");
}

// fetchData function में processData को callback के रूप में पास करना
fetchData(processData);



OUTPUT :
 
Fetching data... Please wait.
Data fetched successfully!
Processing the fetched data...



# कैसे काम करता है?

fetchData फंक्शन ने एक callback लिया और setTimeout का उपयोग करके 2 सेकंड बाद डेटा को "fetch" किया।
डेटा "fetch" होने के बाद callback() को कॉल किया, जिससे processData फंक्शन execute हुआ।

*/



//---------------------------------------------------------------------------------------------



// #. Uses of callback fuction

/*

Callback Function के उपयोग:
Event Handling: जैसे onclick, onchange, आदि।
API Calls: जैसे जब सर्वर से डेटा प्राप्त करना हो।
Asynchronous Tasks: जैसे setTimeout, setInterval।



Callback Function का लाभ:
कोड अधिक modular और reusable होता है।
Asynchronous operations को नियंत्रित करने में मदद करता है।
नोट: अधिक जटिल परिस्थितियों में, Callback Hell (कई callback functions nested होना) से बचने के लिए, Promises या Async/Await का उपयोग करना बेहतर होता है।

*/









