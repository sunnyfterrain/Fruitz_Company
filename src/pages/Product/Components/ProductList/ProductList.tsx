import ProductItem from './ProductItem';
import './ProductList.scss';
interface ProductProps {
  product: ProductProps;
}
const ProductList = ({ product }: ProductProps) => {
  return (
    <ul className="productList">
      {product?.map((product: Product) => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </ul>
  );
};

export default ProductList;
