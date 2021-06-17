import PropTypes from 'prop-types';
import React from 'react';
import { FilterCheckBoxControl, FilterCheckBoxWrap, FilterGroup, FilterGroupBody, FilterGroupHeader } from './style';

const services = [
  { label: 'Vận chuyển miễn phí', value: 'isFreeship' },
  { label: 'Có khuyến mãi', value: 'isPromotion' },
];

const FilterByService = ({ onChange, filters = {} }) => {
  const handleChange = (e) => {
    if (!onChange) return;

    onChange({ [e.target.name]: e.target.checked });
  };

  return (
    <FilterGroup>
      <FilterGroupHeader>Dịch vụ</FilterGroupHeader>
      <FilterGroupBody>
        {services.map((service) => (
          <FilterCheckBoxWrap key={service.value}>
            <input
              type="checkbox"
              name={service.value}
              checked={Boolean(filters[service.value])}
              onChange={handleChange}
            />
            <FilterCheckBoxControl htmlFor={service.value}>{service.label}</FilterCheckBoxControl>
          </FilterCheckBoxWrap>
        ))}
      </FilterGroupBody>
    </FilterGroup>
  );
};

FilterByService.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

export default FilterByService;
