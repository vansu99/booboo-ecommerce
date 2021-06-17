import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getProductAsyncAction } from './product.slice';
import ProductFilterBar from './ProductFilterBar';
import ProductList from './ProductList';
import { ProductBody } from './style';
import queryString from 'query-string';

const ProductHome = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number.parseInt(params.page) || 1,
      limit: Number.parseInt(params.limit) || 9,
      sort: params.sort || 'price',
      isFreeship: params.isFreeship === 'true',
    };
  }, [location.search]);

  useEffect(() => {
    dispatch(getProductAsyncAction(queryParams));
  }, [dispatch, queryParams]);

  const handleChangePagi = useCallback(
    (page) => {
      const filters = {
        ...queryParams,
        page: page,
      };

      history.push({
        pathname: history.location.pathname,
        search: queryString.stringify(filters),
      });
    },
    [history, queryParams]
  );

  const handleChangeSort = useCallback(
    (data) => {
      const filters = {
        ...queryParams,
        sort: data,
      };

      history.push({
        pathname: history.location.pathname,
        search: queryString.stringify(filters),
      });
    },
    [history, queryParams]
  );

  const handleChangeFilter = useCallback(
    (dataFilters) => {
      const filters = {
        ...queryParams,
        ...dataFilters,
      };

      history.push({
        pathname: history.location.pathname,
        search: queryString.stringify(filters),
      });
    },
    [history, queryParams]
  );

  return (
    <ProductBody>
      <ProductFilterBar filters={queryParams} onChange={handleChangeFilter} />
      <ProductList
        changePagination={handleChangePagi}
        changeSort={handleChangeSort}
        curSort={queryParams.sort}
        filters={queryParams}
      />
    </ProductBody>
  );
};

export default ProductHome;
