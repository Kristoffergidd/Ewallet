// CardStack.jsx
import React from 'react';
import Card from '../Card/Card';

const CardStack = ({ cards }) => {
  return (
    <div className="card-stack">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

export default CardStack;