import React, { useState } from 'react';

const CardDesignForm = ({ handleCardDesignChange }) => {
  const [cardDesign, setCardDesign] = useState('default');

  const handleDesignChange = (event) => {
    const design = event.target.value;
    setCardDesign(design);
    handleCardDesignChange(design); 
  };

  return (
    <div className='form-group'>
      <label htmlFor='cardDesign'>Card Design:</label>
      <select id='cardDesign' name='cardDesign' value={cardDesign} onChange={handleDesignChange}>
        <option value='default'>Default</option>
        <option value='bitcoindesign'>Bitcoin</option>
        <option value='ninja'>Ninja</option>
        <option value='blockchain'>blockchain</option>
        <option value='evil'>evil</option>
      </select>
    </div>
  );
};

export default CardDesignForm;