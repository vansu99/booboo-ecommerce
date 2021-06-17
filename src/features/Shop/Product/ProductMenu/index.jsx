import React from 'react';
import PropTypes from 'prop-types';
import Tabs from 'components/Tab';

const data = [
  { name: 'tab 1', team: 'ok 1' },
  { name: 'tab 2', team: 'ok 2' },
  { name: 'tab 3', team: 'ok 3' },
]

const ProductMenu = (props) => {
  return <Tabs data={data} />
};

ProductMenu.propTypes = {};

export default ProductMenu;
