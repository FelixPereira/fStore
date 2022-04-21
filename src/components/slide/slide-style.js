import styled from 'styled-components';
import CustomButton from '../customButton/CustomButton';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  border: 5px solid #2b2040;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${props => props.index * -80}vw);
  transition: 1.5s ease-in-out;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  margin: 20px;
  background-color: #582DD3;
  color: #fff;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;

  &.right {
    right: 0;
  }
`;

export const SlideContainer = styled.div`
  width: 80VW;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.bg};
  color: ${props => props.color};
`;

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`;

export const SubTitle = styled.strong`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 13px;
`;

export const Title = styled.h2`
  font-size: 45px;
  margin-bottom: 1rem;
`;
  
  export const Description = styled.p`
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 1.5rem;
`;

export const Button = styled(CustomButton)`
  width: 100px;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: blue;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;