// Menu.js
import React, { useState } from 'react';
import './option.css';

const Options = ({ onClose }) => {

    return (
        <div className="containerOption">
            <form>
                <button type="button" >
                   <a className='TheA' href = '/main-page/history-print-view'> Lịch sử in ấn</a>
                </button>
                <br></br>
                <button type="button">
                    <a className='TheA' href ='/main-page/history-purch-page'>Lịch sử mua trang</a>
                </button>
            </form>
            <div id="message"></div>
        </div>
    );
};

export default Options;
