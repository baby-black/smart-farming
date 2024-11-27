import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  // Gọi API từ backend để lấy danh sách sản phẩm
  useEffect(() => {
    fetch('http://localhost:5000/api/products')  // Đảm bảo URL này đúng với backend của bạn
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Lỗi:', err));
  }, []);  

  return (
    <div>
      <h2>Danh Sách Sản Phẩm</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
