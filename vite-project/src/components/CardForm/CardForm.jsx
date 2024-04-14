import React, { useState, useEffect } from 'react';
import chipImage from '../../assets/chip-dark.svg';
import vendorBitcoin from '../../assets/vendor-bitcoin.svg';
import CardDesignForm from '../CardDesignForm/CardDesignForm';

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

  return (
    <div className='form'>
      <h2 className='newcard'>NEW CARD</h2>
      <form onSubmit={handleSubmit}>
        <div className='cardtop'>
          <div className="logo-container">
            <img src={chipImage} className='chip-image' alt="" /> 
            <img src={vendorBitcoin} className='bitcoin' alt="" /> 
          </div>
          <div className="card-info">
            <p className="card-number">  {formData.number ? formData.number:"XXXX XXXX XXXX XXXX"}</p>
            <div className="cardholder-info">
              <p className="cardholder-name">CARDHOLDER NAME: 
              <br /> {formData.name}</p>
              <p className="valid-thru">VALID THRU: 
              <br /> {formData.expiry ? formData.expiry:" XX / XX"  }</p>
            </div>
          </div>
        </div>
        <div className='form'>
          <div className='form-group'>
          <div className={`card ${formData.cardDesign}`}>
          </div>
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