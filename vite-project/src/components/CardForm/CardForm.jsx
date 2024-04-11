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

  const handleCardDesignChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      cardDesign: value, // Uppdatera vald kortdesign
    }));
  
    // Lägg till logik för att ändra bakgrundsfärgen baserat på vald design
    const cardTopElement = document.querySelector('.cardtop');
    if (value === 'design1') {
      cardTopElement.classList.add('design1');
      cardTopElement.classList.remove('design2'); // Ta bort klassen för design 2 om den finns
    } else if (value === 'design2') {
      cardTopElement.classList.add('design2');
      cardTopElement.classList.remove('design1'); // Ta bort klassen för design 1 om den finns
    }
       else if (value === 'default') {
      cardTopElement.classList.add('default');
      cardTopElement.classList.remove('design1'); // Ta bort klassen för design 1 om den finns
      cardTopElement.classList.remove('design2');

    }
  };

  return (
    // <div>
    //  <h2 className='newcard'>NEW CARD</h2>
    //   <div className='cardtop'>
    //     <div className="logo-container">
    //       <img src={chipImage} className='chip-image' alt="" /> 
    //       <img src={vendorBitcoin} className='bitcoin' alt="" /> 
    //     </div>
    //     <div className="card-info">
    //       <p className="card-number">  {formData.number ? formData.number:"XXXX XXXX XXXX XXXX"}</p>
    //       <div className="cardholder-info">
    //         <p className="cardholder-name">CARDHOLDER NAME: 
    //         <br /> {formData.name}</p>
    //         <p className="valid-thru">VALID THRU: 
    //         <br /> {formData.expiry ? formData.expiry:" XX / XX"  }</p>
    //        </div>
    //     </div>
    //   </div>

    //   <div className='form'>
    //     <input type="text" name="number" value={formData.number} onChange={handleInputChange} placeholder="XXXX XXXX XXXX XXXX" />
    //     <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
    //     <input type="text" name="expiry" value={formData.expiry} onChange={handleInputChange} placeholder="Expiry" />
    //     <input type="text" name="expiry" placeholder="XXX" />
    //     <button type="button" onClick={handleAddButtonClick}>Add Card</button>
    //   </div>
     
    // </div>
    <div className='form'>
    <h2 className='newcard'>NEW CARD</h2>
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
        <label htmlFor='cardDesign'>Card Design:</label>
        <select id='cardDesign' name='cardDesign' value={formData.cardDesign} onChange={handleCardDesignChange}>
          <option value='default'>Default</option>
          <option value='design1'>Bitcoin</option>
          <option value='design2'>Blockchain</option>
          <option value='design3'>Evil</option>
          <option value='design4'>Ninja</option>

          {/* Lägg till fler alternativ för olika kortdesign */}
        </select>
      </div>
      <button type='button' onClick={handleAddButtonClick}>Add Card</button>
    </div>
  </div>
    
  );
};

export default CardForm;