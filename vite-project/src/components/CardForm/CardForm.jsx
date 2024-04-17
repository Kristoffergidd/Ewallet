import React, { useState } from 'react';
import chipImage from '../../assets/chip-dark.svg';
import vendorBitcoin from '../../assets/vendor-bitcoin.svg';
import vendorNinja from "../../assets/vendor-ninja.svg";
import CardDesignForm from '../CardDesignForm/CardDesignForm';
import vendorEvil from '../../assets/vendor-evil.svg';
import vendorBlockchain from '../../assets/vendor-blockchain.svg';

const CardForm = ({ handleAddCard }) => {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    expiry: '',
    cardDesign: 'default',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCardDesignChange = (design) => {
    setFormData((prevData) => ({
      ...prevData,
      cardDesign: design,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddCard(formData);
    setFormData({
      number: '',
      name: '',
      expiry: '',
      cardDesign: 'default',
    });
  };

  const cardStyles = {
    default: 'lightgrey',
    bitcoindesign: 'orange',
    ninja: 'rgb(65, 58, 58)',
    blockchain: 'purple',
    evil: 'red',
  };

  const cardStyle = {
    backgroundColor: cardStyles[formData.cardDesign] || 'white',
  };

  const cardIcons = {
    default: chipImage,
    bitcoindesign: vendorBitcoin,
    ninja: vendorNinja,
    evil: vendorEvil,
    blockchain: vendorBlockchain,
  };

  const cardIcon = cardIcons[formData.cardDesign] || chipImage;

  return (
    <div className='form'>
      <h2 className='newcard'>NEW CARD</h2>
      <form onSubmit={handleSubmit}>
        <div className='cardtop' style={cardStyle}>
          <div className="logo-container">
            <img src={chipImage} className='chip-image' alt="" /> 
            <img src={cardIcon} className='design-icon' alt="" />
          </div>
          <div className="card-info">
            <p className="card-number">{formData.number ? formData.number : "XXXX XXXX XXXX XXXX"}</p>
            <div className="cardholder-info">
              <p className="cardholder-name">CARDHOLDER NAME: <br /> {formData.name}</p>
              <p className="valid-thru">VALID THRU: <br /> {formData.expiry ? formData.expiry : " XX / XX"}</p>
            </div>
          </div>
        </div>
        <div className='form-Card'>
          <div className='form-group'>
            <label htmlFor='number'>CardNumber:</label>
            <input type='text' id='number' name='number' value={formData.number} onChange={handleInputChange} placeholder='XXXX XXXX XXXX XXXX' />
          </div>
          <div className='form-group'>
            <label htmlFor='name'>Cardholder Name:</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='Name' />
          </div>
          <div className='form-group'>
            <label htmlFor='expiry'>Valid Thru:</label>
            <input type='text' id='expiry' name='expiry' value={formData.expiry} onChange={handleInputChange} placeholder='Valid Thru' />
          </div>
          <div className='form-group'>
            <CardDesignForm handleCardDesignChange={handleCardDesignChange} />
          </div>
          <button type='submit'>Add Card</button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;