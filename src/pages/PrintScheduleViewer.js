import React, { useState } from 'react'
import './PrintScheduleViewer.css'

import { Form, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js'

const PrintScheduleViewer = () => {
  const handleChange = (e) => {
    // Your handling logic here
  }
  return (
    <div className="PrintSchedule">
      <Header />
      <div className="main-content ">
        <Menu />
        <div className="PrintScheduleViewer">
          <div className="content">
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
              XEM LỊCH IN
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
              <div className="col-md-4" style={{ width: '291px' }}>
                <p className="printer">Máy in</p>
                <input
                  name="dserve"
                  type="text"
                  style={{
                    borderRadius: '50px',
                    background: 'rgba(118.15, 172.89, 255, 0.5)',
                  }}
                  className="my-2 form-control"
                  placeholder="Nhập mã máy in"
                />
              </div>
              <div className="col-md-4" style={{ width: '291px' }}>
                <p className="document">Tài liệu</p>
                <input
                  name="dserve"
                  type="text"
                  style={{
                    borderRadius: '50px',
                    background: 'rgba(118.15, 172.89, 255, 0.5)',
                  }}
                  className="my-2 form-control"
                  placeholder="Nhập tên tài liệu"
                />
              </div>
              <div class="Container" style={{ width: '971px' }}>
                <div
                  className="schedule"
                  style={{
                    color: '#0346AA',
                    fontSize: 18,
                    fontFamily: 'EB Garamond',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                    paddingTop: '26px',
                  }}
                >
                  Lịch đặt in
                </div>

                <div className="Table" >
                  <table>
                    <thead>
                      <tr>
                        <th scope="col" class="col" style={{ width: '172px' }}>
                          MÃ IN
                        </th>
                        <th scope="col" class="col" style={{ width: '279px' }}>
                          MÁY IN
                        </th>
                        <th scope="col" class="col" style={{ width: '172px' }}>
                          THỜI GIAN
                        </th>
                        <th scope="col" class="col" style={{ width: '325px' }}>
                          TÀI LIỆU
                        </th>
                        <th
                          scope="col"
                          class="col"
                          style={{
                            width: '75px'

                          }}
                        >Hủy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>D1235655</td>
                        <td>May12-114H6</td>
                        <td>2023-01-01, ca chiều</td>
                        <td>Capstone_Project_hk231_2023_v3</td>
                        <td>✖ </td>
                      </tr>

                      <tr>
                        <td>D1112433</td>
                        <td>May11-213H2</td>
                        <td>2023-01-01, ca chiều</td>
                        <td>01_Ch1 Introduction_2023</td>
                        <td>✖</td>
                      </tr>
                      <tr>
                        <td>D1112433</td>
                        <td>May1-203H2</td>
                        <td>2023-01-01, ca chiều</td>
                        <td>02_Ch2 Software Processes_2023</td>
                        <td>✖</td>
                      </tr>
                      <tr>
                        <td>D1112433</td>
                        <td>May1-203H2</td>
                        <td>2023-01-01, ca chiều</td>
                        <td>03_Ch3_4 Requirements Engineering_2023</td>
                        <td>✖</td>
                      </tr>
                      <tr>
                        <td>D1112433</td>
                        <td>May8-211H2</td>
                        <td>2023-01-01, ca chiều</td>
                        <td>05_Ch5_Introduction_OOP_2023</td>
                        <td>✖</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div
                  className="history"
                  style={{
                    color: '#0346AA',
                    fontSize: 18,
                    fontFamily: 'EB Garamond',
                    fontWeight: '700',
                    wordWrap: 'break-word',
                    paddingTop: '26px',
                  }}
                >
                  Lịch sử in ấn
                </div>
                <div className="Table" style={{ margin: 'center', marginBottom: '15px' }}>
                  <table>
                    <thead>
                      <tr>
                        <th scope="col" class="col" style={{ width: '172px' }}>
                          MÃ IN
                        </th>
                        <th scope="col" class="col" style={{ width: '279px' }}>
                          MÁY IN
                        </th>
                        <th scope="col" class="col" style={{ width: '172px' }}>
                          THỜI GIAN
                        </th>
                        <th scope="col" class="col" style={{ width: '325px' }}>
                          TÀI LIỆU
                        </th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>D1235655</td>
                        <td>May12-114H6</td>
                        <td>2023-01-01, ca chiều</td>
                        <td>Capstone_Project_hk231_2023_v3</td>

                      </tr>

                      <tr>
                        <td>D1112433</td>
                        <td>May11-213H2</td>
                        <td>2023-01-01, ca chiều</td>
                        <td>01_Ch1 Introduction_2023</td>

                      </tr>
                      <tr>
                        <td>D1112433</td>
                        <td>May1-203H2</td>
                        <td>2023-01-01, ca chiều</td>
                        <td>02_Ch2 Software Processes_2023</td>

                      </tr>
                      <tr>
                        <td>D1112433</td>
                        <td>May2-212H1</td>
                        <td>2023-01-01, ca chiều</td>
                        <td>03_Ch3_4 Requirements Engineering_2023</td>

                      </tr>
                      <tr>
                        <td>D1112433</td>
                        <td>May8-211H2</td>
                        <td>2023-01-01, ca chiều</td>
                        <td>05_Ch5_Introduction_OOP_2023</td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}
export default PrintScheduleViewer
