import { createSelector } from '@reduxjs/toolkit';

const cartItemSelector = (state) => state.cart.cartItems;

// Case: state X nó sẽ được compute phụ thuộc vào state nào đấy thì nên dùng Reselect
export const cartItemCount = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

export const cartItemTotal = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0)
);
