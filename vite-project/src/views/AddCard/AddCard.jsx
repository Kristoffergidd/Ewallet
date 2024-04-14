import React from 'react';
import { useDispatch } from 'react-redux'; // Importera useDispatch från react-redux
import { addCard } from '../../reducers/cardSlice';
import CardForm from '../../components/CardForm/CardForm';
import "./AddCard.css";

const AddCard = () => {
  const dispatch = useDispatch(); // Skapa en dispatch-funktion för att skicka actions till Redux-storen

  const handleAddCard = (formData) => {
    dispatch(addCard(formData)); // Använd dispatch-funktionen för att lägga till ett kort i Redux-storen
  };

  return (
    <div className="add-card-container">
      <h1 className='header'> ADD A NEW BANK CARD</h1>
      <CardForm handleAddCard={handleAddCard} /> {/* Skicka med funktionen för att lägga till kort */}
    </div>
  );
}



export default AddCard;