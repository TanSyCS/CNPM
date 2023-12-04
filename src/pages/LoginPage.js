import Logo from "../components/Logo";
import "./LoginPage.css";
function LoginPage() {
  return (
    <div className="login_page">
      <div className="login_box">
        <div className="headerLI">
          <Logo />
          <div className="htext"> Đăng nhập</div>
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
            <div className="text1">Mật khẩu</div>
            <input
              className="input_field"
              type="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
        </div>
        <div className="submits">
          <a
            id="blue_text"
            className="submit"
            href="login/forget-pass"
          >
            Quên mật khẩu
          </a>
          <a
            className="submit"
            id="bt"
            href = '/main-page'   >
            Đăng nhập
          </a>
          <div className="submit">
            <div className="normal_text">
              Đã có tài khoản?
              <span>
                {" "}
                <a
                  className="blue_text"
                  href="/sign-up"
                >
                  {" "}
                  Đăng kí
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
