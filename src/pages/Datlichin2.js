import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { Form, Col } from 'react-bootstrap'
import './Datlichin2.css'
function Datlichin2()
{
        return (
                
                <div className="PrintSchedule">

                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"/>

                        <Header />
                        <div className="main-content ">
                                <Menu />
                                <div className="PrintScheduleViewer">
                                                                <div className="content">
                                                                    <p
                                                                        style={{
                                                                                backgroundColor: '#white',
                                                                                color: '#0346AA',
                                                                                fontSize: '68px',
                                                                                fontFamily: 'EB Garamond',
                                                                                fontWeight: '700',
                                                                                wordWrap: 'break-word',
                                                                                padding: '10px',
                                                                                textAlign: 'center',
                                                                                margin: 'auto',
                                                                               
                                                                        }}
                                                                    > Đặt lịch in </p>
                                                                    <p
                                                                        style={{
                                                                                backgroundColor: '#white',
                                                                                color: '#0346AA',
                                                                                fontSize: '18px',
                                                                                fontFamily: 'EB Garamond',
                                                                                fontWeight: '700',
                                                                                wordWrap: 'break-word',
                                                                                padding: '20px',
                                                                                textAlign: 'center',
                                                                                margin: 'auto',
                                                                               
                                                                        }}
                                                                    >Thông tin lịch in</p>
                                                                </div>
                                                                <div className="siu">
                                                                    <table border="1" ceilpadding="8px" cellspacing="7px" align="center" bgcolor="lightblue">
                                                                    <tr bgcolor="lightgreen">
                                                                            <th>
                                                                                Sinh Viên
                                                                            </th>
                                                                            <th>
                                                                                Trần Nguyễn Nam Anh
                                                                            </th>
                                                                    </tr> 
                                                                        <tr>
                                                                                <th>
                                                                                    Mã số sinh viên 
                                                                                </th>
                                                                                <th>
                                                                                        2110758
                                                                                </th>
                                                                        </tr>
                                                                    <tr>
                                                                            <th>
                                                                                Thời gian
                                                                            </th>
                                                                            <th>
                                                                                Thứ 4 (29/11/2023), ca chiều
                                                                            </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>
                                                                            Tải tài liệu
                                                                        </th>
                                                                        <th>
                                                                            <label for="file">File</label>
                                                                            <input id="file" type="file" name="file"></input>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                            <th>
                                                                                Địa điểm
                                                                            </th>
                                                                            <th>
                                                                                <input type="text" name="name" id="name" placeholder="Địa điểm" required></input>
                                                                            </th>
                                                                        </tr>
                                                                    <tr>
                                                                        <th>
                                                                            Máy in
                                                                        </th>
                                                                        <th>
                                                                            <input type="text" name="name" id="name" placeholder="Mã máy in" required></input>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>
                                                                            Kích thước trang
                                                                        </th>
                                                                        <th>
                                                                        <select name="size" id="size" multiple>
                                                                            <option value="Large">Green</option>
                                                                            <option value="Medium">Red</option>
                                                                            <option value="Small">Red</option>
                                                                        </select>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>
                                                                            Số lượng trang
                                                                        </th>
                                                                        <th>
                                                                               <label for="age"></label>
                                            `                                  <input type="number" name="age" id="age" min="1" max="200" step="2" placeholder="Nhập số lượng trang" ></input>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>
                                                                            Số mặt in
                                                                        </th>
                                                                        <th>
                                                                        <div>
                                                                    <label for="male">1</label>
                                                                    <input type="radio" name="gender" id="one" value="one"></input>
                                                                </div>
                                                                <div>
                                                                    <label for="female">2</label>
                                                                    <input type="radio" name="gender" id="two" value="two"></input>
                                                                </div>
                                                                        </th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>
                                                                            Số bản in
                                                                        </th>
                                                                        <th>
                                                                               <label for="age"></label>
                                            `                                  <input type="number" name="age" id="age" min="1" max="200" step="2" placeholder="Nhập số lượng trang" ></input>
                                                                        </th>
                                                                    </tr>
                                                                    
                                                                    
                                                                    </table>
                                                                </div>
                                                        <div className="but">        
                                                                <button class="custom-button">Đặt lịch in</button>
                                                                <button class="custom-button">Hủy</button>
                                                        </div>
                                                        <div className="move">
                                                            <a href="http://www.imdb.com">TIẾP THEO</a>
                                                        </div>

                                                        

                                </div>
                        </div>
                        <Footer />
                </div>
        ) 
};
export default Datlichin2;