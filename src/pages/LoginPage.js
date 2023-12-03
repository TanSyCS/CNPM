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
            href="https://www.youtube.com/watch?v=SqcY0GlETPk"
          >
            Quên mật khẩu
          </a>
          <button className="submit" id="bt">
            Đăng nhập
          </button>
          <div className="submit">
            <div className="normal_text">
              Đã có tài khoản?
              <span>
                {" "}
                <a
                  className="blue_text"
                  href="https://www.youtube.com/watch?v=8QgQKRcAUvM"
                >
                  {" "}
                  Đăng Nhập
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
