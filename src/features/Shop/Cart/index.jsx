import React, { useState, useCallback } from 'react';
import CartEmpty from './CartEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemCount, cartItemTotal } from './selector';
import { setQuantity, removeFromCart } from './cartSlice';
import {
  StyledCart,
  CartContainer,
  CartLabel,
  CartBody,
  CartBodyLeft,
  CartLeftBox,
  CartItem,
  CartItemPrice,
  CartBodyRight,
  CartRightBox,
  CartContentHead,
  CartContentInfo,
  CartContentAddress,
  CartButton,
  CartTotalProvisional,
  CartOrderTotal,
  DetailQuantity,
  DetailQuantityBox,
  DetailQuantityNumber,
} from './Cart.style';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Popup from 'components/Popup';

const CartFeature = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.current);
  const cartItemsCount = useSelector(cartItemCount);
  const cartTotal = useSelector(cartItemTotal);
  const [showPopup, setShowPopup] = useState(false);

  const handleAmountCartItem = (id, quantity) => {
    dispatch(setQuantity({ id, quantity }));
  };

  const handleRemoveItem = useCallback(
    (id) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  return (
    <StyledCart>
      <CartContainer>
        {!!cartItems.length ? (
          <>
            <CartLabel>
              YOUR SHOPPING BAG <span>({cartItemsCount} sản phẩm)</span>
            </CartLabel>
            <CartBody>
              <CartBodyLeft>
                {!!cartItems.length &&
                  cartItems.map((item) => (
                    <CartLeftBox key={item.id}>
                      <CartItem>
                        <img
                          src={item.product.images[0].url || 'https://via.placeholder.com/200'}
                          alt={item.product.title}
                        />
                      </CartItem>
                      <CartItem>
                        <h3 className="cart-title">{item.product.title}</h3>
                        <p className="cart-size">Size: {item.size}</p>
                        <div className="cart-action">
                          <div onClick={() => setShowPopup(true)}>Xóa</div>
                          <div>Để dành mua sau</div>
                          <Popup
                            showPopup={showPopup}
                            setShowPopup={setShowPopup}
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            Bạn có chắc muốn xóa sản phẩm này?
                          </Popup>
                        </div>
                      </CartItem>
                      <CartItem>
                        <CartItemPrice>
                          <span className="cart-price">${item.product.price}</span>
                          <div className="cart-price-original">
                            <span>${item.product.price}</span>
                            <span className="line"></span>
                            {item.product.promotion && (
                              <span className="cart-price-promotion">-{item.product.promotion}%</span>
                            )}
                          </div>
                        </CartItemPrice>
                      </CartItem>
                      <CartItem>
                        <DetailQuantity>
                          <DetailQuantityBox onClick={() => handleAmountCartItem(item.id, item.quantity - 1)}>
                            <AiOutlineMinus />
                          </DetailQuantityBox>
                          <DetailQuantityNumber>{item.quantity}</DetailQuantityNumber>
                          <DetailQuantityBox onClick={() => handleAmountCartItem(item.id, item.quantity + 1)}>
                            <AiOutlinePlus />
                          </DetailQuantityBox>
                        </DetailQuantity>
                      </CartItem>
                    </CartLeftBox>
                  ))}
              </CartBodyLeft>
              <CartBodyRight>
                <CartRightBox>
                  <CartContentHead>
                    <h3>Địa chỉ nhận hàng</h3>
                    <span>Thay đổi</span>
                  </CartContentHead>
                  <CartContentInfo>
                    <h3>{user?.name}</h3>
                    <span>0{user?.phone}</span>
                  </CartContentInfo>
                  <CartContentAddress>
                    <p>{user?.address}</p>
                  </CartContentAddress>
                </CartRightBox>
                <CartRightBox>
                  <CartContentHead>
                    <h3>BooBoo Khuyến Mãi</h3>
                    <span>Mời bạn chọn</span>
                  </CartContentHead>
                  <CartContentAddress>
                    <p>Chọn hoặc nhập khuyến mãi</p>
                  </CartContentAddress>
                </CartRightBox>
                <CartRightBox>
                  <CartTotalProvisional>
                    <h3>Tạm tính</h3>
                    <span>100.000</span>
                  </CartTotalProvisional>
                  <CartTotalProvisional>
                    <h3>Phí vận chuyển</h3>
                    <span>0</span>
                  </CartTotalProvisional>
                  <CartOrderTotal>
                    <h3>Thành tiền (VAT includes)</h3>
                    <span>{cartTotal}</span>
                  </CartOrderTotal>
                </CartRightBox>
                <CartButton>Tiến hành đặt hàng</CartButton>
              </CartBodyRight>
            </CartBody>
          </>
        ) : (
          <CartEmpty />
        )}
      </CartContainer>
    </StyledCart>
  );
};

export default CartFeature;
