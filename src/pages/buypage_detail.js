import React, { useState } from 'react'
import './buypage_detail.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const BuyPageInfo = () => {
    return (
        <div className="bpage-info-detail">
            <Header />
            <div className="main-contentNaNaNadetail123">
                <Menu />
                <div className="bpage-info-detailNa">
                    <p id="p11345">ĐƠN MUA TRANG</p>
                    <p id="p21345">MÃ ĐƠN: ABCD1234</p>
                    <table className="info-tableNa12345">
                        <tbody>
                            <tr>
                                <td className="table-contentNa12345"><label htmlFor="name">Sinh viên</label></td>
                                <td>Trần Nguyễn Nam Anh</td>
                            </tr>
                            <tr>
                                <td className="table-contentNa12345"><label htmlFor="id">Mã số sinh viên</label></td>
                                <td>2110758</td>
                            </tr>
                            <tr>
                                <td className="table-contentNa12345"><label htmlFor="time">Thời gian</label></td>
                                <td>01/01/2022</td>
                            </tr>
                            <tr>
                                <td className="table-contentNa12345"><label htmlFor="numpageA4">A4</label></td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td className="table-contentNa12345"><label htmlFor="totalprice">Tổng tiền</label></td>
                                <td>20000</td>
                            </tr>
    
                        </tbody>
                    </table>
                    <br></br>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default BuyPageInfo
