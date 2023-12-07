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
            <p>MSNV: 1100011</p>
            <br></br>
            <br />
            <br />
            <a href="/main-page/SPSO-manageprinter"><img className="side-box-button" src={require("../assets/images/Quản lý máy in-icon.png")} alt="Button1" /></a>
            <br></br>
            <a href="/main-page/SPSO-configsystem"><img className="side-box-button" src={require("../assets/images/Quản lý cấu hình-icon.png")} alt="Button2" /></a>
            <br></br>
            <a href="/main-page/SPSO-report"><img className="side-box-button" src={require("../assets/images/Báo cáo-icon.png")} alt="Button3" /></a>
            <br></br>
            <a onClick={handleToggleOption}><img className="side-box-button" src={require("../assets/images/Xem lịch sử in ấn-icon.png")} alt="Button4" /></a>
            {/*<p className="side-box-footer">HCMUT_SPSS</p>*/}
            {showOption && <Options onClose={handleCloseOption} />}
        </div>
    );
};

export default Menu;
