// Header.js

import React, { useState } from "react";
import "./Header.css";
import { Dropdown, DropdownButton, DropdownMenu, Image } from "react-bootstrap";
import Options from './option';
const Header = () => {
  const [showOption, setShowOption] = useState(false);

  const handleToggleOption = () => {
    setShowOption(!showOption);
  };

  const handleCloseOption = () => {
    setShowOption(false);
  };

  return (
    <div className="header">
      <div className="header-left-section">
        <a href="/main-page">
          <img
            className="header-logo"
            src={require("../assets/images/logo.png")}
            alt="Logo"
          />
        </a>
      </div>
      <div className="header-nav-links">
        <a href="/main-page">Trang chủ</a>
        <a href="">Tài liệu</a>
        <a href="/main-page/printer-view">Danh sách máy in</a>
        <a onClick={handleToggleOption} style={{ color: 'white' }}>Nhật ký</a>
      </div>
      <div className="header-right-section">
        <Dropdown>
          <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{ border: 'none', background: 'transparent' }}>
            <Image
              src={require("../assets/images/ava.png")}
              roundedCircle
              width="40"
              height="40"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>

            <Dropdown.Item href="/main-page/stu-info" style={{ color: '#000000', background: 'transparent' }}>Thông tin cá nhân</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/login" style={{ color: '#000000', background: 'transparent' }}>Đăng xuất</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <p className="header-text">TRẦN NGUYỄN NAM ANH</p>
        <button className="header-btn">
          <img
            className="header-icon"
            src={require("../assets/images/noti-icon.png")}
            alt="Icon 3"
          />
        </button>
      </div>
      {showOption && <Options onClose={handleCloseOption} />}
    </div>
  );
};

export default Header;
