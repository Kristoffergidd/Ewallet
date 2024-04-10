import React from 'react';
import { CardProvider } from '../../contexts/CardContext';
import CardForm from '../../components/CardForm/CardForm';
import Card from '../../components/Card/Card';
import Top from '../../components/Top/Top';

const AddCard = () => {
  return (
    <CardProvider>
      <Top />
      <div className="add-card-container">
        <h2>Lägg Till Nytt Kort</h2>
        <Card />
        <CardForm />
      </div>
    </CardProvider>
  );
}

export default AddCard;