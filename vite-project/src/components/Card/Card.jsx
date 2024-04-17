import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCard } from '../../reducers/cardSlice';
import vendorBitcoin from '../../assets/vendor-bitcoin.svg';
import vendorNinja from "../../assets/vendor-ninja.svg";
import chipImage from '../../assets/chip-dark.svg';
import vendorEvil from '../../assets/vendor-evil.svg';
import vendorBlockchain from '../../assets/vendor-blockchain.svg';

const Card = () => {
  const cards = useSelector(state => state.card.cards);
  const dispatch = useDispatch();

  const handleRemoveCard = (index, event) => {
    event.stopPropagation(); 
    dispatch(removeCard(index));
  };

  const handleCardClick = (index) => {
    const selectedCard = cards[index]; 
    const updatedCards = [...cards]; 
    updatedCards.splice(index, 1); 
    updatedCards.unshift(selectedCard); 
 
    dispatch({ type: 'card/updateCardOrder', payload: updatedCards });
  };

  const getIcon = (cardDesign) => {
    switch (cardDesign) {
      case 'bitcoindesign':
        return vendorBitcoin;
      case 'ninja':
        return vendorNinja;
      case 'evil':
        return vendorEvil;
      case 'blockchain':
        return vendorBlockchain;
      default:
        return null;
    }
  };

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index} className={`card ${card.cardDesign} ${index === 0 ? 'active' : 'inactive'}`} onClick={() => handleCardClick(index)}>
          <div className="logo-container">
            <img src={chipImage} className='chip-image' alt="" /> 
            <img src={getIcon(card.cardDesign)} className='bitcoin' alt="" />
          </div>
          <div className="card-info">
            <p className="card-number">{card.number ? card.number : "XXXX XXXX XXXX XXXX"}</p>
            <div className="cardholder-info">
              <p className="cardholder-name">CARDHOLDER NAME: <br /> {card.name}</p>
              <p className="valid-thru">VALID THRU: <br /> {card.expiry ? card.expiry : " XX / XX"}</p>
            </div>
          </div>
          <button onClick={(event) => handleRemoveCard(index, event)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Card;