import React, { useState } from 'react';
import turImg from "../img/tur.png";
import logo from "../img/logo.png";

import "../css/main.css"

function Header(){
    return (
        <>
            <div className='padBox'>
                <div className='contentBox header-layout'>
                    <div className='header-Content'>
                        <img className='logo' src={logo}></img>
                    </div>
                    <div className='header-Content' style={{textAlign:'center'}}>
                        <img className='turIcon' src={turImg}></img>
                        <ul className='menu'>
                            <li>home</li>
                            <li>Magazine</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className='header-Content'></div>
                </div>
            </div>
        </>
    )
}

export default Header;