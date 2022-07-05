import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './Router';
import { LoginProvider } from './LoginContext';
import store from './redux/store';
import './styles/reset.scss';
import './styles/common.scss';

ReactDOM.render(
  <Provider store={store}>
    <LoginProvider>
      <Router />
    </LoginProvider>
  </Provider>,
  document.getElementById('root')
);
