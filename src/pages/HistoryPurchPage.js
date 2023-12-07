import React, { useState } from 'react'
import './HistoryPurchPage.css'

import { Form, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js'

const HistoryPurchPage = () => {
  const handleChange = (e) => {
    // Your handling logic here
  }
  return (
    <div className="PrintSchedule">
      <Header />
      <div className="main-content ">
        <Menu />
        <div className="PrintScheduleViewer">
          <div className="content" style={{ display: 'block' }}>
            <p
              style={{
                backgroundColor: '#white',
                color: '#0346AA',
                fontSize: '48px',
                fontFamily: 'EB Garamond',
                fontWeight: '700',
                wordWrap: 'break-word',
                padding: '10px',
                textAlign: 'center',
                margin: 'auto',
              }}
            >
              LỊCH SỬ MUA TRANG
            </p>
          </div>
          <div className="search ">
            <div class="row g-0">
              <div className="col-md-4" style={{ width: '291px' }}>
                <p className="time">Thời gian</p>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Control
                    type="date"
                    placeholder="DateRange"
                    name="bdate"
                    style={{
                      borderRadius: '50px',
                      background: 'rgba(118.15, 172.89, 255, 0.5)',
                    }}
                    className="my-2 form-control"
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div class="col-md-4" style={{ width: '291px' }}>
                <p class="code">Mã đơn</p>
                <input
                  name="dserve"
                  type="text"
                  style={{
                    borderRadius: '50px',
                    background: 'rgba(118.15, 172.89, 255, 0.5)',
                  }}
                  class="my-2 form-control"
                  placeholder="Nhập mã đơn hàng"
                />
              </div>
              <div class="col-md-4" style={{ width: '291px' }}>
                <p class="numPage">Số lượng trang</p>
                <input
                  name="dserve"
                  type="text"
                  style={{
                    borderRadius: '50px',
                    background: 'rgba(118.15, 172.89, 255, 0.5)',
                  }}
                  class="my-2 form-control"
                  placeholder="Quy ra hết A4"
                />
              </div>
            </div>{' '}
          </div>{' '}
          <div className="Table" style={{ marginTop: '46px', marginBottom: '15px' }}>
            <table>
              <thead>
                <tr>
                  <th scope="col" class="col" style={{ width: '172px' }}>
                    MÃ ĐƠN
                  </th>
                  <th scope="col" class="col" style={{ width: '258px' }}>
                    THỜI GIAN
                  </th>
                  <th scope="col" class="col" style={{ width: '258px' }}>
                    SỐ LƯỢNG TRANG (A4)
                  </th>
                  <th scope="col" class="col" style={{ width: '258px' }}>
                    TỔNG TIỀN
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>D001</td>
                  <td>2023-01-01</td>
                  <td>10</td>
                  <td>10.000VND</td>
                </tr>
                <tr>
                  <td>D002</td>
                  <td>2023-01-02</td>
                  <td>15</td>
                  <td>15.000VND</td>
                </tr>
                <tr>
                  <td>D003</td>
                  <td>2023-01-03</td>
                  <td>12</td>
                  <td>12.000VND</td>
                </tr>
                <tr>
                  <td>D004</td>
                  <td>2023-01-03</td>
                  <td>15</td>
                  <td>15.000VND</td>
                </tr>
                <tr>
                  <td>D005</td>
                  <td>2023-01-04</td>
                  <td>19</td>
                  <td>19.000VND</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default HistoryPurchPage
