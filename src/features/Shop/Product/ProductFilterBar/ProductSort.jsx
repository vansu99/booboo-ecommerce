import React from 'react';
import CustomSelect from 'components/Select';
import {
  ProductSorBar,
  ProductSortByOptions,
  ProductSortOptionItem,
  ProductSortOptionSelect,
  ProductFilterMobile,
} from '../style';

const optionSort = [
  { value: 'price', label: 'Giá: Thấp đến Cao' },
  { value: '-price', label: 'Giá: Cao đến Thấp' },
];

const ProductSort = ({ curSort, onChange }) => {
  const handleSort = (data) => {
    onChange && onChange(data);
  };

  return (
    <ProductSorBar>
      <span className="sort-label">Sắp xếp theo</span>
      <ProductSortByOptions>
        <ProductSortOptionItem onClick={() => handleSort('-sold')}>Bán chạy</ProductSortOptionItem>
        <ProductFilterMobile>Filter</ProductFilterMobile>
        <ProductSortOptionSelect>
          <CustomSelect options={optionSort} selectLabel="Giá" onChange={handleSort} curSort={curSort} />
        </ProductSortOptionSelect>
      </ProductSortByOptions>
    </ProductSorBar>
  );
};

export default ProductSort;
