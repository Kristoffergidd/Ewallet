import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCard } from '../../reducers/cardSlice';
import chipImage from '../../assets/chip-dark.svg';
import vendorBitcoin from '../../assets/vendor-bitcoin.svg';


// const Card = () => {
//   const cards = useSelector(state => state.card.cards);
//   const dispatch = useDispatch();

//   const handleRemoveCard = (index) => {
//     dispatch(removeCard(index));
//   };

//   return (
// <div>
//   {cards.map((card, index) => (
//     <div key={index} className="cardtop">
//       <div className="logo-container">
//         <img src={chipImage} className='chip-image' alt="" /> 
//         <img src={vendorBitcoin} className='bitcoin' alt="" /> 
//       </div>
//       <div className="card-info">
//         <p className="card-number">{card.number ? card.number : "XXXX XXXX XXXX XXXX"}</p>
//         <div className="cardholder-info">
//           <p className="cardholder-name">CARDHOLDER NAME: <br /> {card.name}</p>
//           <p className="valid-thru">VALID THRU: <br /> {card.expiry ? card.expiry : " XX / XX"}</p>
//         </div>
//       </div>
//       <button onClick={() => handleRemoveCard(index)}>Remove</button>
//     </div>
//   ))}
// </div>
//   );
// };

// export default Card;

const Card = () => {
  const cards = useSelector(state => state.card.cards);
  const dispatch = useDispatch();

  const handleRemoveCard = (index) => {
    dispatch(removeCard(index));
  };

  return (
    <div>
      {cards.map((card, index) => (
        <div key={index} className={`card ${card.cardDesign}`}>
          <div className="logo-container">
            <img src={chipImage} className='chip-image' alt="" /> 
            <img src={vendorBitcoin} className='bitcoin' alt="" /> 
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


