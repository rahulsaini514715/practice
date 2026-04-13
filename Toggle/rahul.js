
// let toggleValue=true;

// let p = document.getElementById('j');
// function Toggle(){
//   toggleValue=!toggleValue;
//   p.innerHTML='Value' + toggleValue;
// }


let toggleValue = true;
    let p = document.getElementById('j');

    function Toggle() {
      toggleValue = !toggleValue;
      p.innerHTML = 'Value: ' + toggleValue;

      // ✅ Toggle color
      if (toggleValue) {
        p.style.color = "green";
      } else {
        p.style.color = "red";
      }
    }

