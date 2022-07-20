import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BoxData.scss';

const BoxData = ({ title, content, url }) => {
  const navigate = useNavigate();
  const itemUrl = url;
  const goToPage = () => {
    itemUrl === '' ? alert('아직 준비중입니다.') : navigate(url);
  };

  return (
    <div className="contentsText" onClick={goToPage}>
      <div className="englishText">{title}</div>
      <div className="koreanText">{content}</div>
    </div>
  );
};

export default BoxData;
