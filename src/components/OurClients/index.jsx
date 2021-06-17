import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, SliderContainer, Wrap, SliderItem, SectionTitle } from './style';

const OurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <SectionTitle>Our Clients</SectionTitle>
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
              src="https://cdn.shopify.com/s/files/1/2153/3679/files/JORGE_180x_9c9d3611-7562-4652-b0d7-ea6d3363aa81_180x.jpg?v=1606438668"
              alt=""
            />
          </Wrap>
        </SliderItem>
        <SliderItem>
          <Wrap>
            <img
              src="https://cdn.shopify.com/s/files/1/2153/3679/files/NXP_180x_599d9a00-edfa-4160-8446-6748c3375786_180x.jpg?v=1606436626"
              alt=""
            />
          </Wrap>
        </SliderItem>
        <SliderItem>
          <Wrap>
            <img
              src="https://cdn.shopify.com/s/files/1/2153/3679/files/SILENT_THEORY_180x_a12320a6-e97d-4a66-aaac-f52c50a90221_180x.jpg?v=1606436587"
              alt=""
            />
          </Wrap>
        </SliderItem>
        <SliderItem>
          <Wrap>
            <img
              src="https://orderhanquoc.com/_next/image?url=https%3A%2F%2Fs3-ap-southeast-1.amazonaws.com%2Forderhq%2Fuploads%2Fprod%2Fpartner-logo%2F0619f04d4ae718b1f3d8a6cdfbf909b2d0702e7ebc561271ba8ac1deeeda3162e1bebd9fe74427a04ef6f0ff981b72b5%2FGmarket-1598169087562.png&w=1920&q=100"
              alt=""
            />
          </Wrap>
        </SliderItem>
        <SliderItem>
          <Wrap>
            <img
              src="https://cdn.shopify.com/s/files/1/2153/3679/files/KISS_CHACEY_8f7b38bd-f816-4568-8a3b-d32615c3ef2e_180x_1_180x.jpg?v=1606450476"
              alt=""
            />
          </Wrap>
        </SliderItem>
        <SliderItem>
          <Wrap>
            <img
              src="https://orderhanquoc.com/_next/image?url=https%3A%2F%2Fs3-ap-southeast-1.amazonaws.com%2Forderhq%2Fuploads%2Fprod%2Fpartner-logo%2F0619f04d4ae718b1f3d8a6cdfbf909b2d0702e7ebc561271ba8ac1deeeda3162e1bebd9fe74427a04ef6f0ff981b72b5%2FScreen%2520Shot%25202020-10-06%2520at%252012.38.54%2520AM-1601919546515.jpg&w=1920&q=100"
              alt=""
            />
          </Wrap>
        </SliderItem>
        <SliderItem>
          <Wrap>
            <img
              src="https://orderhanquoc.com/_next/image?url=https%3A%2F%2Fs3-ap-southeast-1.amazonaws.com%2Forderhq%2Fuploads%2Fprod%2Fpartner-logo%2Fbff6a496588d187cf3d80b979a0759451765c38fd0ce7fe44fefa7d1bbc671e6b72562878611ffe91a74429ba9fc8fc1%2Fmedisk-1621773200286.png&w=1920&q=100"
              alt=""
            />
          </Wrap>
        </SliderItem>
      </SliderContainer>
    </Container>
  );
};

export default OurClients;
