import React, { Component } from 'react';
import Bienvenido from'./Components/Bienvenido/Bienvenido';
import Prueba from'./Components/Prueba/Prueba';

class App extends Component {
  state = {  }
  render() {
    return (
      // <Prueba/>
      <Bienvenido/>
    );
  }
} 

export default App;