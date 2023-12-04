import React, { useState } from 'react';
import './change_pass.css';

const ChangePass = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const changePassword = () => {
    // Your password change logic here

    if (currentPassword === "" || newPassword === "" || confirmPassword === "") {
      setMessage("Vui lòng điền đầy đủ thông tin.");
      document.getElementById("message").style.color = "red";
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Mật khẩu mới và xác nhận mật khẩu mới không khớp.");
      document.getElementById("message").style.color = "red";
      return;
    }

    // Gửi dữ liệu đổi mật khẩu đến server (hoặc xử lý tại đây)
    // Sau đó hiển thị thông báo thành công hoặc thất bại.
    setMessage("Đổi mật khẩu thành công!");
    document.getElementById("message").style.color = "green";
  };

  const cancelChange = () => {
    setMessage(""); // Clear any previous messages
    onClose(); // Close the component
  };

  return (
    <div className="container">
      <h2>ĐỔI MẬT KHẨU</h2>
      <form>
        <label htmlFor="currentPassword">Mật khẩu hiện tại:</label>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />

        <label htmlFor="newPassword">Mật khẩu mới:</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">Xác nhận mật khẩu mới:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="button" onClick={changePassword}>
          XÁC NHẬN
        </button>
        <button type="button" style={{ backgroundColor: "#EB4A4A" }} onClick={cancelChange}>
          HỦY
        </button>
      </form>
      <div id="message">{message}</div>
    </div>
  );
};

export default ChangePass;
