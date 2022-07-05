import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../../../redux/cartSlice';
import { BASE_URL } from '../../../../config';
import CartModal from '../../../Cart/components/CartModal/CartModal';
import './DetailBtn.scss';

const DetailBtn = ({ count, price, id, name, images }) => {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const randomNum = Math.floor(Math.random() * 300);
  const cartData = useSelector(state => state.cart);

  const addCart = () => {
    /* 백엔드 API */
    // const body = JSON.stringify({
    //   product_id: id,
    //   quantity: count,
    //   price: price,
    // });

    // const headers = {
    //   Authorization: localStorage.getItem('fruitz_user'),
    // };

    // fetch(`${BASE_URL}carts`, {
    //   method: 'POST',
    //   headers,
    //   body,
    // });
    dispatch(
      cartActions.addCart({
        id: id,
        name: name,
        images: images,
        quantity: count,
        price: price,
      })
    );

    window.scrollTo(0, 0);
    setIsOpenCartModal(true);
  };

  const goBack = () => {
    navigate(-1);
  };

  const addWishList = () => {
    alert('죄송합니다. 서비스 준비중입니다.');
  };

  return (
    <div className="detailBtn">
      {isOpenCartModal && <CartModal setIsOpenCartModal={setIsOpenCartModal} />}
      <h3 className="detailLook">이 상품을 {randomNum}명이 보고있습니다.</h3>
      <div className="detailBtnSet">
        <button className="buyBtn" onClick={addWishList} s>
          BUY NOW
        </button>
        <button className="addCartBtn" onClick={addCart}>
          ADD TO CART
        </button>
        <button className="wishListBtn" onClick={addWishList}>
          WISH LIST
        </button>
      </div>
      <button className="backBtn" onClick={goBack}>
        뒤로가기
      </button>
    </div>
  );
};

export default DetailBtn;
