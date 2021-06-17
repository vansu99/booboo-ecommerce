import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 100%;
  max-width: var(--container-width);
  padding: 5rem 1.6rem;
  margin: 0 auto;

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
    max-width: 76.8rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export const SliderContainer = styled(Slider)`
  overflow: hidden;
  border-radius: 1.8rem;
  height: 40vw;
  min-height: 40vw;

  @media screen and (max-width: 991px) {
    min-height: 56vw;
    height: 56vw;
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
    display: block;
    width: 4rem;
    height: 4rem;
    background-color: hsla(0, 0%, 100%, 0.2);
    border-radius: 50%;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
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
  height: 40vw;

  @media screen and (max-width: 991px) {
    height: 56vw;
  }
`;

export const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  li.slick-active button:before {
    color: white;
  }
`;
