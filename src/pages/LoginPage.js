import { useDispatch } from "react-redux";
import Logo from "../components/Logo";
import { loginUSer } from "../redux/apiRequest";
import "./LoginPage.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setUserpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.prevenDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUSer(newUser, dispatch, navigate);
  };
  return (
    <div className="login_page">
      <div className="login_box">
        <div className="headerLI">
          <Logo />
          <div id="htext"> Đăng nhập</div>
        </div>
        <div className="inputs">
          <div className="input">
            <div className="text1">Tài khoản</div>
            <input
              className="input_field"
              type="text"
              placeholder="Nhập email/SĐT"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <div className="text1">Mật khẩu</div>
            <input
              className="input_field"
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => setUserpassword(e.target.value)}
            />
          </div>
        </div>
        <div className="submits">
          <a id="blue_text" className="submit" href="login/forget-pass">
            Quên mật khẩu
          </a>
          <a
            className="submit"
            id="bt"
            href="/main-page"
            onSubmit={handleLogin}
          >
            Đăng nhập
          </a>
          <div className="submit">
            <div className="normal_text">
              Chưa có tài khoản?
              <span>
                {" "}
                <a className="blue_text" href="/sign-up">
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
