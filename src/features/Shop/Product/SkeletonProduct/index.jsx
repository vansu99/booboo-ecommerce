import React from 'react';
import { SSkeletonLine, LayoutSkeletonItem, SkeletonImage } from './style';

const SkeletonProduct = ({ length = 6, width, space }) => (
  <React.Fragment>
    {Array.from(new Array(length)).map((x, index) => (
      <LayoutSkeletonItem key={index} width={width} space={space}>
        <SkeletonImage />
        <SSkeletonLine />
        <SSkeletonLine />
        <SSkeletonLine />
      </LayoutSkeletonItem>
    ))}
  </React.Fragment>
);

export default SkeletonProduct;
