import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Option from './Option';

const CustomSelect = ({ options, selectLabel = 'Select Item', onChange, curSort }) => {
  const [selected, setSelected] = useState('');
  const [activated, setActivated] = useState('');
  const [title, setTitle] = useState(selectLabel);

  useEffect(() => {
    setSelected(curSort && options.filter((option) => option.value === curSort));
  }, [curSort]);

  useEffect(() => {
    setTitle(selected[0]?.label);
  }, [selected]);

  function handleSelected(value) {
    const optionSelected = options.find((item) => item.value === value);
    setTitle(optionSelected.label);
    setActivated('');

    onChange && onChange(optionSelected.value);
  }

  function handleActive() {
    setActivated(activated ? '' : 'active');
  }

  return (
    <Select title={title} active={activated} setActive={handleActive}>
      {!!options.length &&
        options.map((option) => (
          <Option
            key={option.value}
            id={option.value}
            labelText={option.label}
            setSelected={handleSelected}
            selectInputName="price"
            curSort={selected}
          />
        ))}
    </Select>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default CustomSelect;
