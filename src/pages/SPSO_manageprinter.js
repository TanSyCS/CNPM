import React, { useState } from 'react'
import './SPSO_manageprinter.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu_SPSO'

const SPSO_Xemmayin = () => {
    const EnterPrinterID = () => {
        const printerID = window.prompt("Nhập mã máy in:");

        if (printerID !== null) {
            const confirmMessage = `Xác nhận thực hiện với mã máy in: ${printerID}`;
            const userConfirmation = window.confirm(confirmMessage);

            if (userConfirmation) {
                // Perform your action here, such as deleting or deactivating the printer
                // You can use the printerID variable to identify the selected printer
                alert(`Đã xác nhận thực hiện với mã máy in: ${printerID}`);
            } else {
                alert("Hủy thao tác");
            }
        }
    };

    const handleRowClick = () => {
        // Your logic for handling row click
        window.location.href = '/main-page/SPSO-manageprinter/SPSO-detail-printer';
    };
    const renderRows = () => {
        const data = [
            { t2: 'ABCD', t3: 'Canon', t4: '601H6', t5: 'Đang bị vô hiệu hóa' },
            { t2: 'ABCD', t3: 'Canon', t4: '601H6', t5: 'Đang hoạt động' },
            { t2: 'ABCD', t3: 'Canon', t4: '601H6', t5: 'Đang hoạt động' },
            { t2: 'ABCD', t3: 'Canon', t4: '601H6', t5: 'Đang bị vô hiệu hóa' },
            { t2: 'ABCD', t3: 'Canon', t4: '601H6', t5: 'Đang hoạt động' },
            { t2: 'ABCD', t3: 'Canon', t4: '601H6', t5: 'Đang bị vô hiệu hóa' },
            { t2: 'ABCD', t3: 'Canon', t4: '601H6', t5: 'Đang hoạt động' },
            { t2: 'ABCD', t3: 'Canon', t4: '601H6', t5: 'Đang bị vô hiệu hóa' },
            // Add other data rows as needed
        ];

        return data.map((row, index) => (
            <tr key={index} onClick={handleRowClick}>
                <td>{row.t2}</td>
                <td>{row.t3}</td>
                <td>{row.t4}</td>
                <td>{row.t5}</td>
            </tr>
        ));
    };
    return (
        <div className="SPSO_list-printer">
            <Header />
            <div className="SPSO_main-contentNaNaNa">
                <Menu />
                <div className="SPSO_list-printerNA">
                    <p id="p113">DANH SÁCH MÁY IN</p>
                    <br></br>
                    <div className="search-history-print">
                        <div className="search-his-By">
                            <p id="p2133">Mã máy in</p>
                            <input type="text" id="id-printer" name="id-printer" placeholder='Nhập mã máy in'></input>
                        </div>
                        <div className="search-his-By">
                            <p id="p2133">Thương hiệu</p>
                            <input type="text" id="branch" name="branch" placeholder='Nhập thương hiệu'></input>
                        </div>
                        <div className="search-his-By">
                            <p id="p2133">Địa điểm</p>
                            <input type="text" id="place" name="place" placeholder='Nhập địa điểm'></input>
                        </div>
                    </div>
                    <br></br> <br></br>
                    <table className="info-tableNa113">
                        <thead>
                            <td className="table-contentNa123"><label htmlFor="t2">MÃ MÁY IN</label></td>
                            <td className="table-contentNa123"><label htmlFor="t3">THƯƠNG HIỆU</label></td>
                            <td className="table-contentNa123"><label htmlFor="t4">ĐỊA ĐIỂM</label></td>
                            <td className="table-contentNa123"><label htmlFor="t5">TRẠNG THÁI</label></td>

                        </thead>
                        <tbody>{renderRows()}</tbody>
                    </table>
                    <br></br><br></br>
                    <div className="OptionActionSPSO">
                        <a href="SPSO-manageprinter/SPSO-addprinter" id="p2133">THÊM MÁY IN</a>
                        <a onClick={EnterPrinterID} id="p2133">XÓA MÁY IN</a>
                        <a onClick={EnterPrinterID} id="p2133">VÔ HIỆU HÓA MÁY IN</a>
                        <a onClick={EnterPrinterID} id="p2133">KÍCH HOẠT MÁY IN</a>
                    </div>
                    
                    <br></br><br ></br><br></br>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default SPSO_Xemmayin
