import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { Form, Col } from 'react-bootstrap'
import './Datlichin.css'
function Datlichin()
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
                                                                                fontSize: '48px',
                                                                                fontFamily: 'EB Garamond',
                                                                                fontWeight: '700',
                                                                                wordWrap: 'break-word',
                                                                                padding: '10px',
                                                                                textAlign: 'center',
                                                                                margin: 'auto',
                                                                               
                                                                        }}
                                                                > Đặt lịch in </p>
                                                        </div>
                                                                <table border="1" ceilpadding="8px" cellspacing="7px" align="center" bgcolor="lightblue">
                                                                        <tr bgcolor="lightgreen">
                                                                        <th rowspan="4">Table</th>
                                                                        <th>
                                                                                Ca
                                                                        </th>
                                                                        <th>
                                                                                Monday
                                                                        </th>
                                                                        <th>
                                                                                Tuesday
                                                                        </th>
                                                                        <th>
                                                                                Wednesday
                                                                        </th>
                                                                        <th>
                                                                                Thursday
                                                                        </th>
                                                                        <th>
                                                                                Friday
                                                                        </th>
                                                                        <th>
                                                                                Saturday
                                                                        </th>
                                                                        <th>
                                                                                Sunday
                                                                        </th>
                                                                </tr> 
                                                                <tr>
                                                                        <td>
                                                                        Ca 1    
                                                                        </td>
                                                                        <td>
                                                                        Sáng 7h-11h
                                                                        </td>
                                                                        <td>
                                                                        Sáng 7h-11h
                                                                        </td>
                                                                        <td>
                                                                        Sáng 7h-11h
                                                                        </td>
                                                                        <td>
                                                                        Sáng 7h-11h
                                                                        </td>
                                                                        <td>
                                                                        Sáng 7h-11h
                                                                        </td>
                                                                        <td>
                                                                        Sáng 7h-11h
                                                                        </td>
                                                                        <td>
                                                                        Sáng 7h-11h
                                                                        </td>
                                                                </tr>
                                                                <tr>
                                                                        <td>
                                                                                Ca 2
                                                                        </td>
                                                                        <td>
                                                                                Chiều 13h-16h
                                                                        </td>
                                                                        <td>
                                                                                Chiều 13h-16h
                                                                        </td>
                                                                        <td>
                                                                                Chiều 13h-16h
                                                                        </td>
                                                                        <td>
                                                                                Chiều 13h-16h
                                                                        </td>
                                                                        <td>
                                                                                Chiều 13h-16h
                                                                        </td>
                                                                        <td>
                                                                                Chiều 13h-16h
                                                                        </td>
                                                                        <td>
                                                                                Chiều 13h-16h
                                                                        </td>
                                                                </tr>
                                                                <tr>
                                                                        <td>Ca 3</td>
                                                                        <td>Tối 18h-20h</td>
                                                                        <td>Tối 18h-20h</td>
                                                                        <td>Tối 18h-20h</td>
                                                                        <td>Tối 18h-20h</td>
                                                                        <td>Tối 18h-20h</td>
                                                                        <td>Tối 18h-20h</td>
                                                                        <td>Tối 18h-20h</td>
                                                                </tr>
                                                                </table>
                                                                <div className="Date" align="center">
                                                                        <form>
                                                                                Chọn ngày<br />
                                                                                
                                                                                <div class="search-container">
                                                                                        <input placeholder="dd/mm/yyy"></input>
                                                                                        <i class="fas fa-search search-icon"></i><br/>
                                                                                        </div>
                                                                                        <a href="http://www.imdb.com">TIẾP THEO</a>
                                                                        </form>
                                                                </div>
                                </div>
                        </div>
                        <Footer />
                </div>
        ) 
};
export default Datlichin;