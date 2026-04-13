// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((res)=>{ return res.json();})
//     // .then( (data)=>{ console.log(data); })
//     .then( (data)=>{
//          // Create a list of all album IDs
//         //  const albumIds = data.map(photo => photo.albumId).join(", ");
//         const albumIds = data.map(photo => photo.albumId);
//         const url = data.map(photo => photo.url);
//          document.getElementById("data").innerHTML = `Album IDs: ${albumIds}  ${url} </br>`;
//     })


// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((res) => res.json())
//     .then((data) => {
//         // Generate HTML for each albumId and URL
//         const content = data.map(photo => 
//             `<p>Album ID: ${photo.albumId}, URL: <a href="${photo.url}" target="_blank">${photo.url}</a> , THUMBNAIL :  ${photo.thumbnailUrl}</p>`
//         ).join("***********************************");

//         // Set the generated HTML to the element with ID 'data'
//         document.getElementById("data").innerHTML = content;
//     })


    // card
    // fetch("https://jsonplaceholder.typicode.com/photos")
    // .then((res) => res.json())
    // .then((data) => {
    //     const limitedData = data.slice(0, 30);
    //     // Generate HTML for each albumId and URL
    //     const content = limitedData.map(photo => 
    //         `<div class="card" style="width: 18rem;text-align:center;float:left; margin :10px ;height:300px">
    //          <div class="card-body">
    //          <h5 class="card-title">AblumID ${photo.albumId}</h5>
    //          <img  src="${photo.thumbnailUrl}"/>
    //          <p class="card-text">${photo.title}</p>
             
    //          </div>
    //     </div>`
    //     ).join("");

    //     // Set the generated HTML to the element with ID 'data'
    //     document.getElementById("data").innerHTML = content;
    // })



    //card
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => res.json())
    // .then((data) => {
    //     const limitedData = data.slice(0, 6);
    //     // Generate HTML for each albumId and URL
    //     const content = limitedData.map(photo => 
    //         `<div class="card" style="width: 18rem;text-align:center;float:left; margin :10px ;height:300px">
    //          <div class="card-body">
    //          <h5 class="card-title">AblumID : 2 : ${photo.id}</h5>
    //          <p class="card-text">Email : ${photo.email}</p>
    //          <p class="card-text"Street : >Street : ${photo.address.street}</p>
    //          <h5 class="card-text">Zipcode : ${photo.address.zipcode}</h5>
    //          </div>
    //     </div>`
    //     ).join("");

    //     // Set the generated HTML to the element with ID 'data'
    //     document.getElementById("write").innerHTML = content;
    // })




const data = {
    title: "This is Title",
    body: "This is body post",
    userId: 5
}

fetch("https://jsonplaceholder.typicode.com/posts" ,{
   
    method: "GET",
    body: JSON.stringify(data),
    headers : {
        "Content-type": "application/json"
    }
}).then(res => res.json()).then(data => document.getElementById("data").innerHTML=data.title)




   