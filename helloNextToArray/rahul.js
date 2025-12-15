

//  const arr = ['rahul', 'meeena', 'monika'];
//     let index = 0;
//     function showNext() {
//       const ss = document.getElementById('j');
      
//       if (index < arr.length) {
//         ss.innerHTML = 'Hello ' + arr[index];
//         index++;
//       } 
//        if (index === arr.length) {
//         index = 0; // Restart from beginning
//       }
// }


 const arr = ['rahul', 'meeena', 'monika'];
    let index = 0;
      const ss = document.getElementById('j');
      ss.onclick=(()=>{
      if (index < arr.length) {
        ss.innerHTML = 'Hello ' + arr[index];
        index++;
      } 
       if (index === arr.length) {
        index = 0; // Restart from beginning
      }
    }
    )


    




