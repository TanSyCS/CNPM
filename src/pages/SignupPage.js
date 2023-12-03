import Logo from "../components/Logo";
import "./SignupPage.css";
function SignupPage() {
  return (
    <div className="container">
      <div className="boxSU">
        <div className="headerSU">
          <Logo />
          <div className="hText"> Đăng kí</div>
        </div>
        <div className="row">
          <div className="input">
            <div className="text1">Họ và tên</div>
            <input
              className="input_field"
              type="text"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="input">
            <div className="text1">Email</div>
            <input
              className="input_field"
              type="text"
              placeholder="Nhập email"
            />
          </div>
        </div>
        <div className="row">
          <div className="input">
            <div className="text1">Mã số sinh viên</div>
            <input
              className="input_field"
              type="text"
              placeholder="Nhập MSSV"
            />
          </div>
          <div className="input">
            <div className="text1">Số điện thoại</div>
            <input
              className="input_field"
              type="text"
              placeholder="Nhập số điện thoại"
            />
          </div>
        </div>
        <div className="row">
          <div className="input">
            <div className="text1">Khoa</div>
            <input
              className="input_field"
              type="text"
              placeholder="Nhập khoa"
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
        <div className="row">
          <div className="input">
            <div className="text1">Ngày/tháng/năm sinh</div>
            <input
              className="input_field"
              type="date"
              placeholder="  dd/mm/yyyy"
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

        <div className="submits">
          <button className="submit" id="bt">
            {" "}
            Đăng kí
          </button>
        </div>
        <div className="submit">
          <div className="normal_text">
            Đã có tài khoản?
            <span>
              <a href="https://www.youtube.com/watch?v=8QgQKRcAUvM">
                {" "}
                Đăng nhập
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
