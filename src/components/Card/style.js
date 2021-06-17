import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TrendingProductItem = styled.div`
  position: relative;
  ${({ space }) => space && `margin: 0 ${space}rem 4rem`};
  ${({ width, space }) => width && `width: calc(${width}% - ${space * 2}rem)`};

  @media ${(props) => props.theme.mediaQueries.medium} {
    ${({ space }) => space && `margin: 0 0.5rem 4rem`};
    ${({ width }) => width && `width: calc(${width * 2}% - 1rem)`};
    scroll-snap-align: start;
  }

  @media ${(props) => props.theme.mediaQueries.minMedium} {
    ${({ space }) => space && `margin: 0 1rem 4rem`};
    ${({ width }) => width && `width: calc(${width}% - 2rem)`};
    scroll-snap-align: start;
  }
`;

export const Product = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const TrendingProductImage = styled.div`
  width: 100%;
  height: 32rem;
  background-color: #eee;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  @media ${(props) => props.theme.mediaQueries.medium} {
    height: auto;
  }

  @media ${(props) => props.theme.mediaQueries.minMedium} {
    height: 21rem;
  }

  @media ${(props) => props.theme.mediaQueries.minLarge} {
    height: 34rem;
  }

  @media ${(props) => props.theme.mediaQueries.minLargest} {
    height: 32rem;
  }
`;

export const ImageContainer = styled(Link)`
  display: block;
  height: 100%;
  min-height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Sticker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const StickerContent = styled.span`
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
  width: 7rem;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  border-radius: 0 0 1.6rem 0;
  background-color: #ff9a8b;
  background-image: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  font-family: var(--secondary-font);
  font-size: 1.3rem;
`;

export const StatusOutofStock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0);

  &:after {
    content: 'Hết hàng';
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    text-transform: capitalize;
    background-color: #fafafa;
    color: rgba(0, 0, 0, 0.6);
    padding: 1rem 1.6rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const TrendingProductBody = styled.div`
  flex: 1;
  padding: 1.4rem 0.5rem 0;
`;

export const TrendingProductBodyName = styled(Link)`
  display: block;
  font-family: var(--secondary-font);
  text-align: center;
  font-size: 1.4rem;
  color: #333;
  text-decoration: none;
  text-transform: capitalize;
  word-wrap: break-word;
  word-break: break-all;
  letter-spacing: 0.07rem;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }
`;

export const TrendingProductBodyPrice = styled.div`
  margin-bottom: 0.85rem;
  text-align: center;
  span {
    display: inline-block;
  }
`;

export const Price = styled.span`
  color: #1c3632;
  font-size: 1.4rem;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 3px;
  text-align: center;
  margin-right: 10px;
  user-select: none;

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }
`;

export const SalePrice = styled(Price)`
  color: #8b0000;
`;

export const OriginalPrice = styled.span`
  color: #757575;
  text-decoration: line-through;
`;

export const ProductRating = styled.div`
  margin-bottom: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductRatingScore = styled.span`
  svg {
    font-size: 1.4rem;
    margin-right: 0.6rem;
    vertical-align: middle;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    svg {
      font-size: 2rem;
    }
  }
`;

export const ProductRatingCount = styled.span`
  font-size: 1.4rem;
  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 2rem;
  }
`;

export const ProductAddToCard = styled.button`
  display: block;
  margin: 0 auto;
  outline: none;
  padding: 1rem 2.3rem;
  cursor: pointer;
  border: 1px solid #ff9a8b;
  color: #333;
  background-color: transparent;
  font-family: var(--secondary-font);
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: 1px;

  &:hover {
    color: #ffffff;
    background-color: #ff9a8b;
    background-image: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  }
`;
