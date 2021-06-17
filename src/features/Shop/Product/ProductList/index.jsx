import Card from 'components/Card';
import queryString from 'query-string';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RiLightbulbLine } from 'react-icons/ri';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ProductSort from '../ProductFilterBar/ProductSort';
import SkeletonProduct from '../SkeletonProduct';
import { Pagination, ProductMain, ProductSearchItemResult, ProductSearchResultHeader } from '../style';

const ProductLists = ({ changePagination, changeSort, curSort, filters }) => {
  const location = useLocation();
  const resultSearch = queryString.parse(location.search);
  const productLists = useSelector((state) => state.product.products);
  const productPagination = useSelector((state) => state.product.pagination);
  const loading = useSelector((state) => state.product.loading);

  const onChangePagi = (data) => {
    const page = data.selected + 1;
    changePagination && changePagination(page);
  };

  const onChangeSort = (data) => {
    changeSort && changeSort(data);
  };

  return (
    <ProductMain>
      {!!resultSearch['title[regex]'] && (
        <ProductSearchResultHeader>
          <RiLightbulbLine />
          <span>
            Kết quả tìm kiếm cho từ khoá:<span className="result-highlight">{resultSearch['title[regex]']}</span>
          </span>
        </ProductSearchResultHeader>
      )}
      <ProductSort curSort={curSort} onChange={onChangeSort} />
      {/* <FilterViewer filters={filters} /> */}
      <ProductSearchItemResult>
        {loading ? (
          <SkeletonProduct length={9} width="25" space="1" />
        ) : (
          !!productLists.length &&
          productLists.map((product) => <Card key={product._id} width="25" space="1.5" {...product} />)
        )}
      </ProductSearchItemResult>

      <Pagination>
        <ReactPaginate
          previousLabel={<IoIosArrowBack />}
          nextLabel={<IoIosArrowForward />}
          pageCount={productPagination?.totalPages}
          onPageChange={onChangePagi}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName="pagination"
          activeClassName="active"
        />
      </Pagination>
    </ProductMain>
  );
};

export default ProductLists;
