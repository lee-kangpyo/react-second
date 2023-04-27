import React from 'react';
import styles from "../../scss/homePage.module.scss";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import Button from '../Common/Button';
import { useSelector  } from 'react-redux';


function UserComponent({shrinkWidth, width}){
    const isShrinked = useSelector((state)=>state.isShrinked)
    const btnCharge = {marginBottom:"8px", width:"100%", height:"32px", borderRadius:"8px"};
    const btnShowDeposit = {width:"100%", height:"32px", borderRadius:"8px"};

    return(
        
            (isShrinked)
                ?
                    <div className={styles.sideBar_Container}>
                        <div className={styles.user_title}><span className='bold'>윤경약국</span><span >님</span></div>
                        <div style={{marginBottom:"16px"}}>
                            <Button className={styles.btn_charge} text="충전하기" style={btnCharge} />
                            <Button className={styles.btn_show_deposit} style={btnShowDeposit} text="내역보기" />
                        </div>
                        <div className={styles.user_logout}><MdLogout/>로그아웃</div>
                    </div>
                :
                <div className={styles.sideBar_Container}>
                    <div className={styles.user_title}><span className='bold'>윤경약국</span><span >님</span><IoSettingsSharp className='pointer'/></div>
                    <div className={styles.user_sub_f}>낱알반품포인트</div>
                    <div className={styles.user_sub_v}>123,456,798원</div>
                    <div className={styles.user_sub_f}>예치금</div>
                    <div className={styles.user_sub_v} style={{marginBottom:"16px"}}>100원</div>
                    <div style={{marginBottom:"16px"}}>
                        <Button className={styles.btn_charge} text="충전하기" style={btnCharge} />
                        <Button className={styles.btn_show_deposit} style={btnShowDeposit} text="내역보기" />
                    </div>
                    <div className={styles.user_logout}><MdLogout/>로그아웃</div>
                </div>
        
        
    )
}

export default UserComponent;

