import { configureStore } from '@reduxjs/toolkit';
import { colorChangeSlice } from './slices/ColorChange';

export default configureStore({ 
    reducer: {
        'colorChange': colorChangeSlice.reducer
    } 
})