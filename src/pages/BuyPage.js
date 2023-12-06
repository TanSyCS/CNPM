import React, { useState } from 'react'
import './BuyPage.css'

import { Form, Col } from 'react-bootstrap'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'


const HistoryPurchPage = () => {
  const ConfirmBuy = () => {
    alert("Xác nhận thanh toán?");
  };

  const CancelBuy = () => {
    alert("Hủy thanh toán?");
  };
  return (
    <div className="PrintSchedule">
      <Header />
      <div className="main-contentAA">
        <Menu />
        <div className="PrintScheduleViewerA">
          <p id="p1">MUA TRANG IN</p>
          <p id="p2">Thông tin đơn hàng</p>
          <table className="info-tableNa1">
            <tbody>
              <tr>
                <td className="table-contentNa1"><label htmlFor="name">Sinh viên</label></td>
                <td>Trần Nguyễn Nam Anh</td>
              </tr>
              <tr>
                <td className="table-contentNa1"><label htmlFor="id">Mã số sinh viên</label></td>
                <td>2110758</td>
              </tr>
              <tr>
                <td className="table-contentNa1"><label htmlFor="day">Thời gian</label></td>
                <td>01/12/2023</td>
              </tr>
              <tr>
                <td className="table-contentNa1"><label htmlFor="numpag">A4</label></td>
                <td><input type="number" id="numpag" name="numpag" ></input></td>
              </tr>
              <tr>
                <td className="table-contentNa1"><label htmlFor="total">Tổng tiền</label></td>
                <td>400000</td>
              </tr>
            </tbody>
          </table>
          <div className="actionA">
            <button style={{ backgroundColor: "#76ADFF" }} onClick={ConfirmBuy}>THANH TOÁN</button>
            <button style={{ backgroundColor: "#EB4A4A" }} onClick={CancelBuy}>HỦY</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default HistoryPurchPage
