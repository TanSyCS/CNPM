import React, { useState } from 'react'
import './xemlichsuin.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Xemlichsu = () => {

  const handleRowClick = () => {
    // Your logic for handling row click
    window.location.href = '/main-page/info-view/detail-info-print';
  };

  const renderRows = () => {
    const data = [
      { code: '1234ABCD', time: 'Thứ 4, 28/09/2023, ca sáng', printer: 'ABCD', document: 'Capstone_Project_hk231_2023_v3' },
      { code: '1234ABCD', time: 'Thứ 4, 28/09/2023, ca sáng', printer: 'ABCD', document: 'Capstone_Project_hk231_2023_v3' },
      { code: '1234ABCD', time: 'Thứ 4, 28/09/2023, ca sáng', printer: 'ABCD', document: 'Capstone_Project_hk231_2023_v3' },
      // Add other data rows as needed
    ];

    return data.map((row, index) => (
      <tr key={index} onClick={handleRowClick}>
        <td>{row.code}</td>
        <td>{row.time}</td>
        <td>{row.printer}</td>
        <td>{row.document}</td>
      </tr>
    ));
  };
  return (
    <div className="history-print">
      <Header />
      <div className="main-contentNaNaNahis">
        <Menu />
        <div className="history-printNA">
          <p id="p1133">XEM LỊCH IN</p>
          <br></br>
          <div className="search-history-print">
            <div className="search-his-By">
              <p id="p2133">Thời gian</p>
              <input type="date" id="time-print" name="time-print" ></input>
            </div>
            <div className="search-his-By">
              <p id="p2133">Máy in</p>
              <input type="text" id="id-printer" name="id-printer" placeholder='Nhập mã máy in'></input>
            </div>
            <div className="search-his-By">
              <p id="p2133">Tài liệu</p>
              <input type="text" id="name-printfile" name="name-printfile" placeholder='Nhập tên tài liệu'></input>
            </div>
          </div>
          <br></br>
          <p id="p2133">Lịch đặt in</p>
          <table className="info-tableNa1133">
            <thead href="info-view/detail-info-print">
              <td className="table-contentNa1233"><label htmlFor="t2">MÃ IN</label></td>
              <td className="table-contentNa1233"><label htmlFor="t3">THỜI GIAN</label></td>
              <td className="table-contentNa1233"><label htmlFor="t4">MÁY IN</label></td>
              <td className="table-contentNa1233"><label htmlFor="t5">TÀI LIỆU</label></td>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
          <br></br>
          <p id="p2133">Lịch sử in ấn</p>
          <table className="info-tableNa1133">
            <thead>
              <td className="table-contentNa1233"><label htmlFor="t2">MÃ IN</label></td>
              <td className="table-contentNa1233"><label htmlFor="t3">THỜI GIAN</label></td>
              <td className="table-contentNa1233"><label htmlFor="t4">MÁY IN</label></td>
              <td className="table-contentNa1233"><label htmlFor="t5">TÀI LIỆU</label></td>

            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
          <br></br>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Xemlichsu
