import React from 'react';
import PropTypes from 'prop-types';
import { OptionItem } from './Select.style.js';

const Option = ({ id, selectInputName, labelText, setSelected }) => {
  return (
    <OptionItem onClick={() => setSelected(id)}>
      <input type="radio" name={selectInputName} id={id} value={id} />
      <label htmlFor={id}>{labelText}</label>
    </OptionItem>
  );
};

Option.propTypes = {
  labelText: PropTypes.string,
  selectInputName: PropTypes.string,
};

export default Option;
