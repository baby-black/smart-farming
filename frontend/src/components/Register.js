//  Tạo tài khoản
import React, { useState } from 'react';
import '../styles/Register.css';
import smartFarmImage from '../assets/smart-farm.jpg'; // Hình ảnh minh họa

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setErrorMessage('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu không khớp!');
      return;
    }
    setErrorMessage('');
    console.log({ email, password });
  };

  return (
    <div className="register-container">
      <img src={smartFarmImage} alt="Smart Farming" className="register-image" />
      <h2>Tạo Tài Khoản Smart Farming</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleRegister}>
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
        <div className="form-group">
          <label>Xác nhận mật khẩu:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Nhập lại mật khẩu"
            required
          />
        </div>
        <button type="submit" className="btn-register">Tạo Tài Khoản</button>
      </form>
      <p className="switch-text">Đã có tài khoản? <a href="/login">Đăng nhập</a></p>
    </div>
  );
}

export default Register;
