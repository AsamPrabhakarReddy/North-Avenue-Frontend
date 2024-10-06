// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Adjust the import path as needed

const store = configureStore({
    reducer: {
        user: userReducer, // Include the user slice in the store
    },
});

export default store;
