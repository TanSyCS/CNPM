import React, { useState } from 'react'
import './SPSO_Addprinter.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu_SPSO'

const SPSO_AddPrinter = () => {
    const ConfirmAdd = () => {
        alert("Xác nhận thêm máy in?");
    };

    const CancelAdd = () => {
        alert("Hủy thêm máy in?");
    };
    return (
        <div className="detail-printer">
            <Header />
            <div className="main-contentNaNaNaPrinter">
                <Menu />
                <div className="detail-printerNA">
                    <p id="p1130">THÔNG TIN MÁY IN</p>
                    <div className="info-printer-show">
                        <div className="printer-info-showSPSO">
                            <p id="p1131">Mã máy in</p>
                            <input type="text" id="id-printer" name="id-printer" value='NANA' readOnly></input>
                        </div>
                        <div className="printer-info-showSPSO">
                            <p id="p1131">Trường</p>
                            <input type="text" id="school" name="school" placeholder='Nhập trường' ></input>
                        </div>
                    </div>
                    <div className="info-printer-show">
                        <div className="printer-info-showSPSO">
                            <p id="p1131">Thương hiệu/Nhà sản xuất</p>
                            <input type="text" id="branch" name="branch" placeholder='Nhập branch' ></input>
                        </div>
                        <div className="printer-info-showSPSO">
                            <p id="p1131">Tòa</p>
                            <input type="text" id="builder" name="builder" placeholder='Nhập tòa' ></input>
                        </div>
                    </div>
                    <div className="info-printer-show">
                        <div className="printer-info-showSPSO">
                            <p id="p1131">Model</p>
                            <input type="text" id="model" name="model" placeholder='Nhập model' ></input>
                        </div>
                        <div className="printer-info-showSPSO">
                            <p id="p1131">Phòng</p>
                            <input type="text" id="room" name="room" placeholder='Nhập phòng' ></input>
                        </div>
                    </div>
                    <div className="info-printer-show2">
                        <div className="printer-info-showSPSO">
                            <p id="p1131">Mô tả</p>
                            <input type="text" id="room" name="room" placeholder='Nhập thêm mô tả' ></input>
                        </div>
                    </div>
                    <div className="action">
                        <button style={{ backgroundColor: "#76ADFF" }} onClick={ConfirmAdd}>XÁC NHẬN</button>
                        <button style={{ backgroundColor: "#EB4A4A" }} onClick={CancelAdd}>HỦY</button>
                    </div>
                    <br></br>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default SPSO_AddPrinter
