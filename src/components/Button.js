import React from 'react';
import '../styles/Button.css';

function Button({ text, botonDeClick, manejarClick }){


    return (
      <button 
      onClick={manejarClick} 
      className={botonDeClick ? 'button-click' : 'button-reiniciar'}>
        {text}
      </button>  
    );
}

export default Button;