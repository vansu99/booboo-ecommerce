import React from 'react';
import { Router } from 'react-router-dom';
import Routes from 'routes/routes';
import history from 'helpers/history';
import ScrollToTop from 'components/ScrollToTop';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <ToastContainer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
