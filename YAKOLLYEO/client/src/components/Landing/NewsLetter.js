import React, { useState } from 'react';
import styles from "../../scss/loginPage.module.scss";

function NewsLetter(){
    return(
        <div className={styles.newsletter}>
            <div>
                <div>
                <i className={styles["bg-news_icon"]}><span className={styles.blind}>뉴스</span></i>
                    <span>약올려 뉴스</span>
                </div>
                <div id="slide">
                    <i className={styles["bg-left"]} name="left"><span className={styles.blind}>left</span></i>
                    <i className={styles["bg-dot"]} name="0"><span className={styles.blind}>dot</span></i>
                    <i className={`${styles["bg-dot"]} ${styles.active}`} name="1"><span className={styles.blind}>dot</span></i>
                    <i className={styles["bg-dot"]} name="2"><span className={styles.blind}>dot</span></i>
                    <i className={styles["bg-right"]} name="right"><span className={styles.blind}>right</span></i>
                </div>
            </div>
        </div>

    )
}
export default NewsLetter;

