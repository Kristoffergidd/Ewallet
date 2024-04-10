import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  activeCard: null,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    setActiveCard(state, action) {
      state.activeCard = action.payload;
    },
  },
});

export const { addCard, setActiveCard } = cardSlice.actions;
export default cardSlice.reducer;