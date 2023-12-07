import React, { useState } from 'react'
import './Xemmayin.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Xemmayin = () => {
  const handleRowClick = () => {
    // Your logic for handling row click
    window.location.href = '/main-page/printer-view/detail-printer';
  };
  const renderRows = () => {
    const data = [
      { t2: 'ABCD', t3: 'Canon', t4: '601H6'},
      { t2: 'ABCD', t3: 'Canon', t4: '601H6' },
      { t2: 'ABCD', t3: 'Canon', t4: '601H6' },
      { t2: 'ABCD', t3: 'Canon', t4: '601H6' },
      { t2: 'ABCD', t3: 'Canon', t4: '601H6' },
      { t2: 'ABCD', t3: 'Canon', t4: '601H6' },
      { t2: 'ABCD', t3: 'Canon', t4: '601H6' },
      { t2: 'ABCD', t3: 'Canon', t4: '601H6' },
      // Add other data rows as needed
    ];

    return data.map((row, index) => (
      <tr key={index} onClick={handleRowClick}>
        <td>{row.t2}</td>
        <td>{row.t3}</td>
        <td>{row.t4}</td>
      </tr>
    ));
  };
  return (
    <div className="list-printer">
      <Header />
      <div className="main-contentNaNaNa">
        <Menu />
        <div className="list-printerNA">
          <p id="p113">DANH SÁCH MÁY IN</p>
          <br></br>
          <div className="search-history-print">
            <div className="search-his-By">
              <p id="p2133">Mã máy in</p>
              <input type="text" id="id-printer" name="id-printer" placeholder='Nhập mã máy in'></input>
            </div>
            <div className="search-his-By">
              <p id="p2133">Thương hiệu</p>
              <input type="text" id="branch" name="branch" placeholder='Nhập thương hiệu'></input>
            </div>
            <div className="search-his-By">
              <p id="p2133">Địa điểm</p>
              <input type="text" id="place" name="place" placeholder='Nhập địa điểm'></input>
            </div>
          </div>
          <br></br> <br></br>
          <table className="info-tableNa113">
            <thead>
              <td className="table-contentNa123"><label htmlFor="t2">MÃ MÁY IN</label></td>
              <td className="table-contentNa123"><label htmlFor="t3">THƯƠNG HIỆU</label></td>
              <td className="table-contentNa123"><label htmlFor="t4">ĐỊA ĐIỂM</label></td>

            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
          <br></br><br></br><br></br>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Xemmayin
