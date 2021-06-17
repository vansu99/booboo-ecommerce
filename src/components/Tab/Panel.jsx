import React from 'react';
import PropTypes from 'prop-types';
import { TabContent } from './Tab.style';

const Panel = ({ content = {} }) => {
  return <TabContent>{content.team}</TabContent>;
};

Panel.propTypes = {
  content: PropTypes.object,
};

export default Panel;
