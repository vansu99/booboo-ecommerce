import { combineReducers } from '@reduxjs/toolkit';
import productReducer from 'features/Shop/Product/product.slice';
import cartReducer from 'features/Shop/Cart/cartSlice';
import userReducer from 'features/Auth/userSlice';

export default combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});
