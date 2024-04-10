import React, { useState } from 'react';
import CardForm from './CardForm';
import Card from './Card'; // Antag att du har en Card-komponent

const CardFormContainer = () => {
  const [formData, setFormData] = useState({
    number: '',
    name: '',
    expiry: '',
    type: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Card cardData={formData} />
      <CardForm formData={formData} handleInputChange={handleInputChange} />
    </div>
  );
};

export default CardFormContainer;