import React, { useState } from 'react'
import './BuyPage.css'

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

          <div
            className="codeOrder"
            style={{
              width: '466px',
              height: '28px',
              background: '#76ADFF',
              margin: 'auto',
              marginTop: '40px',
            }}
          >
            <div
              className="codeOr"
              style={{
                width: '100%',
                height: '100%',
                textAlign: 'center',
                color: 'white',
                fontSize: 18,
                fontFamily: 'EB Garamond',
                fontWeight: '700',
                wordWrap: 'break-word',
              }}
            >
              MÃ ĐƠN HÀNG:{' '}
            </div>
          </div>

          <div style={{ margin: 'center', marginTop: '43px' }}>
            <table
              style={{
                height: '215px',
                width: '622px',
                margin: 'auto',
                textAlign: 'center',
                border: '1px solid #76adff',
                background: 'white',
              }}
            >
              <tbody>
                <tr>
                  <th
                    class="align-baseline"
                    style={{
                      width: '155px',

                      color: '#0346AA',
                      fontSize: 18,
                      fontFamily: 'EB Garamond',
                      fontWeight: '400',
                      wordWrap: 'break-word',
                    }}
                  >
                    Sinh viên
                  </th>
                  <td
                    class="align-baseline"
                    style={{
                      width: 'auto',

                      color: 'black',
                      fontSize: 18,
                      fontFamily: 'EB Garamond',
                      fontWeight: '400',
                      wordWrap: 'break-word',
                    }}
                  >
                    baseline
                  </td>
                </tr>{' '}
                <tr>
                  <th
                    class="align-baseline"
                    style={{
                      width: '155px',

                      color: '#0346AA',
                      fontSize: 18,
                      fontFamily: 'EB Garamond',
                      fontWeight: '400',
                      wordWrap: 'break-word',
                    }}
                  >
                    Mã số sinh viên
                  </th>
                  <td
                    class="align-baseline"
                    style={{
                      width: 'auto',

                      color: 'black',
                      fontSize: 18,
                      fontFamily: 'EB Garamond',
                      fontWeight: '400',
                      wordWrap: 'break-word',
                    }}
                  >
                    baseline
                  </td>
                </tr>{' '}
                <tr>
                  <th
                    class="align-baseline"
                    style={{
                      width: '155px',

                      color: '#0346AA',
                      fontSize: 18,
                      fontFamily: 'EB Garamond',
                      fontWeight: '400',
                      wordWrap: 'break-word',
                    }}
                  >
                    Thời gian
                  </th>
                  <td
                    class="align-baseline"
                    style={{
                      width: 'auto',

                      color: 'black',
                      fontSize: 18,
                      fontFamily: 'EB Garamond',
                      fontWeight: '400',
                      wordWrap: 'break-word',
                    }}
                  >
                    baseline
                  </td>
                </tr>{' '}
                <tr>
                  <th
                    class="align-baseline"
                    style={{
                      width: '155px',

                      color: '#0346AA',
                      fontSize: 18,
                      fontFamily: 'EB Garamond',
                      fontWeight: '400',
                      wordWrap: 'break-word',
                    }}
                  >
                    A4
                  </th>
                  <td
                    class="align-baseline"
                    style={{
                      width: 'auto',

                      color: 'black',
                      fontSize: 18,
                      fontFamily: 'EB Garamond',
                      fontWeight: '400',
                      wordWrap: 'break-word',
                    }}
                  >
                    <input
                      name="dserve"
                      type="text"
                      class="my-2 form-control"
                      placeholder="Nhập số lượng trang"
                      style={{
                        height: '24px',
                        width: '162px',
                        background: 'rgba(118.15, 172.89, 255, 0.5)',
                        margin: 'auto',
                      }}
                    />
                  </td>
                </tr>{' '}
                <tr>
                  <th
                    class="align-baseline"
                    style={{
                      width: '155px',

                      color: '#0346AA',
                      fontSize: 18,
                      fontFamily: 'EB Garamond',
                      fontWeight: '400',
                      wordWrap: 'break-word',
                    }}
                  >
                    Tổng tiền
                  </th>
                  <td
                    class="align-baseline"
                    style={{
                      width: 'auto',

                      color: 'black',
                      fontSize: 18,
                      fontFamily: 'EB Garamond',
                      fontWeight: '400',
                      wordWrap: 'break-word',
                    }}
                  >
                    baseline
                  </td>
                </tr>{' '}
              </tbody>
            </table>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '27px',
            }}
          >
            <button id="printButton" onclick="printInvoice()">
              In Hóa Đơn
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default HistoryPurchPage
