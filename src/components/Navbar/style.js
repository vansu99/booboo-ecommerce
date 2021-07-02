import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mixins } from 'styles/mixins';

export const Header = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  background: #fff;
  left: 0;
  z-index: 1000;
  user-select: none;
  transition-property: height;
  transition-duration: 0.2s;
`;

export const HeaderTop = styled.div`
  border-bottom: 1px solid #e4e9f2;
`;

export const NavBarTop = styled.div`
  height: 4rem;
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListInformation = styled.ul`
  display: flex;
  font-size: 1.3rem;
  color: #2e3a59;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 1.5rem;
  }
`;

export const ListInformationItem = styled.li`
  list-style: none;
  margin-right: 1.6rem;
  display: flex;
  align-items: center;
`;

export const HeaderMain = styled.div`
  border-bottom: 1px solid #e4e9f2;
  width: 100%;
`;

export const NavBarMain = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  max-width: var(--container-width);
  margin: 0 auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  @media ${(props) => props.theme.mediaQueries.large} {
    justify-content: space-between;
  }
`;

export const Icon = styled.span`
  display: inline-block;
  align-items: center;
  transform: rotateY(180deg) translateY(-1.4px);
  margin-right: 0.6rem;
  color: inherit;
  & svg {
    font-size: 1.6rem;
    vertical-align: middle;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    & svg {
      font-size: 1.8rem;
    }
  }
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountImage = styled.img`
  width: 3.2rem;
  height: 3.4rem;
  object-fit: cover;
  margin-right: 0.3rem;
`;

export const AccountOption = styled.ul`
  position: absolute;
  top: 140%;
  left: -50%;
  background-color: #fff;
  color: #333;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  min-width: 15rem;
  z-index: 1000;
  ${mixins.hide}

  &::before {
    content: '';
    height: 1rem;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: transparent;
    transform: translateY(-100%);
  }

  & > li {
    display: block;
    padding: 1rem;
    font-size: 1.6rem;

    &:hover {
      color: #ff6a88;
    }
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    left: -210%;
  }
`;

export const AccountOptionLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #333;
  font-size: 1.6rem;

  &:hover {
    color: #ff6a88;
  }
`;

export const AccountName = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  user-select: none;
  position: relative;

  &:hover {
    ${AccountOption} {
      ${mixins.show}
    }
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  width: 10rem;
  font-family: var(--title-font);
  color: inherit;
  & span {
    color: #ff6a88;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 3.6rem;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media ${(props) => props.theme.mediaQueries.large} {
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-direction: column;
    position: fixed;
    left: ${({ mobileNav }) => (mobileNav ? 0 : '-100%')};
    top: 0;
    background-color: #ffffff;
    z-index: 9999;
    width: 100%;
    margin: 0;
    transition: left 0.3s linear;
    height: 100vh;
  }
`;

export const MobileLogo = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  border-bottom: 2px solid black;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  display: ${({ mobileNav }) => (mobileNav ? 'flex' : 'none')};

  .mobile-logo {
    text-decoration: none;
    display: inline-block;
    line-height: 5rem;
    font-size: 2.5rem;
    font-family: var(--title-font);
    color: #000;

    span {
      color: #ff6a88;
    }
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
  min-width: 21rem;
  top: 160%;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 1000;
  transition: all 350ms linear;
  ${mixins.hide}

  &::before {
    content: '';
    height: 1.5rem;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: transparent;
    transform: translateY(-100%);
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  margin: 0 2rem;
  cursor: pointer;
  position: relative;

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 100%;
    margin: 0;
    padding: 2rem;
    &:not(:last-child) {
      border-bottom: 1px solid #dad3d3;
    }
  }

  &:hover {
    ${SubMenu} {
      ${mixins.show}
    }
  }
`;

export const MenuLink = styled(NavLink)`
  font-size: 1.4rem;
  font-weight: 500;
  font-family: var(--secondary-font);
  height: 100%;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #000000;
  &:hover {
    color: #ff6a88;
  }

  &.active {
    color: #ff6a88;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 1.3rem;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 1.5rem;
  }
`;

export const LinkButton = styled(Link)`
  font-size: 1.3rem;
  margin: 0 0.6rem;
  cursor: pointer;
  text-decoration: none;
  color: #2e3a59;
  height: 100%;

  @media ${(props) => props.theme.mediaQueries.large} {
    font-size: 1.5rem;
    line-height: 1.6;
  }
`;

export const OptionList = styled.div`
  display: flex;
  align-items: center;
`;

export const OptionIcon = styled.span`
  font-size: 2.7rem;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  position: relative;
  margin-left: 1.5rem;

  span {
    position: absolute;
    top: -5px;
    right: -5px;
    text-align: center;
    width: 1.9rem;
    line-height: 1.9rem;
    height: 1.9rem;
    border-radius: 50%;
    background-color: #ff6a88;
    color: #fff;
    font-size: 1.3rem;
  }

  svg {
    color: #2e3a59;
  }
`;

// Mobile Nav
export const MobileIcon = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: block;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

// Sub-Menu
export const SubMenuItem = styled.li`
  list-style-type: none;
`;

export const SubMenuLink = styled.a`
  display: block;
  text-decoration: none;
  padding: 1.4rem;
  transition: all 0.15s linear;
  font-size: 1.5rem;
  text-transform: capitalize;

  &:hover {
    color: #ff6a88;
    background-color: #fafafa;
  }
`;

// Search
export const SearchBox = styled.div`
  position: static;
  transition: all 265ms ease-in-out;
  .search-mobile {
    display: none;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    .search-mobile {
      display: block;
      & > svg {
        font-size: 2.5rem;
      }
    }
  }
`;

export const Search = styled.div`
  display: block;

  .search-mobile-close {
    position: absolute;
    right: 3%;
    top: 2%;
    font-size: 3rem;
    cursor: pointer;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    position: fixed;
    width: 100%;
    top: ${({ showSearch }) => (showSearch ? 0 : '-100%')};
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 100;
    height: 100vh;
    transition: top 0.3s ease;
  }

  @media ${(props) => props.theme.mediaQueries.minLarge} {
    .search-mobile-close {
      display: none;
    }
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 4px;
  padding: 0.7rem;

  .search-input {
    font-family: var(--secondary-font);
    color: #000;
    flex: 1 1 0%;
    padding: 0 1rem;
    border: 0;
    font-size: 1.4rem;
    font-weight: 500;
    outline: none;
    border: 0;
    margin: 0;
    border-radius: 0;
    -webkit-appearance: none;

    &::placeholder {
      color: #000;
      font-weight: 300;
    }
  }

  svg {
    font-size: 1.9rem;

    @media ${(props) => props.theme.mediaQueries.minLarge} {
    }
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    border-radius: 0;
    padding: 0;
    transition: all 0.3s ease;

    .search-input {
      overflow: hidden;
      height: 3.5rem;
      color: #000;
      font-size: 13px;
      width: 80%;
      text-align: center;
      padding: 0 40px 0 8px;
      background-color: #fff;
      border-bottom: 1px solid #000;
    }
  }
`;

export const HeaderCartList = styled.ul`
  ${mixins.hide};
  position: absolute;
  right: -20px;
  top: 150%;
  z-index: 999;
  min-width: 42rem;
  min-height: 20rem;
  background: #fff;
  padding: 1.5rem 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 156ms ease-in-out;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    top: -9px;
    right: 11px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid #fff;
  }

  .cart-item {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    img {
      flex: 0 0 25%;
      height: 70px;
      object-fit: contain;
    }

    h3 {
      flex: 1;
      padding: 0 1rem;
      & > span {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    .cart-price {
      flex: 0 0 20%;
      padding: 0 1rem;
      text-align: right;
      font-weight: 600;
    }

    .cart-quantity {
      flex: 0 0 10%;
      padding: 0 1rem;
    }
  }

  .cart-empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 20rem;

    img {
      width: 55%;
      height: 130px;
      object-fit: cover;
    }
  }

  .cart-show-item {
    display: inline-block;
    width: 10rem;
    text-align: center;
    padding: 0.7rem 0;
    cursor: pointer;
    text-decoration: none;
    background-color: #ff9a8b;
    background-image: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
    color: #fff;
    margin-top: 4rem;
    margin-left: auto;
    font-size: 1.5rem;
  }
`;

export const HeaderCart = styled.div`
  position: relative;
  transition: all 0.25s ease-in-out;

  &:hover {
    ${HeaderCartList} {
      ${mixins.show};
    }
  }
`;
