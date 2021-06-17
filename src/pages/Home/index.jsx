import Services from 'components/Services';
import React from 'react';
import Carousel from 'components/Carousel';
import OurClients from 'components/OurClients';
import Trending from 'components/Trending';
import Inspire from 'components/Inspirse';
import Hero from 'components/Hero';
import { HomePage } from './styles';
//import Articles from 'components/Articles';

const Home = () => {
  return (
    <HomePage>
      <Carousel />
      <Services />
      <Inspire />
      <Trending />
      <Hero />
      {/* <Articles /> */}
      <OurClients />
    </HomePage>
  );
};

export default Home;
