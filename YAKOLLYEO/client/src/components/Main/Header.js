import React, { useState } from 'react';
import "../../scss/login.scss";
import logo from '../../img/login/logo.png'



function Header(){
    return(
        
        <div className='header'>
            <div className="header_contents">
                <img
                alt="logo"
                className="logo"
                src={logo}
                />
            </div>
        </div>
    )

}

export default Header;