import React from 'react';
import Header from '../components/Header'
import Main from '../components/MainQuanlimayin';
import Footer from '../components/Footer';
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { Form, Col } from 'react-bootstrap'
import './Quanlimayin.css'
function Quanlimayin()
{
    return (
            <div className="Quanlimayin">
                    <Header/>
                        <div className="main-content ">
                                <Menu/>
                                   <Main/>     
                        </div>
                       
                    <Footer/>
            </div>
        ); 
};
export default Quanlimayin;