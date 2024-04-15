import { createSlice } from '@reduxjs/toolkit';

// const loadCardsFromLocalStorage = () => {
//   const storedCards = localStorage.getItem('cards');
//   return storedCards ? JSON.parse(storedCards) : [];
// };

// const initialState = {
//   cards: loadCardsFromLocalStorage(), // Hämta sparade kort vid initiering
// };

// const cardSlice = createSlice({
//   name: 'card',
//   initialState,
//   reducers: {
//     addCard(state, action) {
//       state.cards.push(action.payload);
//       // Spara uppdaterade kortlistan till localStorage
//       localStorage.setItem('cards', JSON.stringify(state.cards));
//     },
//     removeCard(state, action) {
//       const index = action.payload;
//       state.cards.splice(index, 1);
//       // Spara uppdaterade kortlistan till localStorage
//       localStorage.setItem('cards', JSON.stringify(state.cards));
//     },
//     setActiveCard(state, action) {
//       state.activeCard = action.payload;
//     },
//   },
// });

// export const { addCard, removeCard, setActiveCard } = cardSlice.actions;
// export default cardSlice.reducer;

const loadCardsFromLocalStorage = () => {
  const storedCards = localStorage.getItem('cards');
  return storedCards ? JSON.parse(storedCards) : [];
};

const initialState = {
  cards: loadCardsFromLocalStorage(),
  selectedCardIndex: null, // Lägg till selectedCardIndex i initialState
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