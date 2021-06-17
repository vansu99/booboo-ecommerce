import Card from 'components/Card';
import React, { useEffect, useState } from 'react';
import { getProductAsyncAction } from 'features/Shop/Product/product.slice';
import { SectionTitle, StyledTrending, TrendingContainer, TrendingProduct } from './style';
import { useDispatch, useSelector } from 'react-redux';

const Trending = () => {
  const dispatch = useDispatch();
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
            {!!productLists?.length && productLists.map((product) => <Card key={product._id} {...product} />)}
          </TrendingProduct>
        </div>
      </TrendingContainer>
    </StyledTrending>
  );
};

export default Trending;
