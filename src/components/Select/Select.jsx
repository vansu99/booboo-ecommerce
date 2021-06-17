import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowDownSLine } from 'react-icons/ri';
import { CustomSelect, OptionContainer, OptionSelected } from './Select.style.js';

const Select = ({ children, title, setActive, active }) => {
  return (
    <CustomSelect>
      <OptionSelected onClick={setActive}>
        {title} <RiArrowDownSLine />
      </OptionSelected>
      <OptionContainer className={`${active}`}>{children}</OptionContainer>
    </CustomSelect>
  );
};

Select.propTypes = {
  children: PropTypes.any,
};

export default Select;
