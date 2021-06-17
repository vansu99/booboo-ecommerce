import Card from 'components/Card';
import React, { useEffect, useState } from 'react';
import SkeletonProduct from 'features/Shop/Product/SkeletonProduct';
import { getProductAsyncAction } from 'features/Shop/Product/product.slice';
import { SectionTitle, StyledTrending, TrendingContainer, TrendingProduct } from './style';
import { useDispatch, useSelector } from 'react-redux';

const Trending = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const productLists = useSelector((state) => state.product.products);
  const [trending] = useState({
    'sold[gte]': 7,
  });

  useEffect(() => {
    dispatch(getProductAsyncAction(trending));
  }, [dispatch, trending]);

  return (
    <StyledTrending>
      <TrendingContainer>
        <SectionTitle>Trending Product</SectionTitle>
        <div>
          <TrendingProduct>
            {loading ? (
              <SkeletonProduct length={5} width="20" space="1" />
            ) : (
              !!productLists?.length && productLists.map((product) => <Card key={product._id} {...product} />)
            )}
          </TrendingProduct>
        </div>
      </TrendingContainer>
    </StyledTrending>
  );
};

export default Trending;
