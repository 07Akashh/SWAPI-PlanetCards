// PlanetCard.js
import React, { useState, useEffect } from 'react';
import ResidentList from './ResidentList';
import './PlanetCard.css'; // Import your stylesheet
import axios from 'axios';
const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchResidents = async () => {
      const promises = planet.residents.map((residentURL) => axios.get(residentURL));
      const residentsData = await Promise.all(promises);
      setResidents(residentsData.map((resident) => resident.data));
    };

    fetchResidents();
  }, [planet.residents]);

  const handleNextResident = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % residents.length);
  };

  const handlePrevResident = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + residents.length) % residents.length);
  };

  return (
    
    <div className='container'>
    <div className="planet-card">
        
      <div className='main'>
      <div>
      <h1 className='name'>{planet.name}</h1>
      </div>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <hr />
      <ResidentList resident={residents[currentIndex]} />
      <div>
        <button className="prevbtn"onClick={handlePrevResident}>Previous </button>
        <button className='nextbtn'onClick={handleNextResident}>Next</button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default PlanetCard;
