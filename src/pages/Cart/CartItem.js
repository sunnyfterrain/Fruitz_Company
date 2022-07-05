import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../redux/cartSlice';
import { BASE_URL } from '../../config';
import './CartItem.scss';

const CartItem = ({ id, name, price, quantity, images, getCartData }) => {
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();

  const countUp = () => {
    setCount(prevCount => prevCount + 1);
  };

  const countDown = () => {
    if (count < 2) {
      alert('최소 주문수량은 1개입니다.');
      return;
    }
    setCount(prevCount => prevCount - 1);
  };

  const inputHandler = e => {
    setCount(parseInt(e.target.value));
  };

  const deleteCartItem = () => {
    // const token = localStorage.getItem('fruitz_user') || '';
    // const headers = {
    //   Authorization: token,
    // };

    // fetch(`${BASE_URL}carts?cart_id=${id}`, {
    //   method: 'DELETE',
    //   headers,
    // }).then(setTimeout(() => getCartData(), 300));
    dispatch(cartActions.delete(id));
    window.scrollTo(0, 0);
  };
  return (
    <ul className="cartItem">
      <li>
        <input className="chkBox" type="checkBox" />
      </li>
      <li>
        <img className="cartImg" src={images[0]} alt="product_img" />
      </li>
      <li className="cartName">{name}</li>
      <li className="cartPrice">KRW {price.toLocaleString()}</li>
      <li className="cartInput">
        <input
          className="quantity"
          type="text"
          value={count}
          onChange={inputHandler}
        />
        <button className="countBtn">
          <img
            alt="upArrowImg"
            src="https://fritz.co.kr/img/btn_quantity_up.gif"
            onClick={countUp}
          />
        </button>
        <button className="countBtn">
          <img
            alt="downArrowImg"
            src="https://fritz.co.kr/img/btn_quantity_down.gif"
            onClick={countDown}
          />
        </button>
      </li>
      <li className="removeCart">
        <FiX className="removeIcon" onClick={deleteCartItem} />
      </li>
    </ul>
  );
};

export default CartItem;
