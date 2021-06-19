import styled, { keyframes } from 'styled-components';
import { mixins } from 'styles/mixins';
import HeroBanner from 'assets/images/hero-banner.jpg';

const starSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledHero = styled.section`
  padding: 6rem 1.6rem;
  width: 100%;
  min-height: 70vh;
  background-image: url(${HeroBanner});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-attachment: fixed;
  color: #ffffff;
  text-align: center;
  ${mixins.flexCenter};

  @media ${(props) => props.theme.mediaQueries.medium} {
    min-height: 50vh;
    background-position: unset;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
`;

export const HeroContent = styled.article`
  ${mixins.flexCenterColumn}
  padding: 0 1rem;
`;

export const HeroOffer = styled.h3`
  text-transform: capitalize;
  letter-spacing: 1.2px;
  font-weight: bold;
  ${mixins.flexCenter}

  @media (min-width: 1023px) {
    font-size: 4rem;
  }

  @media (max-width: 991px) {
    font-size: 3rem;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 2.3rem;
  }
`;

export const HeroOfferBtn = styled.div`
  display: flex;
  padding: 0 0.9rem;
  border-radius: 0.1rem;
`;

export const HeroOfferStar = styled.div`
  &:nth-child(1) {
    color: #ff9a8b;
    font-size: 2.7rem;
    margin-right: 0.9rem;
    animation: ${starSpin} infinite 3s linear;
  }
  &:nth-child(3) {
    color: #ff9a8b;
    font-size: 2.7rem;
    margin-left: 0.9rem;
    animation: ${starSpin} infinite 3s linear;
  }
`;

export const HeroTitle = styled.h3`
  text-transform: uppercase;
  font-size: 3.2rem;
  font-weight: bold;
  margin: 1.5rem 0;

  @media (max-width: 991px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const HeroDesc = styled.text`
  text-transform: capitalize;
  font-size: 2.4rem;
  margin-bottom: 2.6rem;

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 1.9rem;
  }
`;

export const HeroButton = styled.button`
  text-transform: capitalize;
  text-align: center;
  outline: none;
  border: 0;
  background-color: #ff9a8b;
  background-image: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
  padding: 1.4rem 1.7rem;
  color: #ffffff;
  font-size: 1.8rem;
  cursor: pointer;
  border-radius: 3rem;
  box-shadow: 0 0 13px 2px #e6e6e8;

  &:hover {
    opacity: 0.95;
  }

  &:focus {
    border-color: #ff9a8b;
  }
`;
