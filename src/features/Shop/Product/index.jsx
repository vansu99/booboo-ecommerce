import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import ProductHome from './ProductHome';

const ProductFeature = () => {
  const match = useRouteMatch();
  return (
    <React.Fragment>
      <Switch>
        <Route path={match.url} exact component={ProductHome} />
        <Route path={match.url + `/:slug`} exact component={ProductDetail} />
      </Switch>
    </React.Fragment>
  );
};

export default ProductFeature;
