import React, { useLayoutEffect } from "react";
import UseStateComponent from "./components/UseState/UseStateComponent";
import UseReducerComponent from "./components/useReducer/UseReducerComponent";
import UseEffectComponent from "./components/useEffect/UseEffectComponent";
import UseRefComponent from "./components/useRef/UseRefComponent";
import IndianGovernMent from "./components/useContext/IndianGovernMent";
import MoneyState from "./components/useContext/context/MoneyState";
import UseLayOutComponent from "./components/useLayouEffect/UseLayOutComponent";
import UseCallbackComponent from "./components/useCallback/UseCallbackComponent";
import UseMemoComponent from "./components/useMemo/UseMemoComponent";
import Test from "./components/useFetch_Custom_Hook/Test";
import ThemeSwitcher from "./components/Custom_Hook_Rahul/localStroage/ThemeSwitcher";
import ShowHideText from "./components/Custom_Hook_Rahul/UseToggle/ShowHideText";
import ResponsiveComponent from "./components/Custom_Hook_Rahul/UseWindowWidth/ResponsiveComponent";
import Parent from "./components/useCallback/ChatGPTExample/withoutCallback/Parent";
import WithCallBackParent from "./components/useCallback/ChatGPTExample/withCallback/WithCallBackParent";
import SearchFilter from "./components/useEffect/MoreExample/SearchFilter";
import TimerComponent from "./components/useEffect/MoreExample/TimerComponent";
import DarkModeToggle from "./components/useEffect/MoreExample/DarkModeToggle";
import DataLoader from "./components/useEffect/MoreExample/DataLoader";
import UseRefCurrentWidth from "./components/useRef/useRefCurrentWidth";
import UseMemoComponentFactorial from "./components/useMemo/UseMemoComponentFactorial";
const App = () => {
  return (
    <MoneyState>
      {/* <UseStateComponent /> */}
      {/* <UseReducerComponent /> */}
      {/* <UseEffectComponent /> */}
      {/* <UseRefComponent /> */}
      {/* <IndianGovernMent /> */}
      {/* <UseLayOutComponent /> */}
      {/* <UseCallbackComponent /> */}
      <UseMemoComponent />
      <UseMemoComponentFactorial></UseMemoComponentFactorial>
      {/* <Test /> */}
      {/* <Parent/>                   
      <WithCallBackParent/> */}
                           {/* ye rahul ne banaya hai.....Parent or WithCallBackParent */}

      {/* <ThemeSwitcher></ThemeSwitcher>
      <ResponsiveComponent></ResponsiveComponent>
      <ShowHideText></ShowHideText> */}


      {/* <SearchFilter></SearchFilter>
      <TimerComponent></TimerComponent>
      <DarkModeToggle></DarkModeToggle>
      <DataLoader></DataLoader> */}
 
      {/* <UseRefAddEventListner></UseRefAddEventListner> */}


      {/* <UseRefCurrentWidth></UseRefCurrentWidth> */}
    </MoneyState>
  );
};

export default App;
  