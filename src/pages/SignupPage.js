import Logo from "../components/Logo";
import { useState } from "react";
import "./SignupPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/apiRequest";
function SignupPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mssv, setMssv] = useState();
  const [khoa, setKhoa] = useState();
  const [name, setName] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      username: name,
      mssv: mssv,
      khoa: khoa,
    };
    registerUser(newUser, dispatch, navigate);
  };
  return (
    <div className="tcontainer">
      <div className="tboxSU">
        <div className="theaderSU">
          <br></br>
          <Logo />
          <div className="thText1"> Đăng kí</div>
        </div>
        <div className="trow">
          <div className="input">
            <div className="ttext1">Họ và tên</div>
            <input
              className="tinput_field"
              type="text"
              placeholder="Nhập họ và tên"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <div className="ttext1">Email</div>
            <input
              className="tinput_field"
              type="text"
              placeholder="Nhập email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="trow">
          <div className="input">
            <div className="ttext1">Mã số sinh viên</div>
            <input
              className="tinput_field"
              type="text"
              placeholder="Nhập MSSV"
              onChange={(e) => setMssv(e.target.value)}
            />
          </div>
          <div className="input">
            <div className="text1">Số điện thoại</div>
            <input
              className="tinput_field"
              type="text"
              placeholder="Nhập số điện thoại"
            />
          </div>
        </div>
        <div className="trow">
          <div className="input">
            <div className="ttext1">Khoa</div>
            <input
              className="tinput_field"
              type="text"
              placeholder="Nhập khoa"
              onChange={(e) => setKhoa(e.target.value)}
            />
          </div>

          <div className="input">
            <div className="ttext1">Mật khẩu</div>
            <input
              className="tinput_field"
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="trow">
          <div className="input">
            <div className="ttext1">Ngày/tháng/năm sinh</div>
            <input
              className="tinput_field"
              type="date"
              placeholder="  dd/mm/yyyy"
            />
          </div>
          <div className="input">
            <div className="ttext1">Xác nhận mật khẩu</div>
            <input
              className="tinput_field"
              type="password"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
        </div>

        <div className="tsubmits">
          <button className="tsubmit" id="tbt" onSubmit={handleRegister}>
            <a href ='/login' className="theA">Đăng kí</a>
            
          </button>
        </div>
        <div className="tsubmit">
          <div className="normal_text">
            Đã có tài khoản?
            <span>
              <a href="/login"> Đăng nhập</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
