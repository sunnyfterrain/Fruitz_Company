import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from './Components/ProductList/ProductList';
import { BASE_URL } from '../../config';

const Products = () => {
  const [product, setProduct] = useState([]);
  const [mockData, setMockData] = useState([]);
  const location = useLocation();
  const id = parseInt(location.search.split('').pop());
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
  const fetchData = async () => {
    const response = await fetch('/data/initialData.json');
    const getData = await response.json();
    id === 1 && setMockData(getData.product_list.fruit);
    id === 2 && setMockData(getData.product_list.beverage);
    id === 3 && setMockData(getData.product_list.goods);
    id === 4 && setMockData(getData.product_list.gifts);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

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
