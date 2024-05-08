import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [informacionApi, setearInformacionApi] = useState([])

  //funcion de consultar Api
  useEffect(() =>{
      consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "https://genshin.jmp.blue/characters/all?lang=es";
    const respuesta = await fetch(url);
    const datos  = await respuesta.json();
    console.log("monas chinas", datos);
  }

  return (
    <>
     
    </>
  )
}

export default App
