import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="align">
        <div className="div1">
          <div className="logo-container">
            <img
              src={require("../assets/images/bku.svg").default}
              alt="logo"
              width={70}
              height={70}
            />
            <p id="Tp">HCMUT_SPSS</p>
          </div>
          <div>
            <p id="hl">Bản quyền thuộc trường Đại học Bách Khoa - ĐHQG-HCM</p>
          </div>
        </div>
        <div className="div2">
          <p id="hl">Website</p>
          <a id="Tp" href="https://hcmut.edu.vn/">
            {" "}
            HCMUT
          </a>
          <a id="Tp" href="https://mybk.hcmut.edu.vn/my/index.action">
            {" "}
            MyBK
          </a>
          <a id="Tp" href="https://e-learning.hcmut.edu.vn/">
            {" "}
            BKeL
          </a>
          <a id="Tp" href="https://mybk.hcmut.edu.vn/bksi/public/vi/">
            {" "}
            BKSI
          </a>
        </div>
        <div className="div3">
          <p id="hl">Liên hệ</p>
          <p id="Tp">Cơ sở 1: 268 Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM</p>
          <p id="Tp">
            Cơ sở 2: Khu phố Tân Lập, Phường Đông Hòa, Tp. Dĩ An, Tỉnh Bình
            Dương
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
