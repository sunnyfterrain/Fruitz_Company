import React from 'react';
import BoxData from './BoxData';
import './MyPage.scss';

const MyPage = () => {
  const CARD_LIST = [
    {
      id: 1,
      title: 'ORDER',
      content: '주문내역',
      url: '',
    },
    {
      id: 2,
      title: 'PROFILE',
      content: '회원정보',
      url: '/member/profile',
    },
    {
      id: 3,
      title: 'WISHLIST',
      content: '관심상품',
      url: '',
    },
    {
      id: 4,
      title: 'COUPON',
      content: '주문내역',
      url: '',
    },
    {
      id: 5,
      title: 'BOARD',
      content: '쿠폰내역',
      url: '',
    },
    {
      id: 6,
      title: 'ADDRESS',
      content: '배송지관리',
      url: '',
    },
  ];

  return (
    <div className="Mypage">
      <div className="container">
        <div>
          <ul className="textGroup">
            <li>
              <span>가용적립금 </span>
            </li>
            <li>
              <span className="savedMoney">0원 조회</span>
            </li>
          </ul>
        </div>
        <div className="cardList">
          {CARD_LIST.map((cardList, idx) => (
            <BoxData
              key={cardList.id}
              url={cardList.url}
              title={cardList.title}
              content={cardList.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
