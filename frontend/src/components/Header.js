import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Tùy chỉnh CSS nếu cần

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Smart Farming</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Trang Chủ</Link></li>
          <li><Link to="/weather">Thời Tiết</Link></li>
          <li><Link to="/irrigation">Tưới Nước</Link></li>
          <li><Link to="/guide">Hướng Dẫn Sử Dụng</Link></li> {/* Thêm liên kết đến trang hướng dẫn */}
          <li><Link to="/browse">Lướt Web</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
