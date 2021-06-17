import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { sizes, sizeShoes } from 'fakeData/sizes';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {
  DetailAddToCart,
  DetailLabel,
  DetailQuantity,
  DetailQuantityBox,
  DetailQuantityNumber,
  DetailSizes,
  DetailSizeList,
  DetailSizeItem,
} from './ProductCartForm.style';

const ProductCartForm = ({ onSubmit = null, category }) => {
  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState('');
  const [size, setSize] = useState('');

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    return;
  };

  const handleSelectSize = (size) => {
    setSize(size);
    setActive(size);
  };

  const handleSubmit = () => {
    const chooseProduct = {
      quantity,
      size,
    };
    onSubmit && onSubmit(chooseProduct);
  };

  return (
    <div>
      <DetailSizes>
        <DetailLabel>UK SIZE</DetailLabel>
        <DetailSizeList>
          {category?.name === 'Shoes'
            ? sizeShoes.map((value, index) => (
                <DetailSizeItem
                  className={`${active === value ? 'active' : ''}`}
                  key={index}
                  onClick={() => handleSelectSize(value)}
                >
                  {value}
                </DetailSizeItem>
              ))
            : sizes.map((value, index) => (
                <DetailSizeItem
                  className={`${active === value ? 'active' : ''}`}
                  key={index}
                  onClick={() => handleSelectSize(value)}
                >
                  {value}
                </DetailSizeItem>
              ))}
        </DetailSizeList>
      </DetailSizes>
      <DetailQuantity>
        <DetailLabel>Quantity</DetailLabel>
        <div style={{ marginLeft: '2rem' }}>
          <DetailQuantityBox onClick={handleDecreaseQuantity}>
            <AiOutlineMinus />
          </DetailQuantityBox>
          <DetailQuantityNumber>{quantity}</DetailQuantityNumber>
          <DetailQuantityBox onClick={handleIncreaseQuantity}>
            <AiOutlinePlus />
          </DetailQuantityBox>
        </div>
      </DetailQuantity>
      <DetailAddToCart onClick={handleSubmit}>Add to cart</DetailAddToCart>
    </div>
  );
};

ProductCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ProductCartForm;
