import { createSlice } from '@reduxjs/toolkit';

export const colorChangeSlice = createSlice({
    name: 'colorChange',
    initialState: {
        color: 'red'
    },
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        }
    }
})