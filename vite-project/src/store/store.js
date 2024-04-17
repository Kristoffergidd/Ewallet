import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../reducers/cardSlice';


const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store; 