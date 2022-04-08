import React from 'react';
// import { ReactComponent as Logo } from '../../assets/logo.svg';
import { 
  Container,
  LogoContainer,
  Logo,
  NavigationMenu,
  Wrapper,
  NavigationItem,
  StyledNavLink,
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
            <StyledNavLink to='/' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>01</MenuIcon>Home
            </StyledNavLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavLink to='/loja' className='naviLink' style={
            ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
          }>
            <MenuIcon>02</MenuIcon>Loja 
          </StyledNavLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavLink to='/loja/homens' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>03</MenuIcon>Masculino 
            </StyledNavLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavLink to='/loja/mulheres' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>04</MenuIcon>Feminino
            </StyledNavLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavLink to='#' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#b7a3da'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>06</MenuIcon>Contacto
            </StyledNavLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavLink to='/login' className='naviLink' style={
              ({isActive}) => isActive ? {color: '#fff'} : {color: '#b7a3da'} 
            }>
              <MenuIcon>07</MenuIcon>Login
            </StyledNavLink>
          </NavigationItem>
        </Wrapper>
      </NavigationMenu>
    </Container>
  )
}

export default NavigatioMenu;