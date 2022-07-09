import React from 'react';
import './cartSummary.scss';

const CartSummary = ({ price }: any) => {
  return (
    <ul className="cartSummary">
      <li className="subTitle">
        <span>Sub total</span>KRW 0
      </li>
      <li className="subTitle">
        <span>Shipping</span>KRW 0
      </li>
      <li className="subTitle">
        <span>Order total</span>KRW
      </li>
      <li className="checkOutBtn">
        <button className="checkOut">CHECK OUT</button>
      </li>
    </ul>
  );
};

export default CartSummary;
