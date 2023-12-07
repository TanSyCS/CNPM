import React, { useState } from 'react'
import './PrinterInfo.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu_SPSO'

const PrinterInfo = () => {
    return (
        <div className="detail-printer">
            <Header />
            <div className="main-contentNaNaNaPrinter">
                <Menu />
                <div className="detail-printerNA">
                    <p id="p1130">THÔNG TIN MÁY IN</p>
                    <div className="info-printer-show">
                        <div className="printer-info-show">
                            <p id="p1131">Mã máy in</p>
                            <input type="text" id="id-printer" name="id-printer" value='ABCD' readOnly></input>
                        </div>
                        <div className="printer-info-show">
                            <p id="p1131">Trường</p>
                            <input type="text" id="school" name="school" value='Đại học Bách Khoa TPHCM' readOnly></input>
                        </div>
                    </div>
                    <div className="info-printer-show">
                        <div className="printer-info-show">
                            <p id="p1131">Thương hiệu/Nhà sản xuất</p>
                            <input type="text" id="branch" name="branch" value='Canon' readOnly></input>
                        </div>
                        <div className="printer-info-show">
                            <p id="p1131">Tòa</p>
                            <input type="text" id="builder" name="builder" value='H6' readOnly></input>
                        </div>
                    </div>
                    <div className="info-printer-show">
                        <div className="printer-info-show">
                            <p id="p1131">Model</p>
                            <input type="text" id="model" name="model" value='Automatic Document Feeder' readOnly></input>
                        </div>
                        <div className="printer-info-show">
                            <p id="p1131">Phòng</p>
                            <input type="text" id="room" name="room" value='601' readOnly></input>
                        </div>
                    </div>
                    <div className="info-printer-show2">
                        <div className="printer-info-show">
                            <p id="p1131">Mô tả</p>
                            <input type="text" id="room" name="room" value='Máy in đang hoạt động' readOnly></input>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PrinterInfo
