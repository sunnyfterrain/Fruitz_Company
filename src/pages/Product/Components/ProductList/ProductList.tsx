import ProductItem from './ProductItem';
import './ProductList.scss';

const ProductList = ({ product }: Product) => {
  return (
    <ul className="productList">
      {product?.map((product: Product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </ul>
  );
};

export default ProductList;
