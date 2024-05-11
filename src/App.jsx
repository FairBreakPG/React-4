
import React, { useState } from 'react';
import './App.css';
import Buscador from './components/buscador/Buscador';
import BarraMenu from './components/barramenu/BarraMenu';
import '../src/components/miApi/MiApi.css';
import MiApi from './components/miApi/MiApi';

function App() {
  const [champions, setChampions] = useState([]);
  const [buscarCampeon, setBuscarCampeon] = useState('');
  const [orden, setOrden] = useState(false);

  const busqueda = (busqueda) => {
    setBuscarCampeon(busqueda);
  };

  const mostraCampeones = (championsData) => {
    setChampions(Object.values(championsData));
  };


  const activarOrdenChexbox = ()=>{
    setOrden (!orden)
  }


  return (
    <div className='divGeneral'>
      <BarraMenu />
      <Buscador busqueda={busqueda} />
      <div className='ordenResultados'>
        <h3>menor a mayor:</h3>
        <input  type="checkbox"  onChange={activarOrdenChexbox}></input>
      </div>
      <MiApi cargarCampeones={mostraCampeones} handleBusqueda={busqueda} /> 
      <div className="container">
        {champions
          .filter(champion => champion.name.toLowerCase().includes(buscarCampeon.toLowerCase())).sort((a, b) => {
            if (orden) {
              return b.name.localeCompare(a.name);
            } else {
              return a.name.localeCompare(b.name);
            }
          })
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
