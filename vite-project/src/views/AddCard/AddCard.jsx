import React from 'react';
import { CardProvider } from '../../contexts/CardContext';
import CardForm from '../../components/CardForm/CardForm';
import Card from '../../components/Card/Card';
import "./AddCard.css";

const AddCard = () => {
  return (
    <CardProvider>
      <div className="add-card-container">
        <h1> ADD A NEW BANK CARD</h1>
        <h2>ADD A NEW BANK CARD</h2>
        <CardForm />
      </div>
    </CardProvider>
  );
}

export default AddCard;