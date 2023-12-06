// Menu.js
import React, { useState } from 'react'; // Add useState import
import './Menu.css';
import Options from './option'; // Make sure the path is correct

const Menu = () => {
  const [showOption, setShowOption] = useState(false);

  const handleToggleOption = () => {
    setShowOption(!showOption);
  };

  const handleCloseOption = () => {
    setShowOption(false);
  };

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
      <a href="/main-page/scheduler-order"><img className="side-box-button" src={require("../assets/images/button_print.png")} alt="Button2" /></a>
      <a href="/main-page/buy-page"><img className="side-box-button" src={require("../assets/images/button_buypage.png")} alt="Button3" /></a>
      <a onClick={handleToggleOption}><img className="side-box-button" src={require("../assets/images/button_search_info.png")} alt="Button4" /></a>
      {/*<p className="side-box-footer">HCMUT_SPSS</p>*/}
      { showOption && <Options onClose={handleCloseOption} /> }
    </div>
  );
};

export default Menu;
