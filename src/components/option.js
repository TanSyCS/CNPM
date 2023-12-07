// Menu.js
import React, { useState } from 'react';
import './option.css';

const Options = ({ onClose }) => {

    return (
        <div className="containerOption">
            <form>
                <a href="/main-page/info-view" type="button" >
                    Lịch sử in ấn
                </a>
                <br></br>
                <a href="/main-page/history-purch-page" type="button" >
                    Lịch sử mua trang
                </a>
            </form>
            <div id="message"></div>
        </div>
    );
};

export default Options;
