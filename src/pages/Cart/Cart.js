import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../config';
import BlankCart from './BlankCart';
import ValidCart from './ValidCart';
import './Cart.scss';

const Cart = () => {
  // const [carts, setCarts] = useState([]);

  const carts = useSelector(state => state.cart);
  const isCartValid = carts.cart_list?.length > 0;

  const getCartData = async () => {
    /* 백엔드 API */
    // const headers = {
    // Authorization: token,
    // };
    // const token = localStorage.getItem('fruitz_user') || '';
    // const response = await fetch(`${BASE_URL}carts`, { headers });
    /* MockData */
    // const response = await fetch('data/cartData.json');
    // const cartData = await response.json();
    // setCarts(cartData);
  };

  useEffect(() => {
    // getCartData();
  }, [isCartValid, carts]);

  return (
    <div className="Cart">
      {isCartValid && (
        <ValidCart
          carts={carts.cart_list}
          totalPrice={carts.total_price}
          getCartData={getCartData}
        />
      )}
      {!isCartValid && <BlankCart />}
    </div>
  );
};

export default Cart;
