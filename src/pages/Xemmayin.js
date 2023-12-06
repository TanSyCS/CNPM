import React, { useState } from 'react'
import './PrintScheduleViewer.css'

import { Form, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const Xemmayin = () => {
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
              DANH SÁCH MÁY IN
            </p>
            
          </div>
          <div className="search ">
            <div class="row g-01"><form class="form1">
                <p>Mã máy in</p>
                <input type="search" name="search" placeholder="Nhập mã máy in"/>
                <input type="submit" value="Tìm kiếm" />
            </form>
            <form class="form2">
                <p>Thương hiệu</p>
                        <input type="search" name="search" placeholder="Nhập thương hiệu"/>
                        <input type="submit" value="Tìm kiếm" />
            </form>
                <form class="form3">
                        <p>Địa điểm</p>
                        <input type="search" name="search" placeholder="Nhập địa điểm"/>
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
                 Danh sách máy in
                </div>

                <div className="Table">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col" class="col" style={{ width: '172px' }}>
                          Mã máy in
                        </th>
                        <th scope="col" class="col" style={{ width: '279px' }}>
                          Thương hiệu
                        </th>
                        <th scope="col" class="col" style={{ width: '172px' }}>
                          Địa điểm
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
export default Xemmayin
