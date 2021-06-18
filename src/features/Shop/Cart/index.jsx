import React, { useState, useCallback, useMemo } from 'react';
import CartEmpty from './CartEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemCount, cartItemTotal } from './selector';
import { setQuantity, removeFromCart, clearCartAfterPayment } from './cartSlice';
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
import showToast from 'utils/Toast';
import { useHistory } from 'react-router-dom';
import { pathNames } from 'constants/index';
import { formatPriceUs } from 'helpers/formatPrice';

const CartFeature = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.current);
  const cartItemsCount = useSelector(cartItemCount);
  const cartTotal = useSelector(cartItemTotal);
  const [showPopup, setShowPopup] = useState(false);
  const [isFreeShip] = useState(true);

  const handleAmountCartItem = (id, quantity) => {
    dispatch(setQuantity({ id, quantity }));
  };

  const handleRemoveItem = useCallback(
    (id) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  const totalPayment = useMemo(() => {
    let total = 0;
    if (!isFreeShip) {
      total = cartTotal + 15 + 18.9;
    } else {
      total = cartTotal + 18.9;
    }

    return total;
  }, [isFreeShip, cartTotal]);

  const handlePayment = () => {
    showToast('Đặt hàng thành công.', 'success');
    dispatch(clearCartAfterPayment());
    history.push(pathNames.ROOT);
  };

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
                        <div>
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
                        </div>
                        <div>
                          <CartItemPrice>
                            <span className="cart-price">{formatPriceUs(item.product.price)}</span>
                            <div className="cart-price-original">
                              <span>{formatPriceUs(item.product.price)}</span>
                              <span className="line"></span>
                              {item.product.promotion && (
                                <span className="cart-price-promotion">-{item.product.promotion} %</span>
                              )}
                            </div>
                          </CartItemPrice>
                        </div>
                        <div>
                          <DetailQuantity>
                            <DetailQuantityBox onClick={() => handleAmountCartItem(item.id, item.quantity - 1)}>
                              <AiOutlineMinus />
                            </DetailQuantityBox>
                            <DetailQuantityNumber>{item.quantity}</DetailQuantityNumber>
                            <DetailQuantityBox onClick={() => handleAmountCartItem(item.id, item.quantity + 1)}>
                              <AiOutlinePlus />
                            </DetailQuantityBox>
                          </DetailQuantity>
                        </div>
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
                    <ul className="tags">
                      <li className="tag">Freeship</li>
                    </ul>
                  </CartContentAddress>
                </CartRightBox>
                <CartRightBox>
                  <CartTotalProvisional>
                    <h3>Subtotal</h3>
                    <span className="fee">£{formatPriceUs(cartTotal)}</span>
                  </CartTotalProvisional>
                  <CartTotalProvisional>
                    <h3>Shipping fee</h3>
                    <div className="freeship">
                      {isFreeShip ? (
                        <p>
                          {formatPriceUs(0)} <span className="fee-shipping">{formatPriceUs(15)}</span>
                        </p>
                      ) : (
                        <p>{formatPriceUs(15)}</p>
                      )}
                    </div>
                  </CartTotalProvisional>
                  <CartTotalProvisional>
                    <h3>Tax fee</h3>
                    <span className="fee">{formatPriceUs(18.9)}</span>
                  </CartTotalProvisional>
                  <CartOrderTotal>
                    <h3>Total (VAT includes)</h3>
                    <span className="fee">{formatPriceUs(totalPayment)}</span>
                  </CartOrderTotal>
                </CartRightBox>
                <div>
                  <CartButton onClick={handlePayment}>Tiến hành đặt hàng</CartButton>
                </div>
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
