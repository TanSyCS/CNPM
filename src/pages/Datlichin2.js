import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

import Menu from '../components/Menu'

import './Datlichin2.css'
const Datlichin2 = () => {
    const ConfirmSetPrint = () => {
        alert("Xác nhận đặt lịch in?");
    };

    const CancelSetPrint = () => {
        alert("Hủy đặt lịch in?");
    };
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        // Handle the selected file as needed, you can store it in state or perform other actions
        console.log("Selected file:", selectedFile);
    };
    const addressOptions = ["Address 1", "Address 2", "Address 3"];
    const printerOptions = ["Printer 1", "Printer 2", "Printer 3"];
    const sizeOptions = ["A3", "A4"];
    return (

        <div className="PrintSchedule">
            <Header />
            <div className="main-contentBBA ">
                <Menu />
                <div className="PrintScheduleViewerBAB">
                    <p id="p111">ĐẶT LỊCH IN</p>
                    <p id="p211">Thông tin lịch in</p>
                    <table className="info-tableNa13">
                        <tbody>
                            <tr>
                                <td className="table-contentNa13"><label htmlFor="namesv">Sinh viên</label></td>
                                <td>Trần Nguyễn Nam Anh</td>
                            </tr>
                            <tr>
                                <td className="table-contentNa13"><label htmlFor="idsv">Mã số sinh viên</label></td>
                                <td>2110758</td>
                            </tr>
                            <tr>
                                <td className="table-contentNa13"><label htmlFor="khoa">Thời gian</label></td>
                                <td>Thứ 4, 29/11/2023, ca chiều</td>
                            </tr>
                            <tr>
                                <td className="table-contentNa13"><label htmlFor="upfile">Tải tài liệu</label></td>
                                <td><input type="file" id="upfile" name="upfile" onChange={handleFileChange} accept=".pdf, .doc, .docx" /></td>
                            </tr>
                            <tr>
                                <td className="table-contentNa13"><label htmlFor="addr">Địa điểm</label></td>
                                <td><select id="addr" name="addr">
                                    {addressOptions.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select></td>
                            </tr>
                            <tr>
                                <td className="table-contentNa13"><label htmlFor="printer">Máy in</label></td>
                                <td>
                                    <select id="printer" name="printer">
                                        {printerOptions.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-contentNa13"><label htmlFor="size">Kích thước trang</label></td>
                                <td>
                                    <select id="size" name="size">
                                        {sizeOptions.map((option) => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="table-contentNa13"><label htmlFor="numpage">Số lượng trang</label></td>
                                <td><input type="numpage" id="numpage" name="numpage"></input></td>
                            </tr>
                            <tr>
                                <td className="table-contentNa13"><label htmlFor="ful-semi">Số mặt in</label></td>
                                <td><input type="number" id="ful-semi" name="ful-semi"></input></td>
                            </tr>
                            <tr>
                                <td className="table-contentNa13"><label htmlFor="times">Số bản in</label></td>
                                <td><input type="number" id="times" name="times"></input></td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br><br></br>
                    <div className="action123">
                        <button style={{ backgroundColor: "#76ADFF" }} onClick={ConfirmSetPrint}>XÁC NHẬN</button>
                        <button style={{ backgroundColor: "#EB4A4A" }} onClick={CancelSetPrint}>HỦY</button>
                    </div>
                </div>


            </div>
            <Footer />
        </div>
    )
};
export default Datlichin2;