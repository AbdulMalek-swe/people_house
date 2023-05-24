import {   configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
 
const rootReducer = combineReducers({
   
});

//configure store
const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store; 