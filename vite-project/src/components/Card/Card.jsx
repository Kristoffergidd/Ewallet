import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCard } from '../../reducers/cardSlice';

const Card = () => {
  const cards = useSelector(state => state.card.cards);
  const dispatch = useDispatch();

  const handleRemoveCard = (index) => {
    dispatch(removeCard(index)); // Använd removeCard-actionen och skicka med indexet för det kort som ska tas bort
  };

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <p>Number: {card.number}</p>
          <p>Name: {card.name}</p>
          <p>Expiry: {card.expiry}</p>
          <button onClick={() => handleRemoveCard(index)}>Remove</button> {/* Skicka med indexet till handleRemoveCard */}
        </div>
      ))}
    </div>
  );
};

export default Card;