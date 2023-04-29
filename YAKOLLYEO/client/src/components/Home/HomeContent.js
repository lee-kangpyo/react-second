import React from 'react';
import styles from "../../scss/homePage.module.scss";
import SideBar from '../SideBar/SideBar';

import Banner from './Banner';
import RankList from './RankList';

function HomeContent(){
    return(
        <div className={styles.home_container}>
            <SideBar width="300px" shrinkWidth="100px"/>
            <div className={styles.main}>
                <div className={styles.main_container}>
                    <Banner />
                    <RankList/>
                </div>

            </div>
        </div>
    )
}

export default HomeContent;

