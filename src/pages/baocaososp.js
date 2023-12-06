import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { Form, Col } from 'react-bootstrap'
import './baocaososp.css'
function Baocaososp()
{
        return (
                <div className="Baocaososp">
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
                                                                        <p1>BÁO CÁO</p1>
                                                                </p>
                                                                
                                                                <form action="http://www.example.org/search.php">
                                                                        <p>Tên sv:</p>
                                                                        <input type="search" name="search" />
                                                                        <input type="submit" value="Tìm kiếm" />
                                                                </form>
                                                                <siu>
                                                                <form action="http://www.example.org/search.php">
                                                                        <p>Mssv</p>
                                                                        <input type="search1" name="search1" />
                                                                        <input type="submit" value="Tìm kiếm" />
                                                                </form></siu>
                                                                <div class="Container" style={{ width: '971px' }}>
                                                                        <div className="Table">
                                                                                        <table>
                                                                                                <thead>
                                                                                                <tr>
                                                                                                        <th scope="col" class="col" style={{ width: '172px' }}>
                                                                                                        TÊN SV
                                                                                                        </th>
                                                                                                        <th scope="col" class="col" style={{ width: '279px' }}>
                                                                                                        TỔNG SỐ TRANG IN
                                                                                                        </th>
                                                                                                        <th scope="col" class="col" style={{ width: '172px' }}>
                                                                                                        SỐ TIỀN ĐÃ TRẢ
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
                        <Footer />
                </div>
        ) 
};
export default Baocaososp;