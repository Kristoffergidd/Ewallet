import { createSlice } from '@reduxjs/toolkit';

const loadCardsFromLocalStorage = () => {
  const storedCards = localStorage.getItem('cards');
  return storedCards ? JSON.parse(storedCards) : [];
};

const initialState = {
  cards: loadCardsFromLocalStorage(),
  selectedCardIndex: null
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
      localStorage.setItem('cards', JSON.stringify(state.cards));
    },
    removeCard(state, action) {
      const index = action.payload;
      state.cards.splice(index, 1);
      localStorage.setItem('cards', JSON.stringify(state.cards));
    },
    setSelectedCard(state, action) {
      state.selectedCardIndex = action.payload;
    },
    updateCardOrder(state, action) {
      state.cards = action.payload;
      localStorage.setItem('cards', JSON.stringify(state.cards));
    },
  },
});

export const { addCard, removeCard, setSelectedCard, updateCardOrder } = cardSlice.actions;
export default cardSlice.reducer;