import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductItem.scss';

interface ProductItemProps {
  name: string;
  price: number;
  images: any[];
  id: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  price,
  images,
  id,
}) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate({
      pathname: `${id}`,
    });
  };
  return (
    <li className="productItem" onClick={goToDetail}>
      <img className="productImg" alt="fruitImg" src={images[0]} />
      <div className="productContent">
        <h3 className="title">[프룯츠] {name}</h3>
        <p className="price">KRW {price}</p>
      </div>
    </li>
  );
};

export default ProductItem;
