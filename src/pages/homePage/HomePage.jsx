import { Container } from './homePage-style';
import Slide from '../../components/slide/Slide';
import SectionOverview from '../../components/sectionOverview/SectionOverview';


const HomePage = () => {
  return(
    <Container>
      <Slide />
      <SectionOverview homePage />
    </Container>
  )
};

export default HomePage;