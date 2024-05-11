
import React, { useState } from 'react';
import './App.css';
import Buscador from './components/buscador/Buscador';
import BarraMenu from './components/barramenu/BarraMenu';
import '../src/components/miApi/MiApi.css';
import MiApi from './components/miApi/MiApi';

function App() {
  const [champions, setChampions] = useState([]);
  const [buscarCampeon, setBuscarCampeon] = useState('');

  const handleBusqueda = (busqueda) => {
    setBuscarCampeon(busqueda);
  };

  const handleChampionsLoaded = (championsData) => {
    setChampions(Object.values(championsData));
  };

  return (
    <div className='divGeneral'>
      <BarraMenu />
      <Buscador busqueda={handleBusqueda} />
      <MiApi cargarCampeones={handleChampionsLoaded} handleBusqueda={handleBusqueda} /> {/* Pasa la función handleBusqueda */}
      <div className="container">
        {champions
          .filter(champion => champion.name.toLowerCase().includes(buscarCampeon.toLowerCase()))
          .map((champion, index) => (
            <div key={index} className="card">
              <h2>{champion.name}</h2>
              <img className='fotos'
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                alt={`${champion.name} Splash`}
                style={{ width: '190px', height: '300px' }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
