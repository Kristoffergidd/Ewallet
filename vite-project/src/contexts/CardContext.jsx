import React, { createContext, useContext, useState, useEffect } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem('cards');
    return storedCards ? JSON.parse(storedCards) : [];
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const removeCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <CardContext.Provider value={{ cards, addCard, removeCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);