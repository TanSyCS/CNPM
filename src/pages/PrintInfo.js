import React, { useState } from 'react'
import './PrintInfo.css'

import { Form, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js'

const PrintInfo = () => {
  return (
    <div className="PrintSchedule">
      <Header />
      <div className="main-content ">
        <Menu />
        <div className="PrintScheduleViewer" style={{ width: '100%' }}>
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
              MÃ IN:{' '}
            </div>
          </div>
          <div class="Container" style={{ width: 'auto', margin: 'center' }}>
            <div
              className="state"
              style={{
                textAlign: 'center',
                width: 'auto',
                height: '23px',
                padding: 'center',
                marginTop: '17px',
                color: 'black',
                fontSize: 18,
                fontFamily: 'EB Garamond',
                fontWeight: '700',
                wordWrap: 'break-word',
                marginBottom: '5px',
              }}
            >
              Trạng thái:{' '}
            </div>
            <div
              style={{
                display: 'inline-block',
                width: '100%',

                alignItems: 'center',
                margin: 'auto',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <table
                style={{
                  height: '473px',
                  width: '622px',
                  textAlign: 'center',
                  border: '1px solid #76adff',
                  background: 'white',

                  margin: 'auto',
                  marginBottom: '23px',
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
                      Máy in
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
                      Địa chỉ
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
                      Tài liệu
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
                      Type
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
                      A3
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
                      Số mặt in
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
                      Số bản in
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default PrintInfo
