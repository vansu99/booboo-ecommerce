import { productApis } from 'apis';
import Card from 'components/Card';
import { addToCart } from 'features/Shop/Cart/cartSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail';
import ProductCartForm from '../ProductCartForm';
import {
  DetailColor,
  DetailContent,
  DetailImage,
  DetailImageList,
  DetailLabel,
  DetailLeft,
  DetailPrice,
  DetailProductDesc,
  DetailProductInfo,
  DetailRight,
  DetailRow,
  DetailTitle,
  Line,
  StyledContainer,
  StyledDetail,
  RelatedProducts,
} from './ProductDetail.style';
import { formatPriceUs } from 'helpers/formatPrice';


const Detail = () => {
  const {
    params: { slug },
  } = useRouteMatch();
  const history = useHistory();
  const { product } = useProductDetail(slug);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.current);
  const isLoggedIn = user._id;
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    if (product.category?._id) {
      (async function () {
        const response = await productApis.getProductByCategory(product.category?._id);
        setRelatedProduct([...response.product]);
      })();
    }
  }, [product.category?._id]);

  const handleAddToCard = (value) => {
    if (isLoggedIn) {
      dispatch(
        addToCart({
          id: product._id,
          product,
          size: value.size,
          quantity: value.quantity,
        })
      );
    } else {
      history.replace({ pathname: '/login' });
    }
  };

  return (
    <StyledDetail>
      <StyledContainer>
        <DetailRow>
          <DetailLeft>
            <DetailImageList>
              {product?.images?.map((image, index) => (
                <DetailImage key={index}>
                  <img src={image.url} alt={product.title} />
                </DetailImage>
              ))}
            </DetailImageList>
          </DetailLeft>
          <DetailRight>
            <DetailContent>
              <DetailTitle>{product?.title}</DetailTitle>
              <DetailPrice>
                {formatPriceUs(product?.salePrice) || 20}
                <span className="original-price">{formatPriceUs(product?.price)}</span>
                <span className="promotion">{product?.promotion}%</span>
              </DetailPrice>
              <Line></Line>
              <DetailColor>
                <DetailLabel>Color:</DetailLabel>
              </DetailColor>
              <ProductCartForm onSubmit={handleAddToCard} category={product?.category} />
              <DetailProductInfo>
                <h4>Product Info</h4>
                <p>{product?.content}</p>
                <h4>Delivery and Returns</h4>
                <DetailProductDesc>
                  <li>uk standard delivery - £3.99 or free on orders over £70</li>
                  <li>uk next day delivery (1-2 working days) - £6.99*</li>
                  <li>european delivery - £8.99 </li>
                  <li>international delivery - £9.99 </li>
                </DetailProductDesc>
              </DetailProductInfo>
            </DetailContent>
          </DetailRight>
        </DetailRow>
        <RelatedProducts>
          <h2>Related Products</h2>
          <div className="related-product-list">
            {!!relatedProduct.length &&
              relatedProduct.map((product) => <Card key={product._id} {...product} width="25" space="1.5" />)}
          </div>
        </RelatedProducts>
      </StyledContainer>
    </StyledDetail>
  );
};

export default Detail;
