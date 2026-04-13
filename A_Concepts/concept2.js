for (var i = 0; i < 3; i++) {
setTimeout(() => console. log(i), 1)
}
for (let i = 0; i < 3; i++) {
setTimeout(()=>console.log(i), 1)
}


// ✅ var ke saath sabhi setTimeout same i ko refer karte hain, isliye output hota hai 3 3 3.
// ✅ let har iteration me naya i banata hai, isliye output hota hai 0 1 2.





// for (var i = 0; i < 3; i++) {
//  console. log(i);
// }





// ❓ Toh difference kya hai setTimeout wale example se?
// ✅ Yahan console.log(i) turant run ho raha hai — har loop ke andar hi.
// Isliye tabhi ke tabhi i ka correct value print hota hai.

// 🕒 Lekin setTimeout me kya hota hai?

// setTimeout() ke andar jo function hai wo baad me run hota hai (async).

// Jab tak wo chalega, for loop khatam ho chuka hota hai.

// Aur var ek hi memory use karta hai — jo finally 3 ho jata hai.

// 🔄 2 line summary:
// ✅ console.log(i) loop ke andar hi run hota hai, isliye har baar sahi value print hoti hai.
// ❌ setTimeout() async hota hai, tab tak loop pura ho chuka hota hai, isliye sab bar 3 print hota hai (agar var use kiya).