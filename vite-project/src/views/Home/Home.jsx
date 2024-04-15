import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Importera Link för att använda knappen
import Card from '../../components/Card/Card';
import Top from '../../components/Top/Top';
import "./Home.css";
import { useDispatch } from 'react-redux'; // Importera useDispatch från react-redux
import { setSelectedCard, updateCardOrder } from '../../reducers/cardSlice'; 



const Home = () => {
  const cards = useSelector(state => state.card.cards);
  const dispatch = useDispatch();

  const handleCardClick = (index) => {
    dispatch(setSelectedCard(index)); // Sätt det valda kortets index i storen
    const updatedCards = [...cards];
    const selectedCard = updatedCards.splice(index, 1)[0];
    updatedCards.unshift(selectedCard);
    dispatch(updateCardOrder(updatedCards)); // Uppdatera ordningen av korten i storen
  };

  return (
    <div>
      <Top/>
      <h2>Alla Kort</h2>
      <div className="card-container">
      <Card onClick={() => handleCardClick(index)} />
      </div>
    </div>
  );
};

export default Home; 