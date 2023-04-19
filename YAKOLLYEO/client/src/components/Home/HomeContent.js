import React, { useState } from 'react';
import styles from "../../scss/homePage.module.scss";
import SideBar from './SideBar';

function HomeContent(){
    return(
        <div className={styles.home_container}>
            <SideBar width="300px" shrinkWidth="100px"/>
            <div className={styles.main}>홈입니다.</div>
        </div>
    )
}

export default HomeContent;

