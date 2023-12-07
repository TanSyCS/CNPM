import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { Form, Col } from 'react-bootstrap'
import './Datlichin.css'
const Datlichin =() => {
        return (
                <div className="print-process">
                        <Header />
                        <div className="main-contentNaNa">
                                <Menu />
                                <div className="PrintScheduleViewerNA">
                                        <p id="p11">ĐẶT LỊCH IN</p>
                                        <p id="p21">Thời gian biểu làm việc</p>
                                        <table className="info-tableNa1">
                                                <thead>
                                                        <td className="table-contentNa12"><label htmlFor="t2">Thứ hai</label></td>
                                                        <td className="table-contentNa12"><label htmlFor="t3">Thứ ba</label></td>
                                                        <td className="table-contentNa12"><label htmlFor="t4">Thứ tư</label></td>
                                                        <td className="table-contentNa12"><label htmlFor="t5">Thứ năm</label></td>
                                                        <td className="table-contentNa12"><label htmlFor="t6">Thứ sáu</label></td>
                                                        <td className="table-contentNa12"><label htmlFor="t6">Thứ bảy</label></td>
                                                        <td className="table-contentNa12"><label htmlFor="t6">Chủ nhật</label></td>
                                                </thead>
                                                <tbody>
                                                        <tr>
                                                                <td>Sáng: 7h-11h</td>
                                                                <td>Sáng: 7h-11h</td>
                                                                <td>Sáng: 7h-11h</td>
                                                                <td>Sáng: 7h-11h</td>
                                                                <td>Sáng: 7h-11h</td>
                                                                <td>Sáng: 7h-11h</td>
                                                                <td>Sáng: 7h-11h</td>
                                                        </tr>
                                                        <tr>
                                                                <td>Chiều: 13h-16h</td>
                                                                <td>Chiều: 13h-16h</td>
                                                                <td>Chiều: 13h-16h</td>
                                                                <td>Chiều: 13h-16h</td>
                                                                <td>Chiều: 13h-16h</td>
                                                                <td>Chiều: 13h-16h</td>
                                                                <td>Chiều: 13h-16h</td>
                                                        </tr>
                                                        <tr>
                                                                <td>Tối: 18h-20h</td>
                                                                <td>Tối: 18h-20h</td>
                                                                <td>Tối: 18h-20h</td>
                                                                <td>Tối: 18h-20h</td>
                                                                <td>Tối: 18h-20h</td>
                                                                <td>Tối: 18h-20h</td>
                                                                <td>Tối: 18h-20h</td>
                                                        </tr>
                                                </tbody>
                                        </table>
                                        <br></br><br></br><br></br>
                                        <p id="p21">Chọn ngày</p>
                                        <div className="actionNNA">
                                                <input type="date" id="dateprint" name="dateprint"></input>
                                                <a href="scheduler-order2">TIẾP THEO</a>
                                        </div>
                                </div>
                        </div>
                        <Footer />
                </div>     
                
); 
};
export default Datlichin;