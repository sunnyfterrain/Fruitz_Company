import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginActions } from '../../redux/loginSlice';
import { useLoginState } from '../../LoginContext';
import { BASE_URL } from '../../config';
import './Login.scss';

const Login = () => {
  const [loginInputs, setLoginInputs] = useState({
    id: '',
    pw: '',
  });
  // const loginState = useLoginState();
  const dispatch = useDispatch();
  // const { isLogin, setIsLogin } = loginState;

  const navigate = useNavigate();

  const handleInputs: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;

    setLoginInputs({
      ...loginInputs,
      [name]: value,
    });
  };

  const goToMain = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`${BASE_URL}users/signin`, {
      method: 'POST',
      body: JSON.stringify({
        user: loginInputs.id,
        password: loginInputs.pw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.token) {
          alert('로그인 성공');
          localStorage.setItem('fruitz_user', result.token);
          navigate('/');
          // setIsLogin(true);
          dispatch(loginActions.logIn());
        } else {
          alert('로그인 실패');
        }
      });
  };

  const goToJoin = () => {
    navigate('/member/join');
  };

  return (
    <div className="Login">
      <div className="loginCont">
        <div className="loginLogo">LOGIN</div>
        <form className="inputDataBox">
          <div className="inputCont">
            <input
              type="text"
              className="inputBox"
              name="id"
              onChange={handleInputs}
              autoComplete="off"
            />
            <input
              type="password"
              className="inputBox"
              name="pw"
              onChange={handleInputs}
              autoComplete="off"
            />
          </div>
          <div className="searchBox">
            <div className="search">아이디 찾기</div>
            <div className="wall" />
            <div className="search">비밀번호 찾기</div>
          </div>
          <span className="buttonBox">
            <button className="button" onClick={goToMain}>
              로그인
            </button>
            <button className="button" onClick={goToJoin}>
              회원가입
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
