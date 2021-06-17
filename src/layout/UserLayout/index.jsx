import React from 'react';
import { Main } from './style';
import Navbar from '../../components/Navbar';
import Footer from 'components/Footer';

const UserLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};

export default UserLayout;
