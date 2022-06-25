import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from './Components/ProductList/ProductList';
import { BASE_URL } from '../../config';

const Products = () => {
  const [product, setProduct] = useState<Array<Product>>([]);
  const [mockData, setMockData] = useState<Array<Product>>([]);
  const location = useLocation();

  // 백엔드 데이터
  // const fetchData = () => {
  //   async function fetchSetProducts() {
  //     const response = await fetch(`${BASE_URL}products${location.search}`);
  //     const data = await response.json();
  //     setProduct(data.product_list);
  //   }
  //   fetchSetProducts();
  // };

  // mock 데이터
  const fetchData = () => {
    fetch('/data/initialData.json')
      .then(res => res.json())
      .then(data => {
        setMockData(data.product_list);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [location.search]);

  return (
    <section className="products">
      {/* {product && <ProductList product={product} />} */}
      {mockData && <ProductList product={mockData} />}
    </section>
  );
};

export default Products;
