import "./WelcomPage.css";
import Footer from "../components/Footer.js";
import LoginPage from "./LoginPage.js";
function WelcomePage() {
  return (
    <div className="containerWP">
      <div className="headerWP">
        <img
          src={require("../assets/images/bku.svg").default}
          alt="logo"
          width={150}
          height={150}
        />
        <p id="id1WP">ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</p>
        <p id="id2WP">TRƯỜNG ĐẠI HỌC BÁCH KHOA</p>
      </div>
      <div className="bodyWP">
        <div className="titleWP">
          <div id="id3WP">Chào mừng bạn đến với</div>
          <div id="id4WP">DỊCH VỤ IN ẤN SINH VIÊN HCMUT_SSPS</div>
        </div>
        <div className="tbody_bt">
          <button id="bt1WP">
            <a href="login" id="nText1">
              Đăng nhập
            </a>
          </button>
          <button id="bt2WP">
            <a href="sign-up" id="nText2">
              Đăng kí
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default WelcomePage;
