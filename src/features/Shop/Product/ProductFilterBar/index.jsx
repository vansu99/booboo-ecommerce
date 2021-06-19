import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs';
import { FilterPanel, FilterStatus, FilterMobileClose } from '../style';
import FilterByCategory from './FilterComponent/FilterByCategory';
import FilterByPrice from './FilterComponent/FilterByPrice';
import FilterByService from './FilterComponent/FilterByService';

const ProductFilterBar = ({ filters, onChange }) => {
  const [show, setShow] = useState(false);

  const handleToggleFilterBar = () => {
    setShow((prev) => !prev);
  };

  const handleChangeCategory = (categoryId) => {
    if (!onChange) return;
    const newFilters = { ...filters, category: categoryId };
    onChange(newFilters);
  };

  const handleChangePrice = (value) => {
    if (!onChange) return;
    const newFilters = { ...filters, ...value };
    onChange(newFilters);
  };

  const handleChangeServices = (value) => {
    if (!onChange) return;
    const newFilters = { ...filters, ...value };
    onChange(newFilters);
  };

  return (
    <FilterPanel show={show}>
      <FilterMobileClose onClick={handleToggleFilterBar}>
        <BsFilter /> <span>Filter</span>
      </FilterMobileClose>
      <FilterStatus>
        <BiFilterAlt />
        <div>Bộ lọc tìm kiếm</div>
      </FilterStatus>
      <FilterByCategory onChange={handleChangeCategory} />
      <FilterByPrice onChange={handleChangePrice} />
      <FilterByService filters={filters} onChange={handleChangeServices} />
    </FilterPanel>
  );
};

ProductFilterBar.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

export default ProductFilterBar;
