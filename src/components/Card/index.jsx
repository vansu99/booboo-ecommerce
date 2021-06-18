import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { formatPriceUs } from 'helpers/formatPrice';
import {
  ImageContainer,
  OriginalPrice,
  Price,
  Product,
  ProductRating,
  ProductRatingCount,
  ProductRatingScore,
  SalePrice,
  StatusOutofStock,
  Sticker,
  StickerContent,
  TrendingProductBody,
  TrendingProductBodyName,
  TrendingProductBodyPrice,
  TrendingProductImage,
  TrendingProductItem,
} from './style';

const Card = ({ width, space, ...product }) => {
  return (
    <TrendingProductItem width={width} space={space} key={product?.product_id}>
      <Product>
        <TrendingProductImage>
          <ImageContainer to={`/products/${product?.slug}`}>
            <img
              src={product?.images[0]?.url || `https://via.placeholder.com/251x370?text=Visit+Blogging.com+Now`}
              alt={product?.title}
            />
          </ImageContainer>
          <Sticker>
            <StickerContent>Sale {product.promotion || 20}%</StickerContent>
          </Sticker>
          {product?.checked && <StatusOutofStock></StatusOutofStock>}
        </TrendingProductImage>
        <TrendingProductBody>
          <TrendingProductBodyName to={`/products/${product?.slug}`}>{product?.title}</TrendingProductBodyName>
          <TrendingProductBodyPrice>
            <span>
              <Price>
                <SalePrice>{formatPriceUs(product?.salePrice) || 0}</SalePrice>
              </Price>
              <Price>
                <OriginalPrice>{formatPriceUs(product?.price)}</OriginalPrice>
              </Price>
            </span>
          </TrendingProductBodyPrice>
          <ProductRating>
            <ProductRatingScore>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </ProductRatingScore>
            <ProductRatingCount>(9)</ProductRatingCount>
          </ProductRating>
          {/* <ProductAddToCard>Thêm vào giỏ</ProductAddToCard> */}
        </TrendingProductBody>
      </Product>
    </TrendingProductItem>
  );
};

export default Card;
