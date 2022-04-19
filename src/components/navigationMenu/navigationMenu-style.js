import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 35px;
`;

export const LogoContainer = styled(NavLink)`
  width: 120px;
  height: 50px;
  margin-bottom: 35px;
`;

export const Logo = styled.img``;

export const NavigationMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.ul`
  list-style: none;
`;

export const NavigationItem = styled.li`
  margin-bottom: 0.9375rem;
`;

export const MenuIcon = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

export const StyledNavLink = styled(NavLink)`
  color: #b7a3da;
  text-decoration: none;
`;
