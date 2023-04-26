import React, { useState } from 'react';
import styles from "../../scss/loginPage.module.scss";

function ContentBox({idx, title, contents}){
    return(
        <>
            <div className={styles.box_layout}>
                <p>0{idx + 1}</p>
                <p className={styles.title} dangerouslySetInnerHTML={{__html:contents.title}} />
                <p className={styles.content} dangerouslySetInnerHTML={{__html:contents.contents}} />
                <i className={contents.icon}><span className={styles.blind}>선물상자</span></i>
            </div>
        </>
    )
}

export default ContentBox;

