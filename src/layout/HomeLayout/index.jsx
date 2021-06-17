import Footer from 'components/Footer';
import React from 'react';
import Navbar from '../../components/Navbar';
import { Main } from './style';

const HomeLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};

export default HomeLayout;
