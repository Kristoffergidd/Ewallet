import React, { useState, useEffect } from 'react';
import { useCardContext } from '../../contexts/CardContext';
import chipImage from '../../assets/chip-dark.svg';
import vendorBitcoin from '../../assets/vendor-bitcoin.svg';



const CardForm = () => {
  const { addCard } = useCardContext();
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    expiry: '',
    type: '',
  });

  useEffect(() => {
    console.log('Form data after update:', formData);
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log('Form data after update:', formData); // Flytta console.log hit
  };

  const handleAddButtonClick = () => {
    addCard(formData);
    setFormData({
      number: '',
      name: '',
      expiry: '',
    });
  };

  return (
    <div>
     <h2 className='newcard'>NEW CARD</h2>
      <div className='cardtop'>
        <div className="logo-container">
          <img src={chipImage} className='chip-image' alt="" /> 
          <img src={vendorBitcoin} className='bitcoin' alt="" /> 
        </div>
        <div className="card-info">
          <p className="card-number">XXXX XXXX XXXX XXXX:{formData.number}</p>
          <div className="cardholder-info">
            <p className="cardholder-name">CARDHOLDER NAME: 
            <br /> {formData.name}</p>
            <p className="valid-thru">VALID THRU: {formData.expiry}</p>
           </div>
        </div>
      </div>

      <div className='form'>
        <input type="text" name="number" value={formData.number} onChange={handleInputChange} placeholder="Numbers" />
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
        <input type="text" name="expiry" value={formData.expiry} onChange={handleInputChange} placeholder="Expiry" />
        <input type="text" name="expiry" placeholder="XXX" />
        <button type="button" onClick={handleAddButtonClick}>Add Card</button>
      </div>
     
    </div>
    
    
  );
};

export default CardForm;