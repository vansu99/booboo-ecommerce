import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 100%;
  max-width: var(--container-width);
  padding: 5rem 1.6rem;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 76.8rem;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding-bottom: 3rem;
  font-size: 3.6rem;
  font-family: var(--title-font);
  position: relative;
  margin-bottom: 4rem;
  letter-spacing: 3px;

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

export const SliderContainer = styled(Slider)`
  overflow: hidden;
  border-radius: 1.8rem;
  height: 16rem;
  min-height: 16rem;

  @media ${(props) => props.theme.mediaQueries.medium} {
    min-height: 36vw;
    height: 36vw;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: 2rem;
  }

  .slick-next {
    right: 2rem;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    z-index: 100;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    background: #edf1f7;
  }

  .slick-dots {
    bottom: 2.5rem;

    button {
      display: inline-block;
      background: hsla(0, 0%, 87.8%, 0.6);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      opacity: 0.6;
      transition: 0.1s ease;
      position: relative;

      &::before {
        font-family: 'slick';
        font-size: 6px;
        line-height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 2rem;
        height: 2rem;
        content: '•';
        text-align: center;
        opacity: 0.25;
        color: #e75050;
      }
    }
  }
`;

export const SliderItem = styled.a`
  display: block;
  cursor: pointer;
  position: relative;
  min-height: 16rem;

  @media screen and (max-width: 991px) {
    height: 36vw;
  }
`;

export const Wrap = styled.div`
  position: relative;
  min-height: 16rem;
  height: 16rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  li.slick-active button:before {
    color: white;
  }
`;
