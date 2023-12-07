import React, { useState } from 'react'
import './HistoryPurchPage.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'



const HistoryPurchPage = () => {
  const handleRowClick = () => {
    // Your logic for handling row click
    window.location.href = '/main-page/history-purch-page/detail-info-buypage';
  };

  const renderRows = () => {
    const data = [
      { code: 'ABCD1234', time: '01/01/2022', printer: '20', document: '20000' },
      { code: 'ABCD1200', time: '01/01/2022', printer: '12', document: '12000' },
      { code: 'ABCD1209', time: '01/01/2022', printer: '10', document: '10000' },
      { code: 'ABCD1209', time: '01/01/2022', printer: '10', document: '10000' },
      { code: 'ABCD1209', time: '01/01/2022', printer: '10', document: '10000' },
      { code: 'ABCD1209', time: '01/01/2022', printer: '10', document: '10000' },
      { code: 'ABCD1209', time: '01/01/2022', printer: '10', document: '10000' },
      { code: 'ABCD1209', time: '01/01/2022', printer: '10', document: '10000' },
      { code: 'ABCD1209', time: '01/01/2022', printer: '10', document: '10000' },
      { code: 'ABCD1209', time: '01/01/2022', printer: '10', document: '10000' },
      { code: 'ABCD1209', time: '01/01/2022', printer: '10', document: '10000' },
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
    <div className="history-bpage">
      <Header />
      <div className="main-contentNaNaNahis">
        <Menu />
        <div className="history-printNA">
          <p id="p1133">LỊCH SỬ MUA TRANG</p>
          <br></br>
          <div className="search-history-print">
            <div className="search-his-By">
              <p id="p2133">Thời gian</p>
              <input type="date" id="time-print" name="time-print" ></input>
            </div>
            <div className="search-his-By">
              <p id="p2133">Mã đơn</p>
              <input type="text" id="id-printer" name="id-printer" placeholder='Nhập mã đơn'></input>
            </div>
            <div className="search-his-By">
              <p id="p2133">Số lượng trang</p>
              <input type="number" id="number-page" name="number-page" placeholder='Nhập số lượng trang'></input>
            </div>
          </div>
          <br></br><br></br>
          <table className="info-tableNa1133">
            <thead href="info-view/detail-info-print">
              <td className="table-contentNa1233"><label htmlFor="t2">MÃ ĐƠN</label></td>
              <td className="table-contentNa1233"><label htmlFor="t3">THỜI GIAN</label></td>
              <td className="table-contentNa1233"><label htmlFor="t4">SỐ LƯỢNG TRANG A4</label></td>
              <td className="table-contentNa1233"><label htmlFor="t5">TỔNG TIỀN</label></td>
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
export default HistoryPurchPage
