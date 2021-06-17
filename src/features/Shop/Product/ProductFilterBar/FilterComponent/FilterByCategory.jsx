import { categoryApis } from 'apis';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FilterGroup, FilterGroupBody, FilterGroupHeader, FilterGroupLink } from './style';

const FilterByCategory = ({ onChange }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await categoryApis.getCategory();
        setCategoryList(response);
      } catch (error) {
        console.log('Failed error', error);
      }
    })();
  }, []);

  const handleClickCategory = (cateId) => {
    onChange && onChange(cateId);
  };

  return (
    <FilterGroup>
      <FilterGroupHeader>Theo danh mục</FilterGroupHeader>
      <FilterGroupBody>
        {categoryList.map((cate) => (
          <FilterGroupLink key={cate._id} onClick={() => handleClickCategory(cate._id)}>
            {cate.name}
          </FilterGroupLink>
        ))}
      </FilterGroupBody>
    </FilterGroup>
  );
};

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

export default FilterByCategory;
