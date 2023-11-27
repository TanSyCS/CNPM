// Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left-section">
        <a href=""><img className="header-logo" src={require("../assets/images/logo.png")} alt="Logo" /></a>
      </div>
      <div className="header-nav-links">
        <a href="">Trang chủ</a>
        <a href="">Tài liệu</a>
        <a href="">Danh sách máy in</a>
        <a href="">Nhật ký</a>
      </div>
      <div className="header-right-section">
        <a href=""><img className="header-icon" src={require("../assets/images/ava.png")} alt="Icon 1" /></a>
        <p className="header-text">TRẦN NGUYỄN NAM ANH</p>
        <button className="header-btn" >
          <img className="header-icon" src={require("../assets/images/noti-icon.png")} alt="Icon 3" />
        </button>
      </div>
    </div>
  );
};

export default Header;