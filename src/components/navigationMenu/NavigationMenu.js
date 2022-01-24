import React from 'react';
import { NavLink } from 'react-router-dom'; 

import './navigationMenu.css';

const NavigatioMenu = () => {
  return(
    <div className='navigationMenu'>
      <a className='navigationMenu_logo'>
        <img src='yyeye' alt='Logo' />
      </a>
      <nav className='navigationMenu_NavNavLinks'>
        <ul>
          <li>
            <NavLink to='/'  style={
              ({isActive}) => isActive ? {color: 'red'} : {color: '#000'} 
            }>
              <span>01</span>Home
            </NavLink>
          </li>
          <li>
          <NavLink to='/' style={
            ({isActive}) => isActive ? {color: '#fff'} : {color: '#000'} 
          }>
            <span>02</span>Loja 
          </NavLink>
          </li>
          <li>
            <NavLink to='/' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#000'} 
            }>
              <span>03</span>Masculino 
            </NavLink>
          </li>
          <li>
            <NavLink to='/' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#000'} 
            }>
              <span>04</span>Feminino
            </NavLink>
          </li>
          <li>
            <NavLink to='/' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#000'} 
            }>
              <span>06</span>Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigatioMenu;