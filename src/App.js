import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FPPage from "./pages/FPPage";
import MainPage from "./pages/MainPage";
import BuyPage from "./pages/BuyPage"
import Change_pass from "./pages/change_pass"
import HistoryPurchPage from "./pages/HistoryPurchPage"
import PrintInfo from "./pages/PrintInfo"
import PrintScheduleViewer from "./pages/PrintScheduleViewer"
import Student_info from "./pages/student_info"
import Update_student_info from "./pages/update_student_info"
import Quanlimayin from "./pages/Quanlimayin"

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<WelcomePage />} />

            <Route path='login'>
              <Route index element={<LoginPage />} />
              <Route path='sign-up' element={<SignupPage />} />
              <Route path='forget-pass' element={<FPPage />} />
            </Route>
           
            <Route path='main-page'>
              <Route index element={<MainPage />} />
              <Route path ='buy-page' element={<BuyPage />} />
              <Route path ='info-search' element={<PrintInfo />} />
              <Route path = 'printer-view' element = {<printer_view/>}/>
              <Route path='history-purch-page' element={<HistoryPurchPage />} />
              <Route path='stu-info'>
                <Route index element={<Student_info />} />
                <Route path = 'update-student-info' element ={<Update_student_info/>}/>
              </Route>
             </Route>
            
            <Route path='sign-up'>
              <Route index element={<SignupPage />} />
              <Route path = 'login' element={<LoginPage/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>  
    </div>
 );
}

export default App;
