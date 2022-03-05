import React from 'react';
// import { ReactComponent as Logo } from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom'; 

import './navigationMenu.css';

const NavigatioMenu = () => {
  return(
    <div className='navigationMenu'>
      <NavLink to='/' className='navigationMenu_logo'>
        <img src='/logo.png' alt='Logotipo' />
      </NavLink>

      <nav className='navigationMenu_links'>
        <ul>
          <li>
            <NavLink to='/' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <span>01</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/loja' className='naviLink' style={
            ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
          }>
            <span>02</span>Loja 
          </NavLink>
          </li>
          <li>
            <NavLink to='/masculino' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <span>03</span>Masculino 
            </NavLink>
          </li>
          <li>
            <NavLink to='/feminino' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <span>04</span>Feminino
            </NavLink>
          </li>
          <li>
            <NavLink to='#' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#b7a3da'} : {color: '#b7a3da'} 
            }>
              <span>06</span>Contacto
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <span>07</span>Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigatioMenu;