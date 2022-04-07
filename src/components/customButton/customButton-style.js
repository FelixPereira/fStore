import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: 'Dosis', sans-serif;
  font-size: 0.9375rem;
  font-weight: bold;
  border-radius: 0.3125rem;
  border: none;
  cursor: pointer;
  transition: .5s;

  background-color: ${props => props.productBtn ? '#fff' : 'var(--main-color)'};
  color: ${props => props.productBtn ? 'var(--main-color)' : '#fff'};
  margin: ${props => props.productBtn ? '0' : '0 0.625rem 0.625rem 0'};
  padding: ${props => props.productBtn ? '0.3125rem 0.9375rem' : '0.625rem 0.9375rem'};
  width: ${props => props.productBtn && '100%'};

  &:active {
    transform: translateY(0.1875rem);
    transition: .2s;
  }
`;

