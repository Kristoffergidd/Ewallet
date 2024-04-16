import React from 'react';

const CardStack = ({ cards, handleCardClick }) => {
  return (
    <div className="card-stack">
      {cards.map((card, index) => (
        <div key={index} className={`stacked-card ${card.cardDesign}`} onClick={() => handleCardClick(index)}>
          <img src={getIcon(card.cardDesign)} className='bitcoin' alt="" />
        </div>
      ))}
    </div>
  );
};

export default CardStack;