import React, { useState } from 'react';
import styles from "../../scss/homePage.module.scss";
import UserComponent from './UserComponent';
import MenuList from './MenuList';
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";

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
                <hr className={styles.hr_style} style={{height:"3px"}}/>
                <MenuList isShrinked={isShrinked}/>
                <button onClick={handleShrink}>{(isShrinked)?<BsChevronBarRight/>:<BsChevronBarLeft/>}</button>
            </div>
        </>
    )
}

export default SideBar;

