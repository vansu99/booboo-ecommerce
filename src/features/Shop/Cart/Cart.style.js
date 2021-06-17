import styled from 'styled-components';
import { mixins } from 'styles/mixins';

export const StyledCart = styled.div`
  animation: 1s ${mixins.fadeIn} ease-out;
  width: 100%;
  padding: 4rem 0 3rem;
  background-color: rgb(239, 239, 239);
`;

export const CartContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.6rem;
`;

export const CartLabel = styled.h3`
  font-size: 1.9rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-transform: uppercase;

  span {
    text-transform: lowercase;
    font-size: 1.4rem;
    font-weight: 500;
    color: #908e8e;
  }
`;

export const CartBody = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  min-height: 41.2rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

// Left
export const CartBodyLeft = styled.div`
  width: calc(70% - 1rem);
  background-color: #fff;
  padding: 2rem;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CartLeftBox = styled.div`
  display: grid;
  display: -moz-grid;
  display: -ms-inline-grid;
  grid-template-columns: 20rem 1fr 15rem 15rem;
  grid-template-rows: auto;
  grid-gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    grid-template-areas:
      'h1 h2'
      'h1 h3'
      'h1 h4';
  }
`;

export const CartItem = styled.div`
  img {
    width: 100%;
    height: 15rem;
    object-fit: contain;
  }

  .cart-title {
    word-break: break-all;
    text-transform: capitalize;
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }

  .cart-size {
    color: gray;
    text-transform: uppercase;
  }

  .cart-action {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    color: blue;
    cursor: pointer;

    div + div {
      margin-left: 2rem;
    }
  }

  @media (max-width: 767px) {
    &:nth-child(1) {
      grid-area: h1;
    }
    &:nth-child(2) {
      grid-area: h2;
    }
    &:nth-child(3) {
      grid-area: h3;
    }
    &:nth-child(2) {
      grid-area: h4;
    }
  }
`;

export const CartItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .cart-price {
    font-size: 1.7rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }

  .cart-price-original {
    font-size: 1.3rem;
    color: gray;
    display: flex;
    align-items: center;
  }

  .cart-price-promotion {
    color: #000;
    font-weight: 600;
  }

  .line {
    display: inline-block;
    width: 1px;
    height: 13px;
    margin: 0 1rem;
    background-color: gray;
  }
`;

// Right
export const CartBodyRight = styled.div`
  width: calc(30% - 1rem);

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const CartRightBox = styled.div`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: #fff;
`;

export const CartContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.7rem;
`;

export const CartContentHead = styled(CartContent)`
  h3 {
    user-select: none;
    font-weight: bold;
  }

  span {
    display: inline-block;
    color: blue;
    cursor: pointer;
  }
`;

export const CartContentInfo = styled(CartContent)`
  font-weight: bold;
  h3 {
    font-size: 1.6rem;
  }
  span {
    display: inline-block;
    font-size: 1.6rem;
    margin-left: 1.8rem;
  }
`;

export const CartContentAddress = styled.div`
  color: gray;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    color: gray;
  }
`;

export const CartTotalProvisional = styled(CartTotal)`
  margin-bottom: 1rem;
  span {
    font-weight: bold;
    font-size: 1.7rem;
  }
`;

export const CartOrderTotal = styled(CartTotal)`
  span {
    font-weight: bold;
    font-size: 1.8rem;
    color: red;
  }
`;

export const CartButton = styled.button`
  display: block;
  width: 100%;
  padding: 1rem 2rem;
  text-align: center;
  color: #fff;
  background-color: #ff9a8b;
  background-image: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  border: 0;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  box-shadow: #ff9a8b 0px 2px 8px 0px;
`;

export const DetailQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailQuantityBox = styled.span`
  display: inline-block;
  border: 1px solid #d1d1d1;
  border-radius: 2px;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: rgba(255, 255, 199, 0.6);
  }

  &:first-child {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const DetailQuantityNumber = styled(DetailQuantityBox)`
  width: 4rem;
  text-align: center;
  user-select: none;
  &:hover {
    background-color: transparent;
  }
`;

export const StyledCartEmpty = styled.div`
  min-height: 70vh;
  height: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow);
  border-radius: 3px;

  h3 {
    text-transform: uppercase;
    font-family: var(--secondary-font);
    font-size: 1.6rem;
    font-weight: bold;
  }

  a {
    margin-top: 3rem;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: #fff;
    width: 20rem;
    padding: 1rem 0;
    border: 0;
    border-radius: 4px;
    font-size: 1.6rem;
    outline: none;
    box-shadow: var(--shadow);
    background-color: #ff9a8b;
    background-image: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  }
`;
