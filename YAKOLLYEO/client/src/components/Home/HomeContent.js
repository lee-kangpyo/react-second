import React, { useState } from 'react';
import styles from "../../scss/homePage.module.scss";
import SideBar from '../SideBar/SideBar';

import Banner from './Banner';

function HomeContent(){
    return(
        <div className={styles.home_container}>
            <SideBar width="300px" shrinkWidth="100px"/>
            <div className={styles.main}>

                <div className={styles.main_container}>
                    <Banner />
                    <div className={styles.yak_rank}>
                        품절약 리워드 더보기
                        01수다페드정 60mg       -
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeContent;

