import React, { useState } from 'react';
import LoginForm from './LoginForm';
import styles from "../../scss/loginPage.module.scss";

function LoginBar(){
    return(
        <>
            <div className={styles.login_container}>
                <p style={{marginBottom: "2rem", fontSize: "28px"}}>로그인</p>
                <LoginForm/>
                <div style={{textAlign:"center" , marginBottom: "32px"}}>
                    <i className={styles["bg-first_visit"]}><span className={styles.blind}>처음 오셨나요?</span></i>
                </div>
                <div className={styles.contact_us}>
                    <p>고객상담센터</p>
                    <div></div>
                        <p className={styles.core}><i className={`${styles["bg-call_icon"]} ${styles["mr-1"]}`}><span className={styles.blind}>전화기</span></i>Tel. 070-8158-1108</p>
                    <p className={styles.core}><i className={`${styles["bg-fax_icon"]} ${styles["mr-1"]}`}><span className={styles.blind}>팩스</span></i>Fax. 070-8158-1108</p>
                    <div></div>
                    <p className={styles.sub}><i className={`${styles["bg-mail_icon"]} ${styles["mr-1"]}`}><span className={styles.blind}>메일</span></i>help@lookinsight.co.kr</p>
                    <div></div>
                    <p className={styles.sub}>평일 09시~18시 (공휴일 휴무)</p>
                </div>
            </div>
        </>
    );
}

export default LoginBar;