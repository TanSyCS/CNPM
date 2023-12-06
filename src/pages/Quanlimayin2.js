import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { Form, Col } from 'react-bootstrap'
import './Quanlimayin2.css'
function Quanlimayin2()
{
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
                                                                        <p1>Quan li may in</p1>
                                                                </p>
                                                                <p
                                                                        style={{
                                                                        backgroundColor: '#white',
                                                                        color: '#0346AA',
                                                                        fontSize: '30px',
                                                                        fontFamily: 'EB Garamond',
                                                                        fontWeight: '700',
                                                                        wordWrap: 'break-word',
                                                                        padding: '10px',
                                                                        textAlign: 'center',
                                                                        margin: 'auto',
                                                                        }}
                                                                        >
                                                                        <p1>Thêm máy in</p1>
                                                                </p>
                                                        </div>
                                                        <div className="content2">
                                                                <p3>
                                                                                <form class="form1">
                                                                                <label for="name1">Mã máy in</label>
                                                                                <input type="text" id="name1" name="name1" placeholder="Nhập mã máy in"></input>
                                                                                </form>

                                                                                <form class="form2">
                                                                                <label for="name2">Trường</label>
                                                                                <input type="text" id="name2" name="name2" placeholder="Nhập tên trường"></input>
                                                                                </form>

                                                                                <form class="form3">
                                                                                <label for="name3">Tòa</label>
                                                                                <input type="text" id="name3" name="name3" placeholder="Nhập tên tòa"></input>
                                                                                </form>
                                                                                <form class="form4">
                                                                                <label for="name4">Thương hiệu/ Nhà sản xuất</label>
                                                                                <input type="text" id="name4" name="name4" placeholder="Nhập tên thương hiệu"></input>
                                                                                </form>
                                                                                <form class="form5">
                                                                                <label for="name5">Model</label>
                                                                                <input type="text" id="name5" name="name5" placeholder="Nhập tên Model"></input>
                                                                                </form>
                                                                                <form class="form6">
                                                                                <label for="name6">Phòng</label>
                                                                                <input type="text" id="name3" name="name6" placeholder="Nhập tên phòng"></input>
                                                                                </form>
                                                                                <form class="form7">
                                                                                        <label for="Bio" >Nhập mô tả</label>
                                                                                                <textarea id="bio" name="bio" placeholder="Nhập mô tả">
                                                                                                
                                                                                                </textarea>
                                                                                </form>
                                                                                
                                                                </p3>
                                                        </div>
                                                        <div className="but">        
                                                                <button class="custom-button">Xác nhận</button>
                                                                <button class="custom-button">Hủy</button>
                                                        </div>
                                                </div>
                                </div>
                        <Footer />
                </div>
        ) 
};
export default Quanlimayin2;