import React from 'react'
import  {adminApi}  from '../api/adminSlice';
import { configureStore } from '@reduxjs/toolkit';

  const store = configureStore({
  reducer: {
    [adminApi.reducerPath]:adminApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),

});


export default store
