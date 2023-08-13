import { useState } from 'react';
import { SlideData } from './slide-data';
import {
  Container,
  Wrapper,
  ArrowContainer,
  SlideContainer,
  TextContainer,
  SubTitle,
  Title,
  Description,
  Button,
  Overlay,
} from './slide-style';

const Slide = () => {
  const [index, setIndex] = useState(0);

  const scrollRight = () => {
    setIndex(index !== 2 ? index + 1 : 0);
  };

  const scrollLeft = () => {
    setIndex(index === 0 ? 2 : index - 1);
  };

  return (
    <Container>
      <ArrowContainer onClick={scrollLeft}>&#10094;</ArrowContainer>
      <Wrapper index={index}>
        <Overlay />
        {SlideData.map((slide, idx) => (
          <SlideContainer
            bgImage={slide.img}
            color={slide.color}
            key={slide.subTitle}
          >
            <TextContainer>
              <SubTitle>{slide.subTitle}</SubTitle>
              <Title>{slide.title}</Title>
              <Description>{slide.description}</Description>
              <Button>Saiba mais</Button>
            </TextContainer>
          </SlideContainer>
        ))}
      </Wrapper>
      <ArrowContainer className='right' onClick={scrollRight}>
        &#10095;
      </ArrowContainer>
    </Container>
  );
};

export default Slide;
