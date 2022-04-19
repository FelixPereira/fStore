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
              <MenuIcon>&#10095;</MenuIcon>Home
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/loja' style={
            ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
          }>
            <MenuIcon>&#10095;</MenuIcon>Loja 
          </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/loja/homens' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>&#10095;</MenuIcon>Masculino 
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/loja/mulheres' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>&#10095;</MenuIcon>Feminino
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='#' style={
              ({isActive}) => isActive ? {color: '#b7a3da'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>&#10095;</MenuIcon>Contacto
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink to='/login' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>&#10095;</MenuIcon>Login
            </NavLink>
          </NavigationItem>
        </Wrapper>
      </NavigationMenu>
    </Container>
  )
}

export default NavigatioMenu;