// import React from "react";
// import { createStore, applyMiddleware } from "redux";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import thunk from "redux-thunk";

// // Initial state
// const initialState = {
//   count: 0,
//   loading: false,
// };

// // Action types
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const START_LOADING = "START_LOADING";
// const STOP_LOADING = "STOP_LOADING";

// // Action creators
// const increment = () => ({
//   type: INCREMENT,
// });

// // Decrement
// const decrement = () => ({
//   type: DECREMENT,
// });

// // Loading
// const startLoading = () => ({
//   type: START_LOADING,
// });

// // Stop Loading
// const stopLoading = () => ({
//   type: STOP_LOADING,
// });

// // Thunk action for increment with delay
// const incrementAsync = () => {
//   return (dispatch) => {
//     dispatch(startLoading()); // show loading first
//     setTimeout(() => {
//       dispatch(increment()); // then increment after 1sec
//       dispatch(stopLoading()); // then stop loading
//     }, 7000);
//   };
// };

// // Thunk action for decrement with delay
// const decrementAsync = () => {
//   return (dispatch) => {
//     dispatch(startLoading()); // show loading first
//     setTimeout(() => {
//       dispatch(decrement()); // then decrement after 1sec
//       dispatch(stopLoading()); // then stop loading
//     }, 7000);
//   };
// };

// // Reducer
// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case DECREMENT:
//       return { ...state, count: state.count - 1 };
//     case START_LOADING:
//       return { ...state, loading: true };
//     case STOP_LOADING:
//       return { ...state, loading: false };
//     default:
//       return state;
//   }
// }

// // Store with Thunk middleware
// const store = createStore(rootReducer, applyMiddleware(thunk));

// function AppContent() {
//   const dispatch = useDispatch();
//   const { count, loading } = useSelector((state) => state);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Increment Decrement with Thunk</h1>
//       <p>Count: {count}</p>
//       {loading && <p>Loading...</p>}

//       <button onClick={() => dispatch(incrementAsync())}>
//         Increment (with Thunk)
//       </button>

//       <button onClick={() => dispatch(decrementAsync())}>
//         Decrement (with Thunk)
//       </button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Provider store={store}>
//       <AppContent />
//     </Provider>
//   );
// }

// export default App;



















import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";

// Initial state
const initialState = {
  count: 0,
  loading: false,
};

// Action types
const INCREMENT = "increment/rahul";
const DECREMENT = "DECREMENT";
const START_LOADING = "START_LOADING";
const STOP_LOADING = "STOP_LOADING";

// Action creators
const increment = () => ({
  type: INCREMENT,
});

// Decrement
const decrement = () => ({
  type: DECREMENT,
});

// Loading
const startLoading = () => ({
  type: START_LOADING,
});

// Stop Loading
const stopLoading = () => ({
  type: STOP_LOADING,
});

// Thunk action for increment with delay
const incrementAsync = () => {
  return (dispathRahul) => {
    dispathRahul(startLoading()); // show loading first
    setTimeout(() => {
      dispathRahul(increment()); // then increment after 7 seconds
      dispathRahul(stopLoading()); // then stop loading
    }, 7000);
  };
};

// Thunk action for decrement with delay
const decrementAsync = () => {
  return (dispathRahul) => {
    dispathRahul(startLoading()); // show loading first
    setTimeout(() => {
      dispathRahul(decrement()); // then decrement after 7 seconds
      dispathRahul(stopLoading()); // then stop loading
    }, 7000);
  };
};

// Reducer
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
}

// Store with Thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

function AppContent() {
  
  const { count, loading } = useSelector((state) => state);
const dispatch = useDispatch();
  return (
    <div style={{ padding: "20px" }}>
      <h1>Increment Decrement with Thunk</h1>
      <p>Count: {count}</p>
      {loading && <p>Loading...</p>}

      <button onClick={() => dispatch(incrementAsync())}>
        Increment (with Thunk)
      </button>

      <button onClick={() => dispatch(decrementAsync())}>
        Decrement (with Thunk)
      </button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;







//--------------------------------------------------------------------------------------------------------------------






// src/
//  └ redux/
//     ├ store.js
//     ├ actions.js
//     └ reducer.js
//  └ App.jsx
//  └ AppContent.jsx
//  └ index.js




// 🔹 src/redux/actions.js 🔹:

// Action types
// export const INCREMENT = "increment/rahul";
// export const DECREMENT = "DECREMENT";
// export const START_LOADING = "START_LOADING";
// export const STOP_LOADING = "STOP_LOADING";

// // Action creators
// export const increment = () => ({
//   type: INCREMENT,
// });

// // Decrement
// export const decrement = () => ({
//   type: DECREMENT,
// });

// // Loading
// export const startLoading = () => ({
//   type: START_LOADING,
// });

// // Stop Loading
// export const stopLoading = () => ({
//   type: STOP_LOADING,
// });

// // Thunk action for increment with delay
// export const incrementAsync = () => {
//   return (dispathRahul) => {
//     dispathRahul(startLoading()); // show loading first
//     setTimeout(() => {
//       dispathRahul(increment()); // then increment after 7 seconds
//       dispathRahul(stopLoading()); // then stop loading
//     }, 7000);
//   };
// };

// // Thunk action for decrement with delay
// export const decrementAsync = () => {
//   return (dispathRahul) => {
//     dispathRahul(startLoading()); // show loading first
//     setTimeout(() => {
//       dispathRahul(decrement()); // then decrement after 7 seconds
//       dispathRahul(stopLoading()); // then stop loading
//     }, 7000);
//   };
// };




// 🔹 src/redux/reducer.js 🔹:


// import { INCREMENT, DECREMENT, START_LOADING, STOP_LOADING } from "./actions";

// const initialState = {
//   count: 0,
//   loading: false,
// };

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case DECREMENT:
//       return { ...state, count: state.count - 1 };
//     case START_LOADING:
//       return { ...state, loading: true };
//     case STOP_LOADING:
//       return { ...state, loading: false };
//     default:
//       return state;
//   }
// }

// export default rootReducer;







// 🔹 src/redux/store.js 🔹:

// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import rootReducer from "./reducer";

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;







// 🔹 src/AppContent.jsx 🔹:

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { incrementAsync, decrementAsync } from "./redux/actions";

// function AppContent() {
//   const dispatch = useDispatch();
//   const { count, loading } = useSelector((state) => state);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Increment Decrement with Thunk</h1>
//       <p>Count: {count}</p>
//       {loading && <p>Loading...</p>}

//       <button onClick={() => dispatch(incrementAsync())}>
//         Increment (with Thunk)
//       </button>

//       <button onClick={() => dispatch(decrementAsync())}>
//         Decrement (with Thunk)
//       </button>
//     </div>
//   );
// }

// export default AppContent;









// 🔹 src/App.jsx 🔹

// import React from "react";
// import AppContent from "./AppContent";
// function App() {
//   return <AppContent />;
// }
// export default App;




// 🔹 src/index.js 🔹:

// import React from "react";
// import ReactDOM from "react-dom/client";

// import { Provider } from "react-redux";

// import App from "./App";
// import store from "./redux/store";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );








