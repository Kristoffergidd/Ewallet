import React from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../reducers/cardSlice';
import CardForm from '../../components/CardForm/CardForm';
import "./AddCard.css";

const AddCard = () => {
  const dispatch = useDispatch(); 

  const handleAddCard = (formData) => {
    dispatch(addCard(formData));
  };

  return (
    <div className="add-card-container">
      <h1 className='header'> ADD A NEW BANK CARD</h1>
      <CardForm handleAddCard={handleAddCard} /> 
    </div>
  );
}



export default AddCard;