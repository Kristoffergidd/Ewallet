import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../reducers/cardSlice'; // Importera ditt slice för kreditkort här


const store = configureStore({
  reducer: {
    // Lägg till reducer-funktioner här
    card: cardReducer,
  },
});

export default store;