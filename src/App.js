import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';
import Pagination from './Pagination';
import './App.css'; // Import your stylesheet

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData('https://swapi.dev/api/planets/?format=json');
  }, []);

  const handleNextPage = () => {
    if (nextPage) {
      fetchData(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      fetchData(prevPage);
    }
  };

  return (
    <div className="App">
      
      {planets.map((planet, index) => (
        <PlanetCard key={index} planet={planet} />
      ))}
      <Pagination onNextPage={handleNextPage} onPrevPage={handlePrevPage} hasNext={!!nextPage} hasPrev={!!prevPage} />
      
    </div>
    
  );
};

export default App;
