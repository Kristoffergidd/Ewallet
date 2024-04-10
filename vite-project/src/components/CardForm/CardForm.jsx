import React, { useState, useEffect } from 'react';
import { useCardContext } from '../../contexts/CardContext';


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
      type: '',
    });
  };

  return (
    <div>
        <h2 className='newcard'>NEW CARD</h2>
      <div className='cardtop'>
        <p> XXXX XXXX XXXX XXXX:{formData.number}</p>
        <p>Name: {formData.name}</p>
        <p>Expiry: {formData.expiry}</p>
        <p>Type: {formData.type}</p>
      </div>

      <div className='form'>
      <input type="text" name="number" value={formData.number} onChange={handleInputChange} placeholder="Numbers" />
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
      <input type="text" name="expiry" value={formData.expiry} onChange={handleInputChange} placeholder="Expiry" />
      <input type="text" name="type" value={formData.type} onChange={handleInputChange} placeholder="Type" />
      <button type="button" onClick={handleAddButtonClick}>Add Card</button>
      </div>
     
    </div>
    
    
  );
};

export default CardForm;