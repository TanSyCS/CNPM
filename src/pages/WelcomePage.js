import "./WelcomPage.css";
import Footer from "../components/Footer.js";
import LoginPage from "./LoginPage.js";
function WelcomePage() {
  return (
    <div className="containerWP">
      <div className="theaderWC">
        <img
          src={require("../assets/images/bku.svg").default}
          alt="logo"
          width={150}
          height={150}
        />
        <p id="tid1">ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</p>
        <p id="tid2">TRƯỜNG ĐẠI HỌC BÁCH KHOA</p>
      </div>
      <div className="tbody">
        <div className="tbody_title">
          <p id="tid3">Chào mừng bạn đến với</p>
          <p id="tid4">DỊCH VỤ IN ẤN SINH VIÊN HCMUT_SSPS</p>
        </div>
        <div className="tbody_bt">
          <button id="tbt1">
            <a href='login'>Đăng nhập</a>

           </button>
          <button id="tbt2" >
            <a href='sign-up'>Đăng kí</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default WelcomePage;
