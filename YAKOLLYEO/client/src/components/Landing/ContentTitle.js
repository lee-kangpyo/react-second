import React, { useState } from 'react';
import styles from "../../scss/loginPage.module.scss";

function ContentTitle(){
    return(
        <>
            <div className={styles.title_font}>약국에 <span className={styles.mid_line}></span></div>
            <div className={`${styles.title_font} ${styles.bold}`}>혜택을 더:드림 <i className={styles.bg-yak_0}><span className={styles.blind}>약국 훅</span></i></div>
        </>
    )
}

export default ContentTitle;