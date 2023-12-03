import "./WelcomPage.css";
import Footer from "../components/Footer.js";
function WelcomePage() {
  return (
    <div className="container">
      <div className="headerWC">
        <img
          src={require("../assets/images/bku.svg").default}
          alt="logo"
          width={150}
          height={150}
        />
        <p id="id1">ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</p>
        <p id="id2">TRƯỜNG ĐẠI HỌC BÁCH KHOA</p>
      </div>
      <div className="body">
        <div className="body_title">
          <p id="id4">Chào mừng bạn đến với</p>
          <p id="id3">DỊCH VỤ IN ẤN SINH VIÊN HCMUT_SSPS</p>
        </div>
        <div className="body_bt">
          <button id="bt1">Đăng nhập</button>
          <button id="bt2">Đăng kí</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default WelcomePage;
