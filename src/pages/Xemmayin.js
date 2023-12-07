import React, { useState } from 'react'
import './Xemmayin.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Xemmayin = () => {
  const handleChange = (e) => {
    // Your handling logic here
  }
  return (
    <div className="list-printer">
      <Header />
      <div className="main-contentNaNaNa">
        <Menu />
        <div className="list-printerNA">
          <p id="p113">DANH SÁCH MÁY IN</p>
          <p id="p213">Danh sách máy in</p>
          <table className="info-tableNa113">
            <thead>
              <td className="table-contentNa123"><label htmlFor="t2">Mã máy in</label></td>
              <td className="table-contentNa123"><label htmlFor="t3">Thương hiệu</label></td>
              <td className="table-contentNa123"><label htmlFor="t4">Địa điểm</label></td>

            </thead>
            <tbody>
              <tr>
                <td>ABCDE</td>
                <td>ABCDK</td>
                <td>ABCDF</td>
              </tr>
              <tr>
                <td>Canon</td>
                <td>Canon</td>
                <td>Canon</td>
              </tr>
              <tr>
                <td>H6-601</td>
                <td>H2-601</td>
                <td>H3-601</td>
              </tr>
            </tbody>
          </table>
          <br></br><br></br><br></br>
          <p id="p21">Tìm kiếm</p>
          <div className="actionNNAA">
            <input type="text" id="s-printer" name="s-printer" placeholder='Nhập mã máy in'></input>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Xemmayin
