import styled from 'styled-components';

export const DetailLabel = styled.h4`
  text-transform: uppercase;
  letter-spacing: 1.7px;
  font-size: 1.7rem;
`;

export const DetailSizes = styled.div`
  margin-bottom: 3rem;
`;

export const DetailSizeList = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

export const DetailSizeItem = styled.li`
  width: 6rem;
  height: 4rem;
  text-align: center;
  border: 1px solid #d7d7d7;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 4rem;
  text-transform: uppercase;
  margin-right: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    border-color: #ff6a88;
  }

  &.active {
    background-color: #f1f1f1;
  }
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

export const DetailAddToCart = styled.button`
  width: 70%;
  height: 4rem;
  display: block;
  color: #ffffff;
  border: 0;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.7rem;
  letter-spacing: 2px;
  background-color: #ff9a8b;
  background-image: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  cursor: pointer;
  margin-bottom: 4rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  &:hover {
    opacity: 0.95;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`;
