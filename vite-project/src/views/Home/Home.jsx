import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Importera Link för att använda knappen
import Card from '../../components/Card/Card';
import Top from '../../components/Top/Top';
import "./Home.css";

const Home = () => {
  const cards = useSelector(state => state.card.cards); // Använd useSelector för att hämta kortlistan från Redux-storen

  // Logga kortlistan till konsolen
  console.log('Kortlistan från Redux-storen:', cards);

  return (
    <div>
      <Top />
      <div className="home-container">
        <h2>Alla Kort</h2>
        <div className="card-container">
          {/* Loopa igenom kortlistan och rendera varje kort */}
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
        {/* Lägg till en länk till AddCard-vyn */}
        <Link to="/add-card">
          <button>Lägg Till Kort</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;