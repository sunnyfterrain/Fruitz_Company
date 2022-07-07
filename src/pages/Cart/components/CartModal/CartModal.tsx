import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './CartModal.scss';

type SetIsOpen = {
  setIsOpenCartModal: (value: boolean) => void;
};
const CartModal = ({ setIsOpenCartModal }: SetIsOpen) => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  const closeModal = () => {
    setIsOpenCartModal(false);
  };

  return (
    <div className="cartModal">
      <div className="modalLayout" />
      <div className="modalContainer">
        <div className="modalHeader">
          <h3 className="modalTitle">장바구니 담기</h3>
          <div className="closeModal" />
          <FiX className="closeIcon" onClick={closeModal} />
        </div>
        <div className="modalContent">
          <div className="circle">
            <FaShoppingCart className="modalIcon" />
          </div>
          <p className="contentTitle">
            장바구니에 상품이 정상적으로 담겼습니다.
          </p>
        </div>
        <div className="modalButtons">
          <button className="modalBtn" onClick={goToCart}>
            장바구니 이동
          </button>
          <button className="modalBtn" onClick={closeModal}>
            쇼핑 계속하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
