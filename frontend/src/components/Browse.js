import React, { useState } from "react";
import "../styles/Browse.css";

const sampleProducts = [
    { id: 1, name: "Cây Cà Chua", description: "Cây cà chua khỏe mạnh, sẵn sàng trồng.", price: "50.000 VNĐ", image: "/assets/images/tomato-plant.jpg" },
    { id: 2, name: "Hạt Giống Lúa", description: "Hạt giống lúa chất lượng cao, đạt chuẩn xuất khẩu.", price: "30.000 VNĐ", image: "/assets/images/rice-seed.jpg" },
    { id: 3, name: "Phân Bón Hữu Cơ", description: "Phân bón thân thiện với môi trường, giúp cây phát triển khỏe mạnh.", price: "100.000 VNĐ", image: "/assets/images/organic-fertilizer.jpg" },
    { id: 4, name: "Bình Tưới Cây", description: "Bình tưới cây dung tích lớn, dễ sử dụng.", price: "120.000 VNĐ", image: "/assets/images/watering-can.jpg" },
    { id: 5, name: "Hạt Giống Rau Cải", description: "Hạt giống rau cải xanh tươi ngon, dễ trồng.", price: "25.000 VNĐ", image: "/assets/images/vegetable-seed.jpg" },
    { id: 6, name: "Máy Bơm Tưới Tự Động", description: "Máy bơm tưới tự động, tiết kiệm nước và thời gian.", price: "500.000 VNĐ", image: "/assets/images/irrigation-pump.jpg" },
    { id: 7, name: "Phân Bón Lá", description: "Phân bón dạng lá, hỗ trợ cây hấp thụ nhanh.", price: "80.000 VNĐ", image: "/assets/images/leaf-fertilizer.jpg" },
    { id: 8, name: "Lưới Chắn Côn Trùng", description: "Lưới chắn côn trùng bảo vệ cây trồng hiệu quả.", price: "150.000 VNĐ", image: "/assets/images/insect-net.jpg" },
    { id: 9, name: "Camera Giám Sát Nông Trại", description: "Camera độ phân giải cao, hỗ trợ giám sát nông trại 24/7.", price: "1.200.000 VNĐ", image: "/assets/images/farm-camera.jpg" },
    { id: 10, name: "Hệ Thống Tưới Nhỏ Giọt", description: "Hệ thống tưới nhỏ giọt thông minh, tiết kiệm nước.", price: "600.000 VNĐ", image: "/assets/images/drip-irrigation.jpg" },
    { id: 11, name: "Đèn LED Trồng Cây", description: "Đèn LED tăng trưởng cho cây trồng trong nhà kính.", price: "350.000 VNĐ", image: "/assets/images/led-grow-light.jpg" },
    { id: 12, name: "Đất Trồng Cây", description: "Đất trồng cây giàu dinh dưỡng, thích hợp với nhiều loại cây trồng.", price: "70.000 VNĐ", image: "/assets/images/plant-soil.jpg" },
    { id: 13, name: "Cảm Biến Độ Ẩm Đất", description: "Cảm biến đo độ ẩm đất chính xác, kết nối IoT.", price: "400.000 VNĐ", image: "/assets/images/soil-moisture-sensor.jpg" },
    { id: 14, name: "Hạt Giống Hoa Hồng", description: "Hạt giống hoa hồng chất lượng cao, màu sắc rực rỡ.", price: "45.000 VNĐ", image: "/assets/images/rose-seed.jpg" },
    { id: 15, name: "Máy Đo Nhiệt Độ Không Khí", description: "Thiết bị đo nhiệt độ và độ ẩm không khí, tích hợp IoT.", price: "550.000 VNĐ", image: "/assets/images/air-temperature-sensor.jpg" },
    { id: 15, name: "Máy Đo Nhiệt Độ Không Khí", description: "Thiết bị đo nhiệt độ và độ ẩm không khí, tích hợp IoT.", price: "550.000 VNĐ", image: "/assets/images/air-temperature-sensor.jpg" },
  // Các sản phẩm khác
];

const newsArticles = [
  {
    id: 1,
    title: "Cập Nhật Tình Hình Cây Trồng Mùa Hè",
    description: "Bài viết cập nhật tình hình cây trồng mùa hè năm nay.",
    date: "15/11/2024",
    link: "/news/article1",
  },
  {
    id: 2,
    title: "Cách Xử Lý Sâu Bệnh Trên Cây Trồng",
    description: "Phương pháp phòng trừ sâu bệnh trên cây trồng hiệu quả.",
    date: "10/11/2024",
    link: "/news/article2",
  },
  {
    id: 3,
    title: "Xu Hướng Nông Nghiệp Thông Minh",
    description: "Ứng dụng công nghệ IoT và AI trong sản xuất nông nghiệp.",
    date: "05/11/2024",
    link: "/news/article3",
  },
  {
    id: 4,
    title: "Lợi Ích Của Phân Bón Hữu Cơ",
    description: "Tại sao nên chọn phân bón hữu cơ thay vì phân bón hóa học?",
    date: "01/11/2024",
    link: "/news/article4",
  },
  {
    id: 5,
    title: "Hướng Dẫn Trồng Rau Sạch Tại Nhà",
    description: "Kỹ thuật đơn giản để trồng rau sạch trong không gian nhỏ.",
    date: "28/10/2024",
    link: "/news/article5",
  },
  {
    id: 6,
    title: "Phòng Chống Tác Động Của Biến Đổi Khí Hậu",
    description: "Giải pháp bảo vệ cây trồng trước những thay đổi thời tiết cực đoan.",
    date: "20/10/2024",
    link: "/news/article6",
  },
  {
    id: 7,
    title: "Công Nghệ Camera Trong Nông Nghiệp",
    description: "Sử dụng camera để giám sát và phân tích cây trồng.",
    date: "15/10/2024",
    link: "/news/article7",
  },
  {
    id: 8,
    title: "Cách Tăng Năng Suất Cây Trồng",
    description: "Các mẹo và phương pháp để nâng cao sản lượng cây trồng.",
    date: "10/10/2024",
    link: "/news/article8",
  },
  {
    id: 9,
    title: "Tầm Quan Trọng Của Đất Sạch",
    description: "Đất trồng cây chất lượng cao và ảnh hưởng đến sản xuất nông nghiệp.",
    date: "05/10/2024",
    link: "/news/article9",
  },
  {
    id: 10,
    title: "Nông Nghiệp Không Đất: Tương Lai Bền Vững",
    description: "Hydroponics và các phương pháp canh tác không cần đất.",
    date: "01/10/2024",
    link: "/news/article10",
  },
  // Các bài báo khác
];

function Browse() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="browse-container">
      {/* Input tìm kiếm */}
      <h2>Tìm Kiếm Sản Phẩm</h2>
      <input
        type="text"
        placeholder="Nhập tên sản phẩm..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {/* Danh sách sản phẩm */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          ))
        ) : (
          <p>Không tìm thấy sản phẩm nào phù hợp.</p>
        )}
      </div>

      {/* Danh sách bài báo */}
      <h3>Bài Báo Mới Nhất</h3>
      <div className="news-list">
        {newsArticles.map((article) => (
          <div className="news-card" key={article.id}>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <span>{article.date}</span>
            <a href={article.link} className="read-more">
              Đọc thêm
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
