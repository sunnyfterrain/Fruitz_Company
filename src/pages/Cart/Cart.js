import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../config';
import BlankCart from './BlankCart';
import ValidCart from './ValidCart';
import './Cart.scss';

const Cart = () => {
  const [carts, setCarts] = useState([]);
  const isCartValid = carts.total_price !== null && true;
  const token = localStorage.getItem('fruitz_user') || '';
  const headers = {
    Authorization: token,
  };

  const getCartData = async () => {
    const response = await fetch(`${BASE_URL}carts`, { headers });
    const cartData = await response.json();

    setCarts(cartData);
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div className="Cart">
      {isCartValid ? (
        <ValidCart
          carts={carts.cart_list}
          totalPrice={carts.total_price}
          getCartData={getCartData}
        />
      ) : (
        <BlankCart />
      )}
    </div>
  );
};

export default Cart;
