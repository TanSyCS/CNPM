// Menu.js
import React, { useState } from 'react';
import './option.css';

const Options = ({ onClose }) => {

    return (
        <div className="containerOption">
            <form>
                <button type="button" >
                    Lịch sử in ấn
                </button>
                <br></br>
                <button type="button" >
                    Lịch sử mua trang
                </button>
            </form>
            <div id="message"></div>
        </div>
    );
};

export default Options;
