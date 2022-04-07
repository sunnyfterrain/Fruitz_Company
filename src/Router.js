import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Join from './pages/Join/Join';
import TeamMember from './pages/TeamMember/TeamMember';
import Main from './pages/Main/Main';
import Detail from './pages/Product/Components/Detail/Detail';
import Products from './pages/Product/Products';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import MyPage from './pages/MyPage/MyPage';
import Profile from './pages/Profile/Profile';
import ScrollToTop from './ScrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member/join" element={<Join />} />
        <Route path="/teamMember" element={<TeamMember />} />
        <Route path="/member/login" element={<Login />} />
        <Route path="/member/profile" element={<Profile />} />
        <Route path="/product/:fruit" element={<Products />} />
        <Route path="/product/:fruit/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/member/mypage" element={<MyPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
