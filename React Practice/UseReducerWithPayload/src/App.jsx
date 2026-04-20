import { useState } from 'react';
import './index.css'
import { useEffect } from 'react';
import UseReducerComponent from './component/UseReducerComponent';
function App() {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return response.json();
    })
    .then((data) => setCategories(data))
    .catch((error) => error);

  },[])

  const styleD = {
    display: "flex",
    color  : "red"
  }

  const imgH={
    width : "100px",
    height : "auto"
  }

  return (
    <div>
    {/* <h2>Categories</h2>
    <ul style={styleD}>
      {categories.map((category) => (
        <li key={category.id}><img src={category.thumbnailUrl} alt={category.title} /></li>
        // <li  ><  img style={imgH} src={"http://localhost:5000/images/" + category.image} alt="" /></li>
      ))}
    </ul> */}


    <UseReducerComponent></UseReducerComponent>

  </div>
  )
}

export default App
