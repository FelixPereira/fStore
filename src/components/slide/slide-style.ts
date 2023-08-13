import styled from 'styled-components';
import CustomButton from '../customButton/CustomButton';
import { nineHundred, sevenHundred } from '../../responsive';

interface WrapperProps {
  index: number;
}

interface SlideContainerProps {
  bgImage: string;
}

export const Container = styled.div`
  height: 70vh;
  border: 5px solid #2b2040;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, .7);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 100%;
  transform: translateX(${props => props.index * -100}vw);
  transition: 1.5s ease-in-out;
  position: absolute;
  left: 0;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  margin: 20px;
  background-color: #582DD3;
  color: #fff;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;

  &.right {
    right: 0;
  }
`;

export const SlideContainer = styled.div<SlideContainerProps>`
  width: 100vw;
  max-heiht: 100%;
  background: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  padding: 0 0 0 70px;

  ${sevenHundred({padding: ' 0 40px 0 100px'})};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  z-index: 1;

  ${sevenHundred({width: '80%'})};
  ${nineHundred({width: '50%'})};
`;

export const SubTitle = styled.strong`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 13px;
`;

export const Title = styled.h2`
  font-size: 35px;
  margin-bottom: 1rem;
  word-wrap: no-wrap;

  ${sevenHundred({fontSize: '45px'})};
`;
  
  export const Description = styled.p`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 1.5rem;

  ${sevenHundred({fontSize: '20px'})};
`;

export const Button = styled(CustomButton)`
  width: 100px;
`;
