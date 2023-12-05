// Menu.js
import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="side-box">
      <br />
      <p className="side-box-avatar-name">TRẦN NGUYỄN NAM ANH</p>
      <p>MSSV: 2110758</p>
      <p>Khoa học và Kỹ thuật Máy tính</p>
      <br/>
      <br/>
      <br/>
      <a href=""><img className="side-box-button" src={require("../assets/images/button_upload_file.png")} alt="Button1" /></a>
      <a href=""><img className="side-box-button" src={require("../assets/images/button_print.png")} alt="Button2" /></a>
      <a href="/main-page/buy-page"><img className="side-box-button" src={require("../assets/images/button_buypage.png")} alt="Button3" /></a>
      <a href="/main-page/info-search"><img className="side-box-button" src={require("../assets/images/button_search_info.png")} alt="Button4" /></a>
      {/*<p className="side-box-footer">HCMUT_SPSS</p>*/}
    </div>
  );
};

export default Menu;
