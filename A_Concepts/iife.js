//without using let block scope of varible
// node iife.js ....for run this code 




// function show(){
//     {
//         var a=10;   //but is accessable but we cannot use let the we use iife
//         var b= 20;
//     }
//     console.log(a)
// }
// show()                 //in dono code mai se ek he co run karna kyu don func alaga type ke hai

(function() {
  console.log("IIFE chalu ho gaya!");
})();


// ❓ IIFE kya hota hai?
// IIFE ka full form hai:

// Immediately Invoked Function Expression
// (Matlab: Ek function jo turant chal jata hai jab define kiya jata hai)


// 🔍 Kyun use karte hain IIFE?
// ✅ Code turant run karne ke liye
// — Agar tumhe koi function sirf ek baar run karna hai setup ke time pe.

// 🔐 Private variables banane ke liye
// — Function ke andar wale variables bahar access nahi ho sakte. Safe rehte hain.

// 🌍 Global scope ganda na ho isliye
// — Global variables banane se bacha ja sakta hai.


(function() {
  var name = "Rahul";
  console.log(name);              
})();

// console.log(name);     // ................   it gives error otside iife