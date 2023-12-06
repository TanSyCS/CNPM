// student_info.js
import React, { useState } from 'react';
import './student_info.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import ChangePass from './change_pass';

const StudentInfo = () => {
  const [showChangePass, setShowChangePass] = useState(false);

  const handleToggleChangePass = () => {
    setShowChangePass(!showChangePass);
  };

  const handleCloseChangePass = () => {
    setShowChangePass(false);
  };

  return (
    <div className="student-info">
      <Header />
      <div className="main-contentNa">
        <Menu />
        <div className="contentNa">
          <h2>THÔNG TIN CÁ NHÂN</h2>
          <table className="info-tableNa">
          <tbody>
              <tr>
                <td className="table-contentNa"><label htmlFor="name">Họ và tên</label></td>
                <td>Trần Nguyễn Nam Anh</td>
              </tr>
              <tr>
                <td className="table-contentNa"><label htmlFor="id">Mã số sinh viên</label></td>
                <td>2110758</td>
              </tr>
              <tr>
                <td className="table-contentNa"><label htmlFor="khoa">Khoa</label></td>
                <td>Khoa học và Kỹ thuật Máy tính</td>
              </tr>
              <tr>
                <td className="table-contentNa"><label htmlFor="dob">Ngày tháng năm sinh</label></td>
                <td>01/01/2003</td>
              </tr>
              <tr>
                <td className="table-contentNa"><label htmlFor="gender">Phái</label></td>
                <td>Nữ</td>
              </tr>
              <tr>
                <td className="table-contentNa"><label htmlFor="addr">Địa chỉ</label></td>
                <td>KTX Khu A</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <h2>THÔNG TIN TÀI KHOẢN</h2>
          <table className="info-tableNa">
            <tbody>
              <tr>
                <td className="table-contentNa"><label htmlFor="email">Email</label></td>
                <td>anh.trannguyen2809@hcmut.edu.vn</td>
              </tr>
              <tr>
                <td className="table-contentNa"><label htmlFor="phonenum">Số điện thoại</label></td>
                <td>909090909090</td>
              </tr>
              <tr>
                <td className="table-contentNa"><label htmlFor="passw">Mật khẩu</label></td>
                <td>************</td>
              </tr>
              <tr>
                <td className="table-contentNa"><label htmlFor="pagenum">Số trang còn lại</label></td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
          <div className="action11">
            <a href="stu-info/update-student-info">CẬP NHẬT THÔNG TIN</a>
            <a onClick={handleToggleChangePass}>ĐỔI MẬT KHẨU</a>
          </div>
        </div>
      </div>
      <Footer />
      {showChangePass && <ChangePass onClose={handleCloseChangePass} />}
    </div>
  );
};

export default StudentInfo;
