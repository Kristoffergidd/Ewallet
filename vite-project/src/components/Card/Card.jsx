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
    console.log(`Clicked on card with index ${index}`);
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


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeCard, setSelectedCard, updateCardOrder } from '../../reducers/cardSlice';
// import vendorBitcoin from '../../assets/vendor-bitcoin.svg';
// import vendorNinja from "../../assets/vendor-ninja.svg";
// import chipImage from '../../assets/chip-dark.svg';
// import vendorEvil from '../../assets/vendor-evil.svg';
// import vendorBlockchain from '../../assets/vendor-blockchain.svg';

// const Card = () => {
//   const cards = useSelector(state => state.card.cards);
//   const dispatch = useDispatch();

//   const handleRemoveCard = (index) => {
//     dispatch(removeCard(index)); // Ta bort kortet från Redux storen
//   };

//   const handleCardClick = (index) => {
//     const selectedCard = cards[index];
//     const updatedCards = cards.filter((card, i) => i !== index); // Ta bort det valda kortet från listan
//     updatedCards.unshift(selectedCard); // Lägg till det valda kortet längst upp i listan
//     dispatch(setSelectedCard(index)); // Uppdatera det valda kortets index i storen
//     dispatch(updateCardOrder(updatedCards)); // Uppdatera ordningen av korten i storen
//   };

//   const getIcon = (cardDesign) => {
//     switch (cardDesign) {
//       case 'bitcoindesign':
//         return vendorBitcoin;
//       case 'ninja':
//         return vendorNinja;
//       case 'evil':
//         return vendorEvil;
//       case 'blockchain':
//         return vendorBlockchain;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       {cards.map((card, index) => (
//         <div key={index} className={`card ${card.cardDesign}`} onClick={() => handleCardClick(index)}> {/* Lägg till onClick för att hantera klick på kortet */}
//           <div className="logo-container">
//             <img src={chipImage} className='chip-image' alt="" /> 
//             <img src={getIcon(card.cardDesign)} className='bitcoin' alt="" /> {/* Använd funktionen för att hämta rätt ikon */}
//           </div>
//           <div className="card-info">
//             <p className="card-number">{card.number ? card.number : "XXXX XXXX XXXX XXXX"}</p>
//             <div className="cardholder-info">
//               <p className="cardholder-name">CARDHOLDER NAME: <br /> {card.name}</p>
//               <p className="valid-thru">VALID THRU: <br /> {card.expiry ? card.expiry : " XX / XX"}</p>
//             </div>
//           </div>
//           <button onClick={() => handleRemoveCard(index)}>Radera</button> {/* Använd handleRemoveCard för att ta bort kortet */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;