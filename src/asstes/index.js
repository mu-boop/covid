import { createStore } from 'redux'
import reducer from './reducer'
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from './reducer';

// export default configureStore({
//     reducer: {
//       user: userReducer,
//     },
//   });

const store = createStore(reducer);

export default store;
