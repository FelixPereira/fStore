// import { ReactComponent as HumburgerMenu } from '../../assets/humburger-menu.svg';
// // import { ReactComponent as CloseMenu } from '../../assets/cross.svg';
// import { ReactComponent as AvatarIcon } from '../../assets/user.svg';
import { useDispatch, useSelector } from 'react-redux';

import { selectDisplay } from '../../redux/cart/cartSelectors';
import { toggleSidebar } from '../../redux/sidebar/sidebarActions';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  HumburgerIcon,
  RightSideIconsContainer,
} from './header-style';

import SearchBar from '../searchBar/SearchBar';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import IconContainer from '../icon/Icon';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showSidebar = useSelector(selectDisplay);
  return (
    <Container>
      <HumburgerIcon onClick={() => dispatch(toggleSidebar())}>
        <IconContainer>
          {/* <HumburgerMenu className='icon' /> */}
        </IconContainer>
      </HumburgerIcon>

      <SearchBar />

      <RightSideIconsContainer>
        <CartIcon />
        <IconContainer onClick={() => navigate('login')}>
          {/* <AvatarIcon className='icon' /> */}
        </IconContainer>
        {showSidebar ? <CartDropdown /> : ''}
      </RightSideIconsContainer>
    </Container>
  );
};

export default Header;