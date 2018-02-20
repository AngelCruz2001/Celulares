import React, { Component } from 'react';
import Sucursales from'./Components/Sucursales/Sucursales'
import Prueba from'./Components/Prueba/Prueba';
import Trabajadores from'./Components/Trabajadores/Trabajadores';
import Bienvenido from'./Components/Bienvenido/Bienvenido';
import Camiones from './Components/Camiones/Camiones';
import Celulares from './Components/Celulares/Celulares';

class App extends Component {
  state = {  }
  render() {
    return ( 
      //  <Prueba/>
      //  <Sucursales/> 
       <Trabajadores/>
      //  <Camiones/>
      //  <Bienvenido/>
      //  <Celulares/>
    );
  }
} 

export default App;