import React from 'react';
// import { ReactComponent as Logo } from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { 
  Container,
  LogoContainer,
  Logo,
  NavigationMenu,
  Wrapper,
  NavigationItem,
  MenuIcon } from './navigationMenu-style.js';

const NavigatioMenu = () => {
  return(
    <Container>
      <LogoContainer to='/'>
        <Logo src='/logo.png' alt='Logotipo' />
      </LogoContainer>

      <NavigationMenu>
        <Wrapper>
          <NavigationItem>
            <NavLink to='/' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>01</MenuIcon>Home
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/loja' className='naviLink' style={
            ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
          }>
            <MenuIcon>02</MenuIcon>Loja 
          </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/loja/homens' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>03</MenuIcon>Masculino 
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/loja/mulheres' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>04</MenuIcon>Feminino
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='#' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#b7a3da'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>06</MenuIcon>Contacto
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/login' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>07</MenuIcon>Login
            </NavLink>
          </NavigationItem>
        </Wrapper>
      </NavigationMenu>
    </Container>
  )
}

export default NavigatioMenu;