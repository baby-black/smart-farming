// Đăng Nhập
import React, { useState } from 'react';
import '../styles/Login.css';
import smartFarmImage from '../assets/smart-farm.jpg'; // Hình ảnh minh họa

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    setErrorMessage('');
    console.log({ email, password });
  };

  return (
    <div className="login-container">
      <img src={smartFarmImage} alt="Smart Farming" className="login-image" />
      <h2>Đăng Nhập Smart Farming</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email của bạn"
            required
          />
        </div>
        <div className="form-group">
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
            required
          />
        </div>
        <button type="submit" className="btn-login">Đăng Nhập</button>
      </form>
      <p className="switch-text">Chưa có tài khoản? <a href="/register">Tạo tài khoản</a></p>
    </div>
  );
}

export default Login;
