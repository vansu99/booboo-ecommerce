import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FilterGroup, FilterGroupHeader, InputGroup, FilterButton } from './style';

const FilterByPrice = ({ onChange }) => {
  const [value, setValue] = useState({
    'price[gte]': 0,
    'price[lte]': 0,
  });

  const handleChangePrice = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onChange && onChange(value);

    setValue({
      'price[gte]': 0,
      'price[lte]': 0,
    });
  };

  return (
    <FilterGroup>
      <FilterGroupHeader>Giá</FilterGroupHeader>
      <span style={{ fontSize: '12px', color: 'rgb(169 163 163)', fontWeight: 600 }}>Chọn khoảng giá</span>
      <InputGroup>
        <input type="text" name="price[gte]" value={value['price[gte]']} onChange={handleChangePrice} />
        <span>-</span>
        <input type="text" name="price[lte]" value={value['price[lte]']} onChange={handleChangePrice} />
      </InputGroup>
      <FilterButton type="submit" onClick={handleSubmit}>
        Áp dụng
      </FilterButton>
    </FilterGroup>
  );
};

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

export default FilterByPrice;
