import React from "react";
import "../styles/GuidePage.css"; // Bạn có thể tạo một file CSS cho style của trang hướng dẫn

function GuidePage() {
  return (
    <div className="guide-page">
      <h2>Hướng Dẫn Sử Dụng</h2>
      <p>Chào mừng bạn đến với hệ thống Smart Farming!</p>
      <h3>Cách sử dụng:</h3>
      <ul>
        <li>
          <strong>Tổng Quan:</strong> Theo dõi các thông số nhiệt độ, độ ẩm đất và tình trạng cây trồng.
        </li>
        <li>
          <strong>Thời Tiết:</strong> Kiểm tra thông tin về dự báo thời tiết cho khu vực của bạn.
        </li>
        <li>
          <strong>Tưới Nước:</strong> Cài đặt các thông số tưới nước tự động cho cây trồng.
        </li>
      </ul>
      <h3>Liên hệ:</h3>
      <p>Để biết thêm thông tin, vui lòng liên hệ với chúng tôi qua email: support@smartfarming.com</p>
    </div>
  );
}

export default GuidePage;
