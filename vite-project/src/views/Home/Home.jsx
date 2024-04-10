import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Importera Link för att använda knappen
import Card from '../../components/Card/Card';
import Top from '../../components/Top/Top';

const Home = () => {
  const cards = useSelector(state => state.card.cards);
  console.log(cards); // Lägg till denna rad för att logga korten till konsolen
  return (
    <div>
      <Top />
      <div className="home-container">
        <h2>Alla Kort</h2>
        <div className="card-container">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
        <Link to="/add-card"> {/* Lägg till en länk till AddCard-vyn */}
          <button>Lägg Till Kort</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;