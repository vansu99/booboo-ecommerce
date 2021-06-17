import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mixins } from 'styles/mixins';

export const StyledLogin = styled.div`
  width: 100%;
  padding: 5rem 0;
  animation: 1s ${mixins.fadeIn} ease-out;
  //background-color: #ee4d2d;
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 50rem;
  margin: 0 auto;
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginLeft = styled.div`
  width: 60%;
  margin-right: 6rem;

  @media ${(props) => props.theme.mediaQueries.large} {
    display: none;
  }
`;

export const LoginImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginRight = styled.div`
  width: calc(40% - 6rem);

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 45rem;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`;

export const LoginForm = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 3rem;
  overflow: hidden;
  border: 1px solid #d1d1d1;
`;

export const LoginTitle = styled.h3`
  margin-bottom: 3rem;
  font-size: 2.8rem;
  font-family: var(--title-font);
  span {
    color: #ff6a88;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const FormLabel = styled.label`
  color: #000000;
  font-size: 1.7rem;
  padding-bottom: 1rem;
`;

export const InputField = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  padding: 1rem;
  font-size: 1.6rem;
  overflow: hidden;

  &:focus {
    border-color: #ff6a88;
  }

  &::placeholder {
    font-size: 1.5rem;
  }
`;

export const ErrorField = styled.span`
  display: inline-block;
  color: red;
  padding-top: 0.5rem;
`;

export const FormSubmit = styled.button`
  border: 0;
  outline: none;
  color: #ffffff;
  //background-color: #ee4d2d;
  background-color: #ff9a8b;
  background-image: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  padding: 1rem;
  font-size: 1.6rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 3px;

  &:hover {
    opacity: 0.96;
  }

  &:disabled {
    color: #cacaca;
    background-image: linear-gradient(90deg, #9e9e9e 0%, #9e9e9e 55%, #9e9e9e 100%);
  }
`;

export const ForgotPassword = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 1rem;
  color: #05a;
`;

export const LineText = styled.div`
  position: relative;
  text-align: center;
  &:before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    background-color: #d1d1d1;
  }
  span {
    display: inline-block;
    background-color: white;
    position: relative;
    z-index: 2;
    padding: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #9f9898;
    font-size: 1.3rem;
    font-family: var(--secondary-font);
  }
`;

export const GoogleLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
  border: 1px solid #333;
  padding: 1rem;
  font-size: 1.7rem;
  cursor: pointer;
  font-weight: 600;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 0.25s linear;

  svg {
    font-size: 2rem;
    margin-right: 0.7rem;
    vertical-align: middle;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const LinkRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #918989;
  a {
    margin-left: 0.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    color: #05a;
  }
`;
