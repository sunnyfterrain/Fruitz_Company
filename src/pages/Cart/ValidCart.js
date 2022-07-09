import React from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../redux/cartSlice';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './ValidCart.scss';

const ValidCart = ({ carts, totalPrice, getCartData }) => {
  const dispatch = useDispatch();

  const removeCartAll = () => {
    if (window.confirm('장바구니를 비우시겠습니까?')) {
      /* 백엔드 API */
      // const token = localStorage.getItem('fruitz_user') || '';
      // fetch('http://10.58.1.146:8000/carts/cart', {
      //   method: 'DELETE',
      //   headers: {
      //     Authorization: token,
      //   },
      //   body: JSON.stringify({
      //     product_id: 0,
      //   }),
      // }).then(res => res.json());
      dispatch(cartActions.deleteAll());
      window.scrollTo(0, 0);
    }
  };
  console.log(carts);
  return (
    <section className="validCart">
      <div className="cartContainer">
        <div className="cartTitle">
          <ul className="title">
            <li>
              <input className="chkBox" type="checkBox" />
            </li>
            {TITLE_LIST.map((list, i) => {
              return <li key={i}>{list}</li>;
            })}
          </ul>
        </div>
        <div className="cartContent">
          {carts?.map(cart => {
            return (
              <CartItem key={cart.id} {...cart} getCartData={getCartData} />
            );
          })}
        </div>
        <div className="removeItem">
          <button className="removeBtn">선태상품 삭제</button>
          <button className="removeBtn" onClick={removeCartAll}>
            전체 삭제
          </button>
        </div>
      </div>
      <div className="cartSummary">
        <h1 className="summaryTitle">SHOPPING SUMMARY</h1>
        <CartSummary price={carts} />
      </div>
    </section>
  );
};

export default ValidCart;

const TITLE_LIST = ['ITEM', 'NAME', 'PRICE', 'QUANTITY', 'REMOVE'];
