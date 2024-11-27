// Trang chủ
import React from 'react';
import '../styles/HomePage.css';
import smartFarmImage from '../assets/smart-farm.jpg';

function HomePage() {
  return (
    <div className="homepage-container">
      <img src={smartFarmImage} alt="Smart Farming" className="homepage-image" />
      <h1>Chào mừng đến với Hệ thống Smart Farming</h1>
      <p>Quản lý nông trại thông minh với công nghệ hiện đại.</p>
      <div className="buttons-container">
        <a href="/dashboard" className="btn-primary">Xem Bảng Điều Khiển</a>
        <a href="/login" className="btn-secondary">Đăng Nhập</a>
      </div>
    </div>
  );
}

export default HomePage;
