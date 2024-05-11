import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../barramenu/BarraMenu.css';

export default function BarraMenu ({ }) {
   
    return (
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="container">
         
            <img 
              src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/600px-League_of_Legends_2019_vector.svg.png?20200109211810'
              className="imgLogo"
            />
           
            
           
        </Container>
       
      </Navbar>
      
    </>
    );
}



















