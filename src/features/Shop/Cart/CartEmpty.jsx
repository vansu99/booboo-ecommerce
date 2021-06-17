import React from 'react';
import EmptyCart from 'assets/images/empty.jpg';
import { StyledCartEmpty } from './Cart.style';
import { Link } from 'react-router-dom';

const CartEmpty = (props) => {
  return (
    <StyledCartEmpty>
      <img src={EmptyCart} alt="empty cart" />
      <h3>THERE ARE NO ITEMS IN YOUR BASKET.</h3>
      <Link to="/">Continue Shopping</Link>
    </StyledCartEmpty>
  );
};

export default CartEmpty;
