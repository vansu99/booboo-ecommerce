import React from 'react';
import { SSkeletonLine, LayoutSkeletonItem, SkeletonImage } from './style';

const SkeletonProduct = ({ items, width, space }) => (
  <React.Fragment>
    {Array.from(new Array(items)).map((x, index) => (
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
