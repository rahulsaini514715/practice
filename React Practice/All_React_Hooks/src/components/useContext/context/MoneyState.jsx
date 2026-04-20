import { useState } from "react";
import MyContext from "./MyContext";

const MoneyState = (props) => {
  const yojna = {
    money: 5000,
    rashan: true,
    penstion: 500,
  };
  const [counter, setCounter] = useState(0);
  return (
    <MyContext.Provider
      value={{
        yojna,
        counter,
        setCounter,
      }}
    >
      {props.children}
      
      {/* ✅ Short Answer:
      ❌ Nahi bhai! children is a special built-in prop in React.
      Agar tu child, chotu, ya xyz likhega to React automatically usme content pass nahi karega. */}


    </MyContext.Provider>
  );
};

export default MoneyState;
