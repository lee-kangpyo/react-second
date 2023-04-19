import React, { useState } from 'react';
import styles from "../../scss/homePage.module.scss";

function UserComponent({shrinkWidth, width}){

    return(
        <div className={styles.user_info}>
            <div>윤경약국님</div>
            <div>낱알반품포인트</div>
            <div>100</div>
            <div>예치금</div>
            <div>100</div>
            <div>충전하기 버튼</div>
            <div>내역보기</div>
            <div>로그아웃</div>
        </div>
    )
}

export default UserComponent;

