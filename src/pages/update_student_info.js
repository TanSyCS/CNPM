// student_info.js
import './update_student_info.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import React, { useState } from 'react';

const UpdateStudentInfo = () => {
  const ConfirmUpdate = () => {
    alert("Xác nhận cập nhật?");
  };

  const CancelUpdate = () => {
    alert("Hủy cập nhật?");
  };
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    khoa: '',
    dob: '',
    gender: '',
    addr: '',
    email: '',
    phonenum: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="student-infoNa2">
      <Header />
      <div className="main-contentNa2">
        <Menu />
        <div className="contentNa2">
          <h2>THÔNG TIN CÁ NHÂN</h2>
          <table className="info-tableNa2">
            <tbody>
              <tr>
                <td className="table-contentNa2"><label htmlFor="name">Họ và tên</label></td>
                <td> <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}></input></td>
              </tr>
              <tr>
                <td className="table-contentNa2"><label htmlFor="id">Mã số sinh viên</label></td>
                <td> <input type="number" id="id" name="id" value={formData.id} onChange={handleInputChange}></input></td>
              </tr>
              <tr>
                <td className="table-contentNa2"><label htmlFor="khoa">Khoa</label></td>
                <td> <input type="text" id="khoa" name="khoa" value={formData.khoa} onChange={handleInputChange}></input></td>
              </tr>
              <tr>
                <td className="table-contentNa2"><label htmlFor="dob">Ngày tháng năm sinh</label></td>
                <td> <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange}></input></td>
              </tr>
              <tr>
                <td className="table-contentNa2"><label htmlFor="gender">Phái</label></td>
                <td> <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleInputChange}></input></td>
              </tr>
              <tr>
                <td className="table-contentNa2"><label htmlFor="addr">Địa chỉ</label></td>
                <td> <input type="text" id="addr" name="addr" value={formData.addr} onChange={handleInputChange}></input></td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <h2>THÔNG TIN TÀI KHOẢN</h2>
          <table className="info-tableNa2">
            <tbody>
              <tr>
                <td className="table-contentNa2"><label htmlFor="email">Email</label></td>
                <td> <input type="enail" id="email" name="email" value={formData.email} onChange={handleInputChange}></input></td>
              </tr>
              <tr>
                <td className="table-contentNa2"><label htmlFor="phonenum">Số điện thoại</label></td>
                <td> <input type="tel" id="phonenum" name="phonenum" value={formData.phonenum} onChange={handleInputChange}></input></td>
              </tr>
              <tr>
                <td className="table-contentNa2"><label htmlFor="passw">Mật khẩu</label></td>
                <td>************</td>
              </tr>
              <tr>
                <td className="table-contentNa2"><label htmlFor="pagenum">Số trang còn lại</label></td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
          <div className="action">
            <button style={{ backgroundColor: "#76ADFF" }} onClick={ConfirmUpdate}>CẬP NHẬT</button>
            <button style={{ backgroundColor: "#EB4A4A" }} onClick={CancelUpdate}>HỦY</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default UpdateStudentInfo;
