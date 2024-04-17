import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
import Card from '../../components/Card/Card';
import Top from '../../components/Top/Top';
import { useDispatch } from 'react-redux';
import { setSelectedCard, updateCardOrder } from '../../reducers/cardSlice'; 

const Home = () => {
  const cards = useSelector(state => state.card.cards);
  const dispatch = useDispatch();

  const handleCardClick = (index) => {
    dispatch(setSelectedCard(index));
    const updatedCards = [...cards];
    const selectedCard = updatedCards.splice(index, 1)[0];
    updatedCards.unshift(selectedCard);
    dispatch(updateCardOrder(updatedCards)); 
  };

  return (
    <div>
      <Top/>
      <nav>
        <ul>
          <li><Link to="/add-card">Lägg till kort</Link></li>
        </ul>
      </nav>
      <h2>Alla Kort</h2>
      <div className="card-container">
      <Card onClick={() => handleCardClick(index)} />
      </div>
    </div>
  );
};

export default Home; 