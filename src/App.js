import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FPPage from "./pages/FPPage";
import MainPage from "./pages/MainPage";
import BuyPage from "./pages/BuyPage"
import HistoryPurchPage from "./pages/HistoryPurchPage"
import PrintInfo from "./pages/PrintInfo"
import PrintScheduleViewer from "./pages/PrintScheduleViewer"
import Student_info from "./pages/student_info"
import Update_student_info from "./pages/update_student_info"
import Quanlimayin from "./pages/Quanlimayin"
import Xemmayin from "./pages/Xemmayin"
import Datlichin from "./pages/Datlichin"
import Datlichin2 from "./pages/Datlichin2"
import Xemlichsu from "./pages/xemlichsuin";
import BuyPageInfo from "./pages/buypage_detail"
import PrinterInfo from "./pages/PrinterInfo"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />

          <Route path='login'>
            <Route index element={<LoginPage />} />
            <Route path='sign-up' element={<SignupPage />} />
            <Route path='forget-pass' element={<FPPage />} />
          </Route>

          <Route path='main-page'>
            <Route index element={<MainPage />} />
            <Route path='buy-page' element={<BuyPage />} />

            <Route path='info-view'>
              <Route index element={<Xemlichsu />} />
              <Route path='detail-info-print' element={<PrintInfo />} />
            </Route>

            <Route path='printer-view'>
              <Route index element={<Xemmayin />} />
              <Route path='detail-printer' element={<PrinterInfo />} />
            </Route>

            <Route path='scheduler-order' element={<Datlichin />} />
            <Route path='scheduler-order2' element={<Datlichin2 />} />

            <Route path='history-purch-page'>
              <Route index element={<HistoryPurchPage />} />
              <Route path='detail-info-buypage' element={<BuyPageInfo />} />
            </Route>
            
            <Route path='stu-info'>
              <Route index element={<Student_info />} />
              <Route path='update-student-info' element={<Update_student_info />} />
            </Route>
          </Route>

          <Route path='sign-up' element={<SignupPage />} />
          <Route path='login' element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
