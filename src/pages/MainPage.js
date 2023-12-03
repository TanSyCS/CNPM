import "./MainPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import TTHT from "../assets/images/TTHT.png";
import CNHT from "../assets/images/CNHT.png";
import CDUT from "../assets/images/CDUD.png";
import HSSD from "../assets/images/HDSD.png";
import KS from "../assets/images/KS.png";
function MainPage() {
  return (
    <div className="containerMain">
      <div className="headerMain">
        <Header />
      </div>
      <div className="bodyMain">
        <Menu />
        <div className="rightBody">
          <div className="row1">
            <div id="s">
              <img src={TTHT} alt="TTHT" />
              <div className="t">THÔNG TIN HỖ TRỢ</div>
            </div>
            <div id="s">
              <img src={CNHT} alt="CNHT" />
              <div className="t">THÔNG BÁO CẬP NHẬT HỆ THỐNG</div>
            </div>
            <div id="s">
              <img className="img" src={CDUT} alt="CDUT" />
              <div className="t">
                THÔNG BÁO CÀI ĐẶT ỨNG DỤNG HCMUT_SPSS TRÊN MOBILE
              </div>
            </div>
          </div>
          <div className="row2">
            <div id="s">
              <img className="img" src={HSSD} alt="TTHT" />
              <div className="t">HƯỚNG DẪN SỬ DỤNG</div>
            </div>
            <div id="s">
              <img className="img" src={KS} alt="KS" />
              <div className="t">KHẢO SÁT</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerMain">
        <Footer />
      </div>
    </div>
  );
}
export default MainPage;
