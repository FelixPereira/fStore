import { useDispatch, useSelector } from 'react-redux';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';
import { toggleSidebar } from '../../redux/sidebar/sidebarActions';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Backdrop from '../backdrop/Backdrop';
import SideBar from '../sideBar/SideBar';

import { Container, Wrapper, Rodape } from './mainContent-style.js';

const MainContent = () => {
  const dispatch = useDispatch();
  const displaySidebar = useSelector(selectDisplay);

  return (
    <Container>
      {displaySidebar && <Backdrop onClick={() => dispatch(toggleSidebar())} />}
      <SideBar />
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
      <Rodape>
        <strong>Made with LOVE by Félix Pereira</strong>
      </Rodape>
    </Container>
  );
};

export default MainContent;
