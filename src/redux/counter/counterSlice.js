import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {//içine stateyi güncelleyecek tanımları yazacağız.
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            console.log(action);
            state.value += Number(action.payload);
        }
    },
});

export const {increment , decrement, incrementByAmount} = counterSlice.actions //increment'i ve decrement'ı dışa aktar
export default counterSlice.reducer;