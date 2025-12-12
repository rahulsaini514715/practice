// Promise JavaScript ka ek object hota hai jo asynchronous operations ko handle karne ke
//  liye use hota hai. Ye future me complete hone wale kaam ka result represent karta hai.
//   Ek Promise ke teen states ho sakte hain: pending, resolved (fulfilled), ya rejected. 
//   Jab hum koi asynchronous task likhte hain, jaise API call ya setTimeout, toh Promise 
//   ka use karke hum uske complete hone ka response manage karte hain using .then(), 
//   .catch(), aur .finally() methods."



//first promise

// const promiseOne = new Promise(function(resolve, reject) {
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout (function(){
//     console.log('Async task is compelete' );
//     resolve()
//     }, 2000)
    
//     })
    
//     promiseOne.then (function(){
//         console.log("promise Comsumed");
//     })


// ✅ Breakdown:
// | Part                                | Type                           | Explanation                         |
// | ----------------------------------- | ------------------------------ | ----------------------------------- |
// | `Promise`                           | ✅ Class / Constructor Function | JavaScript ka built-in class hai    |
// | `new Promise(...)`                  | ✅ Creates an Object            | Ek naya Promise object banata hai   |
// | `function(resolve, reject) { ... }` | ✅ Function                     | Isko "executor function" bolte hain |
// | `promiseOne`                        | ✅ Object                       | Yeh Promise class ka instance hai   |


    // 2nd promise----------------------------

        // new Promise(function(resolve, reject) {
        // //Do an async task
        // // DB calls, cryptography, network
        // setTimeout (function(){
        // console.log('Async task 2' );
        // resolve()
        // }, 1000)
        
        // }).then (function(){
        //     console.log("asynced 2 resolved");
        // })


// 3rd promise----------------------------


    // const promiseThird = new Promise(function(resolve, reject) {
    // //Do an async task
    // // DB calls, cryptography, network
    // setTimeout (function(){
    // resolve({username : "chai", email:"sksaini514715@gmail.com" })
    // }, 1000)
    
    // })
    
    // promiseThird.then (function(user){
    //     console.log("Promise 3--------------------------")
    //     console.log("user");
    //     console.log(user);
    // })




// 4th promise----------------------------

// const promiseFour = new Promise(function(resolve, reject) {
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout (function(){
//         let error = false;
//         if(!error){
//             resolve({username : "RAhul", password:"12345678" })
//         }else{
//             reject('ERROR: Something Went Wrong')
//         }
//     }, 1000)
    
//     })
    
//     promiseFour.then ((user) => {
//         console.log("Promise 4--------------------------")
//         console.log(user);
//         return user.username;
//     }).then((username)=>{
//           console.log(username);
//     }).catch(function(error){
//         console.log(error);
//     }).finally(()=>{
//         console.log("the promise is either resolved or rejected")
//     })





// 5th promise----------------------------

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout (function(){
//         let error = true;  //eske liye error show karega chanfe in false
//         if(!error){
//             console.log("Promise 5--------------------------")
//             resolve({username : "Javascript", password:"12345678" })
//         }else{
//             console.log("ERROR: Js Went Wrong : Promise 5--------------------------")
//             reject('ERROR: Js Went Wrong---p---')
//         }
//     }, 1000)
// })



/*
        JavaScript में await एक कीवर्ड है जिसे हम asynchronous functions के साथ उपयोग करते हैं।
        यह किसी Promise को "resolve" या "reject" होने तक रुकने (wait) के लिए उपयोग किया जाता है।
        await का उपयोग केवल async function के अंदर ही किया जा सकता है।
        
        ------------------------------------------------------------------------------------------

        ध्यान देने योग्य बातें:
        await को केवल async function के अंदर ही इस्तेमाल किया जा सकता है। अगर आप इसे बाहर इस्तेमाल करेंगे तो यह SyntaxError देगा।
        
        # गलत उपयोग
        let result = await fetch('https://api.example.com/data'); // SyntaxError

        ------------------------------------------------------------------------------------------ 
        सरल शब्दों में:
        await का मतलब है "रुको और काम पूरा होने दो।" यह asynchronous कोड को synchronous जैसा महसूस कराता है।
*/



 
// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }catch(error){
//         console.log(error)
//     }
// }
    
// consumePromiseFive();


//6th promise by using async and await

// async function getAllUser(){
//      try{ 
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log("6th promise by using async and await------------------ ");
//     console.log(data);
//      }
//      catch(error){
//         console.log("E : ",error);
//      }

// }

// getAllUser()



//7th promise ......6th same method by using then

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log("7th promise by using async and await------------------ ");
//     console.log(data)  
// })
// .catch((error)=>{
//     console.log("Error : ",error)
// })


