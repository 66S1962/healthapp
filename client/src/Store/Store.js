// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Features/UserSlice'; 
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
