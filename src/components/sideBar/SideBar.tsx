import { useSelector } from 'react-redux';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';
import { Container } from './sideBar-style.js';

import WishList from '../wishList/wishList';
import NavigationMenu from '../navigationMenu/NavigationMenu';

const SideBar = () => {
  const showSidebar = useSelector(selectDisplay);
  const show = showSidebar ? '0' : '-300vw';
  return (
    <Container show={show}>
      <NavigationMenu />
      <WishList />
    </Container>
  );
};

export default SideBar;
