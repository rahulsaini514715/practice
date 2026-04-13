const button=document.getElementById("search-button");
const input=document.getElementById("city-input");
const cityName =document.getElementById("city-name");
const cityTime =document.getElementById("city-time");

 async function getData(cityName){
     const promise = await   fetch(`http://api.weatherapi.com/v1/current.json?key=1998f6f42e6c4af9b88180617240308&q=${cityName}&aqi=yes`);
   return await promise.json();
}

button.addEventListener('click',async()=>{
  const value = input.value;
  const result = await getData(value);
  console.log(result)
  cityName.innerText =`${result.location.name},${result.location.region}-${result.location.country}`;
  cityTime.innerHTML=`${result.current.air_quality.co}`;
})

// api
// http://api.weatherapi.com/v1/current.json?key=1998f6f42e6c4af9b88180617240308&q=London&aqi=yes
