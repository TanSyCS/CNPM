import React, { useState } from 'react'
import './xemlichsuin.css'
import { Form, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Xemlichsu = () => {
  const handleChange = (e) => {
    // Your handling logic here
  }
  return (
    <div className="siu1">
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
              Lịch sử in ấn
            </p>
          </div>
          <div className="search ">
            <div class="row g-01"><form class="form1">
                <p>MSSV</p>
                <input type="search" name="search" placeholder="Nhập MSSV"/>
                <input type="submit" value="Tìm kiếm" />
            </form>
            <form class="form2">
                <p>Máy in</p>
                        <input type="search" name="search" placeholder="Nhập mã máy in"/>
                        <input type="submit" value="Tìm kiếm" />
            </form>
                <form class="form3">
                        <p>Địa điểm</p>
                        <input type="search" name="search" placeholder="dd/mm/yy"/>
                        <input type="submit" value="Tìm kiếm" />
                </form>
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
                  Lịch sử in ấn
                </div>

                <div className="Table">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col" class="col" style={{ width: '172px' }}>
                          Mã in
                        </th>
                        <th scope="col" class="col" style={{ width: '279px' }}>
                          Thời gian
                        </th>
                        <th scope="col" class="col" style={{ width: '172px' }}>
                          Máy in
                        </th>
                        <th scope="col" class="col" style={{ width: '172px' }}>
                          Tư liệu
                        </th>
                        <th
                          scope="col"
                          class="col"
                          style={{
                            width: '75px',
                            backgroundColor: 'rgb(255 255 255 / 0%)',
                          }}
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {{#each data}}
                                    <tr class="">

                                        <td >{{this.main}}</td>
                                        <td>{{this.mayin}}</td>
                                        <td>{{this.time}}</td>
                                        <td>{{this.tailieu}}</td>
                                        <td>
                                            <button onclick="deleteDish('{{this._id}}')"
                                                class="btn btn-sm btn-danger" style={{color: '#FF0000', fontSize: 18, fontFamily: 'EB Garamond', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>hủy</button>
                                        </td>

                                    </tr>
                                    {{/each}} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Xemlichsu
