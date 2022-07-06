import React, { createContext, useContext, useState } from 'react';

export const LoginProvider = ({ children }: ChildrenProp) => {
  const token = localStorage.getItem('fruitz_user');
  const [isLogin, setIsLogin] = useState(!!token);
  const loginState = { isLogin, setIsLogin };

  return (
    <LoginStateContext.Provider value={loginState}>
      {children}
    </LoginStateContext.Provider>
  );
};

const LoginStateContext = createContext();

export const useLoginState = () => {
  const context = useContext(LoginStateContext);
  if (!context) {
    throw new Error('Provider를 찾을 수 없습니다.');
  }
  return context;
};
