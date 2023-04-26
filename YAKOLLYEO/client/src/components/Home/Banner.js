import React from 'react';

import PHmanual1 from '../../img/home/PH_manual_01.png'
import PHmanual2 from '../../img/home/PH_manual_02.png'
import styles from "../../scss/homePage.module.scss";

function Banner(){
    return(
        <div className={styles.banner}>
            <div>
                <img src={PHmanual1} />
                <img src={PHmanual2} />
            </div>
            <span className={styles.controller}>01 / 02</span>
        </div> 
    )
}

export default Banner;