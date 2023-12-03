import Logo from "../components/Logo";
import "./FPPage.css";
function FPPage() {
  return (
    <div className="container">
      <div className="box">
        <div className="headerFP">
          <Logo />
          <div className="hText">Quên mật khẩu</div>
        </div>
        <div className="inputs">
          <div className="input">
            <div className="text1">Tài khoản</div>
            <input
              className="input_field"
              type="text"
              placeholder="Nhập email/SĐT"
            />
          </div>
          <div className="input">
            <div className="text1">Mật khẩu mới</div>
            <input
              className="input_field"
              type="password"
              placeholder="Nhập mật khẩu mới"
            />
          </div>
          <div className="input">
            <div className="text1">Xác nhận mật khẩu</div>
            <input
              className="input_field"
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
        </div>
        <button className="bt">Xác nhận</button>
      </div>
    </div>
  );
}
export default FPPage;
