import React from 'react';
import { useCardContext } from '../../contexts/CardContext';

const Card = () => {
  const { cards } = useCardContext();

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <p>Number: {card.number}</p>
          <p>Name: {card.name}</p>
          <p>Expiry: {card.expiry}</p>
          <p>Type: {card.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;