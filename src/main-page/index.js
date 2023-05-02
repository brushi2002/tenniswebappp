import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './main-page.css';
import Header from './header';
import FeaturedPlayer from "./featured-player";

function App() {
  //load data
  const [allPlayers, setAllPlayers] = useState([]);
  
  useEffect(() => {
    const fetchPlayers = async () => {
      //const rsp = await fetch("/players.json");
      fetch('http://localhost:4000/api/players')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setAllPlayers(data);
        })
      //const players = await rsp.json();
      //setAllPlayers(players);
    };
    fetchPlayers();
  }, []);

  const featuredPlayer = useMemo (() => {
    if(allPlayers.length) {
      const randomIndex = Math.floor(Math.random() * allPlayers.length);
      return allPlayers[randomIndex];
    }

  }, [allPlayers])

  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Tennis" />

        <Routes>
          <Route path="/" element={<FeaturedPlayer player={featuredPlayer} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
