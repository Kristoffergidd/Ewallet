import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);