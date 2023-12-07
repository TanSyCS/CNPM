import React, { useState } from 'react'
import './PrintInfo.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const PrintInfo = () => {
  return (
    <div className="print-info-detail">
      <Header />
      <div className="main-contentNaNaNadetail">
        <Menu />
        <div className="print-info-detailNa">
          <p id="p1134">XEM LỊCH IN</p>
          <p id="p2134">MÃ IN: 1234ABCD</p>
          <table className="info-tableNa1234">
            <tbody>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="name">Sinh viên</label></td>
                <td>Trần Nguyễn Nam Anh</td>
              </tr>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="id">Mã số sinh viên</label></td>
                <td>2110758</td>
              </tr>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="time">Thời gian</label></td>
                <td>Thứ 4, 28/09/2023, ca chiều</td>
              </tr>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="p-rinter">Máy in</label></td>
                <td>ABCD</td>
              </tr>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="addre">Địa chỉ</label></td>
                <td>H6-601</td>
              </tr>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="filee">Tài liệu</label></td>
                <td>Capstone_Project_hk231_2023_v3</td>
              </tr>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="t-file">Type</label></td>
                <td>.pdf</td>
              </tr>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="a3">A3</label></td>
                <td>0</td>
              </tr>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="a4">A4</label></td>
                <td>100</td>
              </tr>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="somatin">Số mặt in</label></td>
                <td>2</td>
              </tr>
              <tr>
                <td className="table-contentNa1234"><label htmlFor="sobanin">Số bản in</label></td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
          <br></br>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PrintInfo
