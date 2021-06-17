import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { FilterProductTags, FilterProductTagItem } from '../style';

const FilterViewer = ({ filters, onChange }) => {
  return (
    <FilterProductTags>
      <FilterProductTagItem>
        <span className="tags-text">Frontend</span>
        <AiOutlineClose className="tags-remove" />
      </FilterProductTagItem>
      <FilterProductTagItem>
        <span className="tags-text">Backend</span>
        <AiOutlineClose className="tags-remove" />
      </FilterProductTagItem>
    </FilterProductTags>
  );
};

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

export default FilterViewer;
