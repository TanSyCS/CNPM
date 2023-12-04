import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FPPage from "./pages/FPPage";
import MainPage from "./pages/MainPage";
import BuyPage from "./pages/BuyPage"
import change_pass from "./pages/change_pass"
import HistoryPurchPage from "./pages/HistoryPurchPage"
import PrintInfo from "./pages/PrintInfo"
import PrintScheduleViewer from "./pages/PrintScheduleViewer"
import studen_info from "./pages/student_info"
import update_student_info from "./pages/update_student_info"
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
              <Route path='buy-page' element={<BuyPage />} />
              <Route path = 'info' element = {<PrintInfo/>}/>
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
