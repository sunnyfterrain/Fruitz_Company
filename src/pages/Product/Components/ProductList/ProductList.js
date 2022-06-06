import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.scss';

const ProductList = ({ product }) => {
  return (
    <ul className="productList">
      {product?.map(product => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </ul>
  );
};

export default ProductList;
