import React, { useState, useEffect } from 'react';

function MiApi({ cargarCampeones, mostrarBusqueda }) { 
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "https://ddragon.leagueoflegends.com/cdn/14.9.1/data/en_US/champion.json";

    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      const championsData = datos.data;
      setChampions(Object.values(championsData)); 
      cargarCampeones(Object.values(championsData)); 
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }   
  }

  const busquedaC = (busqueda) => {
    mostrarBusqueda(busqueda); 
  };

  return (
    <>
     
    </>
  );
}

export default MiApi;
