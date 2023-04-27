import React from 'react';

import logo from '../../img/login/logo.png'
import Search from './Search';
import styles from "../../scss/loginPage.module.scss";

function Header({isSearchEl=false}){

    return(
        <div className={styles.header}>
            <div className={styles.header_contents}>
                <img
                    alt="logo"
                    className={styles.logo}
                    src={logo}
                />
                {(isSearchEl)?<Search />:false}
            </div>
        </div>
    )

}

export default Header;