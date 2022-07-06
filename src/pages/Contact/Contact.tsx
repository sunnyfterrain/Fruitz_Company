import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <img alt="mainImg" src="/images/main.jpg" />
      <p className="contactContent">
        <br />
        1. 프룯츠 위코드 <br />
        전화번호. 02-0000-0000
        <br />
        영업시간. 평일 오전 10시 - 오후 12시
        <br />
        (주말, 공휴일 동일)
        <br />
        <br />
        1. FRUTZ WECODE
        <br />
        Tel.02-0000-0000
        <br />
        Address. 427 Teheran-ro, Gandgnam-gu, Seoul, Korea
        <br />
        Open hour. 10am - 12pm
        <br />
        (Weekend - Holiday)
      </p>
    </div>
  );
};

export default Contact;
