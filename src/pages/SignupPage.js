import Logo from "../components/Logo";
import "./SignupPage.css";
function SignupPage() {
  return (
    <div className="tcontainer">
      <div className="tboxSU">
        <div className="theaderSU">
          <Logo />
          <div className="thText"> Đăng kí</div>
        </div>
        <div className="trow">
          <div className="input">
            <div className="ttext1">Họ và tên</div>
            <input
              className="tinput_field"
              type="text"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="input">
            <div className="ttext1">Email</div>
            <input
              className="tinput_field"
              type="text"
              placeholder="Nhập email"
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
            />
          </div>

          <div className="input">
            <div className="ttext1">Mật khẩu</div>
            <input
              className="tinput_field"
              type="password"
              placeholder="Nhập mật khẩu"
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
          <button className="tsubmit" id="tbt">
            {" "}
            Đăng kí
          </button>
        </div>
        <div className="tsubmit">
          <div className="normal_text">
            Đã có tài khoản?
            <span>
              <a href="/login">
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
