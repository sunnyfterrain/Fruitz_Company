import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

import './Join.scss';

const Join = () => {
  const [joinInput, setJoinInput] = useState({
    id: '',
    pw: '',
    address: '',
    phone_number: '',
    amount: 0,
  });

  const goToMain = () => {
    fetch(`${BASE_URL}users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        user: joinInput.id,
        password: joinInput.pw,
        address: joinInput.address,
        phone_number: joinInput.phone_number,
        amount: joinInput.amount,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('회원가입 성공하였습니다.');
          navigate('/');
        } else if (result.message === 'ID_ALREADY_EXISTS') {
          alert('이미 존재하는 ID입니다.');
        } else if (result.message === 'INVALID_PASSWORD') {
          alert(' 비밀번호 형식이 맞지 않습니다.');
        } else if (result.message === 'PHONE_NUMBER_ALREADY_EXISTS') {
          alert(' 이미 존재하는 전화번호 입니다.');
        } else if (result.message === 'KEY_ERROR') {
          alert('공란에 제대로 기입해주세요.');
        }
      });
  };

  const handleInputs: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;

    setJoinInput({
      ...joinInput,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const doCancel = () => {
    navigate('/member/login');
  };

  return (
    <main className="Join">
      <form>
        <div className="joinInputBox">
          <div className="idInputBox">
            <ul className="inputCategory">
              <li className="categoryText">아이디</li>
              <li className="idCheckBox">
                <input
                  type="text"
                  onChange={handleInputs}
                  className="inputBox"
                  name="id"
                />
                <button className="checkButton">CHECK</button>
              </li>
            </ul>
          </div>

          <div className="pwInputBox">
            <ul className="inputCategory">
              <li className="categoryText">비밀번호</li>
              <li>
                <input
                  type="password"
                  onChange={handleInputs}
                  className="inputBox"
                  name="pw"
                />
                <span>(영문 소문자/숫자/특수문자)</span>
              </li>
            </ul>
          </div>
          <div className="addressInputBox">
            <ul className="inputCategory">
              <li className="categoryText">주소</li>
              <li className="address">
                <input
                  type="text"
                  className="inputBox"
                  onChange={handleInputs}
                  name="address"
                />
                <button className="addressButton">우편번호</button> <br />
              </li>
            </ul>
          </div>

          <div className="telInputBox">
            <ul className="inputCategory">
              <li className="categoryText">휴대전화</li>
              <li>
                <input
                  type="text"
                  onChange={handleInputs}
                  className="inputBox"
                  name="phone_number"
                />
              </li>
            </ul>
          </div>

          <div>
            <ul className="inputCategory">
              <li className="categoryText">프룯츠 페이</li>
              <li>
                <input
                  type="text"
                  onChange={handleInputs}
                  className="inputBox"
                  name="amount"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="agreeButtonBox">
          <button onClick={goToMain} className="joinButton" type="button">
            JOIN
          </button>
          <button className="cancelButton" onClick={doCancel}>
            CANCEL
          </button>
        </div>
      </form>
    </main>
  );
};

export default Join;
