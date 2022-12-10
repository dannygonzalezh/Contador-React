import Button from './components/Button';
import React, { useState } from 'react';
import './App.css';
import Contador from './components/Contador';


  function App() {

    const [numClick, setNumClick] = useState(0);

    const manejarClick = () => {
     setNumClick(numClick + 1);
    }

    const reiniciarContador = () => {
      setNumClick(0);
    }

  return (
    <div className='app'>
     <div className='contenedor-principal'>
      <Contador numClick={numClick} />
      <Button
      text='click'
      botonDeClick={true}
      manejarClick={manejarClick} />
      <Button
      text='Reiniciar'
      botonDeClick={false}
      manejarClick={reiniciarContador} />
     </div>
    </div>
  );
  
}

export default App;