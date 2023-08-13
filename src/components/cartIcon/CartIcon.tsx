// // import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDropdown } from '../../redux/cart/cartActions';
import { selectCartQuantity } from '../../redux/cart/cartSelectors';
import { Container, ItemQuantity } from './cartIcon-style';

import IconContainer from '../icon/Icon';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemQuantity = useSelector(selectCartQuantity);
  return (
    <Container onClick={() => dispatch(toggleDropdown())}>
      <IconContainer>{/* <ShoppingBag className='icon' /> */}</IconContainer>
      <ItemQuantity>{itemQuantity}</ItemQuantity>
    </Container>
  );
};

export default CartIcon;
