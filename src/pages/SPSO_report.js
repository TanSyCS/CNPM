import React, { useState } from 'react';
import './SPSO_report.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu_SPSO';

const SPSOReport = () => {
    const [mssv, setMssv] = useState('');
    const [printerId, setPrinterId] = useState('');
    const [report, setReport] = useState(null);

    const handleCreateReport = () => {
        if (mssv || printerId) {
            // Fetch printing history based on student ID or printer ID
            // Replace the following lines with your actual API call or data fetching logic
            const fetchedReport = fetchPrintingHistory(mssv, printerId);

            // Update the state with the fetched report
            setReport(fetchedReport);
        } else {
            alert('Please enter student ID or printer ID.');
        }
    };

    const fetchPrintingHistory = (studentId, printerId) => {
        // Replace this with your actual logic to fetch printing history
        // The fetched data should be an object containing relevant information for the report
        // For example, { totalPrints: 5, totalPages: 30, documents: [{name: 'Document 1', pages: 10}, ...] }
        // You may use APIs, Redux, or any state management solution for data fetching
        // For this example, a simple hardcoded response is used
        return {
            totalPrints: 5,
            totalPages: 30,
            documents: [
                { name: 'Document 1', pages: 10 },
                { name: 'Document 2', pages: 15 },
                // ... Add more documents as needed
            ],
        };
    };

    return (
        <div className="SPSO-managesystem">
            <Header />
            <div className="SPSOmain-contentNa123">
                <Menu />
                <div className="SPSOcontentNa123">
                    <p id="p1130SPSO1">THỐNG KÊ BÁO CÁO</p>
                    <div className='searchforreport'>
                        <div className="searchbymssv">
                            <p id="p1130SPSO2">Mã số sinh viên</p>
                            <input
                                type="text"
                                id="mssv"
                                name="mssv"
                                placeholder="Nhập mssv của sinh viên"
                                value={mssv}
                                onChange={(e) => setMssv(e.target.value)}
                            />
                        </div>
                        <div className="searchbymssv">
                            <p id="p1130SPSO2">Mã mãy in</p>
                            <input
                                type="text"
                                id="printerid"
                                name="printerid"
                                placeholder="Nhập mã máy in"
                                value={printerId}
                                onChange={(e) => setPrinterId(e.target.value)}
                            />
                        </div>
                        <div className="searchbymssv">
                            <a id="p1130SPSO3" onClick={handleCreateReport}>
                                TẠO BÁO CÁO
                            </a>
                        </div>
                    </div>

                    {report && (
                        <div className="report-results">
                            <p>Total Prints: {report.totalPrints}</p>
                            <p>Total Pages: {report.totalPages}</p>
                            <p>Documents:</p>
                            <ul>
                                {report.documents.map((doc, index) => (
                                    <li key={index}>{`${doc.name}: ${doc.pages} pages`}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SPSOReport;
