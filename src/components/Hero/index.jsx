import React from 'react';
import {
  StyledHero,
  HeroContainer,
  HeroButton,
  HeroContent,
  HeroDesc,
  HeroOffer,
  HeroTitle,
  HeroOfferBtn,
  HeroOfferStar,
} from './style';
import { BsStar } from 'react-icons/bs';

const Hero = () => {
  return (
    <StyledHero>
      <HeroContainer>
        <HeroContent>
          <HeroOffer>
            Extra
            <HeroOfferBtn>
              <HeroOfferStar>
                <BsStar />
              </HeroOfferStar>
              <span>30% OFF</span>
              <HeroOfferStar>
                <BsStar />
              </HeroOfferStar>
            </HeroOfferBtn>
            Online
          </HeroOffer>
          <HeroTitle>LIFESTYLE COLLECTION</HeroTitle>
          <HeroDesc>Free Shipping On Orders Over $99</HeroDesc>
          <HeroButton>Discover now</HeroButton>
        </HeroContent>
      </HeroContainer>
    </StyledHero>
  );
};

export default Hero;
