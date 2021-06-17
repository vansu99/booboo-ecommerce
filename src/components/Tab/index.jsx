import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledProductMenu, ProductMenuItem, ProductMenuList } from './Tab.style';
import { IoMdTabletLandscape } from 'react-icons/io';
import Panel from './Panel';

const Tabs = ({ data = [] }) => {
  const [selected, setSelected] = useState(0);
  const handleChangeIndex = (index) => {
    setSelected(index);
  };

  return (
    <StyledProductMenu>
      <ProductMenuList>
        {data?.map((value, index) => {
          return (
            <ProductMenuItem key={index} selected={index === selected} onClick={() => handleChangeIndex(index)}>
              {value.name}
            </ProductMenuItem>
          );
        })}
      </ProductMenuList>
      <Panel content={data[selected]} />
    </StyledProductMenu>
  );
};

IoMdTabletLandscape.propTypes = {
  data: PropTypes.array,
};

export default Tabs;
