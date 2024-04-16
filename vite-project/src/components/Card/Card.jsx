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

  const handleRemoveCard = (index) => {
    dispatch(removeCard(index));
  };

  const handleCardClick = (index) => {
    const selectedCard = cards[index]; // Spara det klickade kortet
    const updatedCards = [...cards]; // Skapa en kopia av kortlistan
    updatedCards.splice(index, 1); // Ta bort det klickade kortet från nuvarande position
    updatedCards.unshift(selectedCard); // Lägg till det klickade kortet längst upp i listan
    // Uppdatera kortens ordning i storen
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
        <div key={index} className={`card ${card.cardDesign}`} onClick={() => handleCardClick(index)}>
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
          <button onClick={() => handleRemoveCard(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Card;


