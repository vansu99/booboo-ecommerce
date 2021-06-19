import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mixins } from 'styles/mixins';

export const Products = styled.section`
  width: 100%;
  padding: 3rem 0;
  background-color: #f5f5f5;
  animation: 1s ${mixins.fadeIn} ease-out;

  @media ${(props) => props.theme.mediaQueries.medium} {
    background-color: #fff;
  }
`;

export const ProductContainer = styled.div`
  /* max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 1.6rem;
  width: 100%;
  background-color: #fff; */
`;

export const ProductBody = styled.div`
  display: flex;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 4rem 1.6rem;

  @media ${(props) => props.theme.mediaQueries.medium} {
    flex-direction: column;
  }
`;

// Filter Product
export const FilterPanel = styled.div`
  flex: 0 0 23rem;
  min-width: 0;
  margin: 0 0 1.5rem 0;
  padding-top: 2rem;
  border-right: 1px solid #cccccc45;

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 25rem;
    position: fixed;
    top: 120px;
    height: calc(100% - 120px);
    left: ${(props) => (props.show ? 0 : '-100%')};
    z-index: 999;
    overflow: auto;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #fff;
    transition: left 0.3s ease;
  }
`;

export const FilterMobileClose = styled.div`
  @media ${(props) => props.theme.mediaQueries.minLarge} {
    display: none;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    ${mixins.flexCenter}
    position: fixed;
    top: 10.2rem;
    width: 100%;
    left: 0;
    right: 0;
    padding: 0.5rem 1.6rem;
    z-index: 99;
    font-size: 1.5rem;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;

    svg {
      font-size: 2.3rem;
    }
  }
`;

export const FilterGroup = styled.div`
  padding: 2rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;

export const FilterStatus = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.8);
  height: 2.5rem;
  font-weight: 700;
  font-size: 1.5rem;

  svg {
    font-size: 1.55rem;
    margin-right: 0.825rem;
    stroke: currentColor;
  }
  div {
    flex: 1;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    padding: 0 1.6rem;
  }
`;

export const FilterGroupHeader = styled.div`
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const FilterGroupBody = styled.div``;
export const FilterGroupCheckbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0;
`;

export const FilterCheckBox = styled.div`
  overflow: hidden;
  display: block;
  color: rgba(0, 0, 0, 0.8);

  input {
    display: none;
  }
`;

export const FilterCheckBoxControl = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 1.5rem;
`;

export const FilterCheckBoxWrap = styled.div`
  box-sizing: border-box;
  justify-content: center;
  background-color: #fff;
  text-align: center;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 2px;
  flex-shrink: 0;
  margin-right: 0.7rem;
  box-shadow: inset 0 1px 0 0 rgb(0 0 0 / 5%);
  border: 1px solid rgba(0, 0, 0, 0.26);
`;

export const FilterCheckBoxLabel = styled.span`
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 3rem;
  word-wrap: break-word;
`;

export const FilterFacet = styled.div``;
export const FilterLocation = styled.div``;
export const FilterPriceRange = styled.div``;

// Main Product
export const ProductMain = styled.div`
  padding: 2rem 0 2rem 3rem;
  flex: 1;
  width: 0;
  min-width: 0;

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 100%;
    padding: 0 0 2rem;
    margin-top: 2rem;
  }
`;

export const ProductSearchResultHeader = styled.div`
  display: flex;
  flex-direction: row;
  color: '#555';
  font-size: 1.7rem;
  font-weight: 500;
  margin: 0 0 1.5rem;

  svg {
    position: relative;
    top: -0.575rem;
    width: 2.3rem;
    height: 3.375rem;
    margin: 0 0.75rem 0 0;
    color: #555;
  }

  span {
    .result-highlight {
      margin-left: 0.3rem;
      color: #ff6a88;
      font-weight: bold;
    }
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin: 1.5rem 0;
  }
`;

export const ProductSorBar = styled.div`
  padding: 1rem 2rem;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 2px;
  ${mixins.flexBetween};

  .sort-label {
    color: #555;
    margin-right: 1rem;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    background-color: #fff;
    padding: 0;
    display: flex;
    justify-content: space-between;

    .sort-label {
      display: none;
    }

    .category-label {
      h3 {
        font-weight: 500;
        font-size: 1.9rem;
      }
    }
  }

  @media ${(props) => props.theme.mediaQueries.minLarge} {
    .category-label {
      display: none;
    }
  }
`;

export const ProductSortByOptions = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;

  @media ${(props) => props.theme.mediaQueries.medium} {
    justify-content: flex-end;
  }
`;

export const ProductFilterMobile = styled.div`
  display: none;
  @media ${(props) => props.theme.mediaQueries.medium} {
    display: block;
    cursor: pointer;
    text-align: center;
    width: calc(50% - 1.5rem);
    min-height: 0;
    height: 3.2rem;
    line-height: 3.2rem;
    border: 0;
    box-shadow: 0 0 0 1px #fff;
    background-color: #000000;
    color: #fff;
    border-radius: 1px;

    &:hover {
      border-color: #fff;
    }
  }
`;

export const ProductSortOptionItem = styled.div`
  height: 3.2rem;
  line-height: 3.2rem;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
  user-select: none;
  ${mixins.flexCenter}
  flex: 0 0 9rem;
  text-transform: capitalize;
  padding: 0 1.5rem;
  white-space: nowrap;
  background-color: #fff;
  margin-left: 0.8rem;
  //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

export const ProductSortOptionSelectItem = styled.div`
  background-color: #fff;
  position: absolute;
  top: 105%;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 2%);
  border-radius: 2px;
  z-index: 1;
  ${mixins.hide}

  div {
    padding: 0.6rem 1.5rem;
    &:hover {
      color: #ff6a88;
    }
  }

  &:before {
    content: '';
    height: 0.5rem;
    position: absolute;
    left: 0px;
    right: 0px;
    background-color: transparent;
    transform: translateY(-100%);
  }
`;

export const ProductSortOptionSelect = styled.div`
  display: flex;
  margin-left: 1.8rem;

  .select-sort__control {
    cursor: pointer;
    min-width: 20rem;
    min-height: 0;
    height: 3.2rem;
    border: 0;
    box-shadow: 0 0 0 1px #fff;
    background-color: #fff;
    border-radius: 1px;

    &:hover {
      border-color: #fff;
    }

    .select-sort__value-container {
      padding: 0 1rem;

      .select-sort__placeholder {
        color: #333;
      }
    }

    .select-sort__indicators {
      padding: 0;
      height: 100%;

      & > .css-tlfecz-indicatorContainer {
        color: #333;
      }
    }
  }

  .select-sort__menu {
    cursor: pointer;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin-left: 0;
    .select-sort__control {
      box-shadow: 0;
    }
  }
`;

export const ProductPageController = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductPageControllerState = styled.div`
  margin-right: 2rem;
  .pagi-current {
    color: #ee4d2d;
  }
`;

export const ProductButtonOutline = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  ${mixins.flexCenter};
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  color: rgba(0, 0, 0, 0.8);
  font-weight: 300;
`;

export const ProductPageControllerPrevBtn = styled(ProductButtonOutline)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid #f2f2f2;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  width: 3rem;
  height: 3rem;
  border-radius: 2px;
  background: #fff;

  &:disabled {
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.26);
  }

  svg {
    width: 2rem;
    height: 1.4rem;
    fill: #555;
  }
`;

export const ProductPageControllerNextBtn = styled(ProductButtonOutline)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  width: 3rem;
  height: 3rem;
  border-radius: 2px;
  background: #fff;
`;

export const ProductSearchItemResult = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 3rem -1.5rem 0;

  @media ${(props) => props.theme.mediaQueries.small} {
    margin: 3rem -0.5rem 0;
  }

  @media ${(props) => props.theme.mediaQueries.minMedium} {
    margin: 3rem -1rem 0;
  }
`;

export const ProductSearchItemResultItem = styled.div`
  padding: 0 1rem;
  margin-bottom: 4rem;
  position: relative;

  @media (min-width: 1200px) {
    width: 25%;
  }

  @media (min-width: 768px) {
    width: 33.33%;
  }
`;

// export const ProductItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: #fff;
//   position: relative;
//   user-select: none;
//   color: rgba(0, 0, 0, 0.8);
//   box-shadow: 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 10%);
//   transition: transform 0.1s cubic-bezier(0.4, 0, 0.6, 1), box-shadow 0.1s cubic-bezier(0.4, 0, 0.6, 1),
//     -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.6, 1);
// `;

export const ProductImage = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 0;
  padding-bottom: 133.082%;
  background-color: #f7f7f7;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ProductImageContainer = styled(Link)`
  position: relative;
  display: inline-block;
  width: 100%;
  cursor: pointer;
`;

// Product - Pagination
export const Pagination = styled.div`
  display: flex;
  justify-content: center;

  .pagination {
    ${mixins.flexCenter}

    li {
      margin: 0px 1.5rem;
      font-size: 2rem;
      color: rgb(153, 153, 153);
      cursor: pointer;
      transition: all 0.2s linear 0s;
    }

    & > li.active {
      color: #e91e63;
    }
  }
`;

// Filter Product Tags
export const FilterProductTags = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 1.2rem;
  background-color: rgba(0, 0, 0, 0.03);
  padding: 0.8rem;

  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

export const FilterProductTagItem = styled.div`
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: #ff6a88;
  background-color: #ff6a8824;
  margin-right: 1rem;

  .tags-text {
    white-space: nowrap;
    max-width: 10rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 1.4;
    font-size: 1.3rem;
  }

  .tags-remove {
    cursor: pointer;
    margin-left: 0.4rem;
    font-size: 1.3rem;
  }
`;
