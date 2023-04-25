import React from 'react';
import styles from "../../scss/homePage.module.scss";
import { TfiAngleRight } from "react-icons/tfi";
import { useSelector } from 'react-redux';

function Menu({isUnderLine, text, icon}){
    const isShrinked = useSelector((state)=>state.isShrinked)
    return(
        <>
            {   // 사이드바 좁게 넓게
                (isShrinked)
                    ?
                        <div className={styles.menu_el} style={{flexDirection: "column", padding: "8px 0px"}} >
                            <div>{icon}</div>
                            <div className={styles.menu_shrink}>{text}</div> 
                        </div>
                    :

                        <div className={styles.menu_el}>
                            <div>{icon} {text}</div> 
                            <TfiAngleRight/>
                        </div>
            }
            {   // 밑줄
                (isUnderLine)
                    ?
                        <hr className={styles.hr_style} style={{padding:"0px"}}/>
                    :
                        false
            }
        </>
    )
}

export default Menu;

