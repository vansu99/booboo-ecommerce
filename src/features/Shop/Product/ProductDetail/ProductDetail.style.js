import styled from 'styled-components';
import { mixins } from 'styles/mixins';

export const StyledDetail = styled.section`
  max-width: var(--container-width);
  width: 100%;
  margin: 0 auto;
  padding: 4rem 1.6rem;
  animation: 1s ${mixins.fadeIn} ease-out;
`;

export const StyledContainer = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding-bottom: 3rem;
  font-size: 3.4rem;
  font-family: var(--secondary-font);
  position: relative;
  margin-bottom: 5rem;
  letter-spacing: 2px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 9rem;
    height: 4px;
    background-color: red;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media ${(props) => props.theme.mediaQueries.medium} {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const DetailLeft = styled.div`
  width: calc(50% - 2rem);

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
    margin: 0;
  }
`;

export const DetailImageList = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -2rem;

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin: 0 -1rem;
  }

  @media ${(props) => props.theme.mediaQueries.minMedium} {
    margin: 0 -1rem;
  }
`;

export const DetailImage = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  height: 40rem;
  width: calc(50% - 4rem);
  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  &:not(:nth-child(2)),
  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    height: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    width: calc(50% - 2rem);
  }

  @media ${(props) => props.theme.mediaQueries.minMedium} {
    height: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    width: calc(50% - 2rem);
  }
`;

export const DetailColumn = styled(DetailLeft)``;
export const DetailRight = styled.div`
  padding: 2rem 0;
  width: calc(50% - 2rem);

  @media ${(props) => props.theme.mediaQueries.medium} {
    padding: 0;
    width: 100%;
    margin: 0;
  }
`;

export const DetailContent = styled.div`
  width: 100%;
`;

export const DetailTitle = styled.h3`
  font-size: 2.7rem;
  letter-spacing: 3.6px;
  color: #333333;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const DetailPrice = styled.div`
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  align-items: center;

  .original-price {
    color: gray;
    font-size: 1.7rem;
    text-decoration: line-through;
    margin-left: 1rem;
  }

  .promotion {
    color: #fff;
    display: block;
    text-align: center;
    width: 3.5rem;
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 50%;
    margin-left: 4rem;
    background-color: #ff9a8b;
    background-image: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 2.6rem;
    .original-price {
      font-size: 2rem;
    }
  }
`;

export const DetailLabel = styled.h4`
  text-transform: uppercase;
  letter-spacing: 1.7px;
  font-size: 1.7rem;
`;

export const DetailColor = styled.div`
  margin-bottom: 1.7rem;
`;

export const DetailQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
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

export const DetailProductInfo = styled.div`
  h4 {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #333333;
    font-size: 1.8rem;
    font-weight: 400;
    font-family: var(--secondary-font);
    margin-top: 2rem;
    margin-bottom: 3rem;
    display: inline-block;
    border-bottom: 1px solid;
    padding: 0 3rem 1rem;
  }

  p {
    color: #333333;
    line-height: 1.7;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    h4 {
      font-size: 2.1rem;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export const DetailProductDesc = styled.ul`
  margin-bottom: 3rem;
  padding-left: 1.5rem;
  li {
    list-style: circle;
    padding-bottom: 1.5rem;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    li {
      font-size: 1.6rem;
    }
  }
`;

export const Line = styled.span`
  display: block;
  width: 80%;
  height: 1px;
  background-color: #d1d1d1;
  margin: 2rem 0;
`;

export const YouLike = styled.div`
  padding: 6rem 0 0;
`;

export const LikeProductList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const RelatedProducts = styled.div`
  margin-top: 3rem;
  h2 {
    text-align: center;
    font-size: 2.5rem;
    font-family: var(--secondary-font);
    font-weight: 600;
    letter-spacing: 1.4px;
    margin-bottom: 3rem;
  }

  .related-product-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    h2 {
      font-size: 2.8rem;
    }

    .related-product-list {
      margin-left: -0.5rem;
      margin-right: -0.5rem;
    }
  }
`;
