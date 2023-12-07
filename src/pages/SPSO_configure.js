import React, { useState } from 'react';
import './SPSO_configure.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu_SPSO';

const StudentInfo = () => {
    const initialInfo = {
        numPages: 200,
        timetable: '1 học kỳ',
        acceptableTypes: '.docx .pdf .jpg .xls .ppt',
        acceptableSize: '100MB',
    };

    const [info, setInfo] = useState(initialInfo);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleToggleChangePass = () => {
        if (isEditMode) {
            const confirmSave = window.confirm('Bạn có muốn lưu thay đổi không?');

            if (confirmSave) {
                // Perform save logic or API call here
                setIsEditMode(false);
                alert('Thay đổi đã được lưu!');
            }
        } else {
            setIsEditMode(true);
        }
    };

    const handleChange = (field, value) => {
        setInfo((prevInfo) => ({
            ...prevInfo,
            [field]: value,
        }));
    };

    const renderEditField = (field) => {
        return (
            <input
                type="text"
                value={info[field]}
                onChange={(e) => handleChange(field, e.target.value)}
            />
        );
    };

    return (
        <div className="SPSO-managesystem">
            <Header />
            <div className="SPSOmain-contentNa">
                <Menu />
                <div className="SPSOcontentNa">
                    <p id="p1130SPSO">QUẢN LÝ CẤU HÌNH</p>
                    <h2>THÔNG TIN CỦA HỆ THỐNG HCMUT_SSPS</h2>
                    <table className="info-tableNa">
                        <tbody>
                            <tr>
                                <td className="table-contentNaspso"><label htmlFor="providenumpage">Số lượng trang cung cấp</label></td>
                                <td>{isEditMode ? renderEditField('numPages') : info.numPages}</td>
                            </tr>
                            <tr>
                                <td className="table-contentNaspso"><label htmlFor="timetableprovide">Thời gian định kỳ cung cấp</label></td>
                                <td>{isEditMode ? renderEditField('timetable') : info.timetable}</td>
                            </tr>
                            <tr>
                                <td className="table-contentNaspso"><label htmlFor="acceptabletype">Loại tệp chấp nhận</label></td>
                                <td>{isEditMode ? renderEditField('acceptableTypes') : info.acceptableTypes}</td>
                            </tr>
                            <tr>
                                <td className="table-contentNaspso"><label htmlFor="acceptablesize">Kích thước tệp cháp nhận</label></td>
                                <td>{isEditMode ? renderEditField('acceptableSize') : info.acceptableSize}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br></br>
                    <div className="action11spso">
                        <a onClick={handleToggleChangePass}>
                            {isEditMode ? 'LƯU' : 'CHỈNH SỬA'}
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StudentInfo;
