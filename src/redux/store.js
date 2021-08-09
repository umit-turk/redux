import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
//store bizim bütün global değerlerimizi tuttuğumuz bir obje
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
});