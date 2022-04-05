import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { toggleDropdown } from '../../redux/cart/cartActions';
import { selectCartQuantity } from '../../redux/cart/cartSelectors';
import { Container, ItemQuantity } from './cartIcon-style';

import IconContainer from '../icon/Icon';


const CartIcon = ({ toggleDropdown, itemQuantity}) => {
  return(
    <Container onClick={toggleDropdown}>
      <IconContainer>
        <ShoppingBag className='icon' />
      </IconContainer>
      <ItemQuantity>{ itemQuantity }</ItemQuantity>
    </Container>
  )
} 

const mapStateToProps = createStructuredSelector ({
  itemQuantity: selectCartQuantity
});

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => dispatch(toggleDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);