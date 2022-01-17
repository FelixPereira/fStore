import React from 'react';

import './navigationMenu.css';

const NavigatioMenu = () => {
  return(
    <div className='navigationMenu'>
      <a className='navigationMenu_logo'>
        <img src='yyeye' alt='Logo' />
      </a>
      <nav className='navigationMenu_links'>
        <a>
          <span>01</span>Home
        </a>
        <a>
          <span>02</span>Loja 
        </a>
        <a> 
          <span>03</span>Masculino 
        </a>
        <a>
          <span>04</span>Feminino
        </a>
        <a> 
          <span>05</span>FAQ 
        </a>
        <a> 
          <span>06</span>Contacto
        </a>
      </nav>
    </div>
  )
}

export default NavigatioMenu;