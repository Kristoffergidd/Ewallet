import React from 'react';
import { useCardContext } from '../../contexts/CardContext';

const Card = () => {
  const { cards, removeCard } = useCardContext();

  const handleRemoveCard = (index) => {
    removeCard(index);
  };

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <p>Number: {card.number}</p>
          <p>Name: {card.name}</p>
          <p>Expiry: {card.expiry}</p>
          <p>Type: {card.type}</p>
          <button onClick={() => handleRemoveCard(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Card;