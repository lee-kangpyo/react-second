import React from 'react';
import styles from "../../scss/homePage.module.scss";
import KB from "../../img/KB_logo.png"

function BankInfo(){
    return(
        <div className={styles.sideBar_Container} >
            <div className={styles.bank_info}>
                <div style={{marginBottom:"8px"}}>전용가상계좌</div>
                <div className={styles.bk}>
                    <img src={KB} className={styles.bank_Icon} /><span style={{color:"#B7B9C9"}}>예금주</span> <span>(주)룩인사이트</span></div>
                <div>국민은행 12345678901234</div>
            </div>
        </div>
    )
}

export default BankInfo;