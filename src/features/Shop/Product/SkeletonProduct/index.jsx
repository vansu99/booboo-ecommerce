import React from 'react';
import { SSkeletonLine, LayoutSkeletonItem, SkeletonImage } from './style';

const SkeletonProduct = ({ length = 6 }) => (
  <React.Fragment>
    {Array.from(new Array(length)).map((x, index) => (
      <LayoutSkeletonItem key={index}>
        <SkeletonImage />
        <SSkeletonLine />
        <SSkeletonLine />
        <SSkeletonLine />
      </LayoutSkeletonItem>
    ))}
  </React.Fragment>
);

export default SkeletonProduct;
