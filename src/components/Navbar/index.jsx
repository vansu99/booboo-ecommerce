import React, { useState, useEffect, useMemo } from 'react';
import {
  NavBarTop,
  MenuLink,
  Account,
  Icon,
  ListInformation,
  ListInformationItem,
  NavBarMain,
  SubMenu,
  Logo,
  HeaderTop,
  HeaderMain,
  MenuList,
  MenuItem,
  LinkButton,
  OptionList,
  OptionIcon,
  MobileIcon,
  SubMenuItem,
  MobileLogo,
  SubMenuLink,
  AccountImage,
  AccountName,
  AccountOption,
  AccountOptionLink,
  HeaderSearch,
  HeaderCart,
  HeaderCartList,
  SearchBox,
  Search,
} from './style';
import { AiOutlinePhone, AiOutlineUser, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingCartLine } from 'react-icons/ri';
import { policies } from '../../fakeData/policy';
import { pathNames } from 'constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'features/Auth/userSlice';
import { cartItemCount } from 'features/Shop/Cart/selector';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useDebounce from 'hooks/useDebounce';
import queryString from 'query-string';
import EmptyCartImage from 'assets/images/empty.jpg';
import { getProductAsyncAction } from 'features/Shop/Product/product.slice';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemsCount = useSelector(cartItemCount);
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser._id; // -> true : loggedIn
  const [mobileNav, setMobileNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      'title[regex]': debouncedSearchTerm || '',
    };
  }, [debouncedSearchTerm, location.search]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getProductAsyncAction(queryParams));
      history.push({
        pathname: history.location.pathname,
        search: queryString.stringify(queryParams),
      });
    }
  }, [dispatch, debouncedSearchTerm, queryParams, history]);

  const toggleShowMobileNav = () => {
    setMobileNav((prev) => !prev);
  };

  const toggleShowSearchMobile = () => {
    setShowSearch((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push(pathNames.ROOT);
  };

  const redirectCartPage = () => {
    history.push(pathNames.CART);
  };

  return (
    <React.Fragment>
      <HeaderTop>
        <NavBarTop>
          <ListInformation>
            <ListInformationItem>
              <Icon>
                <AiOutlinePhone />
              </Icon>
              <span>0933071621</span>
            </ListInformationItem>
            {/* <ListInformationItem>
              <SelectMultiLang>
                <Icon>
                  <GrLanguage />
                </Icon>
              </SelectMultiLang>
            </ListInformationItem> */}
          </ListInformation>
          {!isLoggedIn && (
            <Account>
              <Icon>
                <AiOutlineUser />
              </Icon>
              <LinkButton to={pathNames.LOGIN}>Sign in</LinkButton>
              <span>/</span>
              <LinkButton to={pathNames.REGISTER}>Join</LinkButton>
            </Account>
          )}
          {isLoggedIn && (
            <Account>
              <AccountImage
                src={
                  loggedInUser.image ||
                  'https://www.donkey.bike/wp-content/uploads/2020/12/user-member-avatar-face-profile-icon-vector-22965342-e1608640557889.jpg'
                }
              />
              <AccountName>
                {loggedInUser.username}
                <AccountOption>
                  <li>
                    <AccountOptionLink to="/">Tài khoản của tôi</AccountOptionLink>
                  </li>
                  <li>
                    <AccountOptionLink to="/">Đơn hàng</AccountOptionLink>
                  </li>
                  <li onClick={handleLogout}>Đăng xuất</li>
                </AccountOption>
              </AccountName>
            </Account>
          )}
        </NavBarTop>
      </HeaderTop>
      <HeaderMain>
        <NavBarMain>
          <MobileIcon onClick={toggleShowMobileNav}>
            <GiHamburgerMenu />
          </MobileIcon>
          <Logo to="/">
            Boo
            <span>Boo</span>
          </Logo>
          <MenuList mobileNav={mobileNav}>
            <MobileLogo mobileNav={mobileNav}>
              <Link className="mobile-logo" to="/">
                Boo
                <span>Boo</span>
              </Link>
              <MobileIcon onClick={toggleShowMobileNav}>
                <AiOutlineClose />
              </MobileIcon>
            </MobileLogo>
            <MenuItem>
              <MenuLink to="/" activeClassName={location.pathname === pathNames.ROOT ? 'active' : null}>
                Home
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/about">About</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/products" activeClassName={location.pathname === pathNames.PRODUCT ? 'active' : null}>
                products
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/contact">Contact Us</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/policy">Policy</MenuLink>
              <SubMenu>
                {!!policies.length &&
                  policies.map((policy, index) => (
                    <SubMenuItem key={index}>
                      <SubMenuLink>{policy}</SubMenuLink>
                    </SubMenuItem>
                  ))}
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/payment">new in</MenuLink>
            </MenuItem>
          </MenuList>
          <OptionList>
            <SearchBox>
              <Search showSearch={showSearch}>
                <HeaderSearch>
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <AiOutlineSearch />
                </HeaderSearch>
              </Search>
              <div className="search-mobile" onClick={toggleShowSearchMobile}>
                <AiOutlineSearch />
              </div>
            </SearchBox>
            {isLoggedIn && (
              <div>
                <HeaderCart>
                  <OptionIcon onClick={redirectCartPage}>
                    <RiShoppingCartLine />
                    {cartItemsCount > 0 ? <span>{cartItemsCount}</span> : null}
                  </OptionIcon>
                  <HeaderCartList>
                    {!!cartItems.length ? (
                      cartItems.map((value) => {
                        return (
                          <div key={value.product._id}>
                            <li className="cart-item">
                              <img
                                src={value.product.images[0].url || 'https://via.placeholder.com/200'}
                                alt={value.product.title}
                              />
                              <h3>
                                <span>{value.product.title}</span>
                              </h3>
                              <span className="cart-quantity">x{value.quantity}</span>
                              <span className="cart-price">£{value.product.price}</span>
                            </li>
                            <Link to="/cart" className="cart-show-item">
                              Xem hàng
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div className="cart-empty">
                        <img src={EmptyCartImage} alt="cart-empty" />
                        <h3>THERE ARE NO ITEMS IN YOUR BASKET.</h3>
                      </div>
                    )}
                  </HeaderCartList>
                </HeaderCart>
              </div>
            )}
          </OptionList>
        </NavBarMain>
      </HeaderMain>
    </React.Fragment>
  );
};

export default Navbar;
