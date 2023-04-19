import React, { useState } from 'react';
import styles from "../../scss/homePage.module.scss";
import UserComponent from './UserComponent';

function SideBar({shrinkWidth, width}){
    const [sideBarWidth, setSideBarWidth] = useState(width); 
    const [isShrinked, setIsShrinked] = useState(false); 

    const handleShrink = () => {
        if(isShrinked){
            setSideBarWidth(width); 
            setIsShrinked(false);
        }else{
            setSideBarWidth(shrinkWidth); 
            setIsShrinked(true);
        }
    }

    return(
        <>
            <div className={styles.sideBar} style={{width:sideBarWidth, transition:'width 0.3s ease'}}>
                <UserComponent />
                <button onClick={handleShrink}>줄이기</button>
            </div>
        </>
    )
}

export default SideBar;

