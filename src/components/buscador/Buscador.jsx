import { useState } from "react";
import '../buscador/Buscador.css';
export default function Buscador({ busqueda }) {
   
    const [buscarCampeon, setearCampeon] = useState('');

    const handleInputChange = (event) =>{
        const buscar = event.target.value;
        setearCampeon(buscar);
        busqueda(buscar);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>

        <input  type="text"
                className="buscador" 
                placeholder="Busca a tu campeon"
                value={buscarCampeon}
                onChange={handleInputChange}
                >
        </input>
    </div>
    );
}