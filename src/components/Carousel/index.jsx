import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, SliderContainer, Wrap, SliderItem } from './style';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <SliderContainer {...settings}>
        <SliderItem>
          <Wrap>
            <img
              style={{
                position: 'absolute',
                inset: 0,
                boxSizing: 'border-box',
                padding: '0px',
                border: 'none',
                margin: 'auto',
                display: 'block',
                width: '0px',
                height: '0px',
                minWidth: '100%',
                maxWidth: '100%',
                minHeight: '100%',
                maxHeight: '100%',
              }}
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
          </Wrap>
        </SliderItem>
        <SliderItem>
          <Wrap>
            <img
              src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </Wrap>
        </SliderItem>
        <SliderItem>
          <Wrap>
            <img
              src="https://images.pexels.com/photos/950313/pexels-photo-950313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </Wrap>
        </SliderItem>
      </SliderContainer>
    </Container>
  );
};

export default Carousel;
